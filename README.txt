Version 5.2 – Änderungsprotokoll
================================

- Versionsnummer des NABS-Pakets auf 5.2 angehoben.
- Einsatzart-Auswahl in der ILS auf zwei Reihen mit jeweils drei Kacheln angepasst:
  Oben: Rettungsdienst, Feuerwehr, Aufzugsnotruf.
  Unten: Verkehrsunfall, Wasserunfall, Großschaden.
- Künftige ausgelieferte ZIP-Pakete werden fortlaufend als Version_5.3_NABS.zip,
  Version_5.4_NABS.zip usw. benannt.
- Änderungen jeder neuen Version werden jeweils in dieser README.txt dokumentiert.


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


=== V68.1 – Anatomische Körperkarte nach Referenzbild 83075 ===
Datum: 18.09.2026

Die vorhandene README.txt ist die einzige Änderungsdokumentation. Es wurde keine zusätzliche README-Datei angelegt.

Körperkarte:
- Das aktuelle Referenzbild 83075.jpg wurde als Grundlage der Körperkarte übernommen und als koerperkarte_verbrennung.jpg eingebunden.
- Die SVG-Überlagerung verwendet jetzt exakt das Seitenverhältnis 1536 x 759 des Referenzbildes.
- Vorder- und Rückseite des großen Skeletts wurden auf die Positionen des Referenzbildes angepasst.
- Oberarme, Schultern, Rumpf, Becken/Hüfte, Oberschenkel, Knie und Unterschenkel werden über die Konturen des großen Skeletts gelegt.
- Kopf/Gesicht wird NICHT mehr am kleinen Kopf des großen Skeletts ausgewählt.
- Die Gesichtsauswahl befindet sich ausschließlich auf der großen Gesichtsabbildung in der Bildmitte und umfasst: Schädeldecke, Stirn, Schläfe rechts/links, Auge rechts/links, Nase, Oberkiefer rechts/links, Unterkiefer rechts/links, Kinn und Mund.
- Handgelenk, Handfläche und einzelne Finger werden NICHT mehr an den Händen des großen Skeletts ausgewählt. Sie liegen ausschließlich im Hand-Detailbild links.
- Knöchel/Sprunggelenk, Fuß und einzelne Zehen werden NICHT mehr an den Füßen des großen Skeletts ausgewählt. Sie liegen ausschließlich im Fuß-Detailbild links unten.
- Die alten Hotspots für die genannten Detailbereiche wurden deaktiviert, damit keine doppelte Auswahl mehr möglich ist.
- Ergebnisansicht und PDF/Druckansicht verwenden dieselben Transformationen wie die Abfrage, damit die Markierungen an derselben anatomischen Stelle erscheinen.

Wichtiger Hinweis:
- Die Seitenzuordnung der Detailbilder (ein einzelnes Hand-/Fuß-Detailbild) wird über die Bezeichnung des auswählbaren Bereichs geführt. Die Detailbereiche selbst sind absichtlich nicht zusätzlich auf dem großen Skelett aktiv.

- Bei Hand-/Fuß-Detailbereichen kann zusätzlich die Seite Rechts/Links ausgewählt werden; die Seite wird zusammen mit der Verletzungsart in den Details gespeichert.


=== V68.2 – ANATOMIE / VERLETZUNGSKARTE ===
Datum: 18.09.2026

- Die Haupt-Hotspots der Verletzungskarte wurden direkt auf die tatsächlich verwendete 1536x759-Referenzgrafik koerperkarte_verbrennung.jpg angepasst.
- Schulterblätter, Schultern, Oberarme, Ellenbogen, Unterarme, Brustkorb, Bauch, Becken/Hüfte und Gesäß liegen jetzt im Koordinatensystem des sichtbaren Körperschemas; die vorherige globale 1536x1251-Verzerrung wurde entfernt.
- Hände und Füße bleiben ausschließlich über die großen Detailbilder auswählbar. Die einzelnen Finger und Zehen bleiben als eigene, angepasste Bereiche erhalten.
- Der Kopf wird ausschließlich über die große Gesichtsabbildung ausgewählt. Ergänzt: Ohr rechts und Ohr links.
- In der Bildmitte liegen jetzt echte HTML-Schaltflächen über den gedruckten Frageflächen der Referenzgrafik. Erfasst werden Gefühlsstörung/Lähmung, leichte bis mäßige Schmerzen, starke Schmerzen und lebensbedrohliche Blutung.
- Eine bereits ausgewählte Zusatzfrage wird aus der Button-Liste entfernt und beim weiteren Durchlauf nicht erneut angeboten. Die Auswahl wird in verletzung_v51_symptome gespeichert.
- „Auswahl löschen“ setzt zusätzlich diese Zusatzfragen zurück.
- Ergebnisansicht und PDF verwenden weiterhin dieselben BodyMap-Regionen.


NABS V68.3 – Anatomie-Zielpositionen korrigiert (18.09.2026)
- Die orange Overlay-Fläche wird als Sollposition exakt an der sichtbaren anatomischen Struktur der Referenzgrafik ausgerichtet.
- Maßgeblich waren die vom Nutzer rot markierten Sollbereiche: Unterbauch/Becken, Schultern, Oberarme sowie die übrigen Hauptkörperregionen.
- Hand-, Finger-, Fuß- und Zehenbereiche bleiben ausschließlich in den Detailabbildungen.
- Kopf-/Gesichtsdetails inklusive Ohren bleiben in der separaten Gesichtsansicht.
- Die mittleren Zusatzfragen sind echte Buttons; bereits beantwortete Fragen werden in derselben Abfrage nicht erneut angezeigt.


=== V68.4 – SOLLPOSITIONEN NACH FARBMARKIERUNGEN ===
Datum: 18.09.2026

- Grundregel für die Anatomiekarte: ORANGE zeigt nur die vom Programm aktuell verwendete Hotspot-Fläche.
- Die in den Referenz-Screenshots ROT, CYAN, BLAU, PINK und GRÜN markierten Flächen wurden als SOLLPOSITIONEN behandelt und nicht als aktuelle Programmpositionen.
- Unterarme vorne wurden entsprechend der roten/cyan Markierungen nach außen und entlang des tatsächlichen Unterarmverlaufs verschoben.
- Beide vorderen Knie wurden entsprechend der blauen Markierungen auf die tatsächlichen Knie-/Kniescheibenbereiche gelegt.
- Obere und untere Waden hinten wurden entsprechend der pinken bzw. grünen Markierungen auf die tatsächlichen Wadenbereiche gelegt; die Seitenzuordnung bleibt erhalten.
- Hand-/Finger- und Fuß-/Zehen-Detailflächen wurden ebenfalls an die im Referenzbild markierten Strukturen angepasst.
- Diese Korrekturen überschreiben die vorherigen Näherungspositionen, damit nicht weiterhin alte orange Flächen als Grundlage verwendet werden.
- Es bleibt bei einer einzigen README.txt; alle Änderungen werden chronologisch hier ergänzt.


=== V68.5 – ZUSATZFRAGEN UNTERHALB DER KÖRPERKARTE ===
Datum: 18.09.2026

