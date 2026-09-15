export const catalog={
  "abc_art": {
    "id": "abc_art",
    "text": "Welche ABC-/Gefahrgutlage liegt vor?",
    "type": "choice",
    "order": 10,
    "options": [
      "Gefahrstoffaustritt / Leckage",
      "Unbekannter Stoff / verdächtiger Stoff",
      "Gefahrgutunfall",
      "Geruch / Dämpfe / Gas",
      "Kontamination / unbekannte Substanz",
      "Sonstige ABC-Lage"
    ]
  },
  "stoff": {
    "id": "stoff",
    "text": "Welcher Stoff ist bekannt oder wird vermutet?",
    "type": "text",
    "order": 20,
    "placeholder": "Stoffbezeichnung oder unbekannt …"
  },
  "austritt": {
    "id": "austritt",
    "text": "Tritt der Stoff aktuell aus oder besteht eine Leckage?",
    "type": "choice",
    "order": 30,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "menge": {
    "id": "menge",
    "text": "Kann die Menge bzw. Ausdehnung des Stoffes ungefähr eingeschätzt werden?",
    "type": "text",
    "order": 40,
    "placeholder": "z. B. kleine Pfütze, mehrere Liter, unbekannt …",
    "allowEmpty": true
  },
  "betroffen": {
    "id": "betroffen",
    "text": "Sind Personen betroffen oder kontaminiert?",
    "type": "choice",
    "order": 50,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "anzahl": {
    "id": "anzahl",
    "text": "Wie viele Personen sind ungefähr betroffen?",
    "type": "number",
    "order": 60,
    "whenQuestion": "betroffen",
    "whenValue": "Ja"
  },
  "symptome": {
    "id": "symptome",
    "text": "Welche Beschwerden/Symptome bestehen bei betroffenen Personen?",
    "type": "text",
    "order": 70,
    "whenQuestion": "betroffen",
    "whenValue": "Ja",
    "placeholder": "Kurz beschreiben …",
    "allowEmpty": true
  },
  "kontaktweg": {
    "id": "kontaktweg",
    "text": "Wie kam es zum Kontakt?",
    "type": "choice",
    "order": 80,
    "options": [
      "Einatmen",
      "Hautkontakt",
      "Augenkontakt",
      "Verschlucken",
      "Mehrere Wege",
      "Unklar"
    ],
    "whenQuestion": "betroffen",
    "whenValue": "Ja"
  },
  "kennzeichnung": {
    "id": "kennzeichnung",
    "text": "Ist eine Kennzeichnung/UN-Nummer/Gefahrzettel erkennbar?",
    "type": "text",
    "order": 90,
    "placeholder": "Wenn bekannt, hier eintragen …",
    "allowEmpty": true
  },
  "geruch": {
    "id": "geruch",
    "text": "Ist ein auffälliger Geruch oder sichtbarer Dampf vorhanden?",
    "type": "choice",
    "order": 100,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "wind": {
    "id": "wind",
    "text": "Ist die Windrichtung bekannt bzw. relevant?",
    "type": "text",
    "order": 110,
    "placeholder": "Falls bekannt …",
    "allowEmpty": true
  },
  "ausbreitung": {
    "id": "ausbreitung",
    "text": "Breitet sich der Stoff weiter aus oder gelangt er in Kanalisation/Gewässer?",
    "type": "choice",
    "order": 120,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "feuer_explosion": {
    "id": "feuer_explosion",
    "text": "Besteht zusätzlich Brand-, Explosions- oder Reaktionsgefahr?",
    "type": "choice",
    "order": 130,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "strom": {
    "id": "strom",
    "text": "Sind elektrische Anlagen/Leitungen im Gefahrenbereich?",
    "type": "choice",
    "order": 140,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "evakuierung": {
    "id": "evakuierung",
    "text": "Sind weitere Personen im Gefahrenbereich und müssen sie sich entfernen?",
    "type": "choice",
    "order": 150,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "deko": {
    "id": "deko",
    "text": "Ist eine Dekontamination erforderlich oder bereits begonnen?",
    "type": "choice",
    "order": 160,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "fahrzeug": {
    "id": "fahrzeug",
    "text": "Ist ein Fahrzeug/Transportbehälter beteiligt?",
    "type": "choice",
    "order": 170,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "behaelter": {
    "id": "behaelter",
    "text": "Ist ein Behälter beschädigt, erwärmt oder unter Druck?",
    "type": "choice",
    "order": 180,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "zugang": {
    "id": "zugang",
    "text": "Gibt es Besonderheiten beim Zugang zur Einsatzstelle?",
    "type": "text",
    "order": 190,
    "placeholder": "Absperrung, Zufahrt, Gebäude …",
    "allowEmpty": true
  },
  "abc_extra_1": {
    "id": "abc_extra_1",
    "text": "Sind Gullys/Abflüsse in der Nähe betroffen?",
    "type": "choice",
    "order": 300,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra_2": {
    "id": "abc_extra_2",
    "text": "Sind Gewässer in der Nähe gefährdet?",
    "type": "choice",
    "order": 310,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra_3": {
    "id": "abc_extra_3",
    "text": "Sind geschlossene Räume mit möglicher Stoffkonzentration betroffen?",
    "type": "choice",
    "order": 320,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra_4": {
    "id": "abc_extra_4",
    "text": "Ist der Stoff in einem Gebäude freigesetzt worden?",
    "type": "choice",
    "order": 330,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra_5": {
    "id": "abc_extra_5",
    "text": "Sind mehrere Bereiche/Etagen betroffen?",
    "type": "choice",
    "order": 340,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra_6": {
    "id": "abc_extra_6",
    "text": "Ist eine Geruchsbelästigung ohne sichtbaren Austritt vorhanden?",
    "type": "choice",
    "order": 350,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra_7": {
    "id": "abc_extra_7",
    "text": "Gibt es eine bekannte Stoffinformation aus Sicherheitsdatenblatt/Transportpapier?",
    "type": "choice",
    "order": 360,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra_8": {
    "id": "abc_extra_8",
    "text": "Ist die Stoffidentifikation unsicher oder widersprüchlich?",
    "type": "choice",
    "order": 370,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra_9": {
    "id": "abc_extra_9",
    "text": "Besteht Gefahr für Einsatzkräfte durch unbekannte Atmosphäre?",
    "type": "choice",
    "order": 380,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra_10": {
    "id": "abc_extra_10",
    "text": "Ist die Einsatzstelle bereits abgesperrt?",
    "type": "choice",
    "order": 390,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_1": {
    "id": "abc_extra2_1",
    "text": "Sind Kennzeichnungen aus sicherer Entfernung ablesbar?",
    "type": "choice",
    "order": 450,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_2": {
    "id": "abc_extra2_2",
    "text": "Ist eine Rauch-/Dampfentwicklung sichtbar?",
    "type": "choice",
    "order": 460,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_3": {
    "id": "abc_extra2_3",
    "text": "Gibt es Hinweise auf eine exotherme Reaktion/Erwärmung?",
    "type": "choice",
    "order": 470,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_4": {
    "id": "abc_extra2_4",
    "text": "Ist ein Transportfahrzeug beteiligt?",
    "type": "choice",
    "order": 480,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_5": {
    "id": "abc_extra2_5",
    "text": "Ist ein Gefahrgutbehälter umgestürzt oder beschädigt?",
    "type": "choice",
    "order": 490,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_6": {
    "id": "abc_extra2_6",
    "text": "Sind Personen außerhalb des unmittelbaren Bereichs betroffen?",
    "type": "choice",
    "order": 500,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_7": {
    "id": "abc_extra2_7",
    "text": "Muss ein Gebäude geräumt werden?",
    "type": "choice",
    "order": 510,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_8": {
    "id": "abc_extra2_8",
    "text": "Ist die Lageentwicklung zunehmend?",
    "type": "choice",
    "order": 520,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_9": {
    "id": "abc_extra2_9",
    "text": "Besteht Gefahr durch Windverfrachtung?",
    "type": "choice",
    "order": 530,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_10": {
    "id": "abc_extra2_10",
    "text": "Sind Kanalisation oder Oberflächengewässer gefährdet?",
    "type": "choice",
    "order": 540,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_11": {
    "id": "abc_extra2_11",
    "text": "Sind Schutz-/Absperrmaßnahmen bereits eingeleitet?",
    "type": "choice",
    "order": 550,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_12": {
    "id": "abc_extra2_12",
    "text": "Ist eine Dekontaminationsstelle erforderlich?",
    "type": "choice",
    "order": 560,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_13": {
    "id": "abc_extra2_13",
    "text": "Sind mehrere Stoffe beteiligt?",
    "type": "choice",
    "order": 570,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_14": {
    "id": "abc_extra2_14",
    "text": "Ist die Stoffidentifikation aus sicherer Entfernung möglich?",
    "type": "choice",
    "order": 580,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  },
  "abc_extra2_15": {
    "id": "abc_extra2_15",
    "text": "Sind weitere Einsatzstellen/Objekte betroffen?",
    "type": "choice",
    "order": 590,
    "options": [
      "Ja",
      "Nein",
      "Unklar"
    ]
  }
};
