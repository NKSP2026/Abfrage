EAS Einsatzabfrage V29

Launcher / Startbildschirm neu aufgebaut nach der gewünschten EAS-Optik.

NEU:
- Startseite ist jetzt ein EAS-ähnlicher Launcher.
- Einsatzbearbeiter können am Anfang nur ILS und EHSI öffnen.
- ILS öffnet anschließend die bereits vorhandene Einsatzabfrage-Auswahl.
- EHSI ist als Einsatzhilfe / Informationssystem umgesetzt.
- QM1 ist für Administratoren reserviert und bündelt:
  * Fragen & Entscheidungsbaum
  * Einsatzstichworte
  * AAO / Einsatzmittel
  * Grundkatalog nach Firebase übernehmen
  * QM2 / Qualität & Auswertung
  * System & Verbindung
- Administrator-Anmeldung erfolgt direkt am Launcher.
- Nach Administrator-Anmeldung werden alle Module freigeschaltet.
- Abmelden ist am Launcher sowie in Abfrage/Ergebnis vorhanden.
- Schließen versucht das Browserfenster zu schließen; moderne Browser dürfen dies bei normalen Tabs blockieren.
- QM2 zeigt das letzte lokal gespeicherte Abfrageergebnis.
- DOK ist als Dokumenten-Zentrale vorbereitet.
- Technischer Fehler aus V27 behoben: core.js importiert keine nicht mehr exportierten defaultAAO/defaultStichworte mehr.
- Bestehender V27-Fragenbaum inklusive Fieberzweig bleibt erhalten.

Hinweis EHSI:
Die genaue Bedeutung der Bezeichnung EHSI konnte öffentlich nicht sicher verifiziert werden. Daher wurde die Schaltfläche bewusst als Einsatzhilfe / Informationssystem umgesetzt und kann später problemlos umbenannt oder mit einer konkreten Funktion belegt werden.