- Die Zusatzfragen Gefühlsstörung/Lähmung, leichte bis mäßige Schmerzen, starke Schmerzen und lebensbedrohliche Blutung liegen NICHT mehr über der Körpergrafik.
- Die gedruckten Frageflächen in der Mitte des Referenzbildes werden nicht mehr überdeckt.
- Die Zusatzfragen sind echte HTML-Buttons in einem eigenen Bereich direkt UNTERHALB der Körperkarte.
- Die Anordnung passt sich automatisch an: auf PC/Tablet zwei Spalten, auf kleinen Handy-Bildschirmen eine Spalte.
- Eine bereits ausgewählte Zusatzfrage wird sofort aus der Liste entfernt und bei erneutem Rendern nicht nochmals angeboten.
- Wenn alle Zusatzfragen beantwortet wurden, wird der Zusatzfragen-Bereich vollständig ausgeblendet.
- „Auswahl löschen“ setzt Körperauswahl, Verletzungsdetails und Zusatzfragen gemeinsam zurück.
- Die anatomischen Sollpositionen aus V68.4 bleiben unverändert; diese Version ändert ausschließlich die Platzierung der Zusatzfragen außerhalb der Grafik.
- Es bleibt bei genau einer README.txt.


=== V68.19 – AUFRÄUMEN / HINWEISTEXT ENTFERNT ===
Datum: 20.09.2026

- Der in der Abfrage direkt oberhalb der Markierungs-Zusammenfassung angezeigte Hinweisblock „Körperflächen-/Verletzungskarte“ wurde vollständig entfernt.
- Entfernt wurde ausschließlich der erklärende Textblock; die eigentliche Körperkarte, die orange Markierung, die Zusammenfassung und die zusätzlichen Angaben bleiben erhalten.
- Die permanente Abfragelogik und die Antwortmöglichkeiten bleiben unverändert.
- Die Versionsnummer des abfrage.js-Cache wurde erhöht, damit GitHub Pages die Änderung sicher lädt.
- Die bisherigen versionsbezogenen README-Dateien wurden in diese zentrale README.txt zusammengeführt. Es bleibt ab jetzt bei genau einer README.txt für die Änderungsdokumentation.


=== V68.20 – UNTERKÖRPER / BEINE WIEDER AKTIV ===
Datum: 20.09.2026

- Fehler behoben: Hüfte, Leiste, Intimbereich, Oberschenkel, Knie, Unterschenkel und Fußsohle konnten nach der Bereinigung nicht mehr angeklickt werden.
- Ursache: Die neu erstellten Vorderbein-Sollflächen waren korrekt im bodymap.js vorhanden, wurden aber beim abschließenden KEEP_DETAIL_IDS-Filter versehentlich wieder aus der aktiven Regionenliste entfernt.
- Die exakt festgelegten Flächen aus der Referenz 86682.jpg sind jetzt wieder aktive Klickflächen.
- Aktiviert sind: Hüfte links/rechts, Leiste links/rechts, Intimbereich, Oberschenkel links/rechts, Knie/Kniescheibe links/rechts, Unterschenkel links/rechts und Fußsohle links/rechts.
- Die alten Unterteilungen der Oberschenkel und Unterschenkel bleiben deaktiviert.
- Kopf, Hand, Fuß-Detail, Vorderkörper und die übrigen bisher freigegebenen Bereiche bleiben unverändert.
- Der bodymap.js-Cache wurde in abfrage.html auf eine neue Versionsnummer erhöht.
- Es bleibt bei genau einer README.txt; diese Änderung wurde hier ergänzt.


=== V68.21 – UNTERKÖRPER SOLLPOSITIONEN NEU AUFGEBAUT ===
Datum: 20.09.2026

- Die bisherigen alten Unterkörper-Koordinaten wurden nicht weiterverwendet.
- Die Unterkörperflächen wurden vollständig anhand der farbigen Referenz 86682.jpg neu aufgebaut.
- Grün = Becken links/rechts.
- Rot = Leiste links/rechts.
- Schwarz = Intimbereich.
- Orange = Oberschenkel links/rechts.
- Zyan = Kniescheibe/Knie links/rechts.
- Blau = Unterschenkel links/rechts.
- Dunkelgrün = Fußsohle links/rechts.
- Die neuen Flächen liegen direkt im Koordinatensystem der aktuellen 1536x867-Körperkarte und erhalten keine alte FRONT-Transformation.
- Das alte einteilige Becken wurde deaktiviert und durch getrennte Beckenflächen links/rechts ersetzt.
- Die alten Unterteilungen der Ober- und Unterschenkel bleiben deaktiviert.
- Kopf, Vorderkörper, Hand und Fuß-Detail bleiben erhalten.
- Keine Referenzfarben werden in der Anwendung angezeigt; orange bleibt ausschließlich die Auswahlfarbe.
- bodymap.js-Cache in abfrage.html auf v821 erhöht.
- Es bleibt bei genau einer README.txt.


=== V68.22 – RÜCKSEITE OBERKÖRPER SOLLPOSITIONEN EXAKT ===
Datum: 20.09.2026

- Die Rückseite des Oberkörpers wurde vollständig anhand der neuen Referenz 87178.jpg neu aufgebaut.
- Rosa = Schädel (Cranium).
- Dunkelgrün = Halswirbel (HWS 1–6).
- Rot = Brustwirbel (BWS 1–12).
- Orange = Lendenwirbel (LWS 1–5).
- Zyan = Kreuzbein.
- Blau = Steißbein.
- Gelb = Hüftbein (Os coxae) links und rechts.
- Lila = Schulterblatt (Scapula) links und rechts.
- Dunkelblau = Oberarmknochen (Humerus) links und rechts.
- Weiß = Ellenbogen links und rechts.
- Braun = Elle (Ulna) links und rechts.
- Pink = Speiche (Radius) links und rechts.
- Die alten Rückseitenflächen für Rippen, Flanken, Gesamt-Rücken, Nacken und Schulter wurden deaktiviert, damit keine alten Klickflächen die neuen Sollpositionen überlagern.
- Die neuen Flächen liegen direkt im Koordinatensystem der aktuellen 1536x867-Referenzgrafik und erhalten keine alte Rückseiten-Transformation.
- Die Referenzfarben werden nicht in der Anwendung angezeigt; ausgewählte Bereiche werden weiterhin ausschließlich orange dargestellt.
- bodymap.js-Cache in abfrage.html auf v822 erhöht.
- Es bleibt bei genau einer README.txt; diese Änderung wurde hier ergänzt.


V68.23 – 20.09.2026
- Fehler in V68.22 behoben: Die neu aufgebauten Rückseiten-Sollflächen wurden zwar definiert, aber anschließend durch die zentrale KEEP_DETAIL_IDS-Filterung entfernt. Dadurch war die Körperkarte nicht auswählbar bzw. zeigte keine aktiven Rückseitenflächen.
- Rückseitenflächen aus Referenz 87178.jpg bleiben jetzt ausdrücklich aktiv: Schädel, HWS, BWS, LWS, Kreuzbein, Steißbein, Hüftbein links/rechts, Schulterblatt links/rechts, Humerus links/rechts, Ellenbogen links/rechts, Ulna links/rechts und Radius links/rechts.
- Alte nicht gewünschte Rückseitenflächen bleiben deaktiviert.
- bodymap.js Cache-Version auf 20260920v723 erhöht.
- Bestehende README.txt fortgeführt; keine neue README-Datei angelegt.


