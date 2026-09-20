from pathlib import Path
p=Path('/tmp/nabs37/core.js')
s=p.read_text()
s=s.replace('const defaultAAO = {};\nconst defaultStichworte = {};', r'''const defaultAAO = {
  B1:{id:"B1",stichwort:"B1",name:"Brand – klein",category:"brand",resources:["KLF"]},
  B2:{id:"B2",stichwort:"B2",name:"Brand – mittel",category:"brand",resources:["ELW","KLF","HLF","GW-L","WLF-2","WLF-1"]},
  B3:{id:"B3",stichwort:"B3",name:"Brand – groß",category:"brand",resources:["ELW","KLF","HLF","GW-L","WLF-2","WLF-1"]},
  G1:{id:"G1",stichwort:"G1",name:"Gefahrguteinsatz – klein",category:"abc",resources:["HLF"]},
  G2:{id:"G2",stichwort:"G2",name:"Gefahrguteinsatz – mittel",category:"abc",resources:["ELW","KLF","HLF","GW-L","WLF-2","WLF-1"]},
  G3:{id:"G3",stichwort:"G3",name:"Gefahrguteinsatz – groß",category:"abc",resources:["ELW","KLF","HLF","GW-L","WLF-2","WLF-1"]},
  TH1:{id:"TH1",stichwort:"TH1",name:"Technische Hilfeleistung – klein",category:"thl",resources:["HLF"]},
  TH2:{id:"TH2",stichwort:"TH2",name:"Technische Hilfeleistung – mittel",category:"thl",resources:["ELW","KLF","HLF","GW-L","WLF-2","WLF-1"]},
  TH3:{id:"TH3",stichwort:"TH3",name:"Technische Hilfeleistung – groß",category:"thl",resources:["ELW","KLF","HLF","GW-L","WLF-2","WLF-1"]},
  SL:{id:"SL",stichwort:"SL",name:"Sonderlage",category:"abc",resources:["ELW","KLF","HLF","GW-L","WLF-1","WLF-2"]}
};

const defaultStichworte = {
  B1:{id:"B1",code:"B1",name:"Brand klein",category:"brand",priority:300,conditionMode:"all",conditions:[],volltext:"Auslösung BMA (Linienmelder, Rauchmelder, RAS-System, Lüftungskanalmelder Abluft, etc.) – Auslösung von einem Element; Auslösung NRA (Auslösung von einem Element); Kleinstbrand; Mülleimer im Innen- und Außenbereich von Gebäuden; Voralarm Gaslöschanlagen; Voralarm Ex-Meldeanlagen; Gelöschte Feuer oder ähnliche Meldebilder."},
  B2:{id:"B2",code:"B2",name:"Brand mittel",category:"brand",priority:200,conditionMode:"all",conditions:[],volltext:"Auslösung BMA (mehr als ein Element von Linienmelder, Rauchmelder, RAS-System, Lüftungskanalmelder Abluft, etc.); Auslösung NRA (Auslösung mehr als ein Element); Brand PKW, LKW, Schienenfahrzeug im Innen- und Außenbereich von Gebäuden; Ex-Meldeanlagen oder ähnliche Meldebilder."},
  B3:{id:"B3",code:"B3",name:"Brand groß",category:"brand",priority:100,conditionMode:"all",conditions:[],volltext:"Auslösung automatische Löschanlagen; Druckknopfmelder; bestätigte Notrufe (Rauchentwicklung oder Brandkenngröße); Auslösung BMA in Sondergebäuden; ab Mittelbrand im Innen- und Außenbereich von Gebäuden oder ähnliche Meldebilder."},
  G1:{id:"G1",code:"G1",name:"Gefahrguteinsatz klein",category:"abc",priority:300,conditionMode:"all",conditions:[],volltext:"Umweltschäden klein, auslaufende Betriebsmittel; Tierbergung; Transport kritischer Batterien; Geruchsbelästigungen oder ähnliche Meldebilder."},
  G2:{id:"G2",code:"G2",name:"Gefahrguteinsatz mittel",category:"abc",priority:200,conditionMode:"all",conditions:[],volltext:"Kritische Batterien, wenn nicht G1; Gaswarnanlagen; Gefahrgutunfall / Umweltschaden klein; auslaufende Medien ohne Auswirkung; Gasgeruch oder ähnliche Meldebilder."},
  G3:{id:"G3",code:"G3",name:"Gefahrguteinsatz groß",category:"abc",priority:100,conditionMode:"all",conditions:[],volltext:"Gefährliche Batterien; auslaufende Medien mit Auswirkung; Gewässerverunreinigung; Gefahrgutunfall / Umweltschaden groß oder ähnliche Meldebilder."},
  TH1:{id:"TH1",code:"TH1",name:"Technische Hilfeleistung klein",category:"thl",priority:300,conditionMode:"all",conditions:[],volltext:"Befreiung Person Aufzug; kleine Wasserschäden; Tierrettung; Absicherung Einsatzstellen oder ähnliche Meldebilder."},
  TH2:{id:"TH2",code:"TH2",name:"Technische Hilfeleistung mittel",category:"thl",priority:200,conditionMode:"all",conditions:[],volltext:"VKU ohne Personenschaden; große Wasserschäden; Hilfeleistung oder ähnliche Meldebilder."},
  TH3:{id:"TH3",code:"TH3",name:"Technische Hilfeleistung groß",category:"thl",priority:100,conditionMode:"all",conditions:[],volltext:"Unfall mit Personenschaden; Retten aus Höhen oder Tiefen; produktionsrelevante Störungen; VKU mit Personenschaden; eingeklemmte Person; hilflose Person oder ähnliche Meldebilder."},
  SL:{id:"SL",code:"SL",name:"Sonderlage",category:"abc",priority:500,conditionMode:"all",conditions:[],volltext:"Bestätigte Auslösung CO₂-Löschanlage; Massenanfall von Verletzten (Großschadenslage – GSL); Großbrand; Explosion, Detonation; Einsturz von baulichen Anlagen; Gasaustritt; unwetterartige Umwelt ereignisse (Sturm, Hochwasser, Starkregen, Hagel, etc.) oder ähnliche Meldebilder."}
};

export { defaultAAO, defaultStichworte };''')
# Replace matchesStichwort block
old='''export function matchesStichwort(s,category,answers){\n  if((aliases[s.category]||s.category)!==category) return false;\n  return (s.conditions||[]).every(c=>matches(answers[c.questionId],c.values??c.value));\n}'''
new='''export function matchesStichwort(s,category,answers){\n  if((aliases[s.category]||s.category)!==category) return false;\n  const conditions=Array.isArray(s.conditions)?s.conditions:[];\n  if(!conditions.length) return true;\n  const test=c=>matches(answers[c.questionId],c.values??c.value);\n  if(s.conditionMode==="any") return conditions.some(test);\n  return conditions.every(test);\n}'''
assert old in s
s=s.replace(old,new)
p.write_text(s)
