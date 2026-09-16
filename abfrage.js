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
const injurySupplementQuestions = {
  "verletzung_v49_mechanismus": {
    "id": "verletzung_v49_mechanismus",
    "text": "Wie kam es zu der Verletzung?",
    "type": "choice",
    "order": 9670,
    "options": [
      "Anprall gegen festes Hindernis",
      "Blitzschlag",
      "Erfrieren",
      "Hiebverletzung / Schlägerei",
      "Hohe Krafteinwirkung",
      "Kollision / Zusammenprall",
      "Hochgeschwindigkeitsverletzung",
      "Schnittverletzung",
      "Stich- / Pfählungsverletzung",
      "Stromunfall",
      "Sturz / gestürzt",
      "Sturz über 3 m / mehrere Treppenstufen",
      "Tierbisse / Tierstiche",
      "Verätzungen",
      "Verbrennung / Verbrühung",
      "Vergewaltigung / sexueller Übergriff",
      "Verkehrsunfall",
      "Sonstige mechanische Einwirkung / unklarer Mechanismus"
    ],
    "whenQuestion": "med_grund",
    "whenValue": "Verletzung"
  },
  "verletzung_v51_muster": {
    "id": "verletzung_v51_muster",
    "text": "Welche Verletzungsart wird vermutet bzw. soll genauer lokalisiert werden?",
    "type": "choice",
    "order": 9670.5,
    "options": [
      "Frakturverdacht / Knochenverletzung",
      "Luxations- / Gelenkverletzungsverdacht",
      "Prellung / Quetschung",
      "Schnitt- / Riss- / Platzwunde",
      "Stich- / Pfählungsverletzung",
      "Biss- / Stichverletzung",
      "Elektrische Verletzung / Strommarke",
      "Verbrennung / Verbrühung / Verätzung",
      "Sonstige Verletzung / unklar"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": [
      "Anprall gegen festes Hindernis",
      "Blitzschlag",
      "Erfrieren",
      "Hiebverletzung / Schlägerei",
      "Hohe Krafteinwirkung",
      "Kollision / Zusammenprall",
      "Hochgeschwindigkeitsverletzung",
      "Schnittverletzung",
      "Stich- / Pfählungsverletzung",
      "Stromunfall",
      "Sturz / gestürzt",
      "Sturz über 3 m / mehrere Treppenstufen",
      "Tierbisse / Tierstiche",
      "Vergewaltigung / sexueller Übergriff",
      "Verkehrsunfall",
      "Verbrennung / Verbrühung",
      "Verätzungen",
      "Sonstige mechanische Einwirkung / unklarer Mechanismus"
    ]
  },
  "verletzung_v49_lokalisation": {
    "id": "verletzung_v49_lokalisation",
    "text": "Wo befindet sich die Verletzung hauptsächlich?",
    "type": "choice",
    "order": 9671,
    "skipWhenQuestion": "verletzung_v51_koerperkarte",
    "skipWhenValue": "*",
    "options": [
      "Kopf / Gesicht",
      "Hals",
      "Brustkorb",
      "Bauch / Becken",
      "Rücken / Wirbelsäule",
      "Arm / Hand",
      "Bein / Fuß",
      "Mehrere Körperregionen",
      "Unbekannt"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": [
      "Anprall gegen festes Hindernis",
      "Blitzschlag",
      "Erfrieren",
      "Hiebverletzung / Schlägerei",
      "Hohe Krafteinwirkung",
      "Kollision / Zusammenprall",
      "Hochgeschwindigkeitsverletzung",
      "Schnittverletzung",
      "Sturz / gestürzt",
      "Sonstige mechanische Einwirkung / unklarer Mechanismus"
    ]
  },
  "verletzung_v49_tierart": {
    "id": "verletzung_v49_tierart",
    "text": "Um welches Tier handelt es sich?",
    "type": "choice",
    "order": 9672,
    "options": [
      "Hund",
      "Katze",
      "Pferd / Großtier",
      "Nutztier",
      "Wildtier",
      "Insekt / Wespe / Biene",
      "Reptil / Schlange",
      "Sonstiges Tier",
      "Unbekannt"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Tierbisse / Tierstiche"
  },
  "verletzung_v49_tierort": {
    "id": "verletzung_v49_tierort",
    "text": "Wo wurde die Person durch das Tier verletzt?",
    "type": "choice",
    "order": 9673,
    "options": [
      "Kopf / Gesicht / Hals",
      "Brust / Bauch",
      "Arm / Hand",
      "Bein / Fuß",
      "Mehrere Körperregionen",
      "Unbekannt"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Tierbisse / Tierstiche"
  },
  "verletzung_v49_tiergefahr": {
    "id": "verletzung_v49_tiergefahr",
    "text": "Ist das Tier noch vor Ort und stellt es eine Gefahr für Patient oder Einsatzkräfte dar?",
    "type": "choice",
    "order": 9674,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Tierbisse / Tierstiche"
  },
  "verletzung_v49_stromart": {
    "id": "verletzung_v49_stromart",
    "text": "Um welche Stromart bzw. Stromquelle handelt es sich?",
    "type": "choice",
    "order": 9672,
    "options": [
      "Hochspannung",
      "Niederspannung / Haushaltsstrom",
      "Bahn / Oberleitung",
      "Industrieanlage / unbekannte Spannung",
      "Fahrzeug / Hochvoltsystem",
      "Unbekannt"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Stromunfall"
  },
  "verletzung_v49_stromfrei": {
    "id": "verletzung_v49_stromfrei",
    "text": "Ist die Stromquelle sicher abgeschaltet und besteht kein weiterer Stromkontakt?",
    "type": "choice",
    "order": 9673,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Stromunfall"
  },
  "verletzung_v49_stromverbrennung": {
    "id": "verletzung_v49_stromverbrennung",
    "text": "Bestehen sichtbare Strommarken oder Verbrennungen?",
    "type": "choice",
    "order": 9674,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Stromunfall"
  },
  "verletzung_v49_taeter": {
    "id": "verletzung_v49_taeter",
    "text": "Ist der mögliche Täter noch vor Ort?",
    "type": "choice",
    "order": 9672,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Vergewaltigung / sexueller Übergriff"
  },
  "verletzung_v49_einvernehmlich": {
    "id": "verletzung_v49_einvernehmlich",
    "text": "Kann sicher gesagt werden, dass der sexuelle Kontakt nicht einvernehmlich war oder die Person dazu gezwungen wurde?",
    "type": "choice",
    "order": 9673,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Vergewaltigung / sexueller Übergriff"
  },
  "verletzung_v49_sexverletzung": {
    "id": "verletzung_v49_sexverletzung",
    "text": "Sind Verletzungen zurückgeblieben oder bestehen aktuell Blutungen, starke Schmerzen oder andere akute Beschwerden?",
    "type": "choice",
    "order": 9674,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Vergewaltigung / sexueller Übergriff"
  },
  "verletzung_v49_vuenergie": {
    "id": "verletzung_v49_vuenergie",
    "text": "Welche besondere Unfallmechanik liegt vor?",
    "type": "choice",
    "order": 9672,
    "options": [
      "Hohe Geschwindigkeit",
      "Überschlag",
      "Frontal-/Seitenkollision",
      "Fußgänger / Radfahrer angefahren",
      "Person aus Fahrzeug geschleudert",
      "Eingeklemmt / eingeschlossen",
      "Keine besondere Mechanik bekannt",
      "Unbekannt"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Verkehrsunfall"
  },
  "verletzung_v49_vueingeklemmt": {
    "id": "verletzung_v49_vueingeklemmt",
    "text": "Ist eine Person eingeklemmt oder im Fahrzeug eingeschlossen?",
    "type": "choice",
    "order": 9673,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Verkehrsunfall"
  },
  "verletzung_v49_exposition": {
    "id": "verletzung_v49_exposition",
    "text": "Welche Art der Verletzung liegt vor?",
    "type": "choice",
    "order": 9672,
    "options": [
      "Thermische Verbrennung",
      "Verbrühung",
      "Chemische Verätzung",
      "Rauch / heiße Dämpfe eingeatmet",
      "Unbekannt"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": [
      "Verbrennung / Verbrühung",
      "Verätzungen"
    ]
  },
  "verletzung_v49_expositionsquelle": {
    "id": "verletzung_v49_expositionsquelle",
    "text": "Ist die Gefahrenquelle noch vorhanden oder besteht weitere Expositionsgefahr?",
    "type": "choice",
    "order": 9673,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": [
      "Verbrennung / Verbrühung",
      "Verätzungen"
    ]
  },
  "verletzung_v49_stichort": {
    "id": "verletzung_v49_stichort",
    "text": "Wo befindet sich die Stich-/Pfählungsverletzung?",
    "type": "choice",
    "order": 9672,
    "options": [
      "Kopf / Hals",
      "Brustkorb",
      "Bauch / Becken",
      "Rücken",
      "Arm / Hand",
      "Bein / Fuß",
      "Unbekannt"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Stich- / Pfählungsverletzung"
  },
  "verletzung_v49_sturzhoehe": {
    "id": "verletzung_v49_sturzhoehe",
    "text": "Aus welcher Höhe bzw. über wie viele Treppenstufen erfolgte der Sturz?",
    "type": "choice",
    "order": 9672,
    "options": [
      "Unter 1 m",
      "1–3 m",
      "Über 3 m",
      "Mehrere Treppenstufen",
      "Unbekannt"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Sturz über 3 m / mehrere Treppenstufen"
  },
  "verletzung_v49_blutung": {
    "id": "verletzung_v49_blutung",
    "text": "Besteht eine starke oder nicht kontrollierbare Blutung?",
    "type": "choice",
    "order": 9680,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "*"
  },
  "verletzung_v49_atmung": {
    "id": "verletzung_v49_atmung",
    "text": "Bestehen aktuell Atemprobleme oder eine zunehmende Atemnot?",
    "type": "choice",
    "order": 9681,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "*"
  },
  "verletzung_v49_bewusstsein": {
    "id": "verletzung_v49_bewusstsein",
    "text": "Ist die Person wach und ansprechbar?",
    "type": "choice",
    "order": 9682,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "*"
  },
  "verletzung_v49_schmerz": {
    "id": "verletzung_v49_schmerz",
    "text": "Bestehen starke oder zunehmende Schmerzen?",
    "type": "choice",
    "order": 9683,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "*"
  },
  "verletzung_v49_weitere": {
    "id": "verletzung_v49_weitere",
    "text": "Sind weitere Verletzungen, Beschwerden oder auffällige Symptome vorhanden?",
    "type": "choice",
    "order": 9684,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "*"
  },
  "verletzung_v49_zugang": {
    "id": "verletzung_v49_zugang",
    "text": "Ist die Person frei zugänglich?",
    "type": "choice",
    "order": 9690,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "*"
  },
  "verletzung_v49_zugang_grund": {
    "id": "verletzung_v49_zugang_grund",
    "text": "Warum ist der Patient nicht frei zugänglich?",
    "type": "choice",
    "order": 9691,
    "options": [
      "Abgestürzt",
      "Eingeklemmt",
      "Verschlossene Wohnung / Türöffnung erforderlich",
      "Verschüttet / eingestürzt",
      "Auf Dach / Balkon / Höhe",
      "In Fahrzeug / Aufzug eingeschlossen",
      "Unzugängliches Gelände / schwer erreichbar",
      "Gefahrenbereich / Einsatzstelle nicht sicher",
      "Sonstiger Zugangshinderungsgrund",
      "Unbekannt"
    ],
    "whenQuestion": "verletzung_v49_zugang",
    "whenValue": "Nein"
  },
  "verletzung_v49_allergie": {
    "id": "verletzung_v49_allergie",
    "text": "Bestehen nach Tierbiss/-stich aktuell Atemprobleme, Schwellungen, Kreislaufprobleme oder eine andere allergische Reaktion?",
    "type": "choice",
    "order": 9685,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Tierbisse / Tierstiche"
  },
  "verletzung_v49_stromsymptome": {
    "id": "verletzung_v49_stromsymptome",
    "text": "Bestehen nach dem Stromunfall Bewusstseinsstörung, Herzbeschwerden, Krampfanfall oder andere auffällige Beschwerden?",
    "type": "choice",
    "order": 9685,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Stromunfall"
  },
  "verletzung_v49_vublutung": {
    "id": "verletzung_v49_vublutung",
    "text": "Gibt es neben der Unfallmechanik sichtbare Verletzungen oder Beschwerden, die besonders beachtet werden müssen?",
    "type": "choice",
    "order": 9685,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Verkehrsunfall"
  },
  "verletzung_v49_sexakut": {
    "id": "verletzung_v49_sexakut",
    "text": "Bestehen aktuell starke Blutungen, Bewusstseinsstörungen, Atemprobleme oder andere akute Beschwerden?",
    "type": "choice",
    "order": 9685,
    "options": [
      "Ja",
      "Nein",
      "Unsicher (kann nicht beurteilt werden)",
      "Unbekannter (kein Kontakt / keine Angabe möglich)"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": "Vergewaltigung / sexueller Übergriff"
  },
  "verletzung_v49_expositionsbereich": {
    "id": "verletzung_v49_expositionsbereich",
    "text": "Welche Körperregion ist hauptsächlich betroffen?",
    "type": "choice",
    "order": 9686,
    "options": [
      "Gesicht / Augen",
      "Atemwege / Brustkorb",
      "Arme / Hände",
      "Beine / Füße",
      "Bauch / Rücken",
      "Großflächig / mehrere Körperregionen",
      "Unbekannt"
    ],
    "whenQuestion": "verletzung_v49_mechanismus",
    "whenValue": [
      "Verbrennung / Verbrühung",
      "Verätzungen"
    ]
  },
  "verletzung_v51_koerperkarte": {
    "id": "verletzung_v51_koerperkarte",
    "text": "Wo befindet sich die vermutete Verletzung? Bitte direkt am Körperschema markieren.",
    "type": "injurymap",
    "order": 9686.5,
    "whenQuestion": "verletzung_v51_muster",
    "whenValue": [
      "Frakturverdacht / Knochenverletzung",
      "Luxations- / Gelenkverletzungsverdacht",
      "Prellung / Quetschung",
      "Schnitt- / Riss- / Platzwunde",
      "Stich- / Pfählungsverletzung",
      "Biss- / Stichverletzung",
      "Elektrische Verletzung / Strommarke",
      "Verbrennung / Verbrühung / Verätzung",
      "Sonstige Verletzung / unklar"
    ]
  },
};

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
        if(version>=4){ data.catalog=mergeDeep(data.catalog,value); changed=true; }
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
  // Die Körperkarte gehört bei Verbrennung/Verbrühung/Verätzung direkt zum
  // gewählten Verletzungsmuster. Sie darf deshalb auch ohne vorherige
  // "Verletzungsart"-Antwort sichtbar werden. Bei allen anderen Mustern
  // bleibt die normale Abhängigkeit von verletzung_v51_muster bestehen.
  if(q?.id==="verletzung_v51_koerperkarte" && isBurnMechanism()) return true;
  if(q.whenQuestion && q.whenQuestion==="med_grund" && q.whenValue==="Verletzung" && answers.med_grund==="Arbeits- / Betriebs- / Schulunfall") { /* gleicher Verletzungspfad */ } else if(q.whenQuestion&&!matches(answers[q.whenQuestion],q.whenValue)) return false;
  if(q.skipWhenQuestion&&matches(answers[q.skipWhenQuestion],q.skipWhenValue)) return false;
  if(q.whenAll&&!q.whenAll.every(condition)) return false;
  if(q.whenAny&&q.whenAny.length&&!q.whenAny.some(condition)) return false;
  if(q.whenNot&&q.whenNot.some(condition)) return false;
  if(q.whenTextIncludes&&q.whenTextIncludes.length){const ok=q.whenTextIncludes.some(c=>{const t=String(answers[c.questionId]??"").toLowerCase();return(c.terms||[]).some(term=>t.includes(String(term).toLowerCase()));});if(!ok)return false;}
  return true;
}
function isInjuryReason(){ return answers.med_grund==="Verletzung" || answers.med_grund==="Arbeits- / Betriebs- / Schulunfall"; }
function questions(){
  if(category==="grossschaden") return grossQuestions;
  let qs=Object.values(data.catalog?.[category]||{}).filter(q=>q?.id&&q?.text).map(normalizeChoiceOptions);
  if(category==="medizin") {
    const byId=new Map(qs.map(q=>[q.id,q]));
    const initial=medicalInitialQuestions.map(q=>byId.get(q.id)?{...q,...byId.get(q.id),order:q.order}:q);
    qs=qs.filter(q=>!medicalInitialQuestions.some(i=>i.id===q.id));
    qs=[...initial,...qs];
    if(isInjuryReason()) {
      const supplement=Object.values(injurySupplementQuestions);
      const oldInjury=qs.filter(q=>q.whenQuestion!=="med_grund" || (q.whenQuestion==="med_grund" && !["Verletzung","Arbeits- / Betriebs- / Schulunfall"].includes(q.whenValue)));
      const injuryCatalog=qs.filter(q=>q.whenQuestion==="med_grund" && ["Verletzung","Arbeits- / Betriebs- / Schulunfall"].includes(q.whenValue));
      qs=[...initial,...supplement,...oldInjury,...injuryCatalog];
    }
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
  // Verletzungspfad: erst Unfallmechanismus, danach das passende
  // Verletzungsmuster und anschließend die Körperkarte.
  // Verbrennung/Verbrühung/Verätzung ist bereits durch den Mechanismus
  // eindeutig und geht deshalb direkt zur Körperflächenkarte.
  if(category==="medizin" && isInjuryReason()){
    if(answers.verdachtsdiagnose!==undefined) return null;

    const injuryQs=questions().filter(q=>visible(q)&&answers[q.id]===undefined && q.id!=="verdachtsdiagnose");
    const mech=String(answers.verletzung_v49_mechanismus||"");

    // 1) Mechanismus immer zuerst.
    if(!mech){
      return injuryQs.find(q=>q.id==="verletzung_v49_mechanismus") || null;
    }

    // 2) Verbrennung/Verbrühung/Verätzung: keine fremden
    // Verletzungsarten abfragen – direkt Körperkarte.
    if(["Verbrennung / Verbrühung","Verätzungen"].includes(mech)){
      const map=injuryQs.find(q=>q.id==="verletzung_v51_koerperkarte");
      if(map) return map;
    }

    // 3) Bestimmte Mechanismen haben bereits ein eindeutiges Muster.
    // Dadurch werden z.B. bei Stromunfall oder Tierbiss keine unpassenden
    // Fraktur-/Verbrennungsoptionen angeboten.
    const directPattern={
      "Stromunfall":"Elektrische Verletzung / Strommarke",
      "Blitzschlag":"Elektrische Verletzung / Strommarke",
      "Tierbisse / Tierstiche":"Biss- / Stichverletzung",
      "Stich- / Pfählungsverletzung":"Stich- / Pfählungsverletzung",
      "Schnittverletzung":"Schnitt- / Riss- / Platzwunde",
      "Verbrennung / Verbrühung":"Verbrennung / Verbrühung / Verätzung",
      "Verätzungen":"Verbrennung / Verbrühung / Verätzung"
    };
    const direct=directPattern[mech];
    if(direct && answers.verletzung_v51_muster===undefined){
      answers.verletzung_v51_muster=direct;
    }

    // 4) Wenn das Verletzungsmuster noch nicht feststeht, gezielt danach fragen.
    if(answers.verletzung_v51_muster===undefined){
      const pattern=injuryQs.find(q=>q.id==="verletzung_v51_muster");
      if(pattern) return pattern;
    }

    // 5) Danach immer die Körperkarte, soweit das gewählte Muster eine
    // Lokalisierung sinnvoll macht. Keine "Unbekannt/keine Angabe"-Option.
    const map=injuryQs.find(q=>q.id==="verletzung_v51_koerperkarte");
    if(map) return map;

    // 6) Danach die restlichen relevanten Verletzungsfragen in sinnvoller Reihenfolge.
    const priorityIds=[
      "verletzung_v49_tierart","verletzung_v49_tierort","verletzung_v49_tiergefahr",
      "verletzung_v49_stromart","verletzung_v49_stromfrei","verletzung_v49_stromverbrennung",
      "verletzung_v49_taeter","verletzung_v49_einvernehmlich","verletzung_v49_sexverletzung","verletzung_v49_sexakut",
      "verletzung_v49_lokalisation","verletzung_v49_vuenergie","verletzung_v49_vueingeklemmt",
      "verletzung_v49_exposition","verletzung_v49_expositionsquelle","verletzung_v49_expositionsbereich",
      "verletzung_v49_stichort","verletzung_v49_sturzhoehe","verletzung_v49_blutung",
      "verletzung_v49_atmung","verletzung_v49_bewusstsein","verletzung_v49_schmerz",
      "verletzung_v49_weitere","verletzung_v49_allergie","verletzung_v49_stromsymptome",
      "verletzung_v49_vublutung","verletzung_v49_zugang","verletzung_v49_zugang_grund"
    ];
    for(const id of priorityIds){
      const q=injuryQs.find(x=>x.id===id);
      if(q) return q;
    }
    const diagnosis=Object.values(data.catalog?.medizin||{}).find(q=>q.id==="verdachtsdiagnose");
    return diagnosis||null;
  }

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
  if(g==="Krampfanfall"){
    if(answers.med_spricht==="Ja" && (answers.krampf_27==="Ja" || answers.krampf_28==="Ja")) return {primary:"Partieller Krampfanfall möglich",alternatives:["Fokaler epileptischer Anfall","Andere neurologische Ursache"]};
    return {primary:"Krampfanfall / epileptisches Ereignis möglich",alternatives:["Erstmaliger Krampfanfall","Andere Ursache"]};
  }
  if(g==="Psychische Erkrankung / Suizid") return {primary:"Akute psychische Krise – Gefährdung gemäß Abfrage",alternatives:["Suizidale Krise","Akute psychische/psychiatrische Symptomatik"]};
  if(g==="Vergiftung") {
    if(answers.vergiftung_sub==="Pilz / unbekannter Pilz" || Object.keys(answers).some(k=>k.startsWith("pantherina_"))) return {primary:"Mögliche Pilzintoxikation / Pantherina-Syndrom",alternatives:["Andere Intoxikation","Unklare Vergiftung"]};
    return {primary:"Mögliche Intoxikation / Vergiftung",alternatives:["Unklare Exposition","Andere Ursache"]};
  }
  if(g==="Geburt / Schwangerschaft") return {primary:"Geburtshilflicher Notfall / Schwangerschaftsbeschwerden",alternatives:["Geburtsbeginn","Andere geburtshilfliche Ursache"]};
  if(g==="Verletzung" || g==="Arbeits- / Betriebs- / Schulunfall") {
    const m=String(answers.verletzung_v49_mechanismus||"");
    if(answers.verletzung_v51_muster){
      const mstr=String(answers.verletzung_v51_muster);
      const ids=Array.isArray(answers.verletzung_v51_koerperkarte)?answers.verletzung_v51_koerperkarte:[];
      const labels=ids.map(id=>injuryMapRegions.find(r=>r.id===id)?.label||id);
      if(mstr.startsWith("Fraktur") && labels.length) return {primary:`Verdacht Fraktur – ${labels.join(", ")}`,alternatives:["Prellung / Quetschung","Luxations- / Gelenkverletzung"]};
      if(mstr.startsWith("Luxations") && labels.length) return {primary:`Verdacht Luxation – ${labels.join(", ")}`,alternatives:["Frakturverdacht","Band-/Gelenkverletzung"]};
    }
    if(m==="Stromunfall") return {primary:"Stromunfall / elektrische Verletzung möglich",alternatives:["Elektrische Verletzung mit Verbrennung","Andere Unfallfolge"]};
    if(m==="Tierbisse / Tierstiche") return {primary:"Tierbiss / Tierstich – Verletzungs- und ggf. allergische Reaktion möglich",alternatives:["Biss-/Stichverletzung","Andere Verletzungsfolge"]};
    if(m==="Stich- / Pfählungsverletzung") return {primary:"Penetrierende Verletzung / Stich- oder Pfählungstrauma möglich",alternatives:["Weichteilverletzung","Andere Verletzungsfolge"]};
    if(m==="Verkehrsunfall") return {primary:"Verkehrsunfall mit Verletzung – Unfallmechanik gemäß Abfrage",alternatives:["Mehrfachverletzung möglich","Andere Unfallfolge"]};
    if(m==="Vergewaltigung / sexueller Übergriff") return {primary:"Mögliche Verletzungsfolge nach sexuellem Übergriff",alternatives:["Akute Verletzung","Psychische Belastungsreaktion / weitere Abklärung"]};
    if(m==="Verbrennung / Verbrühung" || m==="Verätzungen") {
      const ids=Array.isArray(answers.verletzung_v51_koerperkarte)?answers.verletzung_v51_koerperkarte:[];
      const hasBurnMap=ids.length>0;
      const vk=hasBurnMap?burnMapValue(new Set(ids)):0;
      return {primary:hasBurnMap?`${m} – betroffene Körperoberfläche ca. ${vk.toLocaleString('de-DE',{minimumFractionDigits:1,maximumFractionDigits:1})} %`:m,alternatives:["Thermische Verletzung / Verbrennung","Verbrühung / Verätzung"]};
    }
    return {primary:"Akute Verletzung / Trauma – Schweregrad gemäß Abfrage",alternatives:["Kopf-/Wirbelsäulentrauma","Extremitäten-/Weichteilverletzung"]};
  }
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

function R(id,label,x,y,w,h,burnValue=0,shape="rect"){
  return {id,label,x,y,w,h,burnValue,shape};
}

// V61: Die Hotspots verwenden jetzt das echte Pixelkoordinatensystem des Bildes
// (1536 x 1251) und werden als SVG über das Bild gelegt. Dadurch bleiben Bild
// und Klickbereiche auf Handy, Tablet und PC exakt gekoppelt.
const injuryMapRegions=[
  // V62: Hotspots exakt auf die tatsächlichen Körperpositionen des eingebauten
  // 1536 x 1251 px Körperschemas gelegt. Vorderseite links, Rückseite rechts.
  // Bild links entspricht jeweils der rechten Patientenseite.
  R("front_skull","Schädeldecke vorne",390,42,100,68,4.5),
  R("front_face","Gesicht vorne",395,108,90,52,4.5),
  R("front_temple_r","Schläfe rechts",395,105,28,35,0),
  R("front_temple_l","Schläfe links",457,105,28,35,0),
  R("front_jaw_r","Kiefer rechts",405,140,32,28,0),
  R("front_jaw_l","Kiefer links",448,140,32,28,0),
  R("front_neck","Hals vorne",415,177,50,45,.5),
  R("front_chest","Brustkorb",330,200,220,150,9),
  R("front_abdomen","Bauch",365,350,150,92,6),
  R("front_pelvis","Becken / Hüfte",365,442,150,105,3),
  R("front_shoulder_r","Schulter rechts",275,200,72,82,.25),
  R("front_shoulder_l","Schulter links",533,200,72,82,.25),
  R("front_upperarm_r","Oberarm rechts",250,260,75,122,1.5),
  R("front_upperarm_l","Oberarm links",555,260,75,122,1.5),
  R("front_elbow_r","Ellenbogen rechts",238,372,72,55,.25),
  R("front_elbow_l","Ellenbogen links",590,372,72,55,.25),
  R("front_forearm_r","Unterarm rechts",165,372,100,145,1.75),
  R("front_forearm_l","Unterarm links",615,372,100,145,1.75),
  R("front_wrist_r","Handgelenk rechts",145,510,75,48,.25),
  R("front_wrist_l","Handgelenk links",660,510,75,48,.25),
  R("front_palm_r","Handfläche rechts",115,537,105,58,.5),
  R("front_palm_l","Handfläche links",685,537,105,58,.5),
  R("front_thigh_r","Oberschenkel rechts",365,527,75,240,4.5),
  R("front_thigh_l","Oberschenkel links",450,527,75,240,4.5),
  R("front_knee_r","Knie rechts",360,767,85,72,.25),
  R("front_knee_l","Knie links",445,767,85,72,.25),
  R("front_lowerleg_r","Schienbein / Unterschenkel rechts",365,839,75,250,4),
  R("front_lowerleg_l","Schienbein / Unterschenkel links",450,839,75,250,4),
  R("front_ankle_r","Sprunggelenk rechts",360,1084,80,38,.15),
  R("front_ankle_l","Sprunggelenk links",450,1084,80,38,.15),
  R("front_foot_r","Fuß rechts",330,1114,105,68,.5),
  R("front_foot_l","Fuß links",445,1114,105,68,.5),
  ...makeDigitRegionsPx("front_finger_r","Finger","rechts",118,577,98,42,0),
  ...makeDigitRegionsPx("front_finger_l","Finger","links",687,577,98,42,0),
  ...makeDigitRegionsPx("front_toe_r","Zehe","rechts",332,1152,100,38,0),
  ...makeDigitRegionsPx("front_toe_l","Zehe","links",448,1152,100,38,0),

  // RÜCKSEITE
  R("back_skull","Schädeldecke hinten",1040,42,100,68,4.5),
  R("back_head_side_r","Schläfe rechts hinten",1040,105,28,35,0),
  R("back_head_side_l","Schläfe links hinten",1112,105,28,35,0),
  R("back_neck","Nacken",1065,177,50,45,.5),
  R("back_upperback","Oberer Rücken",985,200,210,150,9),
  R("back_lowerback","Unterer Rücken",1015,350,150,92,6),
  R("back_pelvis","Becken / Hüfte hinten",1010,442,155,105,3),
  R("back_shoulder_r","Schulter rechts hinten",940,200,72,82,.25),
  R("back_shoulder_l","Schulter links hinten",1178,200,72,82,.25),
  R("back_upperarm_r","Oberarm rechts hinten",910,260,75,122,1.5),
  R("back_upperarm_l","Oberarm links hinten",1200,260,75,122,1.5),
  R("back_elbow_r","Ellenbogen rechts hinten",895,372,72,55,.25),
  R("back_elbow_l","Ellenbogen links hinten",1218,372,72,55,.25),
  R("back_forearm_r","Unterarm rechts hinten",825,372,100,145,1.75),
  R("back_forearm_l","Unterarm links hinten",1270,372,100,145,1.75),
  R("back_wrist_r","Handgelenk rechts hinten",805,510,75,48,.25),
  R("back_wrist_l","Handgelenk links hinten",1320,510,75,48,.25),
  R("back_palm_r","Handfläche rechts hinten",775,537,105,58,.5),
  R("back_palm_l","Handfläche links hinten",1340,537,105,58,.5),
  R("back_thigh_r","Oberschenkel rechts hinten",1010,527,75,240,4.5),
  R("back_thigh_l","Oberschenkel links hinten",1100,527,75,240,4.5),
  R("back_knee_r","Knie rechts hinten",1005,767,85,72,.25),
  R("back_knee_l","Knie links hinten",1095,767,85,72,.25),
  R("back_lowerleg_r","Unterschenkel rechts hinten",1010,839,75,250,4),
  R("back_lowerleg_l","Unterschenkel links hinten",1095,839,75,250,4),
  R("back_ankle_r","Sprunggelenk rechts hinten",1005,1084,80,38,.15),
  R("back_ankle_l","Sprunggelenk links hinten",1090,1084,80,38,.15),
  R("back_foot_r","Fuß rechts hinten",975,1114,105,68,.5),
  R("back_foot_l","Fuß links hinten",1090,1114,105,68,.5),
  ...makeDigitRegionsPx("back_finger_r","Finger","rechts hinten",778,577,98,42,0),
  ...makeDigitRegionsPx("back_finger_l","Finger","links hinten",1342,577,98,42,0),
  ...makeDigitRegionsPx("back_toe_r","Zehe","rechts hinten",978,1152,100,38,0),
  ...makeDigitRegionsPx("back_toe_l","Zehe","links hinten",1092,1152,100,38,0)];
function makeDigitRegionsPx(prefix,kind,side,x,y,w,h,burnValue){
  const arr=[]; const gap=2; const cw=(w-gap*4)/5;
  for(let i=0;i<5;i++) arr.push({id:`${prefix}_${i+1}`,label:`${kind} ${i+1} ${side}`,x:x+i*(cw+gap),y,w:cw,h,burnValue,shape:"rect"});
  return arr;
}
function burnMapValue(selected){return [...selected].reduce((sum,key)=>{const id=String(key);const r=injuryMapRegions.find(x=>x.id===id);return sum+(Number(r?.burnValue)||0);},0);}
function injuryMapLabel(){
  const m=String(answers.verletzung_v51_muster||"");
  return m.replace(" / Knochenverletzung","").replace("- / Gelenkverletzungsverdacht","");
}
function isBurnMechanism(){return ["Verbrennung / Verbrühung","Verätzungen"].includes(String(answers.verletzung_v49_mechanismus||""));}
function renderInjuryMapQuestion(q,area){
  const selected=new Set(Array.isArray(answers[q.id])?answers[q.id]:[]);
  const burn=isBurnMechanism();
  const box=document.createElement("div"); box.className="injury-map-box";
  box.innerHTML=`<div class="injury-map-note"><b>${burn?"🔥 Körperflächen-/Verletzungskarte":"🦴 Verletzungskarte"}</b><br>Bitte eine oder mehrere betroffene Körperregionen <b>direkt auf dem Körperschema</b> markieren. Die markierten Bereiche werden orange dargestellt. ${burn?"Bei Verbrennung, Verbrühung und Verätzung wird daraus zusätzlich eine orientierende VKOF-Schätzung berechnet.":"Bei Fraktur, Luxation, Wunde, Stich, Biss usw. wird keine Prozentangabe berechnet."}</div><div class="injury-map-summary">Markiert: <strong id="injuryMapSummary">noch nichts</strong>${burn?` · VKOF: <strong id="injuryMapPercent">0,0 %</strong>`:""}</div><div class="injury-map-stage"><img src="koerperkarte_verbrennung.jpg" alt="Körperschema Vorder- und Rückseite"><svg class="injury-map-svg" viewBox="0 0 1536 1251" preserveAspectRatio="none" aria-label="Körperschema Vorder- und Rückseite"></svg></div>`;
  const svg=box.querySelector('.injury-map-svg'); const summary=box.querySelector('#injuryMapSummary'); const percent=box.querySelector('#injuryMapPercent');
  const renderSummary=()=>{
    summary.textContent=selected.size?[...selected].map(id=>injuryMapRegions.find(r=>r.id===id)?.label||id).join(" · "):"noch nichts";
    if(percent) percent.textContent=burn?Math.min(100,burnMapValue(selected)).toLocaleString('de-DE',{minimumFractionDigits:1,maximumFractionDigits:1})+' %':"";
  };
  const ns="http://www.w3.org/2000/svg";
  injuryMapRegions.forEach(r=>{
    const el=document.createElementNS(ns,"rect"); el.setAttribute("x",r.x); el.setAttribute("y",r.y); el.setAttribute("width",r.w); el.setAttribute("height",r.h); el.setAttribute("rx",Math.min(18,r.w*0.12)); el.setAttribute("class","injury-hotspot-svg"); el.setAttribute("tabindex","0"); el.setAttribute("aria-label",r.label); el.setAttribute("role","button");
    if(selected.has(r.id)) el.classList.add('selected');
    const toggle=()=>{if(selected.has(r.id)){selected.delete(r.id);el.classList.remove('selected')}else{selected.add(r.id);el.classList.add('selected')} answers[q.id]=[...selected];renderSummary();};
    el.addEventListener("click",toggle); el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle();}});
    svg.appendChild(el);
  });
  renderSummary();
  const actions=document.createElement('div'); actions.className='free-actions';
  const next=document.createElement('button'); next.className='next-free'; next.textContent='Weiter →'; next.onclick=()=>{pushHistory();answers[q.id]=[...selected];steps++;render();};
  const clear=document.createElement('button'); clear.className='secondary unknown-btn'; clear.textContent='Auswahl löschen'; clear.onclick=()=>{selected.clear();answers[q.id]=[];hotspots.querySelectorAll('.selected').forEach(x=>x.classList.remove('selected'));renderSummary();};
  actions.append(next,clear); box.appendChild(actions); area.appendChild(box);
}
function renderBurnMapQuestion(q,area){ renderInjuryMapQuestion(q,area); }
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
  if(q.type==="burnmap") {
    renderBurnMapQuestion(q,area);
  } else if(q.type==="injurymap") {
    renderInjuryMapQuestion(q,area);
  } else if(q.type==="choice") {
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
    if(q.allowEmpty){const b=document.createElement("button");b.className="secondary unknown-btn";b.textContent="Leer lassen";b.onclick=()=>{pushHistory();answers[q.id]="";steps++;render();};actions.appendChild(b);}const unk=document.createElement("button");unk.className="secondary unknown-btn";unk.textContent="Unbekannt / keine Angabe";unk.onclick=()=>{pushHistory();answers[q.id]="Unbekannt";steps++;render();};actions.appendChild(unk);box.appendChild(actions);area.appendChild(box);
    // Die Verdachtsdiagnose soll auf Mobilgeräten nicht automatisch fokussiert
    // werden. Sonst scrollt der Browser nach jedem "Weiter" wieder zum Textfeld.
    if(q.id!=="verdachtsdiagnose") setTimeout(()=>input.focus(),50);
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
  if(category==="medizin" && (answers.med_grund==="Verletzung" || answers.med_grund==="Arbeits- / Betriebs- / Schulunfall")){
    const m=String(answers.verletzung_v49_mechanismus||"");
    const danger=String(answers.verletzung_v49_zugang_grund||"");
    if(["Stromunfall","Verbrennung / Verbrühung","Verätzungen","Eingeklemmt / eingeschlossen"].includes(m) || /eingeklemmt|eingeschlossen|verschlossene wohnung|abgestürzt|verschüttet|höhe|fahrzeug|aufzug|unzugänglich|gefahrenbereich/i.test(danger)) s.add("Feuerwehr – Technische Hilfe / Gefahrenabwehr lageabhängig prüfen");
    if(m==="Hiebverletzung / Schlägerei" || m==="Vergewaltigung / sexueller Übergriff" || answers.verletzung_v49_taeter==="Ja") s.add("Polizei – lageabhängig zusätzlich prüfen");
    if(["Stromunfall","Stich- / Pfählungsverletzung","Hohe Krafteinwirkung","Hochgeschwindigkeitsverletzung","Verkehrsunfall"].includes(m)) s.add("NEF / Notarzt – Indikation anhand hinterlegter Kriterien prüfen");
    if(answers.verletzung_v49_blutung==="Ja" || answers.verletzung_v49_atmung==="Ja" || answers.verletzung_v49_bewusstsein==="Nein") s.add("NEF / Notarzt – relevantes Verletzungs-/Vitalrisiko prüfen");
  }
  if(reasons.length) s.add("NEF / Notarzt");
  if(answers.deterioration) s.add("Rettungsdienst – akute Verschlechterung berücksichtigen");
  if(category==="brand") s.add("Feuerwehr");
  // Zusätzliche Kräfte nur bei konkreten Hinweisen.
  if(/feuer|rauch|gas|gefahrstoff|chemikal|brand|eingeklemmt|eingeschlossen|stromleitung|explosion|einsturz|abgestürzt|verschüttet|verschlossene wohnung|auf dach|balkon|höhe|fahrzeug|aufzug|unzugängliches gelände/.test(txt)) s.add("Feuerwehr – zusätzlich erforderlich/zu prüfen");
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
    const map={"Atemstörung":"Atemnot / Atemstörung","Brustschmerzen":"Brustschmerz","Kollaps / Kreislaufstörung":"Kollaps / Kreislaufstörung","Bewusstseinsstörung / Wesensveränderung":"Bewusstseinsstörung","Blutungen":"Blutung","Krampfanfall":"Krampfanfall","Vergiftung":"Vergiftung / Intoxikation","Verletzung":"Verletzung / Trauma","Arbeits- / Betriebs- / Schulunfall":"Verletzung / Trauma (Arbeits-/Betriebs-/Schulunfall)","Bauchschmerzen":"Akute Bauchschmerzen","Gefühlsstörung / Lähmung / Sprache / Sehstörung":"Neurologischer Notfall","Geburt / Schwangerschaft":"Geburtshilflicher Notfall","Allergie / Anaphylaxie":"Allergische Reaktion / Anaphylaxie","Herzrhythmusstörungen":"Herzrhythmusstörung","Kopfschmerzen":"Akuter Kopfschmerz","Psychische Erkrankung / Suizid":"Psychischer Notfall","Hitze- / Kälteprobleme":"Hitze-/Kältenotfall","Sonstige Schmerzen":"Akuter Schmerz","Erkrankung / medizinische Hilfeleistung":"Erkrankung / medizinische Hilfeleistung"};
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
function dispatchAnswerFact(q,v){
  const text=String(q?.text||"").toLowerCase(), val=Array.isArray(v)?v.join(", "):String(v??"");
  if(!val) return "";
  // Sicherheits-/Zugangsinformationen sind auch bei einer negativen Antwort wichtig.
  if(text.includes("frei zugänglich")) return val==="Ja"?"Patient frei zugänglich":val.startsWith("Nein")?"Patient nicht frei zugänglich":"Zugang: "+val;
  if(text.includes("wach und ansprechbar")) return val==="Ja"?"wach und ansprechbar":val.startsWith("Nein")?"nicht wach/kaum ansprechbar":"Wachheit/Ansprechbarkeit: "+val;
  if(text.includes("täter noch vor ort")) return val==="Ja"?"Möglicher Täter noch vor Ort":"Möglicher Täter nicht mehr vor Ort";
  if(text.includes("nicht einvernehmlich")) return val==="Ja"?"Sexueller Übergriff nicht einvernehmlich / Zwang angegeben":"Einvernehmlichkeit laut Abfrage: "+val;
  if(text.includes("stromquelle sicher abgeschaltet")) return val==="Ja"?"Stromquelle sicher abgeschaltet":val.startsWith("Nein")?"Stromquelle nicht sicher abgeschaltet":"Stromabschaltung: "+val;
  if(text.includes("starke oder nicht kontrollierbare blutung")) return val==="Ja"?"Starke/nicht kontrollierbare Blutung":`Blutung: ${val}`;
  if(text.includes("atemprobleme")||text.includes("zunehmende atemnot")) return val==="Ja"?"Dyspnoe / Atemnot":`Atmung: ${val}`;
  if(text.includes("starke oder zunehmende schmerzen")) return val==="Ja"?"Starke/zunehmende Schmerzen":`Schmerz: ${val}`;
  if(val==="Nein" || val.startsWith("Unbekannt") || val.startsWith("Unsicher")) return "";
  if(text.includes("brustschmerz")) return val==="Ja"?"Brustschmerz":`Brustschmerz: ${val}`;
  if(text.includes("atemnot")||text.includes("atemprobleme")||text.includes("genügend luft")||text.includes("normal zu sprechen")) return val==="Ja"?"Dyspnoe / Atemnot":`Atmung/Sprechen: ${val}`;
  if(text.includes("wach")&&text.includes("ansprech")) return val==="Ja"?"wach und ansprechbar":"nicht wach/ansprechbar";
  if(text.includes("frei zugänglich")) return val==="Ja"?"Patient frei zugänglich":"Patient nicht frei zugänglich";
  if(text.includes("gekrampft")||text.includes("krampf")) return val==="Ja"?"Krampfanfall":`Krampfanfälle: ${val}`;
  if(text.includes("diabetes")) return val==="Ja"?"Diabetes bekannt":`Diabetes: ${val}`;
  if(text.includes("verwirrt")||text.includes("komisch")||text.includes("wesens")) return val==="Ja"?"Verwirrtheit / Wesensveränderung":`Wesensveränderung: ${val}`;
  if(text.includes("reagiert langsam")) return val==="Ja"?"verlangsamte Reaktion / verändert":"";
  if(text.includes("kopfschmerz")) return val==="Ja"?"Kopfschmerz":`Kopfschmerz: ${val}`;
  if(text.includes("suizid")||text.includes("umbringen")) return val==="Ja"?"Suizidabsicht / Selbstgefährdung":"";
  if(q?.type==="injurymap" && Array.isArray(v)) {
    const labels=v.map(id=>injuryMapRegions.find(r=>r.id===id)?.label||id);
    const m=String(answers.verletzung_v51_muster||"Verletzung");
    const prefix=m.startsWith("Fraktur")?"Verdacht Fraktur":m.startsWith("Luxations")?"Verdacht Luxation":m.startsWith("Prellung")?"Prellung/Quetschung":m.startsWith("Schnitt")?"Wunde":m.startsWith("Stich")?"Stich-/Pfählungsverletzung":m.startsWith("Biss")?"Biss-/Stichverletzung":m.startsWith("Elektrische")?"Elektrische Verletzung": "Verletzung";
    return `${prefix}: ${labels.join(", ")}`;
  }
  if(text.includes("wie kam es zu der verletzung")) return `Unfallmechanismus: ${val}`;
  if(text.includes("um welches tier")) return `Tier: ${val}`;
  if(text.includes("wo wurde die person durch das tier")) return `Verletzungsort: ${val}`;
  if(text.includes("tier noch vor ort")) return val==="Ja"?"Tier weiterhin vor Ort / Gefahr für Einsatzkräfte":`Tier vor Ort: ${val}`;
  if(text.includes("stromart")||text.includes("stromquelle")) return `Stromquelle: ${val}`;
  if(text.includes("stromquelle sicher abgeschaltet")) return val==="Ja"?"Stromquelle sicher abgeschaltet":`Stromquelle nicht sicher abgeschaltet: ${val}`;
  if(text.includes("strommarken")||text.includes("verbrennungen")) return `Strommarken/Verbrennungen: ${val}`;
  if(text.includes("täter noch vor ort")) return val==="Ja"?"Möglicher Täter noch vor Ort":"Möglicher Täter nicht mehr vor Ort";
  if(text.includes("nicht einvernehmlich")) return val==="Ja"?"Sexueller Übergriff nicht einvernehmlich / Zwang angegeben":"Einvernehmlichkeit laut Abfrage: ${val}";
  if(text.includes("welche besondere unfallmechanik")) return `Unfallmechanik: ${val}`;
  if(text.includes("eingeklemmt oder im fahrzeug")) return val==="Ja"?"Person eingeklemmt/eingeschlossen":"Keine Einklemmung angegeben";
  if(text.includes("welche art der verletzung liegt vor")) return `Exposition/Verletzungsart: ${val}`;
  if(text.includes("gefahrenquelle noch vorhanden")) return val==="Ja"?"Weitere Expositionsgefahr vorhanden":`Weitere Expositionsgefahr: ${val}`;
  if(text.includes("wo befindet sich die stich")) return `Stich-/Pfählungsverletzung: ${val}`;
  if(text.includes("aus welcher höhe")) return `Sturzhöhe/-mechanik: ${val}`;
  if(text.includes("weitere verletzungen, beschwerden")) return val==="Ja"?"Weitere Verletzungen/Beschwerden vorhanden":`Weitere Verletzungen/Beschwerden: ${val}`;
  if(text.includes("starke oder zunehmende schmerzen")) return val==="Ja"?"Starke/zunehmende Schmerzen":"Keine starken/zunehmenden Schmerzen angegeben";
  if(text.includes("starke oder nicht kontrollierbare blutung")) return val==="Ja"?"Starke/nicht kontrollierbare Blutung":"Keine starke/nicht kontrollierbare Blutung angegeben";
  if(text.includes("warum ist der patient nicht frei zugänglich")) return `Zugang erschwert: ${val}`;
  if(text.includes("sturz")||text.includes("abgestürzt")||text.includes("eingeklemmt")||text.includes("eingeschlossen")||text.includes("verschlossene wohnung")||text.includes("verschüttet")||text.includes("höhe")) return `${q.text.replace(/\?$/,"")}: ${val}`;
  if(val==="Ja") return q.text.replace(/\?$/,"");
  if(val.length<60) return `${q.text.replace(/\?$/,"")}: ${val}`;
  return "";
}
function importantDispatchFacts(){
  const facts=[];const d=answers.med_demografie||{};
  if(d.age)facts.push(`Alter ${d.age} J.`);
  if(d.gender&&d.gender!=="Unbekannt")facts.push(d.gender);
  if(answers.med_personen)facts.push(`${answers.med_personen}`);
  if(answers.med_spricht&&answers.med_spricht!=="Ja")facts.push(`Sprechen: ${answers.med_spricht}`);
  if(answers.med_grund)facts.push(answers.med_grund);
  if(answers.erkrankung_typ)facts.push(answers.erkrankung_typ);
  if(answers.erkrankung_dm_01)facts.push(answers.erkrankung_dm_01);
  if(answers.erkrankung_dm_04||answers.erkrankung_dm_05)facts.push(answers.erkrankung_dm_04||answers.erkrankung_dm_05);
  if(answers.erkrankung_bd_02)facts.push(answers.erkrankung_bd_02);
  if(answers.deterioration)facts.push(`Verschlechterung: ${answers.deterioration}`);
  if(answers.verdachtsdiagnose)facts.push(`Verdachtsdiagnose: ${answers.verdachtsdiagnose}`);
  if(Array.isArray(answers.verletzung_v51_koerperkarte) && answers.verletzung_v51_koerperkarte.length){
    const labels=answers.verletzung_v51_koerperkarte.map(id=>injuryMapRegions.find(r=>r.id===id)?.label||id);
    const m=String(answers.verletzung_v51_muster||"Verletzung");
    const prefix=m.startsWith("Fraktur")?"Verdacht Fraktur":m.startsWith("Luxations")?"Verdacht Luxation":m.startsWith("Prellung")?"Prellung/Quetschung":m.startsWith("Schnitt")?"Wunde":m.startsWith("Stich")?"Stich-/Pfählungsverletzung":m.startsWith("Biss")?"Biss-/Stichverletzung":m.startsWith("Elektrische")?"Elektrische Verletzung":"Verletzung";
    facts.push(`${prefix}: ${labels.join(", ")}`);
  }
  if(isBurnMechanism() && Array.isArray(answers.verletzung_v51_koerperkarte) && answers.verletzung_v51_koerperkarte.length){
    const vk=burnMapValue(new Set(answers.verletzung_v51_koerperkarte));
    facts.push(`Betroffene Körperoberfläche: ca. ${vk.toLocaleString('de-DE',{minimumFractionDigits:1,maximumFractionDigits:1})} % VKOF`);
  }
  if(answers.atemfrequenz)facts.push(`AF ${answers.atemfrequenz}`);
  const qs=questions();
  for(const [id,v] of Object.entries(answers)){
    if(facts.length>=11)break;
    if(["med_wem","med_personen","med_spricht","med_demografie","med_grund","erkrankung_typ","erkrankung_dm_01","erkrankung_dm_04","erkrankung_dm_05","erkrankung_bd_02","verdachtsdiagnose","abfrage_bemerkung","atemfrequenz","deterioration"].includes(id))continue;
    const q=qs.find(x=>x.id===id);if(!q)continue;
    const fact=dispatchAnswerFact(q,v);if(fact)facts.push(fact);
  }
  return [...new Set(facts)].slice(0,11);
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