V68.24 – 20.09.2026
- Rückseite Unterkörper/Beine vollständig neu nach Referenz 87245.jpg aufgebaut.
- Rosa = Oberschenkelkopf links/rechts.
- Rot = Schenkelbein links/rechts (proximaler Schenkelhalsbereich gemäß Markierung).
- Zyan = Oberschenkel (Femur) links/rechts.
- Lila = Schienbein (Tibia) links/rechts.
- Blau = Wadenbein (Fibula) links/rechts.
- Pink = Sprungbein (Talus) links/rechts.
- Braun = Fersenbein (Calcaneus) links/rechts.
- Die alten groben Rückseiten-Flächen für Oberschenkel, Knie, Unterschenkel, Wade, Sprunggelenk, Ferse, Fuß und Zehen wurden deaktiviert, damit ausschließlich die neuen Sollpositionen verwendet werden.
- Die neuen Knochenflächen liegen direkt im 1536x867-Bildkoordinatensystem und erhalten keine alte BACK_T-Transformation.
- Referenzfarben werden nicht dargestellt; ausgewählte Bereiche bleiben orange.
- bodymap.js Cache-Version in abfrage.html auf 20260920v824 erhöht.
- Die bestehende README.txt wurde weitergeführt; keine neue README-Datei angelegt.


V68.26 – 20.09.2026
- Rückseite: Die Geometrie/Klickflächen bleiben unverändert an den bisher exakt eingemessenen Sollpositionen.
- Ausschließlich die Beschriftungen „rechts“ und „links“ der paarigen Rückseitenbereiche wurden vertauscht, damit die Bezeichnung zur gewünschten anatomischen Seitenzuordnung passt.
- Betroffen: Schulterblätter, Humerus, Ellenbogen, Ulna, Radius, Hüftbein sowie die neu angelegten Bereiche Oberschenkelkopf/Schenkelbein, Schenkelhals, Femur, Tibia, Fibula, Talus und Calcaneus.
- Keine Spiegelung oder Verschiebung der Klickflächen.
- Bestehende README.txt weitergeführt; keine neue README-Datei angelegt.


V68.27 – 20.09.2026
- Unterkörper: Ausschließlich die Beschriftungen „rechts“ und „links“ der paarigen Unterkörperbereiche wurden vertauscht. Die Geometrie/Klickflächen bleiben unverändert.
- Betroffen vorne: Becken/Hüfte, Leiste, Oberschenkel, Knie, Unterschenkel und Fuß.
- Betroffen hinten: Hüftbein/Gesäßbereich sowie Oberschenkelkopf, Schenkelhals, Femur, Tibia, Fibula, Talus und Calcaneus.
- Zusätzlich wurde die rote Referenzbezeichnung korrekt als „Schenkelhals“ geführt; die Klickfläche selbst wurde nicht verändert.
- Keine Spiegelung oder Verschiebung der Körperflächen.
- Bestehende README.txt weitergeführt; keine neue README-Datei angelegt.

V68.28 – ABBRUCH-GRUND, QM1-LISTE UND PDF
Datum: 20.09.2026

- Der Button „Launcher“ innerhalb einer laufenden Abfrage öffnet nicht mehr direkt den Launcher. Zuerst muss ein Abbruchgrund ausgewählt werden.
- Der Button „Ausstieg“ öffnet ebenfalls die Abbruch-Grundauswahl.
- Abbruchgründe: Böswilliger Anruf, Fehlanruf, Verschlechterung, Test, Servicefrage und Sonstiges.
- Bei „Sonstiges“ erscheint ein Pflichtfeld für die konkrete Begründung.
- Nach Bestätigung wird der Abbruch unter Firebase RTDB „abbruchAbfragen“ gespeichert.
- Gespeichert werden Datum, Uhrzeit, Benutzerkennung, Abbruchgrund, sonstige Begründung, Abfragekategorie, Modus, Anzahl beantworteter Fragen, Abfragedauer und Abfragestatus.
- QM1 enthält jetzt die Kategorie „Abbruch abfragen“ mit einer Liste der gespeicherten Abbrüche.
- QM1 entfernt Einträge automatisch, die älter als zwei Monate sind. Die Bereinigung erfolgt beim Laden/Aktualisieren der Liste.
- QM1 bietet „PDF / Drucken“. Der Browser-Druckdialog kann die Liste als PDF speichern.
- Die bestehende README.txt wurde weitergeführt; keine neue README-Datei angelegt.
- Hinweis zur Benutzerkennung: Eine normale GitHub-Webanwendung kann den Windows-/PC-Benutzernamen aus Sicherheitsgründen nicht automatisch auslesen. Wenn ein Firebase-Benutzer angemeldet ist, wird dessen E-Mail-Adresse als Benutzerkennung gespeichert; bei einer anonymen Einsatzsitzung wird „Einsatzbearbeiter“ gespeichert.


=== V68.29 – ABRUCH SPEICHERN / WEITERLEITUNG ===
- Abbruchdialog über Launcher/Ausstieg verlangt jetzt immer eine explizite Auswahl und anschließend „Abbruch speichern“.
- „Sonstiges“ verlangt eine Begründung.
- Nach erfolgreichem Firebase-Speichern wird automatisch zu index.html (Startseite) weitergeleitet.
- Bei „Permission denied“ bleibt die Abbruchmaske offen und zeigt einen eindeutigen Hinweis auf die Firebase-Realtime-Database-Regeln.
- Die vorhandene zentrale README.txt wurde weitergeführt; keine neue README angelegt.
- Für gemeinsame Speicherung in QM1 muss die mitgelieferte database.rules.json in Firebase Realtime Database → Rules veröffentlicht werden. Unter abbruchAbfragen ist Schreiben für authentifizierte Benutzer erlaubt; die übrigen Bereiche bleiben administrativ geschützt.

V68.30 – ABBRUCHDIALOG / QM1 AKTIONEN KORRIGIERT
Datum: 20.09.2026

- Abbruchdialog über „Ausstieg“, „Launcher“ und „Beenden“ nochmals stabilisiert.
- Alle sechs Abbruchgründe sind jetzt echte type="button"-Schaltflächen und erhalten nach der Auswahl eine deutlich sichtbare blaue Markierung.
- „Abbruch speichern“ bleibt gesperrt, solange kein Grund ausgewählt wurde.
- Bei „Sonstiges“ bleibt „Abbruch speichern“ ohne eingetragene Begründung gesperrt; die Begründung ist Pflicht.
- Nach erfolgreichem Speichern geht die Anwendung NICHT mehr zur allgemeinen NABS-Startseite zurück, sondern direkt zur Seite mit der Auswahl „Rettungsdienst / Feuerwehr / Verkehrsunfall / Wasserunfall / Großschaden“ (ils.html).
- Die bestehende Abbruchaufzeichnung in Firebase „abbruchAbfragen“ bleibt erhalten.
- QM1: „Aktualisieren“ lädt die Abbruchliste jetzt mit sichtbarem Ladezustand neu.
- QM1: Jeder Abbruchdatensatz kann durch Administratoren einzeln gelöscht werden. Vor dem Löschen erfolgt eine Sicherheitsabfrage.
- Die PDF-/Druckfunktion bleibt erhalten und enthält weiterhin nur die gespeicherten Abbruchdaten.
- Die automatische Löschung von Einträgen älter als zwei Monate bleibt erhalten.
- Cache-Versionen von abfrage.js und qm1.js wurden erhöht, damit die neue Logik nach dem Hochladen nicht von einer alten Browserdatei überlagert wird.
- Keine neue README-Datei angelegt; diese Änderung wurde in der bestehenden zentralen README.txt ergänzt.


V68.31 – ABBRUCHDATEN REDUZIERT
Datum: 20.09.2026

