// Firebase helper – SDK-first für Realtime Database, REST-Fallback für bestehende Bereiche.
// Version 5.18: Die Fragenverwaltung nutzt damit nicht mehr den problematischen
// browserseitigen REST-PUT-Preflight für catalog.
import { firebaseConfig, ADMIN_UID } from './firebase-config.js?v=20260921v03';

const TOKEN_KEY='einsatzabfrage_fb_idtoken';
const UID_KEY='einsatzabfrage_fb_uid';
const EMAIL_KEY='einsatzabfrage_fb_email';
const DB_URL_KEY='einsatzabfrage_fb_db_url';

let sdkPromise=null;
let sdk=null;

async function getSdk(){
  if(sdkPromise) return sdkPromise;
  sdkPromise=(async()=>{
    const [{initializeApp,getApps},{getDatabase,ref,get,set,push:dbPush},{getAuth,signInAnonymously,signInWithEmailAndPassword,signOut,onAuthStateChanged,setPersistence,browserLocalPersistence}]=await Promise.all([
      import('https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js'),
      import('https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js')
    ]);
    const app=getApps().length?getApps()[0]:initializeApp(firebaseConfig);
    const db=getDatabase(app);
    const auth=getAuth(app);
    try{ await setPersistence(auth,browserLocalPersistence); }catch{}
    sdk={app,db,auth,ref,get,set,dbPush,signInAnonymously,signInWithEmailAndPassword,signOut,onAuthStateChanged,setPersistence,browserLocalPersistence};
    return sdk;
  })().catch(e=>{sdkPromise=null; throw e;});
  return sdkPromise;
}

export function authState(){
  const token=sessionStorage.getItem(TOKEN_KEY);
  const uid=sessionStorage.getItem(UID_KEY);
  return {token,uid,email:sessionStorage.getItem(EMAIL_KEY)||'',admin:uid===ADMIN_UID};
}

