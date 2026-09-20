import { authState, login, logout, read, write } from './firebase-rest.js?v=20260920v45';
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
let reports={};
const labels={medizin:'🚑 Medizin',brand:'🔥 Feuerwehr / Brand',thl:'🛠️ THL',abc:'☣️ ABC',aufzug:'🛗 Aufzug',grossschaden:'🚨 Großschaden'};
function statusLabel(s){return ({neu:'Neu',pruefung:'In Prüfung',erledigt:'Erledigt',abgelehnt:'Abgelehnt'})[s]||s||'Neu'}
function render(){
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
async function setStatus(id,status){
  const a=authState();if(!a.admin){alert('Bitte zuerst als Administrator anmelden.');return}
  try{await write(`frageMeldungen/${encodeURIComponent(id)}/status`,status);await load();}catch(e){alert('Status konnte nicht gespeichert werden: '+e.message)}
}
async function load(){
  const a=authState();
  if(!a.admin){$('reportList').innerHTML='<div class="module-note">🔐 Administrator-Anmeldung erforderlich, um Fragenmeldungen zu sehen.</div>';return;}
  try{reports=await read('frageMeldungen')||{};$('qmStatus').textContent='● Administrator angemeldet – Fragenmeldungen geladen';render();}
  catch(e){$('qmStatus').textContent='⚠️ Meldungen konnten nicht geladen werden: '+e.message;$('reportList').innerHTML='<div class="module-note">Firebase-Meldungen sind nicht erreichbar.</div>';}
}
$('loginBtn').onclick=async()=>{const email=prompt('Administrator-E-Mail:');if(email===null)return;const pw=prompt('Administrator-Passwort:');if(pw===null)return;try{await login(email,pw);await load();}catch(e){alert(e.message)}};
$('logoutBtn').onclick=()=>{logout();location.reload()};
$('filterStatus').onchange=render;$('filterCategory').onchange=render;$('refreshBtn').onclick=load;
$('reportList').addEventListener('click',e=>{const b=e.target.closest('button[data-id]');if(!b)return;const id=b.dataset.id;if(b.classList.contains('report-pruefung'))setStatus(id,'pruefung');else if(b.classList.contains('report-done'))setStatus(id,'erledigt');else if(b.classList.contains('report-reject'))setStatus(id,'abgelehnt');});
load();
