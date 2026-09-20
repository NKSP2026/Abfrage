import { authState, login, logout, anonymous, read, write } from './firebase-rest.js?v=20260920v40';
import { defaults, CATALOG_SCHEMA_VERSION } from './data.js?v=20260915v27';
const $=id=>document.getElementById(id);
const TWO_MONTHS_MS=60*24*60*60*1000;
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;", "'":"&#39;"}[m]));}
function twoMonthsAgo(){const d=new Date();d.setMonth(d.getMonth()-2);return d;}
async function loadAbortData(){
  const el=$("abortList");
  if(!el)return;
  try{
    const raw=await read("abbruchAbfragen");
    const all=raw&&typeof raw==="object"?raw:{};
    const cutoff=twoMonthsAgo().getTime();
    const keep={}; let removed=0;
    for(const [id,r] of Object.entries(all)){
      const t=Date.parse(r?.createdAt||"");
      if(Number.isFinite(t)&&t<cutoff){removed++;continue;}
      keep[id]=r;
    }
    if(removed){await write("abbruchAbfragen",keep);}
    const rows=Object.values(keep).sort((a,b)=>String(b?.createdAt||"").localeCompare(String(a?.createdAt||"")));
    el.innerHTML=rows.length?`<div class="abort-table-wrap"><table class="abort-table"><thead><tr><th>Datum</th><th>Uhrzeit</th><th>Benutzer</th><th>Grund</th><th>Sonstiger Grund</th><th>Abfrage</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r.datum)}</td><td>${esc(r.uhrzeit)}</td><td>${esc(r.benutzername)}</td><td>${esc(r.grund)}</td><td>${esc(r.sonstigerGrund||"—")}</td><td>${esc(r.abfrageKategorie||"—")}</td></tr>`).join("")}</tbody></table></div>`:`<div class="module-note">Keine Abbruch-Abfragen innerhalb der letzten zwei Monate.</div>`;
    $("abortCount").textContent=`${rows.length} Einträge`;
    $("abortPdf").disabled=!rows.length;
    window.__NABS_ABORT_ROWS__=rows;
  }catch(e){
    el.innerHTML=`<div class="module-note">Abbruch-Liste konnte nicht geladen werden: ${esc(e.message)}</div>`;
    $("abortCount").textContent="Fehler";
    $("abortPdf").disabled=true;
  }
}
function printAbortPdf(){
  const rows=window.__NABS_ABORT_ROWS__||[];
  if(!rows.length)return;
  const w=window.open("","_blank");
  if(!w){alert("Bitte Pop-ups für QM1 erlauben.");return;}
  const body=rows.map(r=>`<tr><td>${esc(r.datum)}</td><td>${esc(r.uhrzeit)}</td><td>${esc(r.benutzername)}</td><td>${esc(r.grund)}</td><td>${esc(r.sonstigerGrund||"—")}</td><td>${esc(r.abfrageKategorie||"—")}</td></tr>`).join("");
  w.document.write(`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>NABS – Abbruch-Abfragen</title><style>body{font-family:Arial,sans-serif;padding:24px;color:#111}h1{font-size:22px;margin:0 0 5px}p{color:#444}table{width:100%;border-collapse:collapse;font-size:11px}th,td{border:1px solid #999;padding:6px;text-align:left;vertical-align:top}th{background:#eee}@media print{body{padding:0}table{font-size:10px}}</style></head><body><h1>NABS – Abbruch-Abfragen</h1><p>Kategorie: Abbruch abfragen · Zeitraum: letzte 2 Monate · Erstellt am ${esc(new Date().toLocaleString("de-DE"))}</p><table><thead><tr><th>Datum</th><th>Uhrzeit</th><th>Benutzer</th><th>Grund</th><th>Sonstiger Grund</th><th>Abfrage</th></tr></thead><tbody>${body}</tbody></table><script>window.onload=()=>window.print();<\/script></body></html>`);
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
$('abortPdf').onclick=printAbortPdf;$('abortRefresh').onclick=loadAbortData;
$('seedBtn').onclick=async()=>{try{const a=authState();if(!a.admin)throw Error('Bitte zuerst als Administrator anmelden.');const payload={_meta:{schemaVersion:CATALOG_SCHEMA_VERSION,updatedAt:new Date().toISOString()},...defaults.catalog};await write('catalog',payload);alert('✓ Grund-Fragenkatalog wurde in Firebase übernommen.');}catch(e){alert('Speichern fehlgeschlagen: '+e.message);}};
init();
