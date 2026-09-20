// Einsatzabfrage V20 – dynamischer Entscheidungsbaum mit permanenter Aktionsleiste
import { startupDefaults } from "./startup-data.js?v=20260920v40";
import { anonymous, read, authState, push, pushPublic } from "./firebase-rest.js?v=20260921v70";
import { KEMLER_MEANINGS, UN_DANGEROUS_GOODS, GHS_SYMBOLS, ADR_LABELS, TRANSPORT_TYPES } from "./hazmat-data.js?v=20260920v2";

const $ = id => document.getElementById(id);
let currentQuestion = null;
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
  {id:"med_anzahl_genau",text:"Wie viele Personen sind tatsächlich verletzt oder erkrankt?",type:"number",order:21,placeholder:"Genaue Anzahl …",whenQuestion:"med_personen",whenValue:"2–9"},
  {id:"med_spricht",text:"Kann der Patient sprechen?",type:"choice",order:30,options:["Ja","Nein","Unsicher (kann nicht beurteilt werden)","Unbekannter (kein Kontakt / keine Angabe möglich)"]},
  {id:"med_demografie",text:"Wie alt ist der Patient?",type:"demographics",order:40,fields:{ageLabel:"Alter in Jahren",birthdateLabel:"Geburtsdatum",genderLabel:"Geschlecht",genderOptions:["Männlich","Weiblich","Divers","Unbekannt"]}},
  {id:"med_grund",text:"Sagen Sie mir bitte den genauen Grund Ihres Anrufes!",type:"choice",order:50,options:["Allergie / Anaphylaxie","Atemstörung","Bauchschmerzen","Bewusstseinsstörung / Wesensveränderung","Blutungen","Brustschmerzen","Erkrankung / medizinische Hilfeleistung","Geburt / Schwangerschaft","Gefühlsstörung / Lähmung / Sprache / Sehstörung","Herzrhythmusstörungen","Hitze- / Kälteprobleme","Kollaps / Kreislaufstörung","Kopfschmerzen","Krampfanfall","Psychische Erkrankung / Suizid","Sonstige Schmerzen","Unklares Geschehen","Vergiftung","Verletzung","Arbeits- / Betriebs- / Schulunfall"]}
];
const medicalFinalQuestions = [
  {id:"med_zugang",text:"Ist die Person frei zugänglich?",type:"choice",order:99990,options:["Ja","Nein","Unsicher (kann nicht beurteilt werden)","Unbekannter (kein Kontakt / keine Angabe möglich)"]},
  {id:"med_zugang_grund",text:"Warum ist die Person nicht frei zugänglich?",type:"choice",order:99991,options:["Verschlossene Wohnung / Türöffnung erforderlich","Eingeklemmt / eingeschlossen","Verschüttet / eingestürzt","Auf Dach / Balkon / Höhe","In Fahrzeug / Aufzug eingeschlossen","Unzugängliches Gelände / schwer erreichbar","Gefahrenbereich / Einsatzstelle nicht sicher","Sonstiger Zugangshinderungsgrund","Unbekannt"],whenQuestion:"med_zugang",whenValue:"Nein"}
];

const yesNoUnclearOptions=["Ja","Nein","Unsicher (kann nicht beurteilt werden)","Unbekannter (kein Kontakt / keine Angabe möglich)"];

const firefighterCommonQuestions = [
  {id:"fw_common_personen",text:"Sind Personen betroffen, verletzt oder gefährdet?",type:"choice",order:9001,options:["Ja","Nein","Unklar"]},
  {id:"fw_common_anzahl",text:"Wie viele Personen sind ungefähr betroffen?",type:"number",order:9002,placeholder:"Anzahl …",whenAny:[{questionId:"fw_common_personen",value:"Ja"},{questionId:"fw_common_personen",value:"Unklar"}]},
  {id:"fw_common_gefahr",text:"Besteht eine unmittelbare Gefahr für Personen oder Einsatzkräfte?",type:"choice",order:9003,options:["Ja","Nein","Unklar"]},
  {id:"fw_common_zugang",text:"Ist die Einsatzstelle für Einsatzkräfte sicher erreichbar?",type:"choice",order:9004,options:["Ja","Nein","Unklar"]},
  {id:"fw_common_vorort",text:"Sind bereits andere Einsatzkräfte vor Ort oder informiert?",type:"choice",order:9005,options:["Nein","Rettungsdienst","Polizei","Weitere Feuerwehrkräfte","Mehrere","Unklar"]},
  {id:"fw_common_verlauf",text:"Verändert sich die Lage weiter oder besteht eine Ausbreitungsgefahr?",type:"choice",order:9006,options:["Ja","Nein","Unklar"]},
  {id:"fw_common_weitere",text:"Gibt es noch eine weitere wichtige Information für die Einsatzkräfte?",type:"text",order:9007,placeholder:"Weitere wichtige Angaben …",allowEmpty:true}
];

function firefighterQuestions(){
  const branch=String(answers.fw_schadensfall||"");
  const all=Object.values(data.catalog?.brand||{})
    .filter(q=>q?.id&&q?.text&&q.fwBranch&&q.id!=="fw_schadensfall"&&q.whenQuestion==="fw_schadensfall"&&String(q.whenValue)===branch)
    .sort((a,b)=>(Number(a.order)||999999)-(Number(b.order)||999999));

  // Feuerwehr soll eine kurze, lagebezogene Abfrage erhalten: maximal
  // 14 Fragen insgesamt (inkl. Schadensfall), mindestens 12 als Ziel.
  // Bei kleinen Zweigen werden nur die fehlenden Fragen mit allgemeinen,
  // einsatzrelevanten Angaben ergänzt.
  const selected=all.slice(0,13);
  const needed=Math.max(0,12-selected.length); // + Schadensfall = 13 Ziel; bei bedingten Folgefragen bleiben 12–14 realistisch
  if(needed>0) selected.push(...firefighterCommonQuestions.slice(0,needed));
  return [data.catalog?.brand?.fw_schadensfall,...selected].filter(Boolean);
}

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
      "Amputation",
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
const elevatorQuestions = [
  {id:"aufzug_ort",text:"Ist der Aufzug über eine eindeutige Objekt-/Gebäudebezeichnung identifizierbar?",type:"choice",options:["Ja – eindeutig","Teilweise","Nein / unklar"]},
  {id:"aufzug_personen",text:"Wie viele Personen befinden sich im Aufzug?",type:"choice",options:["1 Person","2–5 Personen","Mehr als 5 Personen","Unklar"]},
  {id:"aufzug_dauer",text:"Wie lange besteht die Störung ungefähr?",type:"choice",options:["Unter 10 Minuten","10–30 Minuten","Über 30 Minuten","Unklar"]},
  {id:"aufzug_position",text:"Wo befindet sich die Aufzugskabine?",type:"choice",options:["Zwischen zwei Etagen","An einer Etage","Unklar"]},
  {id:"aufzug_tueren",text:"Wie ist der Zustand der Aufzugstüren?",type:"choice",options:["Geschlossen","Teilweise geöffnet","Offen","Unklar"]},
  {id:"aufzug_bewegung",text:"Besteht eine gefährliche Bewegung oder Quetsch-/Absturzgefahr?",type:"choice",options:["Ja","Nein","Unklar"]},
  {id:"aufzug_gefahr",text:"Gibt es Rauch, Feuer, Wasser oder eine andere akute Gefahr?",type:"choice",options:["Ja","Nein","Unklar"]},
  {id:"aufzug_zugang",text:"Kann die Kabine von außen sicher erreicht werden?",type:"choice",options:["Ja","Nein","Unklar"]},
  {id:"aufzug_gefaehrdet",text:"Sind Personen akut gefährdet oder stark beeinträchtigt?",type:"choice",options:["Ja","Nein","Unklar"]},
  {id:"aufzug_medizin",text:"Liegt zusätzlich ein medizinischer Notfall vor?",type:"choice",options:["Ja","Nein","Unklar"]},
  {id:"aufzug_med_bewusstsein",text:"Ist eine betroffene Person bewusstlos oder nicht ansprechbar?",type:"choice",options:["Ja","Nein","Unklar"],whenQuestion:"aufzug_medizin",whenValue:"Ja"},
  {id:"aufzug_med_atmung",text:"Atmet eine betroffene Person nicht normal oder hat schwere Atemnot?",type:"choice",options:["Ja","Nein","Unklar"],whenQuestion:"aufzug_medizin",whenValue:"Ja"},
  {id:"aufzug_med_blutung",text:"Besteht eine starke oder nicht stillbare Blutung?",type:"choice",options:["Ja","Nein","Unklar"],whenQuestion:"aufzug_medizin",whenValue:"Ja"},
  {id:"aufzug_med_symptome",text:"Welche akuten Beschwerden liegen vor?",type:"choice",options:["Krampfanfall","Brustschmerzen","Starke Atemnot","Starke Schmerzen","Andere / unklar"],whenQuestion:"aufzug_medizin",whenValue:"Ja"},
  {id:"aufzug_med_krampfstatus",text:"Dauert der Krampfanfall an oder tritt er wiederholt auf?",type:"choice",options:["Ja","Nein","Unklar / nicht bekannt"],whenQuestion:"aufzug_medizin",whenValue:"Ja"}
];

const grossQuestions = [
  {id:"gs_lage",text:"Was ist die Großschadenslage?",type:"choice",order:10,options:["Viele Betroffene / MANV","Großbrand / Flächenlage","Unwetter / Naturereignis","Einsturz / Gebäudeschaden","Sonstige Großschadenslage"]},
  {id:"gs_orte",text:"Wo befindet sich die Lage?",type:"text",order:20,placeholder:"Ort / Straße / Objekt …"},
  {id:"gs_betroffene",text:"Wie viele Personen sind ungefähr betroffen?",type:"number",order:30,placeholder:"Anzahl …"},
  {id:"gs_gefahren",text:"Welche besonderen Gefahren sind bekannt? Mehrere Antworten möglich.",type:"multi",order:40,options:["Feuer / Rauch","Einsturzgefahr","Gefahrstoffe / ABC","Wasser / Überflutung","Strom / Energie","Viele Verletzte / Erkrankte","Keine bekannt / unklar"]},
  {id:"gs_weitere",text:"Was ist sonst noch wichtig?",type:"text",order:50,placeholder:"Weitere Informationen …",allowEmpty:true}
];

