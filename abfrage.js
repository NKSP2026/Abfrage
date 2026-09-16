// Einsatzabfrage V20 – dynamischer Entscheidungsbaum mit permanenter Aktionsleiste
import { startupDefaults } from "./startup-data.js?v=20260915v39";
import { anonymous, read, authState } from "./firebase-rest.js?v=20260915v39";

const $ = id => document.getElementById(id);
const mainCategories = [
  ["medizin", "🚑 Rettungsdienst"],
  ["brand", "🔥 Feuerwehr"],
  ["thl", "🚗 Verkehrsunfall"],
  ["thl", "🌊 Wasserunfall"],
  ["grossschaden", "🚨 Großschaden"]
];

const medicalInitialQuestions = [
  {id:"med_wem",text:"Geht es um Sie oder um jemand anderen?",type:"choice",order:10,options:["Fremdanrufer (Erwachsen)","Ist selbst der einzige Patient","Fremdanrufer (Kind)"]},
  {id:"med_personen",text:"Wie viele Personen sind betroffen?",type:"choice",order:20,options:["1","2–9","Mehr als 9 / MANV"]},
  {id:"med_spricht",text:"Kann der Patient sprechen?",type:"choice",order:30,options:["Ja","Nein","Unsicher (kann nicht beurteilt werden)","Unbekannter (kein Kontakt / keine Angabe möglich)"]},
  {id:"med_demografie",text:"Wie alt ist der Patient?",type:"demographics",order:40,fields:{ageLabel:"Alter in Jahren",birthdateLabel:"Geburtsdatum",genderLabel:"Geschlecht",genderOptions:["Männlich","Weiblich","Divers","Unbekannt"]}},
  {id:"med_grund",text:"Sagen Sie mir bitte den genauen Grund Ihres Anrufes!",type:"choice",order:50,options:["Allergie / Anaphylaxie","Atemstörung","Bauchschmerzen","Bewusstseinsstörung / Wesensveränderung","Blutungen","Brustschmerzen","Erkrankung / medizinische Hilfeleistung","Geburt / Schwangerschaft","Gefühlsstörung / Lähmung / Sprache / Sehstörung","Herzrhythmusstörungen","Hitze- / Kälteprobleme","Kollaps / Kreislaufstörung","Kopfschmerzen","Krampfanfall","Psychische Erkrankung / Suizid","Sonstige Schmerzen","Unklares Geschehen","Vergiftung","Verletzung","Arbeits- / Betriebs- / Schulunfall"]}
];
const yesNoUnclearOptions=["Ja","Nein","Unsicher (kann nicht beurteilt werden)","Unbekannter (kein Kontakt / keine Angabe möglich)"];
function normalizeChoiceOptions(q){
  if(!q || q.type!=="choice" || !Array.isArray(q.options)) return q;
  const vals=q.options.map(v=>String(v).trim().toLowerCase());
  const isPlainYesNo=vals.length===2 && vals.includes("ja") && vals.includes("nein");
  const hasUnclear=vals.some(v=>v.startsWith("unsicher"));
  const hasUnknown=vals.some(v=>v.startsWith("unbekannt"));
  if(isPlainYesNo || (hasUnclear && hasUnknown && vals.length<=4)) q={...q,options:[...yesNoUnclearOptions]};
  return q;
}
const grossQuestions = [
  {id:"gs_lage",text:"Was ist die Großschadenslage?",type:"choice",order:10,options:["Viele Betroffene / MANV","Großbrand / Flächenlage","Unwetter / Naturereignis","Einsturz / Gebäudeschaden","Sonstige Großschadenslage"]},
  {id:"gs_orte",text:"Wo befindet sich die Lage?",type:"text",order:20,placeholder:"Ort / Straße / Objekt …"},
  {id:"gs_betroffene",text:"Wie viele Personen sind ungefähr betroffen?",type:"number",order:30,placeholder:"Anzahl …"},
  {id:"gs_gefahren",text:"Welche besonderen Gefahren sind bekannt? Mehrere Antworten möglich.",type:"multi",order:40,options:["Feuer / Rauch","Einsturzgefahr","Gefahrstoffe / ABC","Wasser / Überflutung","Strom / Energie","Viele Verletzte / Erkrankte","Keine bekannt / unklar"]},
  {id:"gs_weitere",text:"Was ist sonst noch wichtig?",type:"text",order:50,placeholder:"Weitere Informationen …",allowEmpty:true}
];

let category=null, mode=null, data={catalog:startupDefaults.catalog,notarzt_rules:startupDefaults.notarzt_rules||{},resource_rules:startupDefaults.resource_rules||{},suggestions:startupDefaults.suggestions||{},aao:{},einsatzstichworte:{}}, answers={}, steps=0, reaShown=false, history=[];

function clone(x){try{return structuredClone(x);}catch{return JSON.parse(JSON.stringify(x));}}
function mergeDeep(base,incoming){
  const out=clone(base);
  if(!incoming || typeof incoming!=="object") return out;
  for(const [k,v] of Object.entries(incoming)){
    if(v && typeof v==="object" && !Array.isArray(v) && out[k] && typeof out[k]==="object" && !Array.isArray(out[k])) out[k]=mergeDeep(out[k],v);
    else out[k]=v;
  }
  return out;
}

async function loadLocalCategoryInBackground(){
  if(!category || category==="grossschaden") return false;
  try{
    const mod=await import(`./catalog-${category}.js?v=20260915v39`);
    data.catalog[category]=mod.catalog||{};
    render();
    if($("status")) $("status").textContent="● Abfrage aktiv · Fragenkatalog bereit";
    return true;
  }catch(e){
    console.warn("Lokaler Fragenkatalog konnte nicht nachgeladen werden.",e);
    return false;
  }
}

async function loadRemoteInBackground(){
  try{
    const a=authState().token ? authState() : await anonymous();
    if(!a?.token) return false;
    const paths=["catalog","notarzt_rules","resource_rules","suggestions","aao","einsatzstichworte"];
    const values=await Promise.all(paths.map(async path=>{
      try{
        return [path,await Promise.race([read(path),new Promise((_,rej)=>setTimeout(()=>rej(new Error("timeout")),2500))])];
      }catch(e){ console.warn("Firebase read",path,e); return [path,null]; }
    }));
    let changed=false;
    for(const [path,value] of values){
      if(value===null || value===undefined) continue;
      if(path==="catalog") {
        const version=Number(value?._meta?.schemaVersion||0);
        if(version>=4){ data.catalog=value; changed=true; }
      } else { data[path]=mergeDeep(data[path]||{},value); changed=true; }
    }
    if(changed){ render(); if($("status")) $("status").textContent="● Abfrage aktiv · Firebase-Katalog geladen"; }
    return changed;
  }catch(e){
    console.warn("Remote-Daten nicht verfügbar – lokale Grunddaten bleiben aktiv.",e);
    return false;
  }
}

