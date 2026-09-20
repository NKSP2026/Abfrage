import { authState, login, logout, anonymous, read, write } from './firebase-rest.js?v=20260920v42';
import { defaults, CATALOG_SCHEMA_VERSION } from './data.js?v=20260915v27';
const $=id=>document.getElementById(id);
const TWO_MONTHS_MS=60*24*60*60*1000;
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;", "'":"&#39;"}[m]));}
function twoMonthsAgo(){const d=new Date();d.setMonth(d.getMonth()-2);return d;}
function parseAbortDate(r){
  if(r?.createdAt){
    const t=Date.parse(r.createdAt);
    if(Number.isFinite(t)) return t;
  }
  const m=String(r?.datum||"").match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  const tm=String(r?.uhrzeit||"").match(/^(\d{2})[.:](\d{2})[.:](\d{2})$/);
  if(!m) return NaN;
  const d=new Date(Number(m[3]),Number(m[2])-1,Number(m[1]),tm?Number(tm[1]):0,tm?Number(tm[2]):0,tm?Number(tm[3]):0);
  return d.getTime();
}
async function loadAbortData(){
  const el=$("abortList");
  if(!el)return;
  try{
    const raw=await read("abbruchAbfragen");
    const all=raw&&typeof raw==="object"?raw:{};
    const cutoff=twoMonthsAgo().getTime();
    const keep={}; let removed=0;
    for(const [id,r] of Object.entries(all)){
      const t=parseAbortDate(r);
      if(Number.isFinite(t)&&t<cutoff){removed++;continue;}
      keep[id]=r;
    }
    const rows=Object.entries(keep).map(([id,r])=>({...r,_id:id})).sort((a,b)=>parseAbortDate(b)-parseAbortDate(a));
    el.innerHTML=rows.length?`<div class="abort-table-wrap"><table class="abort-table"><thead><tr><th>Datum</th><th>Uhrzeit</th><th>Abbruchgrund</th><th>Aktion</th></tr></thead><tbody>${rows.map(r=>{const reason=r.abbruchgrund||r.grund||((r.sonstigerGrund)?`Sonstiges: ${r.sonstigerGrund}`:"");return `<tr><td>${esc(r.datum)}</td><td>${esc(r.uhrzeit)}</td><td>${esc(reason)}</td><td><button type="button" class="button danger abort-delete" data-abort-id="${esc(r._id||"")}">Löschen</button></td></tr>`;}).join("")}</tbody></table></div>`:`<div class="module-note">Keine Abbruch-Abfragen innerhalb der letzten zwei Monate.</div>`;
    $("abortCount").textContent=`${rows.length} Einträge`;
    $("abortPdf").disabled=!rows.length;
    window.__NABS_ABORT_ROWS__=rows;
    // Die Liste wird zuerst angezeigt. Die automatische Zwei-Monats-Bereinigung
    // darf die Darstellung nicht blockieren. Nur ein angemeldeter QM1-Administrator
    // darf die entfernten Datensätze anschließend tatsächlich aus Firebase löschen.
    if(removed){
      const a=authState();
      if(a.admin){
        write("abbruchAbfragen",keep).catch(e=>console.warn("Abbruch-Bereinigung",e));
      }
    }
  }catch(e){
    el.innerHTML=`<div class="module-note">Abbruch-Liste konnte nicht geladen werden: ${esc(e.message)}</div>`;
    $("abortCount").textContent="Fehler";
    $("abortPdf").disabled=true;
  }
}
async function deleteAbort(id){
  if(!id)return;
  if(!confirm('Diesen Abbruch-Eintrag wirklich löschen?'))return;
  try{
    await write(`abbruchAbfragen/${encodeURIComponent(id)}`,null);
    await loadAbortData();
  }catch(e){alert('Eintrag konnte nicht gelöscht werden: '+e.message);}
}
function printAbortPdf(){
  const rows=window.__NABS_ABORT_ROWS__||[];
  if(!rows.length)return;
  const w=window.open("","_blank");
  if(!w){alert("Bitte Pop-ups für QM1 erlauben.");return;}
  const body=rows.map(r=>{const reason=r.abbruchgrund||r.grund||((r.sonstigerGrund)?`Sonstiges: ${r.sonstigerGrund}`:"");return `<tr><td>${esc(r.datum)}</td><td>${esc(r.uhrzeit)}</td><td>${esc(reason)}</td></tr>`;}).join("");
  w.document.write(`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>NABS – Abbruch-Abfragen</title><style>body{font-family:Arial,sans-serif;padding:24px;color:#111}h1{font-size:22px;margin:0 0 5px}p{color:#444}table{width:100%;border-collapse:collapse;font-size:11px}th,td{border:1px solid #999;padding:6px;text-align:left;vertical-align:top}th{background:#eee}@media print{body{padding:0}table{font-size:10px}}</style></head><body><h1>NABS – Abbruch-Abfragen</h1><p>Kategorie: Abbruch abfragen · Zeitraum: letzte 2 Monate · Erstellt am ${esc(new Date().toLocaleString("de-DE"))}</p><table><thead><tr><th>Datum</th><th>Uhrzeit</th><th>Abbruchgrund</th></tr></thead><tbody>${body}</tbody></table><script>window.onload=()=>window.print();<\/script></body></html>`);
  w.document.close();
}
async function init(){
  let a=authState();
  if(!a.token) a=await anonymous();
  if(!a?.admin){
    const email=prompt('Administrator-E-Mail:');
    if(email===null){location.href='index.html';return;}
    const pw=prompt('Administrator-Passwort:');
    if(pw===null){location.href='index.html';return;}
    try{a=await login(email,pw);}catch(e){alert('Anmeldung fehlgeschlagen: '+e.message);location.href='index.html';return;}
  }
  $('qmStatus').textContent='● Administrator angemeldet – QM1 freigegeben';
  await loadAbortData();
}

$('logoutBtn').onclick=()=>{logout();location.href='index.html';};
$('abortPdf').onclick=printAbortPdf;
$('abortRefresh').onclick=async()=>{const b=$('abortRefresh');b.disabled=true;b.textContent='↻ Lädt …';try{await loadAbortData();}finally{b.disabled=false;b.textContent='↻ Aktualisieren';}};
$('abortList').addEventListener('click',e=>{const b=e.target.closest('[data-abort-id]');if(b)deleteAbort(b.dataset.abortId);});
$('seedBtn').onclick=async()=>{try{const a=authState();if(!a.admin)throw Error('Bitte zuerst als Administrator anmelden.');const payload={_meta:{schemaVersion:CATALOG_SCHEMA_VERSION,updatedAt:new Date().toISOString()},...defaults.catalog};await write('catalog',payload);alert('✓ Grund-Fragenkatalog wurde in Firebase übernommen.');}catch(e){alert('Speichern fehlgeschlagen: '+e.message);}};
init();
