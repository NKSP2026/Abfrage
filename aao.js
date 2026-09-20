import{initFirebase,isAdmin,loginAdmin,logoutAdmin,loadAllData,writeData,defaultAAO,esc}from"./core.js?v=20260920v90";
const $=id=>document.getElementById(id);let data;let currentId="";
const catName={brand:"🔥 Brand",thl:"🛠️ THL",abc:"☣️ ABC / Gefahrgut",grossschaden:"🚨 Sonderlage / Großschaden",medizin:"🚑 Medizin"};
function setResources(list){
  const box=$("resourceList");box.innerHTML="";
  (Array.isArray(list)?list:[]).forEach(v=>addResourceRow(v));
  if(!box.children.length)addResourceRow("");
}
function addResourceRow(value=""){
  const row=document.createElement("div");row.className="aao-resource-row";
  row.innerHTML=`<input class="resource-input" value="${esc(value)}" placeholder="z.B. HLF"><button type="button" class="secondary danger remove-resource">✕ Entfernen</button>`;
  row.querySelector(".remove-resource").onclick=()=>row.remove();$("resourceList").appendChild(row);
}
function getResources(){return [...document.querySelectorAll(".resource-input")].map(x=>x.value.trim()).filter(Boolean)}
function render(){
 const list=Object.values(data.aao||{}).sort((a,b)=>String(a.stichwort||a.id).localeCompare(String(b.stichwort||b.id),"de",{numeric:true}));
 $("list").innerHTML=list.map(x=>`<div class="manage-row"><div><strong>${esc(x.stichwort||x.id)}</strong> – ${esc(x.name||"")}<div class="hint">${esc(catName[x.category]||x.category||"")} · ${Array.isArray(x.resources)?x.resources.length:0} Fahrzeuge</div><div>${(x.resources||[]).map(r=>`<span class="badge">${esc(r)}</span>`).join(" ")}</div>${x.volltext?`<div class="fulltext-preview">Volltext: ${esc(x.volltext)}</div>`:""}</div><div class="row-actions"><button class="secondary edit" data-id="${esc(x.id)}">Bearbeiten</button><button class="secondary danger quick-delete" data-id="${esc(x.id)}">Löschen</button></div></div>`).join("")||'<p class="hint">Noch keine AAO-Einträge vorhanden.</p>';
 document.querySelectorAll(".edit").forEach(b=>b.onclick=()=>edit(b.dataset.id));
 document.querySelectorAll(".quick-delete").forEach(b=>b.onclick=()=>removeEntry(b.dataset.id));
}
function clearForm(){currentId="";["id","stichwort","name","volltext"].forEach(id=>$(id).value="");$("category").value="brand";setResources([]);$("message").textContent="Neuer AAO-Eintrag."}
function edit(id){const x=data.aao?.[id];if(!x)return;currentId=id;$("id").value=x.id||id;$("stichwort").value=x.stichwort||"";$("name").value=x.name||"";$("category").value=x.category||"brand";$("volltext").value=x.volltext||"";setResources(x.resources||[]);window.scrollTo({top:0,behavior:"smooth"})}
async function removeEntry(id){if(!isAdmin()){alert("Bitte zuerst als Administrator anmelden.");return}const x=data.aao?.[id];if(!x)return;if(!confirm(`AAO-Eintrag ${x.stichwort||id} wirklich löschen?`))return;try{await writeData(`aao/${id}`,null);data=await loadAllData();render();if(currentId===id)clearForm();$("message").textContent="AAO-Eintrag gelöscht."}catch(e){alert(e.message)}}
$("addResource").onclick=()=>addResourceRow("");
$("new").onclick=clearForm;
$("save").onclick=async()=>{try{if(!isAdmin())throw Error("Bitte zuerst als Administrator anmelden.");const id=$("id").value.trim();if(!id)throw Error("ID fehlt.");const value={id,stichwort:$("stichwort").value.trim()||id,name:$("name").value.trim(),category:$("category").value,resources:getResources(),volltext:$("volltext").value.trim()};await writeData(`aao/${id}`,value);data=await loadAllData();currentId=id;render();$("message").textContent="AAO gespeichert."}catch(e){alert(e.message)}};
$("delete").onclick=()=>currentId?removeEntry(currentId):alert("Kein bestehender Eintrag ausgewählt.");
$("seed").onclick=async()=>{try{if(!isAdmin())throw Error("Bitte zuerst als Administrator anmelden.");if(!confirm("Die Grundvorlage legt B1–B3, G1–G3, TH1–TH3 und SL an bzw. aktualisiert diese Einträge. Andere AAO-Einträge bleiben erhalten. Fortfahren?"))return;for(const [id,x] of Object.entries(defaultAAO))await writeData(`aao/${id}`,x);data=await loadAllData();render();$("seedStatus").textContent="AAO-Grundvorlage übernommen. Jetzt kannst du jeden Eintrag einzeln anpassen oder löschen."}catch(e){alert(e.message)}};
$("reload").onclick=async()=>{data=await loadAllData();render()};
$("loginBtn").onclick=async()=>{const email=prompt("Administrator-E-Mail:");if(email===null)return;const pw=prompt("Administrator-Passwort:");if(pw===null)return;try{await loginAdmin(email,pw);location.reload()}catch(e){alert(e.message)}};
$("logoutBtn").onclick=async()=>{await logoutAdmin();location.reload()};
(async()=>{await initFirebase($("status"));data=await loadAllData();render();clearForm()})();
