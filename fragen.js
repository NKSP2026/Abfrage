import { defaults, CATALOG_SCHEMA_VERSION } from './data-bridge.js?v=20260915v24';
import { authState, login, logout, anonymous, read, write } from './firebase-rest.js?v=20260915v24';

const $ = id => document.getElementById(id);
const categories = ['medizin','brand','thl','abc'];
let catalog = null;
let editingId = null;

function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
function setStatus(text){$('status').textContent=text;}
function msg(text){$('message').textContent=text||'';}

function allQuestions(){
  const out=[];
  for(const cat of categories){
    for(const q of Object.values(catalog?.[cat]||{})){
      if(q?.id && q?.text) out.push({...q,__category:cat});
    }
  }
  return out.sort((a,b)=>`${a.__category}:${a.order??999999}:${a.text}`.localeCompare(`${b.__category}:${b.order??999999}:${b.text}`,'de'));
}
function questions(){
  return Object.values(catalog?.[$('category').value]||{}).filter(q=>q?.id&&q?.text).sort((a,b)=>(Number(a.order)||999999)-(Number(b.order)||999999));
}
function questionLabel(q){return `${q.__category ? categoryLabel(q.__category)+' – ' : ''}${q.id} – ${q.text}`;}
function categoryLabel(cat){return ({medizin:'🚑 Medizin',brand:'🔥 Brand',thl:'🛠️ THL',abc:'☣️ ABC'})[cat]||cat;}

function conditionSummary(q){
  const c=[];
  if(q.whenQuestion)c.push(`Wenn: ${q.whenQuestion} = ${q.whenValue}`);
  if(q.whenAll)c.push(`Wenn alle ${q.whenAll.length} Bedingungen zutreffen`);
  if(q.whenAny)c.push(`Wenn mindestens eine von ${q.whenAny.length} Bedingungen zutrifft`);
  if(q.whenNot)c.push(`Wenn NICHT: ${q.whenNot.length} Bedingung(en)`);
  if(q.whenTextIncludes)c.push(`Wenn Text passende Wörter enthält`);
  return c.join(' · ')||'immer sichtbar';
}

function renderList(){
  const qs=questions();
  $('list').innerHTML=qs.length ? qs.map(q=>`<div class="manage-row"><div><strong>${esc(q.id)}</strong> – ${esc(q.text)}<div class="hint">Typ: ${esc(q.type||'choice')} | Reihenfolge: ${q.order??''} | ${esc(conditionSummary(q))}</div></div><button class="secondary edit" data-id="${esc(q.id)}">Bearbeiten</button></div>`).join('') : '<p class="hint">Keine Fragen in dieser Kategorie.</p>';
  document.querySelectorAll('.edit').forEach(b=>b.onclick=()=>edit(b.dataset.id));
}

function renderSelect(selectId){
  const qs=questions();
  $('questionSelect').innerHTML=qs.length ? qs.map(q=>`<option value="${esc(q.id)}">${esc(q.id)} – ${esc(q.text)}</option>`).join('') : '<option value="">Keine Fragen</option>';
  if(selectId && qs.some(q=>q.id===selectId)) edit(selectId);
  else if(qs.length) edit(qs[0].id);
  else clearForm(false);
  renderList();
}

function clearConditionRows(){ $('conditionRows').innerHTML=''; }
function addConditionRow(data={}, index=0){
  const row=document.createElement('div');
  row.className='condition-row';
  row.dataset.index=index;
  const qs=allQuestions();
  const selectedId=data.questionId||'';
  const q=qs.find(x=>x.id===selectedId);
  const opts=q?.options||[];
  row.innerHTML=`
    <label>Vorherige Frage
      <select class="cond-question"><option value="">Bitte auswählen …</option>${qs.map(x=>`<option value="${esc(x.id)}">${esc(questionLabel(x))}</option>`).join('')}</select>
    </label>
    <label>Antwort
      <select class="cond-value"><option value="">Bitte auswählen …</option></select>
    </label>
    <button type="button" class="secondary small-btn remove-condition">✕</button>`;
  $('conditionRows').appendChild(row);
  const qSel=row.querySelector('.cond-question');
  const vSel=row.querySelector('.cond-value');
  qSel.value=selectedId;
  fillConditionValues(vSel, q, data.value);
  qSel.onchange=()=>fillConditionValues(vSel, qs.find(x=>x.id===qSel.value), '');
  row.querySelector('.remove-condition').onclick=()=>{row.remove();ensureAtLeastOneConditionRow();};
}
function fillConditionValues(select,q,value){
  const opts=q?.options||[];
  select.innerHTML='<option value="">Bitte auswählen …</option>'+(opts.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join(''));
  if(value!==undefined && value!==null) select.value=String(value);
}
function ensureAtLeastOneConditionRow(){if(!$('conditionRows').children.length)addConditionRow();}

