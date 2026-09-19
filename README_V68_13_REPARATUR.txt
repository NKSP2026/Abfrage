NABS V68.13 – KOMPLETTVERSION / FUNKTIONSREPARATUR

WICHTIG:
In V68.12 war bodymap.js beim Verpacken leer. Dadurch konnte abfrage.js
window.NABSBodyMap nicht laden. Das JavaScript brach deshalb bereits beim
Start der Abfrage ab. Ergebnis: keine Frage, keine Antwortbuttons und auch
die permanenten Buttons (Verschlechterung, Zwischenergebnis, Bemerkung,
Ausstieg) reagierten nicht.

V68.13 enthält deshalb die vollständige bodymap.js aus V68.11 wieder.
Die Anatomie-/Detailpositionen bleiben damit erhalten.

Zusätzlich wurden die Cache-Versionen in abfrage.html erhöht, damit Browser
und GitHub Pages die reparierten Dateien laden.

Es wurde ansonsten nichts an der Abfragelogik entfernt.
