import { pushPublic } from './firebase-rest.js?v=20260921v51';
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
const params=new URLSearchParams(location.search);
const qid=params.get('questionId')||'';
const qtext=params.get('questionText')||'';
const category=params.get('category')||'';
if(category && $("suggestionCategory")?.querySelector(`option[value="${CSS.escape(category)}"]`)) $("suggestionCategory").value=category;
if(qid||qtext){ const box=$("contextBox"); box.hidden=false; box.innerHTML=`<b>Bezug zur laufenden Abfrage</b><br>${qid?`Frage: ${esc(qid)}<br>`:''}${qtext?esc(qtext):'Aktuelle Abfrage'}`; }
$("improvementForm").addEventListener('submit',async e=>{
 e.preventDefault(); const title=$("suggestionTitle").value.trim(), text=$("suggestionText").value.trim(), cat=$("suggestionCategory").value;
 if(!title||!text){$("suggestionStatus").textContent='Bitte Betreff und Vorschlag ausfüllen.';return;}
 const btn=$("sendSuggestion"); btn.disabled=true; btn.textContent='⏳ Wird gespeichert …';
 try{
   await pushPublic('verbesserungsvorschlaege',{createdAt:new Date().toISOString(),status:'neu',title,text,category:cat,categoryTitle:$("suggestionCategory").selectedOptions[0]?.textContent||cat,questionId:qid,questionText:qtext,reportedBy:'Einsatzbearbeiter'});
   $("suggestionStatus").textContent='✓ Vorschlag gespeichert. Er wird in QM2 angezeigt.';
   $("suggestionText").value=''; $("suggestionTitle").value='';
 }catch(err){btn.disabled=false;btn.textContent='📤 Vorschlag senden';$("suggestionStatus").textContent='⚠️ '+err.message;}
});