- Neue Abbruch-Abfragen speichern ab jetzt ausschließlich drei Datenfelder in Firebase unter „abbruchAbfragen“: Datum (TT.MM.JJJJ), Uhrzeit (HH.MM.SS) und Abbruchgrund.
- Bei „Sonstiges“ wird die eingegebene Begründung direkt im Feld „abbruchgrund“ als „Sonstiges: …“ gespeichert.
- Benutzername, E-Mail, Abfragekategorie, Modus, Fragenanzahl, Abfragedauer und Status werden bei neuen Abbruch-Einträgen nicht mehr gespeichert.
- QM1 zeigt entsprechend nur Datum, Uhrzeit und Abbruchgrund sowie die Löschaktion an.
- Die PDF-/Druckliste enthält ebenfalls nur Datum, Uhrzeit und Abbruchgrund.
- Die automatische Zwei-Monats-Bereinigung funktioniert weiterhin: neue Einträge werden anhand von Datum/Uhrzeit geprüft. Bereits vorhandene ältere Datensätze mit „createdAt“ werden weiterhin erkannt.
- Einzelnes Löschen in QM1 bleibt erhalten.
- Für diese Änderung der gespeicherten Felder müssen die Firebase-Realtime-Database-Regeln nicht geändert werden. Die vorhandenen Regeln unter „abbruchAbfragen“ können unverändert bleiben.
- Voraussetzung für das Speichern bleibt eine vorhandene Firebase-Authentifizierung der Abfrage; bei der bisherigen anonymen Speicherung muss „Anonyme Anmeldung“ in Firebase Authentication aktiviert sein.
- Die bestehende zentrale README.txt wurde weitergeführt; keine neue README-Datei angelegt.


V68.32 – QM1 ABBRUCHLISTE / AKTUALISIERUNG REPARIERT
Datum: 20.09.2026

- Fehler behoben, bei dem QM1 bei der Abbruch-Liste dauerhaft „Abbruch-Liste wird geladen …“ anzeigen konnte.
- Die Abbruch-Einträge werden jetzt zuerst aus Firebase gelesen und sofort in der Liste dargestellt.
- Die automatische Zwei-Monats-Bereinigung läuft anschließend im Hintergrund und darf die Anzeige nicht mehr blockieren.
- „Aktualisieren“ lädt die Liste erneut und zeigt danach die aktuell vorhandenen Einträge.
- Die Anzahl der Einträge und „PDF / Drucken“ werden nach jedem Laden neu gesetzt.
- Das einzelne Löschen bleibt ausschließlich für den QM1-Administrator möglich.
- Es wurden keine Firebase-Regeln für diese Korrektur geändert.
- Die bestehende zentrale README.txt wurde weitergeführt; keine neue README-Datei angelegt.

V68.33 – ABBRUCHLISTE OHNE AUTHENTIFIZIERUNG REPARIERT
Datum: 20.09.2026

- Ursache der weiterhin leeren/hängenden QM1-Abbruchliste behoben: Der Abbruch-Log verwendet jetzt einen eigenen öffentlichen RTDB-REST-Zugriff.
- QM1 kann die Abbruchliste dadurch unabhängig von Firebase Authentication laden.
- Aktualisieren lädt die Daten direkt neu.
- Löschen und Zwei-Monats-Bereinigung verwenden ebenfalls den getrennten Abbruch-Log-Zugriff.
- Neue Abbrüche werden ebenfalls ohne Firebase-Anmeldung unter „abbruchAbfragen“ gespeichert.
- Die übrigen Firebase-Bereiche bleiben durch die vorhandenen Regeln geschützt.
- WICHTIG: Die mitgelieferte database.rules.json muss einmal in Firebase Realtime Database → Regeln veröffentlicht werden. Nur „abbruchAbfragen“ ist dort öffentlich les-/schreibbar; die übrigen Bereiche bleiben wie bisher geschützt.
- Dadurch ist für das Abbruchprotokoll keine Firebase-Anmeldung und keine anonyme Anmeldung erforderlich.
- Die drei gespeicherten Felder bleiben: Datum, Uhrzeit und Abbruchgrund.



NABS V68.35 – Anpassung Psychischer Erkrankung / Suizid

Änderungen:
- psyche_02 ersetzt die bisherige Frage „Hat die Person bereits konkrete Mittel/Medikamente bereitgelegt?“.
- Neue Frage: „Ist bekannt, wie sich die Person selbst verletzen oder Suizid begehen möchte?“
- Auswahlmöglichkeiten für die Notrufabfrage:
  Kohlenstoffmonoxidvergiftung (CO)
  Tabletten / Medikamente
  Sturz aus Höhe
  Vergiftung
  Drogen / Alkohol
  Schnitt- / Stichverletzung
  Erhängen / Strangulation
  Ertrinken
  Mehrere Methoden / mehrere Angaben
  Sonstige / unbekannt
- psyche_09 (Alkohol-/Drogenkonsum) entfernt.
- psyche_10 (größere Medikamentenmenge) entfernt.
- startup-data Cache-Version in abfrage.js erhöht, damit die neue Frage nach dem Deployment geladen wird.
- data.js und startup-data.js wurden synchron angepasst.

Es wurden keine anderen Fragen des Programms verändert.


V68.36: Feuerwehr-Abfrage auf einen kurzen, lagebezogenen Entscheidungsbaum mit 12–14 Fragen begrenzt; branch-spezifische Folgefragen statt des bisherigen langen Katalogs.

NABS V68.37 – AAO / Rettungsdienst-Stichwortlogik

Änderungen:
- Rettungsdienst: RTW-/NEF-Anzahl wird nicht mehr zusätzlich als Ja/Nein oder als separate Fahrzeugliste ausgegeben.
  Die Fahrzeuganzahl steckt im Stichwort selbst:
  R1 = 1 RTW, R2 = 2 RTW, R3 = 3 RTW, R4 = 4 RTW,
  N1R1 = 1 NEF + 1 RTW, N1R2 = 1 NEF + 2 RTW usw.
- Das NEF wird anhand der hinterlegten Notarztindikationsregeln bewertet.
- Feuerwehr/THL/ABC: Im Ergebnis werden nur die tatsächlich in der hinterlegten AAO für das gewählte Stichwort eingetragenen Feuerwehrfahrzeuge angezeigt.
  Allgemeine Einträge wie „Feuerwehr“, „RTW“ oder „NEF“ werden nicht als Feuerwehrfahrzeugliste ausgegeben.
- Bei Feuerwehr-/THL-Lagen mit betroffenen Personen wird der medizinische Anteil aus den vorhandenen Angaben berücksichtigt; die NEF-Entscheidung nutzt weiterhin die hinterlegten Notarztregeln.
- Vorhandene Firebase-Daten und database.rules.json wurden nicht verändert.
- Die Anwendung bleibt für mehrere gleichzeitig arbeitende Nutzer geeignet; es werden keine globalen Antworten im Browser geteilt.

Wichtig:
Die konkrete Feuerwehr-Fahrzeugauswahl kommt aus dem Firebase-AAO-Katalog (data.aao). Sind für ein Stichwort dort noch keine Fahrzeuge hinterlegt, zeigt die Ergebnis-Seite bewusst keine erfundenen Fahrzeuge an.

NABS V68.38 – AAO / Alarmstichworte / Volltext

Diese Version baut die AAO-Verwaltung deutlich aus.

