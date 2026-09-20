import { firebaseConfig, ADMIN_UID } from "./firebase-config.js?v=20260914v16";
import { defaults } from "./data.js?v=20260915v27";
const defaultAAO = {
  B1:{id:"B1",stichwort:"B1",name:"Brand – klein",category:"brand",resources:["KLF"]},
  B2:{id:"B2",stichwort:"B2",name:"Brand – mittel",category:"brand",resources:["ELW","KLF","HLF","GW-L","WLF-2","WLF-1"]},
  B3:{id:"B3",stichwort:"B3",name:"Brand – groß",category:"brand",resources:["ELW","KLF","HLF","GW-L","WLF-2","WLF-1"]},
  G1:{id:"G1",stichwort:"G1",name:"Gefahrguteinsatz – klein",category:"abc",resources:["HLF"]},
  G2:{id:"G2",stichwort:"G2",name:"Gefahrguteinsatz – mittel",category:"abc",resources:["ELW","KLF","HLF","GW-L","WLF-2","WLF-1"]},
  G3:{id:"G3",stichwort:"G3",name:"Gefahrguteinsatz – groß",category:"abc",resources:["ELW","KLF","HLF","GW-L","WLF-2","WLF-1"]},
  TH1:{id:"TH1",stichwort:"TH1",name:"Technische Hilfeleistung – klein",category:"thl",resources:["HLF"]},
  TH2:{id:"TH2",stichwort:"TH2",name:"Technische Hilfeleistung – mittel",category:"thl",resources:["ELW","KLF","HLF","GW-L","WLF-2","WLF-1"]},
  TH3:{id:"TH3",stichwort:"TH3",name:"Technische Hilfeleistung – groß",category:"thl",resources:["ELW","KLF","HLF","GW-L","WLF-2","WLF-1"]},
  SL:{id:"SL",stichwort:"SL",name:"Sonderlage",category:"grossschaden",resources:["ELW","KLF","HLF","GW-L","WLF-1","WLF-2"]}
};