let startTime=Date.now(), durationTimer=null, remarkDraft="";
let breathTimer=null, breathSeconds=0, breathCount=0, breathRunning=false;

function title(){
  if(mode==="rd") return "🚑 Rettungsdienst";
  if(mode==="fw") return "🔥 Feuerwehr";
  if(mode==="vu") return "🚗 Verkehrsunfall";
  if(mode==="wasser") return "🌊 Wasserunfall";
  if(mode==="grossschaden") return "🚨 Großschaden";
  return mainCategories.find(x=>x[0]===category)?.[1] || category;
}
function matches(actual,expected){
  if(expected==="*") return Array.isArray(actual)?actual.length>0:actual!==undefined&&actual!==null&&String(actual).trim()!=="";
  if(expected===undefined||expected===null||expected==="") return true;
  const wanted=Array.isArray(expected)?expected:String(expected).split(",").map(x=>x.trim());
  if(Array.isArray(actual)) return actual.some(a=>wanted.includes(String(a)));
  return wanted.includes(String(actual));
}
function condition(c){
  if(!c) return true;
  if(c.questionId && !matches(answers[c.questionId],c.values??c.value)) return false;
  if(c.notQuestionId && matches(answers[c.notQuestionId],c.notValues??c.notValue)) return false;
  if(c.textIncludes){const t=String(answers[c.textIncludes.questionId]??"").toLowerCase();if(!(c.textIncludes.terms||[]).some(x=>t.includes(String(x).toLowerCase())))return false;}
  return true;
}
function strokeIndicated(){
  const ls=Array.isArray(answers.leitsymptom)?answers.leitsymptom.map(String):[String(answers.leitsymptom||"")];
  if(ls.includes("Neurologische Auffälligkeiten / möglicher Schlaganfall")) return true;
  const p=String(answers.problem||"").toLowerCase();
  return ["schlaganfall","sprachstörung","sprachstoerung","lähmung","laehmung","gelähmt","gelaehmt","halbseitig","einseitig","mundwinkel","gesichtslähmung","gesichtslaehmung","arm schwach","bein schwach","kraftverlust","taubheit","sehstörung","sehstoerung","doppelbilder","gesichtsfeldausfall","neurolog","nicht sprechen","verwaschene sprache","verwaschen sprechen","wortfindungsstörung","wortfindungsstoerung"].some(t=>p.includes(t));
}
function visible(q){
  if(String(q?.id||"").startsWith("stroke_")&&!strokeIndicated()) return false;
  if(q.whenQuestion&&!matches(answers[q.whenQuestion],q.whenValue)) return false;
  if(q.skipWhenQuestion&&matches(answers[q.skipWhenQuestion],q.skipWhenValue)) return false;
  if(q.whenAll&&!q.whenAll.every(condition)) return false;
  if(q.whenAny&&q.whenAny.length&&!q.whenAny.some(condition)) return false;
  if(q.whenNot&&q.whenNot.some(condition)) return false;
  if(q.whenTextIncludes&&q.whenTextIncludes.length){const ok=q.whenTextIncludes.some(c=>{const t=String(answers[c.questionId]??"").toLowerCase();return(c.terms||[]).some(term=>t.includes(String(term).toLowerCase()));});if(!ok)return false;}
  return true;
}
function questions(){
  if(category==="grossschaden") return grossQuestions;
  let qs=Object.values(data.catalog?.[category]||{}).filter(q=>q?.id&&q?.text).map(normalizeChoiceOptions);
  if(category==="medizin") {
    const byId=new Map(qs.map(q=>[q.id,q]));
    const initial=medicalInitialQuestions.map(q=>byId.get(q.id)?{...q,...byId.get(q.id),order:q.order}:q);
    qs=qs.filter(q=>!medicalInitialQuestions.some(i=>i.id===q.id));
    qs=[...initial,...qs];
  }
  if(mode==="vu"||mode==="wasser") qs=qs.filter(q=>q.id!=="thl_art");
  return qs;
}
function isRiskAnswer(v){
  if(v===undefined||v===null||v==="")return false;
  return (Array.isArray(v)?v:[v]).some(raw=>{const x=String(raw).toLowerCase();return x.includes("ja")||x.includes("unklar")||x.includes("bewusstlos")||x.includes("atemnot")||x.includes("atemstillstand")||x.includes("keine normale")||x.includes("stark")||x.includes("eingeklemmt")||x.includes("eingeschlossen")||x.includes("explosion")||x.includes("ausbreitung")||x.includes("gefähr")||x.includes("mehr als 3 m")||x.includes("ejection")||x.includes("viele verletzt")||x.includes("viele betroffene");});
}
function hasOpenRisk(){return Object.values(answers).some(isRiskAnswer);}
function isBackgroundQuestion(q){return ["medication","allergies","history"].includes(q.id)||String(q.id).includes("extra");}
function isMedicalInitialQuestion(q){
  return category === "medizin" && ["med_wem","med_personen","med_spricht","med_demografie","med_grund"].includes(q.id);
}
function medicalBranchCount(){
  if(category!=="medizin" || answers.med_grund===undefined) return 0;
  const ids=new Set(Object.keys(data?.catalog?.medizin||{}));
  return Object.keys(answers).filter(id=>ids.has(id) && !["med_wem","med_personen","med_spricht","med_demografie","med_grund","verdachtsdiagnose"].includes(id)).length;
}
function nextQuestion(){
  const qs=questions().filter(q=>visible(q)&&answers[q.id]===undefined);
  if(!qs.length)return null;
  const diagnosis=qs.find(q=>q.id==="verdachtsdiagnose");
  const others=qs.filter(q=>q.id!=="verdachtsdiagnose");
  if(category==="medizin" && answers.med_grund!==undefined){
    const branchCount=medicalBranchCount();
    if(branchCount>=10) return diagnosis||null;
  }else if(category!=="medizin" && steps>=10){
    return diagnosis||null;
  }
  const pool=category==="medizin" ? others : (steps>=10?others.filter(q=>!isBackgroundQuestion(q)):others);
  return pool[0]||diagnosis||null;
}
function pushHistory(){history.push({answers:structuredClone(answers),steps,reaShown});}
function updateDuration(){
  const sec=Math.max(0,Math.floor((Date.now()-startTime)/1000));
  const mm=String(Math.floor(sec/60)).padStart(2,"0"), ss=String(sec%60).padStart(2,"0");
  if($("duration")) $("duration").textContent=`${mm}:${ss}`;
}
function durationText(){const sec=Math.max(0,Math.floor((Date.now()-startTime)/1000));return `${Math.floor(sec/60)}:${String(sec%60).padStart(2,"0")}`;}