let category=null, mode=null, data={catalog:startupDefaults.catalog,notarzt_rules:startupDefaults.notarzt_rules||{},resource_rules:startupDefaults.resource_rules||{},suggestions:startupDefaults.suggestions||{},aao:{},einsatzstichworte:{}}, answers={}, steps=0, reaShown=false, history=[];
Object.defineProperty(window,"__NABS_ANSWERS__",{configurable:true,get:()=>answers});

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
  if(!category || category==="grossschaden" || category==="aufzug") return false;
  try{
    const mod=await import(`./catalog-${category}.js?v=20260917fw1`);
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
  if(mode==="aufzug") return "🛗 Aufzugsnotruf";
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
  // Zugang wird bei jeder medizinischen Abfrage als letzter Schritt abgefragt.
  if(category==="medizin" && ["verletzung_v49_zugang","verletzung_v49_zugang_grund"].includes(q?.id)) return false;
  if(String(q?.id||"").startsWith("stroke_")&&!strokeIndicated()) return false;
  // Die bestehenden V66-Brandfragen bleiben unverändert, erscheinen aber
  // erst, wenn im Feuerwehrbaum tatsächlich "Brand / Rauchentwicklung"
  // gewählt wurde. Alle neuen Feuerwehrzweige werden separat geführt.
  if(category==="brand" && q?.fwLegacyBrand && answers.fw_schadensfall!=="Brand / Rauchentwicklung") return false;
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
  if(category==="aufzug") return elevatorQuestions;
  if(category==="grossschaden") return grossQuestions;
  if(category==="brand") return firefighterQuestions().map(normalizeChoiceOptions);
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
function hazmatTriggered(){
  if(answers.gefahrgut_details!==undefined) return false;
  const positive=(v)=>{
    const x=String(v??'').toLowerCase();
    return /^(ja|yes|unklar|unbekannt)/.test(x) || /gefahrgut|gefahrstoff|lkw|tank|auslauf|ausgetreten|betriebsstoff|kraftstoff|öl|oel|chemikal|leakage|kontamination|gasgeruch|chemische|radioaktiv|batterie/.test(x);
  };
  if(category==='medizin' && String(answers.med_grund||'').toLowerCase().includes('vergiftung')) return true;
  for(const [id,v] of Object.entries(answers)){
    const k=String(id).toLowerCase();
    if(/abc|gefahrgut|gefahrstoff|austritt|auslauf|betriebsstoff|kraftstoff|oel|öl|lkw|tank|chem|kontamin|vergiftung/.test(k) && positive(v)) return true;
    if(k.includes('vu_art') && /lkw|gefahrgut|tank/.test(String(v).toLowerCase())) return true;
    if(k.includes('vu_betrieb') && String(v).toLowerCase().startsWith('ja')) return true;
    if(k.includes('vu_gefahr') && String(v).toLowerCase().startsWith('ja')) return true;
  }
  return false;
}
function hazmatSummary(){
  const h=answers.gefahrgut_details;
  if(!h || typeof h!=='object') return '';
  const out=[];
  if(h.gefahrnummer){ const key=String(h.gefahrnummer).trim().toUpperCase(); const meaning=KEMLER_MEANINGS[key]; out.push(`Warntafel Gefahrnummer ${key}${meaning?` (${meaning})`:''}`); }
  if(h.un){ const key=String(h.un).replace(/\D/g,'').padStart(4,'0'); const d=UN_DANGEROUS_GOODS[key]; out.push(`Warntafel UN ${key}${d?` – ${d.name}`:''}`); if(d?.class)out.push(`Klasse ${d.class}`); }
  if(Array.isArray(h.ghs)&&h.ghs.length) out.push(`GHS: ${h.ghs.join(', ')}`); if(Array.isArray(h.adrLabels)&&h.adrLabels.length) out.push(`Gefahrzettel: ${h.adrLabels.join(', ')}`);
  if(h.transport) out.push(`Verkehrsmittel: ${h.transport}`);
  if(h.menge) out.push(`Ausgetreten: ca. ${h.menge} cm³`);
  if(h.gefahrnummer && /^X/i.test(String(h.gefahrnummer))) out.push('Wassergefährliche Reaktion gemäß X-Kennzeichnung beachten');
  return out.join(' · ');
}
function adrSymbolSvg(kind){
  const base='<svg class="adr-svg" viewBox="0 0 100 100" aria-hidden="true" focusable="false">';
  const end='</svg>';
  switch(kind){
    case 'explosive': return base+'<path d="M50 6l8 22 19-13-7 24 24-1-20 14 20 14-24-1 7 24-19-13-8 24-8-24-19 13 7-24-24 1 20-14-20-14 24 1-7-24 19 13z" fill="#ff3b3b" stroke="#e60000" stroke-width="2"/><path d="M50 26l5 15 14-7-8 13 15 1-14 7 10 11-15-5 0 16-7-14-10 12 3-15-15 4 11-11-14-7 16-1-8-13 14 7z" fill="#ffd21a" stroke="#ff6a00" stroke-width="2"/>'+end;
    case 'gas-flammable': return base+'<path d="M52 9c-3 15 8 18 5 29-2 7-8 8-8 17 0 10 7 17 16 17 10 0 18-8 18-19 0-16-13-22-18-36-3 7-6 11-8 14-3-7-4-14-5-22z" fill="#111"/><path d="M39 49c-8 8-12 15-12 23 0 12 9 20 21 20 9 0 17-4 21-12-13 4-22-3-22-12 0-7 4-11 8-16-5 0-10-2-16-3z" fill="#111"/>'+end;
    case 'gas': return base+'<rect x="38" y="20" width="24" height="58" rx="7" fill="#111"/><rect x="43" y="13" width="14" height="10" rx="2" fill="#111"/><path d="M62 32h7M62 42h7M62 52h7" stroke="#111" stroke-width="4"/>'+end;
    case 'gas-toxic': return base+'<path d="M50 30c-8 0-14 6-14 14v9l-7 12 7 7 7-7 7 7 7-7 7 7 7-7-7-12v-9c0-8-6-14-14-14z" fill="#111"/><circle cx="45" cy="46" r="3" fill="#fff"/><circle cx="55" cy="46" r="3" fill="#fff"/><path d="M45 56q5 6 10 0M50 30v-8M40 26l-5-6M60 26l5-6" stroke="#111" stroke-width="4" fill="none"/>'+end;
    case 'flammable': case 'solid-flammable': case 'self-heating': case 'organic-peroxide': return base+'<path d="M51 8c-2 14 8 18 6 28-1 6-6 10-9 15-3-7-7-11-6-19-9 10-16 20-16 31 0 17 11 28 26 28 17 0 29-11 29-28 0-16-12-24-18-35-4-7-8-12-12-20z" fill="#111"/>'+end;
    case 'water-reactive': return base+'<path d="M50 10C40 26 28 40 28 58c0 17 10 30 22 30s22-13 22-30c0-18-12-32-22-48z" fill="#1597ff" stroke="#111" stroke-width="4"/><path d="M39 67c4 6 9 9 16 10" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>'+end;
    case 'oxidizing': return base+'<circle cx="50" cy="50" r="29" fill="none" stroke="#111" stroke-width="6"/><path d="M50 22c-2 10 4 13 3 19-1 4-4 6-5 10-2-4-4-7-3-11-5 6-8 11-8 17 0 9 6 15 14 15 9 0 15-6 15-15 0-9-7-13-10-19-2-4-4-8-6-16z" fill="#111"/>'+end;
    case 'toxic': return base+'<path d="M31 65l8-8m30 8l-8-8M38 57l-8 8m32-8l8 8" stroke="#111" stroke-width="5"/><circle cx="50" cy="39" r="15" fill="#111"/><circle cx="45" cy="36" r="3" fill="#fff"/><circle cx="55" cy="36" r="3" fill="#fff"/><path d="M45 45q5 5 10 0" stroke="#fff" stroke-width="3" fill="none"/><path d="M42 53h16l5 17H37z" fill="#111"/><path d="M38 75h24" stroke="#111" stroke-width="5"/>'+end;
    case 'infectious': return base+'<g fill="none" stroke="#111" stroke-width="4"><circle cx="50" cy="50" r="13"/><circle cx="50" cy="23" r="10"/><circle cx="27" cy="63" r="10"/><circle cx="73" cy="63" r="10"/></g><circle cx="50" cy="50" r="5" fill="#111"/>'+end;
    case 'radioactive': return base+'<circle cx="50" cy="50" r="7" fill="#111"/><path d="M50 13a37 37 0 0 1 32 18l-20 12A14 14 0 0 0 50 37zM82 69a37 37 0 0 1-32 18V64a14 14 0 0 0 12-7zM18 69A37 37 0 0 1 18 31l20 12a14 14 0 0 0 0 14z" fill="#111"/>'+end;
    case 'corrosive': return base+'<path d="M18 28h28v6H18zM55 22h27v6H55z" fill="#111"/><path d="M27 34l7 14M67 28l-6 16" stroke="#111" stroke-width="5"/><circle cx="37" cy="56" r="4" fill="#111"/><path d="M24 76h30M58 76h20" stroke="#111" stroke-width="6"/><path d="M58 47l-5 12 12 4 5-12z" fill="#111"/>'+end;
    case 'misc': return base+'<path d="M22 22h10v56H22zM37 22h10v56H37zM52 22h10v56H52zM67 22h10v56H67z" fill="#111"/>'+end;
    case 'battery': return base+'<rect x="24" y="28" width="52" height="44" rx="4" fill="none" stroke="#111" stroke-width="5"/><path d="M76 42h7v16h-7zM36 39h9v22h-9zM55 39h9v22h-9z" fill="#111"/><path d="M43 30v-7h14v7" fill="none" stroke="#111" stroke-width="4"/>'+end;
    default: return base+'<circle cx="50" cy="50" r="25" fill="#111"/>'+end;
  }
}
function hazmatFieldsMarkup(h={}){
  const kem=String(h.gefahrnummer||'').replace(/[^0-9X]/gi,'').slice(0,4).toUpperCase();
  const un=String(h.un||'').replace(/\\D/g,'').slice(0,4);
  return `<div class="hazmat-plate-wrap">
    <div class="adr-orange-plate" aria-label="Orangefarbene ADR-Tafel">
      <div class="adr-cell"><span>GEFAHRNUMMER</span><input id="hazKemler" maxlength="4" value="${kem}" placeholder="X423 / 33" autocomplete="off" inputmode="text"></div>
      <div class="adr-divider"></div>
      <div class="adr-cell"><span>UN-NUMMER</span><input id="hazUN" maxlength="4" value="${un}" placeholder="1170" autocomplete="off" inputmode="numeric"></div>
    </div>
    <div class="adr-meaning">
      <div class="meaning-row"><b>Gefahr:</b><span id="hazKemlerInfo">${kem&&KEMLER_MEANINGS[kem]?KEMLER_MEANINGS[kem]:'Bedeutung erscheint automatisch'}</span></div>
      <div class="meaning-row"><b>Stoff:</b><span id="hazUNInfo">${un&&UN_DANGEROUS_GOODS[un.padStart(4,'0')]?`${UN_DANGEROUS_GOODS[un.padStart(4,'0')].name} · Klasse ${UN_DANGEROUS_GOODS[un.padStart(4,'0')].class}`:'Stoffbezeichnung erscheint automatisch'}</span></div>
    </div>
  </div>
  <div class="hazmat-section ghs-symbol-section"><h3>☑ Sichtbare Gefahrenpiktogramme (GHS / CLP)</h3><p class="hint">Die rot umrandeten GHS-Piktogramme und die ADR-Gefahrzettel getrennt erfassen. Nur tatsächlich sichtbare Kennzeichnungen anklicken.</p><div id="ghsGrid" class="ghs-grid-original"></div></div>
  <div class="hazmat-section adr-symbol-section"><h3>☑ Sichtbare ADR-Gefahrzettel</h3><p class="hint">Nur tatsächlich sichtbare transportrechtliche Gefahrzettel anklicken.</p><div id="adrGrid" class="adr-grid"></div></div>
  <div class="hazmat-grid hazmat-transport-grid">
    <label>🚚 Verkehrsmittel / Behälter<select id="hazTransport"><option value="">Bitte auswählen …</option>${TRANSPORT_TYPES.map(x=>`<option>${x}</option>`).join('')}</select></label>
    <label>💧 Wie viel ist ungefähr ausgelaufen? (cm³)<input id="hazMenge" type="number" min="0" step="1" inputmode="numeric" value="${String(h.menge||'')}" placeholder="z. B. 5000"></label>
  </div>
  <div id="hazTransportHint" class="hazmat-lookup"></div>`;
}
function wireHazmat(box,h,onSave,onClear){
  const selected=new Set(Array.isArray(h.ghs)?h.ghs:[]);
  const selectedAdr=new Set(Array.isArray(h.adrLabels)?h.adrLabels:[]);
  const ghsRemote={GHS01:'https://raw.githubusercontent.com/senaite/senaite.core/2.x/src/senaite/core/browser/static/images/ghs/GHS01.svg',GHS02:'https://raw.githubusercontent.com/senaite/senaite.core/2.x/src/senaite/core/browser/static/images/ghs/GHS02.svg',GHS03:'https://raw.githubusercontent.com/senaite/senaite.core/2.x/src/senaite/core/browser/static/images/ghs/GHS03.svg',GHS04:'https://raw.githubusercontent.com/senaite/senaite.core/2.x/src/senaite/core/browser/static/images/ghs/GHS04.svg',GHS05:'https://raw.githubusercontent.com/senaite/senaite.core/2.x/src/senaite/core/browser/static/images/ghs/GHS05.svg',GHS06:'https://raw.githubusercontent.com/senaite/senaite.core/2.x/src/senaite/core/browser/static/images/ghs/GHS06.svg',GHS07:'https://raw.githubusercontent.com/senaite/senaite.core/2.x/src/senaite/core/browser/static/images/ghs/GHS07.svg',GHS08:'https://raw.githubusercontent.com/senaite/senaite.core/2.x/src/senaite/core/browser/static/images/ghs/GHS08.svg',GHS09:'https://raw.githubusercontent.com/senaite/senaite.core/2.x/src/senaite/core/browser/static/images/ghs/GHS09.svg'};
  const gg=box.querySelector('#ghsGrid');
  GHS_SYMBOLS.forEach(([id,name])=>{
    const lab=document.createElement('label'); lab.className='ghs-choice-original';
    lab.innerHTML=`<input type="checkbox" value="${name}"><span class="ghs-original-wrap"><img src="${ghsRemote[id]}" alt="${id} ${name}" loading="lazy"></span><span class="ghs-original-name"><b>${id}</b><br>${name}</span>`;
    const inp=lab.querySelector('input'); inp.checked=selected.has(name);
    inp.onchange=()=>inp.checked?selected.add(name):selected.delete(name); gg.appendChild(lab);
  });
  const g=box.querySelector('#adrGrid');
  const ADR_ORIGINAL_IMAGES={
    ADR1:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-1-pdf.jpg?__blob=publicationFile',
    ADR1_4:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-1-4-pdf.jpg?__blob=publicationFile',
    ADR1_5:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-1-5-pdf.jpg?__blob=publicationFile',
    ADR1_6:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-1-6-pdf.jpg?__blob=publicationFile',
    ADR2_1:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-2-1-schwarz-pdf.jpg?__blob=publicationFile',
    ADR2_2:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-2-2-schwarz-pdf.jpg?__blob=publicationFile',
    ADR2_3:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-2-3-pdf.jpg?__blob=publicationFile',
    ADR3:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-3-schwarz-pdf.jpg?__blob=publicationFile',
    ADR4_1:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-4-1-pdf.jpg?__blob=publicationFile',
    ADR4_2:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-4-2-pdf.jpg?__blob=publicationFile',
    ADR4_3:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-4-3-schwarz-pdf.jpg?__blob=publicationFile',
    ADR5_1:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-5-1-pdf.jpg?__blob=publicationFile',
    ADR5_2:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-5-2-schwarz-pdf.jpg?__blob=publicationFile',
    ADR6_1:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-6-1-pdf.jpg?__blob=publicationFile',
    ADR6_2:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-6-2-pdf.jpg?__blob=publicationFile',
    ADR7:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-7a-pdf.jpg?__blob=publicationFile',
    ADR8:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-8-pdf.jpg?__blob=publicationFile',
    ADR9:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-9-pdf.jpg?__blob=publicationFile',
    ADR9A:'https://www.bmv.de/SharedDocs/DE/Anlage/G/Gefahrengut/gefahrzettel-9-a-pdf.jpg?__blob=publicationFile'
  };
  ADR_LABELS.forEach(([id,num,name,kind])=>{
    const lab=document.createElement('label'); lab.className=`adr-choice adr-${kind}`;
    const src=ADR_ORIGINAL_IMAGES[id]||'';
    lab.innerHTML=`<input type="checkbox" value="${name}"><span class="adr-diamond"><img class="adr-original" src="${src}" alt="ADR-Gefahrzettel ${num}" loading="lazy"></span><span class="adr-name">${name}</span>`;
    const inp=lab.querySelector('input'); inp.checked=selectedAdr.has(name);
    inp.onchange=()=>inp.checked?selectedAdr.add(name):selectedAdr.delete(name); g.appendChild(lab);
  });
  const kem=box.querySelector('#hazKemler'),un=box.querySelector('#hazUN'),ki=box.querySelector('#hazKemlerInfo'),ui=box.querySelector('#hazUNInfo'),tr=box.querySelector('#hazTransport'),menge=box.querySelector('#hazMenge');
  tr.value=h.transport||'';
  const update=()=>{const k=String(kem.value||'').trim().toUpperCase();ki.textContent=KEMLER_MEANINGS[k]||'Keine hinterlegte Bedeutung – Nummer prüfen.';const u=String(un.value||'').replace(/\D/g,'').slice(0,4);if(u.length){const key=u.padStart(4,'0'),d=UN_DANGEROUS_GOODS[key];ui.textContent=d?`${d.name} · Klasse ${d.class}${d.hin?` · Gefahrnummer ${d.hin}`:''}`:'UN-Nummer nicht im lokalen Datenbestand – Stoffbezeichnung bitte nicht automatisch annehmen.';}else ui.textContent='Stoffbezeichnung erscheint automatisch';};
  kem.oninput=update; un.oninput=update;
  tr.onchange=()=>{box.querySelector('#hazTransportHint').textContent=tr.value?`Transportmittel / Behälter: ${tr.value}`:'';}; tr.dispatchEvent(new Event('change'));
  const collect=()=>({gefahrnummer:String(kem.value||'').trim().toUpperCase(),un:String(un.value||'').replace(/\D/g,'').slice(0,4),ghs:[...selected],adrLabels:[...selectedAdr],transport:String(tr.value||''),menge:String(menge.value||'').trim()});
  box.querySelector('#hazNext')?.addEventListener('click',()=>onSave(collect())); box.querySelector('#hazClear')?.addEventListener('click',onClear);
  return {collect};
}
function renderHazmatQuestion(area){
  const h=answers.gefahrgut_details&&typeof answers.gefahrgut_details==='object'?answers.gefahrgut_details:{};
  const box=document.createElement('div'); box.className='hazmat-box';
  box.innerHTML=`<div class="hazmat-intro"><b>☣️ Gefahrstoff / Gefahrgut – Zusatzabfrage</b><p class="hint">Nur sichtbare bzw. bekannte Angaben eintragen. Alle Felder sind freiwillig. „Weiter“ funktioniert auch ohne Angaben.</p></div>${hazmatFieldsMarkup(h)}<div class="free-actions"><button id="hazNext" class="next-free">Weiter →</button><button id="hazClear" class="secondary unknown-btn">Keine Angaben / überspringen</button></div>`;
  wireHazmat(box,h,v=>{pushHistory();answers.gefahrgut_details=v;steps++;render();},()=>{pushHistory();answers.gefahrgut_details={gefahrnummer:'',un:'',ghs:[],adrLabels:[],transport:'',menge:''};steps++;render();});
  area.appendChild(box);
}
function openHazmat(){
  const h=answers.gefahrgut_details&&typeof answers.gefahrgut_details==='object'?answers.gefahrgut_details:{};
  openModal(`<div class="modal-title">☣️ Gefahrgut / Gefahrstoff</div><p class="hint">Gefahrnummer, UN-Nummer und sichtbare Gefahrzettel können hier jederzeit ergänzt werden. Die Angaben werden in den Einsatztext übernommen.</p><div id="hazmatModalBody"></div><div class="modal-actions"><button id="hazmatModalSave">Speichern</button><button id="hazmatModalClear" class="secondary">Angaben löschen</button><button id="hazmatModalClose" class="secondary">Schließen</button></div>`);
  const body=$('hazmatModalBody'); body.innerHTML=hazmatFieldsMarkup(h); const wired=wireHazmat(body,h,()=>{},()=>{});
  $('hazmatModalSave').onclick=()=>{answers.gefahrgut_details=wired.collect();closeModal();render();};
  $('hazmatModalClear').onclick=()=>{answers.gefahrgut_details={gefahrnummer:'',un:'',ghs:[],adrLabels:[],transport:'',menge:''};closeModal();render();};
  $('hazmatModalClose').onclick=closeModal;
}
function nextQuestion(){
  if(category==="aufzug") {
    const qs=elevatorQuestions.filter(q=>visible(q)&&answers[q.id]===undefined);
    return qs[0]||null;
  }
  if(hazmatTriggered()) return {id:"gefahrgut_details",text:"Welche Gefahrstoff-/Gefahrgutangaben sind vor Ort erkennbar?",type:"hazmat"};
  // Feuerwehr: nach der Auswahl des Schadensfalls nur noch die kurze,
  // lagebezogene 12–14-Fragen-Abfrage verwenden.
  if(category==="brand" && answers.fw_schadensfall!==undefined){
    if(steps>=14) return null;
  }
  // Verletzungspfad: erst Unfallmechanismus, danach das passende
  // Verletzungsmuster und anschließend die Körperkarte.
  // Verbrennung/Verbrühung/Verätzung ist bereits durch den Mechanismus
  // eindeutig und geht deshalb direkt zur Körperflächenkarte.
  if(category==="medizin" && isInjuryReason()){
    if(answers.verdachtsdiagnose!==undefined){
      if(answers.med_zugang===undefined) return medicalFinalQuestions.find(q=>q.id==="med_zugang");
      if(answers.med_zugang==="Nein" && answers.med_zugang_grund===undefined) return medicalFinalQuestions.find(q=>q.id==="med_zugang_grund");
      return null;
    }

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
    const mechSpecific={
      "Tierbisse / Tierstiche":["verletzung_v49_tierart","verletzung_v49_tiergefahr","verletzung_v49_allergie"],
      "Stromunfall":["verletzung_v49_stromart","verletzung_v49_stromfrei","verletzung_v49_stromsymptome"],
      "Blitzschlag":["verletzung_v49_stromsymptome"],
      "Stich- / Pfählungsverletzung":["verletzung_v49_stichort"],
      "Vergewaltigung / sexueller Übergriff":["verletzung_v49_sexverletzung","verletzung_v49_sexakut"],
      "Verkehrsunfall":["verletzung_v49_vuenergie","verletzung_v49_vueingeklemmt"],
      "Sturz über 3 m / mehrere Treppenstufen":["verletzung_v49_sturzhoehe"]
    }[mech]||[];
    const priorityIds=[...mechSpecific,"verletzung_v49_blutung","verletzung_v49_atmung","verletzung_v49_bewusstsein","verletzung_v49_schmerz","verletzung_v49_weitere"];
    for(const id of priorityIds){
      const q=injuryQs.find(x=>x.id===id);
      if(q) return q;
    }
    // Zugang immer vor der Verdachtsdiagnose abfragen.
    if(answers.med_zugang===undefined) return medicalFinalQuestions.find(q=>q.id==="med_zugang");
    if(answers.med_zugang==="Nein" && answers.med_zugang_grund===undefined) return medicalFinalQuestions.find(q=>q.id==="med_zugang_grund");
    const diagnosis=Object.values(data.catalog?.medizin||{}).find(q=>q.id==="verdachtsdiagnose");
    return diagnosis||null;
  }

  const qs=questions().filter(q=>visible(q)&&answers[q.id]===undefined);
  const diagnosis=qs.find(q=>q.id==="verdachtsdiagnose");
  // Medizinischer Zugang immer ganz am Ende.
  if(category==="medizin") {
    const nonFinal=qs.filter(q=>!["verdachtsdiagnose","med_zugang","med_zugang_grund"].includes(q.id));
    const branchCount=medicalBranchCount();
    // Der Zugangscheck kommt bewusst vor der Verdachtsdiagnose.
    if(answers.med_zugang===undefined && (!nonFinal.length || branchCount>=10)) return medicalFinalQuestions.find(q=>q.id==="med_zugang");
    if(answers.med_zugang==="Nein" && answers.med_zugang_grund===undefined) return medicalFinalQuestions.find(q=>q.id==="med_zugang_grund");
    if(answers.med_zugang!==undefined && answers.verdachtsdiagnose===undefined && (!nonFinal.length || branchCount>=10)) return diagnosis||null;
  }
  if(!qs.length)return null;
  const others=qs.filter(q=>q.id!=="verdachtsdiagnose");
  if(category==="medizin" && answers.med_grund!==undefined){
    const branchCount=medicalBranchCount();
    if(branchCount>=10) return diagnosis||null;
  }
  // Feuerwehr/THL/Großschaden werden bis zum Ende ihres jeweiligen
  // sichtbaren Zweiges abgefragt; die frühere pauschale 10-Fragen-Grenze
  // würde detaillierte Einsatzlagen zu früh abschneiden.
  const pool=category==="medizin" ? others : others;
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
  const body=bodyMapDiagnosis();
  if(body)return body;
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
      if(mstr.startsWith("Amputation") && labels.length) return {primary:`Amputationsverletzung – ${labels.join(", ")}`,alternatives:["CHIR / TRAUMA – gemäß Abfrage","Schwere Extremitätenverletzung"]};
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
  if(category==="aufzug") return answers.aufzug_medizin==="Ja" ? "Aufzugsnotruf · medizinische Zusatzabfrage" : "Aufzugsnotruf · technische Abfrage";
  if(steps>=10) return "Risikoanalyse / Abschluss";
  return "Strukturierte Notrufabfrage";
}
function updatePhase(){
  const el=$("phase");
  if(el) el.textContent=phaseText();
}

const {regions:injuryMapRegions,burnMapValue,makeSvg}=window.NABSBodyMap;
function injuryMapLabel(){
  const m=String(answers.verletzung_v51_muster||"");
  return m.replace(" / Knochenverletzung","").replace("- / Gelenkverletzungsverdacht","");
}
function isBurnMechanism(){return ["Verbrennung / Verbrühung","Verätzungen"].includes(String(answers.verletzung_v49_mechanismus||""));}
function selectedBodyInjuries(){
  const ids=Array.isArray(answers.verletzung_v51_koerperkarte)?answers.verletzung_v51_koerperkarte:[];
  const details=answers.verletzung_v51_koerperdetails||{};
  return ids.map(id=>{const region=injuryMapRegions.find(r=>r.id===id);const raw=String(details[id]||"");const type=raw.replace(/\s*\((?:rechts|links)\)\s*$/i,"").trim();const side=(raw.match(/\((rechts|links)\)\s*$/i)||[])[1]||"";return {id,label:region?.label||id,type,side};}).filter(x=>x.id);
}
function bodyMapTypes(){return [...new Set(selectedBodyInjuries().map(x=>x.type).filter(Boolean))];}
function primaryBodyMapType(){const types=bodyMapTypes();const rank=["Amputation","Schussverletzung","Stich- / Pfählungsverletzung","Tiefe Schnittwunde","Verbrennung / Verbrühung / Verätzung","Verletzungsmechanismus schwer","Fraktur","Luxation","Quetschung","Riss- / Quetsch- / Schnittverletzung","Platzwunde / Schürfung","Prellung / Bänderverletzung","Bissverletzung","Erfrierung","Verletzungsart unklar"];return types.sort((a,b)=>(rank.indexOf(a)<0?999:rank.indexOf(a))-(rank.indexOf(b)<0?999:rank.indexOf(b)))[0]||"";}
function bodyMapDiagnosis(){const injuries=selectedBodyInjuries();const type=primaryBodyMapType();if(!type)return null;const labels=injuries.map(x=>`${x.label}${x.type?` – ${x.type}`:""}${x.side?` (${x.side})`:""}`);const loc=labels.length?` – ${labels.join(", ")}`:"";const category={"Amputation":"CHIR / TRAUMA","Schussverletzung":"TRAUMA","Stich- / Pfählungsverletzung":"TRAUMA","Tiefe Schnittwunde":"CHIR / TRAUMA","Verbrennung / Verbrühung / Verätzung":"TRAUMA","Verletzungsmechanismus schwer":"TRAUMA","Fraktur":"CHIR / TRAUMA","Luxation":"CHIR / TRAUMA","Quetschung":"TRAUMA","Riss- / Quetsch- / Schnittverletzung":"CHIR / TRAUMA","Platzwunde / Schürfung":"CHIR / TRAUMA","Prellung / Bänderverletzung":"TRAUMA","Bissverletzung":"TRAUMA","Erfrierung":"TRAUMA","Verletzungsart unklar":"UNKLAR"}[type]||"TRAUMA";const text={"Amputation":"Amputationsverletzung","Schussverletzung":"Schussverletzung","Stich- / Pfählungsverletzung":"Stich-/Pfählungsverletzung","Tiefe Schnittwunde":"Tiefe Schnittverletzung","Verbrennung / Verbrühung / Verätzung":"Thermische/chemische Verletzung","Verletzungsmechanismus schwer":"Schwere Verletzung / Trauma","Fraktur":"Frakturverdacht","Luxation":"Luxationsverdacht","Quetschung":"Quetschverletzung","Riss- / Quetsch- / Schnittverletzung":"Riss-/Quetsch-/Schnittverletzung","Platzwunde / Schürfung":"Platzwunde / Schürfung","Prellung / Bänderverletzung":"Prell-/Bänderverletzung","Bissverletzung":"Bissverletzung","Erfrierung":"Erfrierungsverletzung","Verletzungsart unklar":"Unklare Verletzung"}[type]||type;return {type,category,primary:`${text}${loc}`,alternatives:[`${category} – gemäß Abfrage`,"Weitere Verletzungsfolge / Schweregrad gemäß Abfrage"]};}
function medicalDispatchCategory(){
  if(category==="aufzug"){
    if(answers.aufzug_med_symptome==="Krampfanfall") return "NEURO";
    if(answers.aufzug_med_symptome==="Brustschmerzen") return "INTERN";
    if(answers.aufzug_med_symptome==="Starke Atemnot" || answers.aufzug_med_atmung==="Ja") return "INTERN";
    if(answers.aufzug_med_bewusstsein==="Ja") return "NEURO";
    if(answers.aufzug_med_blutung==="Ja") return "TRAUMA";
    return "UNKLAR";
  }
  const g=String(answers.med_grund||"");const body=primaryBodyMapType();if(answers.deterioration==="Herz-Kreislauf-Stillstand"||answers.deterioration==="Atmet nicht mehr"||answers.atmung==="Atemstillstand")return "REA";if(body){if(["Amputation","Tiefe Schnittwunde","Riss- / Quetsch- / Schnittverletzung","Platzwunde / Schürfung","Fraktur","Luxation"].includes(body))return "CHIR";if(body==="Verletzungsart unklar")return "UNKLAR";return "TRAUMA";}if(g==="Allergie / Anaphylaxie")return "ALLERG";if(g==="Gefühlsstörung / Lähmung / Sprache / Sehstörung"||g==="Krampfanfall")return "NEURO";if(g==="Vergiftung")return "INTOX";if(g==="Psychische Erkrankung / Suizid")return "PSYCH";if(g==="Geburt / Schwangerschaft")return "GYN";if(g==="Verkehrsunfall")return "VERKEHR";if(g==="Ertrinkungsunfall")return "WASSER";if(g==="Verletzung"||g==="Arbeits- / Betriebs- / Schulunfall"){const m=String(answers.verletzung_v49_mechanismus||"");if(m==="Stromunfall"||m==="Blitzschlag")return "STROM";if(m==="Verkehrsunfall")return "VERKEHR";if(m==="Tierbisse / Tierstiche"&&answers.verletzung_v49_allergie==="Ja")return "ALLERG";return "TRAUMA";}if(["Atemstörung","Bauchschmerzen","Bewusstseinsstörung / Wesensveränderung","Blutungen","Brustschmerzen","Herzrhythmusstörungen","Hitze- / Kälteprobleme","Kollaps / Kreislaufstörung","Kopfschmerzen","Sonstige Schmerzen","Erkrankung / medizinische Hilfeleistung"].includes(g))return "INTERN";return "UNKLAR";}
function medicalRtwCount(){
  if(category==="aufzug"){
    const p=String(answers.aufzug_personen||"");
    if(p==="Mehr als 5 Personen") return 4;
    if(p==="2–5 Personen") return 2;
    return 1;
  }
  const exact=Number(answers.med_anzahl_genau);
  if(Number.isFinite(exact)&&exact>=1)return Math.min(4,Math.round(exact));
  const p=String(answers.med_personen||"");
  if(p==="Mehr als 9 / MANV")return 4;
  if(p==="2–9")return 2;
  return 1;
}
function renderInjuryMapQuestion(q,area){
  const selected=new Set(Array.isArray(answers[q.id])?answers[q.id]:[]);
  const burn=isBurnMechanism();
  const box=document.createElement("div"); box.className="injury-map-box";
  box.innerHTML=`<div class="injury-map-summary">Markiert: <strong id="injuryMapSummary">noch nichts</strong>${burn?` · VKOF: <strong id="injuryMapPercent">0,0 %</strong>`:""}</div><div class="injury-map-stage"><img src="koerperkarte_verbrennung.jpg" alt="Körperschema Vorder- und Rückseite"><svg class="injury-map-svg" viewBox="0 0 1536 868" preserveAspectRatio="none" aria-label="Körperschema Vorder- und Rückseite"></svg></div><div class="injury-additional-controls" id="injuryAdditionalControls"><div class="injury-additional-title">Zusätzliche Angaben</div><div class="injury-additional-hint">Nur Fragen, die noch nicht beantwortet wurden:</div><div class="injury-additional-buttons"></div></div>`;
  const svg=box.querySelector('.injury-map-svg'); const summary=box.querySelector('#injuryMapSummary'); const percent=box.querySelector('#injuryMapPercent');
  const additionalControls=box.querySelector('#injuryAdditionalControls');
  const additionalButtons=additionalControls.querySelector('.injury-additional-buttons');
  const centerOptions=[
    ['Gefühlsstörung / Lähmung','verletzung_v51_sym_gefuell'],
    ['Leichte bis mäßige Schmerzen','verletzung_v51_sym_schmerz_leicht'],
    ['Starke Schmerzen','verletzung_v51_sym_schmerz_stark'],
    ['Lebensbedrohliche Blutung','verletzung_v51_sym_blutung']
  ];
  const renderAdditionalButtons=()=>{
    const state=answers.verletzung_v51_symptome||{};
    additionalButtons.innerHTML='';
    centerOptions.forEach(([label,key])=>{
      if(state[key]) return;
      const b=document.createElement('button'); b.type='button'; b.className='injury-additional-btn'; b.textContent=label+' ?';
      b.onclick=()=>{
        answers.verletzung_v51_symptome=answers.verletzung_v51_symptome||{};
        answers.verletzung_v51_symptome[key]=true;
        b.remove();
        renderSummary();
      };
      additionalButtons.appendChild(b);
    });
    additionalControls.classList.toggle('empty',additionalButtons.children.length===0);
  };
  const renderSummary=()=>{
    const details=answers.verletzung_v51_koerperdetails||{};
    summary.textContent=selected.size?[...selected].map(id=>{const r=injuryMapRegions.find(r=>r.id===id);return `${r?.label||id}${details[id]?` – ${details[id]}`:""}`}).join(" · "):"noch nichts";
    if(percent) percent.textContent=burn?Math.min(100,burnMapValue(selected)).toLocaleString('de-DE',{minimumFractionDigits:1,maximumFractionDigits:1})+' %':"";
  };
  makeSvg(svg,selected,()=>{answers[q.id]=[...selected];renderSummary();});
  renderSummary();
  renderAdditionalButtons();
  const actions=document.createElement('div'); actions.className='free-actions';
  const next=document.createElement('button'); next.className='next-free'; next.textContent='Weiter →'; next.onclick=()=>{pushHistory();answers[q.id]=[...selected];steps++;render();};
  const clear=document.createElement('button'); clear.className='secondary unknown-btn'; clear.textContent='Auswahl löschen'; clear.onclick=()=>{selected.clear();answers[q.id]=[];answers.verletzung_v51_koerperdetails={};answers.verletzung_v51_symptome={};svg.querySelectorAll('.selected').forEach(x=>x.classList.remove('selected'));renderSummary();renderAdditionalButtons();};
  actions.append(next,clear); box.appendChild(actions); area.appendChild(box);
}
function renderBurnMapQuestion(q,area){ renderInjuryMapQuestion(q,area); }
function openQuestionReport(){
  const q=nextQuestion();
  if(!q || q.type==='hazmat') return;
  const typeOptions=[
    'Reihenfolge der Frage ist falsch','Frage fehlt','Frage soll gelöscht werden',
    'Frage soll neu formuliert werden','Antworten sollen geändert werden','Antwort fehlt',
    'Folgefrage ist falsch','Folgefrage fehlt','Falsche Folgefrage bei einer Antwort',
    'Einsatzstichwort / Alarmierung passt nicht','Sonstiges'
  ];
  const answerOptions=Array.isArray(q.options)?q.options:[];
  const currentAnswer=answers[q.id];
  const answerText=Array.isArray(currentAnswer)?currentAnswer.join(', '):(currentAnswer??'');
  openModal(`<div class="modal-title">⚑ Frage melden</div>
    <p class="hint">Die Meldung wird mit der exakt angezeigten Frage gespeichert und anschließend in QM2 unter <b>Fragenmeldungen</b> angezeigt.</p>
    <div class="report-question-preview"><b>${escapeHtml(q.text||'')}</b><div class="hint">Bereich: ${escapeHtml(title())} · Frage-ID: ${escapeHtml(q.id||'')}</div></div>
    <label>Was soll geändert werden?
      <input id="reportType" list="reportTypeList" class="modal-textarea" value="" placeholder="Aus Liste auswählen oder eigenen Text eingeben …">
      <datalist id="reportTypeList">${typeOptions.map(x=>`<option value="${escapeHtml(x)}">`).join('')}</datalist>
    </label>
    <label>Betroffene Antwort (optional)
      <input id="reportAnswer" list="reportAnswerList" class="modal-textarea" value="${escapeHtml(answerText)}" placeholder="Antwort auswählen oder eigene Angabe …">
      <datalist id="reportAnswerList">${answerOptions.map(x=>`<option value="${escapeHtml(x)}">`).join('')}</datalist>
    </label>
    <label>Begründung <span class="required">*</span>
      <textarea id="reportReason" class="modal-textarea" rows="5" placeholder="Was ist falsch bzw. was sollte geändert werden?"></textarea>
    </label>
    <label>Änderungsvorschlag (optional)
      <textarea id="reportSuggestion" class="modal-textarea" rows="4" placeholder="z. B. neue Formulierung, neue Antwort oder gewünschte Folgefrage …"></textarea>
    </label>
    <div class="modal-actions"><button id="sendQuestionReport">📤 Meldung absenden</button><button class="secondary modal-close">Abbrechen</button></div>
    <p id="reportStatus" class="hint"></p>`);
  const close=$('modalRoot').querySelector('.modal-close'); if(close) close.onclick=closeModal;
  $('sendQuestionReport').onclick=async()=>{
    const reason=String($('reportReason')?.value||'').trim();
    const type=String($('reportType')?.value||'').trim();
    if(!reason){$('reportStatus').textContent='Bitte eine Begründung eingeben.';return;}
    const btn=$('sendQuestionReport');btn.disabled=true;btn.textContent='⏳ Wird gespeichert …';
    try{
      const a=authState().token?authState():await anonymous();
      if(!a?.token) throw new Error('Keine Verbindung zur Meldungsverwaltung möglich.');
      await pushPublic('frageMeldungen',{
        createdAt:new Date().toISOString(),status:'neu',
        category:category||'',categoryTitle:title(),mode:mode||'',
        questionId:q.id||'',questionText:q.text||'',questionType:q.type||'choice',
        options:Array.isArray(q.options)?q.options:[],
        order:q.order??null,condition:{whenQuestion:q.whenQuestion||'',whenValue:q.whenValue??'',whenAny:q.whenAny||[],whenAll:q.whenAll||[],whenNot:q.whenNot||[]},
        reportType:type||'Sonstiges',affectedAnswer:String($('reportAnswer')?.value||'').trim(),reason,
        suggestion:String($('reportSuggestion')?.value||'').trim(),
        reportedAnswer:answerText,reportedBy:a.email||'Einsatzbearbeiter',reportedUid:a.uid||''
      });
      $('reportStatus').textContent='✓ Meldung gespeichert. Sie wird in QM2 angezeigt.';
      setTimeout(closeModal,700);
    }catch(e){btn.disabled=false;btn.textContent='📤 Meldung absenden';$('reportStatus').textContent='⚠️ '+e.message;}
  };
}
function openImprovementSuggestion(){
  openModal(`<div class="modal-title">💡 Verbesserungsvorschlag</div>
    <p class="hint">Du hast eine Idee, wie NABS/EHSI verbessert werden könnte? Der Vorschlag wird direkt an QM2 übermittelt.</p>
    <label>Betreff
      <input id="suggestionTitle" class="modal-input" maxlength="160" placeholder="Kurzer Titel …">
    </label>
    <label>Bereich
      <select id="suggestionCategory" class="modal-input">
        <option value="medizin">🚑 Rettungsdienst / Medizin</option>
        <option value="brand">🔥 Feuerwehr</option>
        <option value="thl">🛠️ THL</option>
        <option value="abc">☣️ Gefahrgut / ABC</option>
        <option value="allgemein" selected>⚙️ Allgemein / NABS</option>
        <option value="ehsi">📚 EHSI / Einsatzhilfe</option>
      </select>
    </label>
    <label>Verbesserungsvorschlag
      <textarea id="suggestionText" class="modal-textarea" rows="6" maxlength="4000" placeholder="Was sollte geändert, ergänzt oder verbessert werden? …"></textarea>
    </label>
    <div class="modal-actions"><button id="sendSuggestion">📤 Vorschlag senden</button><button class="secondary modal-close">Abbrechen</button></div>
    <p id="suggestionStatus" class="hint"></p>`);
  const modal=$('modalRoot');
  modal.querySelector('.modal-close').onclick=closeModal;
  $('sendSuggestion').onclick=async()=>{
    const title=String($('suggestionTitle')?.value||'').trim();
    const text=String($('suggestionText')?.value||'').trim();
    const categoryValue=String($('suggestionCategory')?.value||'allgemein');
    if(!title){$('suggestionStatus').textContent='Bitte einen kurzen Betreff eingeben.';return;}
    if(!text){$('suggestionStatus').textContent='Bitte den Verbesserungsvorschlag eingeben.';return;}
    const btn=$('sendSuggestion');btn.disabled=true;btn.textContent='⏳ Wird gespeichert …';
    try{
      const a=authState().token?authState():await anonymous();
      if(!a?.token) throw new Error('Keine Verbindung zur Vorschlagsverwaltung möglich.');
      await push('verbesserungsvorschlaege',{
        createdAt:new Date().toISOString(),status:'neu',title,text,category:categoryValue,
        categoryTitle:title(),mode:mode||'',questionId:currentQuestion?.id||'',
        questionText:currentQuestion?.text||'',reportedBy:a.email||'Einsatzbearbeiter',reportedUid:a.uid||''
      });
      $('suggestionStatus').textContent='✓ Vorschlag gespeichert. Er wird in QM2 angezeigt.';
      setTimeout(closeModal,800);
    }catch(e){btn.disabled=false;btn.textContent='📤 Vorschlag senden';$('suggestionStatus').textContent='⚠️ '+e.message;}
  };
}
function escapeHtml(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}

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
  currentQuestion=q||null;
  if(!q){finish();return;}
  $("categoryTitle").textContent=title();
  $("progress").textContent=`Frage ${steps+1}`;
  updatePhase();
  $("questionText").textContent=q.text;
  const reportBtn=$("reportQuestionBtn"); if(reportBtn){reportBtn.disabled=q.type==="hazmat"; reportBtn.onclick=openQuestionReport;}

  const area=$("answerArea");area.innerHTML="";
  if(q.id.startsWith("erkrankung_Fieber_")){
    const note=document.createElement("div");
    note.className="guideline-note";
    note.innerHTML="<b>🌡️ Fiebermanagement bei Kindern/Jugendlichen:</b> Die Temperaturhöhe allein ist kein Grund, Fieber zu senken. Entscheidend sind Befinden und Warnzeichen. Bei warmen Händen und Füßen und deutlichem Unwohlsein können körperwarme Wadenwickel erwogen werden; bei kalten Händen/Füßen, Frieren oder Schüttelfrost nicht kühlen.";
    area.appendChild(note);
  }
  if(q.type==="hazmat") {
    renderHazmatQuestion(area);
  } else if(q.type==="burnmap") {
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
      const rec=diagnosisSuggestion()||{primary:"Keine eindeutige Verdachtsdiagnose ableitbar",alternatives:["Unklare Ursache"]};
      const bodyDx=bodyMapDiagnosis();
      if(bodyDx){ input.value=bodyDx.primary; answers[q.id]=bodyDx.primary; }
      const recBox=document.createElement("div");recBox.className="diagnosis-recommendation";recBox.innerHTML=`<div class="diagnosis-recommendation-title">🤖 ${bodyDx?"Körperschema / algorithmischer Vorschlag":"Algorithmischer Verdachtsvorschlag"}</div><div class="diagnosis-recommendation-main">${rec.primary}</div><div class="hint">${bodyDx?"Das markierte Verletzungsmuster aus dem Körperschema bleibt für Kategorie und Einsatzstichwort maßgeblich.":"Nur Entscheidungshilfe – die Auswahl trifft der Disponent."}</div>`;const use=document.createElement("button");use.className="next-free";use.textContent="✓ Diesen Vorschlag übernehmen";use.onclick=()=>{input.value=rec.primary;answers[q.id]=rec.primary;};recBox.appendChild(use);const alt=document.createElement("div");alt.className="suggestions";(bodyDx?[bodyDx.category]:rec.alternatives||[]).forEach(x=>{const b=document.createElement("button");b.className="suggestion-btn";b.textContent=x;b.onclick=()=>{input.value=x;answers[q.id]=x;};alt.appendChild(b);});recBox.appendChild(alt);box.appendChild(recBox);
    }
    input.oninput=()=>answers[q.id]=input.value;box.appendChild(input);
    const actions=document.createElement("div");actions.className="free-actions";const next=document.createElement("button");next.className="next-free";next.textContent="Weiter →";next.onclick=()=>{const value=String(input.value??"").trim();if(!value&&!q.allowEmpty){input.focus();return;}pushHistory();answers[q.id]=value;steps++;render();};actions.appendChild(next);
    if(q.allowEmpty){const b=document.createElement("button");b.className="secondary unknown-btn";b.textContent="Leer lassen";b.onclick=()=>{pushHistory();answers[q.id]="";steps++;render();};actions.appendChild(b);}const unk=document.createElement("button");unk.className="secondary unknown-btn";unk.textContent="Unbekannt / keine Angabe";unk.onclick=()=>{pushHistory();answers[q.id]="Unbekannt";steps++;render();};actions.appendChild(unk);box.appendChild(actions);area.appendChild(box);
    // Die Verdachtsdiagnose soll auf Mobilgeräten nicht automatisch fokussiert
    // werden. Sonst scrollt der Browser nach jedem "Weiter" wieder zum Textfeld.
    if(q.id!=="verdachtsdiagnose") setTimeout(()=>input.focus(),50);
  }
}