const defaultStichworte = {
  B1:{id:"B1",enabled:false,code:"B1",name:"Brand klein",category:"brand",priority:300,conditionMode:"all",conditions:[],volltext:"Auslösung BMA (Linienmelder, Rauchmelder, RAS-System, Lüftungskanalmelder Abluft, etc.) – Auslösung von einem Element; Auslösung NRA (Auslösung von einem Element); Kleinstbrand; Mülleimer im Innen- und Außenbereich von Gebäuden; Voralarm Gaslöschanlagen; Voralarm Ex-Meldeanlagen; Gelöschte Feuer oder ähnliche Meldebilder."},
  B2:{id:"B2",enabled:false,code:"B2",name:"Brand mittel",category:"brand",priority:200,conditionMode:"all",conditions:[],volltext:"Auslösung BMA (mehr als ein Element von Linienmelder, Rauchmelder, RAS-System, Lüftungskanalmelder Abluft, etc.); Auslösung NRA (Auslösung mehr als ein Element); Brand PKW, LKW, Schienenfahrzeug im Innen- und Außenbereich von Gebäuden; Ex-Meldeanlagen oder ähnliche Meldebilder."},
  B3:{id:"B3",enabled:false,code:"B3",name:"Brand groß",category:"brand",priority:100,conditionMode:"all",conditions:[],volltext:"Auslösung automatische Löschanlagen; Druckknopfmelder; bestätigte Notrufe (Rauchentwicklung oder Brandkenngröße); Auslösung BMA in Sondergebäuden; ab Mittelbrand im Innen- und Außenbereich von Gebäuden oder ähnliche Meldebilder."},
  G1:{id:"G1",enabled:false,code:"G1",name:"Gefahrguteinsatz klein",category:"abc",priority:300,conditionMode:"all",conditions:[],volltext:"Umweltschäden klein, auslaufende Betriebsmittel; Tierbergung; Transport kritischer Batterien; Geruchsbelästigungen oder ähnliche Meldebilder."},
  G2:{id:"G2",enabled:false,code:"G2",name:"Gefahrguteinsatz mittel",category:"abc",priority:200,conditionMode:"all",conditions:[],volltext:"Kritische Batterien, wenn nicht G1; Gaswarnanlagen; Gefahrgutunfall / Umweltschaden klein; auslaufende Medien ohne Auswirkung; Gasgeruch oder ähnliche Meldebilder."},
  G3:{id:"G3",enabled:false,code:"G3",name:"Gefahrguteinsatz groß",category:"abc",priority:100,conditionMode:"all",conditions:[],volltext:"Gefährliche Batterien; auslaufende Medien mit Auswirkung; Gewässerverunreinigung; Gefahrgutunfall / Umweltschaden groß oder ähnliche Meldebilder."},
  TH1:{id:"TH1",enabled:false,code:"TH1",name:"Technische Hilfeleistung klein",category:"thl",priority:300,conditionMode:"all",conditions:[],volltext:"Befreiung Person Aufzug; kleine Wasserschäden; Tierrettung; Absicherung Einsatzstellen oder ähnliche Meldebilder."},
  TH2:{id:"TH2",enabled:false,code:"TH2",name:"Technische Hilfeleistung mittel",category:"thl",priority:200,conditionMode:"all",conditions:[],volltext:"VKU ohne Personenschaden; große Wasserschäden; Hilfeleistung oder ähnliche Meldebilder."},
  TH3:{id:"TH3",enabled:false,code:"TH3",name:"Technische Hilfeleistung groß",category:"thl",priority:100,conditionMode:"all",conditions:[],volltext:"Unfall mit Personenschaden; Retten aus Höhen oder Tiefen; produktionsrelevante Störungen; VKU mit Personenschaden; eingeklemmte Person; hilflose Person oder ähnliche Meldebilder."},
  SL:{id:"SL",enabled:false,code:"SL",name:"Sonderlage",category:"grossschaden",priority:500,conditionMode:"all",conditions:[],volltext:"Bestätigte Auslösung CO₂-Löschanlage; Massenanfall von Verletzten (Großschadenslage – GSL); Großbrand; Explosion, Detonation; Einsturz von baulichen Anlagen; Gasaustritt; unwetterartige Umwelt ereignisse (Sturm, Hochwasser, Starkregen, Hagel, etc.) oder ähnliche Meldebilder."}
};

export { defaultAAO, defaultStichworte };

export const categories = [
  ["brand", "🔥 Brand / Rauchentwicklung"],
  ["medizin", "🚑 Medizinischer Notfall"],
  ["thl", "🛠️ Technische Hilfeleistung"],
  ["abc", "☣️ ABC / Gefahrgut"]
];

const aliases = { vu:"thl", wasser:"thl", sturz:"medizin", vergiftung:"medizin", strom:"medizin", geburt:"medizin" };
let app=null, db=null, auth=null, currentUser=null, cached=null;
let firebaseReady=false;

export const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
export const configured = () => Boolean(firebaseConfig.apiKey && firebaseConfig.appId);
export const isAdmin = () => !!currentUser && currentUser.uid === ADMIN_UID;

export async function initFirebase(statusEl){
  if(!configured()){
    if(statusEl) statusEl.textContent="● Lokaler Modus";
    return false;
  }
  try{
    if(!app){
      const [{initializeApp},{getDatabase,ref,get,set},{getAuth,signInAnonymously,signInWithEmailAndPassword,signOut,onAuthStateChanged}] = await Promise.all([
        import("https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js"),
        import("https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js"),
        import("https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js")
      ]);
      window.__fb={ref,get,set,signInAnonymously,signInWithEmailAndPassword,signOut,onAuthStateChanged};
      app=initializeApp(firebaseConfig);
      db=getDatabase(app);
      auth=getAuth(app);
      firebaseReady=true;
      onAuthStateChanged(auth,u=>{
        currentUser=u;
        if(statusEl) statusEl.textContent=isAdmin()?"● Firebase – Verwaltung angemeldet":"● Firebase verbunden";
      });
    }
    if(!currentUser){
      try{ await window.__fb.signInAnonymously(auth); }catch(e){ console.warn("Anonymous login:",e); }
    }
    return firebaseReady;
  }catch(e){
    console.warn("Firebase konnte nicht geladen werden. Lokale Grunddaten werden verwendet.",e);
    if(statusEl) statusEl.textContent="● Lokaler Modus";
    return false;
  }
}

