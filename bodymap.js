/* NABS V66 – hochgranulare anatomische Verletzungskarte
 * Rechtsklick (PC) bzw. Tippen (Touch) öffnet die Verletzungsart.
 * Linksklick am PC markiert NICHT direkt. Hover zeigt den exakten Bereich.
 * Die SVG-Flächen liegen direkt über dem Körperschema und werden im Ergebnis
 * und beim Drucken mit derselben Koordinatenbasis wiederverwendet.
 */
(function(){
  const P=(id,label,d,opts={})=>({id,label,d,...opts});
  const regions=[];

  // Hilfsfunktionen für einfache anatomische Teilflächen.
  const poly=(pts)=>'M '+pts.map(p=>p.join(' ')).join(' L ')+' Z';
  const rect=(x,y,w,h,r=0)=>{
    if(!r)return `M${x} ${y}H${x+w}V${y+h}H${x}Z`;
    return `M${x+r} ${y}H${x+w-r}Q${x+w} ${y} ${x+w} ${y+r}V${y+h-r}Q${x+w} ${y+h} ${x+w-r} ${y+h}H${x+r}Q${x} ${y+h} ${x} ${y+h-r}V${y+r}Q${x} ${y} ${x+r} ${y}Z`;
  };
  const ell=(cx,cy,rx,ry)=>`M${cx-rx} ${cy}A${rx} ${ry} 0 1 0 ${cx+rx} ${cy}A${rx} ${ry} 0 1 0 ${cx-rx} ${cy}Z`;
  const add=(id,label,d,opts={})=>regions.push(P(id,label,d,opts));

  // ---------------- VORDERSEITE ----------------
  // Kopf / Gesicht
  add('front_head','Kopf / Schädeldecke', 'M365 55 Q395 38 425 55 Q440 75 432 105 Q425 128 395 135 Q365 128 358 105 Q350 75 365 55Z',{burnValue:4.5});
  add('front_forehead','Stirn',poly([[370,58],[395,48],[420,58],[423,91],[368,91]]));
  add('front_temple_r','Schläfe rechts',poly([[357,78],[370,75],[369,105],[360,110],[354,98]]));
  add('front_temple_l','Schläfe links',poly([[420,75],[433,78],[436,98],[430,110],[421,105]]));
  add('front_eye_r','Auge rechts',poly([[369,92],[382,88],[391,95],[382,102],[370,101]]));
  add('front_eye_l','Auge links',poly([[399,95],[408,88],[421,92],[420,101],[408,102]]));
  add('front_nose','Nase',poly([[392,91],[399,91],[405,116],[399,123],[391,116]]));
  add('front_cheek_r','Wange rechts',poly([[365,105],[390,110],[389,129],[373,128],[365,118]]));
  add('front_cheek_l','Wange links',poly([[400,110],[425,105],[425,118],[417,128],[401,129]]));
  add('front_ear_r','Ohr rechts',ell(360,99,8,15));
  add('front_ear_l','Ohr links',ell(430,99,8,15));
  add('front_mouth','Mund / Lippen',poly([[382,126],[395,123],[408,126],[403,134],[387,134]]));
  add('front_jaw_r','Kiefer rechts',poly([[365,118],[388,126],[394,137],[378,140],[365,130]]));
  add('front_jaw_l','Kiefer links',poly([[396,137],[402,126],[425,118],[425,130],[412,140]]));
  add('front_chin','Kinn',poly([[383,133],[407,133],[402,146],[390,146]]));

  add('front_neck','Hals vorne',rect(378,142,34,42,4),{burnValue:.5});
  add('front_clavicle_r','Schlüsselbein rechts',poly([[348,177],[380,165],[393,180],[370,190],[346,190]]));
  add('front_clavicle_l','Schlüsselbein links',poly([[397,180],[410,165],[442,177],[444,190],[420,190]]));

  // Brustkorb / Rippen
  add('front_chest','Brustkorb', 'M350 184 Q395 170 440 184 Q458 215 452 272 Q440 300 395 305 Q350 300 338 272 Q332 215 350 184Z',{burnValue:9,children:['front_upperchest_r','front_upperchest_l','front_midchest_r','front_midchest_l','front_lowerchest_r','front_lowerchest_l']});
  add('front_upperchest_r','oberer Brustkorb rechts',poly([[345,191],[393,184],[392,225],[347,229]]));
  add('front_upperchest_l','oberer Brustkorb links',poly([[397,184],[445,191],[443,229],[398,225]]));
  add('front_midchest_r','mittlerer Brustkorb / Rippen rechts',poly([[343,228],[392,224],[392,267],[343,263]]));
  add('front_midchest_l','mittlerer Brustkorb / Rippen links',poly([[398,224],[447,228],[447,263],[398,267]]));
  add('front_lowerchest_r','unterer Brustkorb / Rippen rechts',poly([[343,263],[392,267],[388,301],[350,292]]));
  add('front_lowerchest_l','unterer Brustkorb / Rippen links',poly([[398,267],[447,263],[440,292],[402,301]]));
  add('front_sternum','Brustbein / Sternum',poly([[391,188],[400,188],[401,299],[391,299]]));

  // Schultern und Arme
  add('front_shoulder_r','Schulter rechts', 'M292 188 Q318 177 345 192 L350 235 Q324 244 294 231 Q280 215 292 188Z');
  add('front_shoulder_l','Schulter links', 'M445 192 Q472 177 498 188 Q510 215 496 231 Q466 244 440 235Z');
  add('front_upperarm_r','Oberarm rechts', 'M286 225 Q305 232 323 242 L302 356 Q287 374 270 356 L248 250 Q255 232 286 225Z');
  add('front_upperarm_l','Oberarm links', 'M466 242 Q485 232 504 225 Q535 232 542 250 L520 356 Q503 374 488 356Z');
  add('front_elbow_r','Ellenbogen rechts', 'M270 350 Q288 342 304 354 L304 390 Q286 401 268 390Z');
  add('front_elbow_l','Ellenbogen links', 'M486 354 Q502 342 520 350 L522 390 Q504 401 486 390Z');
  add('front_forearm_r','Unterarm rechts', 'M268 386 Q286 394 304 386 L245 505 Q228 520 213 505 L260 395Z');
  add('front_forearm_l','Unterarm links', 'M486 386 Q504 394 522 386 L530 395 L577 505 Q562 520 545 505Z');
  add('front_wrist_r','Handgelenk rechts', 'M213 500 Q230 494 247 505 L235 535 Q218 540 205 527Z');
  add('front_wrist_l','Handgelenk links', 'M545 505 Q562 494 579 500 L587 527 Q574 540 557 535Z');
  add('front_palm_r','Handfläche rechts', 'M198 523 Q218 510 238 528 L235 565 Q216 580 197 565 Q188 545 198 523Z');
  add('front_palm_l','Handfläche links', 'M552 528 Q572 510 592 523 Q602 545 593 565 Q574 580 555 565Z');
  // Finger – einzeln, mit eigener Kontur
  const fr=[['Daumen',1,194,535,203,574],['Zeigefinger',2,205,532,214,580],['Mittelfinger',3,216,531,225,582],['Ringfinger',4,227,534,236,579],['Kleiner Finger',5,238,540,246,573]];
  fr.forEach(([n,i,x1,y1,x2,y2])=>add(`front_finger_r_${i}`,`${n} rechts`,poly([[x1,y1],[x1+9,y1-5],[x2,y2],[x1+3,y2+5]])));
  const fl=[['Daumen',1,544,544,555,578],['Zeigefinger',2,554,537,563,581],['Mittelfinger',3,565,532,574,582],['Ringfinger',4,576,530,585,582],['Kleiner Finger',5,587,530,596,579]];
  fl.forEach(([n,i,x1,y1,x2,y2])=>add(`front_finger_l_${i}`,`${n} links`,poly([[x1,y1],[x1+8,y1-4],[x2,y2],[x1+3,y2+3]])));

  // Abdomen – Gesamtfläche und vier Quadranten
  add('front_abdomen','Abdomen', 'M352 270 Q395 295 438 270 L438 382 Q425 410 395 414 Q365 410 352 382Z',{burnValue:6,children:['front_upperabd_r','front_upperabd_l','front_lowerabd_r','front_lowerabd_l']});
  add('front_upperabd_r','Oberbauch rechts',poly([[353,273],[393,286],[393,337],[353,332]]),{burnValue:1.5});
  add('front_upperabd_l','Oberbauch links',poly([[397,286],[437,273],[437,332],[397,337]]),{burnValue:1.5});
  add('front_lowerabd_r','Unterbauch rechts',poly([[353,333],[393,337],[393,401],[365,395],[353,378]]),{burnValue:1.5});
  add('front_lowerabd_l','Unterbauch links',poly([[397,337],[437,333],[437,378],[425,395],[397,401]]),{burnValue:1.5});
  add('front_umbilicus','Nabelbereich',ell(395,334,10,10),{burnValue:.15});
  add('front_pelvis','Becken / Hüfte', 'M350 378 Q395 402 440 378 Q454 410 448 454 Q425 486 395 486 Q365 486 342 454 Q336 410 350 378Z',{burnValue:3});
  add('front_groin_r','Leiste rechts',poly([[345,388],[394,405],[391,452],[365,445],[346,424]]));
  add('front_groin_l','Leiste links',poly([[396,405],[445,388],[444,424],[425,445],[399,452]]));

  // Beine vorne
  add('front_thigh_r','Oberschenkel rechts', 'M350 475 Q370 465 392 475 L394 735 Q382 775 352 768 Q332 760 330 720 L338 500Z',{burnValue:4.5,children:['front_thigh_upper_r','front_thigh_lower_r']});
  add('front_thigh_l','Oberschenkel links', 'M398 475 Q420 465 440 475 L452 500 L460 720 Q458 760 438 768 Q408 775 396 735Z',{burnValue:4.5,children:['front_thigh_upper_l','front_thigh_lower_l']});
  add('front_thigh_upper_r','oberer Oberschenkel rechts',poly([[344,492],[391,482],[393,610],[338,610]]));
  add('front_thigh_lower_r','unterer Oberschenkel rechts',poly([[338,612],[393,612],[393,720],[350,760],[338,720]]));
  add('front_thigh_upper_l','oberer Oberschenkel links',poly([[399,482],[446,492],[452,610],[397,610]]));
  add('front_thigh_lower_l','unterer Oberschenkel links',poly([[397,612],[452,612],[458,720],[446,760],[397,720]]));
  add('front_knee_r','Kniescheibe / Knie rechts','M330 725 Q360 712 394 730 L392 790 Q365 804 336 790Z',{burnValue:.25});
  add('front_knee_l','Kniescheibe / Knie links','M396 730 Q430 712 460 725 L454 790 Q425 804 398 790Z',{burnValue:.25});
  add('front_lowerleg_r','Unterschenkel / Schienbein rechts','M336 785 Q365 798 392 785 L388 1060 Q374 1092 345 1070 Q334 1040 332 995Z',{burnValue:4,children:['front_shin_upper_r','front_shin_lower_r']});
  add('front_lowerleg_l','Unterschenkel / Schienbein links','M398 785 Q425 798 454 785 L458 995 Q456 1040 445 1070 Q416 1092 402 1060Z',{burnValue:4,children:['front_shin_upper_l','front_shin_lower_l']});
  add('front_shin_upper_r','oberes Schienbein rechts',poly([[339,795],[391,795],[388,925],[338,925]]));
  add('front_shin_lower_r','unteres Schienbein rechts',poly([[338,927],[388,927],[386,1055],[347,1068]]));
  add('front_shin_upper_l','oberes Schienbein links',poly([[399,795],[453,795],[455,925],[400,925]]));
  add('front_shin_lower_l','unteres Schienbein links',poly([[400,927],[455,927],[450,1055],[414,1068]]));
  add('front_ankle_r','Sprunggelenk rechts','M340 1055 Q360 1048 386 1058 L386 1090 Q360 1100 340 1088Z',{burnValue:.15});
  add('front_ankle_l','Sprunggelenk links','M404 1058 Q430 1048 450 1055 L450 1088 Q430 1100 404 1090Z',{burnValue:.15});
  add('front_foot_r','Fuß rechts','M330 1082 Q355 1075 387 1085 L395 1118 Q370 1142 335 1132 Q316 1120 330 1082Z',{burnValue:.5});
  add('front_foot_l','Fuß links','M403 1085 Q435 1075 460 1082 Q474 1120 455 1132 Q420 1142 395 1118Z',{burnValue:.5});
  const tr=[['Großzehe',1,331,1100,343,1136],['2. Zehe',2,344,1095,356,1139],['3. Zehe',3,357,1092,369,1138],['4. Zehe',4,370,1092,382,1136],['5. Zehe',5,382,1095,392,1128]];
  tr.forEach(([n,i,x1,y1,x2,y2])=>add(`front_toe_r_${i}`,`${n} rechts`,poly([[x1,y1],[x1+12,y1-5],[x2,y2],[x1+5,y2+3]])));
  const tl=[['Großzehe',1,400,1100,418,1135],['2. Zehe',2,410,1095,426,1138],['3. Zehe',3,423,1092,439,1138],['4. Zehe',4,436,1092,452,1139],['5. Zehe',5,449,1095,461,1136]];
  tl.forEach(([n,i,x1,y1,x2,y2])=>add(`front_toe_l_${i}`,`${n} links`,poly([[x1,y1],[x1+10,y1-5],[x2,y2],[x1+5,y2+2]])));

  // ---------------- RÜCKSEITE ----------------
  add('back_head','Kopf / Schädeldecke hinten','M940 55 Q970 38 1000 55 Q1015 75 1007 105 Q1000 128 970 135 Q940 128 933 105 Q925 75 940 55Z',{burnValue:4.5});
  add('back_occiput','Hinterkopf / Hinterhaupt',poly([[940,58],[970,45],[1000,58],[1005,110],[935,110]]));
  add('back_neck','Nacken','M957 132 L983 132 L989 180 L951 180Z',{burnValue:.5});
  add('back_cervical','Halswirbelsäule / HWS',poly([[963,138],[977,138],[981,178],[959,178]]));
  add('back_upperback','Oberer Rücken','M925 184 Q970 170 1015 184 Q1033 215 1027 272 Q1015 300 970 305 Q925 300 913 272 Q907 215 925 184Z',{burnValue:9,children:['back_scapula_r','back_scapula_l','back_thoracic']});
  add('back_scapula_r','Schulterblatt rechts',poly([[915,190],[950,190],[952,255],[928,268],[915,240]]));
  add('back_scapula_l','Schulterblatt links',poly([[990,190],[1025,190],[1025,240],[1012,268],[988,255]]));
  add('back_thoracic','Brustwirbelsäule / mittlerer Rücken',poly([[963,184],[977,184],[980,300],[960,300]]));
  add('back_ribs_r','Rippen rechts hinten',poly([[917,220],[958,218],[958,285],[920,275]]));
  add('back_ribs_l','Rippen links hinten',poly([[982,218],[1023,220],[1020,275],[982,285]]));
  add('back_lowerback','Unterer Rücken','M927 270 Q970 295 1013 270 L1013 382 Q1000 410 970 414 Q940 410 927 382Z',{burnValue:6,children:['back_lumbar_r','back_lumbar_l']});
  add('back_lumbar_r','Lendenwirbelsäule / LWS rechts',poly([[928,274],[967,292],[967,380],[940,391],[928,378]]));
  add('back_lumbar_l','Lendenwirbelsäule / LWS links',poly([[973,292],[1012,274],[1012,378],[1000,391],[973,380]]));
  add('back_flank_r','Flanke rechts',poly([[915,276],[940,292],[940,382],[922,370]]));
  add('back_flank_l','Flanke links',poly([[1000,292],[1025,276],[1018,370],[1000,382]]));
  add('back_sacrum','Kreuzbein / Sakrum',poly([[955,380],[985,380],[994,420],[970,450],[946,420]]));
  add('back_pelvis','Becken / Hüfte hinten','M925 378 Q970 402 1015 378 Q1029 410 1023 454 Q1000 486 970 486 Q940 486 917 454 Q911 410 925 378Z',{burnValue:3});
  add('back_glute_r','Gesäß rechts',poly([[918,410],[967,410],[967,475],[940,482],[920,452]]));
  add('back_glute_l','Gesäß links',poly([[973,410],[1022,410],[1020,452],[1000,482],[973,475]]));

  add('back_shoulder_r','Schulter rechts hinten','M867 188 Q893 177 920 192 L925 235 Q899 244 869 231 Q855 215 867 188Z');
  add('back_shoulder_l','Schulter links hinten','M1020 192 Q1047 177 1073 188 Q1085 215 1071 231 Q1041 244 1015 235Z');
  add('back_upperarm_r','Oberarm rechts hinten','M861 225 Q880 232 898 242 L877 356 Q862 374 845 356 L823 250 Q830 232 861 225Z');
  add('back_upperarm_l','Oberarm links hinten','M1041 242 Q1060 232 1079 225 Q1110 232 1117 250 L1095 356 Q1078 374 1063 356Z');
  add('back_elbow_r','Ellenbogen rechts hinten','M845 350 Q863 342 879 354 L879 390 Q861 401 843 390Z');
  add('back_elbow_l','Ellenbogen links hinten','M1061 354 Q1077 342 1095 350 L1097 390 Q1079 401 1061 390Z');
  add('back_forearm_r','Unterarm rechts hinten','M843 386 Q861 394 879 386 L820 505 Q803 520 788 505 L835 395Z');
  add('back_forearm_l','Unterarm links hinten','M1061 386 Q1079 394 1097 386 L1144 505 Q1129 520 1112 505Z');
  add('back_wrist_r','Handgelenk rechts hinten','M788 500 Q805 494 822 505 L810 535 Q793 540 780 527Z');
  add('back_wrist_l','Handgelenk links hinten','M1112 505 Q1129 494 1146 500 L1154 527 Q1141 540 1124 535Z');
  add('back_palm_r','Handfläche rechts hinten','M773 523 Q793 510 813 528 L810 565 Q791 580 772 565 Q763 545 773 523Z');
  add('back_palm_l','Handfläche links hinten','M1127 528 Q1147 510 1167 523 Q1177 545 1168 565 Q1149 580 1130 565Z');
  const bfr=[['Daumen',1,769,535,778,574],['Zeigefinger',2,780,532,789,580],['Mittelfinger',3,791,531,800,582],['Ringfinger',4,802,534,811,579],['Kleiner Finger',5,813,540,821,573]];
  bfr.forEach(([n,i,x1,y1,x2,y2])=>add(`back_finger_r_${i}`,`${n} rechts hinten`,poly([[x1,y1],[x1+9,y1-5],[x2,y2],[x1+3,y2+5]])));
  const bfl=[['Daumen',1,1119,544,1130,578],['Zeigefinger',2,1129,537,1138,581],['Mittelfinger',3,1140,532,1149,582],['Ringfinger',4,1151,530,1160,582],['Kleiner Finger',5,1162,530,1171,579]];
  bfl.forEach(([n,i,x1,y1,x2,y2])=>add(`back_finger_l_${i}`,`${n} links hinten`,poly([[x1,y1],[x1+8,y1-4],[x2,y2],[x1+3,y2+3]])));

  // Rückenbeine
  add('back_thigh_r','Oberschenkel rechts hinten','M925 475 Q945 465 967 475 L969 735 Q957 775 927 768 Q907 760 905 720 L913 500Z',{burnValue:4.5,children:['back_ham_upper_r','back_ham_lower_r']});
  add('back_thigh_l','Oberschenkel links hinten','M973 475 Q995 465 1015 475 L1027 500 L1035 720 Q1033 760 1013 768 Q983 775 971 735Z',{burnValue:4.5,children:['back_ham_upper_l','back_ham_lower_l']});
  add('back_ham_upper_r','oberer hinterer Oberschenkel rechts',poly([[914,492],[968,482],[969,610],[908,610]]));
  add('back_ham_lower_r','unterer hinterer Oberschenkel rechts',poly([[908,612],[969,612],[969,720],[930,760],[908,720]]));
  add('back_ham_upper_l','oberer hinterer Oberschenkel links',poly([[972,482],[1026,492],[1032,610],[971,610]]));
  add('back_ham_lower_l','unterer hinterer Oberschenkel links',poly([[971,612],[1032,612],[1032,720],[1010,760],[971,720]]));
  add('back_knee_r','Kniekehle / Knie rechts hinten','M905 725 Q935 712 969 730 L967 790 Q940 804 911 790Z',{burnValue:.25});
  add('back_knee_l','Kniekehle / Knie links hinten','M971 730 Q1005 712 1035 725 L1029 790 Q1000 804 973 790Z',{burnValue:.25});
  add('back_lowerleg_r','Unterschenkel rechts hinten','M911 785 Q940 798 967 785 L963 1060 Q949 1092 920 1070 Q909 1040 907 995Z',{burnValue:4,children:['back_calf_upper_r','back_calf_lower_r']});
  add('back_lowerleg_l','Unterschenkel links hinten','M973 785 Q1000 798 1029 785 L1033 995 Q1031 1040 1020 1070 Q991 1092 977 1060Z',{burnValue:4,children:['back_calf_upper_l','back_calf_lower_l']});
  add('back_calf_upper_r','obere Wade rechts hinten',poly([[914,795],[966,795],[962,925],[910,925]]));
  add('back_calf_lower_r','untere Wade rechts hinten',poly([[910,927],[962,927],[960,1055],[921,1068]]));
  add('back_calf_upper_l','obere Wade links hinten',poly([[974,795],[1028,795],[1030,925],[975,925]]));
  add('back_calf_lower_l','untere Wade links hinten',poly([[975,927],[1030,927],[1025,1055],[990,1068]]));
  add('back_ankle_r','Sprunggelenk rechts hinten','M915 1055 Q935 1048 961 1058 L961 1090 Q935 1100 915 1088Z',{burnValue:.15});
  add('back_ankle_l','Sprunggelenk links hinten','M979 1058 Q1005 1048 1025 1055 L1025 1088 Q1005 1100 979 1090Z',{burnValue:.15});
  add('back_heel_r','Ferse rechts hinten',poly([[912,1085],[940,1082],[958,1105],[955,1125],[918,1128]]));
  add('back_heel_l','Ferse links hinten',poly([[982,1085],[1010,1082],[1035,1105],[1032,1125],[995,1128]]));
  add('back_foot_r','Fuß rechts hinten','M905 1082 Q930 1075 962 1085 L970 1118 Q945 1142 910 1132 Q891 1120 905 1082Z',{burnValue:.5});
  add('back_foot_l','Fuß links hinten','M978 1085 Q1010 1075 1035 1082 Q1049 1120 1030 1132 Q995 1142 970 1118Z',{burnValue:.5});
  const btr=[['Großzehe',1,906,1100,923,1136],['2. Zehe',2,919,1095,935,1139],['3. Zehe',3,932,1092,948,1138],['4. Zehe',4,945,1092,960,1136],['5. Zehe',5,957,1095,969,1128]];
  btr.forEach(([n,i,x1,y1,x2,y2])=>add(`back_toe_r_${i}`,`${n} rechts hinten`,poly([[x1,y1],[x1+12,y1-5],[x2,y2],[x1+5,y2+3]])));
  const btl=[['Großzehe',1,976,1100,994,1135],['2. Zehe',2,986,1095,1002,1138],['3. Zehe',3,999,1092,1015,1138],['4. Zehe',4,1012,1092,1028,1139],['5. Zehe',5,1025,1095,1037,1136]];
  btl.forEach(([n,i,x1,y1,x2,y2])=>add(`back_toe_l_${i}`,`${n} links hinten`,poly([[x1,y1],[x1+10,y1-5],[x2,y2],[x1+5,y2+2]])));

  // Verletzungsarten – bewusst identisch zum gewünschten Kontextmenü.
  const injuryTypes=[
    'Verletzungsart unklar','Amputation','Bissverletzung','Erfrierung','Fraktur','Luxation',
    'Platzwunde / Schürfung','Prellung / Bänderverletzung','Quetschung','Riss- / Quetsch- / Schnittverletzung',
    'Tiefe Schnittwunde','Schussverletzung','Stich- / Pfählungsverletzung','Verbrennung / Verbrühung / Verätzung',
    'Hiebverletzung','Verletzungsmechanismus schwer'
  ];

  const byId=id=>regions.find(r=>r.id===id);
  const burnMapValue=(selected)=>{
    let total=0;
    const set=selected instanceof Set?selected:new Set(selected||[]);
    // Wenn eine Gesamtfläche ausgewählt ist, werden ihre Unterbereiche nicht zusätzlich gezählt.
    for(const r of regions){
      if(!set.has(r.id)) continue;
      if(r.children?.length) total+=Number(r.burnValue)||0;
      else {
        const parent=regions.find(p=>p.children?.includes(r.id));
        if(parent && set.has(parent.id)) continue;
        total+=Number(r.burnValue)||0;
      }
    }
    return Math.min(100,total);
  };

  function getDetails(){return window.__NABS_ANSWERS__?.verletzung_v51_koerperdetails||{};}
  function setDetail(id,type){
    const a=window.__NABS_ANSWERS__; if(!a)return;
    a.verletzung_v51_koerperdetails=a.verletzung_v51_koerperdetails||{};
    if(type)a.verletzung_v51_koerperdetails[id]=type; else delete a.verletzung_v51_koerperdetails[id];
  }
  function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}

  let tooltip=null;
  function showTip(region,e){
    if(tooltip)tooltip.remove();
    tooltip=document.createElement('div');tooltip.className='nabs-body-tooltip';tooltip.textContent=region.label;
    document.body.appendChild(tooltip);
    const x=Math.min(window.innerWidth-260,Math.max(10,(e.clientX||0)+14));
    const y=Math.min(window.innerHeight-55,Math.max(10,(e.clientY||0)+14));
    tooltip.style.left=x+'px';tooltip.style.top=y+'px';
  }
  function hideTip(){if(tooltip){tooltip.remove();tooltip=null;}}

  function closeMenu(){document.querySelectorAll('.nabs-injury-menu').forEach(x=>x.remove());}
  function openMenu(region,anchor,onChange){
    closeMenu();
    const menu=document.createElement('div');menu.className='nabs-injury-menu';
    menu.innerHTML=`<div class="nabs-injury-menu-title">📍 ${esc(region.label)}</div><div class="nabs-injury-menu-sub">Verletzungsart auswählen</div><div class="nabs-injury-menu-options">${injuryTypes.map(t=>`<button type="button" data-type="${esc(t)}">${esc(t)}</button>`).join('')}</div><div class="nabs-injury-menu-sep"></div><button type="button" class="nabs-menu-reset">Auswahl zurücksetzen</button><button type="button" class="nabs-menu-reset-all">ALLE VERLETZUNGEN ZURÜCKSETZEN</button>`;
    document.body.appendChild(menu);
    menu.querySelectorAll('[data-type]').forEach(b=>b.onclick=()=>{setDetail(region.id,b.dataset.type);onChange(region.id,b.dataset.type);closeMenu();});
    menu.querySelector('.nabs-menu-reset').onclick=()=>{setDetail(region.id,null);onChange(region.id,null);closeMenu();};
    menu.querySelector('.nabs-menu-reset-all').onclick=()=>{window.__NABS_CLEAR_BODYMAP__?.();closeMenu();};
    const r=anchor.getBoundingClientRect(); const mw=Math.min(340,window.innerWidth-20); const mh=Math.min(560,window.innerHeight-20);
    let left=r.left,top=r.bottom+8;
    if(left+mw>window.innerWidth-10)left=window.innerWidth-mw-10;
    if(left<10)left=10;
    if(top+mh>window.innerHeight-10)top=Math.max(10,r.top-mh-8);
    menu.style.left=left+'px';menu.style.top=top+'px';
    setTimeout(()=>{
      const outside=e=>{if(!menu.contains(e.target)){closeMenu();document.removeEventListener('pointerdown',outside)}};
      document.addEventListener('pointerdown',outside);
    },0);
  }

  function makeSvg(container,selected,onSummary){
    const svg=container,ns='http://www.w3.org/2000/svg';
    svg.innerHTML='';
    window.__NABS_CLEAR_BODYMAP__=()=>{selected.clear();const a=window.__NABS_ANSWERS__;if(a){a.verletzung_v51_koerperkarte=[];a.verletzung_v51_koerperdetails={};}svg.querySelectorAll('.nabs-body-region').forEach(e=>e.classList.remove('selected'));onSummary?.();};
    // Große Regionen zuerst, anatomisch feinere Regionen zuletzt.
    regions.forEach(r=>{
      const el=document.createElementNS(ns,'path');
      el.setAttribute('d',r.d);el.setAttribute('class','nabs-body-region');el.setAttribute('tabindex','0');el.setAttribute('role','button');el.setAttribute('aria-label',r.label);el.dataset.region=r.id;
      // Die neue Referenzgrafik hat ein 1536x759-Koordinatensystem. Die bisher
      // gezeichneten Körperregionen stammen aus 1536x1251 und werden deshalb
      // getrennt für Vorder- und Rückseite exakt auf die Referenzkörper gelegt.
      // Vorderseite: x=1.10*x+17.5, y=0.638*y
      // Rückseite:    x=x+330,     y=0.638*y
      if(r.id.startsWith('front_')) el.setAttribute('transform','translate(17.5 0) scale(1.1 0.638)');
      else if(r.id.startsWith('back_')) el.setAttribute('transform','translate(330 0) scale(1 0.638)');
      if(selected.has(r.id))el.classList.add('selected');
      el.addEventListener('pointermove',e=>showTip(r,e));
      el.addEventListener('pointerleave',hideTip);
      const act=e=>{
        e?.preventDefault?.();
        openMenu(r,el,(id,type)=>{
          if(type){selected.add(id);el.classList.add('selected');}
          else {selected.delete(id);el.classList.remove('selected');}
          const a=window.__NABS_ANSWERS__;if(a)a.verletzung_v51_koerperkarte=[...selected];
          onSummary?.();
        });
      };
      // PC: ausschließlich Rechtsklick. Touch: normaler Tap.
      el.addEventListener('contextmenu',act);
      el.addEventListener('pointerup',e=>{if(e.pointerType!=='mouse')act(e);});
      el.addEventListener('click',e=>{if(e.detail===0)act(e);}); // Tastatur
      el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){act(e);}});
      svg.appendChild(el);
    });
  }
  window.NABSBodyMap={regions,injuryTypes,burnMapValue,makeSvg,openMenu};
})();