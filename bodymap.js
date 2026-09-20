/* NABS V68.26 – hochgranulare anatomische Verletzungskarte
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

  // ---------------- EXAKTE KORREKTUR AUF DIE REFERENZGRAFIK 1536x867 ----------------
  // WICHTIG: Die orange Fläche muss auf der TATSÄCHLICHEN anatomischen Struktur
  // der Hintergrundgrafik liegen. Die vom Nutzer rot markierte Stelle ist dabei
  // die Sollposition; alte, nur ungefähr platzierte Flächen werden nicht übernommen.
  const override=(id,d)=>{const r=regions.find(x=>x.id===id); if(r){r.d=d; r.corrected=true;}};

  // Vorderseite – Koordinaten direkt im 1536x867-Pixelraster des Hintergrundbildes.
  // Rechte/links beziehen sich auf die Person (Patientensicht).
  override('front_neck',rect(438,105,44,34,5));
  override('front_clavicle_r',poly([[365,119],[405,108],[452,126],[447,144],[410,139],[376,132]]));
  override('front_clavicle_l',poly([[468,126],[515,108],[555,119],[544,132],[510,139],[473,144]]));

  override('front_chest','M387 137 Q458 121 529 137 Q548 174 544 228 Q535 265 505 278 L410 278 Q380 263 372 228 Q368 174 387 137Z');
  override('front_upperchest_r',poly([[379,143],[457,130],[457,184],[383,188]]));
  override('front_upperchest_l',poly([[461,130],[538,143],[534,188],[461,184]]));
  override('front_midchest_r',poly([[381,188],[457,184],[457,231],[382,226]]));
  override('front_midchest_l',poly([[461,184],[534,188],[538,226],[461,231]]));
  override('front_lowerchest_r',poly([[382,226],[457,231],[454,274],[406,268],[384,250]]));
  override('front_lowerchest_l',poly([[461,231],[538,226],[536,250],[514,268],[464,274]]));
  override('front_sternum',poly([[454,137],[464,137],[464,274],[454,274]]));

  // Schultern: nur die sichtbare Schulterform, nicht bis in den Oberarm hinein.
  override('front_shoulder_r','M359 119 Q374 108 397 115 L421 132 L407 163 Q385 171 364 157 Q351 143 359 119Z');
  override('front_shoulder_l','M523 115 Q546 108 561 119 Q569 143 556 157 Q535 171 513 163 L499 132Z');

  // Oberarme: bewusst breiter und entlang des echten äußeren Körperumrisses.
  override('front_upperarm_r','M375 151 Q391 145 407 158 L414 184 L392 268 Q386 286 372 293 Q357 287 352 270 L358 196 Q357 169 375 151Z');
  override('front_upperarm_l','M513 158 Q529 145 545 151 Q563 169 562 196 L568 270 Q563 287 548 293 Q534 286 528 268 L506 184Z');
  override('front_elbow_r','M353 267 Q372 273 392 267 L390 298 Q375 308 358 298Z');
  override('front_elbow_l','M528 267 Q548 273 567 267 L562 298 Q545 308 530 298Z');
  override('front_forearm_r','M358 295 Q375 304 391 295 L346 374 Q336 391 322 389 Q309 384 309 370 L351 303Z');
  override('front_forearm_l','M529 295 Q545 304 562 295 L569 303 L611 370 Q611 384 598 389 Q584 391 574 374 L529 295Z');

  // Bauch: obere und untere Etage sauber trennen. Der Unterbauch liegt
  // deutlich UNTERHALB des Nabelbereichs – genau wie in der roten Markierung.
  override('front_abdomen','M401 268 Q458 278 517 268 L519 361 Q505 383 458 387 Q412 383 399 361Z');
  override('front_upperabd_r',poly([[402,269],[457,279],[457,319],[402,315]]));
  override('front_upperabd_l',poly([[461,279],[516,269],[516,315],[461,319]]));
  override('front_lowerabd_r',poly([[402,317],[457,320],[457,361],[415,357],[402,347]]));
  override('front_lowerabd_l',poly([[461,320],[516,317],[516,347],[503,357],[461,361]]));
  override('front_umbilicus',ell(459,319,8,8));

  // Becken/Hüfte: die rote Sollposition liegt unter dem Unterbauch und über
  // dem Beginn der Oberschenkel – nicht im oberen Bauchbereich.
  override('front_pelvis','M402 357 Q459 375 516 357 Q527 378 523 410 Q507 431 459 435 Q411 431 395 410 Q391 378 402 357Z');
  override('front_groin_r',poly([[398,361],[457,378],[455,418],[423,413],[401,397]]));
  override('front_groin_l',poly([[461,378],[520,361],[517,397],[495,413],[463,418]]));

  // Beine vorne – entlang des tatsächlichen Umrisses der Referenzfigur.
  override('front_thigh_r','M405 423 Q426 414 451 423 L453 580 Q448 604 431 612 Q412 605 406 582 L401 470Z');
  override('front_thigh_l','M466 423 Q491 414 512 423 L516 470 L511 582 Q505 605 486 612 Q469 604 464 580Z');
  override('front_thigh_upper_r',poly([[405,427],[451,427],[452,504],[404,504]]));
  override('front_thigh_lower_r',poly([[404,506],[452,506],[452,580],[430,608],[408,580]]));
  override('front_thigh_upper_l',poly([[466,427],[512,427],[513,504],[466,504]]));
  override('front_thigh_lower_l',poly([[466,506],[513,506],[511,580],[489,608],[466,580]]));
  override('front_knee_r','M406 578 Q429 589 452 578 L451 616 Q430 627 409 616Z');
  override('front_knee_l','M466 578 Q489 589 512 578 L511 616 Q490 627 468 616Z');
  override('front_lowerleg_r','M409 612 Q430 622 451 612 L449 741 Q442 758 428 758 Q414 758 408 741Z');
  override('front_lowerleg_l','M468 612 Q490 622 511 612 L512 741 Q506 758 492 758 Q478 758 470 741Z');
  override('front_shin_upper_r',poly([[410,616],[451,616],[450,680],[410,680]]));
  override('front_shin_lower_r',poly([[410,682],[450,682],[449,741],[428,755],[411,741]]));
  override('front_shin_upper_l',poly([[469,616],[510,616],[511,680],[470,680]]));
  override('front_shin_lower_l',poly([[470,682],[511,682],[511,741],[493,755],[470,741]]));

  // Beine vorne – EXAKTE SOLLPOSITIONEN AUS DER NEUEN REFERENZ (86682.jpg)
  // Grün = Hüfte links/rechts, Rot = Leiste links/rechts, Schwarz = Intimbereich,
  // Orange = Oberschenkel links/rechts, Zyan = Knie/Kniescheibe,
  // Blau = Unterschenkel links/rechts, Dunkelgrün = Fußsohle links/rechts.
  override('front_pelvis','M399 350 Q458 365 518 350 Q528 370 523 398 Q509 414 487 421 L430 421 Q407 414 393 398 Q388 370 399 350Z');
  override('front_groin_r',poly([[396,397],[457,385],[456,417],[433,422],[408,414]]));
  override('front_groin_l',poly([[459,385],[520,397],[508,414],[483,422],[460,417]]));
  add('front_intimate','Intimbereich',poly([[451,397],[465,397],[468,424],[458,434],[448,424]]),{corrected:true});

  // Oberschenkel – orange, jeweils als komplette Seitenfläche.
  override('front_thigh_r','M397 420 Q425 411 454 420 L454 579 Q449 601 430 611 Q409 604 404 582 L397 470Z');
  override('front_thigh_l','M462 420 Q491 411 519 420 L519 470 L512 582 Q507 604 486 611 Q467 601 462 579Z');
  // Unterteilungen des alten Systems werden unsichtbar gemacht, damit keine
  // zusätzlichen Klickflächen über den beiden orangefarbenen Oberschenkeln liegen.
  ['front_thigh_upper_r','front_thigh_lower_r','front_thigh_upper_l','front_thigh_lower_l'].forEach(id=>{const r=regions.find(x=>x.id===id); if(r) r.hidden=true;});

  // Knie / Kniescheiben – zyan.
  override('front_knee_r','M404 578 Q429 585 454 578 L452 616 Q430 627 409 616Z');
  override('front_knee_l','M462 578 Q489 585 514 578 L512 616 Q490 627 469 616Z');

  // Unterschenkel – blau.
  override('front_lowerleg_r','M408 612 Q430 621 452 612 L450 742 Q443 758 429 759 Q414 758 408 742Z');
  override('front_lowerleg_l','M469 612 Q491 621 513 612 L513 742 Q507 758 493 759 Q478 758 470 742Z');
  ['front_shin_upper_r','front_shin_lower_r','front_shin_upper_l','front_shin_lower_l'].forEach(id=>{const r=regions.find(x=>x.id===id); if(r) r.hidden=true;});

  // Fußsohlen – dunkelgrün. Die Flächen liegen auf den sichtbaren Füßen der
  // Vorderfigur; die bestehende Detail-Fußauswahl bleibt separat erhalten.
  override('front_foot_r','M327 793 Q349 785 377 795 L396 813 Q391 837 365 845 Q338 845 318 831 Q313 815 327 793Z');
  override('front_foot_l','M407 795 Q435 785 457 793 Q471 815 466 831 Q446 845 419 845 Q393 837 388 813Z');
  const ar=regions.find(x=>x.id==='front_ankle_r'); if(ar) ar.hidden=true;
  const al=regions.find(x=>x.id==='front_ankle_l'); if(al) al.hidden=true;

  // Rückseite – gleiche anatomische Logik, direkt auf der rechten Figur.
  override('back_neck',rect(1237,105,44,34,5));
  override('back_cervical',poly([[1243,112],[1275,112],[1278,139],[1240,139]]));
  override('back_upperback','M1194 137 Q1260 120 1326 137 Q1340 175 1337 228 Q1330 267 1305 278 L1215 278 Q1190 263 1183 228 Q1180 175 1194 137Z');
  override('back_scapula_r',poly([[1184,145],[1225,126],[1250,145],[1243,213],[1208,228],[1188,205]]));
  override('back_scapula_l',poly([[1270,145],[1295,126],[1336,145],[1332,205],[1312,228],[1277,213]]));
  override('back_thoracic',poly([[1252,137],[1268,137],[1270,270],[1250,270]]));
  override('back_ribs_r',poly([[1192,205],[1249,197],[1249,271],[1206,263]]));
  override('back_ribs_l',poly([[1271,197],[1328,205],[1314,263],[1271,271]]));
  override('back_lowerback','M1209 267 Q1260 278 1311 267 L1312 358 Q1298 380 1260 383 Q1222 380 1208 358Z');
  override('back_lumbar_r',poly([[1211,269],[1252,280],[1252,357],[1225,365],[1210,350]]));
  override('back_lumbar_l',poly([[1268,280],[1309,269],[1310,350],[1295,365],[1268,357]]));
  override('back_flank_r',poly([[1192,270],[1222,280],[1222,355],[1200,344]]));
  override('back_flank_l',poly([[1298,280],[1328,270],[1320,344],[1298,355]]));
  override('back_sacrum',poly([[1244,350],[1276,350],[1286,390],[1260,420],[1234,390]]));
  override('back_pelvis','M1208 350 Q1260 371 1312 350 Q1323 374 1318 405 Q1301 426 1260 430 Q1219 426 1202 405 Q1197 374 1208 350Z');
  override('back_glute_r',poly([[1204,374],[1253,374],[1253,422],[1225,428],[1206,405]]));
  override('back_glute_l',poly([[1267,374],[1316,374],[1314,405],[1295,428],[1267,422]]));
  override('back_shoulder_r','M1172 119 Q1190 108 1211 115 L1235 132 L1221 163 Q1199 171 1178 157 Q1165 143 1172 119Z');
  override('back_shoulder_l','M1309 115 Q1330 108 1348 119 Q1355 143 1342 157 Q1321 171 1299 163 L1285 132Z');
  override('back_upperarm_r','M1184 151 Q1200 145 1216 158 L1223 184 L1201 268 Q1195 286 1180 293 Q1165 287 1160 270 L1166 196 Q1166 169 1184 151Z');
  override('back_upperarm_l','M1304 158 Q1320 145 1336 151 Q1354 169 1354 196 L1360 270 Q1355 287 1340 293 Q1325 286 1319 268 L1297 184Z');
  override('back_elbow_r','M1161 267 Q1180 273 1201 267 L1199 298 Q1184 308 1167 298Z');
  override('back_elbow_l','M1319 267 Q1340 273 1359 267 L1354 298 Q1337 308 1322 298Z');
  override('back_forearm_r','M1167 295 Q1184 304 1200 295 L1155 374 Q1145 391 1131 389 Q1118 384 1118 370 L1160 303Z');
  override('back_forearm_l','M1322 295 Q1337 304 1354 295 L1361 303 L1403 370 Q1403 384 1390 389 Q1376 391 1366 374 L1322 295Z');

  // ---------------- RÜCKSEITE – SOLLPOSITIONEN AUS REFERENZ 87178.jpg ----------------
  // Die farbig eingezeichneten Flächen der aktuellen Rückseiten-Vorlage werden
  // 1:1 als Klickflächen übernommen. Referenzfarben werden nicht angezeigt.
  const rename=(id,label)=>{const r=regions.find(x=>x.id===id); if(r) r.label=label;};

  // Schädel / Wirbelsäule – Konturen direkt aus der 1536x867-Vorlage.
  override('back_head','M1220 22 L1214 44 L1213 40 L1213 53 L1221 83 L1226 86 L1250 77 L1260 85 L1278 84 L1282 37 L1277 21 L1260 11 L1243 11Z');
  override('back_cervical','M1254 88 L1243 88 L1235 100 L1238 111 L1234 116 L1237 119 L1235 125 L1247 133 L1260 124 L1260 115 L1254 111 L1259 103Z');
  override('back_thoracic','M1258 133 L1249 139 L1236 136 L1239 152 L1235 157 L1239 162 L1235 166 L1238 176 L1234 181 L1238 187 L1233 192 L1237 201 L1233 207 L1237 212 L1233 236 L1237 243 L1233 249 L1237 261 L1232 266 L1236 274 L1231 283 L1235 287 L1228 297 L1238 292 L1264 297 L1258 290 L1262 281 L1257 273 L1261 265 L1257 261Z');
  override('back_lumbar_r','M1237 298 L1227 309 L1234 313 L1226 321 L1234 325 L1227 333 L1234 338 L1231 343 L1226 342 L1228 347 L1235 350 L1264 348 L1267 343 L1262 343 L1260 338 L1266 332 L1259 327 L1265 320 L1259 315 L1265 309 L1253 297Z');
  override('back_sacrum','M1245 352 L1240 353 L1235 361 L1226 363 L1223 370 L1240 391 L1249 392 L1266 378 L1272 368 L1256 353Z');
  // back_flank_r wird hier als Steißbein wiederverwendet.
  override('back_flank_r','M1242 395 L1246 415 L1248 395Z');

  // Schulterblätter – links/rechts aus Sicht des Patienten; Bild links = rechts.
  override('back_scapula_r','M1158 147 L1156 152 L1169 159 L1163 170 L1164 183 L1170 190 L1182 223 L1194 232 L1206 216 L1215 172 L1211 147 L1203 146 L1195 155Z');
  override('back_scapula_l','M1339 150 L1305 156 L1290 146 L1283 148 L1282 190 L1288 205 L1287 212 L1295 227 L1305 229 L1315 217 L1330 183 L1331 170 L1325 160Z');

  // Oberarmknochen / Humerus.
  override('back_upperarm_r','M1161 159 L1149 164 L1147 190 L1127 247 L1115 262 L1130 270 L1135 248 L1161 183 L1159 173 L1164 162Z');
  override('back_upperarm_l','M1332 160 L1336 172 L1332 184 L1359 256 L1360 269 L1378 263 L1351 206 L1346 188 L1344 162 L1338 164 L1337 160Z');

  // Weiße Ellenbogenflächen aus der Vorlage.
  override('back_elbow_r','M1112 267 Q1125 270 1139 268 L1139 286 Q1133 296 1121 297 Q1112 292 1110 282Z');
  override('back_elbow_l','M1361 268 Q1375 270 1388 267 L1390 282 Q1388 292 1379 297 Q1367 296 1361 286Z');

  // Unterarm: Elle (Ulna) – Braun.
  override('back_forearm_r','M1073 331 L1069 330 L1068 336 L1057 346 L1057 352 L1042 362 L1043 369 L1048 367 L1048 370 L1057 360Z');
  override('back_forearm_l','M1385 287 L1399 312 L1419 332 L1418 335 L1422 334 L1423 342 L1440 367 L1448 370 L1450 363 L1434 351 L1435 347 L1429 340 L1423 342 L1427 337 L1413 325 L1410 315 L1404 317 L1407 311 L1403 311 L1390 289Z');

  // Zusätzliche separate Flächen: Speiche (Radius) – Pink.
  add('back_radius_r','Speiche (Radius) rechts', 'M1121 289 L1112 287 L1064 358 L1050 373 L1052 379 L1058 376 L1078 343Z',{corrected:true});
  add('back_radius_l','Speiche (Radius) links', 'M1374 288 L1372 291 L1438 378 L1442 374 L1381 288Z',{corrected:true});

  // Hüftbein (Os coxae) – Gelb. Die alten Gesäßflächen werden dafür verwendet.
  override('back_glute_r','M1190 328 L1181 338 L1185 358 L1196 370 L1198 383 L1210 398 L1212 419 L1219 424 L1230 425 L1241 411 L1239 395 L1220 381 L1218 373 L1222 359 L1237 350 L1228 348 L1211 328Z');
  override('back_glute_l','M1303 328 L1282 329 L1262 349 L1263 355 L1274 361 L1276 375 L1269 385 L1251 395 L1250 411 L1260 424 L1274 424 L1282 417 L1283 400 L1295 386 L1296 374 L1311 345 L1311 337Z');

  rename('back_head','Schädel (Cranium)');
  rename('back_cervical','Halswirbel (HWS 1–6)');
  rename('back_thoracic','Brustwirbel (BWS 1–12)');
  rename('back_lumbar_r','Lendenwirbel (LWS 1–5)');
  rename('back_sacrum','Kreuzbein');
  rename('back_flank_r','Steißbein');
  rename('back_scapula_r','Schulterblatt (Scapula) rechts');
  rename('back_scapula_l','Schulterblatt (Scapula) links');
  rename('back_upperarm_r','Oberarmknochen (Humerus) rechts');
  rename('back_upperarm_l','Oberarmknochen (Humerus) links');
  rename('back_elbow_r','Ellenbogen rechts');
  rename('back_elbow_l','Ellenbogen links');
  rename('back_forearm_r','Elle (Ulna) rechts');
  rename('back_forearm_l','Elle (Ulna) links');
  rename('back_glute_r','Hüftbein (Os coxae) rechts');
  rename('back_glute_l','Hüftbein (Os coxae) links');

  // V68.26: Nur die Beschriftung der rechten/linken Rückseitenbereiche wird getauscht.
  // Die geometrischen Klickflächen bleiben exakt an ihren bisherigen Sollpositionen.
  const BACK_LABEL_SWAP = [
    ['back_scapula_r','back_scapula_l'],
    ['back_upperarm_r','back_upperarm_l'],
    ['back_elbow_r','back_elbow_l'],
    ['back_forearm_r','back_forearm_l'],
    ['back_radius_r','back_radius_l'],
    ['back_glute_r','back_glute_l'],
    ['back_femoral_head_r','back_femoral_head_l'],
    ['back_femoral_neck_r','back_femoral_neck_l'],
    ['back_femur_r','back_femur_l'],
    ['back_tibia_r','back_tibia_l'],
    ['back_fibula_r','back_fibula_l'],
    ['back_talus_r','back_talus_l'],
    ['back_calcaneus_r','back_calcaneus_l']
  ];
  for (const [a,b] of BACK_LABEL_SWAP) {
    const ra=regions.find(x=>x.id===a), rb=regions.find(x=>x.id===b);
    if(ra && rb){ const label=ra.label; ra.label=rb.label; rb.label=label; }
  }

  // V68.27: Auch beim gesamten Unterkörper werden ausschließlich die
  // Beschriftungen links/rechts getauscht. Die Klickflächen/Geometrien
  // bleiben unverändert an den bereits exakt eingemessenen Positionen.
  // Bildseite links erhält damit die bisherige Beschriftung der Bildseite rechts
  // und umgekehrt.
  const LOWER_BODY_LABEL_SWAP = [
    ['front_hip_l','front_hip_r'],
    ['front_groin_l','front_groin_r'],
    ['front_thigh_l','front_thigh_r'],
    ['front_knee_l','front_knee_r'],
    ['front_lowerleg_l','front_lowerleg_r'],
    ['front_foot_l','front_foot_r'],
    ['back_glute_l','back_glute_r'],
    ['back_femoral_head_l','back_femoral_head_r'],
    ['back_femoral_neck_l','back_femoral_neck_r'],
    ['back_femur_l','back_femur_r'],
    ['back_tibia_l','back_tibia_r'],
    ['back_fibula_l','back_fibula_r'],
    ['back_talus_l','back_talus_r'],
    ['back_calcaneus_l','back_calcaneus_r']
  ];
  for (const [a,b] of LOWER_BODY_LABEL_SWAP) {
    const ra=regions.find(x=>x.id===a), rb=regions.find(x=>x.id===b);
    if(ra && rb){ const label=ra.label; ra.label=rb.label; rb.label=label; }
  }

  // V68.27: Die rote Referenzfläche ist der Schenkelhals.
  const femoralNeckR=regions.find(x=>x.id==='back_femoral_neck_r');
  const femoralNeckL=regions.find(x=>x.id==='back_femoral_neck_l');
  if(femoralNeckR) femoralNeckR.label='Schenkelhals rechts';
  if(femoralNeckL) femoralNeckL.label='Schenkelhals links';

  // Alle alten, nicht mehr gewünschten Rückenkörper-Flächen deaktivieren.
  const BACK_OLD_HIDE = new Set([
    'back_occiput','back_neck','back_upperback','back_ribs_r','back_ribs_l',
    'back_lowerback','back_lumbar_l','back_flank_l','back_pelvis',
    'back_shoulder_r','back_shoulder_l'
  ]);
  regions.forEach(r=>{ if(BACK_OLD_HIDE.has(r.id)) r.hidden=true; });

  // ---------------- DETAILBEREICHE / REFERENZBILD 83075 ----------------
  // Die große Körpergrafik wird nur für die großen anatomischen Regionen verwendet.
  // Kopf/Gesicht sowie Hand- und Fußdetails liegen ausschließlich in den dafür
  // vorgesehenen Detailbildern des Referenzbildes 83075.jpg.
  const DETAIL_HIDE = new Set([
    'front_head','front_forehead','front_temple_r','front_temple_l','front_eye_r','front_eye_l',
    'front_nose','front_cheek_r','front_cheek_l','front_ear_r','front_ear_l','front_mouth',
    'front_jaw_r','front_jaw_l','front_chin',
    'front_wrist_r','front_wrist_l','front_palm_r','front_palm_l',
    'front_finger_r_1','front_finger_r_2','front_finger_r_3','front_finger_r_4','front_finger_r_5',
    'front_finger_l_1','front_finger_l_2','front_finger_l_3','front_finger_l_4','front_finger_l_5',
    'detail_ear_r','detail_ear_l','detail_upperjaw_r','detail_upperjaw_l',
    'front_ankle_r','front_ankle_l','front_foot_r','front_foot_l',
    'front_toe_r_1','front_toe_r_2','front_toe_r_3','front_toe_r_4','front_toe_r_5',
    'front_toe_l_1','front_toe_l_2','front_toe_l_3','front_toe_l_4','front_toe_l_5',
    'back_head','back_occiput',
    'back_wrist_r','back_wrist_l','back_palm_r','back_palm_l',
    'back_finger_r_1','back_finger_r_2','back_finger_r_3','back_finger_r_4','back_finger_r_5',
    'back_finger_l_1','back_finger_l_2','back_finger_l_3','back_finger_l_4','back_finger_l_5',
    'back_ankle_r','back_ankle_l','back_foot_r','back_foot_l',
    'back_toe_r_1','back_toe_r_2','back_toe_r_3','back_toe_r_4','back_toe_r_5'
  ]);
  regions.forEach(r=>{ if(DETAIL_HIDE.has(r.id)) r.hidden=true; });

  // Alte 1536x1251-Koordinaten auf die exakt verwendete 1536x867-Referenzgrafik
  // abbilden. Vorder- und Rückseite liegen im neuen Bild an unterschiedlichen X-Positionen.
  // Korrigierte Hauptregionen liegen direkt im 1536x867-System. Noch nicht
  // korrigierte Bein-/Restregionen behalten ihre bewährte Alt-Transformation,
  // damit nicht durch diese Überarbeitung funktionierende Bereiche verrutschen.
  const FRONT_T='matrix(.82 0 0 .67 123 0)';
  const BACK_T='matrix(.82 0 0 .67 490 0)';
  // Die Detailgrafiken (Hand/Fuß/Gesicht) liegen in derselben 1536x867-
  // Referenzgrafik wie der Hintergrund. Die Browser-Darstellung des SVG-
  // Layers war vertikal etwas gestreckt. Dadurch lagen die Auswahlflächen
  // sichtbar unterhalb der tatsächlichen Anatomie. Diese Korrektur
  // komprimiert ausschließlich die Detailflächen vertikal und hebt sie
  // damit auf die tatsächlichen Bildpositionen an. Die Farben der
  // Referenzbilder werden weiterhin nicht dargestellt.
  const DETAIL_FACE_T='matrix(1 0 0 .865 0 10)';
  const DETAIL_HAND_T='matrix(1 0 0 .865 0 -80)';
  const DETAIL_FOOT_T='matrix(1 0 0 .865 0 -150)';
  regions.forEach(r=>{
    if(r.hidden) return;
    if(r.detail){
      if(r.id.startsWith('detail_hand_')) r.transform=DETAIL_HAND_T;
      else if(r.id.startsWith('detail_foot') || r.id.startsWith('detail_toe_') || r.id==='detail_ankle' || r.id==='detail_foot_joint') r.transform=DETAIL_FOOT_T;
      else r.transform=DETAIL_FACE_T;
    }
    else if(r.corrected) r.transform=null;
    else if(r.id.startsWith('front_')) r.transform=FRONT_T;
    else if(r.id.startsWith('back_')) r.transform=BACK_T;
  });

  // Gesicht/Kopf – exakte Sollflächen aus der aktuellen Kopf-Referenz 85516.png.
  // Die farbigen Referenzmarkierungen selbst werden NICHT dargestellt.
  // Alle Koordinaten beziehen sich auf die 1536x867-Körperkarte und werden
  // anschließend ausschließlich durch DETAIL_FACE_T an die SVG-Darstellung angepasst.
  add('detail_scalp','Schädeldecke',poly([[673,62],[673,86],[682,108],[728,85],[768,77],[811,81],[851,95],[860,102],[869,85],[865,60],[830,28],[799,18],[751,11],[731,12],[702,32]]),{burnValue:4.5,detail:true});
  add('detail_forehead','Stirn',poly([[689,111],[694,124],[691,157],[715,150],[738,149],[822,150],[847,157],[845,119],[856,101],[809,83],[760,80],[711,94],[695,103]]),{detail:true});

  // Patientenseite rechts = im Bild links, Patientenseite links = im Bild rechts.
  add('detail_temple_r','Schläfe rechts',poly([[686,112],[678,113],[667,147],[666,168],[675,184],[691,143],[691,124]]),{detail:true});
  add('detail_temple_l','Schläfe links',poly([[858,104],[849,113],[847,133],[849,159],[857,175],[867,140],[867,122],[863,107]]),{detail:true});

  // Ohren – exakt nach der aktuellen Kopf-Referenz.
  // Patientenseite rechts = im Bild links (mintgrün), Patientenseite links = im Bild rechts (weiß).
  add('detail_ear_r','Ohr rechts',poly([[652,169],[643,177],[638,192],[640,210],[648,231],[657,246],[666,241],[671,226],[668,207],[662,187]]),{detail:true});
  add('detail_ear_l','Ohr links',poly([[868,172],[879,180],[887,194],[888,211],[884,229],[875,245],[867,239],[864,224],[866,207],[869,189]]),{detail:true});

  add('detail_eye_r','Auge rechts',poly([[696,184],[702,189],[724,191],[736,189],[742,183],[733,178],[713,177]]),{detail:true});
  add('detail_eye_l','Auge links',poly([[796,183],[799,189],[809,192],[833,190],[840,185],[829,178],[806,178]]),{detail:true});

  add('detail_cheek_r','Jochbein links',poly([[668,212],[671,230],[683,231],[708,244],[722,238],[745,217],[742,207],[725,214],[702,212],[683,201],[673,202]]),{detail:true});
  add('detail_cheek_l','Jochbein rechts',poly([[869,218],[862,196],[854,197],[838,212],[815,215],[805,210],[792,211],[802,230],[835,242],[860,230],[866,231]]),{detail:true});

  add('detail_nose','Nase',poly([[763,159],[756,165],[755,203],[739,244],[745,255],[784,259],[794,249],[795,238],[782,201],[781,166],[776,160]]),{detail:true});

  // Ein gemeinsamer Bereich für den gesamten Oberkiefer.
  add('detail_upperjaw','Oberkiefer',poly([[671,239],[690,243],[716,250],[739,253],[753,258],[768,260],[785,258],[801,253],[820,248],[844,243],[868,236],[870,263],[856,274],[835,282],[814,287],[796,293],[773,296],[751,294],[731,289],[710,283],[691,274],[676,265]]),{detail:true});

  add('detail_mouth','Zähne / Mund',poly([[814,285],[812,275],[794,280],[751,280],[733,276],[724,279],[730,290],[753,304],[772,306],[796,303]]),{detail:true});

  add('detail_jaw_r','Unterkiefer links',poly([[673,264],[673,288],[678,303],[713,339],[733,315],[750,308],[750,304],[727,289],[688,276]]),{detail:true});
  add('detail_jaw_l','Unterkiefer rechts',poly([[865,254],[821,280],[800,302],[799,308],[807,321],[814,324],[824,338],[829,337],[847,318],[862,296],[867,264]]),{detail:true});
  add('detail_chin','Kinn',poly([[712,340],[737,361],[760,367],[792,364],[809,354],[821,341],[812,327],[804,323],[796,304],[776,308],[764,304],[752,306],[734,316]]),{detail:true});


  // ---------------- VORDERKÖRPER – NEUE EXAKTE SOLLFLÄCHEN ----------------
  // Die aktuelle Referenz 86593.jpg wurde direkt als 1536x868-Pixelraster
  // ausgewertet. Die Referenzfarben dienen ausschließlich zur Festlegung der
  // Klickflächen und werden in der Anwendung NICHT angezeigt.
  //
  // Bildseite = Beschriftung des Nutzers: links ist die linke Bildseite,
  // rechts ist die rechte Bildseite.
  add('detail_body_head','Kopf',poly([
    [283,15],[264,22],[256,30],[252,40],[252,61],[256,72],[256,95],
    [260,108],[280,121],[289,122],[303,115],[312,106],[319,41],[309,24],[296,17]
  ]),{corrected:true,burnValue:4.5});

  add('detail_body_neck','Hals',poly([
    [329,155],[314,129],[311,109],[298,120],[288,124],[277,121],[262,110],
    [259,127],[239,153],[256,159],[309,159]
  ]),{corrected:true,burnValue:1});

  // Rot = Speiche links/rechts
  add('detail_radius_l','Speiche links',poly([
    [207,151],[225,154],[235,159],[241,159],[247,163],[272,166],
    [273,163],[272,159],[249,160],[220,149]
  ]),{corrected:true,burnValue:.5});
  add('detail_radius_r','Speiche rechts',poly([
    [366,152],[362,150],[345,151],[324,159],[299,161],[301,167],
    [311,167],[349,154]
  ]),{corrected:true,burnValue:.5});

  // Gelb = Schulter links/rechts
  add('detail_shoulder_l','Schulter links',poly([
    [182,158],[174,170],[200,181],[215,199],[233,161],[224,157],[204,155],[198,151]
  ]),{corrected:true,burnValue:1});
  add('detail_shoulder_r','Schulter rechts',poly([
    [383,155],[371,153],[340,160],[346,167],[358,199],[368,188],
    [383,182],[395,173],[394,165]
  ]),{corrected:true,burnValue:1});

  // Zyan = Oberarm links/rechts
  add('detail_upperarm_l','Oberarm links',poly([
    [170,175],[165,210],[159,220],[148,259],[161,262],[180,272],
    [186,266],[197,245],[201,226],[210,210],[210,202],[200,187]
  ]),{corrected:true,burnValue:2});
  add('detail_upperarm_r','Oberarm rechts',poly([
    [399,177],[386,186],[369,193],[363,201],[363,207],[372,229],
    [376,248],[385,271],[392,279],[421,260],[418,237]
  ]),{corrected:true,burnValue:2});

  // Blau = Ellenbeuge links/rechts
  add('detail_elbow_l','Ellenbeuge links',poly([
    [147,263],[138,279],[153,290],[170,296],[177,277],[159,265]
  ]),{corrected:true,burnValue:.25});
  add('detail_elbow_r','Ellenbeuge rechts',poly([
    [423,264],[395,281],[395,286],[402,298],[420,291],[431,281],[432,276]
  ]),{corrected:true,burnValue:.25});

  // Lila = Unterarm links/rechts
  add('detail_forearm_l','Unterarm links',poly([
    [167,297],[154,293],[136,280],[132,281],[120,295],[75,369],
    [92,382],[95,382],[150,327],[169,302]
  ]),{corrected:true,burnValue:1.5});
  add('detail_forearm_r','Unterarm rechts',poly([
    [434,280],[422,292],[404,300],[404,307],[415,322],[474,383],
    [481,377],[492,373],[493,370],[476,346],[455,305],[443,287]
  ]),{corrected:true,burnValue:1.5});

  // Dunkelgrün = Rippen links/rechts
  add('detail_ribs_l','Rippen links',poly([
    [272,170],[236,163],[223,193],[205,224],[202,243],[218,303],
    [227,304],[233,302],[240,295],[265,258],[281,241],[280,232],
    [275,222],[277,180]
  ]),{corrected:true,burnValue:4.5});
  add('detail_ribs_r','Rippen rechts',poly([
    [333,163],[321,168],[298,173],[298,203],[301,217],[294,241],
    [311,261],[327,292],[337,302],[351,306],[354,304],[358,293],
    [360,274],[367,255],[370,236],[367,222],[361,208],[353,198],[342,167],[338,163]
  ]),{corrected:true,burnValue:4.5});

  // Schwarz = Brustbein
  add('detail_sternum','Brustbein',poly([
    [275,160],[281,160],[289,164],[298,164],[298,244],[290,244],[282,244],[275,244]
  ]),{corrected:true,burnValue:1});

  // Dunkelblau = Oberbauch (Abdomen) links/rechts
  add('detail_upperabd_l','Oberbauch (Abdomen) links',poly([
    [284,246],[281,246],[266,262],[246,293],[236,304],[226,308],[218,308],
    [218,322],[241,318],[283,317]
  ]),{corrected:true,burnValue:3.5});
  add('detail_upperabd_r','Oberbauch (Abdomen) rechts',poly([
    [287,248],[287,295],[290,318],[331,319],[355,323],[352,310],[337,306],
    [324,295],[323,289],[308,263],[295,247],[290,246]
  ]),{corrected:true,burnValue:3.5});

  // Grün = Unterbauch (Abdomen) links/rechts
  add('detail_lowerabd_l','Unterbauch (Abdomen) links',poly([
    [281,323],[239,323],[219,327],[216,337],[218,360],[281,362],[284,353]
  ]),{corrected:true,burnValue:3.5});
  add('detail_lowerabd_r','Unterbauch (Abdomen) rechts',poly([
    [290,323],[292,362],[353,360],[353,329],[335,324]
  ]),{corrected:true,burnValue:3.5});

  // Hand-Detailbild links: keine Hand-/Finger-Hotspots mehr auf dem großen Skelett.
  add('detail_hand_wrist','Handgelenk',poly([[76,244],[105,238],[139,247],[151,269],[141,292],[105,286],[77,274]]),{detail:true,detailSide:true});
  add('detail_hand_palm','Handfläche',poly([[57,274],[87,263],[119,276],[145,296],[140,355],[118,381],[83,370],[57,342]]),{detail:true,burnValue:0.7,detailSide:true});
  const handXs=[
    ['Daumen',1,45,300,75,354],['Zeigefinger',2,69,290,88,389],['Mittelfinger',3,88,285,108,397],
    ['Ringfinger',4,108,287,127,391],['Kleiner Finger',5,128,294,145,374]
  ];
  handXs.forEach(([n,i,x1,y1,x2,y2])=>add(`detail_hand_finger_${i}`,`${n}`,poly([[x1,y1],[x1+15,y1-5],[x2,y2],[x1+6,y2+4]]),{detail:true,detailSide:true}));

  // Fuß-Detailbild links unten.
  add('detail_ankle','Sprunggelenk',poly([[83,590],[112,580],[137,594],[139,625],[118,641],[87,628]]),{detail:true,burnValue:.15,detailSide:true});
  add('detail_foot_joint','Fußgelenk',poly([[50,622],[88,620],[122,633],[154,659],[166,700],[141,720],[96,720],[60,700],[40,665]]),{detail:true,burnValue:.15,detailSide:true});
  add('detail_foot','Fußfläche',poly([[50,622],[88,620],[122,633],[154,659],[166,700],[141,720],[96,720],[60,700],[40,665]]),{detail:true,burnValue:.5,detailSide:true});
  const toeXs=[
    ['Großzehe',1,111,681,150,711],['Lange Zehe',2,93,690,124,724],['Mittlere Zehe',3,77,690,105,726],
    ['Ringzehe',4,62,688,86,720],['Kleine Zehe',5,48,681,69,710]
  ];
  toeXs.forEach(([n,i,x1,y1,x2,y2])=>add(`detail_toe_${i}`,n,poly([[x1,y1],[x1+16,y1-4],[x2,y2],[x1+6,y2+3]]),{detail:true,detailSide:true}));

  // ---------------- ZIELPOSITIONEN AUS DEN NUTZER-MARKIERUNGEN ----------------
  // WICHTIG: Orange = aktuelle Programmfläche, farbige Markierungen (rot/cyan/blau/
  // pink/grün) aus den Referenz-Screenshots = SOLLPOSITION. Diese Korrekturen
  // überschreiben deshalb die bisherigen Näherungsflächen.
  //
  // Vorderseite: Unterarme und Knie
  override('front_forearm_r',poly([[343.4,236.4],[331.3,236.4],[323.5,246.4],[312.5,253.0],[308.1,258.5],[299.2,268.5],[290.4,278.4],[282.7,290.6],[273.9,309.3],[272.7,317.1],[278.3,323.7],[286.0,323.7],[291.5,316.0],[298.1,312.7],[302.6,298.3],[307.0,300.5],[310.3,288.4],[315.8,282.8],[323.5,277.3],[321.3,269.6],[326.9,269.6],[336.8,259.6],[333.5,258.5],[344.5,248.6]]));
  override('front_forearm_l',poly([[558.7,244.2],[557.6,256.3],[567.6,275.1],[583.0,289.5],[586.4,297.2],[599.6,307.1],[608.4,321.5],[619.5,329.2],[629.4,322.6],[619.5,293.9],[566.5,244.2]]));
  override('front_knee_r',poly([[377.7,486.1],[373.2,492.7],[373.2,518.2],[379.9,530.3],[394.2,533.6],[410.8,519.3],[410.8,497.2],[403.0,488.3]]));
  override('front_knee_l',poly([[513.5,495.0],[503.5,495.0],[482.6,508.2],[480.3,523.7],[489.2,536.9],[505.7,536.9],[514.6,530.3],[520.1,512.6],[519.0,501.6]]));

  // Rückseite: obere/untere Wade. Die Zuordnung folgt der Beschriftung im
  // Referenzbild: links = sichtbare linke Körperseite, rechts = sichtbare rechte.
  override('back_calf_l',poly([[1242.3,522.6],[1234.5,524.8],[1223.5,535.8],[1218.0,611.0],[1225.7,618.7],[1237.9,617.6],[1247.8,609.9],[1256.6,585.5],[1256.6,545.8],[1251.1,532.5]]));
  override('back_calf_r',poly([[1346.1,523.7],[1337.2,541.4],[1336.1,556.8],[1340.5,608.7],[1346.1,624.2],[1357.1,624.2],[1367.1,634.2],[1374.8,624.2],[1378.1,581.1],[1368.2,539.1],[1351.6,524.8]]));
  override('back_calf_lower_l',poly([[1232.3,619.8],[1220.2,628.6],[1223.5,689.4],[1227.9,708.2],[1240.1,711.5],[1247.8,702.7],[1251.1,668.4],[1245.6,633.1],[1240.1,623.1]]));
  override('back_calf_lower_r',poly([[1350.5,626.4],[1341.7,630.8],[1333.9,657.4],[1333.9,680.6],[1343.9,707.1],[1350.5,712.6],[1356.0,712.6],[1364.8,704.9],[1370.4,651.8],[1360.4,629.7]]));

  // Hand-/Fuß-Detailbereiche: die alten kleinen Flächen werden an die im
  // Referenzbild rot markierten Strukturen angepasst. Sie bleiben ausschließlich
  // im Detailbild aktiv.
  override('detail_hand_finger_1',poly([[31,300],[48,286],[66,280],[82,294],[73,322],[63,355],[54,392],[43,418],[32,414],[27,398],[31,370]]));
  override('detail_hand_finger_2',poly([[69,291],[84,282],[101,290],[105,324],[103,366],[99,414],[94,468],[82,477],[70,468],[68,430],[69,380]]));
  override('detail_hand_finger_3',poly([[92,286],[108,283],[122,293],[126,337],[126,390],[126,444],[123,484],[112,492],[101,483],[99,441],[99,391],[96,340]]));
  override('detail_hand_finger_4',poly([[113,289],[129,286],[143,296],[149,339],[153,383],[157,430],[153,456],[143,463],[132,452],[128,414],[124,372],[119,332]]));
  override('detail_hand_finger_5',poly([[135,294],[150,287],[163,294],[174,326],[182,365],[188,405],[184,423],[174,429],[164,421],[158,385],[151,346],[143,316]]));

  // Zehen im Fuß-Detailbild. Großzehe ist die breite Zehe rechts im Bild,
  // die 5. Zehe liegt links.
  override('detail_toe_1',poly([[141,655],[154,650],[167,658],[171,674],[165,699],[154,712],[141,709],[136,694]]));
  override('detail_toe_2',poly([[110,677],[122,670],[134,678],[137,698],[131,716],[120,722],[110,715],[106,699]]));
  override('detail_toe_3',poly([[88,686],[100,681],[111,688],[113,706],[107,720],[97,725],[88,719],[84,703]]));
  override('detail_toe_4',poly([[65,685],[77,681],[88,688],[90,704],[84,716],[74,721],[65,716],[60,702]]));
  override('detail_toe_5',poly([[44,679],[56,676],[67,683],[70,697],[65,709],[55,714],[45,709],[40,696]]));

  // ---------------- FUSS: SOLLPOSITIONEN AUS DER NEUEN REFERENZ 85515 ----------------
  // Die Farben der Referenz dienen ausschließlich der Positionskalibrierung und
  // sind in der Anwendung nicht sichtbar. Die Hotspots liegen exakt auf den
  // markierten Bereichen der aktuellen Fuß-Referenzgrafik.
  // Rot = kleine Zehe, Blau = Ringzehe, Lila = mittlere Zehe,
  // Pink = lange Zehe, Grün = Großzehe, Cyan = Sprunggelenk,
  // Gelb = Fußfläche, Schwarz = Fußgelenk.
  override('detail_ankle',poly([[896,599],[884,596],[870,598],[864,602],[858,612],[856,630],[842,660],[837,679],[852,682],[860,687],[871,682],[891,653],[895,641]]));
  override('detail_foot_joint',poly([[910,558],[934,553],[964,556],[982,570],[992,590],[992,622],[988,648],[978,658],[963,664],[940,665],[916,661],[901,653],[895,640],[895,616],[897,589]]));
  override('detail_foot',poly([[793,739],[836,763],[853,753],[867,755],[871,763],[895,754],[919,769],[937,745],[977,762],[988,734],[995,679],[993,664],[988,656],[958,664],[894,654],[870,686],[858,691],[836,681]]));
  override('detail_toe_5',poly([[811,751],[798,748],[773,768],[766,783],[765,796],[767,805],[773,810],[781,811],[787,806],[801,775],[818,759]]));
  override('detail_toe_4',poly([[831,762],[820,760],[802,778],[790,804],[790,812],[795,819],[812,820],[821,796],[831,783],[835,771]]));
  override('detail_toe_3',poly([[864,758],[849,757],[836,772],[816,813],[816,826],[826,829],[841,825],[847,802],[859,785],[871,777],[872,767]]));
  override('detail_toe_2',poly([[904,760],[888,759],[880,762],[872,778],[856,790],[844,814],[845,826],[850,832],[869,833],[884,823],[913,782],[915,772],[907,770]]));
  override('detail_toe_1',poly([[981,768],[945,746],[938,746],[902,801],[906,817],[916,823],[935,824],[955,814],[966,796],[979,783],[983,774]]));

  // ---------------- HAND: SOLLPOSITIONEN AUS DER NEUEN REFERENZ 85514 ----------------
  // Die Farben im Referenzbild dienen NUR als Kalibrierhilfe und werden in der
  // Anwendung niemals angezeigt. Alle Hotspots liegen auf den vom Nutzer
  // markierten anatomischen Bereichen der Hand-Detailgrafik.
  // Lila = Daumen, Rot = Zeigefinger, Blau = Mittelfinger, Pink = Ringfinger,
  // Grün = kleiner Finger, Cyan = Handgelenk, Gelb = Handfläche.
  //
  // WICHTIG: Die Finger-Hotspots bleiben vollständig im jeweiligen Finger und
  // werden nicht mehr über die Nachbarfinger oder die Handfläche gelegt.
  override('detail_hand_wrist',poly([
    [554,505],[574,493],[603,492],[631,498],[653,508],[660,523],
    [652,539],[626,539],[600,534],[575,531],[558,524]
  ]));

  override('detail_hand_palm',poly([
    [541,536],[568,525],[603,529],[635,541],[661,558],[678,582],
    [686,608],[691,638],[686,654],[669,660],[646,656],[622,653],
    [598,656],[572,653],[548,646],[534,634],[528,615],[530,591]
  ]));

  // Daumen – lila Markierung
  override('detail_hand_finger_1',poly([
    [506,592],[520,598],[528,613],[524,632],[519,652],[514,674],
    [508,693],[498,695],[488,688],[486,680],[491,663],[496,642],
    [500,620],[501,606]
  ]));

  // Zeigefinger – rote Markierung
  override('detail_hand_finger_2',poly([
    [538,649],[553,649],[560,661],[562,684],[562,715],[562,750],
    [563,785],[564,804],[559,818],[550,823],[541,819],[535,808],
    [533,781],[532,747],[532,713],[532,682],[533,660]
  ]));

  // Mittelfinger – blaue Markierung
  override('detail_hand_finger_3',poly([
    [577,658],[592,658],[600,668],[602,695],[602,729],[603,764],
    [604,799],[605,817],[599,827],[589,830],[581,824],[577,809],
    [576,779],[575,746],[575,713],[575,681]
  ]));

  // Ringfinger – pinke Markierung
  override('detail_hand_finger_4',poly([
    [616,660],[632,661],[644,669],[650,691],[653,718],[656,748],
    [659,776],[661,798],[657,811],[650,817],[641,813],[636,800],
    [633,775],[630,747],[627,719],[622,694],[617,676]
  ]));

  // Kleiner Finger – grüne Markierung
  override('detail_hand_finger_5',poly([
    [672,643],[684,648],[692,660],[697,680],[703,701],[709,721],
    [714,739],[712,747],[706,752],[698,747],[691,733],[685,716],
    [679,698],[674,679],[668,661]
  ]));

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

  // V68.21: NEUE SOLLPOSITIONEN UNTERKÖRPER AUS REFERENZ 86682.jpg
  // Die Referenzfarben werden nicht dargestellt. Sie dienen ausschließlich
  // als exakte Geometrievorlage. Alle neuen Unterkörperflächen sind
  // korrigiert und liegen dadurch direkt im 1536x867-Koordinatensystem
  // der aktuellen Körperkarte (ohne FRONT_T).
  add('front_hip_l','Becken links',poly([[208,391],[215,353],[281,352],[284,366],[284,390],[281,393],[215,396]]),{corrected:true,burnValue:1.5});
  add('front_hip_r','Becken rechts',poly([[292,395],[289,386],[288,366],[295,353],[343,346],[356,353],[362,374],[361,385],[345,390]]),{corrected:true,burnValue:1.5});

  // Rot = Leiste links/rechts
  override('front_groin_l',poly([[206,419],[210,400],[217,403],[275,407],[280,399],[275,410],[243,410]]));
  override('front_groin_r',poly([[293,400],[316,402],[322,399],[348,396],[361,391],[365,406],[341,413],[328,408]]));

  // Schwarz = Intimbereich
  override('front_intimate',poly([[278,403],[295,403],[295,446],[287,449],[278,446]]));

  // Orange = Oberschenkel links/rechts
  override('front_thigh_l',poly([[274,430],[281,409],[281,446],[281,462],[246,590],[206,588],[202,581],[206,562],[198,492],[202,428],[207,422]]));
  override('front_thigh_r',poly([[296,409],[339,415],[366,411],[373,486],[365,551],[369,577],[365,588],[349,587],[329,593],[324,589],[317,566],[316,544],[299,494],[290,451]]));

  // Zyan = Kniescheibe/Knie links/rechts
  override('front_knee_l',poly([[203,597],[205,605],[217,612],[232,611],[238,605],[237,597],[231,593]]));
  override('front_knee_r',poly([[359,596],[354,593],[333,599],[330,606],[334,612],[351,611],[359,604]]));

  // Blau = Unterschenkel links/rechts
  override('front_lowerleg_l',poly([[200,606],[194,611],[185,649],[201,762],[196,791],[200,797],[215,794],[231,796],[235,790],[231,745],[248,674],[245,616],[239,611],[214,614]]));
  override('front_lowerleg_r',poly([[371,609],[344,616],[331,614],[325,629],[324,686],[339,756],[333,782],[338,791],[365,790],[372,785],[366,761],[382,690],[383,663],[378,624]]));

  // Dunkelgrün = Fußsohle links/rechts
  override('front_foot_l',poly([[237,810],[231,803],[219,806],[209,805],[206,801],[202,805],[194,805],[172,834],[178,840],[190,843],[213,843],[234,824]]));
  override('front_foot_r',poly([[335,807],[334,821],[354,845],[386,844],[401,836],[397,824],[364,795],[338,803]]));

  // Alle neu aufgebauten Unterkörperflächen müssen im Bildkoordinatensystem
  // bleiben. Dadurch wird die alte Front-Transformation nicht mehr angewendet.
  ['front_groin_l','front_groin_r','front_intimate','front_thigh_l','front_thigh_r',
   'front_knee_l','front_knee_r','front_lowerleg_l','front_lowerleg_r',
   'front_foot_l','front_foot_r'].forEach(id=>{
    const r=regions.find(x=>x.id===id);
    if(r){ r.corrected=true; r.transform=null; }
  });
  const oldPelvis=regions.find(x=>x.id==='front_pelvis');
  if(oldPelvis) oldPelvis.hidden=true;


  // V68.24: RÜCKSEITE UNTERE EXTREMITÄT – exakt nach Referenz 87245.jpg.
  // Die farbigen Markierungen der Referenz werden NICHT dargestellt.
  // Bildkoordinaten direkt im 1536x867-Raster; keine alte BACK_T-Transformation.
  // Bildseite links = anatomisch rechts, Bildseite rechts = anatomisch links.
  const backBoneRegion=(id,label,d)=>{
    const r=regions.find(x=>x.id===id);
    if(r){ r.hidden=true; }
    add(id,label,d,{corrected:true});
  };

  // Alte grobe Beinflächen vollständig deaktivieren.
  [
    'back_thigh_r','back_thigh_l','back_ham_upper_r','back_ham_upper_l',
    'back_ham_lower_r','back_ham_lower_l','back_knee_r','back_knee_l',
    'back_lowerleg_r','back_lowerleg_l','back_calf_upper_r','back_calf_upper_l',
    'back_calf_lower_r','back_calf_lower_l','back_ankle_r','back_ankle_l',
    'back_heel_r','back_heel_l','back_foot_r','back_foot_l',
    'back_toe_r_1','back_toe_r_2','back_toe_r_3','back_toe_r_4','back_toe_r_5',
    'back_toe_l_1','back_toe_l_2','back_toe_l_3','back_toe_l_4','back_toe_l_5'
  ].forEach(id=>{ const r=regions.find(x=>x.id===id); if(r) r.hidden=true; });

  // Rosa = Oberschenkelkopf links/rechts.
  add('back_femoral_head_r','Oberschenkelkopf rechts',
      poly([[1197,387],[1195,392],[1197,392],[1200,395],[1203,401],[1207,401],
            [1208,399],[1210,400],[1210,398],[1204,392],[1206,391],[1203,386]]),
      {corrected:true});
  add('back_femoral_head_l','Oberschenkelkopf links',
      poly([[1298,388],[1294,387],[1291,389],[1291,392],[1286,397],[1286,400],
            [1288,401],[1287,403],[1288,402],[1289,403],[1293,402],[1300,394],
            [1299,393],[1301,392]]),
      {corrected:true});

  // Rot = Schenkelbein (proximaler Schenkelhalsbereich) links/rechts.
  add('back_femoral_neck_r','Schenkelbein rechts',
      poly([[1188,397],[1189,402],[1193,404],[1200,411],[1201,410],
            [1200,408],[1200,400],[1196,395],[1193,395]]),
      {corrected:true});
  add('back_femoral_neck_l','Schenkelbein links',
      poly([[1307,397],[1306,396],[1301,396],[1294,405],[1293,410],
            [1300,410],[1305,408],[1307,406]]),
      {corrected:true});

  // Zyan = Oberschenkel (Femur) links/rechts.
  add('back_femur_r','Oberschenkel (Femur) rechts',
      poly([[1181,416],[1178,550],[1167,584],[1202,593],[1195,425]]),
      {corrected:true});
  add('back_femur_l','Oberschenkel (Femur) links',
      poly([[1315,416],[1297,423],[1292,595],[1326,584],[1314,544]]),
      {corrected:true});

  // Lila = Schienbein (Tibia) links/rechts.
  add('back_tibia_r','Schienbein (Tibia) rechts',
      poly([[1172,596],[1165,601],[1176,660],[1170,788],[1189,789],
            [1184,668],[1201,601]]),
      {corrected:true});
  add('back_tibia_l','Schienbein (Tibia) links',
      poly([[1307,595],[1292,603],[1309,681],[1301,785],[1321,790],
            [1317,650],[1330,602]]),
      {corrected:true});

  // Blau = Wadenbein (Fibula) links/rechts.
  add('back_fibula_r','Wadenbein (Fibula) rechts',
      poly([[1163,612],[1159,677],[1168,786],[1171,785],[1168,677]]),
      {corrected:true});
  add('back_fibula_l','Wadenbein (Fibula) links',
      poly([[1331,612],[1324,773],[1328,782],[1331,773],[1335,650],[1334,612]]),
      {corrected:true});

  // Pink = Sprungbein (Talus) links/rechts.
  add('back_talus_r','Sprungbein (Talus) rechts',
      poly([[1169,794],[1168,800],[1177,799],[1185,805],[1188,805],
            [1190,802],[1188,791],[1178,790],[1171,792]]),
      {corrected:true});
  add('back_talus_l','Sprungbein (Talus) links',
      poly([[1322,795],[1316,789],[1310,788],[1304,790],[1302,793],
            [1302,805],[1305,805],[1312,799],[1321,800]]),
      {corrected:true});

  // Braun = Fersenbein (Calcaneus) links/rechts.
  add('back_calcaneus_r','Fersenbein (Calcaneus) rechts',
      poly([[1163,805],[1155,815],[1156,821],[1168,825],[1174,835],
            [1186,835],[1190,831],[1190,824],[1184,810],[1177,804]]),
      {corrected:true});
  add('back_calcaneus_l','Fersenbein (Calcaneus) links',
      poly([[1327,804],[1313,804],[1305,810],[1302,831],[1306,836],
            [1310,837],[1317,834],[1323,826],[1333,821],[1335,814]]),
      {corrected:true});

  // Neue Sollflächen bleiben unverändert im Bildkoordinatensystem.
  [
    'back_femoral_head_r','back_femoral_head_l','back_femoral_neck_r','back_femoral_neck_l',
    'back_femur_r','back_femur_l','back_tibia_r','back_tibia_l',
    'back_fibula_r','back_fibula_l','back_talus_r','back_talus_l',
    'back_calcaneus_r','back_calcaneus_l'
  ].forEach(id=>{
    const r=regions.find(x=>x.id===id);
    if(r){ r.corrected=true; r.transform=null; }
  });

  // V68.15: Auf der Körperkarte bleiben ausschließlich die aktuell
  // freigegebenen Detailbereiche sichtbar. Die alten Flächen auf Vorder-
  // und Rückseite sowie alte Kopf-/Gesichtsflächen werden nicht mehr
  // als Klickflächen erzeugt. Hand, Fuß und der neue Kopf bleiben erhalten.
  const KEEP_DETAIL_IDS=new Set([
    'detail_scalp','detail_forehead','detail_temple_r','detail_temple_l',
    'detail_eye_r','detail_eye_l','detail_cheek_r','detail_cheek_l',
    'detail_ear_r','detail_ear_l',
    'detail_nose','detail_upperjaw','detail_mouth','detail_jaw_r',
    'detail_jaw_l','detail_chin',
    'detail_body_head','detail_body_neck','detail_radius_l','detail_radius_r',
    'detail_shoulder_l','detail_shoulder_r','detail_upperarm_l','detail_upperarm_r',
    'detail_elbow_l','detail_elbow_r','detail_forearm_l','detail_forearm_r',
    'detail_ribs_l','detail_ribs_r','detail_sternum',
    'detail_upperabd_l','detail_upperabd_r','detail_lowerabd_l','detail_lowerabd_r',
    // V68.24: Rückseite Beine – neue Knochen-Sollflächen aus 87245.jpg.
    'back_femoral_head_r','back_femoral_head_l','back_femoral_neck_r','back_femoral_neck_l',
    'back_femur_r','back_femur_l','back_tibia_r','back_tibia_l',
    'back_fibula_r','back_fibula_l','back_talus_r','back_talus_l',
    'back_calcaneus_r','back_calcaneus_l',
    // V68.23: Rückseiten-Sollflächen aus 87178.jpg ausdrücklich aktiv halten.
    // In V68.22 wurden sie durch den abschließenden Filter versehentlich entfernt.
    'back_head','back_cervical','back_thoracic','back_lumbar_r','back_sacrum','back_flank_r',
    'back_scapula_r','back_scapula_l','back_upperarm_r','back_upperarm_l',
    'back_elbow_r','back_elbow_l','back_forearm_r','back_forearm_l',
    'back_radius_r','back_radius_l','back_glute_r','back_glute_l',
    // V68.21: Unterkörper vorne mit den neuen Sollpositionen aus 86682.jpg aktivieren.
    // Diese Bereiche sind die neuen, exakt positionierten Sollflächen aus 86682.jpg.
    'front_hip_l','front_hip_r','front_groin_r','front_groin_l','front_intimate',
    'front_thigh_r','front_thigh_l','front_knee_r','front_knee_l',
    'front_lowerleg_r','front_lowerleg_l','front_foot_r','front_foot_l',
    'detail_hand_wrist','detail_hand_palm',
    'detail_hand_finger_1','detail_hand_finger_2','detail_hand_finger_3',
    'detail_hand_finger_4','detail_hand_finger_5',
    'detail_ankle','detail_foot_joint','detail_foot',
    'detail_toe_1','detail_toe_2','detail_toe_3','detail_toe_4','detail_toe_5'
  ]);
  for(let i=regions.length-1;i>=0;i--){
    if(!KEEP_DETAIL_IDS.has(regions[i].id)) regions.splice(i,1);
  }

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
    const sideOptions=region.detailSide?`<div class="nabs-injury-menu-sub">Seite auswählen</div><div class="nabs-injury-menu-options side-options"><button type="button" data-side="rechts">Rechts</button><button type="button" data-side="links">Links</button></div><div class="nabs-injury-menu-sep"></div>`:'';
    menu.innerHTML=`<div class="nabs-injury-menu-title">📍 ${esc(region.label)}</div>${sideOptions}<div class="nabs-injury-menu-sub">Verletzungsart auswählen</div><div class="nabs-injury-menu-options">${injuryTypes.map(t=>`<button type="button" data-type="${esc(t)}">${esc(t)}</button>`).join('')}</div><div class="nabs-injury-menu-sep"></div><button type="button" class="nabs-menu-reset">Auswahl zurücksetzen</button><button type="button" class="nabs-menu-reset-all">ALLE VERLETZUNGEN ZURÜCKSETZEN</button>`;
    document.body.appendChild(menu);
    let selectedSide='';
    menu.querySelectorAll('[data-side]').forEach(b=>b.onclick=()=>{selectedSide=b.dataset.side;menu.querySelectorAll('[data-side]').forEach(x=>x.classList.toggle('active',x===b));});
    menu.querySelectorAll('[data-type]').forEach(b=>b.onclick=()=>{const value=selectedSide?`${b.dataset.type} (${selectedSide})`:b.dataset.type;setDetail(region.id,value);onChange(region.id,value);closeMenu();});
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
      if(r.hidden) return;
      const el=document.createElementNS(ns,'path');
      el.setAttribute('d',r.d); if(r.transform) el.setAttribute('transform',r.transform); el.setAttribute('class','nabs-body-region');el.setAttribute('tabindex','0');el.setAttribute('role','button');el.setAttribute('aria-label',r.label);el.dataset.region=r.id;
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