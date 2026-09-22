import { authState, login, logout, read, write, restoreAuthState } from './firebase-rest.js?v=20260922v01';
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
let reports={};
let aborts={};
let suggestions={};
const labels={medizin:'🚑 Medizin',brand:'🔥 Feuerwehr / Brand',thl:'🛠️ THL',abc:'☣️ ABC',aufzug:'🛗 Aufzug',grossschaden:'🚨 Großschaden'};
function statusLabel(s){return ({neu:'Neu',pruefung:'In Prüfung',erledigt:'Erledigt',abgelehnt:'Abgelehnt'})[s]||s||'Neu'}
function twoMonthsAgo(){const d=new Date();d.setMonth(d.getMonth()-2);return d.getTime();}
function parseDate(r){
  if(r?.createdAt){const t=Date.parse(r.createdAt);if(Number.isFinite(t))return t;}
  const m=String(r?.datum||'').match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  const tm=String(r?.uhrzeit||'').match(/^(\d{2})[.:](\d{2})[.:](\d{2})$/);
  if(!m)return NaN;
  return new Date(Number(m[3]),Number(m[2])-1,Number(m[1]),tm?Number(tm[1]):0,tm?Number(tm[2]):0,tm?Number(tm[3]):0).getTime();
}
async function cleanupReports(){
  const cutoff=twoMonthsAgo();
  const deletions=[];
  for(const [id,r] of Object.entries(reports)){
    const t=parseDate(r);
    const status=r?.status||'neu';
    // Neue Meldungen bleiben stehen, bis sie bearbeitet wurden. Erledigte,
    // abgelehnte und in Prüfung befindliche Meldungen älter als zwei Monate werden entfernt.
    if(status!=='neu' && Number.isFinite(t) && t<cutoff) deletions.push(id);
  }
  if(!deletions.length)return;
  await Promise.all(deletions.map(id=>write(`frageMeldungen/${encodeURIComponent(id)}`,null).catch(e=>console.warn('Fragenmeldung konnte nicht automatisch gelöscht werden',e))));
  deletions.forEach(id=>delete reports[id]);
}
async function cleanupAborts(){
  const cutoff=twoMonthsAgo();
  const deletions=[];
  for(const [id,r] of Object.entries(aborts)){
    const t=parseDate(r);
    const status=r?.status||'neu';
    if(status!=='neu' && Number.isFinite(t) && t<cutoff) deletions.push(id);
  }
  if(!deletions.length)return;
  await Promise.all(deletions.map(id=>write(`abbruchAbfragen/${encodeURIComponent(id)}`,null).catch(e=>console.warn('Abbruch konnte nicht automatisch gelöscht werden',e))));
  deletions.forEach(id=>delete aborts[id]);
}
function renderReports(){
  const rows=Object.entries(reports).map(([id,r])=>({...r,_id:id})).sort((a,b)=>String(b.createdAt||'').localeCompare(String(a.createdAt||'')));
  const filter=$('filterStatus').value;
  const cat=$('filterCategory').value;
  const visible=rows.filter(r=>(!filter||r.status===filter)&&(!cat||r.category===cat));
  const openCount=rows.filter(r=>['neu','pruefung'].includes(r.status||'neu')).length;
  $('reportCount').textContent=`${openCount} offen · ${rows.length} gesamt`;
  $('reportList').innerHTML=visible.length?visible.map(r=>{
    const status=r.status||'neu';
    const actions = status==='pruefung'
      ? `<button type="button" class="secondary report-back-neu" data-id="${esc(r._id)}">↩ Prüfung entfernen</button>`
      : status==='neu'
        ? `<button type="button" class="secondary report-pruefung" data-id="${esc(r._id)}">🔎 In Prüfung</button>`
        : '';
    const doneBtn = status!=='erledigt' ? `<button type="button" class="secondary report-done" data-id="${esc(r._id)}">✅ Erledigt</button>` : '';
    const rejectBtn = status!=='abgelehnt' && status!=='erledigt' ? `<button type="button" class="secondary report-reject" data-id="${esc(r._id)}">✕ Ablehnen</button>` : '';
    const deleteBtn = `<button type="button" class="secondary report-delete" data-id="${esc(r._id)}">🗑 Löschen</button>`;
    return `<article class="report-card status-${esc(status)}">
      <div><strong>${esc(r.questionText||r.questionId||'Unbekannte Frage')}</strong></div>
      <div class="report-meta"><span class="report-status ${esc(status)}">${esc(statusLabel(status))}</span><span class="badge">${esc(labels[r.category]||r.category||'Bereich unbekannt')}</span><span class="badge">${esc(r.reportType||'Sonstiges')}</span>${r.affectedAnswer?`<span class="badge">Antwort: ${esc(r.affectedAnswer)}</span>`:''}</div>
      <div class="hint" style="margin-top:8px">ID: ${esc(r.questionId)} · Gemeldet: ${esc(r.reportedBy||'Einsatzbearbeiter')} · ${r.createdAt?new Date(r.createdAt).toLocaleString('de-DE'):''}</div>
      <div class="ehsi-detail"><b>Begründung:</b> ${esc(r.reason||'–')} ${r.suggestion?`<br><br><b>Änderungsvorschlag:</b> ${esc(r.suggestion)}`:''}${r.erledigungsgrund?`<br><br><b>Erledigungsgrund:</b> ${esc(r.erledigungsgrund)}`:''}</div>
      <div class="report-actions"><a class="button" href="fragen.html?category=${encodeURIComponent(r.category||'medizin')}&edit=${encodeURIComponent(r.questionId||'')}&report=${encodeURIComponent(r._id)}">✏️ Frage bearbeiten</a>${actions}${doneBtn}${rejectBtn}${deleteBtn}</div>
    </article>`;
  }).join(''):'<div class="module-note">Keine Meldungen für diesen Filter.</div>';
}
async function deleteReport(id){
  const a=authState(); if(!a.admin){alert('Bitte zuerst als Administrator anmelden.');return;}
  const r=reports[id]; if(!r)return;
  try{await write(`frageMeldungen/${encodeURIComponent(id)}`,null);await load();}catch(e){alert('Fragemeldung konnte nicht gelöscht werden: '+e.message);}
}
async function completeReport(id){
  const a=authState(); if(!a.admin){alert('Bitte zuerst als Administrator anmelden.');return;}
  const r=reports[id]; if(!r)return;
  const existing=r.erledigungsgrund||'';
  const text=prompt('Warum wurde die Fragemeldung erledigt / geklärt?\n\nKurze Begründung eingeben:',existing);
  if(text===null)return;
  const note=text.trim()||'Keine Begründung angegeben.';
  try{
    await write(`frageMeldungen/${encodeURIComponent(id)}/status`,'erledigt');
    await write(`frageMeldungen/${encodeURIComponent(id)}/erledigungsgrund`,note);
    await write(`frageMeldungen/${encodeURIComponent(id)}/erledigtAm`,new Date().toISOString());
    await load();
  }catch(e){alert('Erledigungsstatus konnte nicht gespeichert werden: '+e.message);}
}
function renderAborts(){
  const rows=Object.entries(aborts).map(([id,r])=>({...r,_id:id})).sort((a,b)=>parseDate(b)-parseDate(a));
  const filter=$('abortFilterStatus')?.value||'neu';
  const cat=$('abortFilterCategory')?.value||'';
  const visible=rows.filter(r=>(!filter||(r.status||'neu')===filter)&&(!cat||(r.category||'')===cat));
  $('abortCount').textContent=`${rows.filter(r=>['neu','pruefung'].includes(r.status||'neu')).length} offen · ${rows.length} gesamt`;
  $('abortList').innerHTML=visible.length?visible.map(r=>{
    const status=r.status||'neu';
    const area=labels[r.category]||r.categoryTitle||r.category||'Bereich unbekannt';
    const statusAction=status==='pruefung'
      ? `<button type="button" class="secondary abort-back-neu" data-id="${esc(r._id)}">↩ Prüfung entfernen</button>`
      : status==='neu'
        ? `<button type="button" class="secondary abort-pruefung" data-id="${esc(r._id)}">🔎 In Prüfung</button>`
        : '';
    const doneBtn=status!=='erledigt'?`<button type="button" class="secondary abort-done" data-id="${esc(r._id)}">✅ Erledigt</button>`:'';
    const deleteBtn=`<button type="button" class="secondary abort-delete" data-id="${esc(r._id)}">🗑 Löschen</button>`;
    return `<article class="report-card status-${esc(status)}">
      <div><strong>⏹ Abfrage abgebrochen</strong></div>
      <div class="report-meta"><span class="report-status ${esc(status)}">${esc(statusLabel(status))}</span><span class="badge">${esc(area)}</span><span class="badge">${esc(r.abbruchgrund||r.grund||'Kein Grund')}</span></div>
      <div class="hint" style="margin-top:8px">${esc(r.datum||'')} · ${esc(r.uhrzeit||'')} · Gemeldet als Abbruch-Abfrage</div>
      ${r.erledigungsgrund?`<div class="ehsi-detail"><b>Erledigungsgrund:</b> ${esc(r.erledigungsgrund)}</div>`:''}
      <div class="report-actions">${statusAction}${doneBtn}${deleteBtn}</div>
    </article>`;
  }).join(''):'<div class="module-note">Keine Abbruch-Abfragen für diesen Filter.</div>';
}
async function deleteAbort(id){
  const a=authState();if(!a.admin){alert('Bitte zuerst als Administrator anmelden.');return;}
  const r=aborts[id];if(!r)return;
  try{await write(`abbruchAbfragen/${encodeURIComponent(id)}`,null);await load();}
  catch(e){alert('Abbruch-Abfrage konnte nicht gelöscht werden: '+e.message);}
}
async function completeAbort(id){
  const a=authState();if(!a.admin){alert('Bitte zuerst als Administrator anmelden.');return;}
  const r=aborts[id];if(!r)return;
  const existing=r.erledigungsgrund||'';
  const text=prompt('Warum wurde die Abbruch-Abfrage geklärt / erledigt?\n\nKurze Begründung eingeben:',existing);
  if(text===null)return;
  const note=text.trim()||'Keine Begründung angegeben.';
  try{
    await write(`abbruchAbfragen/${encodeURIComponent(id)}/status`,'erledigt');
    await write(`abbruchAbfragen/${encodeURIComponent(id)}/erledigungsgrund`,note);
    await write(`abbruchAbfragen/${encodeURIComponent(id)}/erledigtAm`,new Date().toISOString());
    await load();
  }catch(e){alert('Erledigungsstatus konnte nicht gespeichert werden: '+e.message);}
}
function renderSuggestions(){
  const rows=Object.entries(suggestions).map(([id,r])=>({...r,_id:id})).sort((a,b)=>parseDate(b)-parseDate(a));
  const open=rows.filter(r=>(r.status||'neu')!=='erledigt' && (r.status||'neu')!=='abgelehnt').length;
  $('suggestionCount').textContent=`${open} offen · ${rows.length} gesamt`;
  $('suggestionList').innerHTML=rows.length?rows.map(r=>`<article class="report-card status-${esc(r.status||'neu')} suggestion-card">
    <div><strong>💡 ${esc(r.title||'Verbesserungsvorschlag')}</strong></div>
    <div class="report-meta"><span class="report-status ${esc(r.status||'neu')}">${esc(statusLabel(r.status))}</span><span class="badge">${esc(r.categoryTitle||r.category||'Allgemein')}</span>${r.questionId?`<span class="badge">Frage: ${esc(r.questionId)}</span>`:''}</div>
    <div class="hint" style="margin-top:8px">Gemeldet: ${esc(r.reportedBy||'Einsatzbearbeiter')} · ${r.createdAt?new Date(r.createdAt).toLocaleString('de-DE'):''}</div>
    <div class="ehsi-detail"><b>Vorschlag:</b><br>${esc(r.text||'–')}</div>
    <div class="report-actions"><button type="button" class="secondary suggestion-pruefung" data-id="${esc(r._id)}">🔎 In Prüfung</button><button type="button" class="secondary suggestion-done" data-id="${esc(r._id)}">✅ Erledigt</button><button type="button" class="secondary suggestion-delete" data-id="${esc(r._id)}">🗑 Löschen</button></div>
  </article>`).join(''):'<div class="module-note">Keine Verbesserungsvorschläge vorhanden.</div>';
}
async function deleteSuggestion(id){
  const a=authState();if(!a.admin){alert('Bitte zuerst als Administrator anmelden.');return;}
  const r=suggestions[id]; if(!r)return;
  try{await write(`verbesserungsvorschlaege/${encodeURIComponent(id)}`,null);await load();}catch(e){alert('Vorschlag konnte nicht gelöscht werden: '+e.message);}
}
async function setStatus(path,id,status){
  const a=authState();if(!a.admin){alert('Bitte zuerst als Administrator anmelden.');return}
  try{await write(`${path}/${encodeURIComponent(id)}/status`,status);await load();}catch(e){alert('Status konnte nicht gespeichert werden: '+e.message)}
}
async function load(){
  try{await restoreAuthState();}catch{}
  const a=authState();
  if(!a.admin){$('reportList').innerHTML='<div class="module-note">🔐 Administrator-Anmeldung erforderlich, um QM2 zu sehen.</div>';return;}
  try{
    reports=await read('frageMeldungen')||{};
    await cleanupReports();
    // Jeder Öffnung von QM2 beginnt bewusst bei „Neu“.
    $('filterStatus').value='neu';
    $('filterCategory').value='';
    $('abortFilterStatus').value='neu';
    $('abortFilterCategory').value='';
    renderReports();
    try{aborts=await read('abbruchAbfragen')||{};}catch(e){aborts={};console.warn('Abbruch-Abfragen konnten nicht geladen werden',e);}
    await cleanupAborts();
    renderAborts();
    try{suggestions=await read('verbesserungsvorschlaege')||{};}catch(e){suggestions={};console.warn('Verbesserungsvorschläge konnten nicht geladen werden',e);}
    renderSuggestions();
    $('qmStatus').textContent='● Administrator angemeldet – Meldungen und Abbruch-Abfragen geladen';
  }catch(e){$('qmStatus').textContent='⚠️ Daten konnten nicht geladen werden: '+e.message;$('reportList').innerHTML='<div class="module-note">Firebase-Daten sind nicht erreichbar.</div>';}
}
$('loginBtn').onclick=async()=>{const email=prompt('Administrator-E-Mail:');if(email===null)return;const pw=prompt('Administrator-Passwort:');if(pw===null)return;try{await login(email,pw);await load();}catch(e){alert(e.message)}};
$('logoutBtn').onclick=()=>{logout();location.reload()};
$('filterStatus').value='neu'; $('filterCategory').value=''; $('abortFilterStatus').value='neu'; $('abortFilterCategory').value=''; $('filterStatus').onchange=renderReports; $('filterCategory').onchange=renderReports; $('abortFilterStatus').onchange=renderAborts; $('abortFilterCategory').onchange=renderAborts; $('refreshBtn').onclick=load;
$('reportList').addEventListener('click',e=>{const b=e.target.closest('button[data-id]');if(!b)return;const id=b.dataset.id;if(b.classList.contains('report-pruefung'))setStatus('frageMeldungen',id,'pruefung');else if(b.classList.contains('report-back-neu'))setStatus('frageMeldungen',id,'neu');else if(b.classList.contains('report-done'))completeReport(id);else if(b.classList.contains('report-reject'))setStatus('frageMeldungen',id,'abgelehnt');else if(b.classList.contains('report-delete'))deleteReport(id);});
$('abortList').addEventListener('click',e=>{const b=e.target.closest('button[data-id]');if(!b)return;const id=b.dataset.id;if(b.classList.contains('abort-pruefung'))setStatus('abbruchAbfragen',id,'pruefung');else if(b.classList.contains('abort-back-neu'))setStatus('abbruchAbfragen',id,'neu');else if(b.classList.contains('abort-done'))completeAbort(id);else if(b.classList.contains('abort-delete'))deleteAbort(id);});
$('suggestionList').addEventListener('click',e=>{const b=e.target.closest('button[data-id]');if(!b)return;const id=b.dataset.id;if(b.classList.contains('suggestion-delete'))deleteSuggestion(id);else if(b.classList.contains('suggestion-pruefung'))setStatus('verbesserungsvorschlaege',id,'pruefung');else if(b.classList.contains('suggestion-done'))setStatus('verbesserungsvorschlaege',id,'erledigt');});
load();