1. AAO VERWALTUNG (aao.html)
- B1, B2, B3, G1, G2, G3, TH1, TH2, TH3 und SL wurden als Grundvorlage anhand der bereitgestellten AAO-Seiten hinterlegt.
- Fahrzeuge können einzeln hinzugefügt oder entfernt werden.
- Ein kompletter AAO-Eintrag kann gelöscht werden.
- Kategorie, Stichwort, Bezeichnung und Fahrzeugliste können ohne Programmiercode geändert werden.
- Zusätzlich gibt es ein Feld „Volltext / Beschreibung“.
- Die Grundvorlage kann als Administrator bei Bedarf erneut nach Firebase geschrieben werden.
- Bestehende individuelle Firebase-Einträge bleiben bei der Grundvorlage erhalten; sie werden nur für die genannten Vorlagen aktualisiert.

2. ALARMSTICHWORTE (einsatzstichworte.html)
- Alarmstichworte können ohne Programmiercode bearbeitet, aktiviert/deaktiviert oder gelöscht werden.
- Bedingungen können über Frage + Antwort ausgewählt werden.
- Mehrere Bedingungen können mit ALLE oder MINDESTENS EINE verknüpft werden.
- Priorität entscheidet bei mehreren passenden Stichworten.
- Der Volltext kann direkt beim Alarmstichwort gepflegt werden.
- B1–B3, G1–G3, TH1–TH3 und SL können als deaktivierte Grundvorlagen übernommen werden, damit keine unkonfigurierte Vorlage automatisch alarmiert wird.

3. ERGEBNIS
- Der Volltext des gewählten Alarmstichworts wird separat als „Volltext zum Alarmstichwort“ angezeigt.
- Der Volltext wird auch in PDF/Druck übernommen.
- Bei Rettungsdienst/medizinisch wird das NEF ausdrücklich als JA/NEIN dargestellt.
- R1/R2/R3/R4 bzw. N1R1/N1R2 usw. bleiben die Codierung der Rettungsmittel; RTW/NEF werden dadurch nicht doppelt als einzelne Feuerwehrmittel angezeigt.
- Bei Feuerwehr/THL werden nur die tatsächlich in der AAO hinterlegten Feuerwehrfahrzeuge angezeigt.

4. WICHTIG
Die AAO-Seiten sind eine Vorlage aus den vom Benutzer bereitgestellten Bildern. Wenn sich die örtliche AAO ändert, bitte ausschließlich die Verwaltung anpassen. Die endgültige Disposition und Alarmierung richtet sich weiterhin nach den lokal gültigen Vorgaben und der Entscheidung des zuständigen Disponenten.

Technische Änderungen:
- core.js: editierbare Default-AAO/-Stichwortvorlagen, Firebase-Löschlogik und ALLE/ODER-Bedingungen.
- aao.html / aao.js: neue komfortable AAO-Verwaltung.
- einsatzstichworte.html / stichworte.js: neue Bedingungs- und Volltextverwaltung.
- abfrage.js / ergebnis.html: Volltext und explizite NEF-Anzeige.

NABS V68.39 – Verletzungskarte / medizinische Stichwortlogik

Änderungen:
- Verletzungsart aus dem Körperschema wird für die Verdachtsdarstellung und die medizinische Stichwort-Kategorie priorisiert.
- Amputation ist als Verletzungsart im Verletzungsmuster auswählbar.
- Amputation wird als CHIR/TRAUMA eingeordnet; Verbrennung/Verbrühung/Verätzung als TRAUMA, nicht automatisch INTERN.
- Der algorithmische Verdachtsvorschlag darf das markierte Körperschema nicht mehr durch eine andere Verletzungsart überschreiben.
- Nach der Körperkarte werden nur noch gezielte Kernfragen abgefragt; mechanismusspezifische Fragen bleiben dort, wo sie für die Lage relevant sind.
- NEF-Logik berücksichtigt die hinterlegten Notarztindikationen sowie starke Blutung, Atemprobleme, fehlende Ansprechbarkeit und starke Schmerzen; isolierte Finger-/Zehenamputationen werden nicht allein deshalb automatisch als große Amputation gewertet.
- RTW-Anzahl wird im Stichwort über R1/R2/R3/R4 bzw. N1R1/N1R2/N1R3/N1R4 geführt; es werden keine separaten +RTW-Einträge erzeugt.
- Bei 2–9 Betroffenen kann eine genaue Personenzahl erfasst werden.
- Feuerwehrmittel bleiben ausschließlich aus der konfigurierten AAO; RTW/NEF werden dort nicht als Feuerwehrmittel ausgegeben.


NABS V68.40 – Ergebnis-/Körperkarten-Korrektur

Änderungen gegenüber V68.39:

1. Die Einsatzstichwort-Zeile erscheint im Ergebnis nur noch einmal.
   - Das Stichwort steht weiterhin prominent unter „Einsatzstichwort“.
   - Im Bereich „Notarzt / NEF“ wird das Stichwort nicht erneut ausgegeben.
   - Dort steht nur noch NEF: JA/NEIN und der Hinweis zur hinterlegten NEF-Regel.
   - Im „Alarmierungsvorschlag“ wird das Rettungsdienst-Stichwort ebenfalls nicht erneut wiederholt.
   - Stattdessen wird erklärt, dass NEF-/RTW-Anzahl bereits im Einsatzstichwort codiert ist.

2. Körperkarte im Ergebnis exakt an die Abfrage angepasst.
   - Die verwendete Körperkarte ist 1536 × 868 Pixel.
   - Die Ergebnis-SVG-Overlay-Fläche hatte bisher versehentlich viewBox 1536 × 759.
   - Dadurch wurden die in der Abfrage ausgewählten Regionen im Ergebnis vertikal verschoben.
   - Ergebnis-Overlay und PDF verwenden jetzt ebenfalls viewBox 1536 × 868.
   - Die exakt in der Abfrage ausgewählte Körperregion wird dadurch an derselben Stelle orange dargestellt.

3. Beispiel:
   - In der Abfrage ausgewählter „Ringfinger – Amputation“ bleibt im Ergebnis exakt derselbe Ringfinger markiert.
   - Es wird nicht mehr ein verschobener Bereich unterhalb der Hand angezeigt.

Hinweis:
Die farbigen Markierungen aus den Referenzbildern sind weiterhin NICHT Bestandteil der Anwendung. Im Ergebnis wird ausschließlich die vom Disponenten tatsächlich ausgewählte Region orange dargestellt.


NABS V68.41 – Ergebnisdarstellung / Alarmierungsvorschlag

Änderungen gegenüber V68.40:
- Das separate Feld „Notarzt / NEF“ wurde aus der Ergebnisansicht entfernt.
- Das Einsatzstichwort bleibt die zentrale Anzeige, z. B. N1R1 – TRAUMA.
- Der Alarmierungsvorschlag zeigt die tatsächlich aus dem Stichwort codierten Rettungsmittel einzeln untereinander:
  - R1 = RTW
  - R2 = RTW × 2
  - N1R1 = RTW + NEF
  - N1R2 = RTW × 2 + NEF
  - N2R1 = RTW + NEF × 2
- Falls zusätzlich Feuerwehr benötigt wird, werden die aus der AAO hinterlegten Fahrzeuge ebenfalls darunter angezeigt, z. B. HLF, LF, ELW.
- Das alte separate „Alarmmittelvorschlag“-Feld entfällt.
- Die PDF-/Druckansicht verwendet dieselbe Alarmierungsliste.
- Die Körperkarten-Korrektur aus V68.40 bleibt erhalten.

Die Disposition bleibt ein Vorschlag und muss nach den örtlichen Vorgaben durch den zuständigen Disponenten geprüft werden.