let reaBeatTimer=null, reaStartedAt=0, reaBeats=0, reaAudio=null, reaBeatMs=545;
function stopREAHelper(){if(reaBeatTimer){clearInterval(reaBeatTimer);reaBeatTimer=null;}if(reaAudio){try{reaAudio.close();}catch(e){}reaAudio=null;}}
function reaBeep(){try{if(!reaAudio) reaAudio=new (window.AudioContext||window.webkitAudioContext)();const osc=reaAudio.createOscillator(),gain=reaAudio.createGain();osc.frequency.value=880;gain.gain.setValueAtTime(.0001,reaAudio.currentTime);gain.gain.exponentialRampToValueAtTime(.12,reaAudio.currentTime+.01);gain.gain.exponentialRampToValueAtTime(.0001,reaAudio.currentTime+.09);osc.connect(gain);gain.connect(reaAudio.destination);osc.start();osc.stop(reaAudio.currentTime+.1);}catch(e){console.warn("REA-Ton nicht verfügbar",e);}}
function reaBeat(){reaBeats++;const arrow=$("reaArrow"),count=$("reaCount"),timer=$("reaTime");if(count)count.textContent=String(reaBeats);if(arrow){arrow.classList.remove("rea-pulse");void arrow.offsetWidth;arrow.classList.add("rea-pulse");}reaBeep();if(timer){const sec=Math.floor((Date.now()-reaStartedAt)/1000);timer.textContent=`${String(Math.floor(sec/60)).padStart(2,"0")}:${String(sec%60).padStart(2,"0")}`;}}
function startREAHelper(){stopREAHelper();reaStartedAt=Date.now();reaBeats=0;reaBeatMs=545;answers.bewusstsein="Bewusstlos";answers.atmung="Atemstillstand";answers.deterioration="rea";reaShown=true;const start=$("reaStart"),stop=$("reaStop");if(start)start.disabled=true;if(stop)stop.disabled=false;if($("reaStatus"))$("reaStatus").textContent="REA läuft – Rhythmus 110/min";reaBeat();reaBeatTimer=setInterval(reaBeat,reaBeatMs);}
function openREAHelper(){stopREAHelper();reaBeats=0;openModal(`<div class="rea-helper"><div class="modal-title">🫀 REA – Anleitung zur Herzdruckmassage</div><p class="hint">Starten, wenn keine normale Atmung festgestellt wurde. Für Erwachsene empfiehlt die ERC-Leitlinie 2025 <b>100–120 Thoraxkompressionen pro Minute</b>; die Anweisungen der zuständigen Leitstelle haben Vorrang.</p><div class="rea-metrics"><div><span>Anzahl</span><strong id="reaCount">0</strong></div><div><span>Zeit</span><strong id="reaTime">00:00</strong></div></div><div class="rea-arrow-wrap"><div id="reaArrow" class="rea-arrow">⬇️</div><div class="rea-rate">100–120 / min</div></div><div class="rea-status" id="reaStatus">Bereit – noch nicht gestartet</div><div class="modal-actions"><button id="reaStart" class="rea-start">▶ REA START</button><button id="reaStop" class="secondary" disabled>⏹ Stoppen</button><button class="secondary modal-close">Schließen</button></div><p class="hint">Bei jedem Druck ertönt ein kurzer Ton. Die Lautstärke des Geräts beachten.</p></div>`);$("reaStart").onclick=startREAHelper;$("reaStop").onclick=()=>{stopREAHelper();$("reaStatus").textContent="Gestoppt – Anzahl und Zeit bleiben sichtbar.";$("reaStop").disabled=true;$("reaStart").disabled=false;};$("modalRoot").querySelector(".modal-close").onclick=()=>{stopREAHelper();closeModal();};}
function showREA(){reaShown=true;updatePhase();$("progress").textContent="⚠️ KRITISCHER NOTFALL";$("questionText").textContent="Reanimation sofort beginnen";$("answerArea").innerHTML=`<div class="rea-guide"><h3>🫀 PRÜFEN – RUFEN – DRÜCKEN</h3><p><b>1.</b> Telefon auf Lautsprecher und den Anweisungen der Leitstelle folgen.</p><p><b>2.</b> Reagiert die Person nicht und atmet sie nicht oder nicht normal: sofort handeln.</p><p><b>3.</b> Person auf den Rücken auf eine möglichst feste Unterlage legen.</p><p><b>4.</b> Handballen in die Mitte des Brustkorbs, zweite Hand darüber.</p><p><b>5.</b> Bei Erwachsenen etwa <b>5–6 cm</b> tief und <b>100–120/min</b> drücken und vollständig entlasten.</p><p><b>6.</b> AED holen lassen und den Geräteanweisungen folgen.</p><p class="hint">Die Anleitung der Notrufleitstelle hat Vorrang.</p><button id="reaFinish" type="button">Zur Auswertung</button></div>`;$("reaFinish").onclick=finish;}