export async function loginAdmin(email,password){
  if(!auth) await initFirebase();
  if(!auth||!window.__fb?.signInWithEmailAndPassword) throw new Error("Firebase ist nicht verfügbar.");
  const c=await window.__fb.signInWithEmailAndPassword(auth,email,password);
  if(c.user.uid!==ADMIN_UID){ await window.__fb.signOut(auth); throw new Error("Dieses Konto ist nicht als Administrator hinterlegt."); }
  currentUser=c.user;
  return c.user;
}
export async function logoutAdmin(){ if(auth&&window.__fb?.signOut) await window.__fb.signOut(auth); }
export const currentAuthUser=()=>currentUser;

const clone=x=>structuredClone(x);
function merge(base,incoming){
  const out=clone(base);
  if(!incoming||typeof incoming!=="object") return out;
  for(const [k,v] of Object.entries(incoming)){
    if(v&&typeof v==="object"&&!Array.isArray(v)&&out[k]&&typeof out[k]==="object"&&!Array.isArray(out[k])) out[k]=merge(out[k],v);
    else out[k]=v;
  }
  return out;
}

/*
 * Firebase kann alte/halb bearbeitete Fragen enthalten. Solche Einträge dürfen
 * die eigentliche Entscheidungslogik niemals kaputt machen. Deshalb werden
 * die lokalen Fragen als sichere Grundstruktur verwendet. Aus Firebase werden
 * nur sinnvolle Änderungen an vorhandenen Fragen übernommen; Routing, Reihenfolge
 * und Antworttyp bleiben stabil.
 */
const removedQuestionIds=new Set(["fuer_wen","geburtsdatum","geschlecht","schwangerschaft"]);
export const CATALOG_SCHEMA_VERSION=4;

function validQuestion(q,id){
  if(!q || typeof q!=="object" || !String(q.text||"").trim()) return false;
  const type=String(q.type||"choice");
  if(!["choice","multi","text","date","datetime-local","number","demographics"].includes(type)) return false;
  if((type==="choice"||type==="multi") && (!Array.isArray(q.options)||q.options.length===0)) return false;
  return true;
}

function sanitizeQuestion(q,id){
  const x=clone(q);
  x.id=String(id);
  x.type=String(x.type||"choice");
  x.order=Number.isFinite(Number(x.order))?Number(x.order):1000;
  if(Array.isArray(x.options)) x.options=x.options.map(String).filter(Boolean);
  return x;
}

/*
 * Firebase ist die verwaltbare Quelle des Fragenkatalogs.
 * Sobald der Katalog mit schemaVersion 4 gespeichert wurde, wird pro Kategorie
 * der Firebase-Baum verwendet. Fehlt eine Kategorie oder ist sie leer, fällt
 * diese Kategorie auf die eingebauten Grunddaten zurück.
 *
 * Die Folgefragen werden nicht über eine starre Nummer bestimmt, sondern über
 * whenQuestion / whenValue sowie whenAll / whenAny / whenNot / whenTextIncludes.
 */
function catalogFromFirebase(localCatalog, remoteCatalog){
  const result=clone(localCatalog);
  if(!remoteCatalog || typeof remoteCatalog!=="object") return result;
  const meta=remoteCatalog._meta||{};
  const version=Number(meta.schemaVersion||0);
  if(version<CATALOG_SCHEMA_VERSION) return result;

  for(const category of ["medizin","brand","thl","abc"]){
    const remoteGroup=remoteCatalog[category];
    if(!remoteGroup || typeof remoteGroup!=="object") continue;
    const group={};
    for(const [id,q] of Object.entries(remoteGroup)){
      if(removedQuestionIds.has(id)||!validQuestion(q,id)) continue;
      group[id]=sanitizeQuestion(q,id);
    }
    if(Object.keys(group).length) result[category]=group;
  }
  return result;
}

