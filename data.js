export const defaults={
  "catalog": {
    "medizin": {
      "med_wem": {
        "id": "med_wem",
        "text": "Geht es um Sie oder um jemand anderen?",
        "type": "choice",
        "order": 10,
        "options": [
          "Fremdanrufer (Erwachsen)",
          "Ist selbst der einzige Patient",
          "Fremdanrufer (Kind)"
        ]
      },
      "med_personen": {
        "id": "med_personen",
        "text": "Wie viele Personen sind betroffen?",
        "type": "choice",
        "order": 20,
        "options": [
          "1",
          "2–9",
          "Mehr als 9 / MANV"
        ]
      },
      "med_spricht": {
        "id": "med_spricht",
        "text": "Kann der Patient sprechen?",
        "type": "choice",
        "order": 30,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ]
      },
      "med_demografie": {
        "id": "med_demografie",
        "text": "Wie alt ist der Patient, welches Geburtsdatum und welches Geschlecht liegen vor?",
        "type": "demographics",
        "order": 40,
        "fields": {
          "ageLabel": "Alter in Jahren",
          "birthdateLabel": "Geburtsdatum",
          "genderLabel": "Geschlecht",
          "genderOptions": [
            "Männlich",
            "Weiblich",
            "Divers",
            "Unbekannt"
          ]
        }
      },
      "med_grund": {
        "id": "med_grund",
        "text": "Sagen Sie mir bitte den genauen Grund Ihres Anrufes!",
        "type": "choice",
        "order": 50,
        "options": [
          "Allergie / Anaphylaxie",
          "Atemstörung",
          "Bauchschmerzen",
          "Bewusstseinsstörung / Wesensveränderung",
          "Blutungen",
          "Brustschmerzen",
          "Erkrankung / medizinische Hilfeleistung",
          "Geburt / Schwangerschaft",
          "Gefühlsstörung / Lähmung / Sprache / Sehstörung",
          "Herzrhythmusstörungen",
          "Hitze- / Kälteprobleme",
          "Kollaps / Kreislaufstörung",
          "Kopfschmerzen",
          "Krampfanfall",
          "Psychische Erkrankung / Suizid",
          "Sonstige Schmerzen",
          "Unklares Geschehen",
          "Vergiftung",
          "Verletzung",
          "Arbeits- / Betriebs- / Schulunfall"
        ]
      },
      "allergie_01": {
        "id": "allergie_01",
        "text": "Bestehen aktuell Atemprobleme oder eine zunehmende Atemnot?",
        "type": "choice",
        "order": 9001,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_02": {
        "id": "allergie_02",
        "text": "Ist die Person wach und ansprechbar?",
        "type": "choice",
        "order": 9002,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_03": {
        "id": "allergie_03",
        "text": "Sind Schwellungen an Lippen, Zunge, Mund oder Hals vorhanden?",
        "type": "choice",
        "order": 9003,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_04": {
        "id": "allergie_04",
        "text": "Bestehen Kreislaufprobleme, starke Schwäche oder Kollapsneigung?",
        "type": "choice",
        "order": 9004,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_05": {
        "id": "allergie_05",
        "text": "Gab es kurz vor Beginn einen möglichen Auslöser?",
        "type": "choice",
        "order": 9005,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_06": {
        "id": "allergie_06",
        "text": "Begannen die Beschwerden plötzlich?",
        "type": "choice",
        "order": 9006,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_07": {
        "id": "allergie_07",
        "text": "Bestehen Hautveränderungen wie Quaddeln, Rötung oder Juckreiz?",
        "type": "choice",
        "order": 9007,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_08": {
        "id": "allergie_08",
        "text": "Bestehen Übelkeit, Erbrechen oder Bauchbeschwerden?",
        "type": "choice",
        "order": 9008,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_09": {
        "id": "allergie_09",
        "text": "Hat die Person bereits ein Notfallmedikament angewendet?",
        "type": "choice",
        "order": 9009,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_10": {
        "id": "allergie_10",
        "text": "Ist die Stimme verändert oder das Schlucken erschwert?",
        "type": "choice",
        "order": 9010,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_11": {
        "id": "allergie_11",
        "text": "Wird die Atmung beim Sprechen oder Liegen schlechter?",
        "type": "choice",
        "order": 9011,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_12": {
        "id": "allergie_12",
        "text": "Gab es schon einmal eine ähnliche Reaktion?",
        "type": "choice",
        "order": 9012,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_13": {
        "id": "allergie_13",
        "text": "Ist eine bekannte Allergie vorhanden?",
        "type": "choice",
        "order": 9013,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_14": {
        "id": "allergie_14",
        "text": "War der Auslöser ein Lebensmittel?",
        "type": "choice",
        "order": 9014,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_15": {
        "id": "allergie_15",
        "text": "War der Auslöser ein Medikament?",
        "type": "choice",
        "order": 9015,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_16": {
        "id": "allergie_16",
        "text": "War der Auslöser ein Insektenstich/-biss?",
        "type": "choice",
        "order": 9016,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_17": {
        "id": "allergie_17",
        "text": "War der Auslöser ein Kontaktstoff oder eine Chemikalie?",
        "type": "choice",
        "order": 9017,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_18": {
        "id": "allergie_18",
        "text": "Bestehen zusätzlich Brustbeschwerden?",
        "type": "choice",
        "order": 9018,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_19": {
        "id": "allergie_19",
        "text": "Besteht Schwindel oder eine deutliche Benommenheit?",
        "type": "choice",
        "order": 9019,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_20": {
        "id": "allergie_20",
        "text": "Ist die Haut auffällig blass, grau oder blau?",
        "type": "choice",
        "order": 9020,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_21": {
        "id": "allergie_21",
        "text": "Bestehen Kribbeln oder Taubheitsgefühle?",
        "type": "choice",
        "order": 9021,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_22": {
        "id": "allergie_22",
        "text": "Ist die Person allein?",
        "type": "choice",
        "order": 9022,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_23": {
        "id": "allergie_23",
        "text": "Kann der Auslöser weiterhin einwirken?",
        "type": "choice",
        "order": 9023,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_24": {
        "id": "allergie_24",
        "text": "Wird die Reaktion trotz Maßnahmen stärker?",
        "type": "choice",
        "order": 9024,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_25": {
        "id": "allergie_25",
        "text": "Gibt es weitere betroffene Personen mit ähnlichen Beschwerden?",
        "type": "choice",
        "order": 9025,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "allergie_26": {
        "id": "allergie_26",
        "text": "Was ist über den Verlauf seit Beginn bekannt?",
        "type": "choice",
        "order": 9026,
        "options": [
          "plötzlich",
          "zunehmend",
          "gleichbleibend",
          "rückläufig",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "atem_01": {
        "id": "atem_01",
        "text": "Besteht aktuell Atemnot oder eine deutlich erschwerte Atmung?",
        "type": "choice",
        "order": 9041,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_02": {
        "id": "atem_02",
        "text": "Ist die Person wach und ansprechbar?",
        "type": "choice",
        "order": 9042,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_03": {
        "id": "atem_03",
        "text": "Kann die Person ganze Sätze sprechen?",
        "type": "choice",
        "order": 9043,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_04": {
        "id": "atem_04",
        "text": "Ist die Atmung sehr schnell, sehr langsam oder auffällig?",
        "type": "choice",
        "order": 9044,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_05": {
        "id": "atem_05",
        "text": "Sind Lippen/Gesicht blau oder grau verfärbt?",
        "type": "choice",
        "order": 9045,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_06": {
        "id": "atem_06",
        "text": "Bestehen pfeifende Atemgeräusche?",
        "type": "choice",
        "order": 9046,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_07": {
        "id": "atem_07",
        "text": "Bestehen ungewöhnliche Geräusche bei der Einatmung?",
        "type": "choice",
        "order": 9047,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_08": {
        "id": "atem_08",
        "text": "Besteht der Verdacht auf Fremdkörper/Aspiration?",
        "type": "choice",
        "order": 9048,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_09": {
        "id": "atem_09",
        "text": "Ist die Atemnot plötzlich aufgetreten?",
        "type": "choice",
        "order": 9049,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_10": {
        "id": "atem_10",
        "text": "Besteht eine bekannte Asthma- oder COPD-Erkrankung?",
        "type": "choice",
        "order": 9050,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_11": {
        "id": "atem_11",
        "text": "Besteht eine bekannte Herz- oder Lungenerkrankung?",
        "type": "choice",
        "order": 9051,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_12": {
        "id": "atem_12",
        "text": "Gab es einen Unfall oder eine Verletzung im Zusammenhang mit der Atemnot?",
        "type": "choice",
        "order": 9052,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_13": {
        "id": "atem_13",
        "text": "Bestehen Brustschmerzen gleichzeitig?",
        "type": "choice",
        "order": 9053,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_14": {
        "id": "atem_14",
        "text": "Bestehen Husten oder auffälliger Auswurf?",
        "type": "choice",
        "order": 9054,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_15": {
        "id": "atem_15",
        "text": "Besteht Fieber oder ein Infektverdacht?",
        "type": "choice",
        "order": 9055,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_16": {
        "id": "atem_16",
        "text": "Wird die Atmung im Liegen schlechter?",
        "type": "choice",
        "order": 9056,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_17": {
        "id": "atem_17",
        "text": "Besteht eine bekannte Allergie oder mögliche allergische Reaktion?",
        "type": "choice",
        "order": 9057,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_18": {
        "id": "atem_18",
        "text": "Hat die Person ein Inhalations-/Notfallmedikament angewendet?",
        "type": "choice",
        "order": 9058,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_19": {
        "id": "atem_19",
        "text": "Hat sich die Atemnot trotz Maßnahmen verschlechtert?",
        "type": "choice",
        "order": 9059,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_20": {
        "id": "atem_20",
        "text": "Bestehen Schwellungen im Mund-/Rachenbereich?",
        "type": "choice",
        "order": 9060,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_21": {
        "id": "atem_21",
        "text": "Ist die Person sehr erschöpft oder kann kaum noch sprechen?",
        "type": "choice",
        "order": 9061,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_22": {
        "id": "atem_22",
        "text": "Gab es Rauch-/Gas-/Chemikalienkontakt?",
        "type": "choice",
        "order": 9062,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_23": {
        "id": "atem_23",
        "text": "Ist die Atemnot nach einem Verschlucken begonnen?",
        "type": "choice",
        "order": 9063,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_24": {
        "id": "atem_24",
        "text": "Besteht eine Schwangerschaft oder kürzliche Geburt?",
        "type": "choice",
        "order": 9064,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_25": {
        "id": "atem_25",
        "text": "Ist eine Beatmung oder ein Atemhilfsmittel vorhanden?",
        "type": "choice",
        "order": 9065,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "atem_26": {
        "id": "atem_26",
        "text": "Wie hat sich die Atemnot seit Beginn entwickelt?",
        "type": "choice",
        "order": 9066,
        "options": [
          "plötzlich",
          "zunehmend",
          "gleichbleibend",
          "rückläufig",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "bauch_01": {
        "id": "bauch_01",
        "text": "Sind die Bauchschmerzen aktuell stark oder sehr stark?",
        "type": "choice",
        "order": 9081,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_02": {
        "id": "bauch_02",
        "text": "Begannen die Bauchschmerzen plötzlich?",
        "type": "choice",
        "order": 9082,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_03": {
        "id": "bauch_03",
        "text": "Besteht ein harter oder deutlich gespannter Bauch?",
        "type": "choice",
        "order": 9083,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_04": {
        "id": "bauch_04",
        "text": "Bestehen Übelkeit oder Erbrechen?",
        "type": "choice",
        "order": 9084,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_05": {
        "id": "bauch_05",
        "text": "Ist Blut im Erbrochenen sichtbar?",
        "type": "choice",
        "order": 9085,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_06": {
        "id": "bauch_06",
        "text": "Ist Blut oder schwarzer Stuhl aufgefallen?",
        "type": "choice",
        "order": 9086,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_07": {
        "id": "bauch_07",
        "text": "Besteht Fieber oder Schüttelfrost?",
        "type": "choice",
        "order": 9087,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_08": {
        "id": "bauch_08",
        "text": "Besteht eine deutliche Kreislaufverschlechterung?",
        "type": "choice",
        "order": 9088,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_09": {
        "id": "bauch_09",
        "text": "Kann die Person normal trinken?",
        "type": "choice",
        "order": 9089,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_10": {
        "id": "bauch_10",
        "text": "Kann Stuhl abgesetzt werden?",
        "type": "choice",
        "order": 9090,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_11": {
        "id": "bauch_11",
        "text": "Können Winde abgehen?",
        "type": "choice",
        "order": 9091,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_12": {
        "id": "bauch_12",
        "text": "Ist der Bauch deutlich gebläht?",
        "type": "choice",
        "order": 9092,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_13": {
        "id": "bauch_13",
        "text": "Gab es eine Bauchoperation in der Vorgeschichte?",
        "type": "choice",
        "order": 9093,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_14": {
        "id": "bauch_14",
        "text": "Besteht ein bekannter Leisten-/Narbenbruch?",
        "type": "choice",
        "order": 9094,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_15": {
        "id": "bauch_15",
        "text": "Besteht eine bekannte chronische Darmerkrankung?",
        "type": "choice",
        "order": 9095,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_16": {
        "id": "bauch_16",
        "text": "Besteht eine Schwangerschaftsmöglichkeit?",
        "type": "choice",
        "order": 9096,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_17": {
        "id": "bauch_17",
        "text": "Sind die Beschwerden nach einer ungewöhnlich großen Mahlzeit aufgetreten?",
        "type": "choice",
        "order": 9097,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_18": {
        "id": "bauch_18",
        "text": "Wurde eine sehr große Menge Obst wie Orangen/Mandarinen gegessen und besteht danach starke Verstopfung?",
        "type": "choice",
        "order": 9098,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_19": {
        "id": "bauch_19",
        "text": "Besteht der Verdacht auf Darmverschluss (Ileus) anhand von Schmerzen, Aufblähung, Erbrechen und fehlendem Stuhl/Wind?",
        "type": "choice",
        "order": 9099,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_20": {
        "id": "bauch_20",
        "text": "Sind die Schmerzen kolikartig/wellenförmig?",
        "type": "choice",
        "order": 9100,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_21": {
        "id": "bauch_21",
        "text": "Strahlen die Schmerzen in Rücken oder Schulter aus?",
        "type": "choice",
        "order": 9101,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_22": {
        "id": "bauch_22",
        "text": "Bestehen Probleme beim Wasserlassen?",
        "type": "choice",
        "order": 9102,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_23": {
        "id": "bauch_23",
        "text": "Bestehen gynäkologische Beschwerden oder vaginale Blutungen?",
        "type": "choice",
        "order": 9103,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_24": {
        "id": "bauch_24",
        "text": "Ist der Schmerz bei Bewegung oder Erschütterung deutlich stärker?",
        "type": "choice",
        "order": 9104,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_25": {
        "id": "bauch_25",
        "text": "Gab es einen Bauchunfall oder Schlag auf den Bauch?",
        "type": "choice",
        "order": 9105,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bauch_26": {
        "id": "bauch_26",
        "text": "Wie hat sich der Schmerz seit Beginn entwickelt?",
        "type": "choice",
        "order": 9106,
        "options": [
          "plötzlich",
          "zunehmend",
          "gleichbleibend",
          "rückläufig",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bewusstsein_01": {
        "id": "bewusstsein_01",
        "text": "Ist die Person aktuell ansprechbar?",
        "type": "choice",
        "order": 9121,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_02": {
        "id": "bewusstsein_02",
        "text": "Reagiert die Person auf Ansprache?",
        "type": "choice",
        "order": 9122,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_03": {
        "id": "bewusstsein_03",
        "text": "Reagiert die Person auf Berührung?",
        "type": "choice",
        "order": 9123,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_04": {
        "id": "bewusstsein_04",
        "text": "Ist eine plötzliche Wesensveränderung aufgefallen?",
        "type": "choice",
        "order": 9124,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_05": {
        "id": "bewusstsein_05",
        "text": "Ist die Person zeitlich/örtlich nicht orientiert?",
        "type": "choice",
        "order": 9125,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_06": {
        "id": "bewusstsein_06",
        "text": "Bestehen Sprach- oder Verständigungsprobleme?",
        "type": "choice",
        "order": 9126,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_07": {
        "id": "bewusstsein_07",
        "text": "Bestehen neue Lähmungen oder Gefühlsstörungen?",
        "type": "choice",
        "order": 9127,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_08": {
        "id": "bewusstsein_08",
        "text": "Bestehen neue Sehstörungen?",
        "type": "choice",
        "order": 9128,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_09": {
        "id": "bewusstsein_09",
        "text": "Besteht eine ungewöhnliche Schläfrigkeit?",
        "type": "choice",
        "order": 9129,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_10": {
        "id": "bewusstsein_10",
        "text": "Gab es einen Sturz oder Kopfstoß?",
        "type": "choice",
        "order": 9130,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_11": {
        "id": "bewusstsein_11",
        "text": "Bestehen Krämpfe oder Zuckungen?",
        "type": "choice",
        "order": 9131,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_12": {
        "id": "bewusstsein_12",
        "text": "Bestehen Atemprobleme?",
        "type": "choice",
        "order": 9132,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_13": {
        "id": "bewusstsein_13",
        "text": "Bestehen Brustschmerzen?",
        "type": "choice",
        "order": 9133,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_14": {
        "id": "bewusstsein_14",
        "text": "Bestehen starke Kopfschmerzen?",
        "type": "choice",
        "order": 9134,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_15": {
        "id": "bewusstsein_15",
        "text": "Besteht Fieber?",
        "type": "choice",
        "order": 9135,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_16": {
        "id": "bewusstsein_16",
        "text": "Besteht der Verdacht auf Alkohol-/Drogen-/Medikamenteneinfluss?",
        "type": "choice",
        "order": 9136,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_17": {
        "id": "bewusstsein_17",
        "text": "Besteht der Verdacht auf Vergiftung?",
        "type": "choice",
        "order": 9137,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_18": {
        "id": "bewusstsein_18",
        "text": "Ist Diabetes bekannt?",
        "type": "choice",
        "order": 9138,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_19": {
        "id": "bewusstsein_19",
        "text": "Wurde ein auffälliger Blutzucker gemessen?",
        "type": "choice",
        "order": 9139,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_20": {
        "id": "bewusstsein_20",
        "text": "Gab es eine kürzliche Infektion oder Erkrankung?",
        "type": "choice",
        "order": 9140,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_21": {
        "id": "bewusstsein_21",
        "text": "Besteht Nackensteifigkeit?",
        "type": "choice",
        "order": 9141,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_22": {
        "id": "bewusstsein_22",
        "text": "Gab es eine neue schwere psychische Belastung?",
        "type": "choice",
        "order": 9142,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_23": {
        "id": "bewusstsein_23",
        "text": "Besteht eine Eigen- oder Fremdgefährdung?",
        "type": "choice",
        "order": 9143,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_24": {
        "id": "bewusstsein_24",
        "text": "Ist die Veränderung plötzlich aufgetreten?",
        "type": "choice",
        "order": 9144,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_25": {
        "id": "bewusstsein_25",
        "text": "Ist die Person seit dem Ereignis wieder vollständig normal?",
        "type": "choice",
        "order": 9145,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "bewusstsein_26": {
        "id": "bewusstsein_26",
        "text": "Wie entwickelt sich die Bewusstseinsstörung?",
        "type": "choice",
        "order": 9146,
        "options": [
          "besser",
          "gleich",
          "schlechter",
          "wechselnd",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "blutung_01": {
        "id": "blutung_01",
        "text": "Ist die Person durch ein Ereignis/Trauma verletzt worden?",
        "type": "choice",
        "order": 1410,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_02": {
        "id": "blutung_02",
        "text": "Wo befindet sich die Blutung?",
        "type": "choice",
        "order": 1420,
        "options": [
          "Obere GI (Magen-Darm) Blutung",
          "Untere GI (Magen-Darm) Blutung",
          "Bluterbrechen",
          "Anal (After) Blutung",
          "Gynäkologisch",
          "Urogenital (Harntrakt) Blutung",
          "HNO Blutung",
          "Beinvarizen-Blutung",
          "Sonstige Blutung (Shunt, Katheter, o.ä.)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_03": {
        "id": "blutung_03",
        "text": "Ist die Blutung aktuell stark oder nicht kontrollierbar?",
        "type": "choice",
        "order": 15003,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_04": {
        "id": "blutung_04",
        "text": "Bestehen Kreislaufprobleme, Schwäche oder Kollapsneigung?",
        "type": "choice",
        "order": 15004,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_05": {
        "id": "blutung_05",
        "text": "Ist die Person blass, kalt-schweißig oder ungewöhnlich schläfrig?",
        "type": "choice",
        "order": 15005,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_06": {
        "id": "blutung_06",
        "text": "Besteht Schwindel oder Beinahe-Bewusstlosigkeit?",
        "type": "choice",
        "order": 15006,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_07": {
        "id": "blutung_07",
        "text": "Nimmt die Person Blutverdünner/Antikoagulanzien?",
        "type": "choice",
        "order": 15007,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_08": {
        "id": "blutung_08",
        "text": "Ist eine Gerinnungsstörung bekannt?",
        "type": "choice",
        "order": 15008,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_09": {
        "id": "blutung_09",
        "text": "Hat die Blutung plötzlich begonnen?",
        "type": "choice",
        "order": 15009,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_10": {
        "id": "blutung_10",
        "text": "Ist die Blutungsquelle sichtbar und erreichbar?",
        "type": "choice",
        "order": 15010,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_11": {
        "id": "blutung_11",
        "text": "Konnte die Blutung bisher gestoppt werden?",
        "type": "choice",
        "order": 15011,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_12": {
        "id": "blutung_12",
        "text": "Hat die Blutungsmenge zugenommen?",
        "type": "choice",
        "order": 15012,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_13": {
        "id": "blutung_13",
        "text": "Bestehen zusätzlich starke Schmerzen?",
        "type": "choice",
        "order": 15013,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_14": {
        "id": "blutung_14",
        "text": "Bestehen Atemprobleme?",
        "type": "choice",
        "order": 15014,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_15": {
        "id": "blutung_15",
        "text": "Ist Blut in Erbrochenem oder Speichel?",
        "type": "choice",
        "order": 15015,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_16": {
        "id": "blutung_16",
        "text": "Ist der Stuhl schwarz/teerartig oder blutig?",
        "type": "choice",
        "order": 15016,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_17": {
        "id": "blutung_17",
        "text": "Bestehen starke Bauchschmerzen?",
        "type": "choice",
        "order": 15017,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_18": {
        "id": "blutung_18",
        "text": "Besteht eine Schwangerschaft oder kürzliche Geburt?",
        "type": "choice",
        "order": 15018,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_19": {
        "id": "blutung_19",
        "text": "Bestehen starke vaginale Blutungen?",
        "type": "choice",
        "order": 15019,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_20": {
        "id": "blutung_20",
        "text": "Besteht eine Harnblutung?",
        "type": "choice",
        "order": 15020,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_21": {
        "id": "blutung_21",
        "text": "Besteht eine starke Nasen-/Rachenblutung?",
        "type": "choice",
        "order": 15021,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_22": {
        "id": "blutung_22",
        "text": "Besteht eine Blutung aus einer Varize/Beinvarize?",
        "type": "choice",
        "order": 15022,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_23": {
        "id": "blutung_23",
        "text": "Besteht eine Blutung aus Shunt, Katheter oder Zugang?",
        "type": "choice",
        "order": 15023,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_24": {
        "id": "blutung_24",
        "text": "Ist eine Druckmaßnahme bereits durchgeführt worden?",
        "type": "choice",
        "order": 15024,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_25": {
        "id": "blutung_25",
        "text": "Ist die Person während der Blutung kollabiert oder bewusstlos geworden?",
        "type": "choice",
        "order": 15025,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "blutung_26": {
        "id": "blutung_26",
        "text": "Wie entwickelt sich die Blutung?",
        "type": "choice",
        "order": 15026,
        "options": [
          "zunehmend",
          "gleichbleibend",
          "rückläufig",
          "gestoppt",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Blutungen"
      },
      "brust_01": {
        "id": "brust_01",
        "text": "Bestehen aktuell Brustschmerzen oder Druckgefühl?",
        "type": "choice",
        "order": 9161,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_02": {
        "id": "brust_02",
        "text": "Begannen die Beschwerden plötzlich?",
        "type": "choice",
        "order": 9162,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_03": {
        "id": "brust_03",
        "text": "Strahlen die Beschwerden in Arm, Schulter, Rücken, Hals oder Kiefer aus?",
        "type": "choice",
        "order": 9163,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_04": {
        "id": "brust_04",
        "text": "Bestehen gleichzeitig Atemnot, kalter Schweiß oder Übelkeit?",
        "type": "choice",
        "order": 9164,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_05": {
        "id": "brust_05",
        "text": "Ist die Person blass oder kreislaufinstabil?",
        "type": "choice",
        "order": 9165,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_06": {
        "id": "brust_06",
        "text": "Bestehen Herzrhythmusstörungen oder Herzrasen?",
        "type": "choice",
        "order": 9166,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_07": {
        "id": "brust_07",
        "text": "Ist eine koronare Herzerkrankung bekannt?",
        "type": "choice",
        "order": 9167,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_08": {
        "id": "brust_08",
        "text": "Ist eine Herzinsuffizienz bekannt?",
        "type": "choice",
        "order": 9168,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_09": {
        "id": "brust_09",
        "text": "Besteht Bluthochdruck?",
        "type": "choice",
        "order": 9169,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_10": {
        "id": "brust_10",
        "text": "Ist Diabetes bekannt?",
        "type": "choice",
        "order": 9170,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_11": {
        "id": "brust_11",
        "text": "Raucht die Person oder hat sie früher stark geraucht?",
        "type": "choice",
        "order": 9171,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_12": {
        "id": "brust_12",
        "text": "Gab es eine körperliche Belastung vor Beginn?",
        "type": "choice",
        "order": 9172,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_13": {
        "id": "brust_13",
        "text": "Besteht ein Zusammenhang mit Atmung oder Husten?",
        "type": "choice",
        "order": 9173,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_14": {
        "id": "brust_14",
        "text": "Gab es einen Brustkorb-Unfall?",
        "type": "choice",
        "order": 9174,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_15": {
        "id": "brust_15",
        "text": "Ist der Schmerz stechend, reißend oder ungewöhnlich?",
        "type": "choice",
        "order": 9175,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_16": {
        "id": "brust_16",
        "text": "Besteht eine Ohnmacht oder Beinahe-Ohnmacht?",
        "type": "choice",
        "order": 9176,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_17": {
        "id": "brust_17",
        "text": "Besteht neurologische Auffälligkeit gleichzeitig?",
        "type": "choice",
        "order": 9177,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_18": {
        "id": "brust_18",
        "text": "Besteht Fieber oder Infektzeichen?",
        "type": "choice",
        "order": 9178,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_19": {
        "id": "brust_19",
        "text": "Wurde bereits ein Notfallmedikament genommen?",
        "type": "choice",
        "order": 9179,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_20": {
        "id": "brust_20",
        "text": "Hat sich der Schmerz seit Beginn verändert?",
        "type": "choice",
        "order": 9180,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_21": {
        "id": "brust_21",
        "text": "Besteht aktuell eine starke Verschlechterung?",
        "type": "choice",
        "order": 9181,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_22": {
        "id": "brust_22",
        "text": "Besteht eine bekannte Gefäßerkrankung?",
        "type": "choice",
        "order": 9182,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_23": {
        "id": "brust_23",
        "text": "Besteht eine Schwangerschaft oder kürzliche Geburt?",
        "type": "choice",
        "order": 9183,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_24": {
        "id": "brust_24",
        "text": "Bestehen Schluckbeschwerden oder Schmerzen hinter dem Brustbein?",
        "type": "choice",
        "order": 9184,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_25": {
        "id": "brust_25",
        "text": "Bestehen Rücken-/Oberbauchschmerzen gleichzeitig?",
        "type": "choice",
        "order": 9185,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "brust_26": {
        "id": "brust_26",
        "text": "Wie ist der aktuelle Verlauf?",
        "type": "choice",
        "order": 9186,
        "options": [
          "zunehmend",
          "gleichbleibend",
          "rückläufig",
          "wellenförmig",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "erkrankung_01": {
        "id": "erkrankung_01",
        "text": "Ist die Person aktuell deutlich beeinträchtigt oder krank wirkend?",
        "type": "choice",
        "order": 9201,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_02": {
        "id": "erkrankung_02",
        "text": "Ist die Person wach und ansprechbar?",
        "type": "choice",
        "order": 9202,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_03": {
        "id": "erkrankung_03",
        "text": "Bestehen Atemprobleme?",
        "type": "choice",
        "order": 9203,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_04": {
        "id": "erkrankung_04",
        "text": "Bestehen Brustschmerzen?",
        "type": "choice",
        "order": 9204,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_05": {
        "id": "erkrankung_05",
        "text": "Bestehen Bauchschmerzen?",
        "type": "choice",
        "order": 9205,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_06": {
        "id": "erkrankung_06",
        "text": "Bestehen starke Schmerzen?",
        "type": "choice",
        "order": 9206,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_07": {
        "id": "erkrankung_07",
        "text": "Bestehen Fieber oder Schüttelfrost?",
        "type": "choice",
        "order": 9207,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_08": {
        "id": "erkrankung_08",
        "text": "Bestehen Erbrechen oder Durchfall?",
        "type": "choice",
        "order": 9208,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_09": {
        "id": "erkrankung_09",
        "text": "Besteht eine deutliche Kreislaufverschlechterung?",
        "type": "choice",
        "order": 9209,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_10": {
        "id": "erkrankung_10",
        "text": "Besteht eine neue neurologische Auffälligkeit?",
        "type": "choice",
        "order": 9210,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_11": {
        "id": "erkrankung_11",
        "text": "Besteht eine bekannte relevante Vorerkrankung?",
        "type": "choice",
        "order": 9211,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_12": {
        "id": "erkrankung_12",
        "text": "Wurden Medikamente neu begonnen oder verändert?",
        "type": "choice",
        "order": 9212,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_13": {
        "id": "erkrankung_13",
        "text": "Wurde ein auffälliger Blutdruck gemessen?",
        "type": "choice",
        "order": 9213,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_14": {
        "id": "erkrankung_14",
        "text": "Wurde ein auffälliger Blutzucker gemessen?",
        "type": "choice",
        "order": 9214,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_15": {
        "id": "erkrankung_15",
        "text": "Bestehen Probleme beim Wasserlassen?",
        "type": "choice",
        "order": 9215,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_16": {
        "id": "erkrankung_16",
        "text": "Bestehen Probleme beim Gehen oder Stehen?",
        "type": "choice",
        "order": 9216,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_17": {
        "id": "erkrankung_17",
        "text": "Besteht eine mögliche Infektion?",
        "type": "choice",
        "order": 9217,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_18": {
        "id": "erkrankung_18",
        "text": "Besteht eine mögliche Vergiftung/Überdosierung?",
        "type": "choice",
        "order": 9218,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_19": {
        "id": "erkrankung_19",
        "text": "Gab es einen Sturz oder Unfall?",
        "type": "choice",
        "order": 9219,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_20": {
        "id": "erkrankung_20",
        "text": "Besteht eine allergische Reaktion?",
        "type": "choice",
        "order": 9220,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_21": {
        "id": "erkrankung_21",
        "text": "Besteht eine Schwangerschaft oder kürzliche Geburt?",
        "type": "choice",
        "order": 9221,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_22": {
        "id": "erkrankung_22",
        "text": "Besteht eine deutliche Verschlechterung während des Telefonats?",
        "type": "choice",
        "order": 9222,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_23": {
        "id": "erkrankung_23",
        "text": "Sind mehrere Personen ähnlich erkrankt?",
        "type": "choice",
        "order": 9223,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_24": {
        "id": "erkrankung_24",
        "text": "Ist der Beginn plötzlich gewesen?",
        "type": "choice",
        "order": 9224,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_25": {
        "id": "erkrankung_25",
        "text": "Ist die Ursache weiterhin unklar?",
        "type": "choice",
        "order": 9225,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_26": {
        "id": "erkrankung_26",
        "text": "Wie entwickelt sich der Zustand?",
        "type": "choice",
        "order": 9226,
        "options": [
          "besser",
          "gleich",
          "schlechter",
          "wechselnd",
          "unbekannt"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "geburt_01": {
        "id": "geburt_01",
        "text": "Besteht eine Schwangerschaft?",
        "type": "choice",
        "order": 9241,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_02": {
        "id": "geburt_02",
        "text": "Bestehen aktuell Wehen?",
        "type": "choice",
        "order": 9242,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_03": {
        "id": "geburt_03",
        "text": "Sind die Wehen regelmäßig?",
        "type": "choice",
        "order": 9243,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_04": {
        "id": "geburt_04",
        "text": "Ist Fruchtwasser abgegangen?",
        "type": "choice",
        "order": 9244,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_05": {
        "id": "geburt_05",
        "text": "Besteht eine vaginale Blutung?",
        "type": "choice",
        "order": 9245,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_06": {
        "id": "geburt_06",
        "text": "Bestehen starke oder zunehmende Schmerzen?",
        "type": "choice",
        "order": 9246,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_07": {
        "id": "geburt_07",
        "text": "Ist das Kind bereits sichtbar oder kommt es zur Geburt?",
        "type": "choice",
        "order": 9247,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_08": {
        "id": "geburt_08",
        "text": "Besteht ein starker Pressdrang?",
        "type": "choice",
        "order": 9248,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_09": {
        "id": "geburt_09",
        "text": "Ist die Schwangerschaft bekannt als Risikoschwangerschaft?",
        "type": "choice",
        "order": 9249,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_10": {
        "id": "geburt_10",
        "text": "Ist eine Mehrlingsschwangerschaft bekannt?",
        "type": "choice",
        "order": 9250,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_11": {
        "id": "geburt_11",
        "text": "Besteht eine Beckenendlage oder Querlage nach bisheriger Information?",
        "type": "choice",
        "order": 9251,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_12": {
        "id": "geburt_12",
        "text": "Ist die Nabelschnur sichtbar/vorgefallen?",
        "type": "choice",
        "order": 9252,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_13": {
        "id": "geburt_13",
        "text": "Hat sich die Fruchtlage ungewöhnlich verändert?",
        "type": "choice",
        "order": 9253,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_14": {
        "id": "geburt_14",
        "text": "Bestehen Kreislaufprobleme oder Bewusstseinsstörungen?",
        "type": "choice",
        "order": 9254,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_15": {
        "id": "geburt_15",
        "text": "Bestehen Atemprobleme bei der Schwangeren?",
        "type": "choice",
        "order": 9255,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_16": {
        "id": "geburt_16",
        "text": "Bestehen starke Kopfschmerzen/Sehstörungen?",
        "type": "choice",
        "order": 9256,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_17": {
        "id": "geburt_17",
        "text": "Bestehen Krampfanfälle?",
        "type": "choice",
        "order": 9257,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_18": {
        "id": "geburt_18",
        "text": "Ist eine kürzliche Geburt erfolgt?",
        "type": "choice",
        "order": 9258,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_19": {
        "id": "geburt_19",
        "text": "Besteht eine starke Blutung nach Geburt?",
        "type": "choice",
        "order": 9259,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_20": {
        "id": "geburt_20",
        "text": "Ist das Neugeborene bereits geboren?",
        "type": "choice",
        "order": 9260,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_21": {
        "id": "geburt_21",
        "text": "Atmet das Neugeborene normal?",
        "type": "choice",
        "order": 9261,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_22": {
        "id": "geburt_22",
        "text": "Reagiert das Neugeborene?",
        "type": "choice",
        "order": 9262,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_23": {
        "id": "geburt_23",
        "text": "Besteht eine bekannte Plazenta-/Geburtskomplikation?",
        "type": "choice",
        "order": 9263,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_24": {
        "id": "geburt_24",
        "text": "Ist die Entfernung zur nächsten geeigneten Klinik bekannt?",
        "type": "choice",
        "order": 9264,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_25": {
        "id": "geburt_25",
        "text": "Ist eine Hebamme/ärztliche Betreuung vor Ort?",
        "type": "choice",
        "order": 9265,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "geburt_26": {
        "id": "geburt_26",
        "text": "Wie entwickelt sich die Situation?",
        "type": "choice",
        "order": 9266,
        "options": [
          "zunehmend",
          "gleichbleibend",
          "Geburt unmittelbar",
          "rückläufig",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "neuro_01": {
        "id": "neuro_01",
        "text": "Bestehen neue Lähmungen oder Kraftverluste?",
        "type": "choice",
        "order": 9281,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_02": {
        "id": "neuro_02",
        "text": "Hängt ein Mundwinkel herab?",
        "type": "choice",
        "order": 9282,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_03": {
        "id": "neuro_03",
        "text": "Kann die Person beide Arme gleich gut heben?",
        "type": "choice",
        "order": 9283,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_04": {
        "id": "neuro_04",
        "text": "Kann die Person verständlich sprechen?",
        "type": "choice",
        "order": 9284,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_05": {
        "id": "neuro_05",
        "text": "Bestehen neue Sehstörungen oder Doppelbilder?",
        "type": "choice",
        "order": 9285,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_06": {
        "id": "neuro_06",
        "text": "Besteht eine neue deutliche Gang-/Gleichgewichtsstörung?",
        "type": "choice",
        "order": 9286,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_07": {
        "id": "neuro_07",
        "text": "Bestehen neue Taubheitsgefühle?",
        "type": "choice",
        "order": 9287,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_08": {
        "id": "neuro_08",
        "text": "Begannen die Beschwerden plötzlich?",
        "type": "choice",
        "order": 9288,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_09": {
        "id": "neuro_09",
        "text": "Ist der Beginnzeitpunkt bekannt?",
        "type": "choice",
        "order": 9289,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_10": {
        "id": "neuro_10",
        "text": "Bestehen starke Kopfschmerzen gleichzeitig?",
        "type": "choice",
        "order": 9290,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_11": {
        "id": "neuro_11",
        "text": "Bestehen Bewusstseinsstörungen?",
        "type": "choice",
        "order": 9291,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_12": {
        "id": "neuro_12",
        "text": "Bestehen Krampfanfälle?",
        "type": "choice",
        "order": 9292,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_13": {
        "id": "neuro_13",
        "text": "Besteht Nackensteifigkeit?",
        "type": "choice",
        "order": 9293,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_14": {
        "id": "neuro_14",
        "text": "Besteht Fieber?",
        "type": "choice",
        "order": 9294,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_15": {
        "id": "neuro_15",
        "text": "Gab es einen Sturz/Kopfstoß?",
        "type": "choice",
        "order": 9295,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_16": {
        "id": "neuro_16",
        "text": "Nimmt die Person Blutverdünner?",
        "type": "choice",
        "order": 9296,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_17": {
        "id": "neuro_17",
        "text": "Ist ein früherer Schlaganfall/TIA bekannt?",
        "type": "choice",
        "order": 9297,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_18": {
        "id": "neuro_18",
        "text": "Besteht eine bekannte Epilepsie?",
        "type": "choice",
        "order": 9298,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_19": {
        "id": "neuro_19",
        "text": "Besteht eine bekannte Migräne?",
        "type": "choice",
        "order": 9299,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_20": {
        "id": "neuro_20",
        "text": "Sind die Symptome seit Beginn besser geworden?",
        "type": "choice",
        "order": 9300,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_21": {
        "id": "neuro_21",
        "text": "Sind die Symptome seit Beginn schlechter geworden?",
        "type": "choice",
        "order": 9301,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_22": {
        "id": "neuro_22",
        "text": "Sind mehrere neurologische Symptome gleichzeitig vorhanden?",
        "type": "choice",
        "order": 9302,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_23": {
        "id": "neuro_23",
        "text": "Ist die Person aktuell allein?",
        "type": "choice",
        "order": 9303,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_24": {
        "id": "neuro_24",
        "text": "Besteht eine mögliche Vergiftung?",
        "type": "choice",
        "order": 9304,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_25": {
        "id": "neuro_25",
        "text": "Besteht eine Schwangerschaft oder kürzliche Geburt?",
        "type": "choice",
        "order": 9305,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "neuro_26": {
        "id": "neuro_26",
        "text": "Wie ist der Verlauf seit Beginn?",
        "type": "choice",
        "order": 9306,
        "options": [
          "plötzlich",
          "zunehmend",
          "gleichbleibend",
          "rückläufig",
          "wechselnd"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "herzrhythmus_01": {
        "id": "herzrhythmus_01",
        "text": "Besteht aktuell Herzrasen oder ein auffällig langsamer Puls?",
        "type": "choice",
        "order": 9321,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_02": {
        "id": "herzrhythmus_02",
        "text": "Bestehen Brustschmerzen?",
        "type": "choice",
        "order": 9322,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_03": {
        "id": "herzrhythmus_03",
        "text": "Bestehen Atemnot oder Luftnot?",
        "type": "choice",
        "order": 9323,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_04": {
        "id": "herzrhythmus_04",
        "text": "Ist die Person bewusstseinsgestört oder kollabiert?",
        "type": "choice",
        "order": 9324,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_05": {
        "id": "herzrhythmus_05",
        "text": "Bestehen Schwindel oder Beinahe-Ohnmacht?",
        "type": "choice",
        "order": 9325,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_06": {
        "id": "herzrhythmus_06",
        "text": "Begann das Herzrasen plötzlich?",
        "type": "choice",
        "order": 9326,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_07": {
        "id": "herzrhythmus_07",
        "text": "Ist eine Herzrhythmusstörung bekannt?",
        "type": "choice",
        "order": 9327,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_08": {
        "id": "herzrhythmus_08",
        "text": "Ist eine Herzerkrankung bekannt?",
        "type": "choice",
        "order": 9328,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_09": {
        "id": "herzrhythmus_09",
        "text": "Ist ein Herzschrittmacher/ICD vorhanden?",
        "type": "choice",
        "order": 9329,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_10": {
        "id": "herzrhythmus_10",
        "text": "Nimmt die Person Herz-/Blutdruckmedikamente?",
        "type": "choice",
        "order": 9330,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_11": {
        "id": "herzrhythmus_11",
        "text": "Wurde ein Pulswert gemessen?",
        "type": "choice",
        "order": 9331,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_12": {
        "id": "herzrhythmus_12",
        "text": "Wurde ein Blutdruckwert gemessen?",
        "type": "choice",
        "order": 9332,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_13": {
        "id": "herzrhythmus_13",
        "text": "Besteht eine deutliche Schwäche?",
        "type": "choice",
        "order": 9333,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_14": {
        "id": "herzrhythmus_14",
        "text": "Besteht kalter Schweiß oder Blässe?",
        "type": "choice",
        "order": 9334,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_15": {
        "id": "herzrhythmus_15",
        "text": "Bestehen neurologische Auffälligkeiten?",
        "type": "choice",
        "order": 9335,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_16": {
        "id": "herzrhythmus_16",
        "text": "Gab es körperliche Belastung vor Beginn?",
        "type": "choice",
        "order": 9336,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_17": {
        "id": "herzrhythmus_17",
        "text": "Besteht Fieber oder Infekt?",
        "type": "choice",
        "order": 9337,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_18": {
        "id": "herzrhythmus_18",
        "text": "Besteht eine mögliche Vergiftung/Überdosierung?",
        "type": "choice",
        "order": 9338,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_19": {
        "id": "herzrhythmus_19",
        "text": "Hat die Person das Ereignis bereits öfter erlebt?",
        "type": "choice",
        "order": 9339,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_20": {
        "id": "herzrhythmus_20",
        "text": "Ist die Herzfrequenz weiterhin auffällig?",
        "type": "choice",
        "order": 9340,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_21": {
        "id": "herzrhythmus_21",
        "text": "Besteht eine Schwangerschaft oder kürzliche Geburt?",
        "type": "choice",
        "order": 9341,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_22": {
        "id": "herzrhythmus_22",
        "text": "Besteht eine bekannte Elektrolytstörung?",
        "type": "choice",
        "order": 9342,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_23": {
        "id": "herzrhythmus_23",
        "text": "Wurde ein Gerät/Implantat alarmiert?",
        "type": "choice",
        "order": 9343,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_24": {
        "id": "herzrhythmus_24",
        "text": "Ist der Rhythmus unregelmäßig wahrnehmbar?",
        "type": "choice",
        "order": 9344,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_25": {
        "id": "herzrhythmus_25",
        "text": "Ist der Zustand aktuell stabil?",
        "type": "choice",
        "order": 9345,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "herzrhythmus_26": {
        "id": "herzrhythmus_26",
        "text": "Wie entwickelt sich das Ereignis?",
        "type": "choice",
        "order": 9346,
        "options": [
          "anhaltend",
          "anfallsartig",
          "besser",
          "schlechter",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "hitze_01": {
        "id": "hitze_01",
        "text": "Besteht eine deutlich erhöhte Körpertemperatur oder Überwärmung?",
        "type": "choice",
        "order": 9361,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_02": {
        "id": "hitze_02",
        "text": "Besteht Bewusstseinsstörung?",
        "type": "choice",
        "order": 9362,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_03": {
        "id": "hitze_03",
        "text": "Bestehen Krampfanfälle?",
        "type": "choice",
        "order": 9363,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_04": {
        "id": "hitze_04",
        "text": "Bestehen starke Kopfschmerzen?",
        "type": "choice",
        "order": 9364,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_05": {
        "id": "hitze_05",
        "text": "Ist die Haut ungewöhnlich heiß?",
        "type": "choice",
        "order": 9365,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_06": {
        "id": "hitze_06",
        "text": "Besteht starke Schwäche oder Kollapsneigung?",
        "type": "choice",
        "order": 9366,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_07": {
        "id": "hitze_07",
        "text": "Besteht starke Verwirrtheit?",
        "type": "choice",
        "order": 9367,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_08": {
        "id": "hitze_08",
        "text": "War die Person längere Zeit Hitze ausgesetzt?",
        "type": "choice",
        "order": 9368,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_09": {
        "id": "hitze_09",
        "text": "War die Person körperlich stark belastet?",
        "type": "choice",
        "order": 9369,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_10": {
        "id": "hitze_10",
        "text": "Besteht eine relevante Vorerkrankung?",
        "type": "choice",
        "order": 9370,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_11": {
        "id": "hitze_11",
        "text": "Wurden ausreichend Getränke aufgenommen?",
        "type": "choice",
        "order": 9371,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_12": {
        "id": "hitze_12",
        "text": "Bestehen Erbrechen oder Durchfall?",
        "type": "choice",
        "order": 9372,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_13": {
        "id": "hitze_13",
        "text": "Bestehen Muskelkrämpfe?",
        "type": "choice",
        "order": 9373,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_14": {
        "id": "hitze_14",
        "text": "Bestehen Schüttelfrost oder Unterkühlung?",
        "type": "choice",
        "order": 9374,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_15": {
        "id": "hitze_15",
        "text": "War die Person Kälte/Nässe ausgesetzt?",
        "type": "choice",
        "order": 9375,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_16": {
        "id": "hitze_16",
        "text": "Ist die Haut auffällig blass oder blau?",
        "type": "choice",
        "order": 9376,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_17": {
        "id": "hitze_17",
        "text": "Bestehen Atemprobleme?",
        "type": "choice",
        "order": 9377,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_18": {
        "id": "hitze_18",
        "text": "Bestehen Brustschmerzen?",
        "type": "choice",
        "order": 9378,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_19": {
        "id": "hitze_19",
        "text": "Besteht eine mögliche Vergiftung?",
        "type": "choice",
        "order": 9379,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_20": {
        "id": "hitze_20",
        "text": "Ist eine starke Temperaturabweichung gemessen worden?",
        "type": "choice",
        "order": 9380,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_21": {
        "id": "hitze_21",
        "text": "Besteht bei einem Kind eine relevante Überwärmung/Unterkühlung?",
        "type": "choice",
        "order": 9381,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_22": {
        "id": "hitze_22",
        "text": "War die Person im Fahrzeug/geschlossenen Raum?",
        "type": "choice",
        "order": 9382,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_23": {
        "id": "hitze_23",
        "text": "Besteht eine Schwangerschaft?",
        "type": "choice",
        "order": 9383,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_24": {
        "id": "hitze_24",
        "text": "Besteht eine deutliche Verschlechterung?",
        "type": "choice",
        "order": 9384,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_25": {
        "id": "hitze_25",
        "text": "Ist die Ursache weiterhin vorhanden?",
        "type": "choice",
        "order": 9385,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_26": {
        "id": "hitze_26",
        "text": "Wie ist der Verlauf?",
        "type": "choice",
        "order": 9386,
        "options": [
          "zunehmend",
          "gleichbleibend",
          "besser",
          "wechselnd",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "kollaps_01": {
        "id": "kollaps_01",
        "text": "Ist die Person aktuell bewusstlos oder nicht ansprechbar?",
        "type": "choice",
        "order": 9401,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_02": {
        "id": "kollaps_02",
        "text": "Atmet die Person normal?",
        "type": "choice",
        "order": 9402,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_03": {
        "id": "kollaps_03",
        "text": "Gab es eine Ohnmacht/Kollaps?",
        "type": "choice",
        "order": 9403,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_04": {
        "id": "kollaps_04",
        "text": "Bestehen Brustschmerzen?",
        "type": "choice",
        "order": 9404,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_05": {
        "id": "kollaps_05",
        "text": "Bestehen Atemnot?",
        "type": "choice",
        "order": 9405,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_06": {
        "id": "kollaps_06",
        "text": "Bestehen Herzrhythmusstörungen?",
        "type": "choice",
        "order": 9406,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_07": {
        "id": "kollaps_07",
        "text": "Gab es einen Sturz beim Kollaps?",
        "type": "choice",
        "order": 9407,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_08": {
        "id": "kollaps_08",
        "text": "Bestehen Verletzungen nach dem Sturz?",
        "type": "choice",
        "order": 9408,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_09": {
        "id": "kollaps_09",
        "text": "Bestehen neurologische Auffälligkeiten?",
        "type": "choice",
        "order": 9409,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_10": {
        "id": "kollaps_10",
        "text": "Bestehen Krampfanfälle oder Zuckungen?",
        "type": "choice",
        "order": 9410,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_11": {
        "id": "kollaps_11",
        "text": "Ist Diabetes bekannt?",
        "type": "choice",
        "order": 9411,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_12": {
        "id": "kollaps_12",
        "text": "Wurde ein Blutzucker gemessen?",
        "type": "choice",
        "order": 9412,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_13": {
        "id": "kollaps_13",
        "text": "Bestehen Blutungen?",
        "type": "choice",
        "order": 9413,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_14": {
        "id": "kollaps_14",
        "text": "Besteht Fieber/Infekt?",
        "type": "choice",
        "order": 9414,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_15": {
        "id": "kollaps_15",
        "text": "Besteht Flüssigkeitsmangel oder starkes Erbrechen/Diarrhö?",
        "type": "choice",
        "order": 9415,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_16": {
        "id": "kollaps_16",
        "text": "Besteht eine Schwangerschaft oder kürzliche Geburt?",
        "type": "choice",
        "order": 9416,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_17": {
        "id": "kollaps_17",
        "text": "Ist eine Herzerkrankung bekannt?",
        "type": "choice",
        "order": 9417,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_18": {
        "id": "kollaps_18",
        "text": "Nimmt die Person Blutdruck-/Herzmedikamente?",
        "type": "choice",
        "order": 9418,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_19": {
        "id": "kollaps_19",
        "text": "Gab es das schon einmal?",
        "type": "choice",
        "order": 9419,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_20": {
        "id": "kollaps_20",
        "text": "War der Kollaps während Belastung?",
        "type": "choice",
        "order": 9420,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_21": {
        "id": "kollaps_21",
        "text": "Gab es Vorzeichen wie Schwindel/Übelkeit?",
        "type": "choice",
        "order": 9421,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_22": {
        "id": "kollaps_22",
        "text": "Ist die Person wieder vollständig wach?",
        "type": "choice",
        "order": 9422,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_23": {
        "id": "kollaps_23",
        "text": "Besteht eine anhaltende Verwirrtheit?",
        "type": "choice",
        "order": 9423,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_24": {
        "id": "kollaps_24",
        "text": "Besteht der Verdacht auf Vergiftung?",
        "type": "choice",
        "order": 9424,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_25": {
        "id": "kollaps_25",
        "text": "Ist der Zustand aktuell wieder schlechter geworden?",
        "type": "choice",
        "order": 9425,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_26": {
        "id": "kollaps_26",
        "text": "Wie ist der Verlauf?",
        "type": "choice",
        "order": 9426,
        "options": [
          "einmalig",
          "wiederholt",
          "anhaltend",
          "besser",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kopf_01": {
        "id": "kopf_01",
        "text": "Ist der Kopfschmerz plötzlich und maximal stark aufgetreten?",
        "type": "choice",
        "order": 9441,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_02": {
        "id": "kopf_02",
        "text": "Bestehen neurologische Ausfälle?",
        "type": "choice",
        "order": 9442,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_03": {
        "id": "kopf_03",
        "text": "Bestehen Sprachstörungen?",
        "type": "choice",
        "order": 9443,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_04": {
        "id": "kopf_04",
        "text": "Bestehen Sehstörungen?",
        "type": "choice",
        "order": 9444,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_05": {
        "id": "kopf_05",
        "text": "Bestehen Lähmungen/Taubheitsgefühle?",
        "type": "choice",
        "order": 9445,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_06": {
        "id": "kopf_06",
        "text": "Bestehen Nackensteifigkeit?",
        "type": "choice",
        "order": 9446,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_07": {
        "id": "kopf_07",
        "text": "Besteht Fieber?",
        "type": "choice",
        "order": 9447,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_08": {
        "id": "kopf_08",
        "text": "Gab es einen Kopfstoß/Sturz?",
        "type": "choice",
        "order": 9448,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_09": {
        "id": "kopf_09",
        "text": "Besteht Bewusstseinsstörung?",
        "type": "choice",
        "order": 9449,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_10": {
        "id": "kopf_10",
        "text": "Bestehen Krampfanfälle?",
        "type": "choice",
        "order": 9450,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_11": {
        "id": "kopf_11",
        "text": "Bestehen Übelkeit/Erbrechen?",
        "type": "choice",
        "order": 9451,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_12": {
        "id": "kopf_12",
        "text": "Ist Migräne bekannt?",
        "type": "choice",
        "order": 9452,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_13": {
        "id": "kopf_13",
        "text": "Ist der Schmerz anders als bekannte Kopfschmerzen?",
        "type": "choice",
        "order": 9453,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_14": {
        "id": "kopf_14",
        "text": "Besteht eine Schwangerschaft oder kürzliche Geburt?",
        "type": "choice",
        "order": 9454,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_15": {
        "id": "kopf_15",
        "text": "Nimmt die Person Blutverdünner?",
        "type": "choice",
        "order": 9455,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_16": {
        "id": "kopf_16",
        "text": "Besteht hoher Blutdruck?",
        "type": "choice",
        "order": 9456,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_17": {
        "id": "kopf_17",
        "text": "Besteht eine bekannte Gefäßerkrankung?",
        "type": "choice",
        "order": 9457,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_18": {
        "id": "kopf_18",
        "text": "Besteht eine Vergiftungsexposition?",
        "type": "choice",
        "order": 9458,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_19": {
        "id": "kopf_19",
        "text": "Ist der Schmerz nach Belastung aufgetreten?",
        "type": "choice",
        "order": 9459,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_20": {
        "id": "kopf_20",
        "text": "Ist der Schmerz nach Husten/Pressen aufgetreten?",
        "type": "choice",
        "order": 9460,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_21": {
        "id": "kopf_21",
        "text": "Besteht Licht-/Lärmempfindlichkeit?",
        "type": "choice",
        "order": 9461,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_22": {
        "id": "kopf_22",
        "text": "Besteht eine neue Wesensveränderung?",
        "type": "choice",
        "order": 9462,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_23": {
        "id": "kopf_23",
        "text": "Besteht Schwindel/Gleichgewichtsstörung?",
        "type": "choice",
        "order": 9463,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_24": {
        "id": "kopf_24",
        "text": "Ist die Person aktuell ansprechbar?",
        "type": "choice",
        "order": 9464,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_25": {
        "id": "kopf_25",
        "text": "Wird der Kopfschmerz zunehmend stärker?",
        "type": "choice",
        "order": 9465,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_26": {
        "id": "kopf_26",
        "text": "Wie entwickelt sich der Kopfschmerz?",
        "type": "choice",
        "order": 9466,
        "options": [
          "plötzlich",
          "zunehmend",
          "gleichbleibend",
          "rückläufig",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "krampf_01": {
        "id": "krampf_01",
        "text": "Krampft die Person aktuell noch?",
        "type": "choice",
        "order": 9481,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_02": {
        "id": "krampf_02",
        "text": "Atmet die Person normal?",
        "type": "choice",
        "order": 9482,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_03": {
        "id": "krampf_03",
        "text": "Ist die Person nach dem Anfall wieder ansprechbar?",
        "type": "choice",
        "order": 9483,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_04": {
        "id": "krampf_04",
        "text": "Wie lange hat der Krampfanfall ungefähr gedauert?",
        "type": "choice",
        "order": 9484,
        "options": [
          "< 1 Minute",
          "1–5 Minuten",
          "> 5 Minuten",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_05": {
        "id": "krampf_05",
        "text": "Gab es mehrere Anfälle hintereinander?",
        "type": "choice",
        "order": 9485,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_06": {
        "id": "krampf_06",
        "text": "Ist Epilepsie bekannt?",
        "type": "choice",
        "order": 9486,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_07": {
        "id": "krampf_07",
        "text": "Gab es einen Sturz/Kopfstoß?",
        "type": "choice",
        "order": 9487,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_08": {
        "id": "krampf_08",
        "text": "Bestehen Verletzungen?",
        "type": "choice",
        "order": 9488,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_09": {
        "id": "krampf_09",
        "text": "Besteht Fieber?",
        "type": "choice",
        "order": 9489,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_10": {
        "id": "krampf_10",
        "text": "Besteht eine mögliche Vergiftung?",
        "type": "choice",
        "order": 9490,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_11": {
        "id": "krampf_11",
        "text": "Ist Diabetes bekannt?",
        "type": "choice",
        "order": 9491,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_12": {
        "id": "krampf_12",
        "text": "Wurde ein Blutzucker gemessen?",
        "type": "choice",
        "order": 9492,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_13": {
        "id": "krampf_13",
        "text": "Besteht eine Schwangerschaft oder kürzliche Geburt?",
        "type": "choice",
        "order": 9493,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_14": {
        "id": "krampf_14",
        "text": "Bestehen neue neurologische Ausfälle?",
        "type": "choice",
        "order": 9494,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_15": {
        "id": "krampf_15",
        "text": "Bestehen starke Kopfschmerzen?",
        "type": "choice",
        "order": 9495,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_16": {
        "id": "krampf_16",
        "text": "Hat die Person Medikamente gegen Epilepsie?",
        "type": "choice",
        "order": 9496,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_17": {
        "id": "krampf_17",
        "text": "Wurde das Medikament eingenommen?",
        "type": "choice",
        "order": 9497,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_18": {
        "id": "krampf_18",
        "text": "Gab es Schlafmangel/Alkoholentzug oder einen möglichen Trigger?",
        "type": "choice",
        "order": 9498,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_19": {
        "id": "krampf_19",
        "text": "Ist die Person nach dem Anfall ungewöhnlich lange bewusstseinsgestört?",
        "type": "choice",
        "order": 9499,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_20": {
        "id": "krampf_20",
        "text": "Bestehen Atemprobleme nach dem Anfall?",
        "type": "choice",
        "order": 9500,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_21": {
        "id": "krampf_21",
        "text": "Bestehen weitere Betroffene mit ähnlichen Symptomen?",
        "type": "choice",
        "order": 9501,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_22": {
        "id": "krampf_22",
        "text": "Ist dies der erste bekannte Krampfanfall?",
        "type": "choice",
        "order": 9502,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_23": {
        "id": "krampf_23",
        "text": "Bestehen wiederholte Zuckungen ohne vollständige Erholung?",
        "type": "choice",
        "order": 9503,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_24": {
        "id": "krampf_24",
        "text": "Ist die Person aktuell stabil?",
        "type": "choice",
        "order": 9504,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_25": {
        "id": "krampf_25",
        "text": "Besteht eine relevante Vorerkrankung?",
        "type": "choice",
        "order": 9505,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_26": {
        "id": "krampf_26",
        "text": "Wie ist der Verlauf?",
        "type": "choice",
        "order": 9506,
        "options": [
          "laufend",
          "nach Anfall",
          "wiederholt",
          "besser",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "psyche_01": {
        "id": "psyche_01",
        "text": "Besteht aktuell eine Suizidabsicht oder droht Selbstverletzung?",
        "type": "choice",
        "order": 9521,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_02": {
        "id": "psyche_02",
        "text": "Ist bekannt, wie sich die Person selbst verletzen oder Suizid begehen möchte?",
        "type": "choice",
        "order": 9522,
        "options": [
          "Kohlenstoffmonoxidvergiftung (CO)",
          "Tabletten / Medikamente",
          "Sturz aus Höhe",
          "Vergiftung",
          "Drogen / Alkohol",
          "Schnitt- / Stichverletzung",
          "Erhängen / Strangulation",
          "Ertrinken",
          "Mehrere Methoden / mehrere Angaben",
          "Sonstige / unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_03": {
        "id": "psyche_03",
        "text": "Ist die Person aktuell allein?",
        "type": "choice",
        "order": 9523,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_04": {
        "id": "psyche_04",
        "text": "Besteht Fremdgefährdung?",
        "type": "choice",
        "order": 9524,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_05": {
        "id": "psyche_05",
        "text": "Ist die Person aggressiv oder stark erregt?",
        "type": "choice",
        "order": 9525,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_06": {
        "id": "psyche_06",
        "text": "Besteht eine akute psychotische Symptomatik?",
        "type": "choice",
        "order": 9526,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_07": {
        "id": "psyche_07",
        "text": "Hört oder sieht die Person Dinge, die andere nicht wahrnehmen?",
        "type": "choice",
        "order": 9527,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_08": {
        "id": "psyche_08",
        "text": "Besteht starke Verwirrtheit?",
        "type": "choice",
        "order": 9528,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_11": {
        "id": "psyche_11",
        "text": "Bestehen körperliche Beschwerden zusätzlich?",
        "type": "choice",
        "order": 9531,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_12": {
        "id": "psyche_12",
        "text": "Besteht eine bekannte psychische Erkrankung?",
        "type": "choice",
        "order": 9532,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_13": {
        "id": "psyche_13",
        "text": "Ist eine psychiatrische Behandlung bekannt?",
        "type": "choice",
        "order": 9533,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_14": {
        "id": "psyche_14",
        "text": "Gibt es einen aktuellen Auslöser/Konflikt?",
        "type": "choice",
        "order": 9534,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_15": {
        "id": "psyche_15",
        "text": "Hat sich der Zustand plötzlich verändert?",
        "type": "choice",
        "order": 9535,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_16": {
        "id": "psyche_16",
        "text": "Ist die Person zugänglich für Gespräch?",
        "type": "choice",
        "order": 9536,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_17": {
        "id": "psyche_17",
        "text": "Sind Waffen oder gefährliche Gegenstände erreichbar?",
        "type": "choice",
        "order": 9537,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_18": {
        "id": "psyche_18",
        "text": "Sind Kinder/andere gefährdete Personen vor Ort?",
        "type": "choice",
        "order": 9538,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_19": {
        "id": "psyche_19",
        "text": "Besteht eine konkrete Zeit-/Ortsangabe für eine Selbstgefährdung?",
        "type": "choice",
        "order": 9539,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_20": {
        "id": "psyche_20",
        "text": "Besteht eine Vergiftungs-/Überdosierungsmöglichkeit?",
        "type": "choice",
        "order": 9540,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_21": {
        "id": "psyche_21",
        "text": "Bestehen Bewusstseinsstörungen?",
        "type": "choice",
        "order": 9541,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_22": {
        "id": "psyche_22",
        "text": "Bestehen Krampfanfälle?",
        "type": "choice",
        "order": 9542,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_23": {
        "id": "psyche_23",
        "text": "Bestehen Atemprobleme?",
        "type": "choice",
        "order": 9543,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_24": {
        "id": "psyche_24",
        "text": "Bestehen Brustschmerzen?",
        "type": "choice",
        "order": 9544,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_25": {
        "id": "psyche_25",
        "text": "Ist die Lage aktuell eskalierend?",
        "type": "choice",
        "order": 9545,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_26": {
        "id": "psyche_26",
        "text": "Wie entwickelt sich die Situation?",
        "type": "choice",
        "order": 9546,
        "options": [
          "zunehmend",
          "gleichbleibend",
          "besser",
          "wechselnd",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "schmerz_01": {
        "id": "schmerz_01",
        "text": "Ist der Schmerz aktuell stark oder sehr stark?",
        "type": "choice",
        "order": 9561,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_02": {
        "id": "schmerz_02",
        "text": "Begann der Schmerz plötzlich?",
        "type": "choice",
        "order": 9562,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_03": {
        "id": "schmerz_03",
        "text": "Ist der Schmerz neu oder ungewöhnlich?",
        "type": "choice",
        "order": 9563,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_04": {
        "id": "schmerz_04",
        "text": "Bestehen gleichzeitig Atemnot?",
        "type": "choice",
        "order": 9564,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_05": {
        "id": "schmerz_05",
        "text": "Bestehen Brustschmerzen?",
        "type": "choice",
        "order": 9565,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_06": {
        "id": "schmerz_06",
        "text": "Bestehen Bauchschmerzen?",
        "type": "choice",
        "order": 9566,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_07": {
        "id": "schmerz_07",
        "text": "Bestehen neurologische Auffälligkeiten?",
        "type": "choice",
        "order": 9567,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_08": {
        "id": "schmerz_08",
        "text": "Bestehen Kreislaufprobleme?",
        "type": "choice",
        "order": 9568,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_09": {
        "id": "schmerz_09",
        "text": "Bestehen Fieber/Infektzeichen?",
        "type": "choice",
        "order": 9569,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_10": {
        "id": "schmerz_10",
        "text": "Gab es einen Unfall/Trauma?",
        "type": "choice",
        "order": 9570,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_11": {
        "id": "schmerz_11",
        "text": "Ist eine Schwangerschaft möglich?",
        "type": "choice",
        "order": 9571,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_12": {
        "id": "schmerz_12",
        "text": "Besteht eine bekannte relevante Vorerkrankung?",
        "type": "choice",
        "order": 9572,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_13": {
        "id": "schmerz_13",
        "text": "Wurde bereits ein Schmerzmittel genommen?",
        "type": "choice",
        "order": 9573,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_14": {
        "id": "schmerz_14",
        "text": "Hat sich der Schmerz trotz Maßnahmen verstärkt?",
        "type": "choice",
        "order": 9574,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_15": {
        "id": "schmerz_15",
        "text": "Bestehen Blutungen?",
        "type": "choice",
        "order": 9575,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_16": {
        "id": "schmerz_16",
        "text": "Bestehen Erbrechen/Übelkeit?",
        "type": "choice",
        "order": 9576,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_17": {
        "id": "schmerz_17",
        "text": "Bestehen Probleme beim Wasserlassen?",
        "type": "choice",
        "order": 9577,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_18": {
        "id": "schmerz_18",
        "text": "Bestehen Bewegungseinschränkungen?",
        "type": "choice",
        "order": 9578,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_19": {
        "id": "schmerz_19",
        "text": "Bestehen Taubheit/Kraftverlust?",
        "type": "choice",
        "order": 9579,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_20": {
        "id": "schmerz_20",
        "text": "Bestehen Hautveränderungen?",
        "type": "choice",
        "order": 9580,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_21": {
        "id": "schmerz_21",
        "text": "Besteht ein bekannter chronischer Schmerz?",
        "type": "choice",
        "order": 9581,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_22": {
        "id": "schmerz_22",
        "text": "Ist der Schmerz bei Belastung stärker?",
        "type": "choice",
        "order": 9582,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_23": {
        "id": "schmerz_23",
        "text": "Ist der Schmerz atemabhängig?",
        "type": "choice",
        "order": 9583,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_24": {
        "id": "schmerz_24",
        "text": "Ist der Schmerz kolikartig?",
        "type": "choice",
        "order": 9584,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_25": {
        "id": "schmerz_25",
        "text": "Ist der Schmerz lokal begrenzt?",
        "type": "choice",
        "order": 9585,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "schmerz_26": {
        "id": "schmerz_26",
        "text": "Wie entwickelt sich der Schmerz?",
        "type": "choice",
        "order": 9586,
        "options": [
          "zunehmend",
          "gleichbleibend",
          "rückläufig",
          "wellenförmig",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "unklar_01": {
        "id": "unklar_01",
        "text": "Ist die Person aktuell wach und ansprechbar?",
        "type": "choice",
        "order": 9601,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_02": {
        "id": "unklar_02",
        "text": "Kann die Person sprechen?",
        "type": "choice",
        "order": 9602,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_03": {
        "id": "unklar_03",
        "text": "Atmet die Person normal?",
        "type": "choice",
        "order": 9603,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_04": {
        "id": "unklar_04",
        "text": "Bestehen sichtbare Verletzungen?",
        "type": "choice",
        "order": 9604,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_05": {
        "id": "unklar_05",
        "text": "Bestehen Blutungen?",
        "type": "choice",
        "order": 9605,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_06": {
        "id": "unklar_06",
        "text": "Bestehen Atemprobleme?",
        "type": "choice",
        "order": 9606,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_07": {
        "id": "unklar_07",
        "text": "Bestehen Brustschmerzen?",
        "type": "choice",
        "order": 9607,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_08": {
        "id": "unklar_08",
        "text": "Bestehen Bauchschmerzen?",
        "type": "choice",
        "order": 9608,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_09": {
        "id": "unklar_09",
        "text": "Bestehen neurologische Auffälligkeiten?",
        "type": "choice",
        "order": 9609,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_10": {
        "id": "unklar_10",
        "text": "Bestehen Krampfanfälle?",
        "type": "choice",
        "order": 9610,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_11": {
        "id": "unklar_11",
        "text": "Besteht eine Vergiftungsmöglichkeit?",
        "type": "choice",
        "order": 9611,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_12": {
        "id": "unklar_12",
        "text": "Besteht ein Unfallgeschehen?",
        "type": "choice",
        "order": 9612,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_13": {
        "id": "unklar_13",
        "text": "Besteht Feuer/Rauch/Gefahrstoffkontakt?",
        "type": "choice",
        "order": 9613,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_14": {
        "id": "unklar_14",
        "text": "Sind mehrere Personen betroffen?",
        "type": "choice",
        "order": 9614,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_15": {
        "id": "unklar_15",
        "text": "Ist die Ursache weiterhin unbekannt?",
        "type": "choice",
        "order": 9615,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_16": {
        "id": "unklar_16",
        "text": "Besteht eine akute Verschlechterung?",
        "type": "choice",
        "order": 9616,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_17": {
        "id": "unklar_17",
        "text": "Ist der Aufenthaltsort sicher?",
        "type": "choice",
        "order": 9617,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_18": {
        "id": "unklar_18",
        "text": "Bestehen weitere Gefahren für Helfer?",
        "type": "choice",
        "order": 9618,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_19": {
        "id": "unklar_19",
        "text": "Ist eine Person eingeschlossen/eingeklemmt?",
        "type": "choice",
        "order": 9619,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_20": {
        "id": "unklar_20",
        "text": "Besteht eine mögliche psychische Krise?",
        "type": "choice",
        "order": 9620,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_21": {
        "id": "unklar_21",
        "text": "Besteht eine Schwangerschaftsmöglichkeit?",
        "type": "choice",
        "order": 9621,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_22": {
        "id": "unklar_22",
        "text": "Besteht eine relevante Vorerkrankung?",
        "type": "choice",
        "order": 9622,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_23": {
        "id": "unklar_23",
        "text": "Wurde Alkohol/Drogenkonsum beobachtet?",
        "type": "choice",
        "order": 9623,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_24": {
        "id": "unklar_24",
        "text": "Wurde eine unbekannte Substanz aufgenommen?",
        "type": "choice",
        "order": 9624,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_25": {
        "id": "unklar_25",
        "text": "Bestehen mehrere ähnlich erkrankte Personen?",
        "type": "choice",
        "order": 9625,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "unklar_26": {
        "id": "unklar_26",
        "text": "Wie ist die Situation aktuell?",
        "type": "choice",
        "order": 9626,
        "options": [
          "stabil",
          "zunehmend kritisch",
          "unklar",
          "besser",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "vergiftung_01": {
        "id": "vergiftung_01",
        "text": "Wurde eine Substanz aufgenommen/eingeatmet/über die Haut aufgenommen?",
        "type": "choice",
        "order": 9641,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_02": {
        "id": "vergiftung_02",
        "text": "Ist die Substanz bekannt?",
        "type": "choice",
        "order": 9642,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_03": {
        "id": "vergiftung_03",
        "text": "Ist die Menge ungefähr bekannt?",
        "type": "choice",
        "order": 9643,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_04": {
        "id": "vergiftung_04",
        "text": "Ist der Aufnahmezeitpunkt bekannt?",
        "type": "choice",
        "order": 9644,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_05": {
        "id": "vergiftung_05",
        "text": "Bestehen Bewusstseinsstörungen?",
        "type": "choice",
        "order": 9645,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_06": {
        "id": "vergiftung_06",
        "text": "Bestehen Atemprobleme?",
        "type": "choice",
        "order": 9646,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_07": {
        "id": "vergiftung_07",
        "text": "Bestehen Krampfanfälle?",
        "type": "choice",
        "order": 9647,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_08": {
        "id": "vergiftung_08",
        "text": "Bestehen Erbrechen oder Bauchbeschwerden?",
        "type": "choice",
        "order": 9648,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_09": {
        "id": "vergiftung_09",
        "text": "Bestehen Herzrhythmus-/Kreislaufprobleme?",
        "type": "choice",
        "order": 9649,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_10": {
        "id": "vergiftung_10",
        "text": "Bestehen auffällige Pupillen oder Sehstörungen?",
        "type": "choice",
        "order": 9650,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_11": {
        "id": "vergiftung_11",
        "text": "Bestehen Halluzinationen/Verwirrtheit?",
        "type": "choice",
        "order": 9651,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_12": {
        "id": "vergiftung_12",
        "text": "Besteht eine Pilzaufnahme?",
        "type": "choice",
        "order": 9652,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_13": {
        "id": "vergiftung_13",
        "text": "Wurde Fliegen-/Pantherpilz oder ein unbekannter Pilz gegessen?",
        "type": "choice",
        "order": 9653,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_14": {
        "id": "vergiftung_14",
        "text": "Bestehen nach Pilzaufnahme Schwindel, Halluzinationen, Unruhe oder starke Müdigkeit?",
        "type": "choice",
        "order": 9654,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_15": {
        "id": "vergiftung_15",
        "text": "Besteht eine Medikamentenüberdosierung?",
        "type": "choice",
        "order": 9655,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_16": {
        "id": "vergiftung_16",
        "text": "Besteht Drogenkonsum?",
        "type": "choice",
        "order": 9656,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_17": {
        "id": "vergiftung_17",
        "text": "Besteht Alkoholintoxikation?",
        "type": "choice",
        "order": 9657,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_18": {
        "id": "vergiftung_18",
        "text": "Besteht Kohlenmonoxid-/Rauchgasverdacht?",
        "type": "choice",
        "order": 9658,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_19": {
        "id": "vergiftung_19",
        "text": "Sind weitere Personen betroffen?",
        "type": "choice",
        "order": 9659,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_20": {
        "id": "vergiftung_20",
        "text": "Ist der Kontakt mit der Substanz beendet?",
        "type": "choice",
        "order": 9660,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_21": {
        "id": "vergiftung_21",
        "text": "Liegt die Verpackung/Produktinformation vor?",
        "type": "choice",
        "order": 9661,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_22": {
        "id": "vergiftung_22",
        "text": "Bestehen Haut-/Augenkontakte?",
        "type": "choice",
        "order": 9662,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_23": {
        "id": "vergiftung_23",
        "text": "Bestehen Verätzungszeichen?",
        "type": "choice",
        "order": 9663,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_24": {
        "id": "vergiftung_24",
        "text": "Ist die Person nach der Aufnahme kollabiert?",
        "type": "choice",
        "order": 9664,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_25": {
        "id": "vergiftung_25",
        "text": "Besteht eine Schwangerschaft?",
        "type": "choice",
        "order": 9665,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_26": {
        "id": "vergiftung_26",
        "text": "Wie entwickelt sich die Vergiftungssymptomatik?",
        "type": "choice",
        "order": 9666,
        "options": [
          "zunehmend",
          "gleichbleibend",
          "besser",
          "wechselnd",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "verletzung_01": {
        "id": "verletzung_01",
        "text": "Ist eine Person verletzt?",
        "type": "choice",
        "order": 9681,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_02": {
        "id": "verletzung_02",
        "text": "Ist die Verletzung lebensbedrohlich wirkend?",
        "type": "choice",
        "order": 9682,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_03": {
        "id": "verletzung_03",
        "text": "Besteht eine starke Blutung?",
        "type": "choice",
        "order": 9683,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_04": {
        "id": "verletzung_04",
        "text": "Bestehen Atemprobleme?",
        "type": "choice",
        "order": 9684,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_05": {
        "id": "verletzung_05",
        "text": "Bestehen Bewusstseinsstörungen?",
        "type": "choice",
        "order": 9685,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_06": {
        "id": "verletzung_06",
        "text": "Gab es einen Kopfstoß?",
        "type": "choice",
        "order": 9686,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_07": {
        "id": "verletzung_07",
        "text": "Bestehen neurologische Ausfälle?",
        "type": "choice",
        "order": 9687,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_08": {
        "id": "verletzung_08",
        "text": "Besteht eine sichtbare Fehlstellung?",
        "type": "choice",
        "order": 9688,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_09": {
        "id": "verletzung_09",
        "text": "Ist eine Extremität nicht normal beweglich?",
        "type": "choice",
        "order": 9689,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_10": {
        "id": "verletzung_10",
        "text": "Bestehen Taubheit/Kribbeln oder Kraftverlust?",
        "type": "choice",
        "order": 9690,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_11": {
        "id": "verletzung_11",
        "text": "Ist die Extremität blass/blau/kalt?",
        "type": "choice",
        "order": 9691,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_12": {
        "id": "verletzung_12",
        "text": "Bestehen starke Schmerzen?",
        "type": "choice",
        "order": 9692,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_13": {
        "id": "verletzung_13",
        "text": "Besteht eine offene Wunde?",
        "type": "choice",
        "order": 9693,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_14": {
        "id": "verletzung_14",
        "text": "Besteht ein Fremdkörper?",
        "type": "choice",
        "order": 9694,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_15": {
        "id": "verletzung_15",
        "text": "Gab es einen Sturz aus größerer Höhe?",
        "type": "choice",
        "order": 9695,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_16": {
        "id": "verletzung_16",
        "text": "Gab es einen Verkehrsunfall?",
        "type": "choice",
        "order": 9696,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_17": {
        "id": "verletzung_17",
        "text": "Gab es einen Stromunfall?",
        "type": "choice",
        "order": 9697,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_18": {
        "id": "verletzung_18",
        "text": "Gab es eine Verbrennung/Verätzung?",
        "type": "choice",
        "order": 9698,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_19": {
        "id": "verletzung_19",
        "text": "Besteht eine mögliche Wirbelsäulenverletzung?",
        "type": "choice",
        "order": 9699,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_20": {
        "id": "verletzung_20",
        "text": "Besteht eine mögliche Beckenverletzung?",
        "type": "choice",
        "order": 9700,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_21": {
        "id": "verletzung_21",
        "text": "Besteht eine Schwangerschaft?",
        "type": "choice",
        "order": 9701,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_22": {
        "id": "verletzung_22",
        "text": "Ist die Person eingeklemmt/eingeschlossen?",
        "type": "choice",
        "order": 9702,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_23": {
        "id": "verletzung_23",
        "text": "Bestehen mehrere Verletzte?",
        "type": "choice",
        "order": 9703,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_24": {
        "id": "verletzung_24",
        "text": "Wurde bereits Erste Hilfe geleistet?",
        "type": "choice",
        "order": 9704,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_25": {
        "id": "verletzung_25",
        "text": "Hat sich der Zustand verschlechtert?",
        "type": "choice",
        "order": 9705,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "verletzung_26": {
        "id": "verletzung_26",
        "text": "Wie entwickelt sich die Verletzungssituation?",
        "type": "choice",
        "order": 9706,
        "options": [
          "stabil",
          "zunehmend kritisch",
          "gleichbleibend",
          "besser",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "arbeitsunfall_01": {
        "id": "arbeitsunfall_01",
        "text": "Ist die Person bei einem Arbeits-/Betriebs-/Schulunfall verletzt worden?",
        "type": "choice",
        "order": 9721,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_02": {
        "id": "arbeitsunfall_02",
        "text": "Besteht akute Lebensgefahr?",
        "type": "choice",
        "order": 9722,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_03": {
        "id": "arbeitsunfall_03",
        "text": "Bestehen starke Blutungen?",
        "type": "choice",
        "order": 9723,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_04": {
        "id": "arbeitsunfall_04",
        "text": "Bestehen Atemprobleme?",
        "type": "choice",
        "order": 9724,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_05": {
        "id": "arbeitsunfall_05",
        "text": "Bestehen Bewusstseinsstörungen?",
        "type": "choice",
        "order": 9725,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_06": {
        "id": "arbeitsunfall_06",
        "text": "Besteht Einklemmung/Einschluss?",
        "type": "choice",
        "order": 9726,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_07": {
        "id": "arbeitsunfall_07",
        "text": "Besteht Gefahr durch Maschinen/Anlagen?",
        "type": "choice",
        "order": 9727,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_08": {
        "id": "arbeitsunfall_08",
        "text": "Ist elektrische Energie beteiligt?",
        "type": "choice",
        "order": 9728,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_09": {
        "id": "arbeitsunfall_09",
        "text": "Sind Gefahrstoffe/Chemikalien beteiligt?",
        "type": "choice",
        "order": 9729,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_10": {
        "id": "arbeitsunfall_10",
        "text": "Besteht Absturz-/Sturzgefahr?",
        "type": "choice",
        "order": 9730,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_11": {
        "id": "arbeitsunfall_11",
        "text": "Bestehen Kopf-/Wirbelsäulenverletzungen?",
        "type": "choice",
        "order": 9731,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_12": {
        "id": "arbeitsunfall_12",
        "text": "Bestehen starke Schmerzen?",
        "type": "choice",
        "order": 9732,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_13": {
        "id": "arbeitsunfall_13",
        "text": "Bestehen Verbrennungen/Verätzungen?",
        "type": "choice",
        "order": 9733,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_14": {
        "id": "arbeitsunfall_14",
        "text": "Bestehen neurologische Ausfälle?",
        "type": "choice",
        "order": 9734,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_15": {
        "id": "arbeitsunfall_15",
        "text": "Besteht eine sichtbare Fehlstellung?",
        "type": "choice",
        "order": 9735,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_16": {
        "id": "arbeitsunfall_16",
        "text": "Bestehen mehrere Verletzte?",
        "type": "choice",
        "order": 9736,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_17": {
        "id": "arbeitsunfall_17",
        "text": "Ist die Gefahrenquelle abgeschaltet/gesichert?",
        "type": "choice",
        "order": 9737,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_18": {
        "id": "arbeitsunfall_18",
        "text": "Sind weitere Personen gefährdet?",
        "type": "choice",
        "order": 9738,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_19": {
        "id": "arbeitsunfall_19",
        "text": "Bestehen Rauch/Gas/Dämpfe?",
        "type": "choice",
        "order": 9739,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_20": {
        "id": "arbeitsunfall_20",
        "text": "Besteht Absturz aus Höhe?",
        "type": "choice",
        "order": 9740,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_21": {
        "id": "arbeitsunfall_21",
        "text": "Besteht Quetsch-/Einklemmmechanismus?",
        "type": "choice",
        "order": 9741,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_22": {
        "id": "arbeitsunfall_22",
        "text": "Besteht Stromdurchtritt/-kontakt?",
        "type": "choice",
        "order": 9742,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_23": {
        "id": "arbeitsunfall_23",
        "text": "Besteht Kontakt mit heißem Material?",
        "type": "choice",
        "order": 9743,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_24": {
        "id": "arbeitsunfall_24",
        "text": "Besteht eine Maschinenverletzung?",
        "type": "choice",
        "order": 9744,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_25": {
        "id": "arbeitsunfall_25",
        "text": "Ist der Rettungsweg frei?",
        "type": "choice",
        "order": 9745,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "arbeitsunfall_26": {
        "id": "arbeitsunfall_26",
        "text": "Wie entwickelt sich die Lage?",
        "type": "choice",
        "order": 9746,
        "options": [
          "stabil",
          "zunehmend kritisch",
          "gleichbleibend",
          "Gefahr weiterhin aktiv",
          "unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "bauch_ileus_1": {
        "id": "bauch_ileus_1",
        "text": "Welche Aussage passt zum Stuhlgang/Windabgang?",
        "type": "choice",
        "order": 2510,
        "options": [
          "Kein Stuhl und keine Winde",
          "Kein Stuhl, Winde gehen noch ab",
          "Stuhlgang möglich",
          "Unbekannt"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_19",
            "value": "Ja"
          }
        ]
      },
      "bauch_ileus_2": {
        "id": "bauch_ileus_2",
        "text": "Besteht stark aufgeblähter Bauch?",
        "type": "choice",
        "order": 2520,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_19",
            "value": "Ja"
          }
        ]
      },
      "bauch_ileus_3": {
        "id": "bauch_ileus_3",
        "text": "Ist das Erbrechen wiederholt oder fäkal wirkend?",
        "type": "choice",
        "order": 2530,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_19",
            "value": "Ja"
          }
        ]
      },
      "bauch_ileus_4": {
        "id": "bauch_ileus_4",
        "text": "Gab es frühere Bauchoperationen?",
        "type": "choice",
        "order": 2540,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_19",
            "value": "Ja"
          }
        ]
      },
      "bauch_ileus_5": {
        "id": "bauch_ileus_5",
        "text": "Besteht ein bekannter Leisten-/Narbenbruch?",
        "type": "choice",
        "order": 2550,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_19",
            "value": "Ja"
          }
        ]
      },
      "bauch_ileus_6": {
        "id": "bauch_ileus_6",
        "text": "Sind die Schmerzen kolikartig und wellenförmig?",
        "type": "choice",
        "order": 2560,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_19",
            "value": "Ja"
          }
        ]
      },
      "bauch_ileus_7": {
        "id": "bauch_ileus_7",
        "text": "Besteht der Verdacht auf Ileus/Darmverschluss?",
        "type": "choice",
        "order": 2570,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_19",
            "value": "Ja"
          }
        ]
      },
      "bauch_ileus_8": {
        "id": "bauch_ileus_8",
        "text": "Besteht nach sehr großer Menge Orangen/Mandarinen eine ausgeprägte Obstipation oder Bauchdistension?",
        "type": "choice",
        "order": 2580,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_19",
            "value": "Ja"
          }
        ]
      },
      "bauch_ileus_9": {
        "id": "bauch_ileus_9",
        "text": "Wurde bereits ein Abführmittel eingenommen?",
        "type": "choice",
        "order": 2590,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_19",
            "value": "Ja"
          }
        ]
      },
      "bauch_ileus_10": {
        "id": "bauch_ileus_10",
        "text": "Hat sich der Zustand seit Beginn deutlich verschlechtert?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 4210,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Darm/Verstopfung/Ileusverdacht"
          }
        ]
      },
      "vergiftung_pantherina_1": {
        "id": "vergiftung_pantherina_1",
        "text": "Wann wurden Pilze ungefähr gegessen?",
        "type": "choice",
        "order": 3510,
        "options": [
          "< 30 Minuten",
          "30 Minuten–2 Stunden",
          "2–6 Stunden",
          "> 6 Stunden",
          "unbekannt"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_12",
            "value": "Ja"
          }
        ]
      },
      "vergiftung_pantherina_2": {
        "id": "vergiftung_pantherina_2",
        "text": "Handelte es sich möglicherweise um Fliegenpilz/Pantherpilz?",
        "type": "choice",
        "order": 3520,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_12",
            "value": "Ja"
          }
        ]
      },
      "vergiftung_pantherina_3": {
        "id": "vergiftung_pantherina_3",
        "text": "Bestehen Schwindel, Verwirrtheit oder Halluzinationen?",
        "type": "choice",
        "order": 3530,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_12",
            "value": "Ja"
          }
        ]
      },
      "vergiftung_pantherina_4": {
        "id": "vergiftung_pantherina_4",
        "text": "Bestehen wechselnde Unruhe und Müdigkeit/Benommenheit?",
        "type": "choice",
        "order": 3540,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_12",
            "value": "Ja"
          }
        ]
      },
      "vergiftung_pantherina_5": {
        "id": "vergiftung_pantherina_5",
        "text": "Bestehen Zuckungen/Krampfanfälle?",
        "type": "choice",
        "order": 3550,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_12",
            "value": "Ja"
          }
        ]
      },
      "vergiftung_pantherina_6": {
        "id": "vergiftung_pantherina_6",
        "text": "Sind die Pupillen auffällig weit oder besteht Sehstörung?",
        "type": "choice",
        "order": 3560,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_12",
            "value": "Ja"
          }
        ]
      },
      "vergiftung_pantherina_7": {
        "id": "vergiftung_pantherina_7",
        "text": "Besteht Atemdepression oder ungewöhnlich langsame Atmung?",
        "type": "choice",
        "order": 3570,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_12",
            "value": "Ja"
          }
        ]
      },
      "vergiftung_pantherina_8": {
        "id": "vergiftung_pantherina_8",
        "text": "Bestehen Übelkeit/Erbrechen/Bauchbeschwerden?",
        "type": "choice",
        "order": 3580,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_12",
            "value": "Ja"
          }
        ]
      },
      "vergiftung_pantherina_9": {
        "id": "vergiftung_pantherina_9",
        "text": "Sind Pilzreste oder Verpackung vorhanden?",
        "type": "choice",
        "order": 3590,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_12",
            "value": "Ja"
          }
        ]
      },
      "vergiftung_pantherina_10": {
        "id": "vergiftung_pantherina_10",
        "text": "Sind weitere Personen nach derselben Mahlzeit betroffen?",
        "type": "choice",
        "order": 3600,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_12",
            "value": "Ja"
          }
        ]
      },
      "allergie_sub": {
        "id": "allergie_sub",
        "text": "Was war der wahrscheinlichste Auslöser?",
        "type": "choice",
        "order": 600,
        "options": [
          "Lebensmittel",
          "Medikament",
          "Insektenstich/-biss",
          "Kontaktstoff/Chemikalie",
          "Unbekannt"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Allergie / Anaphylaxie"
      },
      "atem_sub": {
        "id": "atem_sub",
        "text": "Welche Atemsituation steht im Vordergrund?",
        "type": "choice",
        "order": 601,
        "options": [
          "Asthma/COPD",
          "Infekt",
          "Fremdkörper/Aspiration",
          "Allergie",
          "Herz-/Lungenproblem",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Atemstörung"
      },
      "bauch_sub": {
        "id": "bauch_sub",
        "text": "Welcher Bereich steht im Vordergrund?",
        "type": "choice",
        "order": 602,
        "options": [
          "Oberbauch",
          "Unterbauch",
          "rechte Seite",
          "linke Seite",
          "diffus/ganz Bauch",
          "Darm/Verstopfung/Ileusverdacht",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bauchschmerzen"
      },
      "bewusstsein_sub": {
        "id": "bewusstsein_sub",
        "text": "Welche Bewusstseinsveränderung steht im Vordergrund?",
        "type": "choice",
        "order": 603,
        "options": [
          "Somnolenz/Schläfrigkeit",
          "Verwirrtheit",
          "Bewusstlosigkeit",
          "Wesensveränderung",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Bewusstseinsstörung / Wesensveränderung"
      },
      "brust_sub": {
        "id": "brust_sub",
        "text": "Welcher Brustschmerzcharakter passt am ehesten?",
        "type": "choice",
        "order": 604,
        "options": [
          "Druck/Enge",
          "Stechend",
          "Reißend",
          "Brennend",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Brustschmerzen"
      },
      "erkrankung_sub": {
        "id": "erkrankung_sub",
        "text": "Welche Beschwerden stehen im Vordergrund?",
        "type": "choice",
        "order": 605,
        "options": [
          "Infekt/Fieber",
          "Magen-Darm",
          "Kreislauf",
          "Allgemeine Schwäche",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Erkrankung / medizinische Hilfeleistung"
      },
      "geburt_sub": {
        "id": "geburt_sub",
        "text": "Welche geburtshilfliche Situation steht im Vordergrund?",
        "type": "choice",
        "order": 606,
        "options": [
          "Wehen/Geburtsbeginn",
          "Fruchtwasserabgang",
          "Blutung",
          "Geburt unmittelbar",
          "Beschwerden nach Geburt",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Geburt / Schwangerschaft"
      },
      "neuro_sub": {
        "id": "neuro_sub",
        "text": "Welches neurologische Leitsymptom steht im Vordergrund?",
        "type": "choice",
        "order": 607,
        "options": [
          "Lähmung/Kraftverlust",
          "Sprache",
          "Gesicht",
          "Sehen",
          "Gefühl/Taubheit",
          "Gleichgewicht",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
      },
      "herzrhythmus_sub": {
        "id": "herzrhythmus_sub",
        "text": "Welche Rhythmusstörung wird beschrieben?",
        "type": "choice",
        "order": 608,
        "options": [
          "Herzrasen",
          "Herzstolpern",
          "sehr langsamer Puls",
          "unregelmäßiger Puls",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Herzrhythmusstörungen"
      },
      "hitze_sub": {
        "id": "hitze_sub",
        "text": "Welches Problem steht im Vordergrund?",
        "type": "choice",
        "order": 609,
        "options": [
          "Überhitzung",
          "Unterkühlung",
          "Kälteexposition",
          "Hitzekollaps",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "kollaps_sub": {
        "id": "kollaps_sub",
        "text": "Wie wird das Ereignis beschrieben?",
        "type": "choice",
        "order": 610,
        "options": [
          "kurze Ohnmacht",
          "länger bewusstlos",
          "Beinahe-Ohnmacht",
          "wiederholter Kollaps",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kopf_sub": {
        "id": "kopf_sub",
        "text": "Welcher Kopfschmerztyp wird beschrieben?",
        "type": "choice",
        "order": 611,
        "options": [
          "plötzlich maximal",
          "bekannte Migräne",
          "neu/ungewohnt",
          "nach Trauma",
          "mit Fieber/Nackensteife",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "krampf_sub": {
        "id": "krampf_sub",
        "text": "Welche Krampfsituation liegt vor?",
        "type": "choice",
        "order": 612,
        "options": [
          "aktiver Krampf",
          "nach Krampf",
          "wiederholte Krämpfe",
          "Fieberkrampf",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "psyche_sub": {
        "id": "psyche_sub",
        "text": "Welche Situation steht im Vordergrund?",
        "type": "choice",
        "order": 613,
        "options": [
          "Suizidgedanken/-absicht",
          "Psychose/Verwirrtheit",
          "Aggression/Fremdgefährdung",
          "Panik/Angst",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "schmerz_sub": {
        "id": "schmerz_sub",
        "text": "Wo befindet sich der Schmerz hauptsächlich?",
        "type": "choice",
        "order": 614,
        "options": [
          "Kopf",
          "Brust",
          "Bauch",
          "Rücken",
          "Extremität",
          "Sonstige/unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Sonstige Schmerzen"
      },
      "unklar_sub": {
        "id": "unklar_sub",
        "text": "Was lässt sich aktuell am ehesten einordnen?",
        "type": "choice",
        "order": 615,
        "options": [
          "medizinisch",
          "Verletzung/Trauma",
          "Vergiftung",
          "neurologisch",
          "unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Unklares Geschehen"
      },
      "verletzung_sub": {
        "id": "verletzung_sub",
        "text": "Welche Verletzungsart steht im Vordergrund?",
        "type": "choice",
        "order": 617,
        "options": [
          "Kopf",
          "Brustkorb",
          "Bauch/Becken",
          "Extremität",
          "Wirbelsäule",
          "offene Wunde",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Verletzung"
      },
      "arbeitsunfall_sub": {
        "id": "arbeitsunfall_sub",
        "text": "Welche Unfallart steht im Vordergrund?",
        "type": "choice",
        "order": 618,
        "options": [
          "Maschine/Quetschung",
          "Sturz",
          "Strom",
          "Chemikalie",
          "Verbrennung",
          "Unklar"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Arbeits- / Betriebs- / Schulunfall"
      },
      "allergie_t1_1": {
        "id": "allergie_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 5021,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Lebensmittel"
          }
        ]
      },
      "allergie_t1_2": {
        "id": "allergie_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 5022,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Lebensmittel"
          }
        ]
      },
      "allergie_t1_3": {
        "id": "allergie_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 5023,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Lebensmittel"
          }
        ]
      },
      "allergie_t2_1": {
        "id": "allergie_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 5041,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Medikament"
          }
        ]
      },
      "allergie_t2_2": {
        "id": "allergie_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 5042,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Medikament"
          }
        ]
      },
      "allergie_t2_3": {
        "id": "allergie_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 5043,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Medikament"
          }
        ]
      },
      "allergie_t3_1": {
        "id": "allergie_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 5061,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Insektenstich/-biss"
          }
        ]
      },
      "allergie_t3_2": {
        "id": "allergie_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 5062,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Insektenstich/-biss"
          }
        ]
      },
      "allergie_t3_3": {
        "id": "allergie_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 5063,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Insektenstich/-biss"
          }
        ]
      },
      "allergie_t4_1": {
        "id": "allergie_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 5081,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Kontaktstoff/Chemikalie"
          }
        ]
      },
      "allergie_t4_2": {
        "id": "allergie_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 5082,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Kontaktstoff/Chemikalie"
          }
        ]
      },
      "allergie_t4_3": {
        "id": "allergie_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 5083,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Kontaktstoff/Chemikalie"
          }
        ]
      },
      "allergie_t5_1": {
        "id": "allergie_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 5101,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Unbekannt"
          }
        ]
      },
      "allergie_t5_2": {
        "id": "allergie_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 5102,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Unbekannt"
          }
        ]
      },
      "allergie_t5_3": {
        "id": "allergie_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 5103,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Allergie / Anaphylaxie"
          },
          {
            "questionId": "allergie_sub",
            "value": "Unbekannt"
          }
        ]
      },
      "atem_t1_1": {
        "id": "atem_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 5521,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Asthma/COPD"
          }
        ]
      },
      "atem_t1_2": {
        "id": "atem_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 5522,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Asthma/COPD"
          }
        ]
      },
      "atem_t1_3": {
        "id": "atem_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 5523,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Asthma/COPD"
          }
        ]
      },
      "atem_t2_1": {
        "id": "atem_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 5541,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Infekt"
          }
        ]
      },
      "atem_t2_2": {
        "id": "atem_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 5542,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Infekt"
          }
        ]
      },
      "atem_t2_3": {
        "id": "atem_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 5543,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Infekt"
          }
        ]
      },
      "atem_t3_1": {
        "id": "atem_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 5561,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Fremdkörper/Aspiration"
          }
        ]
      },
      "atem_t3_2": {
        "id": "atem_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 5562,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Fremdkörper/Aspiration"
          }
        ]
      },
      "atem_t3_3": {
        "id": "atem_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 5563,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Fremdkörper/Aspiration"
          }
        ]
      },
      "atem_t4_1": {
        "id": "atem_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 5581,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Allergie"
          }
        ]
      },
      "atem_t4_2": {
        "id": "atem_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 5582,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Allergie"
          }
        ]
      },
      "atem_t4_3": {
        "id": "atem_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 5583,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Allergie"
          }
        ]
      },
      "atem_t5_1": {
        "id": "atem_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 5601,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Herz-/Lungenproblem"
          }
        ]
      },
      "atem_t5_2": {
        "id": "atem_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 5602,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Herz-/Lungenproblem"
          }
        ]
      },
      "atem_t5_3": {
        "id": "atem_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 5603,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Herz-/Lungenproblem"
          }
        ]
      },
      "atem_t6_1": {
        "id": "atem_t6_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 5621,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Unklar"
          }
        ]
      },
      "atem_t6_2": {
        "id": "atem_t6_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 5622,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Unklar"
          }
        ]
      },
      "atem_t6_3": {
        "id": "atem_t6_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 5623,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Atemstörung"
          },
          {
            "questionId": "atem_sub",
            "value": "Unklar"
          }
        ]
      },
      "bauch_t1_1": {
        "id": "bauch_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 6021,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Oberbauch"
          }
        ]
      },
      "bauch_t1_2": {
        "id": "bauch_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 6022,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Oberbauch"
          }
        ]
      },
      "bauch_t1_3": {
        "id": "bauch_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 6023,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Oberbauch"
          }
        ]
      },
      "bauch_t2_1": {
        "id": "bauch_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 6041,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Unterbauch"
          }
        ]
      },
      "bauch_t2_2": {
        "id": "bauch_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 6042,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Unterbauch"
          }
        ]
      },
      "bauch_t2_3": {
        "id": "bauch_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 6043,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Unterbauch"
          }
        ]
      },
      "bauch_t3_1": {
        "id": "bauch_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 6061,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "rechte Seite"
          }
        ]
      },
      "bauch_t3_2": {
        "id": "bauch_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 6062,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "rechte Seite"
          }
        ]
      },
      "bauch_t3_3": {
        "id": "bauch_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 6063,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "rechte Seite"
          }
        ]
      },
      "bauch_t4_1": {
        "id": "bauch_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 6081,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "linke Seite"
          }
        ]
      },
      "bauch_t4_2": {
        "id": "bauch_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 6082,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "linke Seite"
          }
        ]
      },
      "bauch_t4_3": {
        "id": "bauch_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 6083,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "linke Seite"
          }
        ]
      },
      "bauch_t5_1": {
        "id": "bauch_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 6101,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "diffus/ganz Bauch"
          }
        ]
      },
      "bauch_t5_2": {
        "id": "bauch_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 6102,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "diffus/ganz Bauch"
          }
        ]
      },
      "bauch_t5_3": {
        "id": "bauch_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 6103,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "diffus/ganz Bauch"
          }
        ]
      },
      "bauch_t6_1": {
        "id": "bauch_t6_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 6121,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Darm/Verstopfung/Ileusverdacht"
          }
        ]
      },
      "bauch_t6_2": {
        "id": "bauch_t6_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 6122,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Darm/Verstopfung/Ileusverdacht"
          }
        ]
      },
      "bauch_t6_3": {
        "id": "bauch_t6_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 6123,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Darm/Verstopfung/Ileusverdacht"
          }
        ]
      },
      "bauch_t7_1": {
        "id": "bauch_t7_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 6141,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Unklar"
          }
        ]
      },
      "bauch_t7_2": {
        "id": "bauch_t7_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 6142,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Unklar"
          }
        ]
      },
      "bauch_t7_3": {
        "id": "bauch_t7_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 6143,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Unklar"
          }
        ]
      },
      "bewusstsein_t1_1": {
        "id": "bewusstsein_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 6521,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Somnolenz/Schläfrigkeit"
          }
        ]
      },
      "bewusstsein_t1_2": {
        "id": "bewusstsein_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 6522,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Somnolenz/Schläfrigkeit"
          }
        ]
      },
      "bewusstsein_t1_3": {
        "id": "bewusstsein_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 6523,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Somnolenz/Schläfrigkeit"
          }
        ]
      },
      "bewusstsein_t2_1": {
        "id": "bewusstsein_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 6541,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Verwirrtheit"
          }
        ]
      },
      "bewusstsein_t2_2": {
        "id": "bewusstsein_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 6542,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Verwirrtheit"
          }
        ]
      },
      "bewusstsein_t2_3": {
        "id": "bewusstsein_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 6543,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Verwirrtheit"
          }
        ]
      },
      "bewusstsein_t3_1": {
        "id": "bewusstsein_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 6561,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Bewusstlosigkeit"
          }
        ]
      },
      "bewusstsein_t3_2": {
        "id": "bewusstsein_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 6562,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Bewusstlosigkeit"
          }
        ]
      },
      "bewusstsein_t3_3": {
        "id": "bewusstsein_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 6563,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Bewusstlosigkeit"
          }
        ]
      },
      "bewusstsein_t4_1": {
        "id": "bewusstsein_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 6581,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Wesensveränderung"
          }
        ]
      },
      "bewusstsein_t4_2": {
        "id": "bewusstsein_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 6582,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Wesensveränderung"
          }
        ]
      },
      "bewusstsein_t4_3": {
        "id": "bewusstsein_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 6583,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Wesensveränderung"
          }
        ]
      },
      "bewusstsein_t5_1": {
        "id": "bewusstsein_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 6601,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Unklar"
          }
        ]
      },
      "bewusstsein_t5_2": {
        "id": "bewusstsein_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 6602,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Unklar"
          }
        ]
      },
      "bewusstsein_t5_3": {
        "id": "bewusstsein_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 6603,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bewusstseinsstörung / Wesensveränderung"
          },
          {
            "questionId": "bewusstsein_sub",
            "value": "Unklar"
          }
        ]
      },
      "brust_t1_1": {
        "id": "brust_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 7521,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Druck/Enge"
          }
        ]
      },
      "brust_t1_2": {
        "id": "brust_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 7522,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Druck/Enge"
          }
        ]
      },
      "brust_t1_3": {
        "id": "brust_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 7523,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Druck/Enge"
          }
        ]
      },
      "brust_t2_1": {
        "id": "brust_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 7541,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Stechend"
          }
        ]
      },
      "brust_t2_2": {
        "id": "brust_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 7542,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Stechend"
          }
        ]
      },
      "brust_t2_3": {
        "id": "brust_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 7543,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Stechend"
          }
        ]
      },
      "brust_t3_1": {
        "id": "brust_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 7561,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Reißend"
          }
        ]
      },
      "brust_t3_2": {
        "id": "brust_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 7562,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Reißend"
          }
        ]
      },
      "brust_t3_3": {
        "id": "brust_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 7563,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Reißend"
          }
        ]
      },
      "brust_t4_1": {
        "id": "brust_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 7581,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Brennend"
          }
        ]
      },
      "brust_t4_2": {
        "id": "brust_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 7582,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Brennend"
          }
        ]
      },
      "brust_t4_3": {
        "id": "brust_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 7583,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Brennend"
          }
        ]
      },
      "brust_t5_1": {
        "id": "brust_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 7601,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Unklar"
          }
        ]
      },
      "brust_t5_2": {
        "id": "brust_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 7602,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Unklar"
          }
        ]
      },
      "brust_t5_3": {
        "id": "brust_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 7603,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Brustschmerzen"
          },
          {
            "questionId": "brust_sub",
            "value": "Unklar"
          }
        ]
      },
      "erkrankung_t1_1": {
        "id": "erkrankung_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 8021,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Infekt/Fieber"
          }
        ]
      },
      "erkrankung_t1_2": {
        "id": "erkrankung_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 8022,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Infekt/Fieber"
          }
        ]
      },
      "erkrankung_t1_3": {
        "id": "erkrankung_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 8023,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Infekt/Fieber"
          }
        ]
      },
      "erkrankung_t2_1": {
        "id": "erkrankung_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 8041,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Magen-Darm"
          }
        ]
      },
      "erkrankung_t2_2": {
        "id": "erkrankung_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 8042,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Magen-Darm"
          }
        ]
      },
      "erkrankung_t2_3": {
        "id": "erkrankung_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 8043,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Magen-Darm"
          }
        ]
      },
      "erkrankung_t3_1": {
        "id": "erkrankung_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 8061,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Kreislauf"
          }
        ]
      },
      "erkrankung_t3_2": {
        "id": "erkrankung_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 8062,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Kreislauf"
          }
        ]
      },
      "erkrankung_t3_3": {
        "id": "erkrankung_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 8063,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Kreislauf"
          }
        ]
      },
      "erkrankung_t4_1": {
        "id": "erkrankung_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 8081,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Allgemeine Schwäche"
          }
        ]
      },
      "erkrankung_t4_2": {
        "id": "erkrankung_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 8082,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Allgemeine Schwäche"
          }
        ]
      },
      "erkrankung_t4_3": {
        "id": "erkrankung_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 8083,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Allgemeine Schwäche"
          }
        ]
      },
      "erkrankung_t5_1": {
        "id": "erkrankung_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 8101,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Unklar"
          }
        ]
      },
      "erkrankung_t5_2": {
        "id": "erkrankung_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 8102,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Unklar"
          }
        ]
      },
      "erkrankung_t5_3": {
        "id": "erkrankung_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 8103,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Erkrankung / medizinische Hilfeleistung"
          },
          {
            "questionId": "erkrankung_sub",
            "value": "Unklar"
          }
        ]
      },
      "geburt_t1_1": {
        "id": "geburt_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 8521,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Wehen/Geburtsbeginn"
          }
        ]
      },
      "geburt_t1_2": {
        "id": "geburt_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 8522,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Wehen/Geburtsbeginn"
          }
        ]
      },
      "geburt_t1_3": {
        "id": "geburt_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 8523,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Wehen/Geburtsbeginn"
          }
        ]
      },
      "geburt_t2_1": {
        "id": "geburt_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 8541,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Fruchtwasserabgang"
          }
        ]
      },
      "geburt_t2_2": {
        "id": "geburt_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 8542,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Fruchtwasserabgang"
          }
        ]
      },
      "geburt_t2_3": {
        "id": "geburt_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 8543,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Fruchtwasserabgang"
          }
        ]
      },
      "geburt_t3_1": {
        "id": "geburt_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 8561,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Blutung"
          }
        ]
      },
      "geburt_t3_2": {
        "id": "geburt_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 8562,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Blutung"
          }
        ]
      },
      "geburt_t3_3": {
        "id": "geburt_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 8563,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Blutung"
          }
        ]
      },
      "geburt_t4_1": {
        "id": "geburt_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 8581,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Geburt unmittelbar"
          }
        ]
      },
      "geburt_t4_2": {
        "id": "geburt_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 8582,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Geburt unmittelbar"
          }
        ]
      },
      "geburt_t4_3": {
        "id": "geburt_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 8583,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Geburt unmittelbar"
          }
        ]
      },
      "geburt_t5_1": {
        "id": "geburt_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 8601,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Beschwerden nach Geburt"
          }
        ]
      },
      "geburt_t5_2": {
        "id": "geburt_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 8602,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Beschwerden nach Geburt"
          }
        ]
      },
      "geburt_t5_3": {
        "id": "geburt_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 8603,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Beschwerden nach Geburt"
          }
        ]
      },
      "geburt_t6_1": {
        "id": "geburt_t6_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 8621,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Unklar"
          }
        ]
      },
      "geburt_t6_2": {
        "id": "geburt_t6_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 8622,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Unklar"
          }
        ]
      },
      "geburt_t6_3": {
        "id": "geburt_t6_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 8623,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Geburt / Schwangerschaft"
          },
          {
            "questionId": "geburt_sub",
            "value": "Unklar"
          }
        ]
      },
      "neuro_t1_1": {
        "id": "neuro_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 9021,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Lähmung/Kraftverlust"
          }
        ]
      },
      "neuro_t1_2": {
        "id": "neuro_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 9022,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Lähmung/Kraftverlust"
          }
        ]
      },
      "neuro_t1_3": {
        "id": "neuro_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 9023,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Lähmung/Kraftverlust"
          }
        ]
      },
      "neuro_t2_1": {
        "id": "neuro_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 9041,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Sprache"
          }
        ]
      },
      "neuro_t2_2": {
        "id": "neuro_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 9042,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Sprache"
          }
        ]
      },
      "neuro_t2_3": {
        "id": "neuro_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 9043,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Sprache"
          }
        ]
      },
      "neuro_t3_1": {
        "id": "neuro_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 9061,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Gesicht"
          }
        ]
      },
      "neuro_t3_2": {
        "id": "neuro_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 9062,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Gesicht"
          }
        ]
      },
      "neuro_t3_3": {
        "id": "neuro_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 9063,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Gesicht"
          }
        ]
      },
      "neuro_t4_1": {
        "id": "neuro_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 9081,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Sehen"
          }
        ]
      },
      "neuro_t4_2": {
        "id": "neuro_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 9082,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Sehen"
          }
        ]
      },
      "neuro_t4_3": {
        "id": "neuro_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 9083,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Sehen"
          }
        ]
      },
      "neuro_t5_1": {
        "id": "neuro_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 9101,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Gefühl/Taubheit"
          }
        ]
      },
      "neuro_t5_2": {
        "id": "neuro_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 9102,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Gefühl/Taubheit"
          }
        ]
      },
      "neuro_t5_3": {
        "id": "neuro_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 9103,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Gefühl/Taubheit"
          }
        ]
      },
      "neuro_t6_1": {
        "id": "neuro_t6_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 9121,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Gleichgewicht"
          }
        ]
      },
      "neuro_t6_2": {
        "id": "neuro_t6_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 9122,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Gleichgewicht"
          }
        ]
      },
      "neuro_t6_3": {
        "id": "neuro_t6_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 9123,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Gleichgewicht"
          }
        ]
      },
      "neuro_t7_1": {
        "id": "neuro_t7_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 9141,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Unklar"
          }
        ]
      },
      "neuro_t7_2": {
        "id": "neuro_t7_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 9142,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Unklar"
          }
        ]
      },
      "neuro_t7_3": {
        "id": "neuro_t7_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 9143,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Gefühlsstörung / Lähmung / Sprache / Sehstörung"
          },
          {
            "questionId": "neuro_sub",
            "value": "Unklar"
          }
        ]
      },
      "herzrhythmus_t1_1": {
        "id": "herzrhythmus_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 9521,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "Herzrasen"
          }
        ]
      },
      "herzrhythmus_t1_2": {
        "id": "herzrhythmus_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 9522,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "Herzrasen"
          }
        ]
      },
      "herzrhythmus_t1_3": {
        "id": "herzrhythmus_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 9523,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "Herzrasen"
          }
        ]
      },
      "herzrhythmus_t2_1": {
        "id": "herzrhythmus_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 9541,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "Herzstolpern"
          }
        ]
      },
      "herzrhythmus_t2_2": {
        "id": "herzrhythmus_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 9542,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "Herzstolpern"
          }
        ]
      },
      "herzrhythmus_t2_3": {
        "id": "herzrhythmus_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 9543,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "Herzstolpern"
          }
        ]
      },
      "herzrhythmus_t3_1": {
        "id": "herzrhythmus_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 9561,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "sehr langsamer Puls"
          }
        ]
      },
      "herzrhythmus_t3_2": {
        "id": "herzrhythmus_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 9562,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "sehr langsamer Puls"
          }
        ]
      },
      "herzrhythmus_t3_3": {
        "id": "herzrhythmus_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 9563,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "sehr langsamer Puls"
          }
        ]
      },
      "herzrhythmus_t4_1": {
        "id": "herzrhythmus_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 9581,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "unregelmäßiger Puls"
          }
        ]
      },
      "herzrhythmus_t4_2": {
        "id": "herzrhythmus_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 9582,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "unregelmäßiger Puls"
          }
        ]
      },
      "herzrhythmus_t4_3": {
        "id": "herzrhythmus_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 9583,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "unregelmäßiger Puls"
          }
        ]
      },
      "herzrhythmus_t5_1": {
        "id": "herzrhythmus_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 9601,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "Unklar"
          }
        ]
      },
      "herzrhythmus_t5_2": {
        "id": "herzrhythmus_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 9602,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "Unklar"
          }
        ]
      },
      "herzrhythmus_t5_3": {
        "id": "herzrhythmus_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 9603,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Herzrhythmusstörungen"
          },
          {
            "questionId": "herzrhythmus_sub",
            "value": "Unklar"
          }
        ]
      },
      "hitze_t1_1": {
        "id": "hitze_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 10021,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Überhitzung"
          }
        ]
      },
      "hitze_t1_2": {
        "id": "hitze_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 10022,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Überhitzung"
          }
        ]
      },
      "hitze_t1_3": {
        "id": "hitze_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 10023,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Überhitzung"
          }
        ]
      },
      "hitze_t2_1": {
        "id": "hitze_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 10041,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Unterkühlung"
          }
        ]
      },
      "hitze_t2_2": {
        "id": "hitze_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 10042,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Unterkühlung"
          }
        ]
      },
      "hitze_t2_3": {
        "id": "hitze_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 10043,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Unterkühlung"
          }
        ]
      },
      "hitze_t3_1": {
        "id": "hitze_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 10061,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Kälteexposition"
          }
        ]
      },
      "hitze_t3_2": {
        "id": "hitze_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 10062,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Kälteexposition"
          }
        ]
      },
      "hitze_t3_3": {
        "id": "hitze_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 10063,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Kälteexposition"
          }
        ]
      },
      "hitze_t4_1": {
        "id": "hitze_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 10081,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Hitzekollaps"
          }
        ]
      },
      "hitze_t4_2": {
        "id": "hitze_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 10082,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Hitzekollaps"
          }
        ]
      },
      "hitze_t4_3": {
        "id": "hitze_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 10083,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Hitzekollaps"
          }
        ]
      },
      "hitze_t5_1": {
        "id": "hitze_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 10101,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Unklar"
          }
        ]
      },
      "hitze_t5_2": {
        "id": "hitze_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 10102,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Unklar"
          }
        ]
      },
      "hitze_t5_3": {
        "id": "hitze_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 10103,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Hitze- / Kälteprobleme"
          },
          {
            "questionId": "hitze_sub",
            "value": "Unklar"
          }
        ]
      },
      "kollaps_t1_1": {
        "id": "kollaps_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 10521,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "kurze Ohnmacht"
          }
        ]
      },
      "kollaps_t1_2": {
        "id": "kollaps_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 10522,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "kurze Ohnmacht"
          }
        ]
      },
      "kollaps_t1_3": {
        "id": "kollaps_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 10523,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "kurze Ohnmacht"
          }
        ]
      },
      "kollaps_t2_1": {
        "id": "kollaps_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 10541,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "länger bewusstlos"
          }
        ]
      },
      "kollaps_t2_2": {
        "id": "kollaps_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 10542,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "länger bewusstlos"
          }
        ]
      },
      "kollaps_t2_3": {
        "id": "kollaps_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 10543,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "länger bewusstlos"
          }
        ]
      },
      "kollaps_t3_1": {
        "id": "kollaps_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 10561,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "Beinahe-Ohnmacht"
          }
        ]
      },
      "kollaps_t3_2": {
        "id": "kollaps_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 10562,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "Beinahe-Ohnmacht"
          }
        ]
      },
      "kollaps_t3_3": {
        "id": "kollaps_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 10563,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "Beinahe-Ohnmacht"
          }
        ]
      },
      "kollaps_t4_1": {
        "id": "kollaps_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 10581,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "wiederholter Kollaps"
          }
        ]
      },
      "kollaps_t4_2": {
        "id": "kollaps_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 10582,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "wiederholter Kollaps"
          }
        ]
      },
      "kollaps_t4_3": {
        "id": "kollaps_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 10583,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "wiederholter Kollaps"
          }
        ]
      },
      "kollaps_t5_1": {
        "id": "kollaps_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 10601,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "Unklar"
          }
        ]
      },
      "kollaps_t5_2": {
        "id": "kollaps_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 10602,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "Unklar"
          }
        ]
      },
      "kollaps_t5_3": {
        "id": "kollaps_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 10603,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kollaps / Kreislaufstörung"
          },
          {
            "questionId": "kollaps_sub",
            "value": "Unklar"
          }
        ]
      },
      "kopf_t1_1": {
        "id": "kopf_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 11021,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "plötzlich maximal"
          }
        ]
      },
      "kopf_t1_2": {
        "id": "kopf_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 11022,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "plötzlich maximal"
          }
        ]
      },
      "kopf_t1_3": {
        "id": "kopf_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 11023,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "plötzlich maximal"
          }
        ]
      },
      "kopf_t2_1": {
        "id": "kopf_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 11041,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "bekannte Migräne"
          }
        ]
      },
      "kopf_t2_2": {
        "id": "kopf_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 11042,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "bekannte Migräne"
          }
        ]
      },
      "kopf_t2_3": {
        "id": "kopf_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 11043,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "bekannte Migräne"
          }
        ]
      },
      "kopf_t3_1": {
        "id": "kopf_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 11061,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "neu/ungewohnt"
          }
        ]
      },
      "kopf_t3_2": {
        "id": "kopf_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 11062,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "neu/ungewohnt"
          }
        ]
      },
      "kopf_t3_3": {
        "id": "kopf_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 11063,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "neu/ungewohnt"
          }
        ]
      },
      "kopf_t4_1": {
        "id": "kopf_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 11081,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "nach Trauma"
          }
        ]
      },
      "kopf_t4_2": {
        "id": "kopf_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 11082,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "nach Trauma"
          }
        ]
      },
      "kopf_t4_3": {
        "id": "kopf_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 11083,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "nach Trauma"
          }
        ]
      },
      "kopf_t5_1": {
        "id": "kopf_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 11101,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "mit Fieber/Nackensteife"
          }
        ]
      },
      "kopf_t5_2": {
        "id": "kopf_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 11102,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "mit Fieber/Nackensteife"
          }
        ]
      },
      "kopf_t5_3": {
        "id": "kopf_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 11103,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "mit Fieber/Nackensteife"
          }
        ]
      },
      "kopf_t6_1": {
        "id": "kopf_t6_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 11121,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "Unklar"
          }
        ]
      },
      "kopf_t6_2": {
        "id": "kopf_t6_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 11122,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "Unklar"
          }
        ]
      },
      "kopf_t6_3": {
        "id": "kopf_t6_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 11123,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Kopfschmerzen"
          },
          {
            "questionId": "kopf_sub",
            "value": "Unklar"
          }
        ]
      },
      "krampf_t1_1": {
        "id": "krampf_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 11521,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "aktiver Krampf"
          }
        ]
      },
      "krampf_t1_2": {
        "id": "krampf_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 11522,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "aktiver Krampf"
          }
        ]
      },
      "krampf_t1_3": {
        "id": "krampf_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 11523,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "aktiver Krampf"
          }
        ]
      },
      "krampf_t2_1": {
        "id": "krampf_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 11541,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "nach Krampf"
          }
        ]
      },
      "krampf_t2_2": {
        "id": "krampf_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 11542,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "nach Krampf"
          }
        ]
      },
      "krampf_t2_3": {
        "id": "krampf_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 11543,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "nach Krampf"
          }
        ]
      },
      "krampf_t3_1": {
        "id": "krampf_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 11561,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "wiederholte Krämpfe"
          }
        ]
      },
      "krampf_t3_2": {
        "id": "krampf_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 11562,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "wiederholte Krämpfe"
          }
        ]
      },
      "krampf_t3_3": {
        "id": "krampf_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 11563,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "wiederholte Krämpfe"
          }
        ]
      },
      "krampf_t4_1": {
        "id": "krampf_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 11581,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "Fieberkrampf"
          }
        ]
      },
      "krampf_t4_2": {
        "id": "krampf_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 11582,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "Fieberkrampf"
          }
        ]
      },
      "krampf_t4_3": {
        "id": "krampf_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 11583,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "Fieberkrampf"
          }
        ]
      },
      "krampf_t5_1": {
        "id": "krampf_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 11601,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "Unklar"
          }
        ]
      },
      "krampf_t5_2": {
        "id": "krampf_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 11602,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "Unklar"
          }
        ]
      },
      "krampf_t5_3": {
        "id": "krampf_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 11603,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Krampfanfall"
          },
          {
            "questionId": "krampf_sub",
            "value": "Unklar"
          }
        ]
      },
      "psyche_t1_1": {
        "id": "psyche_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 12021,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Suizidgedanken/-absicht"
          }
        ]
      },
      "psyche_t1_2": {
        "id": "psyche_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 12022,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Suizidgedanken/-absicht"
          }
        ]
      },
      "psyche_t1_3": {
        "id": "psyche_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 12023,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Suizidgedanken/-absicht"
          }
        ]
      },
      "psyche_t2_1": {
        "id": "psyche_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 12041,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Psychose/Verwirrtheit"
          }
        ]
      },
      "psyche_t2_2": {
        "id": "psyche_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 12042,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Psychose/Verwirrtheit"
          }
        ]
      },
      "psyche_t2_3": {
        "id": "psyche_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 12043,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Psychose/Verwirrtheit"
          }
        ]
      },
      "psyche_t3_1": {
        "id": "psyche_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 12061,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Aggression/Fremdgefährdung"
          }
        ]
      },
      "psyche_t3_2": {
        "id": "psyche_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 12062,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Aggression/Fremdgefährdung"
          }
        ]
      },
      "psyche_t3_3": {
        "id": "psyche_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 12063,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Aggression/Fremdgefährdung"
          }
        ]
      },
      "psyche_t4_1": {
        "id": "psyche_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 12081,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Panik/Angst"
          }
        ]
      },
      "psyche_t4_2": {
        "id": "psyche_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 12082,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Panik/Angst"
          }
        ]
      },
      "psyche_t4_3": {
        "id": "psyche_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 12083,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Panik/Angst"
          }
        ]
      },
      "psyche_t5_1": {
        "id": "psyche_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 12101,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Unklar"
          }
        ]
      },
      "psyche_t5_2": {
        "id": "psyche_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 12102,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Unklar"
          }
        ]
      },
      "psyche_t5_3": {
        "id": "psyche_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 12103,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Psychische Erkrankung / Suizid"
          },
          {
            "questionId": "psyche_sub",
            "value": "Unklar"
          }
        ]
      },
      "schmerz_t1_1": {
        "id": "schmerz_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 12521,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Kopf"
          }
        ]
      },
      "schmerz_t1_2": {
        "id": "schmerz_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 12522,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Kopf"
          }
        ]
      },
      "schmerz_t1_3": {
        "id": "schmerz_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 12523,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Kopf"
          }
        ]
      },
      "schmerz_t2_1": {
        "id": "schmerz_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 12541,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Brust"
          }
        ]
      },
      "schmerz_t2_2": {
        "id": "schmerz_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 12542,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Brust"
          }
        ]
      },
      "schmerz_t2_3": {
        "id": "schmerz_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 12543,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Brust"
          }
        ]
      },
      "schmerz_t3_1": {
        "id": "schmerz_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 12561,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Bauch"
          }
        ]
      },
      "schmerz_t3_2": {
        "id": "schmerz_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 12562,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Bauch"
          }
        ]
      },
      "schmerz_t3_3": {
        "id": "schmerz_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 12563,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Bauch"
          }
        ]
      },
      "schmerz_t4_1": {
        "id": "schmerz_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 12581,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Rücken"
          }
        ]
      },
      "schmerz_t4_2": {
        "id": "schmerz_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 12582,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Rücken"
          }
        ]
      },
      "schmerz_t4_3": {
        "id": "schmerz_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 12583,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Rücken"
          }
        ]
      },
      "schmerz_t5_1": {
        "id": "schmerz_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 12601,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Extremität"
          }
        ]
      },
      "schmerz_t5_2": {
        "id": "schmerz_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 12602,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Extremität"
          }
        ]
      },
      "schmerz_t5_3": {
        "id": "schmerz_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 12603,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Extremität"
          }
        ]
      },
      "schmerz_t6_1": {
        "id": "schmerz_t6_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 12621,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Sonstige/unklar"
          }
        ]
      },
      "schmerz_t6_2": {
        "id": "schmerz_t6_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 12622,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Sonstige/unklar"
          }
        ]
      },
      "schmerz_t6_3": {
        "id": "schmerz_t6_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 12623,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Sonstige Schmerzen"
          },
          {
            "questionId": "schmerz_sub",
            "value": "Sonstige/unklar"
          }
        ]
      },
      "unklar_t1_1": {
        "id": "unklar_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 13021,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "medizinisch"
          }
        ]
      },
      "unklar_t1_2": {
        "id": "unklar_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 13022,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "medizinisch"
          }
        ]
      },
      "unklar_t1_3": {
        "id": "unklar_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 13023,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "medizinisch"
          }
        ]
      },
      "unklar_t2_1": {
        "id": "unklar_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 13041,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "Verletzung/Trauma"
          }
        ]
      },
      "unklar_t2_2": {
        "id": "unklar_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 13042,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "Verletzung/Trauma"
          }
        ]
      },
      "unklar_t2_3": {
        "id": "unklar_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 13043,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "Verletzung/Trauma"
          }
        ]
      },
      "unklar_t3_1": {
        "id": "unklar_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 13061,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "Vergiftung"
          }
        ]
      },
      "unklar_t3_2": {
        "id": "unklar_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 13062,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "Vergiftung"
          }
        ]
      },
      "unklar_t3_3": {
        "id": "unklar_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 13063,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "Vergiftung"
          }
        ]
      },
      "unklar_t4_1": {
        "id": "unklar_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 13081,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "neurologisch"
          }
        ]
      },
      "unklar_t4_2": {
        "id": "unklar_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 13082,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "neurologisch"
          }
        ]
      },
      "unklar_t4_3": {
        "id": "unklar_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 13083,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "neurologisch"
          }
        ]
      },
      "unklar_t5_1": {
        "id": "unklar_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 13101,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "unklar"
          }
        ]
      },
      "unklar_t5_2": {
        "id": "unklar_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 13102,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "unklar"
          }
        ]
      },
      "unklar_t5_3": {
        "id": "unklar_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 13103,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Unklares Geschehen"
          },
          {
            "questionId": "unklar_sub",
            "value": "unklar"
          }
        ]
      },
      "verletzung_t1_1": {
        "id": "verletzung_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 14021,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Kopf"
          }
        ]
      },
      "verletzung_t1_2": {
        "id": "verletzung_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 14022,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Kopf"
          }
        ]
      },
      "verletzung_t1_3": {
        "id": "verletzung_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 14023,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Kopf"
          }
        ]
      },
      "verletzung_t2_1": {
        "id": "verletzung_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 14041,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Brustkorb"
          }
        ]
      },
      "verletzung_t2_2": {
        "id": "verletzung_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 14042,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Brustkorb"
          }
        ]
      },
      "verletzung_t2_3": {
        "id": "verletzung_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 14043,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Brustkorb"
          }
        ]
      },
      "verletzung_t3_1": {
        "id": "verletzung_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 14061,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Bauch/Becken"
          }
        ]
      },
      "verletzung_t3_2": {
        "id": "verletzung_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 14062,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Bauch/Becken"
          }
        ]
      },
      "verletzung_t3_3": {
        "id": "verletzung_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 14063,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Bauch/Becken"
          }
        ]
      },
      "verletzung_t4_1": {
        "id": "verletzung_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 14081,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Extremität"
          }
        ]
      },
      "verletzung_t4_2": {
        "id": "verletzung_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 14082,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Extremität"
          }
        ]
      },
      "verletzung_t4_3": {
        "id": "verletzung_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 14083,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Extremität"
          }
        ]
      },
      "verletzung_t5_1": {
        "id": "verletzung_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 14101,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Wirbelsäule"
          }
        ]
      },
      "verletzung_t5_2": {
        "id": "verletzung_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 14102,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Wirbelsäule"
          }
        ]
      },
      "verletzung_t5_3": {
        "id": "verletzung_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 14103,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Wirbelsäule"
          }
        ]
      },
      "verletzung_t6_1": {
        "id": "verletzung_t6_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 14121,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "offene Wunde"
          }
        ]
      },
      "verletzung_t6_2": {
        "id": "verletzung_t6_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 14122,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "offene Wunde"
          }
        ]
      },
      "verletzung_t6_3": {
        "id": "verletzung_t6_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 14123,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "offene Wunde"
          }
        ]
      },
      "verletzung_t7_1": {
        "id": "verletzung_t7_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 14141,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Unklar"
          }
        ]
      },
      "verletzung_t7_2": {
        "id": "verletzung_t7_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 14142,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Unklar"
          }
        ]
      },
      "verletzung_t7_3": {
        "id": "verletzung_t7_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 14143,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Verletzung"
          },
          {
            "questionId": "verletzung_sub",
            "value": "Unklar"
          }
        ]
      },
      "arbeitsunfall_t1_1": {
        "id": "arbeitsunfall_t1_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 14521,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Maschine/Quetschung"
          }
        ]
      },
      "arbeitsunfall_t1_2": {
        "id": "arbeitsunfall_t1_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 14522,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Maschine/Quetschung"
          }
        ]
      },
      "arbeitsunfall_t1_3": {
        "id": "arbeitsunfall_t1_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 14523,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Maschine/Quetschung"
          }
        ]
      },
      "arbeitsunfall_t2_1": {
        "id": "arbeitsunfall_t2_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 14541,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Sturz"
          }
        ]
      },
      "arbeitsunfall_t2_2": {
        "id": "arbeitsunfall_t2_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 14542,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Sturz"
          }
        ]
      },
      "arbeitsunfall_t2_3": {
        "id": "arbeitsunfall_t2_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 14543,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Sturz"
          }
        ]
      },
      "arbeitsunfall_t3_1": {
        "id": "arbeitsunfall_t3_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 14561,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Strom"
          }
        ]
      },
      "arbeitsunfall_t3_2": {
        "id": "arbeitsunfall_t3_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 14562,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Strom"
          }
        ]
      },
      "arbeitsunfall_t3_3": {
        "id": "arbeitsunfall_t3_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 14563,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Strom"
          }
        ]
      },
      "arbeitsunfall_t4_1": {
        "id": "arbeitsunfall_t4_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 14581,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Chemikalie"
          }
        ]
      },
      "arbeitsunfall_t4_2": {
        "id": "arbeitsunfall_t4_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 14582,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Chemikalie"
          }
        ]
      },
      "arbeitsunfall_t4_3": {
        "id": "arbeitsunfall_t4_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 14583,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Chemikalie"
          }
        ]
      },
      "arbeitsunfall_t5_1": {
        "id": "arbeitsunfall_t5_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 14601,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Verbrennung"
          }
        ]
      },
      "arbeitsunfall_t5_2": {
        "id": "arbeitsunfall_t5_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 14602,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Verbrennung"
          }
        ]
      },
      "arbeitsunfall_t5_3": {
        "id": "arbeitsunfall_t5_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 14603,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Verbrennung"
          }
        ]
      },
      "arbeitsunfall_t6_1": {
        "id": "arbeitsunfall_t6_1",
        "text": "Bestehen aktuell starke Beschwerden in diesem Bereich?",
        "type": "choice",
        "order": 14621,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Unklar"
          }
        ]
      },
      "arbeitsunfall_t6_2": {
        "id": "arbeitsunfall_t6_2",
        "text": "Begann das Problem plötzlich?",
        "type": "choice",
        "order": 14622,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Unklar"
          }
        ]
      },
      "arbeitsunfall_t6_3": {
        "id": "arbeitsunfall_t6_3",
        "text": "Hat sich der Zustand seit Beginn verschlechtert?",
        "type": "choice",
        "order": 14623,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Arbeits- / Betriebs- / Schulunfall"
          },
          {
            "questionId": "arbeitsunfall_sub",
            "value": "Unklar"
          }
        ]
      },
      "verdachtsdiagnose": {
        "id": "verdachtsdiagnose",
        "text": "Welche Verdachtsdiagnose / vermutete Ursache soll übernommen werden?",
        "type": "text",
        "order": 999999,
        "allowEmpty": true,
        "placeholder": "Vorschlag übernehmen, ändern oder leer lassen …"
      },
      "blut_ogib_01": {
        "id": "blut_ogib_01",
        "text": "Ist der Stuhl schwarz/teerartig?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8101,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Obere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ogib_02": {
        "id": "blut_ogib_02",
        "text": "Bestehen Oberbauchschmerzen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8102,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Obere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ogib_03": {
        "id": "blut_ogib_03",
        "text": "Besteht eine bekannte Magenerkrankung?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8103,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Obere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ogib_04": {
        "id": "blut_ogib_04",
        "text": "Besteht eine bekannte Leberzirrhose?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8104,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Obere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ogib_05": {
        "id": "blut_ogib_05",
        "text": "Sind Ösophagus-/Magenvarizen bekannt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8105,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Obere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ogib_06": {
        "id": "blut_ogib_06",
        "text": "Gab es starkes Würgen/Erbrechen vor Blutbeginn?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8106,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Obere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ogib_07": {
        "id": "blut_ogib_07",
        "text": "Nimmt die Person Blutverdünner?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8107,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Obere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ogib_08": {
        "id": "blut_ogib_08",
        "text": "Bestehen Schwindel/Kollapszeichen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8108,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Obere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ogib_09": {
        "id": "blut_ogib_09",
        "text": "Ist die Blutung aktuell zunehmend?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8109,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Obere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ogib_10": {
        "id": "blut_ogib_10",
        "text": "Gab es eine frühere obere GI-Blutung?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8110,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Obere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ugib_01": {
        "id": "blut_ugib_01",
        "text": "Ist das Blut hellrot oder dunkelrot?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8201,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Untere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ugib_02": {
        "id": "blut_ugib_02",
        "text": "Bestehen Unterbauchschmerzen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8202,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Untere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ugib_03": {
        "id": "blut_ugib_03",
        "text": "Sind Divertikel bekannt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8203,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Untere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ugib_04": {
        "id": "blut_ugib_04",
        "text": "Ist eine chronische Darmerkrankung bekannt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8204,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Untere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ugib_05": {
        "id": "blut_ugib_05",
        "text": "Bestehen Hämorrhoiden?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8205,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Untere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ugib_06": {
        "id": "blut_ugib_06",
        "text": "Bestehen kolikartige Schmerzen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8206,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Untere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ugib_07": {
        "id": "blut_ugib_07",
        "text": "Nimmt die Person Blutverdünner?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8207,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Untere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ugib_08": {
        "id": "blut_ugib_08",
        "text": "Bestehen Kreislaufprobleme?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8208,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Untere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ugib_09": {
        "id": "blut_ugib_09",
        "text": "Ist die Blutung zunehmend?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8209,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Untere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_ugib_10": {
        "id": "blut_ugib_10",
        "text": "Gab es frühere Darmblutungen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8210,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Untere GI (Magen-Darm) Blutung"
          }
        ]
      },
      "blut_hematem_01": {
        "id": "blut_hematem_01",
        "text": "Ist das Blut hellrot?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8301,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Bluterbrechen"
          }
        ]
      },
      "blut_hematem_02": {
        "id": "blut_hematem_02",
        "text": "Ist das Erbrochene kaffeesatzartig/dunkel?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8302,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Bluterbrechen"
          }
        ]
      },
      "blut_hematem_03": {
        "id": "blut_hematem_03",
        "text": "Bestehen Oberbauchschmerzen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8303,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Bluterbrechen"
          }
        ]
      },
      "blut_hematem_04": {
        "id": "blut_hematem_04",
        "text": "Besteht eine Lebererkrankung?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8304,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Bluterbrechen"
          }
        ]
      },
      "blut_hematem_05": {
        "id": "blut_hematem_05",
        "text": "Sind Varizen bekannt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8305,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Bluterbrechen"
          }
        ]
      },
      "blut_hematem_06": {
        "id": "blut_hematem_06",
        "text": "Gab es starkes Würgen vor der Blutung?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8306,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Bluterbrechen"
          }
        ]
      },
      "blut_hematem_07": {
        "id": "blut_hematem_07",
        "text": "Nimmt die Person Blutverdünner?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8307,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Bluterbrechen"
          }
        ]
      },
      "blut_hematem_08": {
        "id": "blut_hematem_08",
        "text": "Bestehen Schwindel/Kollapszeichen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8308,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Bluterbrechen"
          }
        ]
      },
      "blut_hematem_09": {
        "id": "blut_hematem_09",
        "text": "Ist die Blutung noch aktiv?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8309,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Bluterbrechen"
          }
        ]
      },
      "blut_hematem_10": {
        "id": "blut_hematem_10",
        "text": "Gab es eine frühere Blutung?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8310,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Bluterbrechen"
          }
        ]
      },
      "blut_anal_01": {
        "id": "blut_anal_01",
        "text": "Ist das Blut hellrot?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8401,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Anal (After) Blutung"
          }
        ]
      },
      "blut_anal_02": {
        "id": "blut_anal_02",
        "text": "Bestehen Schmerzen beim Stuhlgang?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8402,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Anal (After) Blutung"
          }
        ]
      },
      "blut_anal_03": {
        "id": "blut_anal_03",
        "text": "Sind Hämorrhoiden bekannt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8403,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Anal (After) Blutung"
          }
        ]
      },
      "blut_anal_04": {
        "id": "blut_anal_04",
        "text": "Bestehen starke Bauchschmerzen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8404,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Anal (After) Blutung"
          }
        ]
      },
      "blut_anal_05": {
        "id": "blut_anal_05",
        "text": "Ist die Blutmenge größer als wenige Tropfen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8405,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Anal (After) Blutung"
          }
        ]
      },
      "blut_anal_06": {
        "id": "blut_anal_06",
        "text": "Ist die Blutung wiederholt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8406,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Anal (After) Blutung"
          }
        ]
      },
      "blut_anal_07": {
        "id": "blut_anal_07",
        "text": "Nimmt die Person Blutverdünner?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8407,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Anal (After) Blutung"
          }
        ]
      },
      "blut_anal_08": {
        "id": "blut_anal_08",
        "text": "Besteht Fieber?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8408,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Anal (After) Blutung"
          }
        ]
      },
      "blut_anal_09": {
        "id": "blut_anal_09",
        "text": "Ist eine Darmerkrankung bekannt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8409,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Anal (After) Blutung"
          }
        ]
      },
      "blut_anal_10": {
        "id": "blut_anal_10",
        "text": "Besteht zusätzlich schwarzer Stuhl?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8410,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Anal (After) Blutung"
          }
        ]
      },
      "blut_gyn_01": {
        "id": "blut_gyn_01",
        "text": "Besteht eine Schwangerschaftsmöglichkeit?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8501,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Gynäkologisch"
          }
        ]
      },
      "blut_gyn_02": {
        "id": "blut_gyn_02",
        "text": "Ist die Blutung stärker als eine normale Regelblutung?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8502,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Gynäkologisch"
          }
        ]
      },
      "blut_gyn_03": {
        "id": "blut_gyn_03",
        "text": "Bestehen Unterbauchschmerzen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8503,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Gynäkologisch"
          }
        ]
      },
      "blut_gyn_04": {
        "id": "blut_gyn_04",
        "text": "Bestehen Wehen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8504,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Gynäkologisch"
          }
        ]
      },
      "blut_gyn_05": {
        "id": "blut_gyn_05",
        "text": "Ist eine kürzliche Geburt/Fehlgeburt bekannt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8505,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Gynäkologisch"
          }
        ]
      },
      "blut_gyn_06": {
        "id": "blut_gyn_06",
        "text": "Bestehen Schwindel/Kollapszeichen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8506,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Gynäkologisch"
          }
        ]
      },
      "blut_gyn_07": {
        "id": "blut_gyn_07",
        "text": "Besteht eine bekannte gynäkologische Erkrankung?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8507,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Gynäkologisch"
          }
        ]
      },
      "blut_gyn_08": {
        "id": "blut_gyn_08",
        "text": "Nimmt die Person Blutverdünner?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8508,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Gynäkologisch"
          }
        ]
      },
      "blut_gyn_09": {
        "id": "blut_gyn_09",
        "text": "Besteht Fieber?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8509,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Gynäkologisch"
          }
        ]
      },
      "blut_gyn_10": {
        "id": "blut_gyn_10",
        "text": "Ist die Blutung zunehmend?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8510,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Gynäkologisch"
          }
        ]
      },
      "blut_uro_01": {
        "id": "blut_uro_01",
        "text": "Ist Blut im Urin sichtbar?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8601,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Urogenital (Harntrakt) Blutung"
          }
        ]
      },
      "blut_uro_02": {
        "id": "blut_uro_02",
        "text": "Bestehen Schmerzen beim Wasserlassen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8602,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Urogenital (Harntrakt) Blutung"
          }
        ]
      },
      "blut_uro_03": {
        "id": "blut_uro_03",
        "text": "Bestehen Flanken-/Nierenschmerzen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8603,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Urogenital (Harntrakt) Blutung"
          }
        ]
      },
      "blut_uro_04": {
        "id": "blut_uro_04",
        "text": "Besteht Fieber?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8604,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Urogenital (Harntrakt) Blutung"
          }
        ]
      },
      "blut_uro_05": {
        "id": "blut_uro_05",
        "text": "Ist eine Nierenerkrankung bekannt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8605,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Urogenital (Harntrakt) Blutung"
          }
        ]
      },
      "blut_uro_06": {
        "id": "blut_uro_06",
        "text": "Sind Blutgerinnsel im Urin sichtbar?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8606,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Urogenital (Harntrakt) Blutung"
          }
        ]
      },
      "blut_uro_07": {
        "id": "blut_uro_07",
        "text": "Besteht ein Harnkatheter?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8607,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Urogenital (Harntrakt) Blutung"
          }
        ]
      },
      "blut_uro_08": {
        "id": "blut_uro_08",
        "text": "Trat die Blutung nach einem Eingriff auf?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8608,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Urogenital (Harntrakt) Blutung"
          }
        ]
      },
      "blut_uro_09": {
        "id": "blut_uro_09",
        "text": "Nimmt die Person Blutverdünner?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8609,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Urogenital (Harntrakt) Blutung"
          }
        ]
      },
      "blut_uro_10": {
        "id": "blut_uro_10",
        "text": "Besteht eine Harnverhaltung?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8610,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Urogenital (Harntrakt) Blutung"
          }
        ]
      },
      "blut_hno_01": {
        "id": "blut_hno_01",
        "text": "Ist es eine Nasenblutung?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8701,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "HNO Blutung"
          }
        ]
      },
      "blut_hno_02": {
        "id": "blut_hno_02",
        "text": "Besteht eine starke Rachenblutung?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8702,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "HNO Blutung"
          }
        ]
      },
      "blut_hno_03": {
        "id": "blut_hno_03",
        "text": "Bestehen Atemprobleme?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8703,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "HNO Blutung"
          }
        ]
      },
      "blut_hno_04": {
        "id": "blut_hno_04",
        "text": "Bestehen Schluckprobleme?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8704,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "HNO Blutung"
          }
        ]
      },
      "blut_hno_05": {
        "id": "blut_hno_05",
        "text": "Ist die Blutung weiterhin aktiv?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8705,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "HNO Blutung"
          }
        ]
      },
      "blut_hno_06": {
        "id": "blut_hno_06",
        "text": "Gab es eine Gesichts-/Halsverletzung?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8706,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "HNO Blutung"
          }
        ]
      },
      "blut_hno_07": {
        "id": "blut_hno_07",
        "text": "Nimmt die Person Blutverdünner?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8707,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "HNO Blutung"
          }
        ]
      },
      "blut_hno_08": {
        "id": "blut_hno_08",
        "text": "Besteht eine Gerinnungsstörung?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8708,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "HNO Blutung"
          }
        ]
      },
      "blut_hno_09": {
        "id": "blut_hno_09",
        "text": "Bestehen Schwindel/Kollapszeichen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8709,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "HNO Blutung"
          }
        ]
      },
      "blut_hno_10": {
        "id": "blut_hno_10",
        "text": "Ist Blut in den Atemwegen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8710,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "HNO Blutung"
          }
        ]
      },
      "blut_varizen_01": {
        "id": "blut_varizen_01",
        "text": "Blutet eine sichtbare Beinvarize?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8801,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Beinvarizen-Blutung"
          }
        ]
      },
      "blut_varizen_02": {
        "id": "blut_varizen_02",
        "text": "Ist die Blutung durch Druck kontrollierbar?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8802,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Beinvarizen-Blutung"
          }
        ]
      },
      "blut_varizen_03": {
        "id": "blut_varizen_03",
        "text": "Ist eine ausgeprägte Varikose bekannt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8803,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Beinvarizen-Blutung"
          }
        ]
      },
      "blut_varizen_04": {
        "id": "blut_varizen_04",
        "text": "Nimmt die Person Blutverdünner?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8804,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Beinvarizen-Blutung"
          }
        ]
      },
      "blut_varizen_05": {
        "id": "blut_varizen_05",
        "text": "Bestehen Schwindel/Kollapszeichen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8805,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Beinvarizen-Blutung"
          }
        ]
      },
      "blut_varizen_06": {
        "id": "blut_varizen_06",
        "text": "Ist die Blutung wiederholt aufgetreten?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8806,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Beinvarizen-Blutung"
          }
        ]
      },
      "blut_varizen_07": {
        "id": "blut_varizen_07",
        "text": "Gab es schon frühere Varizenblutungen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8807,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Beinvarizen-Blutung"
          }
        ]
      },
      "blut_varizen_08": {
        "id": "blut_varizen_08",
        "text": "Ist die Blutungsstelle gut erreichbar?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8808,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Beinvarizen-Blutung"
          }
        ]
      },
      "blut_varizen_09": {
        "id": "blut_varizen_09",
        "text": "Ist die Blutung trotz Druck zunehmend?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8809,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Beinvarizen-Blutung"
          }
        ]
      },
      "blut_varizen_10": {
        "id": "blut_varizen_10",
        "text": "Bestehen weitere blutende Varizen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8810,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Beinvarizen-Blutung"
          }
        ]
      },
      "blut_sonst_01": {
        "id": "blut_sonst_01",
        "text": "Kommt die Blutung aus einem Shunt oder Katheter?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8901,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Sonstige Blutung (Shunt, Katheter, o.ä.)"
          }
        ]
      },
      "blut_sonst_02": {
        "id": "blut_sonst_02",
        "text": "Ist der Zugang herausgerutscht/beschädigt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8902,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Sonstige Blutung (Shunt, Katheter, o.ä.)"
          }
        ]
      },
      "blut_sonst_03": {
        "id": "blut_sonst_03",
        "text": "Ist die Blutung durch Druck kontrollierbar?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8903,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Sonstige Blutung (Shunt, Katheter, o.ä.)"
          }
        ]
      },
      "blut_sonst_04": {
        "id": "blut_sonst_04",
        "text": "Bestehen Kreislaufprobleme?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8904,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Sonstige Blutung (Shunt, Katheter, o.ä.)"
          }
        ]
      },
      "blut_sonst_05": {
        "id": "blut_sonst_05",
        "text": "Nimmt die Person Blutverdünner?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8905,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Sonstige Blutung (Shunt, Katheter, o.ä.)"
          }
        ]
      },
      "blut_sonst_06": {
        "id": "blut_sonst_06",
        "text": "Besteht eine Dialysebehandlung?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8906,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Sonstige Blutung (Shunt, Katheter, o.ä.)"
          }
        ]
      },
      "blut_sonst_07": {
        "id": "blut_sonst_07",
        "text": "Ist eine Gerinnungsstörung bekannt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8907,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Sonstige Blutung (Shunt, Katheter, o.ä.)"
          }
        ]
      },
      "blut_sonst_08": {
        "id": "blut_sonst_08",
        "text": "Ist die Blutung wiederholt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8908,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Sonstige Blutung (Shunt, Katheter, o.ä.)"
          }
        ]
      },
      "blut_sonst_09": {
        "id": "blut_sonst_09",
        "text": "Besteht eine Entzündung an der Stelle?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8909,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Sonstige Blutung (Shunt, Katheter, o.ä.)"
          }
        ]
      },
      "blut_sonst_10": {
        "id": "blut_sonst_10",
        "text": "Ist der Zugang weiterhin in Funktion?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 8910,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Blutungen"
          },
          {
            "questionId": "blutung_02",
            "value": "Sonstige Blutung (Shunt, Katheter, o.ä.)"
          }
        ]
      },
      "vergiftung_sub": {
        "id": "vergiftung_sub",
        "text": "Welche Vergiftung/Exposition steht im Vordergrund?",
        "type": "choice",
        "options": [
          "Medikament / Überdosierung",
          "Drogen / Alkohol",
          "Pilz / unbekannter Pilz",
          "Chemikalie / Haushaltsstoff",
          "Gas / Rauch / CO",
          "Unbekannt"
        ],
        "order": 616,
        "whenQuestion": "med_grund",
        "whenValue": "Vergiftung"
      },
      "vergiftung_pilz_01": {
        "id": "vergiftung_pilz_01",
        "text": "Begannen die Beschwerden innerhalb weniger Stunden nach der Pilzmahlzeit?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3601,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "vergiftung_pilz_02": {
        "id": "vergiftung_pilz_02",
        "text": "Wurden Fliegenpilz/Pantherpilz oder eine ähnliche Amanita-Art vermutet?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3602,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "vergiftung_pilz_03": {
        "id": "vergiftung_pilz_03",
        "text": "Bestehen Schwindel, Verwirrtheit oder Halluzinationen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3603,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "vergiftung_pilz_04": {
        "id": "vergiftung_pilz_04",
        "text": "Wechseln Unruhe und starke Müdigkeit/Benommenheit?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3604,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "vergiftung_pilz_05": {
        "id": "vergiftung_pilz_05",
        "text": "Bestehen Zuckungen oder Krampfanfälle?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3605,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "vergiftung_pilz_06": {
        "id": "vergiftung_pilz_06",
        "text": "Bestehen auffällig weite Pupillen oder Sehstörungen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3606,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "vergiftung_pilz_07": {
        "id": "vergiftung_pilz_07",
        "text": "Ist die Atmung auffällig langsam oder oberflächlich?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3607,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "vergiftung_pilz_08": {
        "id": "vergiftung_pilz_08",
        "text": "Sind weitere Personen nach derselben Pilzmahlzeit betroffen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3608,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "vergiftung_pilz_09": {
        "id": "vergiftung_pilz_09",
        "text": "Ist die Pilzart bzw. der Pilzrest bekannt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3609,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "vergiftung_pilz_10": {
        "id": "vergiftung_pilz_10",
        "text": "Sind Pilzreste, Verpackung oder Fotos vorhanden?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3610,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "pantherina_01": {
        "id": "pantherina_01",
        "text": "Begannen die Beschwerden innerhalb weniger Stunden nach der Pilzmahlzeit?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3701,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "pantherina_02": {
        "id": "pantherina_02",
        "text": "Wurden Fliegenpilz/Pantherpilz oder ähnliche Amanita-Arten vermutet?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3702,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "pantherina_03": {
        "id": "pantherina_03",
        "text": "Bestehen Schwindel, Verwirrtheit oder Halluzinationen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3703,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "pantherina_04": {
        "id": "pantherina_04",
        "text": "Wechseln Unruhe und starke Müdigkeit/Benommenheit?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3704,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "pantherina_05": {
        "id": "pantherina_05",
        "text": "Bestehen Myoklonien/Zuckungen oder Krämpfe?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3705,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "pantherina_06": {
        "id": "pantherina_06",
        "text": "Bestehen auffällig weite Pupillen oder Doppelbilder?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3706,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "pantherina_07": {
        "id": "pantherina_07",
        "text": "Ist die Atmung auffällig langsam oder oberflächlich?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3707,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "pantherina_08": {
        "id": "pantherina_08",
        "text": "Sind weitere Personen nach derselben Pilzmahlzeit betroffen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 3708,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Vergiftung"
          },
          {
            "questionId": "vergiftung_sub",
            "value": "Pilz / unbekannter Pilz"
          }
        ]
      },
      "bauch_ileus_01": {
        "id": "bauch_ileus_01",
        "text": "Können noch Winde abgehen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 4201,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Darm/Verstopfung/Ileusverdacht"
          }
        ]
      },
      "bauch_ileus_02": {
        "id": "bauch_ileus_02",
        "text": "Ist seit längerer Zeit kein Stuhlgang mehr möglich?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 4202,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Darm/Verstopfung/Ileusverdacht"
          }
        ]
      },
      "bauch_ileus_03": {
        "id": "bauch_ileus_03",
        "text": "Ist der Bauch deutlich gebläht oder gespannt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 4203,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Darm/Verstopfung/Ileusverdacht"
          }
        ]
      },
      "bauch_ileus_04": {
        "id": "bauch_ileus_04",
        "text": "Bestehen wellenförmige/kolikartige Schmerzen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 4204,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Darm/Verstopfung/Ileusverdacht"
          }
        ]
      },
      "bauch_ileus_05": {
        "id": "bauch_ileus_05",
        "text": "Besteht wiederholtes Erbrechen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 4205,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Darm/Verstopfung/Ileusverdacht"
          }
        ]
      },
      "bauch_ileus_06": {
        "id": "bauch_ileus_06",
        "text": "Gab es frühere Bauchoperationen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 4206,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Darm/Verstopfung/Ileusverdacht"
          }
        ]
      },
      "bauch_ileus_07": {
        "id": "bauch_ileus_07",
        "text": "Ist ein Leisten-/Narbenbruch bekannt?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 4207,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Darm/Verstopfung/Ileusverdacht"
          }
        ]
      },
      "bauch_ileus_08": {
        "id": "bauch_ileus_08",
        "text": "Besteht eine ausgeprägte Verstopfung nach sehr großer Obstmenge wie Orangen/Mandarinen?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 4208,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Darm/Verstopfung/Ileusverdacht"
          }
        ]
      },
      "bauch_ileus_09": {
        "id": "bauch_ileus_09",
        "text": "Besteht der Verdacht auf einen Darmverschluss (Ileus)?",
        "type": "choice",
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "order": 4209,
        "whenAll": [
          {
            "questionId": "med_grund",
            "value": "Bauchschmerzen"
          },
          {
            "questionId": "bauch_sub",
            "value": "Darm/Verstopfung/Ileusverdacht"
          }
        ]
      },
      "erkrankung_typ": {
        "id": "erkrankung_typ",
        "text": "Welche Erkrankung bzw. welches Beschwerdebild liegt vor?",
        "type": "choice",
        "order": 9190,
        "options": [
          "Allergie / Hautausschlag",
          "Blutdruckstörung",
          "Diabetes",
          "Durchfall",
          "Erbrechen / Übelkeit",
          "Fieber",
          "Grippe / Erkältung",
          "Harnverhalt",
          "Hyperventilation",
          "Infektionskrankheiten",
          "Schwindel",
          "Medizinische Hilfeleistung / sonstige Erkrankung"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Erkrankung / medizinische Hilfeleistung"
      },
      "erkrankung_bd_01": {
        "id": "erkrankung_bd_01",
        "text": "Wurde bereits ein Blutdruck gemessen?",
        "type": "choice",
        "order": 9205,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Blutdruckstörung"
      },
      "erkrankung_bd_02": {
        "id": "erkrankung_bd_02",
        "text": "Welcher Blutdruckbereich wurde gemessen?",
        "type": "choice",
        "order": 9206,
        "options": [
          "Systolisch <120 mmHg / Diastolisch <80 mmHg – optimal",
          "Systolisch 120–129 mmHg / Diastolisch 80–84 mmHg – normal",
          "Systolisch 130–139 mmHg / Diastolisch 85–89 mmHg – hochnormal",
          "Systolisch 140–159 mmHg / Diastolisch 90–99 mmHg – Hypertonie Grad 1",
          "Systolisch 160–179 mmHg / Diastolisch 100–109 mmHg – Hypertonie Grad 2",
          "Systolisch ≥180 mmHg / Diastolisch ≥110 mmHg – Hypertonie Grad 3"
        ],
        "whenQuestion": "erkrankung_bd_01",
        "whenValue": "Ja"
      },
      "erkrankung_bd_03": {
        "id": "erkrankung_bd_03",
        "text": "Ist der Blutdruckwert bzw. die Blutdruckstörung bereits bekannt?",
        "type": "choice",
        "order": 9207,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Blutdruckstörung"
      },
      "erkrankung_bd_04": {
        "id": "erkrankung_bd_04",
        "text": "Bestehen gleichzeitig starke Kopfschmerzen, Sehstörungen, Brustschmerzen, Atemnot oder neurologische Auffälligkeiten?",
        "type": "choice",
        "order": 9208,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_bd_02",
        "whenValue": "Systolisch ≥180 mmHg / Diastolisch ≥110 mmHg – Hypertonie Grad 3"
      },
      "erkrankung_bd_05": {
        "id": "erkrankung_bd_05",
        "text": "Nimmt die Person Blutdruck- oder Herzmedikamente?",
        "type": "choice",
        "order": 9209,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Blutdruckstörung"
      },
      "erkrankung_bd_06": {
        "id": "erkrankung_bd_06",
        "text": "Wurden die Medikamente wie verordnet eingenommen?",
        "type": "choice",
        "order": 9210,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_bd_05",
        "whenValue": "Ja"
      },
      "erkrankung_bd_07": {
        "id": "erkrankung_bd_07",
        "text": "Bestehen Schwindel, Schwäche oder Kollapsneigung?",
        "type": "choice",
        "order": 9211,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Blutdruckstörung"
      },
      "erkrankung_dm_01": {
        "id": "erkrankung_dm_01",
        "text": "Welche Diabetes-Situation liegt vor?",
        "type": "choice",
        "order": 9220,
        "options": [
          "Hypoglykämie / Unterzuckerung",
          "Hyperglykämie / Überzuckerung",
          "Diabetes bekannt, aktuelle Entgleisung unklar",
          "Diabetes bekannt, keine akute Entgleisung erkennbar"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Diabetes"
      },
      "erkrankung_dm_02": {
        "id": "erkrankung_dm_02",
        "text": "Wurde der Blutzucker gemessen?",
        "type": "choice",
        "order": 9221,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_dm_01",
        "whenValue": "Hypoglykämie / Unterzuckerung"
      },
      "erkrankung_dm_03": {
        "id": "erkrankung_dm_03",
        "text": "Wurde der Blutzucker gemessen?",
        "type": "choice",
        "order": 9222,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_dm_01",
        "whenValue": "Hyperglykämie / Überzuckerung"
      },
      "erkrankung_dm_04": {
        "id": "erkrankung_dm_04",
        "text": "Welcher Blutzuckerbereich wurde gemessen?",
        "type": "choice",
        "order": 9223,
        "options": [
          "< 2,2 mmol/l – schwere Hypoglykämie",
          "2,2–3,8 mmol/l – Hypoglykämie",
          "3,9–13,8 mmol/l – kein ausgeprägter Unter-/Überzuckerungsbereich",
          "13,9–22,1 mmol/l – Hyperglykämie",
          "22,2–33,2 mmol/l – stark erhöhte Glukose",
          "≥ 33,3 mmol/l – extrem erhöht / ggf. Messgerät zeigt HI"
        ],
        "whenQuestion": "erkrankung_dm_02",
        "whenValue": "Ja"
      },
      "erkrankung_dm_05": {
        "id": "erkrankung_dm_05",
        "text": "Welcher Blutzuckerbereich wurde gemessen?",
        "type": "choice",
        "order": 9224,
        "options": [
          "< 2,2 mmol/l – schwere Hypoglykämie",
          "2,2–3,8 mmol/l – Hypoglykämie",
          "3,9–13,8 mmol/l – kein ausgeprägter Unter-/Überzuckerungsbereich",
          "13,9–22,1 mmol/l – Hyperglykämie",
          "22,2–33,2 mmol/l – stark erhöhte Glukose",
          "≥ 33,3 mmol/l – extrem erhöht / ggf. Messgerät zeigt HI"
        ],
        "whenQuestion": "erkrankung_dm_03",
        "whenValue": "Ja"
      },
      "erkrankung_dm_06": {
        "id": "erkrankung_dm_06",
        "text": "Ist die Person ungewöhnlich apathisch, teilnahmslos oder schwer weckbar?",
        "type": "choice",
        "order": 9225,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_dm_01",
        "whenValue": "Hypoglykämie / Unterzuckerung"
      },
      "erkrankung_dm_07": {
        "id": "erkrankung_dm_07",
        "text": "Ist die Person verwirrt, sehr schläfrig oder bewusstseinsgetrübt?",
        "type": "choice",
        "order": 9226,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_dm_01",
        "whenValue": "Hyperglykämie / Überzuckerung"
      },
      "erkrankung_dm_08": {
        "id": "erkrankung_dm_08",
        "text": "Bestehen Zittern, Kaltschweißigkeit, Heißhunger oder ausgeprägte Schwäche?",
        "type": "choice",
        "order": 9227,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_dm_01",
        "whenValue": "Hypoglykämie / Unterzuckerung"
      },
      "erkrankung_dm_09": {
        "id": "erkrankung_dm_09",
        "text": "Bestehen starker Durst oder häufiges Wasserlassen?",
        "type": "choice",
        "order": 9228,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_dm_01",
        "whenValue": "Hyperglykämie / Überzuckerung"
      },
      "erkrankung_dm_10": {
        "id": "erkrankung_dm_10",
        "text": "Bestehen Übelkeit, Erbrechen oder Bauchschmerzen?",
        "type": "choice",
        "order": 9229,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_dm_01",
        "whenValue": "Hyperglykämie / Überzuckerung"
      },
      "erkrankung_dm_11": {
        "id": "erkrankung_dm_11",
        "text": "Ist eine Insulintherapie bekannt?",
        "type": "choice",
        "order": 9230,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Diabetes"
      },
      "erkrankung_dm_12": {
        "id": "erkrankung_dm_12",
        "text": "Wurde Insulin oder ein Diabetesmedikament heute bereits angewendet?",
        "type": "choice",
        "order": 9231,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_dm_11",
        "whenValue": "Ja"
      },
      "erkrankung_dm_13": {
        "id": "erkrankung_dm_13",
        "text": "Kann die Person selbstständig trinken und schlucken?",
        "type": "choice",
        "order": 9232,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_dm_01",
        "whenValue": "Hypoglykämie / Unterzuckerung"
      },
      "erkrankung_Allergie / Hautausschlag_allergie1": {
        "id": "erkrankung_Allergie / Hautausschlag_allergie1",
        "text": "Gab es einen möglichen Auslöser wie Nahrung, Medikament oder Stich?",
        "type": "choice",
        "order": 9242,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Allergie / Hautausschlag"
      },
      "erkrankung_Durchfall_diarr1": {
        "id": "erkrankung_Durchfall_diarr1",
        "text": "Kann die Person ausreichend trinken?",
        "type": "choice",
        "order": 9245,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Durchfall"
      },
      "erkrankung_Erbrechen / Übelkeit_vomit1": {
        "id": "erkrankung_Erbrechen / Übelkeit_vomit1",
        "text": "Kann die Person Flüssigkeit bei sich behalten?",
        "type": "choice",
        "order": 9248,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Erbrechen / Übelkeit"
      },
      "erkrankung_Fieber_fever1": {
        "id": "erkrankung_Fieber_fever1",
        "text": "Wie hoch ist die gemessene Körpertemperatur?",
        "type": "choice",
        "order": 9251,
        "options": [
          "≤ 37,5 °C – Normaltemperatur / kein Fieber",
          "> 37,5 bis < 38,5 °C – erhöhte Temperatur",
          "38,5–41,0 °C – Fieber",
          "> 41,0 °C – sehr hohes Fieber",
          "Unbekannt (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Fieber"
      },
      "erkrankung_Fieber_fever2": {
        "id": "erkrankung_Fieber_fever2",
        "text": "Sind Hände und Füße warm oder kalt?",
        "type": "choice",
        "order": 9252,
        "options": [
          "Warm",
          "Kalt",
          "Unterschiedlich / teilweise warm, teilweise kalt",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannt (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Fieber"
      },
      "erkrankung_Fieber_fever3": {
        "id": "erkrankung_Fieber_fever3",
        "text": "Friert die Person oder besteht Schüttelfrost?",
        "type": "choice",
        "order": 9253,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannt (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Fieber"
      },
      "erkrankung_Fieber_fever4": {
        "id": "erkrankung_Fieber_fever4",
        "text": "Leidet die Person deutlich unter dem Fieber oder wirkt sie deutlich beeinträchtigt?",
        "type": "choice",
        "order": 9254,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannt (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Fieber"
      },
      "erkrankung_Fieber_fever5": {
        "id": "erkrankung_Fieber_fever5",
        "text": "Kann die Person ausreichend trinken bzw. Flüssigkeit bei sich behalten?",
        "type": "choice",
        "order": 9255,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannt (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Fieber"
      },
      "erkrankung_Fieber_fever6": {
        "id": "erkrankung_Fieber_fever6",
        "text": "Bestehen Atemnot oder auffällige Atmung?",
        "type": "choice",
        "order": 9256,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannt (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Fieber"
      },
      "erkrankung_Fieber_fever7": {
        "id": "erkrankung_Fieber_fever7",
        "text": "Ist die Person wach, ansprechbar und altersentsprechend orientiert?",
        "type": "choice",
        "order": 9257,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannt (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Fieber"
      },
      "erkrankung_Fieber_fever8": {
        "id": "erkrankung_Fieber_fever8",
        "text": "Bestehen auffällige Hautveränderungen, punktförmige Einblutungen oder eine ungewöhnliche Hautfarbe?",
        "type": "choice",
        "order": 9258,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannt (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Fieber"
      },
      "erkrankung_Fieber_fever9": {
        "id": "erkrankung_Fieber_fever9",
        "text": "Gab es einen Krampfanfall oder ungewöhnliche Zuckungen im Zusammenhang mit dem Fieber?",
        "type": "choice",
        "order": 9259,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannt (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Fieber"
      },
      "erkrankung_Fieber_fever10": {
        "id": "erkrankung_Fieber_fever10",
        "text": "Wie lange besteht das Fieber ungefähr?",
        "type": "choice",
        "order": 9260,
        "options": [
          "Seit weniger als 24 Stunden",
          "Seit 1–3 Tagen",
          "Seit mehr als 3 Tagen",
          "Unklar / schwankend",
          "Unbekannt (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Fieber"
      },
      "erkrankung_Grippe / Erkältung_cold1": {
        "id": "erkrankung_Grippe / Erkältung_cold1",
        "text": "Besteht hohes Fieber oder Schüttelfrost?",
        "type": "choice",
        "order": 9254,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Grippe / Erkältung"
      },
      "erkrankung_Harnverhalt_urine1": {
        "id": "erkrankung_Harnverhalt_urine1",
        "text": "Ist ein Harnkatheter vorhanden?",
        "type": "choice",
        "order": 9257,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Harnverhalt"
      },
      "erkrankung_Hyperventilation_hyper1": {
        "id": "erkrankung_Hyperventilation_hyper1",
        "text": "Ist die Person stark ängstlich oder panisch?",
        "type": "choice",
        "order": 9260,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Hyperventilation"
      },
      "erkrankung_Infektionskrankheiten_infection1": {
        "id": "erkrankung_Infektionskrankheiten_infection1",
        "text": "Bestehen Atemnot oder Kreislaufprobleme?",
        "type": "choice",
        "order": 9263,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Infektionskrankheiten"
      },
      "erkrankung_Schwindel_dizzy1": {
        "id": "erkrankung_Schwindel_dizzy1",
        "text": "Bestehen zusätzlich neue Sprach-, Seh-, Gesichts- oder Lähmungszeichen?",
        "type": "choice",
        "order": 9266,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Schwindel"
      },
      "erkrankung_Medizinische Hilfeleistung / sonstige Erkrankung_other1": {
        "id": "erkrankung_Medizinische Hilfeleistung / sonstige Erkrankung_other1",
        "text": "Bestehen aktuell Atemnot, Brustschmerz, Bewusstseinsstörung oder starke Schmerzen?",
        "type": "choice",
        "order": 9269,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_typ",
        "whenValue": "Medizinische Hilfeleistung / sonstige Erkrankung"
      },
      "erkrankung_apathie_01": {
        "id": "erkrankung_apathie_01",
        "text": "Wirkt die Person ungewöhnlich apathisch, teilnahmslos oder deutlich verändert?",
        "type": "choice",
        "order": 9260,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_01",
        "whenValue": "Ja"
      },
      "erkrankung_apathie_02": {
        "id": "erkrankung_apathie_02",
        "text": "Ist die Person nur schwer weckbar oder nicht zuverlässig ansprechbar?",
        "type": "choice",
        "order": 9261,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "erkrankung_apathie_01",
        "whenValue": "Ja"
      },
      "hitze_27": {
        "id": "hitze_27",
        "text": "Bestehen / haben Sie Brustschmerzen?",
        "type": "choice",
        "order": 9387,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Hitze- / Kälteprobleme"
      },
      "hitze_28": {
        "id": "hitze_28",
        "text": "Bekommt er/sie genügend Luft, um normal zu sprechen?",
        "type": "choice",
        "order": 9388,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "hitze_27",
        "whenValue": "Nein"
      },
      "hitze_29": {
        "id": "hitze_29",
        "text": "Ist er/sie anders als sonst oder reagiert langsam?",
        "type": "choice",
        "order": 9389,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "hitze_28",
        "whenValue": "Ja"
      },
      "kollaps_27": {
        "id": "kollaps_27",
        "text": "Bekommt er/sie genügend Luft, um normal zu sprechen?",
        "type": "choice",
        "order": 9427,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kollaps / Kreislaufstörung"
      },
      "kollaps_28": {
        "id": "kollaps_28",
        "text": "Hat er/sie Brustschmerzen?",
        "type": "choice",
        "order": 9428,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "kollaps_27",
        "whenValue": "Ja"
      },
      "kollaps_29": {
        "id": "kollaps_29",
        "text": "Bekommt er/sie genügend Luft, um normal zu sprechen?",
        "type": "choice",
        "order": 9429,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "kollaps_28",
        "whenValue": "Ja"
      },
      "kollaps_30": {
        "id": "kollaps_30",
        "text": "Hat er/sie gekrampft?",
        "type": "choice",
        "order": 9430,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAny": [
          {
            "questionId": "kollaps_29",
            "value": "Nein"
          },
          {
            "questionId": "kollaps_28",
            "value": "Nein"
          }
        ]
      },
      "kollaps_31": {
        "id": "kollaps_31",
        "text": "Liegt ein Diabetes vor?",
        "type": "choice",
        "order": 9431,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "kollaps_30",
        "whenValue": "Nein"
      },
      "kollaps_32": {
        "id": "kollaps_32",
        "text": "Wie lange gehen die Beschwerden?",
        "type": "choice",
        "order": 9432,
        "options": [
          "kürzer als 30 Minuten",
          "30 Minuten – 1 Stunde",
          "mehrere Stunden",
          "mehrere Tage",
          "Unbekannt (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "kollaps_31",
        "whenValue": "Nein"
      },
      "kollaps_33": {
        "id": "kollaps_33",
        "text": "Ist der Blutzucker bekannt bzw. wurde er gemessen?",
        "type": "choice",
        "order": 9433,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "kollaps_31",
        "whenValue": "Ja"
      },
      "kollaps_34": {
        "id": "kollaps_34",
        "text": "Ist die Person nach der Messung bzw. nach den Diabetes-Beschwerden wach und ansprechbar?",
        "type": "choice",
        "order": 9434,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "kollaps_33",
        "whenValue": "Ja"
      },
      "kopf_27": {
        "id": "kopf_27",
        "text": "Haben die Schmerzen plötzlich / schlagartig begonnen?",
        "type": "choice",
        "order": 9467,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Kopfschmerzen"
      },
      "kopf_28": {
        "id": "kopf_28",
        "text": "Haben Sie öfter mal Kopfschmerzen?",
        "type": "choice",
        "order": 9468,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "kopf_27",
        "whenValue": "Ja"
      },
      "kopf_29": {
        "id": "kopf_29",
        "text": "Ist die Person frei zugänglich?",
        "type": "choice",
        "order": 9469,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "kopf_28",
        "whenValue": "Nein"
      },
      "kopf_30": {
        "id": "kopf_30",
        "text": "Bekommt er/sie genug Luft und kann normal sprechen?",
        "type": "choice",
        "order": 9470,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "kopf_27",
        "whenValue": "Nein"
      },
      "kopf_31": {
        "id": "kopf_31",
        "text": "Hat er/sie geklappt / ist er/sie kollabiert?",
        "type": "choice",
        "order": 9471,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "kopf_30",
        "whenValue": "Nein"
      },
      "kopf_32": {
        "id": "kopf_32",
        "text": "Ist die Person verwirrt oder wirkt sie ungewöhnlich / verändert?",
        "type": "choice",
        "order": 9472,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "kopf_27",
        "whenValue": "Nein"
      },
      "krampf_27": {
        "id": "krampf_27",
        "text": "Krampft er/sie immer noch?",
        "type": "choice",
        "order": 9507,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Krampfanfall"
      },
      "krampf_28": {
        "id": "krampf_28",
        "text": "Hat er/sie in den letzten Stunden weitere Krampfanfälle gehabt?",
        "type": "choice",
        "order": 9508,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "krampf_27",
        "whenValue": "Nein"
      },
      "krampf_29": {
        "id": "krampf_29",
        "text": "Ist er/sie jetzt wach?",
        "type": "choice",
        "order": 9509,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "krampf_28",
        "whenValue": "Nein"
      },
      "krampf_30": {
        "id": "krampf_30",
        "text": "Bekommt er/sie genügend Luft, um normal zu sprechen?",
        "type": "choice",
        "order": 9510,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "krampf_29",
        "whenValue": "Ja"
      },
      "krampf_31": {
        "id": "krampf_31",
        "text": "Ist die Person frei zugänglich?",
        "type": "choice",
        "order": 9511,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "krampf_30",
        "whenValue": "Ja"
      },
      "krampf_32": {
        "id": "krampf_32",
        "text": "Kontrolle der Atmung möglich / erfolgt?",
        "type": "choice",
        "order": 9512,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "krampf_30",
        "whenValue": "Nein"
      },
      "psyche_27": {
        "id": "psyche_27",
        "text": "Hat er/sie etwas angedeutet?",
        "type": "choice",
        "order": 9547,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "med_grund",
        "whenValue": "Psychische Erkrankung / Suizid"
      },
      "psyche_28": {
        "id": "psyche_28",
        "text": "Wie will sich der Patient umbringen?",
        "type": "choice",
        "order": 9548,
        "options": [
          "Dämpfe / Gase",
          "Drogen",
          "droht zu springen",
          "Erhängen / Strangulation",
          "Erschießen",
          "Medikamente",
          "Pflanzenschutzmittel",
          "Selbstverbrennung",
          "Säure / Laugen",
          "Pulsadereröffnung",
          "Ertrinken",
          "Ersticken / Sauerstoffentzug",
          "Sprengstoff / Explosion",
          "Strom / Elektrizität",
          "Sonstige / unbekannte Methode"
        ],
        "whenQuestion": "psyche_27",
        "whenValue": "Ja"
      },
      "zugang_01": {
        "id": "zugang_01",
        "text": "Ist die Person frei zugänglich?",
        "type": "choice",
        "order": 9600,
        "options": [
          "Ja",
          "Nein",
          "Unsicher (kann nicht beurteilt werden)",
          "Unbekannter (kein Kontakt / keine Angabe möglich)"
        ],
        "whenAny": [
          {
            "questionId": "hitze_29",
            "value": "Ja"
          },
          {
            "questionId": "kollaps_27",
            "value": "Nein"
          },
          {
            "questionId": "kollaps_29",
            "value": "Ja"
          },
          {
            "questionId": "kollaps_32",
            "value": "*"
          },
          {
            "questionId": "kollaps_34",
            "value": "*"
          },
          {
            "questionId": "kopf_28",
            "value": "Nein"
          },
          {
            "questionId": "kopf_32",
            "value": "Ja"
          },
          {
            "questionId": "krampf_27",
            "value": "Ja"
          },
          {
            "questionId": "krampf_28",
            "value": "Ja"
          },
          {
            "questionId": "krampf_29",
            "value": "Ja"
          },
          {
            "questionId": "krampf_31",
            "value": "Ja"
          },
          {
            "questionId": "psyche_28",
            "value": "*"
          }
        ]
      },
      "zugang_02": {
        "id": "zugang_02",
        "text": "Warum ist der Patient nicht frei zugänglich?",
        "type": "choice",
        "order": 9601,
        "options": [
          "Abgestürzt",
          "Eingeklemmt",
          "Verschlossene Wohnung",
          "Verschüttet / eingestürzt",
          "Auf Dach / Balkon / Höhe",
          "In Fahrzeug / Aufzug eingeschlossen",
          "Unzugängliches Gelände / schwer erreichbar",
          "Sonstiger Zugangshinderungsgrund",
          "Unbekannt (kein Kontakt / keine Angabe möglich)"
        ],
        "whenQuestion": "zugang_01",
        "whenValue": "Nein"
      },
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
      "verletzung_v49_lokalisation": {
        "id": "verletzung_v49_lokalisation",
        "text": "Wo befindet sich die Verletzung hauptsächlich?",
        "type": "choice",
        "order": 9671,
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
      }
    },
    "brand": {
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
    },
    "thl": {
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
    },
    "abc": {
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
    }
  },
  "notarzt_rules": {
    "bewusstlos": {
      "category": "medizin",
      "questionId": "bewusstsein",
      "value": "Bewusstlos",
      "reason": "Bewusstlosigkeit"
    },
    "sopor": {
      "category": "medizin",
      "questionId": "bewusstsein",
      "value": "Soporös",
      "reason": "Schwere Bewusstseinsstörung / Sopor"
    },
    "apnoe": {
      "category": "medizin",
      "questionId": "atmung",
      "value": "Atemstillstand",
      "reason": "Atemstillstand"
    },
    "no_normal_breathing": {
      "category": "medizin",
      "questionId": "atmung",
      "value": "Keine normale Atmung",
      "reason": "Keine normale Atmung"
    },
    "severe_dyspnea": {
      "category": "medizin",
      "questionId": "atmung",
      "value": "Atemnot / erschwert",
      "reason": "Atemnot / erschwerte Atmung"
    },
    "direct_dyspnea_atem_01": {
      "category": "medizin",
      "questionId": "atem_01",
      "value": "Ja",
      "reason": "Aktuelle Dyspnoe / deutliche Atemnot"
    },
    "cyanosis": {
      "category": "medizin",
      "questionId": "sauerstoffzeichen",
      "value": "Ja",
      "reason": "Deutliche Zyanose"
    },
    "chest": {
      "category": "medizin",
      "questionId": "brustschmerz",
      "value": "Ja",
      "reason": "Akuter Brustschmerz"
    },
    "chest_ausstrahlung": {
      "category": "medizin",
      "questionId": "brust_ausstrahlung",
      "value": "Ja",
      "reason": "Brustschmerz mit Ausstrahlung"
    },
    "bleed": {
      "category": "medizin",
      "questionId": "blutung",
      "value": "Ja",
      "reason": "Starke Blutung"
    },
    "stroke_face": {
      "category": "medizin",
      "questionId": "stroke_face",
      "values": [
        "Ja – Gesicht",
        "Ja – Gesicht und Arm"
      ],
      "reason": "FAST/BEFAST auffällig – Gesicht"
    },
    "stroke_arms": {
      "category": "medizin",
      "questionId": "stroke_face",
      "values": [
        "Ja – Arm",
        "Ja – Gesicht und Arm"
      ],
      "reason": "FAST/BEFAST auffällig – Arme"
    },
    "stroke_speech": {
      "category": "medizin",
      "questionId": "stroke_speech",
      "value": "Nein / verwaschen / unverständlich",
      "reason": "FAST/BEFAST auffällig – Sprache"
    },
    "stroke_eyes": {
      "category": "medizin",
      "questionId": "stroke_balance",
      "values": [
        "Ja – Sehstörung / Doppelbilder",
        "Ja – beides"
      ],
      "reason": "BEFAST auffällig – Sehen"
    },
    "stroke_balance": {
      "category": "medizin",
      "questionId": "stroke_balance",
      "values": [
        "Ja – Gleichgewicht / Gang",
        "Ja – beides"
      ],
      "reason": "BEFAST auffällig – Balance"
    },
    "stroke_tia": {
      "category": "medizin",
      "questionId": "stroke_tia",
      "value": "Ja, vollständig",
      "reason": "Neurologische Symptome rückläufig – TIA möglich"
    },
    "seizure_long": {
      "category": "medizin",
      "questionId": "seizure_duration",
      "value": "Mehr als 5 Minuten",
      "reason": "Krampfanfall > 5 Minuten"
    },
    "seizure_no_recovery": {
      "category": "medizin",
      "questionId": "seizure_recovery",
      "value": "Nein / deutlich verändert",
      "reason": "Keine vollständige Erholung nach Krampfanfall"
    },
    "allergy_airway": {
      "category": "medizin",
      "questionId": "allergy_airway",
      "value": "Ja",
      "reason": "Allergische Reaktion mit Atemwegsbeteiligung"
    },
    "allergy_circ": {
      "category": "medizin",
      "questionId": "allergy_circulation",
      "value": "Ja",
      "reason": "Allergische Reaktion mit Kreislaufbeteiligung"
    },
    "fall3m": {
      "category": "medizin",
      "questionId": "fall_2",
      "value": "Mehr als 3 m",
      "reason": "Sturz aus mehr als 3 m"
    },
    "fall_head_unconscious": {
      "category": "medizin",
      "questionId": "fall_4",
      "value": "Ja",
      "reason": "Sturz mit Bewusstseinsstörung"
    },
    "fall_neuro": {
      "category": "medizin",
      "questionId": "fall_7",
      "value": "Ja",
      "reason": "Sturz mit neurologischer Auffälligkeit"
    },
    "electric_high": {
      "category": "medizin",
      "questionId": "strom_1",
      "value": "Hochspannung",
      "reason": "Hochspannungsunfall"
    },
    "electric_unconscious": {
      "category": "medizin",
      "questionId": "strom_4",
      "value": "Ja",
      "reason": "Stromunfall mit Bewusstseins-/Krampfzeichen"
    },
    "birth_bleed": {
      "category": "medizin",
      "questionId": "geburt_5",
      "value": "Ja",
      "reason": "Starke Blutung bei Geburtshilfe"
    },
    "birth_visible": {
      "category": "medizin",
      "questionId": "geburt_4",
      "value": "Ja",
      "reason": "Geburt mit Pressdrang / Kind sichtbar"
    },
    "brand_persons": {
      "category": "brand",
      "questionId": "personen_im_objekt",
      "value": "Ja",
      "reason": "Personen im Brandobjekt / Gefahrenbereich"
    },
    "brand_missing": {
      "category": "brand",
      "questionId": "brand_extra_5",
      "value": "Ja",
      "reason": "Person vermisst"
    },
    "brand_trapped": {
      "category": "brand",
      "questionId": "brand_extra_7",
      "value": "Ja",
      "reason": "Personen eingeschlossen"
    },
    "vu_trapped": {
      "category": "thl",
      "questionId": "eingeklemmt",
      "value": "Ja",
      "reason": "Eingeklemmte Person"
    },
    "vu_ejection": {
      "category": "thl",
      "questionId": "vu_ejektion",
      "value": "Ja",
      "reason": "Person herausgeschleudert"
    },
    "vu_pedestrian": {
      "category": "thl",
      "questionId": "vu_fussgaenger",
      "value": "Ja",
      "reason": "Fußgänger / Verkehrsteilnehmer angefahren"
    },
    "vu_offroad": {
      "category": "thl",
      "questionId": "vu_abseits",
      "value": "Ja",
      "reason": "Fahrzeug von Fahrbahn abgekommen"
    },
    "water_submerged": {
      "category": "thl",
      "questionId": "wasser_1",
      "value": "Ja",
      "reason": "Person im Wasser / unter Wasser / Eisunfall"
    },
    "water_no_breathing": {
      "category": "thl",
      "questionId": "wasser_4",
      "value": "Nein",
      "reason": "Keine normale Atmung nach Wasserereignis"
    },
    "abc_persons": {
      "category": "abc",
      "questionId": "betroffen",
      "value": "Ja",
      "reason": "Personen bei ABC-Ereignis betroffen"
    },
    "abc_explosion": {
      "category": "abc",
      "questionId": "feuer_explosion",
      "value": "Ja",
      "reason": "Brand-/Explosions-/Reaktionsgefahr"
    },
    "stroke_speech_understands": {
      "category": "medizin",
      "questionId": "stroke_speech",
      "value": "Versteht die Aufforderung nicht",
      "reason": "FAST/BEFAST auffällig – Sprachverständnis"
    },
    "stroke_tia_partial": {
      "category": "medizin",
      "questionId": "stroke_tia",
      "value": "Ja, teilweise",
      "reason": "Neurologische Symptome rückläufig – TIA/Schlaganfall möglich"
    },
    "MED_CRIT_REA": {
      "id": "MED_CRIT_REA",
      "category": "medizin",
      "questionId": "deterioration",
      "values": "Herz-Kreislauf-Stillstand",
      "reason": "Herz-Kreislauf-Stillstand / Reanimationslage"
    },
    "MED_CRIT_NO_BREATH": {
      "id": "MED_CRIT_NO_BREATH",
      "category": "medizin",
      "questionId": "deterioration",
      "values": "Atmet nicht mehr",
      "reason": "Atemstillstand / keine normale Atmung"
    },
    "MED_CRIT_SEV_DYSP": {
      "id": "MED_CRIT_SEV_DYSP",
      "category": "medizin",
      "questionId": "atem_01",
      "values": "Ja",
      "reason": "Relevante Atemnot"
    },
    "nef_hitze_dysp": {
      "category": "medizin",
      "questionId": "hitze_28",
      "value": "Nein",
      "reason": "Atemnot / eingeschränkte Sprechfähigkeit bei Hitze-/Kälteproblem"
    },
    "nef_kollaps_dysp": {
      "category": "medizin",
      "questionId": "kollaps_27",
      "value": "Nein",
      "reason": "Atemnot / eingeschränkte Sprechfähigkeit bei Kollaps/Kreislaufstörung"
    },
    "nef_kollaps_dysp2": {
      "category": "medizin",
      "questionId": "kollaps_29",
      "value": "Nein",
      "reason": "Atemnot nach Brustschmerz bei Kollaps/Kreislaufstörung"
    },
    "nef_krampf_anhaltend": {
      "category": "medizin",
      "questionId": "krampf_27",
      "value": "Ja",
      "reason": "Anhaltender Krampfanfall"
    },
    "nef_krampf_wiederholt": {
      "category": "medizin",
      "questionId": "krampf_28",
      "value": "Ja",
      "reason": "Wiederholte Krampfanfälle"
    },
    "nef_suizid": {
      "category": "medizin",
      "questionId": "psyche_27",
      "value": "Ja",
      "reason": "Konkrete Selbstgefährdung / Suizidabsicht gemäß Abfrage"
    }
  },
  "resource_rules": {
    "med": {
      "category": "medizin",
      "questionId": "medizin_art",
      "value": "*",
      "resources": [
        "RTW"
      ]
    },
    "med_critical": {
      "category": "medizin",
      "questionId": "bewusstsein",
      "value": "*",
      "resources": [
        "RTW"
      ]
    },
    "brand": {
      "category": "brand",
      "questionId": "feuerart",
      "value": "*",
      "resources": [
        "Feuerwehr"
      ]
    },
    "brand_people": {
      "category": "brand",
      "questionId": "personen_im_objekt",
      "value": "Ja",
      "resources": [
        "Rettungsdienst"
      ]
    },
    "thl": {
      "category": "thl",
      "questionId": "thl_art",
      "value": "*",
      "resources": [
        "Feuerwehr / technische Hilfeleistung"
      ]
    },
    "thl_people": {
      "category": "thl",
      "questionId": "beteiligte",
      "value": "Ja",
      "resources": [
        "Rettungsdienst"
      ]
    },
    "water": {
      "category": "thl",
      "questionId": "thl_art",
      "value": "Wasser / Eis / Ertrinkungsunfall",
      "resources": [
        "Feuerwehr / Wasserrettung",
        "Rettungsdienst"
      ]
    },
    "abc": {
      "category": "abc",
      "questionId": "abc_art",
      "value": "*",
      "resources": [
        "Feuerwehr / ABC-Gefahrgut-Komponente"
      ]
    },
    "abc_people": {
      "category": "abc",
      "questionId": "betroffen",
      "value": "Ja",
      "resources": [
        "Rettungsdienst"
      ]
    },
    "MED_RES_REA": {
      "id": "MED_RES_REA",
      "category": "medizin",
      "questionId": "deterioration",
      "values": "Herz-Kreislauf-Stillstand",
      "resources": [
        "RTW / Rettungsdienst",
        "NEF / Notarzt – gemäß hinterlegtem Notarztindikationskatalog"
      ]
    },
    "MED_RES_DYSP": {
      "id": "MED_RES_DYSP",
      "category": "medizin",
      "questionId": "atem_01",
      "values": "Ja",
      "resources": [
        "RTW / Rettungsdienst"
      ]
    },
    "res_access_absturz": {
      "category": "medizin",
      "questionId": "zugang_02",
      "value": "Abgestürzt",
      "resources": [
        "Feuerwehr – technische Rettung / Zugang prüfen"
      ]
    },
    "res_access_eingeklemmt": {
      "category": "medizin",
      "questionId": "zugang_02",
      "value": "Eingeklemmt",
      "resources": [
        "Feuerwehr – technische Rettung / Befreiung"
      ]
    },
    "res_access_tuer": {
      "category": "medizin",
      "questionId": "zugang_02",
      "value": "Verschlossene Wohnung",
      "resources": [
        "Feuerwehr – Türöffnung prüfen"
      ]
    },
    "res_access_verschuttet": {
      "category": "medizin",
      "questionId": "zugang_02",
      "value": "Verschüttet / eingestürzt",
      "resources": [
        "Feuerwehr – technische Rettung / Sicherung"
      ]
    },
    "res_access_hoehe": {
      "category": "medizin",
      "questionId": "zugang_02",
      "value": "Auf Dach / Balkon / Höhe",
      "resources": [
        "Feuerwehr – Zugang / Höhenrettung prüfen"
      ]
    },
    "res_access_fahrzeug": {
      "category": "medizin",
      "questionId": "zugang_02",
      "value": "In Fahrzeug / Aufzug eingeschlossen",
      "resources": [
        "Feuerwehr – technische Rettung / Befreiung"
      ]
    },
    "res_access_gelaende": {
      "category": "medizin",
      "questionId": "zugang_02",
      "value": "Unzugängliches Gelände / schwer erreichbar",
      "resources": [
        "Feuerwehr – technische Rettung / Zugang prüfen"
      ]
    },
    "res_psyche_polizei": {
      "category": "medizin",
      "questionId": "psyche_28",
      "value": "*",
      "resources": [
        "Polizei – lageabhängig zusätzlich zu prüfen"
      ]
    },
    "res_psyche_fw_d_mpfe_gase": {
      "category": "medizin",
      "questionId": "psyche_28",
      "value": "Dämpfe / Gase",
      "resources": [
        "Feuerwehr – Gefahrenlage/technische Unterstützung prüfen"
      ]
    },
    "res_psyche_fw_selbstverbrennung": {
      "category": "medizin",
      "questionId": "psyche_28",
      "value": "Selbstverbrennung",
      "resources": [
        "Feuerwehr – Gefahrenlage/technische Unterstützung prüfen"
      ]
    },
    "res_psyche_fw_s_ure_laugen": {
      "category": "medizin",
      "questionId": "psyche_28",
      "value": "Säure / Laugen",
      "resources": [
        "Feuerwehr – Gefahrenlage/technische Unterstützung prüfen"
      ]
    },
    "res_psyche_fw_sprengstoff_explosion": {
      "category": "medizin",
      "questionId": "psyche_28",
      "value": "Sprengstoff / Explosion",
      "resources": [
        "Feuerwehr – Gefahrenlage/technische Unterstützung prüfen"
      ]
    },
    "res_psyche_fw_strom_elektrizit_t": {
      "category": "medizin",
      "questionId": "psyche_28",
      "value": "Strom / Elektrizität",
      "resources": [
        "Feuerwehr – Gefahrenlage/technische Unterstützung prüfen"
      ]
    },
    "res_psyche_fw_ertrinken": {
      "category": "medizin",
      "questionId": "psyche_28",
      "value": "Ertrinken",
      "resources": [
        "Feuerwehr – Gefahrenlage/technische Unterstützung prüfen"
      ]
    }
  },
  "suggestions": {
    "verdachtsdiagnose": [
      "Magen-Darm-Erkrankung",
      "Infekt / fieberhafter Infekt",
      "Kreislaufstörung",
      "Unterzuckerung / Hypoglykämie",
      "Allergische Reaktion",
      "Asthma / Atemwegserkrankung",
      "Herz-Kreislauf-Erkrankung",
      "Möglicher Herzinfarkt / ACS",
      "Möglicher Schlaganfall",
      "TIA / neurologisches Ereignis",
      "Krampfanfall / Epilepsie",
      "Sturzverletzung / Trauma",
      "Vergiftung / Intoxikation",
      "Dehydratation / Flüssigkeitsmangel",
      "Unklare Ursache"
    ],
    "gefahrstoffe": [
      "Benzin",
      "Diesel",
      "Heizöl",
      "Ammoniak",
      "Chlor",
      "Unbekannter Stoff"
    ]
  },
  "metadata": {
    "medicalCatalogVersion": "V49",
    "medicalQuestionCount": 1083
  }
};
