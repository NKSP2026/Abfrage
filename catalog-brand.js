export const catalog={
  "fw_schadensfall": {"id":"fw_schadensfall","text":"Um welche Art von Schadensfall handelt es sich?","type":"choice","order":1,"options":["Brand / Rauchentwicklung","Blitzschlag","Gewalt","Naturereignis","Räumung / Evakuierung","Terroranschlag ausgeführt","Terroranschlag Drohung","Vergiftung","Sonstiger MANV (FREITEXT)","Ertrinkungsunfall","Eisrettung","Tauchunfall","Wasserfahrzeug / -sportler in Not","Sachbergung aus dem Wasser","Tierrettung aus dem Wasser","Verkehrsunfall","Technische Hilfeleistung","Gefahrstoffaustritt / ABC","Explosion","Einsturz / Gebäudeschaden","Person in Notlage","Tierrettung","Öl-/Kraftstoffaustritt / Umweltschaden","Sonstige Feuerwehrlage (FREITEXT)"],"fwBranch":true},
  "objekt": {
    "id": "objekt",
    "text": "Um was für ein Objekt handelt es sich?",
    "type": "choice",
    "order": 10,
    "options": [
      "Wohngebäude / Wohnung",
      "Gewerbe / öffentliches Gebäude",
      "Fahrzeug",
      "Freifläche",
      "Sonstiges",
      "Unklar"
    ]
  },
  "feuerart": {
    "id": "feuerart",
    "text": "Was wird wahrgenommen?",
    "type": "choice",
    "order": 20,
    "options": [
      "Rauchentwicklung",
      "Sichtbarer Brand",
      "Rauch und sichtbarer Brand",
      "Unklar"
    ]
  },
  "brandumfang": {
    "id": "brandumfang",
    "text": "Wie groß ist der betroffene Bereich ungefähr?",
    "type": "choice",
    "order": 30,
    "options": [
      "Ein Gegenstand / kleiner Bereich",
      "Ein Raum",
      "Mehrere Räume",
      "Gebäudeabschnitt",
      "Unklar"
    ]
  },
  "etage": {
    "id": "etage",
    "text": "Welche Etage ist betroffen?",
    "type": "choice",
    "order": 40,
    "options": [
      "Keller",
      "Erdgeschoss",
      "1. Obergeschoss",
      "2. Obergeschoss",
      "3. Obergeschoss oder höher",
      "Unklar"
    ],
    "whenQuestion": "objekt",
    "whenValue": "Wohngebäude / Wohnung"
  },
  "wohneinheit": {
    "id": "wohneinheit",
    "text": "Welche Wohneinheit ist betroffen?",
    "type": "choice",
    "order": 50,
    "options": [
      "Links",
      "Rechts",
      "Mitte",
      "Mehrere / unklar"
    ],
    "whenQuestion": "objekt",
    "whenValue": "Wohngebäude / Wohnung"
  },
  "weitere_etagen": {
    "id": "weitere_etagen",
    "text": "Sind weitere Etagen vom Rauch/Feuer betroffen oder gefährdet?",
    "type": "choice",
    "order": 60,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "objekt",
    "whenValue": "Wohngebäude / Wohnung"
  },
  "personen_im_objekt": {
    "id": "personen_im_objekt",
    "text": "Befinden sich noch Personen im Gebäude oder unmittelbaren Gefahrenbereich?",
    "type": "choice",
    "order": 70,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "personen_anzahl": {
    "id": "personen_anzahl",
    "text": "Wie viele Personen befinden sich noch im Gebäude/Gefahrenbereich?",
    "type": "number",
    "order": 80,
    "whenQuestion": "personen_im_objekt",
    "whenValue": "Ja"
  },
  "person_wohnung": {
    "id": "person_wohnung",
    "text": "Sind Personen in der betroffenen Wohnung bzw. im betroffenen Bereich?",
    "type": "choice",
    "order": 90,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "objekt",
    "whenValue": "Wohngebäude / Wohnung",
    "whenQuestion2": null
  },
  "rauchbetroffene": {
    "id": "rauchbetroffene",
    "text": "Gibt es bereits gerettete Personen mit Rauchgas-/Rauchbelastung?",
    "type": "choice",
    "order": 100,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "rettung_weg": {
    "id": "rettung_weg",
    "text": "Ist der Flucht-/Rettungsweg durch Rauch oder Feuer beeinträchtigt?",
    "type": "choice",
    "order": 110,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "ausbreitung": {
    "id": "ausbreitung",
    "text": "Breitet sich Feuer oder Rauch weiter aus?",
    "type": "choice",
    "order": 120,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "nachbar": {
    "id": "nachbar",
    "text": "Sind angrenzende Wohnungen/Räume ebenfalls betroffen oder gefährdet?",
    "type": "choice",
    "order": 130,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "fahrzeug_lage": {
    "id": "fahrzeug_lage",
    "text": "Wo befindet sich der Fahrzeugbrand?",
    "type": "choice",
    "order": 140,
    "options": [
      "Im Freien",
      "Garage / Tiefgarage",
      "Gebäudenähe",
      "Unklar"
    ],
    "whenQuestion": "objekt",
    "whenValue": "Fahrzeug"
  },
  "strom_gas": {
    "id": "strom_gas",
    "text": "Besteht eine zusätzliche Gefahr durch Strom, Gas oder andere Energiequellen?",
    "type": "choice",
    "order": 150,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "gasflaschen": {
    "id": "gasflaschen",
    "text": "Sind Gasflaschen, Druckbehälter oder andere gefährliche Behälter im Gefahrenbereich?",
    "type": "choice",
    "order": 160,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brandgut": {
    "id": "brandgut",
    "text": "Was brennt bzw. welcher Bereich ist betroffen?",
    "type": "text",
    "order": 170,
    "placeholder": "z. B. Küche, Keller, Fahrzeug, Müll …",
    "allowEmpty": true
  },
  "zugang": {
    "id": "zugang",
    "text": "Gibt es Besonderheiten beim Zugang für Einsatzkräfte?",
    "type": "text",
    "order": 180,
    "placeholder": "z. B. verschlossen, Hinterhof, Tor …",
    "allowEmpty": true
  },
  "brand_extra_1": {
    "id": "brand_extra_1",
    "text": "Sind Treppenraum oder Flure verraucht?",
    "type": "choice",
    "order": 200,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "objekt",
    "whenValue": "Wohngebäude / Wohnung"
  },
  "brand_extra_2": {
    "id": "brand_extra_2",
    "text": "Ist ein Aufzug als Zugangs-/Rettungsweg betroffen?",
    "type": "choice",
    "order": 210,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "objekt",
    "whenValue": "Wohngebäude / Wohnung"
  },
  "brand_extra_3": {
    "id": "brand_extra_3",
    "text": "Ist eine Brandmeldeanlage ausgelöst?",
    "type": "choice",
    "order": 220,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_4": {
    "id": "brand_extra_4",
    "text": "Ist eine automatische Löschanlage vorhanden/ausgelöst?",
    "type": "choice",
    "order": 230,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_5": {
    "id": "brand_extra_5",
    "text": "Ist eine Person vermisst?",
    "type": "choice",
    "order": 240,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_6": {
    "id": "brand_extra_6",
    "text": "Sind Kinder oder hilfsbedürftige Personen betroffen?",
    "type": "choice",
    "order": 250,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_7": {
    "id": "brand_extra_7",
    "text": "Sind Personen eingeschlossen?",
    "type": "choice",
    "order": 260,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_8": {
    "id": "brand_extra_8",
    "text": "Ist eine Menschenrettung aktuell erforderlich?",
    "type": "choice",
    "order": 270,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_9": {
    "id": "brand_extra_9",
    "text": "Besteht Einsturzgefahr oder eine auffällige Gebäudeschädigung?",
    "type": "choice",
    "order": 280,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_10": {
    "id": "brand_extra_10",
    "text": "Sind Nachbargebäude gefährdet?",
    "type": "choice",
    "order": 290,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_11": {
    "id": "brand_extra_11",
    "text": "Ist die Brandstelle von außen sichtbar?",
    "type": "choice",
    "order": 300,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_12": {
    "id": "brand_extra_12",
    "text": "Gibt es Explosionen oder Knallgeräusche?",
    "type": "choice",
    "order": 310,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_13": {
    "id": "brand_extra_13",
    "text": "Sind Flüssigkeiten ausgetreten, die brennen könnten?",
    "type": "choice",
    "order": 320,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_14": {
    "id": "brand_extra_14",
    "text": "Sind Photovoltaikanlage oder Batteriespeicher vorhanden/betroffen?",
    "type": "choice",
    "order": 330,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_15": {
    "id": "brand_extra_15",
    "text": "Ist eine Tiefgarage oder größere Garage betroffen?",
    "type": "choice",
    "order": 340,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_16": {
    "id": "brand_extra_16",
    "text": "Sind mehrere Fahrzeuge betroffen?",
    "type": "choice",
    "order": 350,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_17": {
    "id": "brand_extra_17",
    "text": "Sind Tiere im Gebäude/Gefahrenbereich?",
    "type": "choice",
    "order": 360,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_18": {
    "id": "brand_extra_18",
    "text": "Kann die Feuerwehrzufahrt erreicht werden?",
    "type": "choice",
    "order": 370,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_19": {
    "id": "brand_extra_19",
    "text": "Gibt es eine bekannte besondere Gefahr im Objekt?",
    "type": "choice",
    "order": 380,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra_20": {
    "id": "brand_extra_20",
    "text": "Ist die Lageentwicklung seit Beginn zunehmend?",
    "type": "choice",
    "order": 390,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra2_1": {
    "id": "brand_extra2_1",
    "text": "Ist das Treppenhaus als Flucht-/Rettungsweg nutzbar?",
    "type": "choice",
    "order": 500,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "objekt",
    "whenValue": "Wohngebäude / Wohnung"
  },
  "brand_extra2_2": {
    "id": "brand_extra2_2",
    "text": "Ist eine Wohnungstür offen oder verschlossen?",
    "type": "choice",
    "order": 510,
    "options": [
      "Offen",
      "Verschlossen",
      "Unklar"
    ],
    "whenQuestion": "objekt",
    "whenValue": "Wohngebäude / Wohnung"
  },
  "brand_extra2_3": {
    "id": "brand_extra2_3",
    "text": "Sind Fenster aus dem betroffenen Bereich offen oder beschädigt?",
    "type": "choice",
    "order": 520,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "objekt",
    "whenValue": "Wohngebäude / Wohnung"
  },
  "brand_extra2_4": {
    "id": "brand_extra2_4",
    "text": "Besteht Gefahr durch herunterfallende Bauteile?",
    "type": "choice",
    "order": 530,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra2_5": {
    "id": "brand_extra2_5",
    "text": "Sind Atemschutz-/Rauchgasgefahren für Personen im Gebäude anzunehmen?",
    "type": "choice",
    "order": 540,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra2_6": {
    "id": "brand_extra2_6",
    "text": "Ist die Brandstelle bereits durch Personen verlassen worden?",
    "type": "choice",
    "order": 550,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra2_7": {
    "id": "brand_extra2_7",
    "text": "Gibt es Hinweise auf eine Brandstiftung oder unklare Ursache?",
    "type": "choice",
    "order": 560,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra2_8": {
    "id": "brand_extra2_8",
    "text": "Sind Gas-/Druckbehälter erwärmt oder dem Feuer ausgesetzt?",
    "type": "choice",
    "order": 570,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra2_9": {
    "id": "brand_extra2_9",
    "text": "Sind gefährliche Stoffe oder Chemikalien im Brandbereich bekannt?",
    "type": "choice",
    "order": 580,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra2_10": {
    "id": "brand_extra2_10",
    "text": "Ist eine Wasserversorgung/Feuerwehrzufahrt problematisch?",
    "type": "choice",
    "order": 590,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra2_11": {
    "id": "brand_extra2_11",
    "text": "Sind Photovoltaikmodule auf dem Dach betroffen?",
    "type": "choice",
    "order": 600,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra2_12": {
    "id": "brand_extra2_12",
    "text": "Ist ein Batteriespeicher betroffen?",
    "type": "choice",
    "order": 610,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra2_13": {
    "id": "brand_extra2_13",
    "text": "Sind Fahrzeuge in einer Garage/Tiefgarage gefährdet?",
    "type": "choice",
    "order": 620,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra2_14": {
    "id": "brand_extra2_14",
    "text": "Besteht Gefahr der Brandausbreitung auf Nachbargebäude?",
    "type": "choice",
    "order": 630,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "brand_extra2_15": {
    "id": "brand_extra2_15",
    "text": "Sind Personen auf Balkon/Fenster aufmerksam geworden oder dort eingeschlossen?",
    "type": "choice",
    "order": 640,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "objekt",
    "whenValue": "Wohngebäude / Wohnung"
  }
};


// V66-Erweiterung: Bestehende Brandfragen gehören ausschließlich zum Brand-/Rauch-Zweig.
Object.values(catalog).forEach(q=>{ if(q.id!=="fw_schadensfall" && !q.fwBranch) q.fwLegacyBrand=true; });

const fw = (id,text,options,order,whenValue,extra={}) => ({id,text,type:extra.type||"choice",order,options,whenQuestion:"fw_schadensfall",whenValue,fwBranch:true,...extra});
Object.assign(catalog,{
  fw_blitz_personen: fw("fw_blitz_personen","Sind Personen durch den Blitzschlag betroffen oder verletzt?",["Ja","Nein","Unklar"],100,"Blitzschlag"),
  fw_blitz_anzahl: fw("fw_blitz_anzahl","Wie viele Personen sind betroffen?",[],110,"Blitzschlag",{type:"number",whenAll:[{questionId:"fw_blitz_personen",value:"Ja"}]}),
  fw_blitz_feuer: fw("fw_blitz_feuer","Gibt es Brand- oder Rauchentwicklung?",["Ja","Nein","Unklar"],120,"Blitzschlag"),
  fw_blitz_strom: fw("fw_blitz_strom","Besteht noch eine elektrische Gefahr / beschädigte Stromleitung?",["Ja","Nein","Unklar"],130,"Blitzschlag"),
  fw_blitz_gebaeude: fw("fw_blitz_gebaeude","Ist ein Gebäude, Fahrzeug oder technisches Objekt beschädigt?",["Ja","Nein","Unklar"],140,"Blitzschlag"),
  fw_blitz_weitere: fw("fw_blitz_weitere","Besteht eine weitere Gefahr für Personen oder Einsatzkräfte?",["Ja","Nein","Unklar"],150,"Blitzschlag"),

  fw_gewalt_aktiv: fw("fw_gewalt_aktiv","Ist die gewalttätige Person / der mögliche Täter noch vor Ort?",["Ja","Nein","Unklar"],200,"Gewalt"),
  fw_gewalt_waffe: fw("fw_gewalt_waffe","Ist eine Waffe oder ein gefährlicher Gegenstand im Spiel?",["Ja","Nein","Unklar"],210,"Gewalt"),
  fw_gewalt_verletzt: fw("fw_gewalt_verletzt","Sind Personen verletzt oder medizinisch betroffen?",["Ja","Nein","Unklar"],220,"Gewalt"),
  fw_gewalt_anzahl: fw("fw_gewalt_anzahl","Wie viele Personen sind betroffen/verletzt?",[],230,"Gewalt",{type:"number",whenAll:[{questionId:"fw_gewalt_verletzt",value:"Ja"}]}),
  fw_gewalt_eingeschlossen: fw("fw_gewalt_eingeschlossen","Sind Personen eingeschlossen, eingeklemmt oder nicht sicher erreichbar?",["Ja","Nein","Unklar"],240,"Gewalt"),
  fw_gewalt_gefahr: fw("fw_gewalt_gefahr","Besteht weiterhin eine unmittelbare Gefahr an der Einsatzstelle?",["Ja","Nein","Unklar"],250,"Gewalt"),
  fw_gewalt_brand: fw("fw_gewalt_brand","Gibt es Feuer, Rauch oder eine Explosionsgefahr?",["Ja","Nein","Unklar"],260,"Gewalt"),

  fw_natur_art: fw("fw_natur_art","Um welches Naturereignis handelt es sich?",["Sturm / Orkan","Starkregen / Überflutung","Hochwasser","Gewitter / Blitz","Hagel","Schnee / Eis","Erdrutsch / Erdbewegung","Sonstiges"],300,"Naturereignis"),
  fw_natur_personen: fw("fw_natur_personen","Sind Personen gefährdet, verletzt oder eingeschlossen?",["Ja","Nein","Unklar"],310,"Naturereignis"),
  fw_natur_anzahl: fw("fw_natur_anzahl","Wie viele Personen sind betroffen?",[],320,"Naturereignis",{type:"number",whenAll:[{questionId:"fw_natur_personen",value:"Ja"}]}),
  fw_natur_objekt: fw("fw_natur_objekt","Sind Gebäude, Fahrzeuge oder wichtige Infrastruktur beschädigt/gefährdet?",["Ja","Nein","Unklar"],330,"Naturereignis"),
  fw_natur_baum: fw("fw_natur_baum","Sind Bäume oder größere Gegenstände umgestürzt bzw. drohen zu fallen?",["Ja","Nein","Unklar"],340,"Naturereignis"),
  fw_natur_strom: fw("fw_natur_strom","Sind Stromleitungen, elektrische Anlagen oder andere Energiequellen betroffen?",["Ja","Nein","Unklar"],350,"Naturereignis"),
  fw_natur_zugang: fw("fw_natur_zugang","Ist die Einsatzstelle für Einsatzkräfte erreichbar?",["Ja","Nein","Unklar"],360,"Naturereignis"),

  fw_evaku_grund: fw("fw_evaku_grund","Warum soll geräumt/evakuiert werden?",["Brand / Rauch","Gefahrstoff / Gas","Bomben-/Explosionsgefahr","Gebäudeschaden / Einsturzgefahr","Unwetter / Naturereignis","Gewalt / Bedrohung","Sonstiger Grund"],400,"Räumung / Evakuierung"),
  fw_evaku_betroffene: fw("fw_evaku_betroffene","Wie viele Personen sind ungefähr betroffen?",[],410,"Räumung / Evakuierung",{type:"number"}),
  fw_evaku_beginn: fw("fw_evaku_beginn","Hat die Räumung/Evakuierung bereits begonnen?",["Ja","Nein","Unklar"],420,"Räumung / Evakuierung"),
  fw_evaku_gefahr: fw("fw_evaku_gefahr","Besteht aktuell eine unmittelbare Gefahr für Personen?",["Ja","Nein","Unklar"],430,"Räumung / Evakuierung"),
  fw_evaku_sonder: fw("fw_evaku_sonder","Sind Kinder, ältere, mobilitätseingeschränkte oder sonst hilfsbedürftige Personen betroffen?",["Ja","Nein","Unklar"],440,"Räumung / Evakuierung"),
  fw_evaku_zugang: fw("fw_evaku_zugang","Sind Zu- und Rettungswege für Einsatzkräfte frei?",["Ja","Nein","Unklar"],450,"Räumung / Evakuierung"),
  fw_evaku_sammel: fw("fw_evaku_sammel","Gibt es einen sicheren Sammel-/Bereitstellungsort?",["Ja","Nein","Unklar"],460,"Räumung / Evakuierung"),

  fw_terror_lage: fw("fw_terror_lage","Besteht weiterhin eine unmittelbare Gefahr am Einsatzort?",["Ja","Nein","Unklar"],500,"Terroranschlag ausgeführt"),
  fw_terror_verletzt: fw("fw_terror_verletzt","Sind Personen verletzt oder medizinisch betroffen?",["Ja","Nein","Unklar"],510,"Terroranschlag ausgeführt"),
  fw_terror_anzahl: fw("fw_terror_anzahl","Wie viele Personen sind ungefähr betroffen?",[],520,"Terroranschlag ausgeführt",{type:"number",whenAll:[{questionId:"fw_terror_verletzt",value:"Ja"}]}),
  fw_terror_waffe: fw("fw_terror_waffe","Sind Waffen, verdächtige Gegenstände oder weitere Täter bekannt?",["Ja","Nein","Unklar"],530,"Terroranschlag ausgeführt"),
  fw_terror_abc: fw("fw_terror_abc","Besteht der Verdacht auf Gefahrstoffe, biologische/chemische Stoffe oder radioaktive Gefahren?",["Ja","Nein","Unklar"],540,"Terroranschlag ausgeführt"),
  fw_terror_explosion: fw("fw_terror_explosion","Hat eine Explosion stattgefunden oder besteht Explosionsgefahr?",["Ja","Nein","Unklar"],550,"Terroranschlag ausgeführt"),
  fw_terror_evaku: fw("fw_terror_evaku","Müssen weitere Personen aus dem Gefahrenbereich gebracht werden?",["Ja","Nein","Unklar"],560,"Terroranschlag ausgeführt"),

  fw_drohung_akut: fw("fw_drohung_akut","Ist die Drohung aktuell bzw. besteht eine unmittelbare Gefahr?",["Ja","Nein","Unklar"],600,"Terroranschlag Drohung"),
  fw_drohung_ziel: fw("fw_drohung_ziel","Was ist das mögliche Ziel der Drohung?",["Gebäude / Einrichtung","Person / Personengruppe","Veranstaltung / Menschenmenge","Öffentlicher Ort / Verkehr","Unbekannt","Sonstiges"],610,"Terroranschlag Drohung"),
  fw_drohung_personen: fw("fw_drohung_personen","Sind Personen unmittelbar gefährdet?",["Ja","Nein","Unklar"],620,"Terroranschlag Drohung"),
  fw_drohung_objekt: fw("fw_drohung_objekt","Gibt es einen verdächtigen Gegenstand, eine verdächtige Person oder ein Fahrzeug?",["Ja","Nein","Unklar"],630,"Terroranschlag Drohung"),
  fw_drohung_eva: fw("fw_drohung_eva","Wurde bereits evakuiert oder soll der Bereich geräumt werden?",["Ja","Nein","Unklar"],640,"Terroranschlag Drohung"),
  fw_drohung_polizei: fw("fw_drohung_polizei","Ist die Polizei bereits vor Ort bzw. informiert?",["Ja","Nein","Unklar"],650,"Terroranschlag Drohung"),

  fw_vergiftung_stoff: fw("fw_vergiftung_stoff","Ist der Stoff bzw. die Substanz bekannt?",["Ja","Nein","Unklar"],700,"Vergiftung"),
  fw_vergiftung_name: fw("fw_vergiftung_name","Welche Substanz bzw. welches Produkt ist beteiligt?",[],710,"Vergiftung",{type:"text",whenAll:[{questionId:"fw_vergiftung_stoff",value:"Ja"}]}),
  fw_vergiftung_weg: fw("fw_vergiftung_weg","Wie erfolgte die mögliche Exposition?",["Verschluckt","Eingeatmet","Haut-/Augenkontakt","Injektion / Stich","Unbekannt","Mehrere Wege"],720,"Vergiftung"),
  fw_vergiftung_personen: fw("fw_vergiftung_personen","Wie viele Personen sind betroffen?",[],730,"Vergiftung",{type:"number"}),
  fw_vergiftung_symptome: fw("fw_vergiftung_symptome","Bestehen bereits Beschwerden oder Symptome?",["Ja","Nein","Unklar"],740,"Vergiftung"),
  fw_vergiftung_bewusst: fw("fw_vergiftung_bewusst","Ist eine betroffene Person bewusstlos oder nicht normal ansprechbar?",["Ja","Nein","Unklar"],750,"Vergiftung"),
  fw_vergiftung_atmung: fw("fw_vergiftung_atmung","Bestehen Atemprobleme oder keine normale Atmung?",["Ja","Nein","Unklar"],760,"Vergiftung"),
  fw_vergiftung_quelle: fw("fw_vergiftung_quelle","Ist die Gefahrenquelle noch vorhanden oder besteht weitere Expositionsgefahr?",["Ja","Nein","Unklar"],770,"Vergiftung"),
  fw_vergiftung_gas: fw("fw_vergiftung_gas","Besteht Gasgeruch oder der Verdacht auf ein Gas in der Umgebung?",["Ja","Nein","Unklar"],780,"Vergiftung"),

  fw_manv_anzahl: fw("fw_manv_anzahl","Wie viele Betroffene sind ungefähr vorhanden?",[],800,"Sonstiger MANV (FREITEXT)",{type:"number"}),
  fw_manv_art: fw("fw_manv_art","Was ist das auslösende Ereignis?",["Verkehrsunfall","Brand","Explosion","Gefahrstoff","Gewalt","Naturereignis","Einsturz","Veranstaltung / Menschenmenge","Sonstiges"],810,"Sonstiger MANV (FREITEXT)"),
  fw_manv_verletzt: fw("fw_manv_verletzt","Sind viele Personen verletzt bzw. erkrankt?",["Ja","Nein","Unklar"],820,"Sonstiger MANV (FREITEXT)"),
  fw_manv_gefahr: fw("fw_manv_gefahr","Bestehen besondere Gefahren für Betroffene oder Einsatzkräfte?",["Feuer / Rauch","Gefahrstoffe","Einsturz","Strom / Energie","Wasser","Gewalt","Keine bekannt / unklar"],830,"Sonstiger MANV (FREITEXT)"),
  fw_manv_ort: fw("fw_manv_ort","Wo befindet sich die Lage / was ist sonst wichtig?",[],840,"Sonstiger MANV (FREITEXT)",{type:"text",allowEmpty:true}),

  fw_wasser_personen: fw("fw_wasser_personen","Sind Personen betroffen?",["Ja","Nein","Unklar"],910,"Ertrinkungsunfall"),
  fw_wasser_sichtbar: fw("fw_wasser_sichtbar","Ist die Person im Wasser sichtbar?",["Ja","Nein","Unklar"],920,"Ertrinkungsunfall"),
  fw_wasser_rettung: fw("fw_wasser_rettung","Wurde die Person bereits gerettet?",["Ja","Nein","Unklar"],930,"Ertrinkungsunfall"),
  fw_wasser_bewusst: fw("fw_wasser_bewusst","Ist die Person wach und ansprechbar?",["Ja","Nein","Unklar"],940,"Ertrinkungsunfall"),
  fw_wasser_atmung: fw("fw_wasser_atmung","Atmet die Person normal?",["Ja","Nein","Unklar"],950,"Ertrinkungsunfall"),
  fw_wasser_ort: fw("fw_wasser_ort","Wo befindet sich die Person / das Objekt?",["Ufernah","Weiter vom Ufer entfernt","Unter Eis","Im/auf einem Wasserfahrzeug","Unklar"],960,"Ertrinkungsunfall"),
  fw_wasser_gefahr: fw("fw_wasser_gefahr","Besteht eine Gefahr für Helfer durch Strömung, Eis, Dunkelheit oder andere Umstände?",["Ja","Nein","Unklar"],970,"Ertrinkungsunfall"),

  fw_eis_person: fw("fw_eis_person","Ist eine Person ins Eis eingebrochen?",["Ja","Nein","Unklar"],1000,"Eisrettung"),
  fw_eis_sicht: fw("fw_eis_sicht","Ist die eingebrochene Person sichtbar bzw. erreichbar?",["Ja","Nein","Unklar"],1010,"Eisrettung"),
  fw_eis_anzahl: fw("fw_eis_anzahl","Wie viele Personen sind betroffen?",[],1020,"Eisrettung",{type:"number"}),
  fw_eis_ufer: fw("fw_eis_ufer","Wie weit befindet sich die Person ungefähr vom sicheren Ufer entfernt?",["Ufernah","Weiter entfernt","Unbekannt"],1030,"Eisrettung"),
  fw_eis_gefahr: fw("fw_eis_gefahr","Besteht weitere Gefahr für Einsatzkräfte / Helfer durch das Eis?",["Ja","Nein","Unklar"],1040,"Eisrettung"),
  fw_eis_bewusst: fw("fw_eis_bewusst","Ist die Person wach und ansprechbar?",["Ja","Nein","Unklar"],1050,"Eisrettung"),

  fw_tauch_tiefe: fw("fw_tauch_tiefe","Wie tief bzw. wie lange wurde ungefähr getaucht?",[],1100,"Tauchunfall",{type:"text"}),
  fw_tauch_person: fw("fw_tauch_person","Ist die betroffene Person noch unter Wasser?",["Ja","Nein","Unklar"],1110,"Tauchunfall"),
  fw_tauch_bewusst: fw("fw_tauch_bewusst","Ist die Person wach und ansprechbar?",["Ja","Nein","Unklar"],1120,"Tauchunfall"),
  fw_tauch_atmung: fw("fw_tauch_atmung","Atmet die Person normal?",["Ja","Nein","Unklar"],1130,"Tauchunfall"),
  fw_tauch_symptome: fw("fw_tauch_symptome","Bestehen neurologische Beschwerden, Atemnot, Brustschmerzen oder andere auffällige Symptome?",["Ja","Nein","Unklar"],1140,"Tauchunfall"),
  fw_tauch_druck: fw("fw_tauch_druck","Besteht ein möglicher Zusammenhang mit Dekompression / Druckveränderung?",["Ja","Nein","Unklar"],1150,"Tauchunfall"),
  fw_tauch_weitere: fw("fw_tauch_weitere","Besteht weitere Gefahr an der Tauchstelle?",["Ja","Nein","Unklar"],1160,"Tauchunfall"),

  fw_boot_person: fw("fw_boot_person","Sind Personen auf dem Wasserfahrzeug / Wassersportler in Gefahr?",["Ja","Nein","Unklar"],1200,"Wasserfahrzeug / -sportler in Not"),
  fw_boot_anzahl: fw("fw_boot_anzahl","Wie viele Personen sind ungefähr an Bord / betroffen?",[],1210,"Wasserfahrzeug / -sportler in Not",{type:"number"}),
  fw_boot_lage: fw("fw_boot_lage","Ist das Wasserfahrzeug manövrierfähig bzw. schwimmfähig?",["Ja","Nein","Unklar"],1220,"Wasserfahrzeug / -sportler in Not"),
  fw_boot_position: fw("fw_boot_position","Wo befindet sich das Fahrzeug ungefähr?",[],1230,"Wasserfahrzeug / -sportler in Not",{type:"text"}),
  fw_boot_see: fw("fw_boot_see","Besteht Gefahr durch Feuer, Leckage, Kenterung oder weitere Gefahren?",["Ja","Nein","Unklar"],1240,"Wasserfahrzeug / -sportler in Not"),

  fw_sach_objekt: fw("fw_sach_objekt","Was soll aus dem Wasser geborgen werden?",["Fahrzeug","Boot / Wasserfahrzeug","Gegenstand / Material","Sonstiges"],1300,"Sachbergung aus dem Wasser"),
  fw_sach_person: fw("fw_sach_person","Sind Personen unmittelbar betroffen oder gefährdet?",["Ja","Nein","Unklar"],1310,"Sachbergung aus dem Wasser"),
  fw_sach_lage: fw("fw_sach_lage","Wo befindet sich das Objekt?",[],1320,"Sachbergung aus dem Wasser",{type:"text"}),
  fw_sach_gefahr: fw("fw_sach_gefahr","Bestehen Gefahren für Einsatzkräfte, z. B. Strömung, Tiefe, Kraftstoff oder andere Stoffe?",["Ja","Nein","Unklar"],1330,"Sachbergung aus dem Wasser"),

  fw_tierwasser_art: fw("fw_tierwasser_art","Um welches Tier handelt es sich?",["Hund","Katze","Pferd / Großtier","Wildtier","Sonstiges"],1400,"Tierrettung aus dem Wasser"),
  fw_tierwasser_sicht: fw("fw_tierwasser_sicht","Ist das Tier sichtbar bzw. erreichbar?",["Ja","Nein","Unklar"],1410,"Tierrettung aus dem Wasser"),
  fw_tierwasser_lage: fw("fw_tierwasser_lage","Wo befindet sich das Tier?",["Ufernah","Weiter vom Ufer entfernt","Unter Eis","Wasserfahrzeug","Unklar"],1420,"Tierrettung aus dem Wasser"),
  fw_tierwasser_gefahr: fw("fw_tierwasser_gefahr","Besteht Gefahr für Einsatzkräfte durch Strömung, Eis, Tierverhalten oder andere Umstände?",["Ja","Nein","Unklar"],1430,"Tierrettung aus dem Wasser"),

  fw_vu_art: fw("fw_vu_art","Welche Art Verkehrsunfall liegt vor?",["PKW","LKW","Bus","Motorrad","Fahrrad","Fußgänger","Mehrere Fahrzeuge","Gefahrguttransport","Sonstiges"],1500,"Verkehrsunfall"),
  fw_vu_anzahl: fw("fw_vu_anzahl","Wie viele Fahrzeuge sind beteiligt?",[],1510,"Verkehrsunfall",{type:"number"}),
  fw_vu_personen: fw("fw_vu_personen","Sind Personen verletzt, eingeklemmt oder eingeschlossen?",["Ja","Nein","Unklar"],1520,"Verkehrsunfall"),
  fw_vu_klemm: fw("fw_vu_klemm","Sind Personen eingeklemmt/eingeschlossen?",["Ja","Nein","Unklar"],1530,"Verkehrsunfall"),
  fw_vu_anzahl_klemm: fw("fw_vu_anzahl_klemm","Wie viele Personen sind eingeklemmt/eingeschlossen?",[],1540,"Verkehrsunfall",{type:"number",whenAll:[{questionId:"fw_vu_klemm",value:"Ja"}]}),
  fw_vu_brand: fw("fw_vu_brand","Gibt es Brand- oder Rauchentwicklung?",["Ja","Nein","Unklar"],1550,"Verkehrsunfall"),
  fw_vu_betrieb: fw("fw_vu_betrieb","Sind Kraftstoff, Öl oder andere Betriebsstoffe ausgetreten?",["Ja","Nein","Unklar"],1560,"Verkehrsunfall"),
  fw_vu_hv: fw("fw_vu_hv","Ist ein Elektro-/Hybridfahrzeug bzw. eine Hochvoltanlage beteiligt?",["Ja","Nein","Unklar"],1570,"Verkehrsunfall"),
  fw_vu_verkehr: fw("fw_vu_verkehr","Ist die Fahrbahn blockiert oder besteht eine weitere Verkehrsgefahr?",["Ja","Nein","Unklar"],1580,"Verkehrsunfall"),
  fw_vu_gefahr: fw("fw_vu_gefahr","Besteht eine besondere Gefahr, z. B. Gefahrgut, Stromleitung oder Einsturzgefahr?",["Ja","Nein","Unklar"],1590,"Verkehrsunfall"),

  fw_thl_art: fw("fw_thl_art","Welche technische Hilfeleistung wird benötigt?",["Tür-/Wohnungsöffnung","Aufzug / Person eingeschlossen","Person in Maschine","Höhenrettung","Tiefenrettung","Arbeitsunfall","Lose Bauteile / Absturzgefahr","Technische Störung","Sonstige"],1650,"Technische Hilfeleistung"),
  fw_thl_person: fw("fw_thl_person","Sind Personen betroffen oder verletzt?",["Ja","Nein","Unklar"],1660,"Technische Hilfeleistung"),
  fw_thl_eingeschlossen: fw("fw_thl_eingeschlossen","Ist eine Person eingeschlossen/eingeklemmt und nicht aus eigener Kraft frei?",["Ja","Nein","Unklar"],1670,"Technische Hilfeleistung"),
  fw_thl_hoehe: fw("fw_thl_hoehe","Befindet sich die Person in Höhe oder Tiefe?",["Ja","Nein","Unklar"],1680,"Technische Hilfeleistung"),
  fw_thl_gefahr: fw("fw_thl_gefahr","Besteht eine zusätzliche Gefahr für Einsatzkräfte, z. B. Strom, Gas, Maschinen oder Einsturz?",["Ja","Nein","Unklar"],1690,"Technische Hilfeleistung"),
  fw_thl_zugang: fw("fw_thl_zugang","Ist die Einsatzstelle sicher zugänglich?",["Ja","Nein","Unklar"],1700,"Technische Hilfeleistung"),

  fw_abc_art: fw("fw_abc_art","Welche Art Gefahrstoff-/ABC-Lage liegt vor?",["Gas / Gasgeruch","Chemikalienaustritt","Unbekannter Stoff","Gefahrgutunfall","Biologische Gefahr","Radioaktive Gefahr","Sonstige"],1750,"Gefahrstoffaustritt / ABC"),
  fw_abc_stoff: fw("fw_abc_stoff","Ist der Stoff bekannt?",["Ja","Nein","Unklar"],1760,"Gefahrstoffaustritt / ABC"),
  fw_abc_austritt: fw("fw_abc_austritt","Ist der Stoff noch am Austreten?",["Ja","Nein","Unklar"],1780,"Gefahrstoffaustritt / ABC"),
  fw_abc_betroffen: fw("fw_abc_betroffen","Sind Personen betroffen oder exponiert?",["Ja","Nein","Unklar"],1790,"Gefahrstoffaustritt / ABC"),
  fw_abc_anzahl: fw("fw_abc_anzahl","Wie viele Personen sind betroffen?",[],1800,"Gefahrstoffaustritt / ABC",{type:"number",whenAll:[{questionId:"fw_abc_betroffen",value:"Ja"}]}),
  fw_abc_symptome: fw("fw_abc_symptome","Bestehen bereits Beschwerden nach der Exposition?",["Ja","Nein","Unklar"],1810,"Gefahrstoffaustritt / ABC"),
  fw_abc_ausbreitung: fw("fw_abc_ausbreitung","Besteht die Gefahr einer weiteren Ausbreitung?",["Ja","Nein","Unklar"],1820,"Gefahrstoffaustritt / ABC"),
  fw_abc_feuer: fw("fw_abc_feuer","Besteht Brand- oder Explosionsgefahr?",["Ja","Nein","Unklar"],1830,"Gefahrstoffaustritt / ABC"),
  fw_abc_wind: fw("fw_abc_wind","Ist die Windrichtung bzw. Ausbreitungsrichtung bekannt?",["Ja","Nein","Unklar"],1840,"Gefahrstoffaustritt / ABC"),

  fw_explo_art: fw("fw_explo_art","Was ist über die Explosion bekannt?",["Explosion erfolgt","Explosionsgefahr","Gasexplosion vermutet","Explosion in Gebäude","Explosion an Fahrzeug/Anlage","Unbekannt"],1900,"Explosion"),
  fw_explo_personen: fw("fw_explo_personen","Sind Personen verletzt, eingeschlossen oder vermisst?",["Ja","Nein","Unklar"],1910,"Explosion"),
  fw_explo_anzahl: fw("fw_explo_anzahl","Wie viele Personen sind ungefähr betroffen?",[],1920,"Explosion",{type:"number",whenAll:[{questionId:"fw_explo_personen",value:"Ja"}]}),
  fw_explo_brand: fw("fw_explo_brand","Gibt es Brand oder Rauchentwicklung?",["Ja","Nein","Unklar"],1930,"Explosion"),
  fw_explo_gefahrgut: fw("fw_explo_gefahrgut","Besteht Gefahr durch Gas, Gefahrstoffe oder Druckbehälter?",["Ja","Nein","Unklar"],1940,"Explosion"),
  fw_explo_einsturz: fw("fw_explo_einsturz","Besteht Einsturz-/Trümmergefahr?",["Ja","Nein","Unklar"],1950,"Explosion"),
  fw_explo_weitere: fw("fw_explo_weitere","Besteht weiterhin Explosionsgefahr?",["Ja","Nein","Unklar"],1960,"Explosion"),

  fw_einsturz_art: fw("fw_einsturz_art","Was ist beschädigt?",["Gebäude","Dach","Fassade","Brücke / Bauwerk","Bauteil","Sonstiges"],2000,"Einsturz / Gebäudeschaden"),
  fw_einsturz_akut: fw("fw_einsturz_akut","Besteht akute Einsturzgefahr?",["Ja","Nein","Unklar"],2010,"Einsturz / Gebäudeschaden"),
  fw_einsturz_person: fw("fw_einsturz_person","Sind Personen unter Trümmern vermutet, eingeschlossen oder gefährdet?",["Ja","Nein","Unklar"],2020,"Einsturz / Gebäudeschaden"),
  fw_einsturz_anzahl: fw("fw_einsturz_anzahl","Wie viele Personen könnten betroffen sein?",[],2030,"Einsturz / Gebäudeschaden",{type:"number",whenAll:[{questionId:"fw_einsturz_person",value:"Ja"}]}),
  fw_einsturz_gas: fw("fw_einsturz_gas","Besteht Gas-, Strom- oder sonstige Energiegefahr?",["Ja","Nein","Unklar"],2040,"Einsturz / Gebäudeschaden"),
  fw_einsturz_zugang: fw("fw_einsturz_zugang","Ist der Zugang für Rettungskräfte sicher möglich?",["Ja","Nein","Unklar"],2050,"Einsturz / Gebäudeschaden"),
  fw_einsturz_weitere: fw("fw_einsturz_weitere","Sind weitere Gebäudeteile oder Nachbargebäude gefährdet?",["Ja","Nein","Unklar"],2060,"Einsturz / Gebäudeschaden"),

  fw_notlage_art: fw("fw_notlage_art","Welche Notlage liegt vor?",["Person eingeschlossen","Person eingeklemmt","Person in Höhe","Person in Tiefe","Person in Maschine","Hilflose Person","Vermisste Person","Sonstige"],2100,"Person in Notlage"),
  fw_notlage_anzahl: fw("fw_notlage_anzahl","Wie viele Personen sind betroffen?",[],2110,"Person in Notlage",{type:"number"}),
  fw_notlage_bewusst: fw("fw_notlage_bewusst","Ist die Person wach und ansprechbar?",["Ja","Nein","Unklar"],2120,"Person in Notlage"),
  fw_notlage_atmung: fw("fw_notlage_atmung","Atmet die Person normal?",["Ja","Nein","Unklar"],2130,"Person in Notlage"),
  fw_notlage_hoehe: fw("fw_notlage_hoehe","Befindet sich die Person in Höhe oder Tiefe?",["Ja","Nein","Unklar"],2140,"Person in Notlage"),
  fw_notlage_zugang: fw("fw_notlage_zugang","Ist die Person für Rettungskräfte sicher erreichbar?",["Ja","Nein","Unklar"],2150,"Person in Notlage"),
  fw_notlage_gefahr: fw("fw_notlage_gefahr","Besteht eine weitere Gefahr an der Einsatzstelle?",["Ja","Nein","Unklar"],2160,"Person in Notlage"),

  fw_tier_art: fw("fw_tier_art","Um welches Tier handelt es sich?",["Hund","Katze","Pferd / Großtier","Nutztier","Wildtier","Sonstiges"],2200,"Tierrettung"),
  fw_tier_lage: fw("fw_tier_lage","Wo befindet sich das Tier?",["Gebäude","Fahrzeug","Höhe","Tiefe / Schacht","Eis / Wasser","Maschine / technische Anlage","Sonstiges"],2210,"Tierrettung"),
  fw_tier_erreichbar: fw("fw_tier_erreichbar","Ist das Tier erreichbar?",["Ja","Nein","Unklar"],2220,"Tierrettung"),
  fw_tier_gefahr: fw("fw_tier_gefahr","Besteht Gefahr für Einsatzkräfte durch das Tier oder die Umgebung?",["Ja","Nein","Unklar"],2230,"Tierrettung"),
  fw_tier_person: fw("fw_tier_person","Sind Menschen zusätzlich gefährdet oder verletzt?",["Ja","Nein","Unklar"],2240,"Tierrettung"),

  fw_oel_art: fw("fw_oel_art","Welche Flüssigkeit / welcher Stoff ist ausgetreten?",["Kraftstoff","Motoröl","Hydrauliköl","Unbekannte Flüssigkeit","Chemikalie","Sonstiges"],2300,"Öl-/Kraftstoffaustritt / Umweltschaden"),
  fw_oel_menge: fw("fw_oel_menge","Wie groß ist die betroffene Menge bzw. Fläche ungefähr?",[],2310,"Öl-/Kraftstoffaustritt / Umweltschaden",{type:"text"}),
  fw_oel_quelle: fw("fw_oel_quelle","Ist die Austrittsquelle noch aktiv?",["Ja","Nein","Unklar"],2320,"Öl-/Kraftstoffaustritt / Umweltschaden"),
  fw_oel_gewasser: fw("fw_oel_gewasser","Ist ein Gewässer, Kanal oder Erdreich betroffen?",["Ja","Nein","Unklar"],2330,"Öl-/Kraftstoffaustritt / Umweltschaden"),
  fw_oel_person: fw("fw_oel_person","Sind Personen betroffen oder besteht eine Expositionsgefahr?",["Ja","Nein","Unklar"],2340,"Öl-/Kraftstoffaustritt / Umweltschaden"),
  fw_oel_brand: fw("fw_oel_brand","Besteht Brand- oder Explosionsgefahr?",["Ja","Nein","Unklar"],2350,"Öl-/Kraftstoffaustritt / Umweltschaden"),

  fw_sonst_text: fw("fw_sonst_text","Was ist passiert? Bitte die Lage möglichst genau beschreiben.",[],2400,"Sonstige Feuerwehrlage (FREITEXT)",{type:"text"}),
  fw_sonst_person: fw("fw_sonst_person","Sind Personen verletzt, gefährdet oder eingeschlossen?",["Ja","Nein","Unklar"],2410,"Sonstige Feuerwehrlage (FREITEXT)"),
  fw_sonst_gefahr: fw("fw_sonst_gefahr","Besteht eine besondere Gefahr für Personen oder Einsatzkräfte?",["Ja","Nein","Unklar"],2420,"Sonstige Feuerwehrlage (FREITEXT)"),
  fw_sonst_zugang: fw("fw_sonst_zugang","Ist die Einsatzstelle sicher erreichbar?",["Ja","Nein","Unklar"],2430,"Sonstige Feuerwehrlage (FREITEXT)")
});
