import { authState, logout, write } from './firebase-rest.js?v=20260920v46';
import { defaults, CATALOG_SCHEMA_VERSION } from './data.js?v=20260915v27';
const $=id=>document.getElementById(id);
async function init(){
  const a=authState();
  $('qmStatus').textContent=a.admin?'● Administrator angemeldet – QM1 freigegeben':'● Administrator-Anmeldung erforderlich';
}

$('logoutBtn').onclick=()=>{logout();location.href='index.html';};
$('seedBtn').onclick=async()=>{try{const a=authState();if(!a.admin)throw Error('Bitte zuerst als Administrator anmelden.');const payload={_meta:{schemaVersion:CATALOG_SCHEMA_VERSION,updatedAt:new Date().toISOString()},...defaults.catalog};await write('catalog',payload);alert('✓ Grund-Fragenkatalog wurde in Firebase übernommen.');}catch(e){alert('Speichern fehlgeschlagen: '+e.message);}};
init();
