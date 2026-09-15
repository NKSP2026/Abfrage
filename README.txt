Einsatzabfrage – Firebase-Entscheidungsbaum V16

Der Fragenkatalog kann jetzt vollständig in Firebase verwaltet werden.

WICHTIGER START:
1. GitHub-Dateien vollständig ersetzen.
2. https://nksp2026.github.io/fragen.html öffnen.
3. Als Administrator anmelden.
4. Einmal „Grundkatalog in Firebase übernehmen“ drücken.
5. Danach verwendet die normale Einsatzabfrage den in Firebase gespeicherten Fragenbaum.

Entscheidungslogik:
- Fragen werden nicht fortlaufend 1..N abgearbeitet.
- Eine Frage wird nur angezeigt, wenn ihre Bedingungen erfüllt sind.
- Unterstützt werden whenQuestion/whenValue, whenAll, whenAny, whenNot und whenTextIncludes.
- Der Fragenkatalog enthält viele mögliche Fragen; pro Einsatz werden nur relevante Zweige geladen.
- BEFAST/FAST bleibt ein spezieller neurologischer Zweig und darf nur durch neurologische Hinweise aktiviert werden.
- Verdachtsdiagnose bleibt am Ende der medizinischen Abfrage.

Firebase-Struktur:
/catalog/_meta
/catalog/medizin/<frage-id>
/catalog/brand/<frage-id>
/catalog/thl/<frage-id>
/catalog/abc/<frage-id>

Admin-Seite:
fragen.html

Eine Folgefrage wird in Firebase über ihre Bedingungen definiert. Beispiel:
{"whenAll":[{"questionId":"leitsymptom","value":"Bauchschmerzen / Bauchbeschwerden"}]}

Die lokale data.js bleibt als sicherer Grundkatalog/Fallback erhalten. Sobald schemaVersion 2 in Firebase vorhanden ist, wird der Firebase-Katalog pro Kategorie verwendet.


V25 – medizinischer Grundablauf
- Medizinischer Startablauf: 1) Für wen / Patient, 2) Anzahl Betroffene, 3) Sprechfähigkeit, 4) Alter + Geburtsdatum + Geschlecht, 5) genauer Grund des Anrufs.
- Alle Ja/Nein-Fragen verwenden die vier Standardantworten: Ja, Nein, Unsicher (kann nicht beurteilt werden), Unbekannter (kein Kontakt / keine Angabe möglich).
- Hauptgrund als Button-Matrix mit 20 medizinischen Themen.
- Entscheidungsbaum enthält über 1.800 medizinische Schlüsselfragen; je Einsatz werden davon nur passende Fragen eingeblendet. Nach dem Hauptgrund sind regulär maximal 10 Folgefragen vorgesehen; der Ausstieg erstellt trotzdem eine Auswertung aus den bisherigen Angaben.
- Blutungen: Verletzung zuerst, anschließend Blutungsquelle und darauf passende Blutungsfragen, einschließlich Varizen-/Shunt-/Katheter-/GI-/gynäkologischer/HNO-/urogenitaler Pfade.
- Bauchschmerz: eigener Darm-/Verstopfung-/Ileus-Pfad; die gewünschte Obstipation nach sehr großer Obstmenge wird als anamnestischer Hinweis abgefragt, nicht als bewiesene Ursache des Ileus.
- Vergiftung: eigener Pilzpfad mit Pantherina-Syndrom als möglicher Verdachtsdiagnose bei passender Pilzexposition und Symptomkonstellation.
- Patientendaten sind ein eigener Fragetyp mit Alter, Geburtsdatum und Radiobuttons für Geschlecht.
- Firebase-Katalogschema wurde auf Version 3 angehoben. Nach dem Update in fragen.html als Administrator einmal „Grundkatalog in Firebase übernehmen“ ausführen.
- Die Anwendung erzeugt Dispositions-/Alarmmittelvorschläge; eine echte Alarmierung an ein externes ELS erfolgt nicht automatisch.


V25: Blutdruck-Auswahl zeigt systolisch und diastolisch ausdrücklich. Diabetes-Blutzucker-Auswahl wird in mmol/l mit Hypo-/Hyperglykämie-Bereichen geführt. Nach dem Update bitte den Grundkatalog erneut in Firebase übernehmen (Katalogschema 4).