function diagnosisSuggestion(){
  if(category!=="medizin")return null;
  const g=String(answers.med_grund||"");
  const p=String(answers.problem||"").toLowerCase();
  if(g==="Gefühlsstörung / Lähmung / Sprache / Sehstörung" || Object.keys(answers).some(k=>k.startsWith("neuro_"))) return {primary:"Möglicher akuter neurologischer Notfall",alternatives:["Möglicher Schlaganfall / TIA","Andere akute neurologische Ursache"]};
  if(g==="Brustschmerzen") return {primary:"Akuter Brustschmerz – kardiale Ursache möglich",alternatives:["Möglicher akuter Koronarsyndrom (ACS)","Andere Ursache für Brustschmerz"]};
  if(g==="Atemstörung") return {primary:"Akute Atemstörung – Ursache unklar",alternatives:["Atemwegserkrankung / Asthma / COPD","Herz-/Lungenbedingte Atemnot"]};
  if(g==="Bauchschmerzen") {
    if(Object.keys(answers).some(k=>k.startsWith("bauch_ileus_")) || String(answers.bauch_19||"")==="Ja") return {primary:"Möglicher Ileus / relevante Obstipation – Ursache unklar",alternatives:["Gastrointestinale Ursache","Andere akute abdominale Ursache"]};
    return {primary:"Akute Bauchbeschwerden – Ursache unklar",alternatives:["Magen-Darm-Erkrankung","Andere akute abdominale Ursache"]};
  }
  if(g==="Blutungen") return {primary:"Akute Blutung – Blutungsquelle gemäß Abfrage",alternatives:["Gastrointestinale Blutung","Andere Blutungsquelle"]};
  if(g==="Allergie / Anaphylaxie") return {primary:"Allergische Reaktion – Schweregrad gemäß Abfrage",alternatives:["Mögliche Anaphylaxie","Andere Ursache"]};
  if(g==="Bewusstseinsstörung / Wesensveränderung") return {primary:"Akute Bewusstseins-/Wesensveränderung – Ursache unklar",alternatives:["Neurologische Ursache","Intoxikation / Stoffwechselursache"]};
  if(g==="Herzrhythmusstörungen") return {primary:"Symptomatische Herzrhythmusstörung möglich",alternatives:["Tachykarde Rhythmusstörung","Bradykarde Rhythmusstörung"]};
  if(g==="Kollaps / Kreislaufstörung") return {primary:"Synkope / Kreislaufstörung – Ursache unklar",alternatives:["Kardiale Ursache","Andere Kreislaufursache"]};
  if(g==="Kopfschmerzen") return {primary:"Akuter Kopfschmerz – Ursache unklar",alternatives:["Migräne / primärer Kopfschmerz","Sekundäre neurologische Ursache"]};
  if(g==="Krampfanfall") return {primary:"Krampfanfall / epileptisches Ereignis möglich",alternatives:["Erstmaliger Krampfanfall","Andere Ursache"]};
  if(g==="Psychische Erkrankung / Suizid") return {primary:"Akute psychische Krise – Gefährdung gemäß Abfrage",alternatives:["Suizidale Krise","Akute psychische/psychiatrische Symptomatik"]};
  if(g==="Vergiftung") {
    if(answers.vergiftung_sub==="Pilz / unbekannter Pilz" || Object.keys(answers).some(k=>k.startsWith("pantherina_"))) return {primary:"Mögliche Pilzintoxikation / Pantherina-Syndrom",alternatives:["Andere Intoxikation","Unklare Vergiftung"]};
    return {primary:"Mögliche Intoxikation / Vergiftung",alternatives:["Unklare Exposition","Andere Ursache"]};
  }
  if(g==="Geburt / Schwangerschaft") return {primary:"Geburtshilflicher Notfall / Schwangerschaftsbeschwerden",alternatives:["Geburtsbeginn","Andere geburtshilfliche Ursache"]};
  if(g==="Verletzung" || g==="Arbeits- / Betriebs- / Schulunfall") return {primary:"Akute Verletzung / Trauma – Schweregrad gemäß Abfrage",alternatives:["Kopf-/Wirbelsäulentrauma","Extremitäten-/Weichteilverletzung"]};
  if(g==="Hitze- / Kälteprobleme") return {primary:"Akute Temperatur-/Expositionsstörung",alternatives:["Überwärmung","Unterkühlung"]};
  if(g==="Sonstige Schmerzen") return {primary:"Akuter Schmerz unklarer Ursache",alternatives:["Schmerzbedingter Notfall","Andere Ursache"]};
  if(p.includes("schlaganfall")||p.includes("lähmung")||p.includes("sprachstörung")) return {primary:"Möglicher akuter neurologischer Notfall",alternatives:["Möglicher Schlaganfall / TIA","Andere Ursache"]};
  return {primary:"Unklare Ursache",alternatives:["Keine eindeutige Verdachtsdiagnose"]};
}

function phaseText(){
  if(reaShown) return "Erste Hilfe / Reanimation";
  if(steps===0) return "Ersteinschätzung";
  if(category==="medizin" && answers.med_grund===undefined) return "Medizinische Ersteinschätzung";
  if(category==="medizin" && medicalBranchCount()>=10) return "Risikoanalyse / Ergebnis";
  if(category==="medizin" && (answers.med_spricht!==undefined || answers.med_demografie!==undefined)) return "Strukturierte medizinische Abfrage";
  if(steps>=10) return "Risikoanalyse / Abschluss";
  return "Strukturierte Notrufabfrage";
}
function updatePhase(){
  const el=$("phase");
  if(el) el.textContent=phaseText();
}

