// Firebase REST helper – ohne Firebase-CDN/ES-Module.
// Dadurch funktioniert die Fragenverwaltung auch dann, wenn gstatic-CDN-Module blockiert werden.
import { firebaseConfig, ADMIN_UID } from './firebase-config.js?v=20260921v02';

const TOKEN_KEY='einsatzabfrage_fb_idtoken';
const UID_KEY='einsatzabfrage_fb_uid';
const EMAIL_KEY='einsatzabfrage_fb_email';
const DB_URL_KEY='einsatzabfrage_fb_db_url';

export function authState(){
  const token=sessionStorage.getItem(TOKEN_KEY);
  const uid=sessionStorage.getItem(UID_KEY);
  return {token,uid,email:sessionStorage.getItem(EMAIL_KEY)||'',admin:uid===ADMIN_UID};
}

function configuredDbUrl(){
  return String(firebaseConfig.databaseURL||'').replace(/\/$/,'');
}

/*
 * Firebase Realtime Database URLs are region-dependent. For databases outside
 * us-central1 Firebase uses <db>.<region>.firebasedatabase.app. The old
 * <db>.firebaseio.com endpoint can redirect, and browsers may reject that
 * redirect during a CORS preflight for PUT/DELETE requests. We therefore keep
 * the configured URL as the first choice and transparently fall back to the
 * European regional endpoint when the configured endpoint cannot be used.
 */
function databaseCandidates(){
  const configured=configuredDbUrl();
  const saved=sessionStorage.getItem(DB_URL_KEY)||'';
  const baseName='abfrage-50be7-default-rtdb';
  const candidates=[saved,configured,
    `https://${baseName}.europe-west1.firebasedatabase.app`,
    `https://${baseName}.asia-southeast1.firebasedatabase.app`
  ].filter(Boolean).map(x=>x.replace(/\/$/,''));
  return [...new Set(candidates)];
}

function makeDbUrl(base,path,token){
  return `${base}/${String(path||'').replace(/^\/+|\/+$/g,'')}.json?auth=${encodeURIComponent(token)}`;
}

async function jsonFetch(url, options={}){
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),15000);
  try{
    let r;
    try{
      const headers={...(options.headers||{})};
      if(options.jsonBody) headers['Content-Type']='application/json';
      r=await fetch(url,{...options,signal:controller.signal,headers});
    }catch(err){
      if(err?.name==='AbortError') throw new Error(`Firebase-Netzwerkfehler: Zeitüberschreitung nach 15 Sekunden (${new URL(url).hostname})`);
      throw new Error(`Firebase-Netzwerkfehler: ${err?.message||err}`);
    }
    const text=await r.text();
    let data=null; try{data=text?JSON.parse(text):null;}catch{data={raw:text};}
    if(!r.ok){
      const detail=data?.error?.message||data?.error||`HTTP ${r.status}`;
      throw new Error(`Firebase HTTP ${r.status}: ${detail}`);
    }
    return data;
  }finally{clearTimeout(timer);}
}

async function dbRequest(path, options={}, allowNullFallback=false){
  const a=authState();
  if(!a.token) throw new Error('Nicht bei Firebase angemeldet.');
  const candidates=databaseCandidates();
  let lastError=null;
  for(const base of candidates){
    try{
      const data=await jsonFetch(makeDbUrl(base,path,a.token),options);
      /* A null catalog can mean that the legacy endpoint is an empty redirect
         target. Try the regional endpoint before accepting null. */
      if(data===null && allowNullFallback && base!==candidates[candidates.length-1]) continue;
      sessionStorage.setItem(DB_URL_KEY,base);
      return data;
    }catch(e){
      lastError=e;
      /* Only try another database URL for network/CORS/404 failures. Rules
         errors (401) are meaningful and should be shown to the administrator. */
      const m=String(e?.message||'');
      if(!/Firebase-Netzwerkfehler|Firebase HTTP 404/i.test(m)) throw e;
    }
  }
  throw lastError||new Error('Keine Firebase-Datenbank erreichbar.');
}

export async function login(email,password){
  const url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${encodeURIComponent(firebaseConfig.apiKey)}`;
  const d=await jsonFetch(url,{method:'POST',jsonBody:true,body:JSON.stringify({email,password,returnSecureToken:true})});
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
    const d=await jsonFetch(url,{method:'POST',jsonBody:true,body:JSON.stringify({returnSecureToken:true})});
    sessionStorage.setItem(TOKEN_KEY,d.idToken);sessionStorage.setItem(UID_KEY,d.localId);sessionStorage.removeItem(EMAIL_KEY);
    return authState();
  }catch(e){
    return {token:null,uid:null,email:'',admin:false,error:e};
  }
}

export async function read(path){
  return dbRequest(path,{method:'GET'},path==='catalog');
}

export async function push(path,value){
  return dbRequest(path,{method:'POST',body:JSON.stringify(value)});
}

export async function writeAuthenticated(path,value){
  return dbRequest(path,{method:'PUT',body:JSON.stringify(value)});
}

export async function write(path,value){
  const a=authState();
  if(!a.token || !a.admin) throw new Error('Administrator-Anmeldung erforderlich.');
  return dbRequest(path,{method:'PUT',body:JSON.stringify(value)});
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



export async function uploadStorage(file, storagePath){
  const a=authState();
  if(!a.token || !a.admin) throw new Error('Administrator-Anmeldung erforderlich.');
  const bucket=encodeURIComponent(firebaseConfig.storageBucket);
  const name=encodeURIComponent(storagePath);
  const url=`https://firebasestorage.googleapis.com/v0/b/${bucket}/o?uploadType=media&name=${name}`;
  const r=await fetch(url,{method:'POST',headers:{'Authorization':`Bearer ${a.token}`,'Content-Type':file.type||'application/octet-stream'},body:file});
  const text=await r.text();
  let data=null; try{data=text?JSON.parse(text):null;}catch{data={raw:text};}
  if(!r.ok) throw new Error(data?.error?.message||data?.error||`HTTP ${r.status}`);
  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${name}?alt=media`;
}

export async function deleteStorage(storagePath){
  const a=authState();
  if(!a.token || !a.admin) throw new Error('Administrator-Anmeldung erforderlich.');
  const bucket=encodeURIComponent(firebaseConfig.storageBucket);
  const name=encodeURIComponent(storagePath);
  const url=`https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${name}`;
  const r=await fetch(url,{method:'DELETE',headers:{'Authorization':`Bearer ${a.token}`}});
  if(!r.ok){
    const text=await r.text();
    let data=null; try{data=text?JSON.parse(text):null;}catch{data={raw:text};}
    throw new Error(data?.error?.message||data?.error||`HTTP ${r.status}`);
  }
}
