import{initFirebase,isAdmin,loginAdmin,logoutAdmin,loadAllData,writeData}from"./core.js?v=20260914v16";
const $=id=>document.getElementById(id);let data;
function render(){
 const list=Object.values(data.aao||{}).sort((a,b)=>String(a.stichwort||a.id).localeCompare(String(b.stichwort||b.id)));
 $("list").innerHTML=list.map(x=>`<div class="manage-row"><div><strong>${x.stichwort||x.id}</strong> – ${x.name||""}<div class="hint">${x.category||""}</div><div>${(x.resources||[]).map(r=>`<span class="badge">${r}</span>`).join("")}</div></div><button class="secondary edit" data-id="${x.id}">Bearbeiten</button></div>`).join("");
 document.querySelectorAll(".edit").forEach(b=>b.onclick=()=>edit(b.dataset.id));
}
function edit(id){const x=data.aao?.[id]||{};$("id").value=x.id||id;$("stichwort").value=x.stichwort||"";$("name").value=x.name||"";$("category").value=x.category||"brand";$("resources").value=(x.resources||[]).join("\n")}
$("save").onclick=async()=>{try{if(!isAdmin())throw Error("Bitte zuerst als Administrator anmelden.");const id=$("id").value.trim();if(!id)throw Error("ID fehlt.");await writeData(`aao/${id}`,{id,stichwort:$("stichwort").value.trim(),name:$("name").value.trim(),category:$("category").value,resources:$("resources").value.split(/\n+/).map(x=>x.trim()).filter(Boolean)});data=await loadAllData();render();alert("AAO gespeichert.")}catch(e){alert(e.message)}};
$("new").onclick=()=>["id","stichwort","name","resources"].forEach(id=>$(id).value="");
$("loginBtn").onclick=async()=>{const email=prompt("Administrator-E-Mail:");if(email===null)return;const pw=prompt("Administrator-Passwort:");if(pw===null)return;try{await loginAdmin(email,pw);location.reload()}catch(e){alert(e.message)}};
$("logoutBtn").onclick=async()=>{await logoutAdmin();location.reload()};
(async()=>{await initFirebase($("status"));data=await loadAllData();render()})();
