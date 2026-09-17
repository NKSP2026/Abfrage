NABS V62 – Körperkarte korrigiert

Die Hotspots wurden für das vorhandene 1536x1251-Körperschema komplett neu auf die tatsächlichen Vorder- und Rückseitenpositionen gelegt.
- Vorderseite und Rückseite separat kalibriert
- Arme, Hände, Finger, Beine, Füße enger am Skelett
- keine pauschale Verschiebung des gesamten Bildes
- Auswahl bleibt orange
- Weiter auch ohne Auswahl möglich
- VKOF wird nur bei Verbrennung/Verbrühung/Verätzung angezeigt

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

V27 – Fiebermanagement ergänzt

- Fieber-Zweig enthält jetzt eine strukturierte Temperaturauswahl:
  ≤37,5 °C, >37,5 bis <38,5 °C, 38,5–41,0 °C, >41,0 °C, unbekannt.
- Weitere Folgefragen: warme/kalte Hände und Füße, Schüttelfrost/Frieren, deutliches Unwohlsein, Trinkfähigkeit, Atmung, Bewusstseinslage, auffällige Hautveränderungen, Krampfanfall und Fieberdauer.
- Die Hinweise zum Fiebermanagement orientieren sich an der S3-Leitlinie Fiebermanagement bei Kindern und Jugendlichen (AWMF 027-074, Version 1.0, 2025).
- Wadenwickel werden nicht allein anhand der Temperatur empfohlen: bei warmen Händen/Füßen und Unwohlsein können körperwarme Wadenwickel erwogen werden; bei Frieren, Schüttelfrost oder kalten Händen/Füßen soll nicht gekühlt werden.
- Die Temperaturangaben sind für die strukturierte Abfrage gedacht und stellen keine eigenständige Diagnose dar.

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
Die genaue Bedeutung der Bezeichnung EHSI konnte öffentlich nicht sicher verifiziert werden. Daher wurde die Schaltfläche 

EAS Einsatz-Abfrage-System V30

Abfrageoberfläche nach dem gewünschten Referenzbild angepasst.
- AF-Schaltfläche aus dem Fragenkopf entfernt.
- AF-Schaltfläche in den oberen Status-/Kopfbereich verschoben.
- Die zusätzliche Karte „Abfragebemerkung“ unterhalb der Fragen entfernt.
- Die Bemerkung bleibt über die feste Schaltfläche „📝 Bemerkung“ erreichbar und wird weiterhin in Ergebnis/Einsatztext berücksichtigt.
- Restlicher Fragen- und Entscheidungsbaum unverändert.

NABS V63 – Körperkarte Feinjustierung

Änderung gegenüber V62:
- Alle Körper-Hotspots ab Hals/Nacken um 22 px nach unten verschoben.
- Finger und Zehen zusätzlich weiter nach unten verschoben.
- Becken-/Hüftbereiche ebenfalls mitverschoben, damit sie besser auf dem tatsächlichen Becken liegen.
- VKOF-Anzeige wird auf maximal 100,0 % begrenzt, damit durch überlappende Auswahlfelder kein Wert über 100 % angezeigt wird.
- Kopf-/Gesichtsbereiche bleiben unverändert.

NABS V65 – Anatomische Verletzungskarte

Neu:
- Körperkarte verwendet SVG-Pfade statt rechteckiger Hotspots.
- Die orange Markierung folgt der anatomischen Kontur der Region.
- Rechtsklick am PC bzw. Tippen auf Touch-Geräten öffnet die Verletzungsarten-Auswahl.
- Verletzungsarten nach dem gewünschten Vorbild: unklar, Amputation, Bissverletzung, Erfrierung, Fraktur, Luxation, Platzwunde/Schürfung, Prellung/Bänderverletzung, Quetschung, Riss-/Quetsch-/Schnittverletzung, tiefe Schnittwunde, Schussverletzung, Stich-/Pfählungsverletzung, Verbrennung/Verbrühung/Verätzung, Hiebverletzung, Verletzungsmechanismus schwer.
- Pro markierter Region wird die gewählte Verletzungsart gespeichert.
- Abfrage, Ergebnis und PDF verwenden dieselben SVG-Pfade.
- Das Ergebnis zeigt Region + Verletzungsart.
- Die vorhandene saubere Skelettgrafik bleibt als Hintergrund erhalten; der Screenshot 83073 diente als Referenz für die gewünschte Bedienung/Markierungsdarstellung. Der Screenshot selbst enthält zusätzliche Bedienoberflächen und ist deshalb nicht als Hintergrundgrafik eingebaut.
- VKOF bleibt ausschließlich für Verbrennung/Verbrühung/Verätzung aktiv.

NABS V66 – hochaufgelöste anatomische Verletzungskarte

- PC: Region mit der Maus überfahren -> anatomische Bezeichnung wird angezeigt.
- PC: Auswahl ausschließlich über RECHTSKLICK.
- Touch: langes Gedrückthalten öffnet die Auswahl.
- Danach kann pro Körperregion die Verletzungsart gewählt werden.
- Mehrere Regionen können gleichzeitig ausgewählt werden.
- Vorder-/Rückseite mit zusätzlichen Einzelregionen für Abdomen, Ober-/Unterbauch, Flanken, Wirbelsäule, Brustkorb/Rippen, Becken/Hüfte, Gelenke, Hände/Finger und Füße/Zehen.
- Finger und Zehen sind einzeln benannt (Daumen/Zeigefinger/Mittelfinger/Ringfinger/Kleiner Finger bzw. Großzehe bis 5. Zehe).
- Ergebnis und PDF verwenden dieselben SVG-Pfade wie die Abfrage.
- Die medizinische Zuordnung ist eine strukturierte Erfassung und keine eigenständige Diagnose.


V66 Feuerwehr-Erweiterung 2026-09-17:
- Feuerwehr-Einstieg mit den Schadensfall-Themen aus der Referenz: Brand/Rauch, Blitzschlag, Gewalt, Naturereignis, Räumung/Evakuierung, Terroranschlag ausgeführt/Drohung, Vergiftung, MANV, Wasserlagen, Verkehrsunfall, THL, ABC, Explosion, Einsturz, Person in Notlage, Tierrettung, Öl/Umweltschaden, Sonstige.
- Neue Feuerwehrfragen sind abhängig vom gewählten Schadensfall verzweigt.
- Bestehender V66-Brandzweig bleibt erhalten und wird nur bei Brand/Rauch angezeigt.
- Nicht-medizinische Abfragen werden nicht mehr pauschal nach 10 Fragen abgeschnitten.
- Anatomiekarte/bodymap.js unverändert übernommen.
- Einsatzstichwort, Einsatztext und Ressourcen berücksichtigen die neue Feuerwehrlage.

