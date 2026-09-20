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
