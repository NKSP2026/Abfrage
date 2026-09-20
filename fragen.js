import { defaults, CATALOG_SCHEMA_VERSION } from './data-bridge.js?v=20260915v24';
import { authState, login, logout, anonymous, read, write } from './firebase-rest.js?v=20260921v60';
import { ADMIN_UID } from './firebase-config.js?v=20260921v03';

const $ = id => document.getElementById(id);
const categories = ['medizin','brand','thl','abc'];
let catalog = null;
let editingId = null;
let notarztRules = {};
const pageParams=new URLSearchParams(location.search);
const linkedReportId=pageParams.get('report')||'';

function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
function setStatus(text){$('status').textContent=text;}
function msg(text){$('message').textContent=text||'';}
function setAuthInfo(a){
  const el=$('authInfo'); if(!el)return;
  if(!a?.token){el.textContent='🔴 Firebase: nicht angemeldet';return;}
  el.textContent=`${a.admin?'🟢 Administrator angemeldet':'🟡 Firebase angemeldet – Lesemodus'} · UID: ${a.uid||'unbekannt'}`;
}

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

function parseDispatchMap(text){
  const out={};
  for(const line of String(text||"").split(/\r?\n/)){
    const i=line.indexOf("=");
    if(i<0) continue;
    const key=line.slice(0,i).trim(), value=line.slice(i+1).trim();
    if(key&&value) out[key]=value;
  }
  return out;
}
function formatDispatchMap(map){
  return Object.entries(map||{}).map(([k,v])=>`${k} = ${v}`).join("\n");
}

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


async function loadReportContext(){
  if(!linkedReportId)return;
  try{
    const a=authState();
    if(!a.admin)return;
    const all=await read('frageMeldungen');
    const r=all?.[linkedReportId];
    if(!r)return;
    const box=$('reportContext'),body=$('reportContextBody');
    if(!box||!body)return;
    box.style.display='block';
    body.innerHTML=`<div class="report-card status-${esc(r.status||'neu')}"><div><b>${esc(r.questionText||r.questionId||'')}</b></div><div class="report-meta"><span class="report-status ${esc(r.status||'neu')}">${esc(r.status||'neu')}</span><span class="badge">${esc(r.reportType||'Sonstiges')}</span>${r.affectedAnswer?`<span class="badge">Antwort: ${esc(r.affectedAnswer)}</span>`:''}</div><div class="ehsi-detail"><b>Begründung:</b> ${esc(r.reason||'–')}${r.suggestion?`<br><br><b>Änderungsvorschlag:</b> ${esc(r.suggestion)}`:''}</div></div>`;
  }catch(e){console.warn('QM-Meldung konnte nicht geladen werden',e);}
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
  $('dispatchMap').value=formatDispatchMap(q.dispatchTextMap);
  $('allowEmpty').checked=!!q.allowEmpty;
  updateOptionsVisibility();
  loadConditionIntoForm(q);
  $('questionSelect').value=id;
  msg('');
}

function clearForm(showMessage=true){
  editingId=null;
  ['id','text','options','suggestionGroup','placeholder','dispatchMap'].forEach(id=>$(id).value='');
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
  const dispatchMap=parseDispatchMap($('dispatchMap').value); if(Object.keys(dispatchMap).length)q.dispatchTextMap=dispatchMap;
  if($('allowEmpty').checked)q.allowEmpty=true;
  return q;
}

