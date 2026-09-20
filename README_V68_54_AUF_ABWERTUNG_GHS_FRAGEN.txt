NABS V68.54 – Auf-/Abwertung, GHS lokal, Fragenlogik korrigiert
===============================================================

Änderungen
----------
1. Manuelle Auf-/Abwertung des Einsatzstichworts
   - Im Ergebnis zwischen Einsatzstichwort und Alarmierungsvorschlag.
   - Pfeil ↑ Aufwerten und ↓ Abwerten.
   - Medizinisch: Rn ↔ N0Rn ↔ N1Rn (bzw. weitere vorhandene N-Stufe bis N2).
   - Feuerwehr: B1/B2/B3.
   - Technische Hilfe: TH1/TH2/TH3.
   - Nicht mögliche Richtungen werden deaktiviert.
   - Jede Änderung verlangt einen Pflicht-Grund.
   - Änderung + Grund werden in sessionStorage gespeichert und zusätzlich im Firebase-Log einsatzAufwertungen protokolliert.
   - Änderungen erscheinen am Ende des Einsatztextes und im PDF unter Auf-/Abwertungen.

2. Feuerwehr-Fragen
   - Die allgemeine Standortfrage „Wo genau befindet sich die Einsatzstelle?“ wurde aus dem allgemeinen Feuerwehr-Fragenblock entfernt.
   - Die Frage nach der Personenzahl erscheint nur noch, wenn bei „Sind Personen betroffen, verletzt oder gefährdet?“ Ja oder Unklar gewählt wurde.
   - Bei „Nein“ wird keine anschließende Personenzahl abgefragt.

3. Gefahrgut / GHS
   - GHS01–GHS09 werden lokal aus den Dateien im Projekt-Hauptverzeichnis geladen.
   - Kein assets/ghs-Unterordner erforderlich.
   - Dadurch funktionieren die GHS-Piktogramme auch auf GitHub Pages ohne externe Bild-Requests.
   - ADR-Gefahrzettel, Warntafel, UN, Verkehrsmittel und Menge bleiben erhalten.
   - Gefahrgutangaben werden weiterhin in Einsatztext und PDF dokumentiert.
   - Gefahrgut-Zusatz wird nicht mehr fälschlich an den Volltext aller Alarmstichworte angehängt; die hinterlegten AAO-Volltexte von G1/G2/G3 bleiben unverändert.

4. PDF / Dokumentation
   - Warntafel, GHS, ADR, Verkehrsmittel und Menge werden ausgegeben.
   - Auf-/Abwertungen mit Grund werden am Ende dokumentiert.

Technischer Hinweis
-------------------
Die manuelle Änderung ist eine dokumentierte Dispositions-/Benutzeränderung und ersetzt nicht die Entscheidung des zuständigen Disponenten bzw. örtliche AAO-Vorgaben.


V68.55 – GHS-Anzeige korrigiert
- Die zuvor verwendeten zugeschnittenen PNGs wurden vollständig entfernt.
- GHS01–GHS09 werden als originale standardisierte SVG-Piktogramme geladen.
- Kein GHS-Unterordner und keine zugeschnittenen Bilddateien im Projekt.
- PDF-Druck verwendet dieselben Original-SVG-Quellen.