function normalizeLegacy(base){
  const c=base.catalog||{};
  for(const [old,nw] of Object.entries(aliases)) if(c[old]) c[nw]={...(c[nw]||{}),...c[old]};
  for(const group of ["notarzt_rules","resource_rules"]){
    for(const r of Object.values(base[group]||{})) if(aliases[r.category]) r.category=aliases[r.category];
  }
  for(const s of Object.values(base.einsatzstichworte||{})) if(aliases[s.category]) s.category=aliases[s.category];
  for(const a of Object.values(base.aao||{})) if(aliases[a.category]) a.category=aliases[a.category];
  return base;
}

export async function loadAllData(){
  if(cached) return cached;

  const base={
    catalog:clone(defaults.catalog),
    notarzt_rules:clone(defaults.notarzt_rules),
    resource_rules:clone(defaults.resource_rules),
    suggestions:clone(defaults.suggestions),
    aao:{},
    einsatzstichworte:{}
  };

  if(db&&window.__fb?.get){
    const {ref,get}=window.__fb;
    const paths=["catalog","notarzt_rules","resource_rules","suggestions","aao","einsatzstichworte"];
    const results=await Promise.all(paths.map(async p=>{
      try{
        const s=await Promise.race([
          get(ref(db,p)),
          new Promise((_,reject)=>setTimeout(()=>reject(new Error("timeout")),1500))
        ]);
        return [p,s.exists()?s.val():null];
      }catch(e){ console.warn("Firebase read",p,e); return [p,null]; }
    }));

    const remotePresent=new Set();
    for(const [p,v] of results){
      if(v===null) continue;
      remotePresent.add(p);
      if(p==="catalog") base.catalog=catalogFromFirebase(base.catalog,v);
      else base[p]=merge(base[p],v);
    }
    // Nur wenn der komplette Bereich in Firebase noch nicht existiert, wird
    // die lokale Grundvorlage verwendet. Einzelne gelöschte Einträge kommen
    // dadurch nicht automatisch zurück.
    if(!remotePresent.has("aao")) base.aao=clone(defaultAAO);
    if(!remotePresent.has("einsatzstichworte")) base.einsatzstichworte=clone(defaultStichworte);
  } else {
    base.aao=clone(defaultAAO);
    base.einsatzstichworte=clone(defaultStichworte);
  }

  cached=normalizeLegacy(base);
  return cached;
}

export async function writeData(path,value){
  if(!db||!window.__fb?.set) throw new Error("Firebase ist nicht verbunden.");
  if(!isAdmin()) throw new Error("Keine Berechtigung.");
  await window.__fb.set(window.__fb.ref(db,path),value);
  cached=null;
  return loadAllData();
}

export async function seedAll(){
  if(!isAdmin()) throw new Error("Nur der Administrator darf Grunddaten speichern.");
  await writeData("catalog",{_meta:{schemaVersion:CATALOG_SCHEMA_VERSION,updatedAt:new Date().toISOString()},...defaults.catalog});
  for(const [p,v] of Object.entries({notarzt_rules:defaults.notarzt_rules,resource_rules:defaults.resource_rules,suggestions:defaults.suggestions,aao:defaultAAO,einsatzstichworte:defaultStichworte})) await writeData(p,v);
}

export function questionKey(q){
  const id=String(q?.id||"").toLowerCase(), text=String(q?.text||"").toLowerCase();
  const known=[
    ["medizin_art",/medizinischen.*notfall|worum geht es|art.*medizin/,"medizin:art"],
    ["problem",/hauptproblem|hauptbeschwer|aktuelle.*problem|gerade.*passiert/,"medizin:problem"],
    ["bewusstsein",/bewusstseins|wach und ansprechbar/,"medizin:bewusstsein"],
    ["atmung",/wie ist die atmung|atmet.*normal|atemstillstand/,"medizin:atmung"],
    ["brustschmerz",/brustschmerz/,"medizin:brustschmerz"],
    ["blutung",/starke.*blutung/,"medizin:blutung"],
    ["objekt",/welch.*objekt/,"brand:objekt"],
    ["personen_im_objekt",/personen.*brandobjekt|personen.*gefahrenbereich/,"brand:personen"],
    ["thl_art",/technische.*lage|welche.*lage.*vor/,"thl:art"]
  ];
  for(const [exact,re,key] of known) if(id===exact||re.test(text)) return key;
  return `${id}:${text}`;
}

