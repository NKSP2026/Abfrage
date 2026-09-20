import { authState, login, logout, read, write } from './firebase-rest.js?v=20260920v46';
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
let reports={};
let aborts={};
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
  $('reportCount').textContent=`${rows.filter(r=>r.status!=='erledigt').length} offen · ${rows.length} gesamt`;
  $('reportList').innerHTML=visible.length?visible.map(r=>`<article class="report-card status-${esc(r.status||'neu')}">
    <div><strong>${esc(r.questionText||r.questionId||'Unbekannte Frage')}</strong></div>
    <div class="report-meta"><span class="report-status ${esc(r.status||'neu')}">${esc(statusLabel(r.status))}</span><span class="badge">${esc(labels[r.category]||r.category||'Bereich unbekannt')}</span><span class="badge">${esc(r.reportType||'Sonstiges')}</span>${r.affectedAnswer?`<span class="badge">Antwort: ${esc(r.affectedAnswer)}</span>`:''}</div>
    <div class="hint" style="margin-top:8px">ID: ${esc(r.questionId)} · Gemeldet: ${esc(r.reportedBy||'Einsatzbearbeiter')} · ${r.createdAt?new Date(r.createdAt).toLocaleString('de-DE'):''}</div>
    <div class="ehsi-detail"><b>Begründung:</b> ${esc(r.reason||'–')} ${r.suggestion?`<br><br><b>Änderungsvorschlag:</b> ${esc(r.suggestion)}`:''}</div>
    <div class="report-actions"><a class="button" href="fragen.html?category=${encodeURIComponent(r.category||'medizin')}&edit=${encodeURIComponent(r.questionId||'')}&report=${encodeURIComponent(r._id)}">✏️ Frage bearbeiten</a><button type="button" class="secondary report-pruefung" data-id="${esc(r._id)}">🔎 In Prüfung</button><button type="button" class="secondary report-done" data-id="${esc(r._id)}">✅ Erledigt</button><button type="button" class="secondary report-reject" data-id="${esc(r._id)}">✕ Ablehnen</button></div>
  </article>`).join(''):'<div class="module-note">Keine Meldungen für diesen Filter.</div>';
}
function renderAborts(){
  const rows=Object.entries(aborts).map(([id,r])=>({...r,_id:id})).sort((a,b)=>parseDate(b)-parseDate(a));
  $('abortCount').textContent=`${rows.filter(r=>(r.status||'neu')!=='erledigt').length} offen · ${rows.length} gesamt`;
  $('abortList').innerHTML=rows.length?rows.map(r=>`<article class="report-card status-${esc(r.status||'neu')}">
    <div><strong>⏹ Abfrage abgebrochen</strong></div>
    <div class="report-meta"><span class="report-status ${esc(r.status||'neu')}">${esc(statusLabel(r.status))}</span><span class="badge">${esc(r.abbruchgrund||r.grund||'Kein Grund')}</span>${r.categoryTitle?`<span class="badge">${esc(r.categoryTitle)}</span>`:''}</div>
    <div class="hint" style="margin-top:8px">${esc(r.datum||'')} · ${esc(r.uhrzeit||'')} · Gemeldet als Abbruch-Abfrage</div>
    <div class="report-actions"><button type="button" class="secondary abort-pruefung" data-id="${esc(r._id)}">🔎 In Prüfung</button><button type="button" class="secondary abort-done" data-id="${esc(r._id)}">✅ Erledigt</button><button type="button" class="secondary abort-reject" data-id="${esc(r._id)}">✕ Ablehnen</button></div>
  </article>`).join(''):'<div class="module-note">Keine Abbruch-Abfragen vorhanden.</div>';
}
async function setStatus(path,id,status){
  const a=authState();if(!a.admin){alert('Bitte zuerst als Administrator anmelden.');return}
  try{await write(`${path}/${encodeURIComponent(id)}/status`,status);await load();}catch(e){alert('Status konnte nicht gespeichert werden: '+e.message)}
}
async function load(){
  const a=authState();
  if(!a.admin){$('reportList').innerHTML='<div class="module-note">🔐 Administrator-Anmeldung erforderlich, um QM2 zu sehen.</div>';return;}
  try{
    reports=await read('frageMeldungen')||{};
    await cleanupReports();
    // Jeder Öffnung von QM2 beginnt bewusst bei „Neu“.
    $('filterStatus').value='neu';
    $('filterCategory').value='';
    renderReports();
    try{aborts=await read('abbruchAbfragen')||{};}catch(e){aborts={};console.warn('Abbruch-Abfragen konnten nicht geladen werden',e);}
    await cleanupAborts();
    renderAborts();
    $('qmStatus').textContent='● Administrator angemeldet – Meldungen und Abbruch-Abfragen geladen';
  }catch(e){$('qmStatus').textContent='⚠️ Daten konnten nicht geladen werden: '+e.message;$('reportList').innerHTML='<div class="module-note">Firebase-Daten sind nicht erreichbar.</div>';}
}
$('loginBtn').onclick=async()=>{const email=prompt('Administrator-E-Mail:');if(email===null)return;const pw=prompt('Administrator-Passwort:');if(pw===null)return;try{await login(email,pw);await load();}catch(e){alert(e.message)}};
$('logoutBtn').onclick=()=>{logout();location.reload()};
$('filterStatus').onchange=renderReports;$('filterCategory').onchange=renderReports;$('refreshBtn').onclick=load;
$('reportList').addEventListener('click',e=>{const b=e.target.closest('button[data-id]');if(!b)return;const id=b.dataset.id;if(b.classList.contains('report-pruefung'))setStatus('frageMeldungen',id,'pruefung');else if(b.classList.contains('report-done'))setStatus('frageMeldungen',id,'erledigt');else if(b.classList.contains('report-reject'))setStatus('frageMeldungen',id,'abgelehnt');});
$('abortList').addEventListener('click',e=>{const b=e.target.closest('button[data-id]');if(!b)return;const id=b.dataset.id;if(b.classList.contains('abort-pruefung'))setStatus('abbruchAbfragen',id,'pruefung');else if(b.classList.contains('abort-done'))setStatus('abbruchAbfragen',id,'erledigt');else if(b.classList.contains('abort-reject'))setStatus('abbruchAbfragen',id,'abgelehnt');});
load();