function configuredDbUrl(){ return String(firebaseConfig.databaseURL||'').replace(/\/$/,''); }
function databaseCandidates(){
  const configured=configuredDbUrl();
  const saved=sessionStorage.getItem(DB_URL_KEY)||'';
  return [...new Set([saved,configured].filter(Boolean).map(x=>x.replace(/\/$/,'')))];
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

async function sdkAuthAdmin(email,password){
  const f=await getSdk();
  const c=await f.signInWithEmailAndPassword(f.auth,email,password);
  if(c.user.uid!==ADMIN_UID){
    try{await f.signOut(f.auth);}catch{}
    throw new Error('Dieses Konto ist nicht als Administrator hinterlegt.');
  }
  const token=await c.user.getIdToken(true);
  sessionStorage.setItem(TOKEN_KEY,token);
  sessionStorage.setItem(UID_KEY,c.user.uid);
  sessionStorage.setItem(EMAIL_KEY,email);
  sessionStorage.setItem(DB_URL_KEY,configuredDbUrl());
  return authState();
}

async function sdkAuthAnonymous(){
  const f=await getSdk();
  const c=await f.signInAnonymously(f.auth);
  const token=await c.user.getIdToken();
  sessionStorage.setItem(TOKEN_KEY,token);
  sessionStorage.setItem(UID_KEY,c.user.uid);
  sessionStorage.removeItem(EMAIL_KEY);
  sessionStorage.setItem(DB_URL_KEY,configuredDbUrl());
  return authState();
}

async function sdkRead(path){
  const f=await getSdk();
  // Re-authenticate anonymously only if the SDK currently has no user.
  if(!f.auth.currentUser){ await f.signInAnonymously(f.auth); }
  const snap=await f.get(f.ref(f.db,path));
  return snap.exists()?snap.val():null;
}

async function sdkWrite(path,value){
  const f=await getSdk();
  const user=f.auth.currentUser;
  if(!user || user.uid!==ADMIN_UID) throw new Error('Administrator-Anmeldung erforderlich.');
  await f.set(f.ref(f.db,path),value);
  return value;
}

async function sdkPush(path,value){
  const f=await getSdk();
  if(!f.auth.currentUser) await f.signInAnonymously(f.auth);
  const r=await f.dbPush(f.ref(f.db,path),value);
  return r.key;
}

async function dbRequest(path,options={},allowNullFallback=false){
  const a=authState();
  if(!a.token) throw new Error('Nicht bei Firebase angemeldet.');
  const candidates=databaseCandidates();
  let lastError=null;
  for(const base of candidates){
    try{
      const data=await jsonFetch(makeDbUrl(base,path,a.token),options);
      if(data===null && allowNullFallback && base!==candidates[candidates.length-1]) continue;
      sessionStorage.setItem(DB_URL_KEY,base);
      return data;
    }catch(e){
      lastError=e;
      const m=String(e?.message||'');
      if(!/Firebase-Netzwerkfehler|Firebase HTTP 404/i.test(m)) throw e;
    }
  }
  throw lastError||new Error('Keine Firebase-Datenbank erreichbar.');
}

export async function restoreAuthState(){
  const f=await getSdk();
  if(f.auth.currentUser){
    const u=f.auth.currentUser;
    const token=await u.getIdToken(false);
    sessionStorage.setItem(TOKEN_KEY,token);
    sessionStorage.setItem(UID_KEY,u.uid);
    if(u.email) sessionStorage.setItem(EMAIL_KEY,u.email); else sessionStorage.removeItem(EMAIL_KEY);
    sessionStorage.setItem(DB_URL_KEY,configuredDbUrl());
    return authState();
  }
  return await new Promise((resolve,reject)=>{
    let done=false;
    const timer=setTimeout(()=>{if(!done){done=true;try{unsub();}catch{};resolve(authState());}},5000);
    const unsub=f.onAuthStateChanged(f.auth,async u=>{
      if(done)return;
      done=true; clearTimeout(timer); try{unsub();}catch{}
      try{
        if(u){
          const token=await u.getIdToken(false);
          sessionStorage.setItem(TOKEN_KEY,token);
          sessionStorage.setItem(UID_KEY,u.uid);
          if(u.email) sessionStorage.setItem(EMAIL_KEY,u.email); else sessionStorage.removeItem(EMAIL_KEY);
          sessionStorage.setItem(DB_URL_KEY,configuredDbUrl());
        }
        resolve(authState());
      }catch(e){reject(e);}
    });
  });
}

export async function login(email,password){
  try{
    return await sdkAuthAdmin(email,password);
  }catch(sdkError){
    // REST fallback keeps the application usable if the Firebase JS SDK CDN is blocked.
    const url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${encodeURIComponent(firebaseConfig.apiKey)}`;
    const d=await jsonFetch(url,{method:'POST',jsonBody:true,body:JSON.stringify({email,password,returnSecureToken:true})});
    if(d.localId!==ADMIN_UID) throw new Error('Dieses Konto ist nicht als Administrator hinterlegt.');
    sessionStorage.setItem(TOKEN_KEY,d.idToken); sessionStorage.setItem(UID_KEY,d.localId); sessionStorage.setItem(EMAIL_KEY,email);
    return authState();
  }
}

export function logout(){
  if(sdk?.auth&&sdk.signOut){ sdk.signOut(sdk.auth).catch(()=>{}); }
  sessionStorage.removeItem(TOKEN_KEY);sessionStorage.removeItem(UID_KEY);sessionStorage.removeItem(EMAIL_KEY);
}

export async function anonymous(){
  const existing=authState();
  if(existing.token) return existing;
  try{return await sdkAuthAnonymous();}
  catch(sdkError){
    const url=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${encodeURIComponent(firebaseConfig.apiKey)}`;
    try{
      const d=await jsonFetch(url,{method:'POST',jsonBody:true,body:JSON.stringify({returnSecureToken:true})});
      sessionStorage.setItem(TOKEN_KEY,d.idToken);sessionStorage.setItem(UID_KEY,d.localId);sessionStorage.removeItem(EMAIL_KEY);
      return authState();
    }catch(e){ return {token:null,uid:null,email:'',admin:false,error:e}; }
  }
}

// Realtime Database: SDK first. This removes the browser CORS preflight problem for catalog writes.
export async function read(path){
  try{return await sdkRead(path);}
  catch(sdkError){return dbRequest(path,{method:'GET'},path==='catalog');}
}

export async function push(path,value){
  try{return await sdkPush(path,value);}
  catch(sdkError){return dbRequest(path,{method:'POST',body:JSON.stringify(value)});}
}

export async function writeAuthenticated(path,value){
  try{
    const f=await getSdk();
    if(f.auth.currentUser) return await sdkWrite(path,value);
  }catch{}
  return dbRequest(path,{method:'PUT',body:JSON.stringify(value)});
}

export async function write(path,value){
  const a=authState();
  if(!a.token || !a.admin) throw new Error('Administrator-Anmeldung erforderlich.');
  try{return await sdkWrite(path,value);}
  catch(sdkError){return dbRequest(path,{method:'PUT',body:JSON.stringify(value)});}
}

export async function readPublic(path){
  const url=`${configuredDbUrl()}/${path}.json`;
  return jsonFetch(url,{method:'GET'});
}
export async function pushPublic(path,value){
  const url=`${configuredDbUrl()}/${path}.json`;
  return jsonFetch(url,{method:'POST',body:JSON.stringify(value)});
}
export async function writePublic(path,value){
  const url=`${configuredDbUrl()}/${path}.json`;
  return jsonFetch(url,{method:'PUT',body:JSON.stringify(value)});
}

export async function uploadStorage(file, storagePath){
  const a=authState();
  if(!a.token || !a.admin) throw new Error('Administrator-Anmeldung erforderlich.');
  const bucket=encodeURIComponent(firebaseConfig.storageBucket), name=encodeURIComponent(storagePath);
  const url=`https://firebasestorage.googleapis.com/v0/b/${bucket}/o?uploadType=media&name=${name}`;
  const r=await fetch(url,{method:'POST',headers:{'Authorization':`Bearer ${a.token}`,'Content-Type':file.type||'application/octet-stream'},body:file});
  const text=await r.text(); let data=null; try{data=text?JSON.parse(text):null;}catch{data={raw:text};}
  if(!r.ok) throw new Error(data?.error?.message||data?.error||`HTTP ${r.status}`);
  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${name}?alt=media`;
}
export async function deleteStorage(storagePath){
  const a=authState(); if(!a.token || !a.admin) throw new Error('Administrator-Anmeldung erforderlich.');
  const bucket=encodeURIComponent(firebaseConfig.storageBucket), name=encodeURIComponent(storagePath);
  const url=`https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${name}`;
  const r=await fetch(url,{method:'DELETE',headers:{'Authorization':`Bearer ${a.token}`} });
  if(!r.ok){const text=await r.text();let data=null;try{data=text?JSON.parse(text):null;}catch{data={raw:text};}throw new Error(data?.error?.message||data?.error||`HTTP ${r.status}`);}
}