NABS V68.42 – Ergebnis-Seite repariert

Korrektur gegenüber V68.41:
- Fehler in ergebnis.html behoben, der durch fehlerhafte JavaScript-String-Quotierung die komplette Ergebnislogik am Starten gehindert hat.
- Dadurch waren Einsatzstichwort, Abfragestatus, Abfragedauer, Volltext, Einsatztext, Abfragebemerkung, Körperkarte sowie PDF/Drucken und Neue Abfrage leer bzw. ohne Funktion.
- Feld „Notarzt / NEF“ vollständig aus der Ergebnisoberfläche entfernt.
- „Alarmmittelvorschlag“ vollständig entfernt.
- „Alarmierungsvorschlag“ enthält jetzt gemeinsam:
  - die im Einsatzstichwort codierten Rettungsmittel (z. B. N1R1 = NEF + RTW, N1R2 = NEF + 2 RTW, R2 = 2 RTW)
  - zusätzlich die aus der AAO ermittelten Feuerwehrfahrzeuge (z. B. HLF, LF, ELW usw.).
- Körperkarte bleibt auf 1536 × 868 ausgerichtet, damit die Markierungen exakt zur verwendeten 1536 × 868 Karte passen.
- PDF/Druck verwendet dieselbe Alarmierungsdarstellung und dieselbe Körperkarten-Geometrie.
- Alle JavaScript-Dateien wurden mit node --check geprüft.

Hinweis:
Die Anwendung erstellt einen Dispositionsvorschlag. Die endgültige Disposition und Alarmierung richtet sich nach den örtlichen Vorgaben und der Entscheidung des zuständigen Disponenten.


NABS V68.43 – Dynamische medizinische Alarmstichworte

Änderung:
- Medizinische Einsatzstichworte werden direkt aus den Antworten der Abfrage gebildet.
- N1R/R-Kennung wird weiterhin aus NEF-Indikation und Patientenzahl bestimmt.
- Die Kategorie (CHIR, TRAUMA, INTERN, NEURO, INTOX, ALLERG, PSYCH, GYN, STROM, VERKEHR, WASSER, REA, UNKLAR) wird aus der Abfrage abgeleitet.
- Die Körperkarte hat Vorrang: ausgewählte Verletzungsart und exakte Körperregion/Seite werden in den Volltext übernommen.
- Wenn keine Körperregion markiert wurde, wird bei Verletzungen „Unklar“ bzw. „Verletzung unklar“ verwendet.
- Alter und Geschlecht werden – soweit angegeben – in den Volltext übernommen.
- Kurze relevante Zusatzangaben wie starke Blutung, starke Schmerzen, Atemprobleme oder Bewusstseinsstörung werden ergänzt, wenn sie in der Abfrage positiv ausgewählt wurden.
- Der Volltext bleibt bewusst kurz und dispositionsgeeignet.


NABS V68.44 – AAO-/Einsatztext-Aufschlüsselung

Änderungen:
- Medizinisches Einsatzstichwort bleibt dynamisch aus Alter, Geschlecht, Körperkarten-Verletzung, Körperregion/Seite und ausgewählten Warnzeichen abgeleitet.
- Verdachtsdiagnose wird zusätzlich in den medizinischen Volltext und Einsatztext aufgenommen.
- Bei Feuerwehr/ABC/THL wird der allgemeine AAO-Volltext um eine kurze, aus den tatsächlich beantworteten Fragen abgeleitete Lage ergänzt.
- Konkrete Stoffe/Medien werden übernommen, soweit abgefragt, z. B. Kraftstoff, Motoröl, Hydrauliköl, Chemikalie, bekannter Gefahrstoff, Batteriespeicher, Photovoltaik, Elektro-/Hybridfahrzeug.
- Bei bestätigten betroffenen Personen wird der Zusatz „TMR-TH“ vor der konkreten Feuerwehrlage angezeigt. Die zugrunde liegende AAO-Stufe (B1/B2/B3, G1/G2/G3, TH1/TH2/TH3 usw.) bleibt erhalten.
- Personenanzahl wird, soweit abgefragt, im Volltext/Einsatztext ergänzt.
- Die bisherige AAO bleibt administrierbar und wird nicht durch die Aufschlüsselung überschrieben.

Hinweis:
„TMR-TH“ ist hier als vom Nutzer gewünschter Zusatz für eine technische Menschenrettung bei bestätigter Personenbetroffenheit umgesetzt; die örtlich gültige Alarm- und Ausrückeordnung bzw. Leitstellenbezeichnung muss im Produktivbetrieb maßgeblich bleiben.


NABS V68.45 – Medizinischer Zugang + REA-Hilfe

Geänderte Dateien:
- abfrage.html
- abfrage.js
- style.css

Änderungen:
1. Bei jeder medizinischen Abfrage kommt am Ende immer:
   „Ist die Person frei zugänglich?“
   Antwortmöglichkeiten: Ja / Nein / Unsicher / Unbekannt.
2. Nur bei „Nein“ folgt unmittelbar danach:
   „Warum ist die Person nicht frei zugänglich?“
   mit u. a. Türöffnung, eingeklemmt/eingeschlossen, verschüttet/eingestürzt,
   Höhe, Fahrzeug/Aufzug, unzugängliches Gelände und Gefahrenbereich.
3. Die alten verletzungsspezifischen Zugangfragen werden ausgeblendet,
   damit die Frage nicht doppelt erscheint.
4. Zugangsinformationen werden in den medizinischen Einsatztext übernommen.
5. Neben „AF“ gibt es jetzt den Button „🫀 REA“.
6. REA-Hilfe als Fenster: REA START, Anzahl der Kompressionen, Zeit seit Start,
   visueller roter Taktpfeil, 100–120/min und kurzer Ton pro Druck.
7. Start der REA-Hilfe setzt für die Auswertung Bewusstlosigkeit/Atemstillstand
   und die REA-Anzeige. Die Anleitung der zuständigen Leitstelle hat Vorrang.
8. Cache-Busting für abfrage.js auf v845.

Technischer Test:
- Alle JavaScript-Dateien in /mnt/data/nabs_current wurden mit node --check geprüft.


NABS V68.47 – Gefahrgut/ Gefahrstoff UI
- Kopfbutton „☣ Gefahrgut“ neben AF/REA öffnet die Zusatzabfrage jederzeit.
- Orangefarbene ADR-Tafel: Gefahrnummer oben, UN-Nummer unten; Bedeutungen rechts.
- Sichtbare Gefahrzettel/ADR-Symbole direkt anklickbar.
- Verkehrsmittel/Behälter und Auslaufmenge bleiben erhalten.
- Angaben werden im Einsatztext geführt.
- Automatische Gefahrgutabfrage bei passenden Antworten bleibt aktiv.
- Alle Felder sind freiwillig; Weiter funktioniert auch ohne Angaben.


NABS V68.48 – Gefahrgut + Aufzugsnotruf

Änderungen:
1. Alte Freitextfrage „Welcher Stoff / welches Produkt ist beteiligt?“ im Feuerwehr-ABC-Zweig entfernt.
   Die Gefahrgutangaben werden jetzt über die orange ADR-Tafel erfasst.