function render(){
  if(reaShown)return;
  // Zurück-Button bei jedem Rendern korrekt aktivieren/deaktivieren.
  // Die History enthält den vollständigen Zustand vor der jeweils letzten Antwort.
  const previousBtn=$("previousBtn");
  if(previousBtn){
    previousBtn.disabled=history.length===0;
    previousBtn.title=history.length?"Zur vorherigen Frage zurückgehen":"Noch keine vorherige Frage vorhanden";
  }
  const q=nextQuestion();
  if(!q){finish();return;}
  $("categoryTitle").textContent=title();
  $("progress").textContent=`Frage ${steps+1}`;
  updatePhase();
  $("questionText").textContent=q.text;
  const area=$("answerArea");area.innerHTML="";
  if(q.id.startsWith("erkrankung_Fieber_")){
    const note=document.createElement("div");
    note.className="guideline-note";
    note.innerHTML="<b>🌡️ Fiebermanagement bei Kindern/Jugendlichen:</b> Die Temperaturhöhe allein ist kein Grund, Fieber zu senken. Entscheidend sind Befinden und Warnzeichen. Bei warmen Händen und Füßen und deutlichem Unwohlsein können körperwarme Wadenwickel erwogen werden; bei kalten Händen/Füßen, Frieren oder Schüttelfrost nicht kühlen.";
    area.appendChild(note);
  }
  if(q.type==="choice"){
    const wrap=document.createElement("div");
    const optionCount=(q.options||[]).filter(v=>String(v).trim()).length;
    wrap.className="answer-options"+(optionCount>=4?" answer-options-2col":"");
    (q.options||[]).filter(v=>String(v).trim()).forEach(v=>{const b=document.createElement("button");b.type="button";b.className="answer-option";b.textContent=v;b.onclick=()=>{pushHistory();answers[q.id]=v;steps++;if(category==="medizin"&&answers.bewusstsein==="Bewusstlos"&&["Keine normale Atmung","Atemstillstand"].includes(answers.atmung))return showREA();render();};wrap.appendChild(b);});
    area.appendChild(wrap);
  }else if(q.type==="multi"){
    const wrap=document.createElement("div");
    const optionCount=(q.options||[]).filter(v=>String(v).trim()).length;
    wrap.className="answer-options multi-options"+(optionCount>=4?" answer-options-2col":"");
    const selected=new Set(Array.isArray(answers[q.id])?answers[q.id]:[]);
    (q.options||[]).forEach(v=>{const b=document.createElement("button");b.type="button";b.className="answer-option multi-option";const paint=()=>b.textContent=(selected.has(v)?"✓ ":"")+v;paint();b.onclick=()=>{selected.has(v)?selected.delete(v):selected.add(v);paint();};wrap.appendChild(b);});
    const actions=document.createElement("div");actions.className="free-actions";const next=document.createElement("button");next.className="next-free";next.textContent="Weiter →";next.onclick=()=>{if(!selected.size)return;pushHistory();answers[q.id]=[...selected];steps++;render();};const none=document.createElement("button");none.className="secondary unknown-btn";none.textContent="Keine / unklar";none.onclick=()=>{pushHistory();answers[q.id]=["Unklar"];steps++;render();};actions.append(next,none);area.append(wrap,actions);
  }else if(q.type==="demographics") {
    const box=document.createElement("div"); box.className="demographics-box";
    const d=answers[q.id]&&typeof answers[q.id]==="object"?answers[q.id]:{};
    box.innerHTML=`<div class="demo-grid"><label>Alter in Jahren<input id="demoAge" class="free-input" type="number" min="0" max="120" inputmode="numeric" value="${d.age??""}" placeholder="z. B. 66"></label><label>Geburtsdatum<input id="demoBirth" class="free-input birthdate-keyboard" type="text" inputmode="text" autocomplete="off" autocorrect="off" spellcheck="false" maxlength="10" value="${d.birthdate?String(d.birthdate).split("-").reverse().join("."):""}" placeholder="TT.MM.JJJJ"></label></div><div class="demo-gender"><div class="answer-label">Geschlecht</div><div class="gender-options"></div></div>`;
    const g=box.querySelector(".gender-options"); (q.fields?.genderOptions||["Männlich","Weiblich","Divers","Unbekannt"]).forEach(v=>{const label=document.createElement("label");label.className="gender-option";label.innerHTML=`<input type="radio" name="demoGender" value="${v}"> <span>${v}</span>`;if(d.gender===v)label.querySelector("input").checked=true;g.appendChild(label);});
    const ageInput=box.querySelector("#demoAge"), birthInput=box.querySelector("#demoBirth");
    const parseBirthdate=(value)=>{
      const raw=String(value||"").trim();
      const m=raw.match(/^(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{4})$/);
      if(!m)return "";
      const dd=String(m[1]).padStart(2,"0"), mm=String(m[2]).padStart(2,"0"), yyyy=m[3];
      const dt=new Date(`${yyyy}-${mm}-${dd}T00:00:00`);
      if(Number.isNaN(dt.getTime())||dt.getFullYear()!=Number(yyyy)||dt.getMonth()+1!=Number(mm)||dt.getDate()!=Number(dd))return "";
      return `${yyyy}-${mm}-${dd}`;
    };
    const calcAge=(iso)=>{
      if(!iso)return "";
      const d=new Date(iso+"T00:00:00");
      if(Number.isNaN(d.getTime()))return "";
      const now=new Date();
      let age=now.getFullYear()-d.getFullYear();
      const beforeBirthday=(now.getMonth()<d.getMonth())||(now.getMonth()===d.getMonth()&&now.getDate()<d.getDate());
      if(beforeBirthday)age--;
      return age>=0&&age<=130?String(age):"";
    };
    const formatBirthdateInput=(value)=>{
      let digits=String(value||"").replace(/\D/g,"").slice(0,8);
      if(digits.length>4) return `${digits.slice(0,2)}.${digits.slice(2,4)}.${digits.slice(4)}`;
      if(digits.length>2) return `${digits.slice(0,2)}.${digits.slice(2)}`;
      return digits;
    };
    birthInput.addEventListener("input",()=>{
      const formatted=formatBirthdateInput(birthInput.value);
      if(birthInput.value!==formatted) birthInput.value=formatted;
      const iso=parseBirthdate(formatted);
      const a=calcAge(iso);
      if(a) ageInput.value=a;
    });
    birthInput.addEventListener("blur",()=>{
      const iso=parseBirthdate(birthInput.value);
      if(iso){
        const [yyyy,mm,dd]=iso.split("-");
        birthInput.value=`${dd}.${mm}.${yyyy}`;
        const a=calcAge(iso);
        if(a) ageInput.value=a;
      }
    });
    ageInput.addEventListener("input",()=>{if(ageInput.value!=="") birthInput.dataset.manualAge="1";});
    const actions=document.createElement("div");actions.className="free-actions";
    const next=document.createElement("button");next.className="next-free";next.textContent="Weiter →";next.onclick=()=>{const age=String(ageInput.value||"").trim();const birthdate=parseBirthdate(birthInput.value);const gender=box.querySelector("input[name=demoGender]:checked")?.value||"Unbekannt";const calculatedAge=calcAge(birthdate);const finalAge=calculatedAge||age;pushHistory();answers[q.id]={age:finalAge,birthdate,gender};steps++;render();};
    const noData=document.createElement("button");noData.className="secondary unknown-btn";noData.textContent="Keine Angaben vorhanden";noData.onclick=()=>{pushHistory();answers[q.id]={age:"",birthdate:"",gender:"Unbekannt"};steps++;render();};
    actions.append(next,noData);box.appendChild(actions);area.appendChild(box);
  }else{
    const box=document.createElement("div");box.className="free-answer-box";
    const input=q.type==="text"?document.createElement("textarea"):document.createElement("input");if(q.type!=="text")input.type=["date","datetime-local","number"].includes(q.type)?q.type:"text";input.className="free-input";input.value=answers[q.id]??"";input.placeholder=q.placeholder||"";input.autocomplete="off";
    if(q.id==="verdachtsdiagnose"){
      const rec=diagnosisSuggestion()||{primary:"Keine eindeutige Verdachtsdiagnose ableitbar",alternatives:["Unklare Ursache"]};const recBox=document.createElement("div");recBox.className="diagnosis-recommendation";recBox.innerHTML=`<div class="diagnosis-recommendation-title">🤖 Algorithmischer Verdachtsvorschlag</div><div class="diagnosis-recommendation-main">${rec.primary}</div><div class="hint">Nur Entscheidungshilfe – die Auswahl trifft der Disponent.</div>`;const use=document.createElement("button");use.className="next-free";use.textContent="✓ Diesen Vorschlag übernehmen";use.onclick=()=>{input.value=rec.primary;answers[q.id]=rec.primary;};recBox.appendChild(use);const alt=document.createElement("div");alt.className="suggestions";(rec.alternatives||[]).forEach(x=>{const b=document.createElement("button");b.className="suggestion-btn";b.textContent=x;b.onclick=()=>{input.value=x;answers[q.id]=x;};alt.appendChild(b);});recBox.appendChild(alt);box.appendChild(recBox);
    }
    input.oninput=()=>answers[q.id]=input.value;box.appendChild(input);
    const actions=document.createElement("div");actions.className="free-actions";const next=document.createElement("button");next.className="next-free";next.textContent="Weiter →";next.onclick=()=>{const value=String(input.value??"").trim();if(!value&&!q.allowEmpty){input.focus();return;}pushHistory();answers[q.id]=value;steps++;render();};actions.appendChild(next);
    if(q.allowEmpty){const b=document.createElement("button");b.className="secondary unknown-btn";b.textContent="Leer lassen";b.onclick=()=>{pushHistory();answers[q.id]="";steps++;render();};actions.appendChild(b);}const unk=document.createElement("button");unk.className="secondary unknown-btn";unk.textContent="Unbekannt / keine Angabe";unk.onclick=()=>{pushHistory();answers[q.id]="Unbekannt";steps++;render();};actions.appendChild(unk);box.appendChild(actions);area.appendChild(box);setTimeout(()=>input.focus(),50);
  }
}