function bodyMapHasMajorAmputation(){
  const amps=selectedBodyInjuries().filter(x=>x.type==="Amputation");
  if(!amps.length)return false;
  return amps.some(x=>!/(finger|zehe|daumen|kleiner zeh|große zehe|lange zehe|ringzehe|mittlere zehe)/i.test(String(x.label)));
}
function evaluateNotarzt(){
  if(category==="grossschaden")return [];
  const reasons=[];
  // Der Notarztindikationskatalog gilt auch dann, wenn der Einsatz über
  // Feuerwehr/THL eröffnet wurde und dort medizinisch betroffene Personen
  // vorhanden sind. Die vorhandenen medizinischen Regeln bleiben dabei die
  // maßgebliche Quelle; die Brücken unten übersetzen nur die entsprechenden
  // Feuerwehr-Antworten in die dafür benötigten medizinischen Kriterien.
  const ruleAnswers={...answers};
  if(category==="aufzug" && answers.aufzug_medizin==="Ja"){
    if(answers.aufzug_med_bewusstsein==="Ja") reasons.push("Bewusstseinsstörung / fehlende Ansprechbarkeit");
    if(answers.aufzug_med_atmung==="Ja") reasons.push("Relevante Atemstörung / schwere Atemnot");
    if(answers.aufzug_med_blutung==="Ja") reasons.push("Starke / nicht kontrollierbare Blutung");
    if(answers.aufzug_med_symptome==="Krampfanfall" && answers.aufzug_med_krampfstatus==="Ja") reasons.push("Anhaltender / wiederholter Krampfanfall");
    if(answers.aufzug_med_symptome==="Brustschmerzen") reasons.push("Akuter Brustschmerz");
    if(answers.aufzug_med_symptome==="Starke Atemnot") reasons.push("Ausgeprägte Atemnot");
    if(answers.aufzug_med_sofort==="Ja") reasons.push("Unmittelbare medizinische Gefahr");
  }
  if(category!=="medizin") {
    if(["fw_vergiftung_bewusst","fw_wasser_bewusst","fw_eis_bewusst","fw_tauch_bewusst","fw_notlage_bewusst"].some(id=>answers[id]==="Nein")) ruleAnswers.bewusstsein="Bewusstlos";
    if(["fw_vergiftung_atmung","fw_wasser_atmung","fw_tauch_atmung","fw_notlage_atmung"].some(id=>answers[id]==="Nein")) ruleAnswers.atmung="Keine normale Atmung";
    if(["fw_vergiftung_atmung"].some(id=>answers[id]==="Ja")) ruleAnswers.atem_01="Ja";
  }
  for(const r of Object.values(data.notarzt_rules||{})){
    const applies=(r.category==="medizin" || r.category===category);
    if(applies&&matches(ruleAnswers[r.questionId],r.values??r.value)) reasons.push(r.reason||r.id);
  }
  if(category==="medizin"){
    const bodyType=primaryBodyMapType();
    if(bodyType==="Amputation" && bodyMapHasMajorAmputation()) reasons.push("Größere Amputation / schwere Verletzung");
    if(bodyType==="Schussverletzung"||bodyType==="Stich- / Pfählungsverletzung") reasons.push("Penetrierende Verletzung – NEF-Indikation gemäß Lage prüfen");
    if(answers.verletzung_v49_blutung==="Ja") reasons.push("Starke / nicht kontrollierbare Blutung");
    if(answers.verletzung_v49_atmung==="Ja") reasons.push("Atemprobleme / zunehmende Atemnot");
    if(answers.verletzung_v49_bewusstsein==="Nein") reasons.push("Bewusstseinsstörung / fehlende Ansprechbarkeit");
    if(answers.verletzung_v49_schmerz==="Ja") reasons.push("Starke / zunehmende Schmerzen");
    if(bodyType==="Verbrennung / Verbrühung / Verätzung" && (answers.verletzung_v49_atmung==="Ja"||answers.verletzung_v49_blutung==="Ja"||answers.verletzung_v49_bewusstsein==="Nein")) reasons.push("Verbrennung/Verätzung mit möglicher Vitalgefährdung");
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
  // Die Rettungsdienst-Fahrzeugzahl steckt im medizinischen Stichwort
  // (R1/R2/R3/R4 bzw. N1R1/N1R2/...). Deshalb hier keine zusätzlichen
  // RTW-/NEF-Einträge erzeugen. Bei Feuerwehr/THL kommt die Fahrzeugliste
  // ausschließlich aus der hinterlegten AAO.
  if(category==="grossschaden")return [];
  if(category==="medizin")return [];
  return [];
}
function fallbackStichwort(){
  if(category==="grossschaden") return null;
  if(category==="medizin"){
    const nef=evaluateNotarzt().length>0;
    const rtw=medicalRtwCount();
    const cat=medicalDispatchCategory();
    const prefix=nef?`N1R${rtw}`:`R${rtw}`;
    return {code:prefix,name:`${prefix} - ${cat}`,priority:999};
  }
  if(category==="brand") {
    const fw=String(answers.fw_schadensfall||"");
    const map={
      "Brand / Rauchentwicklung":["FW-BRAND","Brand / Rauchentwicklung"],
      "Blitzschlag":["FW-BLITZ","Blitzschlag"],
      "Gewalt":["FW-GEWALT","Gewalt / Gefahrenlage"],
      "Naturereignis":["FW-NATUR","Naturereignis / Unwetter"],
      "Räumung / Evakuierung":["FW-EVA","Räumung / Evakuierung"],
      "Terroranschlag ausgeführt":["FW-TERROR","Terroranschlag ausgeführt"],
      "Terroranschlag Drohung":["FW-TERROR-D","Terroranschlag Drohung"],
      "Vergiftung":["FW-VERGIFT","Vergiftung / Gefahrstofflage"],
      "Sonstiger MANV (FREITEXT)":["FW-MANV","Sonstiger MANV"],
      "Ertrinkungsunfall":["FW-WASSER","Ertrinkungsunfall"],
      "Eisrettung":["FW-EIS","Eisrettung"],
      "Tauchunfall":["FW-TAUCH","Tauchunfall"],
      "Wasserfahrzeug / -sportler in Not":["FW-BOOT","Wasserfahrzeug / Wassersportler in Not"],
      "Sachbergung aus dem Wasser":["FW-WASSER-SACH","Sachbergung aus dem Wasser"],
      "Tierrettung aus dem Wasser":["FW-WASSER-TIER","Tierrettung aus dem Wasser"],
      "Verkehrsunfall":["FW-VU","Verkehrsunfall"],
      "Technische Hilfeleistung":["FW-THL","Technische Hilfeleistung"],
      "Gefahrstoffaustritt / ABC":["FW-ABC","Gefahrstoffaustritt / ABC"],
      "Explosion":["FW-EXPLOSION","Explosion"],
      "Einsturz / Gebäudeschaden":["FW-EINSTURZ","Einsturz / Gebäudeschaden"],
      "Person in Notlage":["FW-NOTLAGE","Person in Notlage"],
      "Tierrettung":["FW-TIER","Tierrettung"],
      "Öl-/Kraftstoffaustritt / Umweltschaden":["FW-UMWELT","Öl-/Kraftstoffaustritt / Umweltschaden"],
      "Sonstige Feuerwehrlage (FREITEXT)":["FW-SONST","Sonstige Feuerwehrlage"]
    };
    const m=map[fw]||["FW-EINSATZ","Feuerwehreinsatz"];
    return {code:m[0],name:m[1],priority:1};
  }
  if(category==="thl") return {code:mode==="wasser"?"THL-WASSER":"THL-VU",name:mode==="wasser"?"Wasserunfall / Ertrinkungsunfall":"Verkehrsunfall / Technische Hilfeleistung",priority:1};
  return null;
}
function chooseStichwort(){
  if(category==="aufzug") return {id:"TH1",code:"TH1",name:"Technische Hilfeleistung – Befreiung Person Aufzug",priority:999};
  if(category==="grossschaden")return null;
  const list=Object.values(data.einsatzstichworte||{}).filter(s=>s.category===category&&s.enabled!==false&&(s.conditions||[]).every(c=>matches(answers[c.questionId],c.values??c.value)));
  if(category==="medizin" && primaryBodyMapType()){
    const desired=medicalDispatchCategory();
    const nef=evaluateNotarzt().length>0;
    const rtw=medicalRtwCount();
    const prefix=nef?`N1R${rtw}`:`R${rtw}`;
    const exact=list.filter(s=>String(s.code||"").toUpperCase()===prefix && String(s.name||"").toUpperCase().includes(desired));
    const sameCode=list.filter(s=>String(s.code||"").toUpperCase()===prefix && String(s.name||"").toUpperCase().includes(desired));
    if(exact.length)return exact.sort((a,b)=>(b.priority||0)-(a.priority||0))[0];
    if(sameCode.length)return sameCode.sort((a,b)=>(b.priority||0)-(a.priority||0))[0];
    const byCat=list.filter(s=>String(s.name||"").toUpperCase().includes(desired));
    if(byCat.length)return byCat.sort((a,b)=>(b.priority||0)-(a.priority||0))[0];
    return fallbackStichwort();
  }
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
  const bodyDx=bodyMapDiagnosis();
  if(bodyDx) facts.push(`Verletzungsmuster: ${bodyDx.primary} · Kategorie ${bodyDx.category}`);
  else if(answers.verdachtsdiagnose) facts.push(`Verdachtsdiagnose: ${answers.verdachtsdiagnose}`);
  if(Array.isArray(answers.verletzung_v51_koerperkarte) && answers.verletzung_v51_koerperkarte.length){
    const details=answers.verletzung_v51_koerperdetails||{};
    const labels=answers.verletzung_v51_koerperkarte.map(id=>{const r=injuryMapRegions.find(r=>r.id===id);return `${r?.label||id}${details[id]?` (${details[id]})`:""}`;});
    facts.push(`Verletzung: ${labels.join(", ")}`);
  }
  if(isBurnMechanism() && Array.isArray(answers.verletzung_v51_koerperkarte) && answers.verletzung_v51_koerperkarte.length){
    const vk=burnMapValue(new Set(answers.verletzung_v51_koerperkarte));
    facts.push(`Betroffene Körperoberfläche: ca. ${vk.toLocaleString('de-DE',{minimumFractionDigits:1,maximumFractionDigits:1})} % VKOF`);
  }
  if(answers.atemfrequenz)facts.push(`AF ${answers.atemfrequenz}`);
  if(answers.med_zugang) facts.push(answers.med_zugang==="Ja"?"Patient frei zugänglich":answers.med_zugang==="Nein"?"Patient nicht frei zugänglich":"Zugang: "+answers.med_zugang);
  if(answers.med_zugang==="Nein" && answers.med_zugang_grund) facts.push(`Zugang erschwert: ${answers.med_zugang_grund}`);
  const qs=questions();
  for(const [id,v] of Object.entries(answers)){
    if(facts.length>=11)break;
    if(["med_wem","med_personen","med_anzahl_genau","med_spricht","med_demografie","med_grund","erkrankung_typ","erkrankung_dm_01","erkrankung_dm_04","erkrankung_dm_05","erkrankung_bd_02","verdachtsdiagnose","abfrage_bemerkung","atemfrequenz","deterioration","med_zugang","med_zugang_grund"].includes(id))continue;
    const q=qs.find(x=>x.id===id);if(!q)continue;
    const fact=dispatchAnswerFact(q,v);if(fact)facts.push(fact);
  }
  const hz=hazmatSummary();
  if(hz) facts.push(hz);
  return [...new Set(facts)].slice(0,11);
}
function dispatchText(resources,reasons,stichwort){
  const parts=[];
  if(stichwort?.name)parts.push(stichwort.name);
  if(category==="medizin") parts.push(...importantDispatchFacts());
  if(category==="brand"){
    if(answers.fw_schadensfall) parts.push(answers.fw_schadensfall);
    if(answers.objekt) parts.push(answers.objekt);
    if(answers.personen_im_objekt==="Ja")parts.push("Person(en) in Gefahr");
    const fwFacts=["fw_blitz_personen","fw_blitz_strom","fw_gewalt_aktiv","fw_gewalt_waffe","fw_gewalt_verletzt","fw_natur_art","fw_natur_personen","fw_evaku_grund","fw_evaku_betroffene","fw_terror_lage","fw_terror_verletzt","fw_abc_art","fw_abc_betroffen","fw_explo_personen","fw_explo_brand","fw_einsturz_akut","fw_einsturz_person","fw_notlage_art","fw_notlage_bewusst","fw_notlage_atmung","fw_tier_art","fw_tier_lage","fw_oel_art","fw_oel_gewasser","fw_sonst_text"];
    fwFacts.forEach(id=>{if(answers[id]!==undefined&&String(answers[id]).trim()!=="") parts.push(Array.isArray(answers[id])?answers[id].join(", "):String(answers[id]));});
    if(answers.fw_blitz_anzahl) parts.push(`ca. ${answers.fw_blitz_anzahl} Betroffene`);
    if(answers.fw_gewalt_anzahl) parts.push(`ca. ${answers.fw_gewalt_anzahl} Betroffene`);
    if(answers.fw_terror_anzahl) parts.push(`ca. ${answers.fw_terror_anzahl} Betroffene`);
    if(answers.fw_vergiftung_personen) parts.push(`ca. ${answers.fw_vergiftung_personen} Exponierte`);
    if(answers.fw_manv_anzahl) parts.push(`ca. ${answers.fw_manv_anzahl} Betroffene`);
    if(answers.fw_vu_anzahl) parts.push(`${answers.fw_vu_anzahl} Fahrzeuge`);
    if(answers.fw_vu_anzahl_klemm) parts.push(`${answers.fw_vu_anzahl_klemm} eingeklemmte/eingeschlossene Personen`);
    if(answers.fw_einsturz_anzahl) parts.push(`bis zu ${answers.fw_einsturz_anzahl} mögliche Betroffene`);
  }
  if(category==="thl"){if(mode==="vu")parts.push("Verkehrsunfall");if(mode==="wasser")parts.push("Wasser-/Eisunfall");if(answers.lage)parts.push(answers.lage);if(answers.eingeklemmt==="Ja")parts.push("Person(en) eingeklemmt/eingeschlossen");}
  if(category==="grossschaden"){parts.push(answers.gs_lage||"Großschadenslage");if(answers.gs_orte)parts.push(answers.gs_orte);if(answers.gs_betroffene)parts.push(`ca. ${answers.gs_betroffene} Betroffene`);}
  if(category==="aufzug"){
    parts.push("Aufzugsnotruf / eingeschlossene Person(en)");
    if(answers.aufzug_personen) parts.push(answers.aufzug_personen);
    if(answers.aufzug_position) parts.push(answers.aufzug_position);
    if(answers.aufzug_tueren) parts.push(`Türen: ${answers.aufzug_tueren}`);
    if(answers.aufzug_gefahr==="Ja") parts.push("Akute Gefahr am Aufzug");
    if(answers.aufzug_medizin==="Ja") {
      const nef=evaluateNotarzt().length>0, rtw=medicalRtwCount(), medCat=medicalDispatchCategory();
      parts.push(`Medizinisches Stichwort: ${nef?`N1R${rtw}`:`R${rtw}`} - ${medCat}`);
      parts.push("Zusätzlicher medizinischer Notfall");
      ["aufzug_med_bewusstsein","aufzug_med_atmung","aufzug_med_blutung","aufzug_med_symptome","aufzug_med_krampfstatus"].forEach(id=>{if(answers[id]&&answers[id]!=="Nein"&&answers[id]!=="Nein / unklar")parts.push(answers[id]);});
    }
  }
  const hz=hazmatSummary(); if(hz) parts.push(`Gefahrgutlage: ${hz}`);
  if(answers.abfrage_bemerkung)parts.push(`Zusatz: ${answers.abfrage_bemerkung}`);
  return parts.filter(Boolean).join(" – ").slice(0,520)||"Einsatz – weitere Angaben nicht verfügbar";
}
function alarmierungVorschlag(reasons,resources){
  const out={rtw:false,nef:reasons.length>0,feuerwehr:resources.length>0,polizei:false,hinweise:[]};
  if(category==="medizin"){
    // RTW/NEF werden nicht separat als Ja/Nein ausgegeben: Die Auswahl
    // steht bereits im Rettungsdienst-Stichwort.
    out.rtw=true;
  }
  if(reasons.length) out.hinweise.push("NEF/Notarzt gemäß hinterlegtem Notarztindikationskatalog.");
  return out;
}
function currentResult(){
  const reasons=evaluateNotarzt(),stichwort=chooseStichwort(),aao=stichwort?data.aao?.[stichwort.id]||null:null;
  if(stichwort && !stichwort.volltext && aao?.volltext) stichwort={...stichwort,volltext:aao.volltext};
  const hz=hazmatSummary();
  let final=[];
  if(category==="aufzug") {
    // Aufzugsnotruf ist ein TH1-Einsatz. Die AAO für TH1 liefert die
    // Feuerwehrfahrzeuge; bei medizinischem Zusatz wird parallel das
    // medizinische Stichwort mit RTW/NEF ausgewertet.
    const th1=data.aao?.TH1;
    final=Array.isArray(th1?.resources)?th1.resources.slice():["HLF"];
  } else if(category==="brand"||category==="thl"||category==="abc") {
    // Nur tatsächlich zu alarmierende Feuerwehrmittel aus der AAO anzeigen.
    // Allgemeine Platzhalter wie "Feuerwehr" werden bewusst nicht ausgegeben.
    final=Array.isArray(aao?.resources)?aao.resources.filter(x=>!/^RTW$|^NEF$|Rettungsdienst|Notarzt/i.test(String(x).trim())):[];
  } else if(category==="grossschaden") {
    final=["Großschadenslage – lageabhängige Einsatzmittel prüfen"];
  }
  const unique=[...new Set(final.filter(Boolean).map(String))];
  const medicalStichwort=(category==="aufzug" && answers.aufzug_medizin==="Ja")
    ? (()=>{const nef=reasons.length>0,rtw=medicalRtwCount(),cat=medicalDispatchCategory(),prefix=nef?`N1R${rtw}`:`R${rtw}`;return {code:prefix,name:`${prefix} - ${cat}`};})()
    : null;
  return{reasons,resources:unique,stichwort,aao,medicalStichwort,alarmierung:alarmierungVorschlag(reasons,unique),dispatchText:dispatchText(unique,reasons,stichwort)};
}
async function recordAbort(reason, otherReason="") {
  const now=new Date();
  const baseReason=String(reason||"").trim();
  const extra=String(otherReason||"").trim();
  const abbruchgrund=baseReason==='Sonstiges' && extra ? `Sonstiges: ${extra}` : baseReason;
  const record={
    createdAt:now.toISOString(),
    datum:now.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"}),
    uhrzeit:now.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),
    abbruchgrund,
    status:"neu",
    category:category||"",
    categoryTitle:title(),
    mode:mode||""
  };
  try{
    await pushPublic("abbruchAbfragen",record);
    return true;
  }catch(e){
    console.error("Abbruch konnte nicht gespeichert werden",e);
    const msg=String(e?.message||e);
    alert("Der Abbruch konnte nicht gespeichert werden.\n\n"+msg);
    return false;
  }
}