2. Gefahrgut-Symbole mit Gefahrstoff-/Gift-Piktogrammen wurden auf deutlich sichtbare Textsymbole umgestellt.
3. Neuer ILS-Button „Aufzugsnotruf“.
4. Aufzugsnotruf enthält 10 reine Klickfragen.
5. Bei „medizinischer Notfall: Ja“ erweitert sich die Abfrage um bis zu 5 medizinische Klickfragen (max. 15).
6. Aufzugsangaben werden im Einsatztext berücksichtigt.
7. Aufzugsnotruf erzeugt das interne Stichwort FW-AUFZUG und einen technischen Feuerwehrvorschlag; bei medizinischem Zusatznotfall zusätzlich Rettungsdienst.

Hinweis: Der Aufzugsfragenbaum ist eine strukturierte NABS-Abfrage und ersetzt keine örtliche AAO, Alarm-/Einsatzrichtlinie oder Disponentenentscheidung.


NABS V68.51 – GHS + ADR Kennzeichnungen / Einsatztext / PDF

Änderungen gegenüber V68.50:
- Zusätzlich zu den ADR-Gefahrzetteln sind jetzt alle 9 GHS/CLP-Gefahrenpiktogramme separat auswählbar.
- GHS01 bis GHS09 werden als rot umrandete Gefahrenpiktogramme dargestellt.
- GHS- und ADR-Auswahl werden getrennt gespeichert, damit beide Angaben im Einsatzverlauf nachvollziehbar bleiben.
- Die Auswahl wird in der Gefahrgut-Kurzfassung im Ergebnis aufgeführt.
- Gefahrnummer und UN-Nummer werden im Einsatztext ausdrücklich als Angaben der Warntafel ausgegeben.
- Verkehrsmittel/Behälter und ungefähre ausgelaufene Menge werden ebenfalls in der Kurzfassung mitgeführt.
- Die PDF-/Druckansicht enthält die Gefahrgutangaben, GHS-Auswahl und ADR-Gefahrzettel-Auswahl ebenfalls.
- Die Gefahrgutabfrage bleibt optional; Weiter funktioniert auch ohne Eingaben.

Hinweis:
Die GHS-Piktogramme in dieser Version wurden aus der vom Nutzer bereitgestellten Referenzabbildung übernommen und als auswählbare Bilddateien eingebunden. Die amtlichen CLP/GHS-Piktogramme bestehen aus rot umrandeten, auf der Spitze stehenden Quadraten mit schwarzem Symbol auf weißem Grund. Die BAuA beschreibt die neun Piktogramme GHS01 bis GHS09 entsprechend.


NABS V68.53 – GHS ORIGINAL-PIKTOGRAMME

Änderung gegenüber V68.52:
- Die bisher aus einem Referenzbild ausgeschnittenen GHS01–GHS09 PNGs wurden entfernt.
- Die Abfrage verwendet jetzt die originalen standardisierten GHS/CLP-Piktogramme als hochauflösende Bilddateien von Wikimedia Commons/UNECE-Quellen.
- Es gibt keinen lokalen assets/ghs-Unterordner mehr.
- Die GHS-Piktogramme werden direkt über ihre jeweiligen Bild-URLs geladen.
- Die Auswahl bleibt anklickbar und wird weiterhin in Einsatz-Kurzfassung, Einsatztext und PDF/Druck ausgegeben.

GHS01 Explodierende Bombe
GHS02 Flamme
GHS03 Flamme über einem Kreis
GHS04 Gasflasche
GHS05 Ätzwirkung
GHS06 Totenkopf mit gekreuzten Knochen
GHS07 Ausrufezeichen
GHS08 Gesundheitsgefahr
GHS09 Umwelt

Quelle/Standard:
BAuA beschreibt die neun GHS/CLP-Gefahrenpiktogramme als schwarze Symbole auf weißem Grund in rotem Rahmen und kodiert sie GHS01–GHS09.
Die verwendeten Bilddateien stammen aus der öffentlich dokumentierten GHS-Piktogramm-Sammlung von Wikimedia Commons; die dortigen Dateien verweisen bei den historischen Originalen auf UNECE-Quellen.



Version 5.3 – EHSI neu strukturiert und regionale Quellen erweitert
===================================================================
- EHSI von einer langen Kartenliste auf auswählbare Bereiche umgebaut.
- Bereiche als Buttons: Rettungsdienst, Feuerwehr, Gefahrgut, Leitstelle / Region.
- Zusätzlicher Bereich: Tiere / Natur & Zuständigkeiten.
- Die Inhalte werden erst nach Auswahl des jeweiligen Bereichs angezeigt.
- Rettungsdienst mit aktuellen Quellen/Links ergänzt: BÄK NAIK 2023, RettZV Südwestsachsen, SächsLRettDPVO, SächsPsychKHG, SächsSchKGAG, GRC Reanimationsleitlinien 2025 und GRC-Materialien.
- Feuerwehr mit SächsBRKG, AAO, Fahrzeug-/Stichwortübersicht, Gefahrgut, Wasserrettung und Aufzug erweitert.
- Gefahrgut mit aktuellen BAM-/UNECE-Quellen und klarer Trennung zwischen ADR und GHS ergänzt.
- Leitstelle / Region mit aktuellen regionalen Quellen für RettZV Südwestsachsen, Landkreis Zwickau, Feuerwehr Zwickau und REVOSax ergänzt.
- Neuer Bereich Tiere/Natur mit Zuständigkeiten für Hornissen/Artenschutz, Jagdbehörde, Veterinäramt, Tierschutz und Wild-/ASP-Lagen für den Landkreis Zwickau einschließlich Zwickau/Mosel.
- Quellen sind als direkte Dokument-/Weblinks hinterlegt und sollen bei Änderungen über die jeweils aktuelle Behörden-/Fachquelle geprüft werden.


Version 5.3 – EHSI-Bereichsfenster
===================================
- Die EHSI-Startseite zeigt beim Laden nur noch die Bereichs-Buttons.
- Rettungsdienst, Feuerwehr, Gefahrgut, Leitstelle / Region sowie Tiere / Natur & Zuständigkeiten öffnen ihre Inhalte erst nach Klick in einem eigenen Fenster/Overlay.
- Im geöffneten Bereich stehen oben gesammelt die hinterlegten Quellen & Dokumente. Doppelte Links werden automatisch nur einmal angezeigt.
- Darunter werden die Fachinformationen und Einsatzhilfen des jeweiligen Bereichs angezeigt.
- Das Bereichsfenster kann über X, „Bereich schließen“, Klick auf den Hintergrund oder die ESC-Taste geschlossen werden.
- Die vorhandenen EHSI-Inhalte und Quellen bleiben erhalten; die Darstellung wurde ausschließlich übersichtlicher strukturiert.


VERSION 5.4 – QM2 / ABFRAGEZÄHLER (20.09.2026)
- QM1 enthält keine Abbruch-Abfrage-Liste mehr; Abbruch-Abfragen werden zentral in QM2 bearbeitet.
- Abbruch-Abfragen werden wie Fragenmeldungen mit Status Neu / In Prüfung / Erledigt / Abgelehnt verwaltet.
- Neue Abbruch-Abfragen bleiben stehen, bis ein Status gesetzt wurde. Bearbeitete Abbruch-Abfragen werden nach zwei Monaten automatisch entfernt.
- Fragenmeldungen mit Status Neu bleiben auch nach zwei Monaten bestehen. Meldungen mit anderem Status werden nach zwei Monaten automatisch gelöscht.
- QM2 startet bei jedem Öffnen automatisch mit dem Statusfilter „Neu“.
- Jeder Start einer ILS-Abfrage wird als Nutzungsereignis protokolliert und im Systembereich als Zähler nach Bereich angezeigt.
- Firebase-Regeln wurden um geschützte Bereiche für Abbruch-Abfragen und Nutzungsereignisse ergänzt. Die aktualisierte database.rules.json muss bei Verwendung der Firebase-Funktionalität veröffentlicht werden.


