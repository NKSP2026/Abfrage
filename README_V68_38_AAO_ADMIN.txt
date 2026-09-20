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