async function recordUsage(){
  try{
    const key=mode==="fw"?"feuerwehr":mode==="vu"?"verkehrsunfall":mode==="wasser"?"wasserunfall":mode==="aufzug"?"aufzug":mode==="grossschaden"?"grossschaden":category||"sonstiges";
    await pushPublic("nutzungsereignisse",{category:key,categoryTitle:title(),createdAt:new Date().toISOString()});
  }catch(e){
    console.warn("Nutzungszähler konnte nicht gespeichert werden.",e);
  }
}
function openAbortReason(onDone){
  const reasons=["Böswilliger Anruf","Fehlanruf","Verschlechterung","Test","Servicefrage","Sonstiges"];
  openModal(`<div class="modal-title">⏹ Abfrage abbrechen</div><p class="hint">Bitte zuerst genau einen Grund auswählen. Erst danach wird „Abbruch speichern“ freigeschaltet.</p><div class="modal-buttons">${reasons.map((r,i)=>`<button type="button" class="abort-choice ${r==='Verschlechterung'?"danger-choice":""}" data-abort-reason="${i}">${r}</button>`).join("")}</div><div id="abortOtherWrap" style="display:none"><label for="abortOther">Grund für „Sonstiges“</label><textarea id="abortOther" class="modal-textarea" placeholder="Bitte Grund eintragen …"></textarea></div><div class="modal-actions"><button type="button" id="abortSave" disabled>Abbruch speichern</button><button type="button" class="secondary modal-close">Abbrechen</button></div>`);
  let selectedReason="";
  const modal=$('modalRoot');
  const choices=[...modal.querySelectorAll('[data-abort-reason]')];
  const save=$('abortSave');
  const otherWrap=$('abortOtherWrap');
  const otherInput=$('abortOther');
  choices.forEach(btn=>btn.addEventListener('click',()=>{
    selectedReason=reasons[Number(btn.dataset.abortReason)]||"";
    choices.forEach(x=>x.classList.toggle('selected',x===btn));
    const other=selectedReason==='Sonstiges';
    otherWrap.style.display=other?'block':'none';
    if(otherInput) otherInput.value='';
    save.disabled=!selectedReason;
    if(other) setTimeout(()=>otherInput?.focus(),0);
  }));
  save.onclick=async()=>{
    if(!selectedReason){alert('Bitte zuerst einen Abbruchgrund auswählen.');return;}
    const text=selectedReason==='Sonstiges'?String(otherInput?.value||'').trim():'';
    if(selectedReason==='Sonstiges'&&!text){alert('Bitte bei „Sonstiges“ einen Grund eintragen.');otherInput?.focus();return;}
    save.disabled=true; save.textContent='Speichert …';
    const ok=await recordAbort(selectedReason,text);
    if(ok){
      if(durationTimer)clearInterval(durationTimer);
      closeModal();
      if(typeof onDone==='function') await onDone();
      else location.href='ils.html';
    }else{
      save.disabled=false; save.textContent='Abbruch speichern';
    }
  };
  modal.querySelector('.modal-close').onclick=closeModal;
}

