NABS V68.10 – Korrektur Körperkarten-Detailpositionen

Geändert:
- bodymap.js
- Die Detailflächen für Hand, Fuß und Gesicht werden vertikal an die aktuelle
  1536x867-Körperkarte angepasst.
- Ursache der sichtbaren Verschiebung war die vertikale Skalierung des SVG-
  Auswahl-Layers gegenüber der Hintergrundgrafik.
- Die Detailflächen werden deshalb vertikal komprimiert und nach oben korrigiert,
  statt einzelne Hotspots geräteabhängig mit festen Bildschirm-Pixeln zu setzen.
- Hand-Sollpositionen bleiben erhalten:
  Daumen, Zeigefinger, Mittelfinger, Ringfinger, kleiner Finger,
  Handgelenk und Handfläche.
- Fuß-Sollpositionen bleiben erhalten.
- Die Referenzfarben werden nicht angezeigt; ausgewählte Bereiche erscheinen
  weiterhin orange.
- Die Korrektur arbeitet mit der SVG-Koordinatenbasis und bleibt dadurch für
  Handy, Tablet und PC skalierbar.

Es wurde ausschließlich bodymap.js geändert. Alle anderen Projektdateien bleiben
unverändert und müssen nicht ersetzt werden.