export function questionsFor(data,category){
  const raw=Object.values(data.catalog?.[category]||{}).filter(q=>q?.id&&q?.text);
  const seen=new Map(),out=[];
  for(const q of raw){
    const k=questionKey(q), i=seen.get(k);
    if(i===undefined){ seen.set(k,out.length); out.push(q); }
    else if(String(q.id).startsWith("medizin_")) out[i]=q;
  }
  return out.sort((a,b)=>(Number(a.order)||999999)-(Number(b.order)||999999));
}

export function matches(actual,expected){
  if(expected==="*"){
    if(Array.isArray(actual)) return actual.length>0;
    return actual!==undefined&&actual!==null&&String(actual).trim()!=="";
  }
  if(expected===undefined||expected===null||expected==="") return true;
  const wanted=Array.isArray(expected)?expected:String(expected).split(",").map(x=>x.trim());
  if(Array.isArray(actual)) return actual.some(a=>wanted.includes(String(a)));
  return wanted.includes(String(actual));
}
function condition(c,answers){
  if(!c) return true;
  if(c.questionId && !matches(answers[c.questionId],c.values??c.value)) return false;
  if(c.notQuestionId && matches(answers[c.notQuestionId],c.notValues??c.notValue)) return false;
  if(c.textIncludes){
    const text=String(answers[c.textIncludes.questionId]??'').toLowerCase();
    if(!(c.textIncludes.terms||[]).some(term=>text.includes(String(term).toLowerCase()))) return false;
  }
  return true;
}
function strokeIndicated(answers){
  const ls = Array.isArray(answers.leitsymptom) ? answers.leitsymptom.map(String) : [String(answers.leitsymptom||"")];
  if(ls.includes("Neurologische Auffälligkeiten / möglicher Schlaganfall")) return true;
  const p=String(answers.problem||"").toLowerCase();
  const neuroTerms=[
    "schlaganfall","sprachstörung","sprachstoerung","spricht plötzlich","spricht ploetzlich",
    "lähmung","laehmung","gelähmt","gelaehmt","halbseitig","einseitig",
    "mundwinkel","gesichtslähmung","gesichtslaehmung","arm schwach","bein schwach",
    "kraftverlust","taubheit","sehstörung","sehstörung","sehstoerung","doppelbilder",
    "gesichtsfeldausfall","neurolog","hängt der mund","haengt der mund","nicht sprechen",
    "verwaschene sprache","verwaschen sprechen","wortfindungsstörung","wortfindungsstoerung"
  ];
  return neuroTerms.some(t=>p.includes(t));
}

export function questionVisible(q,answers){
  // Der BEFAST-Zweig ist ein spezieller neurologischer Zweig. Er darf niemals
  // bei allgemeinen Beschwerden (z.B. Bauchschmerzen) erscheinen. Er wird
  // ausschließlich aktiviert, wenn bereits ein neurologischer Hinweis aus
  // der Leitsymptom-Auswahl oder der freien Problembeschreibung vorliegt.
  if(String(q?.id||"").startsWith("stroke_") && !strokeIndicated(answers)) return false;
  if(q.whenQuestion && !matches(answers[q.whenQuestion],q.whenValue)) return false;
  if(q.skipWhenQuestion && matches(answers[q.skipWhenQuestion],q.skipWhenValue)) return false;
  if(q.whenAll && !q.whenAll.every(c=>condition(c,answers))) return false;
  if(q.whenAny && q.whenAny.length && !q.whenAny.some(c=>condition(c,answers))) return false;
  if(q.whenNot && q.whenNot.some(c=>condition(c,answers))) return false;
  if(q.whenTextIncludes && q.whenTextIncludes.length){
    const ok=q.whenTextIncludes.some(c=>{
      const text=String(answers[c.questionId]??'').toLowerCase();
      return (c.terms||[]).some(term=>text.includes(String(term).toLowerCase()));
    });
    if(!ok) return false;
  }
  return true;
}
export function visibleQuestions(data,category,answers,answeredOnly=false){
  return questionsFor(data,category).filter(q=>questionVisible(q,answers)&&(!answeredOnly||answers[q.id]!==undefined));
}
export function nextQuestion(data,category,answers){
  return questionsFor(data,category).find(q=>questionVisible(q,answers)&&answers[q.id]===undefined)||null;
}
export const calculateAge=date=>{
  if(!date) return null;
  const d=new Date(date+"T00:00:00"), n=new Date();
  if(Number.isNaN(d.getTime())) return null;
  let a=n.getFullYear()-d.getFullYear();
  if(n.getMonth()<d.getMonth()||(n.getMonth()===d.getMonth()&&n.getDate()<d.getDate())) a--;
  return a>=0?a:null;
};