function finish(){const r=currentResult();const result={createdAt:new Date().toISOString(),category,mode,categoryTitle:title(),answers:{...answers},reasons:r.reasons,resources:r.resources,stichwort:r.stichwort,aao:r.aao,aaoCatalog:data.aao||{},medicalStichwort:r.medicalStichwort||null,alarmierung:r.alarmierung,dispatchText:r.dispatchText,adjustments:[],rea:reaShown,partialExit:!reaShown&&steps>0,abfrageStatus:phaseText(),questionsAnswered:steps,abfragedauer:durationText()};if(durationTimer)clearInterval(durationTimer);sessionStorage.setItem("einsatzabfrage_result",JSON.stringify(result));location.href="ergebnis.html";}

function openModal(html){$("modalRoot").innerHTML=`<div class="modal-backdrop" id="modalBackdrop"><div class="modal-card">${html}</div></div>`;$("modalBackdrop").onclick=e=>{if(e.target.id==="modalBackdrop")closeModal();};}
function closeModal(){$("modalRoot").innerHTML="";}
function openDeterioration(){openModal(`<div class="modal-title">⚠️ Verschlechterung</div><p class="hint">Sofort den eingetretenen Zustand auswählen. Das Abfrageschema springt anschließend in den passenden Notfallpfad.</p><div class="modal-buttons"><button class="danger-choice" data-det="rea">🫀 Herz-Kreislauf-Stillstand</button><button class="danger-choice" data-det="noBreath">🫁 Atmet nicht mehr</button><button class="danger-choice" data-det="collapse">🧍 Umgefallen / kollabiert / bewusstlos</button><button class="danger-choice" data-det="seizure">⚡ Krampft</button><button class="danger-choice" data-det="dyspnea">🫁 Selbstanrufer – starke Atemnot</button></div><button class="secondary modal-close">Abbrechen</button>`);document.querySelectorAll("[data-det]").forEach(b=>b.onclick=()=>{const d=b.dataset.det;pushHistory();if(d==="rea"||d==="noBreath"){answers.bewusstsein="Bewusstlos";answers.atmung="Atemstillstand";answers.deterioration=d;reaShown=false;closeModal();showREA();return;}if(d==="collapse"){answers.med_grund="Kollaps / Kreislaufstörung";answers.bewusstsein_01="Ja";answers.deterioration="Umgefallen / kollabiert / bewusstlos";}if(d==="seizure"){answers.med_grund="Krampfanfall";answers.krampf_01="Ja";answers.deterioration="Krampft";}if(d==="dyspnea"){answers.med_grund="Atemstörung";answers.atem_01="Ja";answers.deterioration="Selbstanrufer – starke Atemnot";}closeModal();render();});document.querySelector(".modal-close").onclick=closeModal;}
function openRemark(){openModal(`<div class="modal-title">📝 Abfragebemerkung</div><p class="hint">Zusätzige wichtige Information. Sie wird im Zwischenergebnis, Alarmmittelvorschlag und Einsatztext berücksichtigt.</p><textarea id="remarkInput" class="modal-textarea" placeholder="Wichtige Zusatzinformation …">${String(answers.abfrage_bemerkung||"").replace(/</g,"&lt;")}</textarea><div class="modal-actions"><button id="saveRemark">Speichern</button><button class="secondary modal-close">Abbrechen</button></div>`);$("saveRemark").onclick=()=>{answers.abfrage_bemerkung=String($("remarkInput").value||"").trim();closeModal();render();};$("modalRoot").querySelector(".modal-close").onclick=closeModal;}
function openInterim(){const r=currentResult();openModal(`<div class="modal-title">📟 Zwischenergebnis / Voralarm</div><div class="interim-status"><strong>Abfragestatus:</strong> ${phaseText()} · ${steps} Fragen beantwortet · ⏱ ${durationText()}</div><div class="interim-box"><b>Einsatzstichwort</b><div>${r.stichwort?`${r.stichwort.code} – ${r.stichwort.name}`:"Noch kein eindeutiges Einsatzstichwort"}</div></div><div class="interim-box"><b>Alarmmittelvorschlag</b>${r.resources.length?r.resources.map(x=>`<div class="resource-row">• ${x}</div>`).join(""):"<div class='hint'>Aus den bisherigen Angaben noch kein konkretes Mittel ableitbar.</div>"}${answers.abfrage_bemerkung?`<div class="remark-live">📝 Zusatzinformation wird mit dem Einsatztext mitgeführt.</div>`:""}</div>${r.reasons.length?`<div class="alarm-banner">🚨 NEF / NOTARZT – hinterlegtes Kriterium ausgelöst</div>`:""}${answers.abfrage_bemerkung?`<div class="interim-box"><b>Abfragebemerkung</b><div>${answers.abfrage_bemerkung}</div></div>`:""}<div class="interim-box"><b>Einsatztext bisher</b><div class="dispatch">${r.dispatchText}</div></div><div class="modal-actions"><button class="modal-close">Abfrage fortsetzen</button><button id="finishInterim" class="action-exit">Ausstieg & Ergebnis</button></div>`);document.querySelector(".modal-close").onclick=closeModal;$("finishInterim").onclick=()=>{closeModal();finish();};}
function openAF(){stopBreath();breathSeconds=0;breathCount=0;breathRunning=false;openModal(`<div class="modal-title">🫁 Atemfrequenz</div><p class="hint">30 Sekunden zählen. Bei jedem Atemzug auf den großen Button tippen.</p><div class="af-display"><strong id="afSeconds">30</strong><span>Sekunden</span></div><div class="breath-count"><span>Atemzüge</span><strong id="afCount">0</strong></div><button id="breathStart" class="breath-main">▶ 30 Sekunden starten</button><button id="breathTap" class="breath-tap" disabled>ATEMZUG +1</button><div id="afResult" class="af-result hint">Noch keine Messung.</div><div class="modal-actions"><button class="secondary modal-close">Schließen</button></div>`);$("breathStart").onclick=startBreath;$("breathTap").onclick=()=>{if(breathRunning){breathCount++;$("afCount").textContent=breathCount;}};$("modalRoot").querySelector(".modal-close").onclick=closeModal;}
function startBreath(){stopBreath();breathSeconds=30;breathCount=0;breathRunning=true;$("afSeconds").textContent="30";$("afCount").textContent="0";$("breathTap").disabled=false;$("breathStart").textContent="⏱ Messung läuft …";breathTimer=setInterval(()=>{breathSeconds--;$("afSeconds").textContent=String(Math.max(0,breathSeconds));if(breathSeconds<=0){stopBreath();const af=breathCount*2;$("afResult").innerHTML=`<strong>Ergebnis: ${af}/min</strong><br>${af<8||af>30?"⚠️ deutlich auffällig – Ergebnis im Gesamtkontext bewerten.":af<12||af>20?"ℹ️ außerhalb des üblichen Erwachsenen-Richtbereichs.":"✓ im üblichen Erwachsenen-Richtbereich."}`;answers.atemfrequenz=`${af}/min (30 s: ${breathCount})`;}} ,1000);}
function stopBreath(){if(breathTimer){clearInterval(breathTimer);breathTimer=null;}breathRunning=false;}

$("deteriorationBtn").onclick=openDeterioration;$("interimBtn").onclick=openInterim;$("remarkBtn").onclick=openRemark;$("hazmatBtn")?.addEventListener("click",openHazmat);$("exitBtn").onclick=()=>openAbortReason(()=>{location.href="ils.html"});$("afBtn").onclick=openAF;$("reaBtn").onclick=openREAHelper;$("remarkQuick")?.addEventListener("input",e=>answers.abfrage_bemerkung=e.target.value);window.addEventListener("nabs-abort-launcher",()=>openAbortReason(()=>{location.href="ils.html"}));
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
  if(!["medizin","brand","thl","grossschaden","aufzug"].includes(category)) throw new Error("Ungültige Kategorie");
  startTime=Date.now();
  if(mode==="vu") answers.thl_art="Verkehrsunfall";
  if(mode==="wasser") answers.thl_art="Wasser / Eis / Ertrinkungsunfall";
  $("categoryTitle").textContent=title();
  $("status").textContent="● Abfrage aktiv · lokale Grunddaten geladen";
  recordUsage();
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
