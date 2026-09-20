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