function showREA(){reaShown=true;updatePhase();$("progress").textContent="⚠️ KRITISCHER NOTFALL";$("questionText").textContent="Reanimation sofort beginnen";$("answerArea").innerHTML=`<div class="rea-guide"><h3>🫀 PRÜFEN – RUFEN – DRÜCKEN</h3><p><b>1.</b> Telefon auf Lautsprecher und den Anweisungen der Leitstelle folgen.</p><p><b>2.</b> Reagiert die Person nicht und atmet sie nicht oder nicht normal: sofort handeln.</p><p><b>3.</b> Person auf den Rücken auf eine möglichst feste Unterlage legen.</p><p><b>4.</b> Handballen in die Mitte des Brustkorbs, zweite Hand darüber.</p><p><b>5.</b> Bei Erwachsenen etwa <b>5–6 cm</b> tief und <b>100–120/min</b> drücken und vollständig entlasten.</p><p><b>6.</b> AED holen lassen und den Geräteanweisungen folgen.</p><p class="hint">Die Anleitung der Notrufleitstelle hat Vorrang.</p><button id="reaFinish" type="button">Zur Auswertung</button></div>`;$("reaFinish").onclick=finish;}

function evaluateNotarzt(){
  if(category==="grossschaden")return [];
  const reasons=[];
  for(const r of Object.values(data.notarzt_rules||{})){
    if(r.category===category&&matches(answers[r.questionId],r.values??r.value)) reasons.push(r.reason||r.id);
  }
  if(category==="medizin"){
    if(answers.deterioration==="Herz-Kreislauf-Stillstand"||answers.deterioration==="Atmet nicht mehr") reasons.push("Akute Reanimationslage / Atemstillstand");
    if(answers.med_personen==="Mehr als 9 / MANV") reasons.push("MANV / mehr als 9 Betroffene");
    if(answers.atem_05==="Ja"||answers.atem_01==="Ja"&&answers.atem_03==="Nein") reasons.push("Atemstörung mit möglicher relevanter Beeinträchtigung");
    if(answers.bewusstsein_01==="Ja"&&answers.bewusstsein_02==="Nein") reasons.push("Bewusstseinsstörung / fehlende adäquate Reaktion");
    if(answers.kollaps_01==="Ja") reasons.push("Bewusstlosigkeit / Kollaps");
    if(answers.krampf_01==="Ja"||answers.krampf_05==="Ja"||answers.krampf_23==="Ja") reasons.push("Relevanter Krampfanfall");
    if(answers.neuro_01==="Ja"||answers.neuro_02==="Ja"||answers.neuro_05==="Ja"||answers.neuro_06==="Ja") reasons.push("Akute neurologische Auffälligkeit");
    if(answers.psyche_01==="Ja"||answers.psyche_04==="Ja") reasons.push("Akute Selbst-/Fremdgefährdung");
    if(answers.blutung_03==="Ja"||answers.blutung_25==="Ja") reasons.push("Starke / nicht kontrollierbare Blutung");
    if(answers.geburt_07==="Ja"||answers.geburt_12==="Ja"||answers.geburt_19==="Ja") reasons.push("Akuter geburtshilflicher Hochrisikohinweis");
    if(answers.bauch_03==="Ja"&&answers.bauch_19==="Ja") reasons.push("Möglicher Ileus / akuter abdominaler Risikohinweis");
    if(answers.vergiftung_05==="Ja"||answers.vergiftung_06==="Ja"||answers.vergiftung_07==="Ja"||answers.vergiftung_24==="Ja") reasons.push("Schwere Intoxikationszeichen");
  }
  return [...new Set(reasons)];
}
function allAnswerText(){
  return Object.values(answers).flatMap(v=>Array.isArray(v)?v:[v]).map(v=>String(v??"").toLowerCase()).join(" | ");
}
function evaluateResources(reasons){
  if(category==="grossschaden")return[];
  const s=new Set();
  for(const r of Object.values(data.resource_rules||{})){
    if(r.category===category&&matches(answers[r.questionId],r.values??r.value))(r.resources||[]).forEach(x=>s.add(x));
  }
  const txt=allAnswerText();
  // Basisvorschlag: Bei einem medizinischen Notruf mindestens RTW/Rettungsdienst.
  if(category==="medizin") s.add("RTW / Rettungsdienst");
  if(category==="medizin" && answers.med_personen==="Mehr als 9 / MANV") s.add("MANV-/Rettungsmittel nach örtlicher AAO");
  if(reasons.length) s.add("NEF / Notarzt");
  if(answers.deterioration) s.add("Rettungsdienst – akute Verschlechterung berücksichtigen");
  if(category==="brand") s.add("Feuerwehr");
  // Zusätzliche Kräfte nur bei konkreten Hinweisen.
  if(/feuer|rauch|gas|gefahrstoff|chemikal|brand|eingeklemmt|eingeschlossen|stromleitung|explosion|einsturz/.test(txt)) s.add("Feuerwehr – zusätzlich erforderlich/zu prüfen");
  if(/waffe|gewalt|schlägerei|bedroh|angriff|stra[ft]at|polizei|suizid|fremdgefähr/.test(txt)) s.add("Polizei – lageabhängig zusätzlich zu prüfen");
  if(category==="thl" && mode==="vu"){
    s.add("RTW / Rettungsdienst – Verletztenversorgung");
    if(/eingeklemmt|eingeschlossen|brand|rauch|gefahrgut|kraftstoff|stromleitung|besondere gefahr/.test(txt)) s.add("Feuerwehr – Technische Hilfeleistung");
    s.add("Polizei – Verkehrsabsicherung/lageabhängig prüfen");
  }
  if(category==="thl" && mode==="wasser"){
    s.add("RTW / Rettungsdienst");
    s.add("Wasserrettung / Feuerwehr – lageabhängig prüfen");
  }
  return [...s];
}
function fallbackStichwort(){
  if(category==="grossschaden") return null;
  if(category==="medizin"){
    if(["rea","noBreath"].includes(answers.deterioration) || answers.atmung==="Atemstillstand") return {code:"RD-REAN",name:"Reanimation / Atemstillstand",priority:999};
    const g=String(answers.med_grund||"");
    if(g==="Erkrankung / medizinische Hilfeleistung"){
      const e=String(answers.erkrankung_typ||"");
      const sub={
        "Blutdruckstörung":"Blutdruckstörung",
        "Diabetes":"Diabetes / Stoffwechselentgleisung",
        "Allergie / Hautausschlag":"Allergische Reaktion / Hautausschlag",
        "Durchfall":"Akuter Durchfall",
        "Erbrechen / Übelkeit":"Erbrechen / Übelkeit",
        "Fieber":"Fieber / fieberhafter Infekt",
        "Grippe / Erkältung":"Grippe / Erkältung",
        "Harnverhalt":"Harnverhalt",
        "Hyperventilation":"Hyperventilation",
        "Infektionskrankheiten":"Infektionskrankheit",
        "Schwindel":"Akuter Schwindel",
        "Medizinische Hilfeleistung / sonstige Erkrankung":"Medizinische Hilfeleistung / sonstige Erkrankung"
      };
      let name=sub[e]||"Erkrankung / medizinische Hilfeleistung";
      if(e==="Diabetes"){
        if(String(answers.erkrankung_dm_01).startsWith("Hypoglykämie")) name="Hypoglykämie / Unterzuckerung";
        else if(String(answers.erkrankung_dm_01).startsWith("Hyperglykämie")) name="Hyperglykämie / Überzuckerung";
      }
      return {code:"RD-MED",name,priority:10};
    }
    const map={"Atemstörung":"Atemnot / Atemstörung","Brustschmerzen":"Brustschmerz","Kollaps / Kreislaufstörung":"Kollaps / Kreislaufstörung","Bewusstseinsstörung / Wesensveränderung":"Bewusstseinsstörung","Blutungen":"Blutung","Krampfanfall":"Krampfanfall","Vergiftung":"Vergiftung / Intoxikation","Verletzung":"Verletzung / Trauma","Bauchschmerzen":"Akute Bauchschmerzen","Gefühlsstörung / Lähmung / Sprache / Sehstörung":"Neurologischer Notfall","Geburt / Schwangerschaft":"Geburtshilflicher Notfall","Allergie / Anaphylaxie":"Allergische Reaktion / Anaphylaxie","Herzrhythmusstörungen":"Herzrhythmusstörung","Kopfschmerzen":"Akuter Kopfschmerz","Psychische Erkrankung / Suizid":"Psychischer Notfall","Hitze- / Kälteprobleme":"Hitze-/Kältenotfall","Sonstige Schmerzen":"Akuter Schmerz","Erkrankung / medizinische Hilfeleistung":"Erkrankung / medizinische Hilfeleistung"};
    return {code:"RD-MED",name:map[g]||g||"Medizinischer Notfall",priority:1};
  }
  if(category==="brand") return {code:"FW-BRAND",name:"Brand / Rauchentwicklung",priority:1};
  if(category==="thl") return {code:mode==="wasser"?"THL-WASSER":"THL-VU",name:mode==="wasser"?"Wasserunfall / Ertrinkungsunfall":"Verkehrsunfall / Technische Hilfeleistung",priority:1};
  return null;
}
function chooseStichwort(){
  if(category==="grossschaden")return null;
  const list=Object.values(data.einsatzstichworte||{}).filter(s=>s.category===category&&(s.conditions||[]).every(c=>matches(answers[c.questionId],c.values??c.value)));
  const specific=list.filter(s=>!['MED_ALL','MED_ALLGEMEIN','THL_ALLGEMEIN','ABC_ALLGEMEIN'].includes(s.id));
  return(specific.length?specific:list).sort((a,b)=>(b.priority||0)-(a.priority||0))[0]||fallbackStichwort();
}
function importantDispatchFacts(){
  const facts=[];const d=answers.med_demografie||{};
  if(d.age)facts.push(`Alter ${d.age} J.`);
  if(d.gender&&d.gender!=="Unbekannt")facts.push(d.gender);
  if(answers.med_personen)facts.push(`${answers.med_personen}`);
  if(answers.med_spricht && answers.med_spricht!=="Ja")facts.push(`Sprechen: ${answers.med_spricht}`);
  if(answers.med_grund)facts.push(answers.med_grund);
  if(answers.erkrankung_typ)facts.push(answers.erkrankung_typ);
  if(answers.erkrankung_dm_01)facts.push(answers.erkrankung_dm_01);
  if(answers.erkrankung_dm_04||answers.erkrankung_dm_05)facts.push(answers.erkrankung_dm_04||answers.erkrankung_dm_05);
  if(answers.erkrankung_bd_02)facts.push(answers.erkrankung_bd_02);
  if(answers.deterioration)facts.push(`Verschlechterung: ${answers.deterioration}`);
  if(answers.verdachtsdiagnose)facts.push(answers.verdachtsdiagnose);
  if(answers.atemfrequenz)facts.push(`AF ${answers.atemfrequenz}`);
  // Nur wenige zusätzliche, inhaltlich relevante Antworten in den Kurztext übernehmen.
  const qs=questions();
  for(const [id,v] of Object.entries(answers)){
    if(facts.length>=7)break;
    if(["med_wem","med_personen","med_spricht","med_demografie","med_grund","erkrankung_typ","erkrankung_dm_01","erkrankung_dm_04","erkrankung_dm_05","erkrankung_bd_02","verdachtsdiagnose","abfrage_bemerkung","atemfrequenz","deterioration"].includes(id))continue;
    const vals=Array.isArray(v)?v:[v];
    if(vals.some(x=>/^Ja$/i.test(String(x)))){
      const q=qs.find(x=>x.id===id); if(q) facts.push(q.text.replace(/\?$/,""));
    } else if(vals.some(x=>String(x).trim()) && vals.join(", ").length<55){
      const q=qs.find(x=>x.id===id); if(q) facts.push(`${q.text.replace(/\?$/ ,"")}: ${vals.join(", ")}`);
    }
  }
  return [...new Set(facts)].slice(0,7);
}
function dispatchText(resources,reasons,stichwort){
  const parts=[];
  if(stichwort?.name)parts.push(stichwort.name);
  if(category==="medizin") parts.push(...importantDispatchFacts());
  if(category==="brand"){if(answers.objekt)parts.push(answers.objekt);if(answers.personen_im_objekt==="Ja")parts.push("Person(en) in Gefahr");}
  if(category==="thl"){if(mode==="vu")parts.push("Verkehrsunfall");if(mode==="wasser")parts.push("Wasser-/Eisunfall");if(answers.lage)parts.push(answers.lage);if(answers.eingeklemmt==="Ja")parts.push("Person(en) eingeklemmt/eingeschlossen");}
  if(category==="grossschaden"){parts.push(answers.gs_lage||"Großschadenslage");if(answers.gs_orte)parts.push(answers.gs_orte);if(answers.gs_betroffene)parts.push(`ca. ${answers.gs_betroffene} Betroffene`);}
  if(answers.abfrage_bemerkung)parts.push(`Zusatz: ${answers.abfrage_bemerkung}`);
  return parts.filter(Boolean).join(" – ").slice(0,520)||"Einsatz – weitere Angaben nicht verfügbar";
}
function alarmierungVorschlag(reasons,resources){
  const has=(needle)=>resources.some(x=>String(x).toLowerCase().includes(needle));
  const out={rtw:false,nef:false,feuerwehr:false,polizei:false,hinweise:[]};
  if(category==="medizin"){out.rtw=true;out.nef=reasons.length>0;}
  if(category==="brand") out.feuerwehr=true;
  if(category==="thl" && (mode==="vu"||mode==="wasser")) out.rtw=true;
  out.feuerwehr=out.feuerwehr||has("feuerwehr");
  out.polizei=has("polizei");
  if(out.nef) out.hinweise.push("NEF/Notarzt aufgrund mindestens eines hinterlegten Indikationskriteriums.");
  if(out.feuerwehr && category!=="brand") out.hinweise.push("Feuerwehr zusätzlich nur entsprechend Lage/örtlicher AAO alarmieren.");
  if(out.polizei) out.hinweise.push("Polizei lageabhängig bzw. nach örtlicher Zuständigkeit prüfen.");
  return out;
}
function currentResult(){
  const reasons=evaluateNotarzt(),resources=evaluateResources(reasons),stichwort=chooseStichwort(),aao=stichwort?data.aao?.[stichwort.id]||null:null;
  let final=[...(aao?.resources||[]),...resources];
  if(category==="grossschaden"){final=["Großschadenslage – lageabhängige Einsatzmittel prüfen"];if(Array.isArray(answers.gs_gefahren)){if(answers.gs_gefahren.some(x=>x.includes("Feuer")))final.push("Feuerwehr");if(answers.gs_gefahren.some(x=>x.includes("Viele Verletzte")))final.push("Rettungsdienst / MANV-Komponente");if(answers.gs_gefahren.some(x=>x.includes("Gefahrstoffe")))final.push("ABC-/Gefahrgut-Komponente");if(answers.gs_gefahren.some(x=>x.includes("Wasser")))final.push("Wasserrettung / technische Hilfe");}}
  const unique=[...new Set(final)];return{reasons,resources:unique,stichwort,aao,alarmierung:alarmierungVorschlag(reasons,unique),dispatchText:dispatchText(unique,reasons,stichwort)};
}
function finish(){const r=currentResult();const result={createdAt:new Date().toISOString(),category,mode,categoryTitle:title(),answers:{...answers},reasons:r.reasons,resources:r.resources,stichwort:r.stichwort,aao:r.aao,alarmierung:r.alarmierung,dispatchText:r.dispatchText,rea:reaShown,partialExit:!reaShown&&steps>0,abfrageStatus:phaseText(),questionsAnswered:steps,abfragedauer:durationText()};if(durationTimer)clearInterval(durationTimer);sessionStorage.setItem("einsatzabfrage_result",JSON.stringify(result));location.href="ergebnis.html";}