async function load(){
  /* V47: Lokalen Grundkatalog sofort bereitstellen. Firebase darf die Bedienoberfläche
     nicht blockieren und darf auch nicht verhindern, dass die NEF-Auswahl gefüllt wird. */
  if(!catalog){
    catalog={...defaults.catalog};
    try{
      renderSelect(editingId);
      renderNefQuestions();
      renderNefList();
    }catch(e){}
  }
  setStatus('Verbinde mit Firebase …');
  let a=authState();
  setAuthInfo(a);
  if(!a.token){try{a=await anonymous();}catch(e){/* Admin kann sich trotzdem anmelden. */}}
  setAuthInfo(a);
  if(!a?.token){
    setStatus('● Lokaler Grundkatalog – für Änderungen bitte Administrator anmelden');
    /* Katalog bleibt lokal verfügbar; nur Firebase-Speichern benötigt Admin-Rechte. */
    renderSelect(editingId);
    renderNefQuestions();
    renderNefList();
    return;
  }
  try{
    const remote=await read('catalog');
    try{notarztRules=await read('notarzt_rules')||{};}catch(e){notarztRules={};}
    catalog={...defaults.catalog};
    if(remote && remote._meta && Number(remote._meta.schemaVersion)>=CATALOG_SCHEMA_VERSION){
      for(const cat of categories)if(remote[cat]&&typeof remote[cat]==='object')catalog[cat]=remote[cat];
    }
    setStatus(a.admin?'● Firebase – Administrator angemeldet':'● Firebase verbunden – Lesemodus');
    renderSelect(editingId);
    renderNefList();
  }catch(e){
    setStatus('⚠️ Firebase-Lesen fehlgeschlagen – lokaler Grundkatalog aktiv');
    catalog={...defaults.catalog};
    renderSelect(editingId);
    renderNefQuestions();
    renderNefList();
    msg('Firebase ist derzeit nicht erreichbar. Der lokale Fragenkatalog bleibt bedienbar; zum Speichern bitte Administrator anmelden.');
  }
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
  try{const a=await login(email,pw);setAuthInfo(a);setStatus('● Firebase – Administrator angemeldet');msg(`✓ Anmeldung erfolgreich. UID: ${a.uid}`);await load();}
  catch(e){alert('Anmeldung fehlgeschlagen: '+e.message);setStatus('⚠️ Anmeldung fehlgeschlagen');}
};
$('logoutBtn').onclick=()=>{
  logout();
  setAuthInfo(authState());
  catalog={...defaults.catalog};
  setStatus('● Abgemeldet – lokaler Grundkatalog aktiv');
  renderSelect(editingId);
  renderNefQuestions();
  renderNefList();
  msg('Abgemeldet. Änderungen in Firebase benötigen Administrator-Anmeldung.');
};
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
    const a=authState();
    setAuthInfo(a);
    if(!a.token)throw Error('Keine Firebase-Anmeldung vorhanden. Bitte als Administrator anmelden.');
    if(!a.admin)throw Error(`Firebase-Konto ist nicht der Administrator. Angemeldete UID: ${a.uid||'unbekannt'} · erwartet: ${ADMIN_UID||'konfiguriert'}`);
    const q=build(),cat=$('category').value;
    await write(`catalog/${cat}/${q.id}`,q);
    await write('catalog/_meta',{schemaVersion:CATALOG_SCHEMA_VERSION,updatedAt:new Date().toISOString()});
    msg('✓ Frage in Firebase gespeichert.');
    editingId=q.id;
    if(linkedReportId){
      try{await write(`frageMeldungen/${linkedReportId}/status`,'erledigt');await write(`frageMeldungen/${linkedReportId}/resolvedAt`,new Date().toISOString());await write(`frageMeldungen/${linkedReportId}/resolvedQuestionId`,q.id);}catch(e){console.warn('QM-Meldung konnte nicht abgeschlossen werden',e);}
    }
    await load();
  }catch(e){msg('⚠️ Speichern fehlgeschlagen: '+e.message);console.error('NABS Firebase save error',e);}
};
$('delete').onclick=async()=>{
  try{
    const a=authState();if(!a.admin)throw Error('Bitte zuerst als Administrator anmelden.');
    const id=$('id').value.trim();if(!id)throw Error('Keine Frage ausgewählt.');
    await write(`catalog/${$('category').value}/${id}`,null);
    await write('catalog/_meta',{schemaVersion:CATALOG_SCHEMA_VERSION,updatedAt:new Date().toISOString()});
    msg('✓ Frage gelöscht.');editingId=null;await load();
  }catch(e){msg('⚠️ '+e.message);}
};


let editingNefRuleId="";

