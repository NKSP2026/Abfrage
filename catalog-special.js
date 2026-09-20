import { catalog as thlCatalog } from './catalog-thl.js?v=20260917fw1';

const clone = q => JSON.parse(JSON.stringify(q));
const commonTHL = Object.values(thlCatalog).filter(q => !q.whenQuestion && q.id !== 'thl_art');
const byMode = value => Object.values(thlCatalog).filter(q => q.whenQuestion === 'thl_art' && q.whenValue === value);

export const catalogVerkehrsunfall = Object.fromEntries(
  [...commonTHL, ...byMode('Verkehrsunfall')].map(q => [q.id, clone(q)])
);

export const catalogWasserunfall = Object.fromEntries(
  [...commonTHL, ...byMode('Wasser / Eis / Ertrinkungsunfall')].map(q => [q.id, clone(q)])
);

export const catalogAufzug = Object.fromEntries([
  {id:'aufzug_ort',text:'Ist der Aufzug über eine eindeutige Objekt-/Gebäudebezeichnung identifizierbar?',type:'choice',order:10,options:['Ja – eindeutig','Teilweise','Nein / unklar']},
  {id:'aufzug_personen',text:'Wie viele Personen befinden sich im Aufzug?',type:'choice',order:20,options:['1 Person','2–5 Personen','Mehr als 5 Personen','Unklar']},
  {id:'aufzug_dauer',text:'Wie lange besteht die Störung ungefähr?',type:'choice',order:30,options:['Unter 10 Minuten','10–30 Minuten','Über 30 Minuten','Unklar']},
  {id:'aufzug_position',text:'Wo befindet sich die Aufzugskabine?',type:'choice',order:40,options:['Zwischen zwei Etagen','An einer Etage','Unklar']},
  {id:'aufzug_tueren',text:'Wie ist der Zustand der Aufzugstüren?',type:'choice',order:50,options:['Geschlossen','Teilweise geöffnet','Offen','Unklar']},
  {id:'aufzug_bewegung',text:'Besteht eine gefährliche Bewegung oder Quetsch-/Absturzgefahr?',type:'choice',order:60,options:['Ja','Nein','Unklar']},
  {id:'aufzug_gefahr',text:'Gibt es Rauch, Feuer, Wasser oder eine andere akute Gefahr?',type:'choice',order:70,options:['Ja','Nein','Unklar']},
  {id:'aufzug_zugang',text:'Kann die Kabine von außen sicher erreicht werden?',type:'choice',order:80,options:['Ja','Nein','Unklar']},
  {id:'aufzug_gefaehrdet',text:'Sind Personen akut gefährdet oder stark beeinträchtigt?',type:'choice',order:90,options:['Ja','Nein','Unklar']},
  {id:'aufzug_medizin',text:'Liegt zusätzlich ein medizinischer Notfall vor?',type:'choice',order:100,options:['Ja','Nein','Unklar']},
  {id:'aufzug_med_bewusstsein',text:'Ist eine betroffene Person bewusstlos oder nicht ansprechbar?',type:'choice',order:110,options:['Ja','Nein','Unklar'],whenQuestion:'aufzug_medizin',whenValue:'Ja'},
  {id:'aufzug_med_atmung',text:'Atmet eine betroffene Person nicht normal oder hat schwere Atemnot?',type:'choice',order:120,options:['Ja','Nein','Unklar'],whenQuestion:'aufzug_medizin',whenValue:'Ja'},
  {id:'aufzug_med_blutung',text:'Besteht eine starke oder nicht stillbare Blutung?',type:'choice',order:130,options:['Ja','Nein','Unklar'],whenQuestion:'aufzug_medizin',whenValue:'Ja'},
  {id:'aufzug_med_symptome',text:'Welche akuten Beschwerden liegen vor?',type:'choice',order:140,options:['Krampfanfall','Brustschmerzen','Starke Atemnot','Starke Schmerzen','Andere / unklar'],whenQuestion:'aufzug_medizin',whenValue:'Ja'},
  {id:'aufzug_med_krampfstatus',text:'Dauert der Krampfanfall an oder tritt er wiederholt auf?',type:'choice',order:150,options:['Ja','Nein','Unklar / nicht bekannt'],whenQuestion:'aufzug_medizin',whenValue:'Ja'}
].map(q=>[q.id,q]));

export const catalogGrossschaden = Object.fromEntries([
  {id:'gs_lage',text:'Was ist die Großschadenslage?',type:'choice',order:10,options:['Viele Betroffene / MANV','Großbrand / Flächenlage','Unwetter / Naturereignis','Einsturz / Gebäudeschaden','Sonstige Großschadenslage']},
  {id:'gs_orte',text:'Wo befindet sich die Lage?',type:'text',order:20,placeholder:'Ort / Straße / Objekt …'},
  {id:'gs_betroffene',text:'Wie viele Personen sind ungefähr betroffen?',type:'number',order:30,placeholder:'Anzahl …'},
  {id:'gs_gefahren',text:'Welche besonderen Gefahren sind bekannt? Mehrere Antworten möglich.',type:'multi',order:40,options:['Feuer / Rauch','Einsturzgefahr','Gefahrstoffe / ABC','Wasser / Überflutung','Strom / Energie','Viele Verletzte / Erkrankte','Keine bekannt / unklar']},
  {id:'gs_weitere',text:'Was ist sonst noch wichtig?',type:'text',order:50,placeholder:'Weitere Informationen …',allowEmpty:true}
].map(q=>[q.id,q]));

export const specialCatalogs = {
  verkehrsunfall: catalogVerkehrsunfall,
  wasserunfall: catalogWasserunfall,
  aufzug: catalogAufzug,
  grossschaden: catalogGrossschaden
};