export function evaluateNotarzt(data,category,answers){
  const reasons=[];
  for(const r of Object.values(data.notarzt_rules||{})) if((aliases[r.category]||r.category)===category&&matches(answers[r.questionId],r.values??r.value)) reasons.push(r.reason||r.id);
  return [...new Set(reasons)];
}
export function evaluateResources(data,category,answers,reasons=[]){
  const s=new Set();
  for(const r of Object.values(data.resource_rules||{})) if((aliases[r.category]||r.category)===category&&matches(answers[r.questionId],r.values??r.value)) (r.resources||[]).forEach(x=>s.add(x));
  if(reasons.length) s.add("NEF / Notarzt – gemäß hinterlegtem Notarztindikationskatalog");
  return [...s];
}
export function matchesStichwort(s,category,answers){
  if((aliases[s.category]||s.category)!==category) return false;
  const conditions=Array.isArray(s.conditions)?s.conditions:[];
  if(!conditions.length) return true;
  const test=c=>matches(answers[c.questionId],c.values??c.value);
  if(s.conditionMode==="any") return conditions.some(test);
  return conditions.every(test);
}
export function chooseStichwort(data,category,answers){
  const generic=new Set(["MED_NEf","MED_NOTFALL","MED_ALLG","MED_ALLGEMEIN","THL_ALLGEMEIN","ABC_ALLGEMEIN"]);
  let list=Object.values(data.einsatzstichworte||{}).filter(s=>s.enabled!==false&&matchesStichwort(s,category,answers));
  const specific=list.filter(s=>!generic.has(s.id));
  if(specific.length) list=specific;
  return list.sort((a,b)=>(b.priority||0)-(a.priority||0))[0]||null;
}
export function aaoFor(data,s){ return s?data.aao?.[s.id]||null:null; }
export function makeDispatchText(category,answers,resources,reasons,stichwort){
  const parts=[];
  if(stichwort?.code) parts.push(stichwort.code);
  if(category==="medizin"){
    if(answers.problem) parts.push(answers.problem);
    if(answers.verdachtsdiagnose) parts.push(`Verdachtsdiagnose: ${answers.verdachtsdiagnose}`);
  }else if(category==="brand"){
    if(answers.objekt) parts.push(answers.objekt);
    if(answers.personen_im_objekt==="Ja"){
      const n=answers.personen_anzahl;
      parts.push(n ? `${n} Person${String(n)==="1"?"":"en"} in Gefahr` : "Person(en) in Gefahr");
    }
  }else if(category==="thl"){
    if(answers.thl_art) parts.push(answers.thl_art);
    if(answers.lage) parts.push(answers.lage);
    if(answers.eingeklemmt==="Ja"){
      const n=answers.klemm_anzahl;
      parts.push(n ? `${n} Person${String(n)==="1"?"":"en"} Klemm` : "Person Klemm");
    }
    if(answers.sonst_lage) parts.push(answers.sonst_lage);
  }else{
    if(answers.stoff) parts.push(answers.stoff);
    if(answers.betroffen==="Ja") parts.push("Personen betroffen");
  }
  return parts.filter(Boolean).join(" – ") || (stichwort?.code || "Einsatz");
}

export const saveResult=r=>sessionStorage.setItem("einsatzabfrage_result",JSON.stringify(r));
export const getResult=()=>{try{return JSON.parse(sessionStorage.getItem("einsatzabfrage_result")||"null")}catch{return null}};
export const clearResult=()=>sessionStorage.removeItem("einsatzabfrage_result");
