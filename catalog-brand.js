export const catalog={
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