function textConditionRow(data={}){
  const row=document.createElement('div');
  row.className='condition-row three';
  const qs=allQuestions();
  row.innerHTML=`
    <label>Freitext-Frage
      <select class="cond-question"><option value="">Bitte auswählen …</option>${qs.map(x=>`<option value="${esc(x.id)}">${esc(questionLabel(x))}</option>`).join('')}</select>
    </label>
    <label>Wort / Begriff
      <input class="cond-term" placeholder="z.B. Sprachstörung" value="${esc(data.term||'')}">
    </label>
    <button type="button" class="secondary small-btn remove-condition">✕</button>`;
  $('conditionRows').appendChild(row);
  row.querySelector('.cond-question').value=data.questionId||'';
  row.querySelector('.remove-condition').onclick=()=>{row.remove();ensureAtLeastOneConditionRow();};
}

function setConditionMode(mode){
  $('conditionRows').innerHTML='';
  $('addCondition').style.display=mode==='always'?'none':'inline-flex';
  if(mode==='always')return;
  if(mode==='text')textConditionRow();
  else addConditionRow();
}

function loadConditionIntoForm(q){
  let mode='always', rows=[];
  if(q.whenQuestion){mode='single';rows=[{questionId:q.whenQuestion,value:q.whenValue}];}
  else if(Array.isArray(q.whenAll)){mode='all';rows=q.whenAll.map(x=>({questionId:x.questionId,value:x.value}));}
  else if(Array.isArray(q.whenAny)){mode='any';rows=q.whenAny.map(x=>({questionId:x.questionId,value:x.value}));}
  else if(Array.isArray(q.whenNot)){mode='not';rows=q.whenNot.map(x=>({questionId:x.questionId,value:x.value}));}
  else if(Array.isArray(q.whenTextIncludes)){
    mode='text';
    rows=[];
    for(const x of q.whenTextIncludes){
      const terms=Array.isArray(x.terms)?x.terms:[];
      if(!terms.length)rows.push({questionId:x.questionId,term:''});
      else for(const term of terms)rows.push({questionId:x.questionId,term});
    }
  }
  $('conditionMode').value=mode;
  setConditionMode(mode);
  if(mode==='text'){
    $('conditionRows').innerHTML='';
    for(const r of rows)textConditionRow(r);
    ensureAtLeastOneConditionRow();
  }else if(mode!=='always'){
    $('conditionRows').innerHTML='';
    for(const r of rows)addConditionRow(r);
    ensureAtLeastOneConditionRow();
  }
}

function edit(id){
  const q=catalog?.[$('category').value]?.[id];
  if(!q)return;
  editingId=id;
  $('id').value=q.id||id;
  $('order').value=q.order??100;
  $('type').value=q.type||'choice';
  $('text').value=q.text||'';
  $('options').value=Array.isArray(q.options)?q.options.join('\n'):'';
  $('suggestionGroup').value=q.suggestionGroup||'';
  $('placeholder').value=q.placeholder||'';
  $('allowEmpty').checked=!!q.allowEmpty;
  updateOptionsVisibility();
  loadConditionIntoForm(q);
  $('questionSelect').value=id;
  msg('');
}

function clearForm(showMessage=true){
  editingId=null;
  ['id','text','options','suggestionGroup','placeholder'].forEach(id=>$(id).value='');
  $('order').value=100;$('type').value='choice';$('allowEmpty').checked=false;
  $('conditionMode').value='always';setConditionMode('always');
  updateOptionsVisibility();
  if(showMessage)msg('Neue Frage – ausfüllen und speichern.');
}

function updateOptionsVisibility(){
  const type=$('type').value;
  const show=['choice','multi'].includes(type);
  $('optionsWrap').style.display=show?'block':'none';
}

function conditionData(){
  const mode=$('conditionMode').value;
  if(mode==='always')return {};
  if(mode==='text'){
    const rows=[...document.querySelectorAll('.condition-row')].map(row=>({questionId:row.querySelector('.cond-question')?.value.trim(),term:row.querySelector('.cond-term')?.value.trim()})).filter(x=>x.questionId&&x.term);
    if(!rows.length)throw Error('Bitte mindestens eine Freitext-Bedingung vollständig ausfüllen.');
    const grouped={};
    for(const r of rows){(grouped[r.questionId]??=[]).push(r.term);}
    return {whenTextIncludes:Object.entries(grouped).map(([questionId,terms])=>({questionId,terms}))};
  }
  const rows=[...document.querySelectorAll('.condition-row')].map(row=>({questionId:row.querySelector('.cond-question')?.value.trim(),value:row.querySelector('.cond-value')?.value})).filter(x=>x.questionId&&x.value!=='');
  if(!rows.length)throw Error('Bitte mindestens eine Bedingung vollständig ausfüllen.');
  if(mode==='single')return {whenQuestion:rows[0].questionId,whenValue:rows[0].value};
  if(mode==='all')return {whenAll:rows};
  if(mode==='any')return {whenAny:rows};
  if(mode==='not')return {whenNot:rows};
  return {};
}

