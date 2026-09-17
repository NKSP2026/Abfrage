/* NABS V66 – hochaufgelöste anatomische Verletzungskarte
 * PC: ausschließlich RECHTSKLICK öffnet die Auswahl. Hover zeigt die Region.
 * Touch: langes Gedrückthalten (ca. 550 ms) entspricht dem Rechtsklick.
 * Die Markierung wird als anatomisch geformter SVG-Pfad gespeichert und
 * anschließend in Ergebnis + PDF mit exakt derselben Geometrie dargestellt.
 */
(function(){
  const P=(id,label,d,burnValue=0)=>({id,label,d,burnValue});
  const rect=(id,label,x,y,w,h,b=0)=>P(id,label,`M${x} ${y} Q${x+w/2} ${y-3} ${x+w} ${y} L${x+w} ${y+h} Q${x+w/2} ${y+h+3} ${x} ${y+h}Z`,b);
  const poly=(id,label,pts,b=0)=>P(id,label,pts.map((p,i)=>(i?'L':'M')+p[0]+' '+p[1]).join(' ')+'Z',b);
  const regions=[];

  // ---------- VORDERSEITE ----------
  regions.push(
    P('front_skull','Schädeldecke vorne','M365 55 Q395 38 425 55 Q440 75 432 105 Q425 128 395 135 Q365 128 358 105 Q350 75 365 55Z',4.5),
    P('front_forehead','Stirn','M368 67 Q395 50 422 67 L423 91 Q395 84 367 91Z'),
    P('front_eye_r','Auge / Augenregion rechts','M366 88 Q380 80 394 87 L394 106 Q380 112 367 104Z'),
    P('front_eye_l','Auge / Augenregion links','M396 87 Q410 80 424 88 L423 105 Q410 112 396 106Z'),
    P('front_nose','Nase','M389 88 L401 88 L404 116 L395 126 L386 116Z'),
    P('front_cheek_r','Wange rechts','M365 105 Q378 105 390 116 L389 132 Q375 134 364 122Z'),
    P('front_cheek_l','Wange links','M401 116 Q413 105 425 105 L426 122 Q415 134 401 132Z'),
    P('front_mouth_chin','Mund / Kinn','M378 122 Q395 118 412 122 L415 143 Q395 151 375 143Z'),
    P('front_jaw_r','Kiefer rechts','M365 122 Q378 137 394 139 L394 153 Q375 150 362 135Z'),
    P('front_jaw_l','Kiefer links','M396 139 Q412 137 425 122 L428 135 Q415 150 396 153Z'),
    P('front_neck','Hals vorne','M382 145 L408 145 L414 184 L376 184Z'),
    P('front_clavicle_r','Schlüsselbein rechts','M350 183 Q373 175 394 186 L394 200 Q370 197 348 191Z',.25),
    P('front_clavicle_l','Schlüsselbein links','M396 186 Q417 175 440 183 L442 191 Q420 197 396 200Z',.25),
    P('front_sternum','Brustbein / Sternum','M389 184 L401 184 L404 287 L386 287Z',1),
    P('front_chest_r','Brustkorb rechts','M347 195 Q368 190 386 204 L384 286 Q360 294 341 274 Q335 232 347 195Z',4),
    P('front_chest_l','Brustkorb links','M404 204 Q422 190 443 195 Q455 232 449 274 Q430 294 406 286Z',4),
    P('front_ribs_r','Rippen rechts','M340 207 Q355 202 382 214 L381 272 Q356 266 342 250Z',2),
    P('front_ribs_l','Rippen links','M408 214 Q435 202 450 207 L448 250 Q434 266 409 272Z',2),
    // Bauch – bewusst fein unterteilt
    P('front_abdomen','Abdomen','M351 280 Q395 292 439 280 L439 382 Q425 410 395 414 Q365 410 351 382Z',6),
    P('front_upperabd_r','Oberbauch rechts','M352 282 Q373 286 394 292 L394 334 L354 330Z',1.5),
    P('front_upperabd_l','Oberbauch links','M396 292 Q417 286 438 282 L436 330 L396 334Z',1.5),
    P('front_umbilical','Bauchmitte / Nabelregion','M374 329 L416 329 L416 370 L374 370Z',1),
    P('front_lowerabd_r','Unterbauch rechts','M351 368 L394 370 L394 405 Q370 408 356 390Z',1.25),
    P('front_lowerabd_l','Unterbauch links','M396 370 L439 368 Q434 390 416 405 Q405 408 396 405Z',1.25),
    P('front_flank_r','Flanke rechts','M335 288 L353 292 L354 378 L340 365 Q331 330 335 288Z',1),
    P('front_flank_l','Flanke links','M437 292 L455 288 Q459 330 450 365 L436 378Z',1),
    P('front_pelvis','Becken / Hüfte','M350 378 Q395 402 440 378 Q454 410 448 454 Q425 486 395 486 Q365 486 342 454 Q336 410 350 378Z',3),
    P('front_hip_r','Hüfte rechts','M340 383 Q360 392 379 405 L369 457 Q349 452 342 434Z',1),
    P('front_hip_l','Hüfte links','M411 405 Q430 392 450 383 L448 434 Q441 452 421 457Z',1),
    P('front_groin_r','Leiste rechts','M374 444 L395 444 L395 480 Q378 477 366 461Z',.5),
    P('front_groin_l','Leiste links','M395 444 L416 444 Q424 461 407 480 L395 480Z',.5),
    // Wirbelsäule vorne als schmale anatomische Zonen
    rect('front_cervical_spine','Halswirbelsäule',386,155,18,32),
    rect('front_thoracic_spine','Brustwirbelsäule',386,205,18,80),
    rect('front_lumbar_spine','Lendenwirbelsäule',386,285,18,92),
    rect('front_sacral_spine','Kreuzbein / Sakralregion',386,377,18,58),
    ...Array.from({length:7},(_,i)=>rect(`front_c${i+1}`,`Halswirbel C${i+1}`,387,157+i*4,16,5)),
    ...Array.from({length:12},(_,i)=>rect(`front_th${i+1}`,`Brustwirbel Th${i+1}`,387,207+i*6,16,6)),
    ...Array.from({length:5},(_,i)=>rect(`front_l${i+1}`,`Lendenwirbel L${i+1}`,387,286+i*15,16,15)),
    // Schulter/Arme
    P('front_shoulder_r','Schulter rechts','M292 188 Q318 177 345 192 L350 235 Q324 244 294 231 Q280 215 292 188Z',.25),
    P('front_shoulder_l','Schulter links','M445 192 Q472 177 498 188 Q510 215 496 231 Q466 244 440 235Z',.25),
    P('front_upperarm_r','Oberarm rechts','M286 225 Q305 232 323 242 L302 356 Q287 374 270 356 L248 250 Q255 232 286 225Z',1.5),
    P('front_upperarm_l','Oberarm links','M466 242 Q485 232 504 225 Q535 232 542 250 L520 356 Q503 374 488 356Z',1.5),
    P('front_elbow_r','Ellenbogen rechts','M270 350 Q288 342 304 354 L304 390 Q286 401 268 390Z',.25),
    P('front_elbow_l','Ellenbogen links','M486 354 Q502 342 520 350 L522 390 Q504 401 486 390Z',.25),
    P('front_forearm_r','Unterarm rechts','M268 386 Q286 394 304 386 L245 505 Q228 520 213 505 L260 395Z',1.75),
    P('front_forearm_l','Unterarm links','M486 386 Q504 394 522 386 L530 395 L577 505 Q562 520 545 505Z',1.75),
    P('front_wrist_r','Handgelenk rechts','M213 500 Q230 494 247 505 L235 535 Q218 540 205 527Z',.25),
    P('front_wrist_l','Handgelenk links','M545 505 Q562 494 579 500 L587 527 Q574 540 557 535Z',.25),
    P('front_palm_r','Handfläche rechts','M198 523 Q218 510 238 528 L235 565 Q216 580 197 565 Q188 545 198 523Z',.5),
    P('front_palm_l','Handfläche links','M552 528 Q572 510 592 523 Q602 545 593 565 Q574 580 555 565Z',.5),
    // Beine
    P('front_thigh_r','Oberschenkel rechts','M350 475 Q370 465 392 475 L394 735 Q382 775 352 768 Q332 760 330 720 L338 500Z',4.5),
    P('front_thigh_l','Oberschenkel links','M398 475 Q420 465 440 475 L452 500 L460 720 Q458 760 438 768 Q408 775 396 735Z',4.5),
    P('front_knee_r','Knie rechts','M330 725 Q360 712 394 730 L392 790 Q365 804 336 790Z',.25),
    P('front_knee_l','Knie links','M396 730 Q430 712 460 725 L454 790 Q425 804 398 790Z',.25),
    P('front_lowerleg_r','Unterschenkel rechts','M336 785 Q365 798 392 785 L388 1060 Q374 1092 345 1070 Q334 1040 332 995Z',4),
    P('front_lowerleg_l','Unterschenkel links','M398 785 Q425 798 454 785 L458 995 Q456 1040 445 1070 Q416 1092 402 1060Z',4),
    P('front_shin_r','Schienbein rechts','M350 795 Q365 802 381 795 L378 1038 Q366 1055 352 1040Z',2),
    P('front_shin_l','Schienbein links','M409 795 Q425 802 441 795 L439 1040 Q424 1055 412 1038Z',2),
    P('front_ankle_r','Sprunggelenk rechts','M340 1055 Q360 1048 386 1058 L386 1090 Q360 1100 340 1088Z',.15),
    P('front_ankle_l','Sprunggelenk links','M404 1058 Q430 1048 450 1055 L450 1088 Q430 1100 404 1090Z',.15),
    P('front_foot_r','Fuß rechts','M330 1082 Q355 1075 387 1085 L395 1118 Q370 1142 335 1132 Q316 1120 330 1082Z',.5),
    P('front_foot_l','Fuß links','M403 1085 Q435 1075 460 1082 Q474 1120 455 1132 Q420 1142 395 1118Z',.5)
  );

  // Finger und Zehen – einzeln
  const fingerNames=['Daumen','Zeigefinger','Mittelfinger','Ringfinger','Kleiner Finger'];
  const toeNames=['Großzehe','2. Zehe','3. Zehe','4. Zehe','5. Zehe'];
  const digit=(prefix,kind,side,x,y,dx,dy,back=false)=>{
    const names=kind==='Finger'?fingerNames:toeNames;
    for(let i=0;i<5;i++){
      const xx=x+i*dx;
      regions.push(poly(`${prefix}_${i+1}`,`${names[i]} ${side}`,[
        [xx,y],[xx+8,y-3],[xx+12,y+dy],[xx+3,y+dy+3]
      ]));
    }
  };
  digit('front_finger_r','Finger','rechts',194,535,10,43);
  digit('front_finger_l','Finger','links',544,535,10,43);
  digit('front_toe_r','Zehe','rechts',331,1100,13,36);
  digit('front_toe_l','Zehe','links',400,1100,13,36);

  // ---------- RÜCKSEITE ----------
  regions.push(
    P('back_skull','Schädeldecke hinten','M940 55 Q970 38 1000 55 Q1015 75 1007 105 Q1000 128 970 135 Q940 128 933 105 Q925 75 940 55Z',4.5),
    P('back_nape','Nacken','M957 132 L983 132 L989 180 L951 180Z',.5),
    rect('back_cervical_spine','Halswirbelsäule hinten',961,150,18,34),
    P('back_clavicle_r','Schulterblatt / Schlüsselbein rechts hinten','M868 190 Q890 176 918 191 L924 236 Q898 245 870 231Z',.25),
    P('back_clavicle_l','Schulterblatt / Schlüsselbein links hinten','M1022 191 Q1050 176 1072 190 L1070 231 Q1042 245 1016 236Z',.25),
    P('back_upperback','Oberer Rücken','M925 184 Q970 170 1015 184 Q1033 215 1027 272 Q1015 300 970 305 Q925 300 913 272 Q907 215 925 184Z',9),
    P('back_scapula_r','Schulterblatt rechts','M873 207 Q894 194 915 210 L914 263 Q893 275 875 258Z',2),
    P('back_scapula_l','Schulterblatt links','M1025 210 Q1046 194 1067 207 L1065 258 Q1047 275 1026 263Z',2),
    P('back_spine_thoracic_upper','Brustwirbelsäule oben','M961 182 L979 182 L979 226 L961 226Z'),
    P('back_spine_thoracic_mid','Brustwirbelsäule Mitte','M961 226 L979 226 L979 272 L961 272Z'),
    P('back_spine_thoracic_lower','Brustwirbelsäule unten','M961 272 L979 272 L979 307 L961 307Z'),
    P('back_lowerback','Unterer Rücken','M927 270 Q970 295 1013 270 L1013 382 Q1000 410 970 414 Q940 410 927 382Z',6),
    P('back_lumbar_r','Lendenwirbelsäule rechts','M948 300 L961 300 L961 384 L948 384Z',1),
    P('back_lumbar_l','Lendenwirbelsäule links','M979 300 L992 300 L992 384 L979 384Z',1),
    P('back_flank_r','Flanke rechts hinten','M913 285 L948 295 L948 374 L923 385 Q911 350 913 285Z',1),
    P('back_flank_l','Flanke links hinten','M992 295 L1027 285 Q1029 350 1017 385 L992 374Z',1),
    P('back_sacrum','Kreuzbein / Sakralregion','M954 375 Q970 386 986 375 L991 430 Q970 448 949 430Z',1),
    ...Array.from({length:7},(_,i)=>rect(`back_c${i+1}`,`Halswirbel C${i+1} hinten`,962,157+i*4,16,5)),
    ...Array.from({length:12},(_,i)=>rect(`back_th${i+1}`,`Brustwirbel Th${i+1} hinten`,962,207+i*6,16,6)),
    ...Array.from({length:5},(_,i)=>rect(`back_l${i+1}`,`Lendenwirbel L${i+1} hinten`,962,286+i*15,16,15)),
    P('back_pelvis','Becken / Hüfte hinten','M925 378 Q970 402 1015 378 Q1029 410 1023 454 Q1000 486 970 486 Q940 486 917 454 Q911 410 925 378Z',3),
    P('back_hip_r','Hüfte rechts hinten','M917 390 Q938 398 955 410 L949 458 Q930 452 920 433Z',1),
    P('back_hip_l','Hüfte links hinten','M985 410 Q1002 398 1023 390 L1020 433 Q1010 452 991 458Z',1),
    P('back_buttock_r','Gesäß rechts','M918 431 Q944 425 969 445 L967 490 Q938 494 918 470Z',1),
    P('back_buttock_l','Gesäß links','M971 445 Q996 425 1022 431 L1022 470 Q1002 494 973 490Z',1),
    // Rückenrippen
    P('back_ribs_r','Rippen rechts hinten','M915 205 Q936 194 961 208 L961 282 Q936 273 919 252Z',2),
    P('back_ribs_l','Rippen links hinten','M979 208 Q1004 194 1025 205 L1021 252 Q1004 273 979 282Z',2),
    // Arme hinten
    P('back_shoulder_r','Schulter rechts hinten','M867 188 Q893 177 920 192 L925 235 Q899 244 869 231 Q855 215 867 188Z',.25),
    P('back_shoulder_l','Schulter links hinten','M1020 192 Q1047 177 1073 188 Q1085 215 1071 231 Q1041 244 1015 235Z',.25),
    P('back_upperarm_r','Oberarm rechts hinten','M861 225 Q880 232 898 242 L877 356 Q862 374 845 356 L823 250 Q830 232 861 225Z',1.5),
    P('back_upperarm_l','Oberarm links hinten','M1041 242 Q1060 232 1079 225 Q1110 232 1117 250 L1095 356 Q1078 374 1063 356Z',1.5),
    P('back_elbow_r','Ellenbogen rechts hinten','M845 350 Q863 342 879 354 L879 390 Q861 401 843 390Z',.25),
    P('back_elbow_l','Ellenbogen links hinten','M1061 354 Q1077 342 1095 350 L1097 390 Q1079 401 1061 390Z',.25),
    P('back_forearm_r','Unterarm rechts hinten','M843 386 Q861 394 879 386 L820 505 Q803 520 788 505 L835 395Z',1.75),
    P('back_forearm_l','Unterarm links hinten','M1061 386 Q1079 394 1097 386 L1144 505 Q1129 520 1112 505Z',1.75),
    P('back_wrist_r','Handgelenk rechts hinten','M788 500 Q805 494 822 505 L810 535 Q793 540 780 527Z',.25),
    P('back_wrist_l','Handgelenk links hinten','M1112 505 Q1129 494 1146 500 L1154 527 Q1141 540 1124 535Z',.25),
    P('back_palm_r','Handfläche rechts hinten','M773 523 Q793 510 813 528 L810 565 Q791 580 772 565 Q763 545 773 523Z',.5),
    P('back_palm_l','Handfläche links hinten','M1127 528 Q1147 510 1167 523 Q1177 545 1168 565 Q1149 580 1130 565Z',.5),
    // Beine hinten
    P('back_thigh_r','Oberschenkel rechts hinten','M925 475 Q945 465 967 475 L969 735 Q957 775 927 768 Q907 760 905 720 L913 500Z',4.5),
    P('back_thigh_l','Oberschenkel links hinten','M973 475 Q995 465 1015 475 L1027 500 L1035 720 Q1033 760 1013 768 Q983 775 971 735Z',4.5),
    P('back_knee_r','Knie rechts hinten','M905 725 Q935 712 969 730 L967 790 Q940 804 911 790Z',.25),
    P('back_knee_l','Knie links hinten','M971 730 Q1005 712 1035 725 L1029 790 Q1000 804 973 790Z',.25),
    P('back_lowerleg_r','Unterschenkel rechts hinten','M911 785 Q940 798 967 785 L963 1060 Q949 1092 920 1070 Q909 1040 907 995Z',4),
    P('back_lowerleg_l','Unterschenkel links hinten','M973 785 Q1000 798 1029 785 L1033 995 Q1031 1040 1020 1070 Q991 1092 977 1060Z',4),
    P('back_calf_r','Wade rechts hinten','M915 800 Q940 815 960 800 L957 1045 Q940 1060 920 1045Z',2),
    P('back_calf_l','Wade links hinten','M980 800 Q1000 815 1025 800 L1020 1045 Q1000 1060 983 1045Z',2),
    P('back_ankle_r','Sprunggelenk rechts hinten','M915 1055 Q935 1048 961 1058 L961 1090 Q935 1100 915 1088Z',.15),
    P('back_ankle_l','Sprunggelenk links hinten','M979 1058 Q1005 1048 1025 1055 L1025 1088 Q1005 1100 979 1090Z',.15),
    P('back_foot_r','Fuß rechts hinten','M905 1082 Q930 1075 962 1085 L970 1118 Q945 1142 910 1132 Q891 1120 905 1082Z',.5),
    P('back_foot_l','Fuß links hinten','M978 1085 Q1010 1075 1035 1082 Q1049 1120 1030 1132 Q995 1142 970 1118Z',.5)
  );
  digit('back_finger_r','Finger','rechts hinten',769,535,10,43);
  digit('back_finger_l','Finger','links hinten',1119,535,10,43);
  digit('back_toe_r','Zehe','rechts hinten',906,1100,13,36);
  digit('back_toe_l','Zehe','links hinten',976,1100,13,36);

  const injuryTypes=[
    'Verletzungsart unklar','Amputation','Bissverletzung','Erfrierung','Fraktur','Luxation',
    'Platzwunde / Schürfung','Prellung / Bänderverletzung','Quetschung','Riss- / Quetsch- / Schnittverletzung',
    'Tiefe Schnittwunde','Schussverletzung','Stich- / Pfählungsverletzung','Verbrennung / Verbrühung / Verätzung',
    'Hiebverletzung','Verletzungsmechanismus schwer'
  ];
  const burnMapValue=(selected)=>Math.min(100,[...selected].reduce((sum,id)=>sum+(Number(regions.find(r=>r.id===id)?.burnValue)||0),0));
  function setDetail(id,type){const a=window.__NABS_ANSWERS__;if(!a)return;a.verletzung_v51_koerperdetails=a.verletzung_v51_koerperdetails||{};if(type)a.verletzung_v51_koerperdetails[id]=type;else delete a.verletzung_v51_koerperdetails[id];}
  function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
  function closeMenu(){document.querySelectorAll('.nabs-injury-menu').forEach(x=>x.remove());}
  function showTooltip(text,x,y){let t=document.querySelector('.nabs-body-tooltip');if(!t){t=document.createElement('div');t.className='nabs-body-tooltip';document.body.appendChild(t);}t.textContent=text;t.style.left=Math.min(window.innerWidth-260,Math.max(8,x+12))+'px';t.style.top=Math.min(window.innerHeight-50,Math.max(8,y+12))+'px';t.hidden=false;return t;}
  function hideTooltip(){const t=document.querySelector('.nabs-body-tooltip');if(t)t.hidden=true;}
  function openMenu(region,anchor,onChange,clientX,clientY){
    closeMenu();hideTooltip();
    const menu=document.createElement('div');menu.className='nabs-injury-menu';
    menu.innerHTML=`<div class="nabs-injury-menu-title">📍 ${esc(region.label)}</div><div class="nabs-injury-menu-sub">Verletzungsart auswählen</div><div class="nabs-injury-menu-options">${injuryTypes.map(t=>`<button type="button" data-type="${esc(t)}">${esc(t)}</button>`).join('')}</div><div class="nabs-injury-menu-sep"></div><button type="button" class="nabs-menu-reset">Auswahl zurücksetzen</button><button type="button" class="nabs-menu-reset-all">ALLE VERLETZUNGEN ZURÜCKSETZEN</button>`;
    document.body.appendChild(menu);
    menu.querySelectorAll('[data-type]').forEach(b=>b.onclick=()=>{setDetail(region.id,b.dataset.type);onChange(region.id,b.dataset.type);closeMenu();});
    menu.querySelector('.nabs-menu-reset').onclick=()=>{setDetail(region.id,null);onChange(region.id,null);closeMenu();};
    menu.querySelector('.nabs-menu-reset-all').onclick=()=>{if(window.__NABS_CLEAR_BODYMAP__)window.__NABS_CLEAR_BODYMAP__();closeMenu();};
    const mw=Math.min(360,window.innerWidth-16),mh=Math.min(570,window.innerHeight-16);let left=(clientX??anchor.getBoundingClientRect().left),top=(clientY??anchor.getBoundingClientRect().bottom+8);if(left+mw>window.innerWidth-8)left=window.innerWidth-mw-8;if(left<8)left=8;if(top+mh>window.innerHeight-8)top=Math.max(8,(clientY??anchor.getBoundingClientRect().top)-mh-8);menu.style.left=left+'px';menu.style.top=top+'px';
  }
  function makeSvg(container,selected,onSummary){
    const svg=container,ns='http://www.w3.org/2000/svg';svg.innerHTML='';
    window.__NABS_CLEAR_BODYMAP__=()=>{selected.clear();const a=window.__NABS_ANSWERS__;if(a){a.verletzung_v51_koerperkarte=[];a.verletzung_v51_koerperdetails={};}svg.querySelectorAll('.nabs-body-region').forEach(e=>e.classList.remove('selected'));onSummary()};
    regions.forEach(r=>{
      const el=document.createElementNS(ns,'path');el.setAttribute('d',r.d);el.setAttribute('class','nabs-body-region');el.setAttribute('tabindex','0');el.setAttribute('role','button');el.setAttribute('aria-label',r.label);el.dataset.region=r.id;
      if(selected.has(r.id))el.classList.add('selected');
      el.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')showTooltip(r.label,e.clientX,e.clientY)});
      el.addEventListener('pointermove',e=>{if(e.pointerType==='mouse')showTooltip(r.label,e.clientX,e.clientY)});
      el.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')hideTooltip()});
      let longPress=null,longStart=null;
      const choose=(e)=>{e.preventDefault();e.stopPropagation();openMenu(r,el,(id,type)=>{if(type){selected.add(id);el.classList.add('selected')}else{selected.delete(id);el.classList.remove('selected')}const a=window.__NABS_ANSWERS__;if(a)a.verletzung_v51_koerperkarte=[...selected];onSummary();},e.clientX,e.clientY)};
      // PC: nur Rechtsklick. Linksklick bleibt ohne Aktion.
      el.addEventListener('contextmenu',choose);
      el.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'){longStart={x:e.clientX,y:e.clientY};longPress=setTimeout(()=>choose({preventDefault:()=>{},stopPropagation:()=>{},clientX:longStart.x,clientY:longStart.y}),550)}});
      el.addEventListener('pointerup',e=>{if(longPress){clearTimeout(longPress);longPress=null}});
      el.addEventListener('pointercancel',()=>{if(longPress){clearTimeout(longPress);longPress=null}});
      el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose(e)}});
      svg.appendChild(el);
    });
  }
  window.NABSBodyMap={regions,injuryTypes,burnMapValue,makeSvg,openMenu};
})();
