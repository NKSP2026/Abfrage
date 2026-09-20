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