function openModal(html){$("modalRoot").innerHTML=`<div class="modal-backdrop" id="modalBackdrop"><div class="modal-card">${html}</div></div>`;$("modalBackdrop").onclick=e=>{if(e.target.id==="modalBackdrop")closeModal();};}
function closeModal(){$("modalRoot").innerHTML="";}
function openDeterioration(){openModal(`<div class="modal-title">⚠️ Verschlechterung</div><p class="hint">Sofort den eingetretenen Zustand auswählen. Das Abfrageschema springt anschließend in den passenden Notfallpfad.</p><div class="modal-buttons"><button class="danger-choice" data-det="rea">🫀 Herz-Kreislauf-Stillstand</button><button class="danger-choice" data-det="noBreath">🫁 Atmet nicht mehr</button><button class="danger-choice" data-det="collapse">🧍 Umgefallen / kollabiert / bewusstlos</button><button class="danger-choice" data-det="seizure">⚡ Krampft</button><button class="danger-choice" data-det="dyspnea">🫁 Selbstanrufer – starke Atemnot</button></div><button class="secondary modal-close">Abbrechen</button>`);document.querySelectorAll("[data-det]").forEach(b=>b.onclick=()=>{const d=b.dataset.det;pushHistory();if(d==="rea"||d==="noBreath"){answers.bewusstsein="Bewusstlos";answers.atmung="Atemstillstand";answers.deterioration=d;reaShown=false;closeModal();showREA();return;}if(d==="collapse"){answers.med_grund="Kollaps / Kreislaufstörung";answers.bewusstsein_01="Ja";answers.deterioration="Umgefallen / kollabiert / bewusstlos";}if(d==="seizure"){answers.med_grund="Krampfanfall";answers.krampf_01="Ja";answers.deterioration="Krampft";}if(d==="dyspnea"){answers.med_grund="Atemstörung";answers.atem_01="Ja";answers.deterioration="Selbstanrufer – starke Atemnot";}closeModal();render();});document.querySelector(".modal-close").onclick=closeModal;}
function openRemark(){openModal(`<div class="modal-title">📝 Abfragebemerkung</div><p class="hint">Zusätzige wichtige Information. Sie wird im Zwischenergebnis, Alarmmittelvorschlag und Einsatztext berücksichtigt.</p><textarea id="remarkInput" class="modal-textarea" placeholder="Wichtige Zusatzinformation …">${String(answers.abfrage_bemerkung||"").replace(/</g,"&lt;")}</textarea><div class="modal-actions"><button id="saveRemark">Speichern</button><button class="secondary modal-close">Abbrechen</button></div>`);$("saveRemark").onclick=()=>{answers.abfrage_bemerkung=String($("remarkInput").value||"").trim();closeModal();render();};$("modalRoot").querySelector(".modal-close").onclick=closeModal;}
function openInterim(){const r=currentResult();openModal(`<div class="modal-title">📟 Zwischenergebnis / Voralarm</div><div class="interim-status"><strong>Abfragestatus:</strong> ${phaseText()} · ${steps} Fragen beantwortet · ⏱ ${durationText()}</div><div class="interim-box"><b>Einsatzstichwort</b><div>${r.stichwort?`${r.stichwort.code} – ${r.stichwort.name}`:"Noch kein eindeutiges Einsatzstichwort"}</div></div><div class="interim-box"><b>Alarmmittelvorschlag</b>${r.resources.length?r.resources.map(x=>`<div class="resource-row">• ${x}</div>`).join(""):"<div class='hint'>Aus den bisherigen Angaben noch kein konkretes Mittel ableitbar.</div>"}${answers.abfrage_bemerkung?`<div class="remark-live">📝 Zusatzinformation wird mit dem Einsatztext mitgeführt.</div>`:""}</div>${r.reasons.length?`<div class="alarm-banner">🚨 NEF / NOTARZT – hinterlegtes Kriterium ausgelöst</div>`:""}${answers.abfrage_bemerkung?`<div class="interim-box"><b>Abfragebemerkung</b><div>${answers.abfrage_bemerkung}</div></div>`:""}<div class="interim-box"><b>Einsatztext bisher</b><div class="dispatch">${r.dispatchText}</div></div><div class="modal-actions"><button class="modal-close">Abfrage fortsetzen</button><button id="finishInterim" class="action-exit">Ausstieg & Ergebnis</button></div>`);document.querySelector(".modal-close").onclick=closeModal;$("finishInterim").onclick=()=>{closeModal();finish();};}
function openAF(){stopBreath();breathSeconds=0;breathCount=0;breathRunning=false;openModal(`<div class="modal-title">🫁 Atemfrequenz</div><p class="hint">30 Sekunden zählen. Bei jedem Atemzug auf den großen Button tippen.</p><div class="af-display"><strong id="afSeconds">30</strong><span>Sekunden</span></div><div class="breath-count"><span>Atemzüge</span><strong id="afCount">0</strong></div><button id="breathStart" class="breath-main">▶ 30 Sekunden starten</button><button id="breathTap" class="breath-tap" disabled>ATEMZUG +1</button><div id="afResult" class="af-result hint">Noch keine Messung.</div><div class="modal-actions"><button class="secondary modal-close">Schließen</button></div>`);$("breathStart").onclick=startBreath;$("breathTap").onclick=()=>{if(breathRunning){breathCount++;$("afCount").textContent=breathCount;}};$("modalRoot").querySelector(".modal-close").onclick=closeModal;}
function startBreath(){stopBreath();breathSeconds=30;breathCount=0;breathRunning=true;$("afSeconds").textContent="30";$("afCount").textContent="0";$("breathTap").disabled=false;$("breathStart").textContent="⏱ Messung läuft …";breathTimer=setInterval(()=>{breathSeconds--;$("afSeconds").textContent=String(Math.max(0,breathSeconds));if(breathSeconds<=0){stopBreath();const af=breathCount*2;$("afResult").innerHTML=`<strong>Ergebnis: ${af}/min</strong><br>${af<8||af>30?"⚠️ deutlich auffällig – Ergebnis im Gesamtkontext bewerten.":af<12||af>20?"ℹ️ außerhalb des üblichen Erwachsenen-Richtbereichs.":"✓ im üblichen Erwachsenen-Richtbereich."}`;answers.atemfrequenz=`${af}/min (30 s: ${breathCount})`;}} ,1000);}
function stopBreath(){if(breathTimer){clearInterval(breathTimer);breathTimer=null;}breathRunning=false;}

