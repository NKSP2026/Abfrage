import { authState, login, logout, anonymous, write } from './firebase-rest.js?v=20260915v29';
import { defaults, CATALOG_SCHEMA_VERSION } from './data.js?v=20260915v27';
const $=id=>document.getElementById(id);
async function init(){
  let a=authState();
  if(!a.token) a=await anonymous();
  if(!a?.admin){
    const email=prompt('Administrator-E-Mail:');
    if(email===null){location.href='index.html';return;}
    const pw=prompt('Administrator-Passwort:');
    if(pw===null){location.href='index.html';return;}
    try{a=await login(email,pw);}catch(e){alert('Anmeldung fehlgeschlagen: '+e.message);location.href='index.html';return;}
  }
  $('qmStatus').textContent='● Administrator angemeldet – QM1 freigegeben';
}
$('logoutBtn').onclick=()=>{logout();location.href='index.html';};
$('seedBtn').onclick=async()=>{try{const a=authState();if(!a.admin)throw Error('Bitte zuerst als Administrator anmelden.');const payload={_meta:{schemaVersion:CATALOG_SCHEMA_VERSION,updatedAt:new Date().toISOString()},...defaults.catalog};await write('catalog',payload);alert('✓ Grund-Fragenkatalog wurde in Firebase übernommen.');}catch(e){alert('Speichern fehlgeschlagen: '+e.message);}};
init();