function nefQuestions(){
  return allQuestions().filter(q=>q.__category==="medizin" || q.__category==="brand" || q.__category==="thl" || q.__category==="abc");
}
function renderNefQuestionOptions(questionId,value){
  const q=allQuestions().find(x=>x.id===questionId);
  const opts=q?.options||[];
  $('nefValue').innerHTML=opts.length?opts.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join(''):'<option value="">Keine Auswahl</option>';
  if(value!==undefined && value!==null) $('nefValue').value=String(value);
}
function renderNefQuestions(questionId,value){
  const qs=nefQuestions();
  $('nefQuestion').innerHTML=qs.map(q=>`<option value="${esc(q.id)}">${esc(questionLabel(q))}</option>`).join('');
  if(questionId && qs.some(q=>q.id===questionId)) $('nefQuestion').value=questionId;
  renderNefQuestionOptions($('nefQuestion').value,value);
}
function renderNefList(selectId){
  const entries=Object.values(notarztRules||{}).filter(r=>r&&r.questionId);
  $('nefRuleSelect').innerHTML=entries.length?entries.map(r=>`<option value="${esc(r.id||'')}">${esc(r.reason||'NEF-/Notarzt-Kriterium')} – ${esc(questionLabel(allQuestions().find(q=>q.id===r.questionId)||{text:r.questionId}))}</option>`).join(''):'<option value="">Keine NEF-Regeln geladen</option>';
  if(selectId && entries.some(r=>(r.id||"")===selectId)) $('nefRuleSelect').value=selectId;
  const r=entries.find(x=>(x.id||"")===$('nefRuleSelect').value);
  if(r){
    editingNefRuleId=r.id||'';
    $('nefId').value=editingNefRuleId;
    $('nefQuestion').value=r.questionId||'';
    renderNefQuestionOptions(r.questionId,r.value??r.values);
    $('nefReason').value=r.reason||'';
  }
}
function clearNefForm(){
  editingNefRuleId='';
  $('nefId').value='';
  $('nefReason').value='';
  renderNefQuestions();
  $('nefMessage').textContent='Neue NEF-Regel – Frage und auslösende Antwort auswählen. Die Regel-ID wird automatisch erzeugt.';
}
$('nefQuestion').onchange=()=>renderNefQuestionOptions($('nefQuestion').value,'');
$('nefRuleSelect').onchange=()=>renderNefList($('nefRuleSelect').value);
$('nefNew').onclick=clearNefForm;
$('nefSave').onclick=async()=>{
  try{
    const a=authState(); if(!a.admin) throw Error('Bitte zuerst als Administrator anmelden.');
    const questionId=$('nefQuestion').value, value=$('nefValue').value, reason=$('nefReason').value.trim();
    if(!questionId||!value||!reason) throw Error('Bitte Frage, auslösende Antwort und Begründung ausfüllen.');
    const id=editingNefRuleId || `nef_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
    const rule={id,category:(allQuestions().find(q=>q.id===questionId)?.__category||'medizin'),questionId,value,reason};
    await write(`notarzt_rules/${id}`,rule);
    notarztRules=await read('notarzt_rules')||{};
    $('nefMessage').textContent='✓ NEF-/Notarzt-Regel gespeichert.';
    renderNefList(id);
  }catch(e){$('nefMessage').textContent='⚠️ '+e.message;}
};
$('nefDelete').onclick=async()=>{
  try{
    const a=authState(); if(!a.admin) throw Error('Bitte zuerst als Administrator anmelden.');
    const id=editingNefRuleId; if(!id) throw Error('Bitte zuerst eine bestehende NEF-Regel auswählen.');
    await write(`notarzt_rules/${id}`,null);
    editingNefRuleId='';
    notarztRules=await read('notarzt_rules')||{};
    $('nefMessage').textContent='✓ NEF-/Notarzt-Regel gelöscht.';
    renderNefList();
  }catch(e){$('nefMessage').textContent='⚠️ '+e.message;}
};
(async()=>{updateOptionsVisibility();setConditionMode('always');await load();await loadReportContext();const requestedCategory=pageParams.get('category');const requestedEdit=pageParams.get('edit');if(requestedCategory && categories.includes(requestedCategory)){$('category').value=requestedCategory;renderSelect(requestedEdit||'');}if(requestedEdit && requestedCategory && catalog?.[requestedCategory]?.[requestedEdit]){edit(requestedEdit);window.scrollTo({top:0,behavior:'smooth'});} })();
