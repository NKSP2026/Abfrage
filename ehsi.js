import { EHSI_SECTIONS } from './ehsi-data.js?v=20260920v2';
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
let activeSection=EHSI_SECTIONS[0]?.id||'';
function render(){
  const root=$('ehsiRoot');
  root.innerHTML=`<div class="ehsi-category-buttons">${EHSI_SECTIONS.map((s,i)=>`<button type="button" class="ehsi-category-btn ${s.id===activeSection?'active':''}" data-ehsi="${esc(s.id)}">${s.icon} <span>${esc(s.title)}</span></button>`).join('')}</div>`+EHSI_SECTIONS.map(section=>`<section class="ehsi-section ${section.id===activeSection?'active':''}" data-section="${esc(section.id)}"><div class="ehsi-section-head"><h2>${section.icon} ${esc(section.title)}</h2><span>${section.items.length} Einträge</span></div><div class="ehsi-grid">${section.items.map(item=>`<article class="ehsi-card"><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p>${item.table?`<div class="ehsi-table-wrap"><table class="ehsi-table"><tbody>${item.table.map(r=>`<tr><th>${esc(r[0])}</th><td>${esc(r[1])}</td></tr>`).join('')}</tbody></table></div>`:''}${item.internal?`<div class="ehsi-detail">ℹ️ ${esc(item.internal)}</div>`:''}${item.links?.length?`<div class="ehsi-source"><b>📄 Quellen / Dokumente:</b> ${item.links.map(l=>`<a href="${esc(l[1])}" target="_blank" rel="noopener">${esc(l[0])}</a>`).join(' · ')}</div>`:''}</article>`).join('')}</div></section>`).join('');
  root.querySelectorAll('[data-ehsi]').forEach(btn=>btn.addEventListener('click',()=>{activeSection=btn.dataset.ehsi;render();}));
}
render();