Version 5.5 Erweiterung: Kleiner Button „💡 Verbesserung“ in der laufenden Abfrage. Verbesserungsvorschläge werden in Firebase unter „verbesserungsvorschlaege“ gespeichert und in QM2 bearbeitet. Nach Status „Erledigt“ oder „Abgelehnt“ kann ein Administrator den Vorschlag dauerhaft löschen. Firebase-Regeln wurden um diesen Pfad ergänzt.


VERSION 5.5 – VERBESSERUNGSVORSCHLÄGE (20.09.2026)
- Kleiner Button „💡 Verbesserung“ direkt in der laufenden Abfrage.
- Vorschläge werden als neue Einträge unter „verbesserungsvorschlaege“ in Firebase gespeichert und in QM2 angezeigt.
- QM2 bietet Status „Neu“, „In Prüfung“, „Erledigt“ und „Abgelehnt“.
- Nach „Erledigt“ oder „Abgelehnt“ kann der Administrator den Vorschlag mit „🗑 Löschen“ dauerhaft entfernen.
- Die Firebase-Regeln wurden um den neuen Bereich ergänzt.

V5.7 – EHSI Quellenverwaltung
- Admin kann im EHSI eigene Quellen und Dokumente je Bereich hinzufügen.
- Unterstützt Webadressen sowie Upload von PDF/Office/Bild/Text bis 20 MB.
- Eigene Einträge werden in Firebase Realtime Database unter ehsi_sources gespeichert.
- Hochgeladene Dokumente liegen in Firebase Storage unter ehsi_sources/.
- Nur der Administrator kann hinzufügen und löschen; eigene Einträge sind für alle als Quellen sichtbar.
- Für Firebase Storage muss storage.rules veröffentlicht werden.



VERSION 5.8 – EHSI QUELLENLÖSCHUNG / QM2 ABBRUCH-WORKFLOW (20.09.2026)
=====================================================================
- EHSI: Administrator kann selbst angelegte Quellen/Dokumente in ALLEN EHSI-Bereichen über ein rotes X oben rechts löschen.
- Fest eingebaute offizielle EHSI-Quellen bleiben geschützt und können nicht über das X gelöscht werden.
- Das rote X ist ausschließlich für den Administrator sichtbar.
- QM2 Abbruch-Abfragen erhalten dieselben Statusfilter wie Fragemeldungen: Neu, In Prüfung, Erledigt, Alle.
- QM2 Abbruch-Abfragen erhalten zusätzlich einen Bereichsfilter für Rettungsdienst/Medizin, Feuerwehr/Brand, THL, ABC/Gefahrgut, Aufzug und Großschaden.
- QM2 startet auch bei Abbruch-Abfragen immer mit Status „Neu“.
- „Ablehnen“ wurde bei Abbruch-Abfragen entfernt.
- Stattdessen kann jede Abbruch-Abfrage vom Administrator dauerhaft mit „🗑 Löschen“ entfernt werden.
- Bei „In Prüfung“ kann die Prüfung wieder entfernt und der Eintrag auf „Neu“ zurückgesetzt werden.
- „Erledigt“ fragt nach einem kurzen Erledigungsgrund und speichert diesen mit Datum/Zeit.
- Die beim Abbruch bereits gespeicherte Abfragekategorie wird in QM2 angezeigt und als Filter verwendet.
- Firebase-Regeln wurden für die tatsächlich verwendeten Pfade (inkl. verbesserungsvorschlaege und ehsi_sources) abgestimmt; einsatzAufwertungen bleiben für angemeldete Einsatzbearbeiter auf-/abwertbar.


VERSION 5.9 – VERBESSERUNG / ABBRUCH-SPEICHERUNG (20.09.2026)
- Der kleine Button „💡 Verbesserung“ wurde aus der laufenden Abfrage entfernt.
- Im Launcher gibt es jetzt einen eigenen Bereich „Verbesserung – Vorschlag senden“.
- Verbesserungsvorschläge werden dort ohne Administrator-Anmeldung als Einsatzbearbeiter erfasst und in QM2 unter „Verbesserungsvorschläge“ bereitgestellt.
- Optionaler Bezug zu einer laufenden Frage kann über URL-Parameter übernommen werden.
- Abbruch-Abfragen können als Einsatzbearbeiter ohne Administrator-Anmeldung gespeichert werden. Die QM2-Lesefunktion und Bearbeitung bleiben ausschließlich für den Administrator geschützt.
- Frage melden bleibt für Einsatzbearbeiter möglich; Lesen/Bearbeiten in QM2 bleibt administrativ geschützt.
- Firebase-Regeln wurden entsprechend angepasst.

- Abbruch-, Fragemeldungs-, Verbesserungsvorschlags- und Nutzungszähler-Erfassung nutzt für Einsatzbearbeiter den öffentlichen Create-Pfad; QM2-Lesen/Ändern bleibt Admin-only.

Version 5.10 – QM1 Qualitätsmanagement ausgebaut
=================================================
- QM1 von einer reinen Verwaltung um ein echtes Qualitätsmanagement-Dashboard erweitert.
- Neue Bereiche: QM-Dashboard, Qualitätsprüfungen, Qualitätsabweichungen, Maßnahmen/Korrekturmaßnahmen,
  Änderungsmanagement, Quellen- und Dokumentenprüfung, Qualitätsauswertung, Schulungen/Unterweisungen,
  QM-Dokumente und QM-Historie.
- QM1-Einträge können durch den Administrator angelegt, bearbeitet und gelöscht werden.
- QM-Aktionen werden in einer nachvollziehbaren QM-Historie protokolliert.
- Neue Firebase-Realtime-Database-Pfade für die QM1-Verwaltung ergänzt.
- QM2 bleibt für die operative Bearbeitung von Fragemeldungen, Abbruch-Abfragen und Verbesserungsvorschlägen zuständig.
- QM1 und QM2 sind damit getrennt: QM1 = Qualitätsmanagement/Steuerung, QM2 = operativer Eingang und Bearbeitung.


VERSION 5.11 – LÖSCHEN OHNE BESTÄTIGUNG (20.09.2026)
=====================================================================
- QM2: Fragemeldungen können durch den Administrator über „🗑 Löschen“ sofort gelöscht werden; keine OK/Abbrechen-Bestätigung mehr.
- QM2: Abbruch-Abfragen können durch den Administrator über „🗑 Löschen“ sofort gelöscht werden; keine OK/Abbrechen-Bestätigung mehr.
- QM2: Verbesserungsvorschläge können durch den Administrator über „🗑 Löschen“ sofort gelöscht werden; keine OK/Abbrechen-Bestätigung mehr.
- EHSI: Eigene Quellen/Dokumente können durch den Administrator über das rote X sofort gelöscht werden; keine OK/Abbrechen-Bestätigung mehr.
- QM1: QM-Einträge können durch den Administrator über „🗑 Löschen“ sofort gelöscht werden; keine OK/Abbrechen-Bestätigung mehr.
- Die bestehenden Administrator-Berechtigungen bleiben unverändert.
- Andere bewusst vorhandene Sicherheitsabfragen, z. B. bei Grundvorlagen/Seed-Aktionen, bleiben unverändert.