function build(){
  const id=$('id').value.trim();
  if(!id)throw Error('ID fehlt.');
  const q={id,text:$('text').value.trim(),type:$('type').value,order:Number($('order').value||100)};
  if(!q.text)throw Error('Fragetext fehlt.');
  if(['choice','multi'].includes(q.type)){
    q.options=$('options').value.split(/\n+/).map(x=>x.trim()).filter(Boolean);
    if(!q.options.length)throw Error('Mindestens eine Antwortmöglichkeit angeben.');
  }else{
    const opts=$('options').value.split(/\n+/).map(x=>x.trim()).filter(Boolean);
    if(opts.length)q.options=opts;
  }
  Object.assign(q,conditionData());
  if($('suggestionGroup').value.trim())q.suggestionGroup=$('suggestionGroup').value.trim();
  if($('placeholder').value)q.placeholder=$('placeholder').value;
  if($('allowEmpty').checked)q.allowEmpty=true;
  return q;
}

async function load(){
  setStatus('Verbinde mit Firebase …');
  let a=authState();
  if(!a.token){try{a=await anonymous();}catch(e){/* Admin kann sich trotzdem anmelden. */}}
  if(!a?.token){setStatus('● Nicht angemeldet – bitte Administrator anmelden');catalog=null;renderEmpty();return;}
  try{
    const remote=await read('catalog');
    catalog={...defaults.catalog};
    if(remote && remote._meta && Number(remote._meta.schemaVersion)>=CATALOG_SCHEMA_VERSION){
      for(const cat of categories)if(remote[cat]&&typeof remote[cat]==='object')catalog[cat]=remote[cat];
    }
    setStatus(a.admin?'● Firebase – Administrator angemeldet':'● Firebase verbunden – Lesemodus');
    renderSelect(editingId);
  }catch(e){setStatus('⚠️ Firebase-Lesen fehlgeschlagen');catalog=null;renderEmpty();msg(e.message);}
}
function renderEmpty(){
  $('questionSelect').innerHTML='<option>Keine Daten geladen</option>';
  $('list').innerHTML='<p class="hint">Noch kein Firebase-Katalog geladen. Als Administrator anmelden und anschließend den Grundkatalog übernehmen.</p>';
  clearForm(false);
}

$('category').onchange=()=>{editingId=null;if(catalog)renderSelect();};
$('questionSelect').onchange=e=>{if(e.target.value)edit(e.target.value);};
$('type').onchange=updateOptionsVisibility;
$('conditionMode').onchange=e=>setConditionMode(e.target.value);
$('addCondition').onclick=()=>{
  if($('conditionMode').value==='text')textConditionRow();
  else addConditionRow();
};
$('new').onclick=clearForm;
$('reload').onclick=async()=>{msg('');await load();};
$('loginBtn').onclick=async()=>{
  const email=prompt('Administrator-E-Mail:');if(email===null)return;
  const pw=prompt('Administrator-Passwort:');if(pw===null)return;
  try{await login(email,pw);setStatus('● Firebase – Administrator angemeldet');msg('✓ Anmeldung erfolgreich.');await load();}
  catch(e){alert('Anmeldung fehlgeschlagen: '+e.message);setStatus('⚠️ Anmeldung fehlgeschlagen');}
};
$('logoutBtn').onclick=()=>{logout();setStatus('● Abgemeldet');catalog=null;renderEmpty();msg('Abgemeldet.');};
$('seed').onclick=async()=>{
  const a=authState();
  if(!a.admin){msg('⚠️ Bitte zuerst als Administrator anmelden.');return;}
  try{
    const payload={_meta:{schemaVersion:CATALOG_SCHEMA_VERSION,updatedAt:new Date().toISOString()},...defaults.catalog};
    await write('catalog',payload);
    msg('✓ Der komplette Grund-Fragenbaum wurde erfolgreich in Firebase gespeichert.');
    setStatus('● Firebase – Grundkatalog gespeichert');
    await load();
  }catch(e){msg('⚠️ Speichern fehlgeschlagen: '+e.message);}
};
$('save').onclick=async()=>{
  try{
    const a=authState();if(!a.admin)throw Error('Bitte zuerst als Administrator anmelden.');
    const q=build(),cat=$('category').value;
    await write(`catalog/${cat}/${q.id}`,q);
    await write('catalog/_meta',{schemaVersion:CATALOG_SCHEMA_VERSION,updatedAt:new Date().toISOString()});
    msg('✓ Frage in Firebase gespeichert.');
    editingId=q.id;
    await load();
  }catch(e){msg('⚠️ '+e.message);}
};
$('delete').onclick=async()=>{
  try{
    const a=authState();if(!a.admin)throw Error('Bitte zuerst als Administrator anmelden.');
    const id=$('id').value.trim();if(!id)throw Error('Keine Frage ausgewählt.');
    if(!confirm(`Frage ${id} wirklich löschen?`))return;
    await write(`catalog/${$('category').value}/${id}`,null);
    await write('catalog/_meta',{schemaVersion:CATALOG_SCHEMA_VERSION,updatedAt:new Date().toISOString()});
    msg('✓ Frage gelöscht.');editingId=null;await load();
  }catch(e){msg('⚠️ '+e.message);}
};

(async()=>{updateOptionsVisibility();setConditionMode('always');await load();})();
