export const startupDefaults={
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
    "medicalCatalogVersion": "V27",
    "medicalQuestionCount": 994
  }
};
