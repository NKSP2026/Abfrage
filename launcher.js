import { authState, login, logout, anonymous } from './firebase-rest.js?v=20260921v70';
const $=id=>document.getElementById(id);
const tiles=[...document.querySelectorAll('.launcher-tile')];
function setGroup(admin){
  $('loggedUser').textContent='Benutzergruppe: '+(admin?'Administrator':'Einsatzbearbeiter');
  $('loginBtn').style.display=admin?'none':'inline-flex';
  $('logoutBtn').style.display=admin?'inline-flex':'none';
  tiles.forEach(t=>{const isAdmin=t.classList.contains('admin-only');t.classList.toggle('locked',isAdmin&&!admin);t.disabled=isAdmin&&!admin;});
  $('firebaseStatus').textContent=admin?'● Administrator angemeldet':'● Einsatzbearbeiter – bereit';
}
async function boot(){
  let a=authState();
  if(!a.token){a=await anonymous();}
  setGroup(!!a?.admin);
}
tiles.forEach(t=>t.addEventListener('click',()=>{if(!t.disabled)location.href=t.dataset.link;}));
$('loginBtn').onclick=async()=>{const email=prompt('Administrator-E-Mail:');if(email===null)return;const pw=prompt('Administrator-Passwort:');if(pw===null)return;try{const a=await login(email,pw);setGroup(!!a.admin);}catch(e){alert('Anmeldung fehlgeschlagen: '+e.message);}};
$('logoutBtn').onclick=()=>{logout();boot();};
boot();
