V26 – Abfrage/Disposition Verbesserungen

1. Patientendaten:
- Geburtsdatum berechnet das Alter automatisch.
- Nur Alter ist zulässig.
- Nur Geburtsdatum ist zulässig; Alter wird berechnet.
- Alter und Geburtsdatum leer ist zulässig (keine Angaben vorhanden).
- Geschlecht muss nicht angegeben werden.

2. Ergebnis:
- Fallback-Einsatzstichwort wird auch ohne Firebase-Einsatzstichwort angelegt.
- Alarmmittelvorschlag enthält RTW/Rettungsdienst, NEF/Notarzt bei hinterlegten Kriterien und lageabhängig zusätzliche Feuerwehr-/Polizei-Hinweise.
- Zusätzliche Kräfte werden nur bei konkreten Hinweisen aus den Antworten als "zusätzlich erforderlich/zu prüfen" bzw. "lageabhängig ... zu prüfen" ausgewiesen.
- Einsatztext ist als Kurztext aus den wichtigsten vorhandenen Antworten aufgebaut.
- Abfragebemerkung wird als Zusatzinformation angehängt.

3. Die endgültige Alarmierung muss weiterhin über die örtliche AAO und den zuständigen Disponenten erfolgen.


4. Ergebnisanzeige erweitert:
- Expliziter Alarmierungsvorschlag mit RTW, NEF, Feuerwehr und Polizei.
- Einsatzstichwort wird auch ohne Firebase-Stichwortdaten aus dem lokalen Regelwerk erzeugt.
- Erkrankungs-Unterthemen werden im Einsatzstichwort berücksichtigt.
- Einsatztext bleibt ein kompakter Kurztext aus den wichtigsten Antworten.
- Blutdruck-Hochdruckbedingung korrigiert.