$("deteriorationBtn").onclick=openDeterioration;$("interimBtn").onclick=openInterim;$("remarkBtn").onclick=openRemark;$("exitBtn").onclick=finish;$("afBtn").onclick=openAF;$("remarkQuick")?.addEventListener("input",e=>answers.abfrage_bemerkung=e.target.value);
$("previousBtn")?.addEventListener("click",()=>{
  if(!history.length||reaShown)return;
  const last=history.pop();
  answers=clone(last.answers);
  steps=last.steps;
  reaShown=last.reaShown;
  render();
});
durationTimer=setInterval(updateDuration,1000);updateDuration();

try{
  const p=new URLSearchParams(location.search);
  category=p.get("category");
  mode=p.get("mode");
  if(!["medizin","brand","thl","grossschaden"].includes(category)) throw new Error("Ungültige Kategorie");
  startTime=Date.now();
  if(mode==="vu") answers.thl_art="Verkehrsunfall";
  if(mode==="wasser") answers.thl_art="Wasser / Eis / Ertrinkungsunfall";
  $("categoryTitle").textContent=title();
  $("status").textContent="● Abfrage aktiv · lokale Grunddaten geladen";
  render();
  // Firebase wird nur im Hintergrund versucht. Die Bedienoberfläche bleibt dadurch
  // sofort benutzbar, auch wenn Auth/CDN/Netzwerk gerade nicht erreichbar ist.
  // Der vollständige Fragenkatalog wird erst nach dem ersten Rendern nachgeladen.
  // Dadurch erscheint die Abfrage auch auf langsameren PCs sofort.
  loadLocalCategoryInBackground().then(()=>loadRemoteInBackground());
}catch(e){
  console.error(e);
  $("status").textContent="⚠️ Abfrage konnte nicht geladen werden";
  $("questionText").textContent="Technischer Fehler beim Laden der Abfrage.";
  $("answerArea").innerHTML="<p class='hint'>Bitte die aktuelle ZIP-Version vollständig auf GitHub ersetzen.</p>";
}
