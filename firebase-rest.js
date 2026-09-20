// Firebase REST helper – ohne Firebase-CDN/ES-Module.
// Dadurch funktioniert die Fragenverwaltung auch dann, wenn gstatic-CDN-Module blockiert werden.
import { firebaseConfig, ADMIN_UID } from './firebase-config.js?v=20260915v22';

const TOKEN_KEY='einsatzabfrage_fb_idtoken';
const UID_KEY='einsatzabfrage_fb_uid';
const EMAIL_KEY='einsatzabfrage_fb_email';

export function authState(){
  const token=sessionStorage.getItem(TOKEN_KEY);
  const uid=sessionStorage.getItem(UID_KEY);
  return {token,uid,email:sessionStorage.getItem(EMAIL_KEY)||'',admin:uid===ADMIN_UID};
}

async function jsonFetch(url, options={}){
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),10000);
  try{
    const r=await fetch(url,{...options,signal:controller.signal,headers:{'Content-Type':'application/json',...(options.headers||{})}});
    const text=await r.text();
    let data=null; try{data=text?JSON.parse(text):null;}catch{data={raw:text};}
    if(!r.ok) throw new Error(data?.error?.message||data?.error||`HTTP ${r.status}`);
    return data;
  }finally{clearTimeout(timer);}
}

export async function login(email,password){
  const url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${encodeURIComponent(firebaseConfig.apiKey)}`;
  const d=await jsonFetch(url,{method:'POST',body:JSON.stringify({email,password,returnSecureToken:true})});
  if(d.localId!==ADMIN_UID){
    throw new Error('Dieses Konto ist nicht als Administrator hinterlegt.');
  }
  sessionStorage.setItem(TOKEN_KEY,d.idToken);
  sessionStorage.setItem(UID_KEY,d.localId);
  sessionStorage.setItem(EMAIL_KEY,email);
  return authState();
}

export function logout(){
  sessionStorage.removeItem(TOKEN_KEY);sessionStorage.removeItem(UID_KEY);sessionStorage.removeItem(EMAIL_KEY);
}

export async function anonymous(){
  const existing=authState();
  if(existing.token) return existing;
  const url=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${encodeURIComponent(firebaseConfig.apiKey)}`;
  try{
    const d=await jsonFetch(url,{method:'POST',body:JSON.stringify({returnSecureToken:true})});
    sessionStorage.setItem(TOKEN_KEY,d.idToken);sessionStorage.setItem(UID_KEY,d.localId);sessionStorage.removeItem(EMAIL_KEY);
    return authState();
  }catch(e){
    return {token:null,uid:null,email:'',admin:false,error:e};
  }
}

export async function read(path){
  const a=authState();
  if(!a.token) throw new Error('Nicht bei Firebase angemeldet.');
  const url=`${firebaseConfig.databaseURL.replace(/\/$/,'')}/${path}.json?auth=${encodeURIComponent(a.token)}`;
  return jsonFetch(url,{method:'GET'});
}

export async function push(path,value){
  const a=authState();
  if(!a.token) throw new Error('Nicht bei Firebase angemeldet.');
  const url=`${firebaseConfig.databaseURL.replace(/\/$/,'')}/${path}.json?auth=${encodeURIComponent(a.token)}`;
  return jsonFetch(url,{method:'POST',body:JSON.stringify(value)});
}

export async function writeAuthenticated(path,value){
  const a=authState();
  if(!a.token) throw new Error('Nicht bei Firebase angemeldet.');
  const url=`${firebaseConfig.databaseURL.replace(/\/$/,'')}/${path}.json?auth=${encodeURIComponent(a.token)}`;
  return jsonFetch(url,{method:'PUT',body:JSON.stringify(value)});
}

export async function write(path,value){
  const a=authState();
  if(!a.token || !a.admin) throw new Error('Administrator-Anmeldung erforderlich.');
  const url=`${firebaseConfig.databaseURL.replace(/\/$/,'')}/${path}.json?auth=${encodeURIComponent(a.token)}`;
  return jsonFetch(url,{method:'PUT',body:JSON.stringify(value)});
}
// Öffentlicher REST-Zugriff nur für den technisch getrennten Abbruch-Log.
// Die übrigen Firebase-Bereiche verwenden weiterhin die geschützten Funktionen oben.
export async function readPublic(path){
  const url=`${firebaseConfig.databaseURL.replace(/\/$/,'')}/${path}.json`;
  return jsonFetch(url,{method:'GET'});
}

export async function pushPublic(path,value){
  const url=`${firebaseConfig.databaseURL.replace(/\/$/,'')}/${path}.json`;
  return jsonFetch(url,{method:'POST',body:JSON.stringify(value)});
}

export async function writePublic(path,value){
  const url=`${firebaseConfig.databaseURL.replace(/\/$/,'')}/${path}.json`;
  return jsonFetch(url,{method:'PUT',body:JSON.stringify(value)});
}

