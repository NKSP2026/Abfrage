export const catalog={
  "thl_art": {
    "id": "thl_art",
    "text": "Welche technische Einsatzlage liegt vor?",
    "type": "choice",
    "order": 10,
    "options": [
      "Verkehrsunfall",
      "Wasser / Eis / Ertrinkungsunfall",
      "Sturm / Unwetter",
      "Einsturz / Gebäudeschaden",
      "Person in Notlage / eingeschlossen",
      "Sonstige technische Hilfeleistung"
    ]
  },
  "lage": {
    "id": "lage",
    "text": "Was ist genau passiert?",
    "type": "text",
    "order": 20,
    "placeholder": "Lage kurz beschreiben …"
  },
  "vu_anzahl": {
    "id": "vu_anzahl",
    "text": "Wie viele Fahrzeuge sind beteiligt?",
    "type": "number",
    "order": 100,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall"
  },
  "beteiligte": {
    "id": "beteiligte",
    "text": "Sind Personen verletzt oder betroffen?",
    "type": "choice",
    "order": 110,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "verletzte_anzahl": {
    "id": "verletzte_anzahl",
    "text": "Wie viele verletzte/betroffene Personen gibt es ungefähr?",
    "type": "number",
    "order": 120,
    "whenQuestion": "beteiligte",
    "whenValue": "Ja"
  },
  "eingeklemmt": {
    "id": "eingeklemmt",
    "text": "Sind Personen eingeklemmt oder eingeschlossen?",
    "type": "choice",
    "order": 130,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "klemm_anzahl": {
    "id": "klemm_anzahl",
    "text": "Wie viele Personen sind eingeklemmt?",
    "type": "number",
    "order": 140,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "whenAll": [
      {
        "questionId": "eingeklemmt",
        "value": "Ja"
      }
    ]
  },
  "vu_ejektion": {
    "id": "vu_ejektion",
    "text": "Ist eine Person aus einem Fahrzeug herausgeschleudert worden?",
    "type": "choice",
    "order": 150,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "vu_helm": {
    "id": "vu_helm",
    "text": "Hat eine betroffene Zweiradperson den Helm verloren?",
    "type": "choice",
    "order": 160,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar / nicht zutreffend"
    ]
  },
  "vu_fussgaenger": {
    "id": "vu_fussgaenger",
    "text": "Wurde ein Fußgänger/Radfahrer/Motorradfahrer angefahren oder überrollt?",
    "type": "choice",
    "order": 170,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "vu_abseits": {
    "id": "vu_abseits",
    "text": "Ist ein Fahrzeug von der Fahrbahn abgekommen?",
    "type": "choice",
    "order": 180,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "vu_windschutz": {
    "id": "vu_windschutz",
    "text": "Ist dabei die Windschutzscheibe beschädigt worden?",
    "type": "choice",
    "order": 190,
    "whenQuestion": "vu_abseits",
    "whenValue": "Ja",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "vu_airbag": {
    "id": "vu_airbag",
    "text": "Sind Airbags ausgelöst?",
    "type": "choice",
    "order": 200,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "vu_dach": {
    "id": "vu_dach",
    "text": "Ist ein Fahrzeug auf dem Dach gelandet?",
    "type": "choice",
    "order": 210,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "vu_brand": {
    "id": "vu_brand",
    "text": "Besteht Brand-/Rauchentwicklung?",
    "type": "choice",
    "order": 220,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "vu_betriebsstoffe": {
    "id": "vu_betriebsstoffe",
    "text": "Sind Betriebsstoffe ausgetreten?",
    "type": "choice",
    "order": 230,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "vu_hv": {
    "id": "vu_hv",
    "text": "Ist eine elektrische Hochvoltanlage betroffen?",
    "type": "choice",
    "order": 240,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar / nicht erkennbar"
    ]
  },
  "vu_verkehr": {
    "id": "vu_verkehr",
    "text": "Ist die Fahrbahn blockiert oder besteht eine weitere Verkehrsgefahr?",
    "type": "choice",
    "order": 250,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "vu_unter": {
    "id": "vu_unter",
    "text": "Ist eine Person unter/zwischen Fahrzeugteilen eingeklemmt?",
    "type": "choice",
    "order": 260,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "vu_rettung": {
    "id": "vu_rettung",
    "text": "Ist eine technische Rettung über Seitenteil, Dach oder Heck erforderlich?",
    "type": "choice",
    "order": 270,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "vu_mehrere": {
    "id": "vu_mehrere",
    "text": "Sind mehrere Verletzte an unterschiedlichen Fahrzeugen verteilt?",
    "type": "choice",
    "order": 280,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "vu_sondergefahr": {
    "id": "vu_sondergefahr",
    "text": "Gibt es besondere Gefahren am Unfallort, z. B. Stromleitung, Gefahrgut oder Einsturzgefahr?",
    "type": "choice",
    "order": 290,
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall",
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "wasser_1": {
    "id": "wasser_1",
    "text": "Ist eine Person aktuell im Wasser/unter Wasser oder auf Eis eingebrochen?",
    "type": "choice",
    "order": 350,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Wasser / Eis / Ertrinkungsunfall"
  },
  "wasser_2": {
    "id": "wasser_2",
    "text": "Wurde die Person bereits gerettet?",
    "type": "choice",
    "order": 360,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Wasser / Eis / Ertrinkungsunfall"
  },
  "wasser_3": {
    "id": "wasser_3",
    "text": "Ist die Person wach und ansprechbar?",
    "type": "choice",
    "order": 370,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Wasser / Eis / Ertrinkungsunfall"
  },
  "wasser_4": {
    "id": "wasser_4",
    "text": "Atmet die Person normal?",
    "type": "choice",
    "order": 380,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Wasser / Eis / Ertrinkungsunfall"
  },
  "wasser_5": {
    "id": "wasser_5",
    "text": "Ist die Person unterkühlt oder stark durchnässt?",
    "type": "choice",
    "order": 390,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Wasser / Eis / Ertrinkungsunfall"
  },
  "wasser_6": {
    "id": "wasser_6",
    "text": "Wo befindet sich die Person ungefähr?",
    "type": "choice",
    "order": 400,
    "options": [
      "Ufernah",
      "Weiter vom Ufer entfernt",
      "Unter Eis",
      "Boot/Fahrzeug",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Wasser / Eis / Ertrinkungsunfall"
  },
  "wasser_7": {
    "id": "wasser_7",
    "text": "Besteht weitere Gefahr für Helfer?",
    "type": "choice",
    "order": 410,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Wasser / Eis / Ertrinkungsunfall"
  },
  "sturm_1": {
    "id": "sturm_1",
    "text": "Sind Personen gefährdet oder verletzt?",
    "type": "choice",
    "order": 450,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Sturm / Unwetter"
  },
  "sturm_2": {
    "id": "sturm_2",
    "text": "Sind Straßen blockiert oder Bäume auf Verkehrsflächen gefallen?",
    "type": "choice",
    "order": 460,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Sturm / Unwetter"
  },
  "sturm_3": {
    "id": "sturm_3",
    "text": "Sind Dächer/Gebäudeteile beschädigt?",
    "type": "choice",
    "order": 470,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Sturm / Unwetter"
  },
  "sturm_4": {
    "id": "sturm_4",
    "text": "Besteht Gefahr durch Stromleitungen?",
    "type": "choice",
    "order": 480,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Sturm / Unwetter"
  },
  "sturm_5": {
    "id": "sturm_5",
    "text": "Sind Keller oder Gebäude überflutet?",
    "type": "choice",
    "order": 490,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Sturm / Unwetter"
  },
  "sturm_6": {
    "id": "sturm_6",
    "text": "Sind weitere Objekte betroffen?",
    "type": "choice",
    "order": 500,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Sturm / Unwetter"
  },
  "einsturz_1": {
    "id": "einsturz_1",
    "text": "Sind Personen eingeschlossen oder verschüttet?",
    "type": "choice",
    "order": 550,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Einsturz / Gebäudeschaden"
  },
  "einsturz_2": {
    "id": "einsturz_2",
    "text": "Besteht Einsturz-/Nachsturzgefahr?",
    "type": "choice",
    "order": 560,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Einsturz / Gebäudeschaden"
  },
  "einsturz_3": {
    "id": "einsturz_3",
    "text": "Ist ein Gebäudeteil bereits eingestürzt?",
    "type": "choice",
    "order": 570,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Einsturz / Gebäudeschaden"
  },
  "einsturz_4": {
    "id": "einsturz_4",
    "text": "Wie viele Personen könnten betroffen sein?",
    "type": "choice",
    "order": 580,
    "options": [
      "Eine",
      "Mehrere",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Einsturz / Gebäudeschaden"
  },
  "einsturz_5": {
    "id": "einsturz_5",
    "text": "Sind Versorgungsleitungen betroffen?",
    "type": "choice",
    "order": 590,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Einsturz / Gebäudeschaden"
  },
  "notlage_1": {
    "id": "notlage_1",
    "text": "Warum kann die Person die Situation nicht selbst verlassen?",
    "type": "text",
    "order": 650,
    "placeholder": "Situation kurz beschreiben …",
    "whenQuestion": "thl_art",
    "whenValue": "Person in Notlage / eingeschlossen"
  },
  "notlage_2": {
    "id": "notlage_2",
    "text": "Ist die Person wach und ansprechbar?",
    "type": "choice",
    "order": 660,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Person in Notlage / eingeschlossen"
  },
  "notlage_3": {
    "id": "notlage_3",
    "text": "Ist die Person verletzt?",
    "type": "choice",
    "order": 670,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Person in Notlage / eingeschlossen"
  },
  "notlage_4": {
    "id": "notlage_4",
    "text": "Besteht akute Gefahr durch Höhe, Absturz, Strom, Feuer oder Wasser?",
    "type": "choice",
    "order": 680,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Person in Notlage / eingeschlossen"
  },
  "notlage_5": {
    "id": "notlage_5",
    "text": "Ist die Person eingeschlossen/verschlossen?",
    "type": "choice",
    "order": 690,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Person in Notlage / eingeschlossen"
  },
  "notlage_6": {
    "id": "notlage_6",
    "text": "Ist ein besonderer Zugang erforderlich?",
    "type": "choice",
    "order": 700,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Person in Notlage / eingeschlossen"
  },
  "thl_extra_1": {
    "id": "thl_extra_1",
    "text": "Besteht Gefahr für weitere Personen?",
    "type": "choice",
    "order": 750,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "thl_extra_2": {
    "id": "thl_extra_2",
    "text": "Besteht Gefahr für Einsatzkräfte?",
    "type": "choice",
    "order": 760,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "thl_extra_3": {
    "id": "thl_extra_3",
    "text": "Sind weitere Rettungsmittel bereits vor Ort?",
    "type": "choice",
    "order": 770,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "thl_extra_4": {
    "id": "thl_extra_4",
    "text": "Ist die Einsatzstelle schwer zugänglich?",
    "type": "choice",
    "order": 780,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "thl_extra_5": {
    "id": "thl_extra_5",
    "text": "Gibt es eine besondere örtliche Gefahrenlage?",
    "type": "choice",
    "order": 790,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "thl_extra2_1": {
    "id": "thl_extra2_1",
    "text": "Ist die Unfallstelle auf Autobahn, Bundesstraße oder innerorts?",
    "type": "choice",
    "order": 850,
    "options": [
      "Autobahn",
      "Bundesstraße/Landstraße",
      "Innerorts",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall"
  },
  "thl_extra2_2": {
    "id": "thl_extra2_2",
    "text": "Sind Personen aus eigener Kraft aus dem Fahrzeug gelangt?",
    "type": "choice",
    "order": 860,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall"
  },
  "thl_extra2_3": {
    "id": "thl_extra2_3",
    "text": "Ist ein Fahrzeug stark deformiert?",
    "type": "choice",
    "order": 870,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall"
  },
  "thl_extra2_4": {
    "id": "thl_extra2_4",
    "text": "Sind Türen/Öffnungen blockiert?",
    "type": "choice",
    "order": 880,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall"
  },
  "thl_extra2_5": {
    "id": "thl_extra2_5",
    "text": "Besteht Gefahr durch Airbag-/Gurtstraffer-Systeme?",
    "type": "choice",
    "order": 890,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall"
  },
  "thl_extra2_6": {
    "id": "thl_extra2_6",
    "text": "Ist eine Batterie/Antriebsart unklar oder möglicherweise elektrisch?",
    "type": "choice",
    "order": 900,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall"
  },
  "thl_extra2_7": {
    "id": "thl_extra2_7",
    "text": "Ist die Einsatzstelle durch Verkehr weiter gefährdet?",
    "type": "choice",
    "order": 910,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall"
  },
  "thl_extra2_8": {
    "id": "thl_extra2_8",
    "text": "Sind Kinder oder hilfsbedürftige Personen unter den Betroffenen?",
    "type": "choice",
    "order": 920,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall"
  },
  "thl_extra2_9": {
    "id": "thl_extra2_9",
    "text": "Besteht Gefahr durch Kraftstoffaustritt?",
    "type": "choice",
    "order": 930,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall"
  },
  "thl_extra2_10": {
    "id": "thl_extra2_10",
    "text": "Sind mehrere Unfallstellen/Trümmerbereiche vorhanden?",
    "type": "choice",
    "order": 940,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Verkehrsunfall"
  },
  "thl_extra2_11": {
    "id": "thl_extra2_11",
    "text": "Ist die Person im Wasser sichtbar?",
    "type": "choice",
    "order": 950,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Wasser / Eis / Ertrinkungsunfall"
  },
  "thl_extra2_12": {
    "id": "thl_extra2_12",
    "text": "Ist eine Rettung aus größerer Entfernung erforderlich?",
    "type": "choice",
    "order": 960,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Wasser / Eis / Ertrinkungsunfall"
  },
  "thl_extra2_13": {
    "id": "thl_extra2_13",
    "text": "Besteht Gefahr durch Strömung oder Eisbewegung?",
    "type": "choice",
    "order": 970,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Wasser / Eis / Ertrinkungsunfall"
  },
  "thl_extra2_14": {
    "id": "thl_extra2_14",
    "text": "Sind weitere Personen ins Wasser eingebracht/gefährdet?",
    "type": "choice",
    "order": 980,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Wasser / Eis / Ertrinkungsunfall"
  },
  "thl_extra2_15": {
    "id": "thl_extra2_15",
    "text": "Sind Gebäude oder Dächer akut einsturzgefährdet?",
    "type": "choice",
    "order": 990,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Einsturz / Gebäudeschaden"
  },
  "thl_extra2_16": {
    "id": "thl_extra2_16",
    "text": "Sind Personen unter Trümmern vermutet?",
    "type": "choice",
    "order": 1000,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Einsturz / Gebäudeschaden"
  },
  "thl_extra2_17": {
    "id": "thl_extra2_17",
    "text": "Besteht Gas-/Stromgefahr am beschädigten Gebäude?",
    "type": "choice",
    "order": 1010,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Einsturz / Gebäudeschaden"
  },
  "thl_extra2_18": {
    "id": "thl_extra2_18",
    "text": "Ist der Zugang für Rettungskräfte sicher möglich?",
    "type": "choice",
    "order": 1020,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Person in Notlage / eingeschlossen"
  },
  "thl_extra2_19": {
    "id": "thl_extra2_19",
    "text": "Befindet sich die Person in Höhe/Tiefe?",
    "type": "choice",
    "order": 1030,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ],
    "whenQuestion": "thl_art",
    "whenValue": "Person in Notlage / eingeschlossen"
  },
  "thl_extra2_20": {
    "id": "thl_extra2_20",
    "text": "Ist technisches Spezialgerät erforderlich?",
    "type": "choice",
    "order": 1040,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  }
};
