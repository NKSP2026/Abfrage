import { EHSI_SECTIONS } from './ehsi-data.js?v=20260920v4';
import { authState, readPublic, push, write, uploadStorage, deleteStorage } from './firebase-rest.js?v=20260920v51';

const $ = id => document.getElementById(id);
const esc = v => String(v ?? '').replace(/[&<>"']/g, m => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;'
}[m]));

let activeSection = null;
let customSources = {};

function isAdmin(){ return !!authState().admin; }

function uniqueLinks(section){
  const seen = new Set();
  const links = [];
  section.items.forEach(item => {
    (item.links || []).forEach(link => {
      const key = String(link[1] || link[0] || '');
      if (!key || seen.has(key)) return;
      seen.add(key);
      links.push({name:String(link[0] || ''), url:String(link[1] || ''), custom:false});
    });
  });
  (customSources[section.id] || []).forEach(item => {
    const key = String(item.url || item.fileUrl || item.title || '');
    if (!key || seen.has(key)) return;
    seen.add(key);
    links.push({
      name:String(item.title || 'Quelle / Dokument'),
      url:String(item.url || item.fileUrl || ''),
      custom:true,
      id:item.id,
      fileName:item.fileName || '',
      sourceType:item.sourceType || (item.fileUrl ? 'file' : 'url'),
      storagePath:item.storagePath || ''
    });
  });
  return links;
}

async function loadCustomSources(){
  try{
    const data = await readPublic('ehsi_sources');
    customSources = {};
    Object.entries(data || {}).forEach(([id, item]) => {
      if (!item?.sectionId) return;
      if (!customSources[item.sectionId]) customSources[item.sectionId] = [];
      customSources[item.sectionId].push({...item, id});
    });
  }catch(e){
    console.warn('EHSI Zusatzquellen konnten nicht geladen werden:', e);
    customSources = {};
  }
}

function renderButtons(){
  const root = $('ehsiRoot');
  root.innerHTML = `
    <div class="ehsi-category-buttons" aria-label="EHSI-Bereiche">
      ${EHSI_SECTIONS.map(section => `
        <button type="button" class="ehsi-category-btn" data-ehsi="${esc(section.id)}">
          <span class="ehsi-category-icon">${section.icon}</span>
          <span>${esc(section.title)}</span>
        </button>
      `).join('')}
    </div>
    ${isAdmin() ? `
      <div class="ehsi-admin-tools">
        <div>
          <strong>⚙ Quellenverwaltung</strong>
          <span>Eigene Quellen und Dokumente für die EHSI-Bereiche pflegen.</span>
        </div>
        <button type="button" class="button secondary ehsi-manage-btn" id="ehsiManageSources">＋ Quelle / Dokument</button>
      </div>
    ` : ''}
    <div id="ehsiModal" class="ehsi-modal" hidden aria-hidden="true">
      <div class="ehsi-modal-backdrop" data-ehsi-close></div>
      <section class="ehsi-modal-card" role="dialog" aria-modal="true" aria-labelledby="ehsiModalTitle">
        <div id="ehsiModalContent"></div>
      </section>
    </div>
    <div id="ehsiSourceManager" class="ehsi-modal" hidden aria-hidden="true">
      <div class="ehsi-modal-backdrop" data-source-manager-close></div>
      <section class="ehsi-modal-card ehsi-manager-card" role="dialog" aria-modal="true" aria-labelledby="ehsiManagerTitle">
        <div id="ehsiSourceManagerContent"></div>
      </section>
    </div>
  `;

  root.querySelectorAll('[data-ehsi]').forEach(btn => btn.addEventListener('click', () => openSection(btn.dataset.ehsi)));
  root.querySelectorAll('[data-ehsi-close]').forEach(el => el.addEventListener('click', closeSection));
  root.querySelectorAll('[data-source-manager-close]').forEach(el => el.addEventListener('click', closeSourceManager));
  $('ehsiManageSources')?.addEventListener('click', openSourceManager);
}

function sourceIcon(source){
  return source.sourceType === 'file' ? '📎' : '🔗';
}

function renderSources(section){
  const links = uniqueLinks(section);
  if (!links.length) return `<div class="ehsi-empty">Für diesen Bereich sind aktuell keine externen Quellen hinterlegt.</div>`;
  return `
    <div class="ehsi-source-grid">
      ${links.map(link => `
        <div class="ehsi-source-card-wrap">
          <a class="ehsi-source-card" href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">
            <span class="ehsi-source-icon">${sourceIcon(link)}</span>
            <span class="ehsi-source-name">${esc(link.name)}${link.fileName ? `<small>${esc(link.fileName)}</small>` : ''}</span>
            <span class="ehsi-source-open">↗</span>
          </a>
          ${link.custom && isAdmin() ? `<button type="button" class="ehsi-source-delete" title="Quelle/Dokument löschen" data-delete-source="${esc(link.id)}">✕</button>` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

function renderKnowledge(section){
  return section.items.map(item => `
    <article class="ehsi-card">
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.text)}</p>
      ${item.table ? `
        <div class="ehsi-table-wrap"><table class="ehsi-table"><tbody>
          ${item.table.map(row => `<tr><th>${esc(row[0])}</th><td>${esc(row[1])}</td></tr>`).join('')}
        </tbody></table></div>
      ` : ''}
      ${item.internal ? `<div class="ehsi-detail">ℹ️ ${esc(item.internal)}</div>` : ''}
    </article>
  `).join('');
}

function openSection(id){
  const section = EHSI_SECTIONS.find(s => s.id === id);
  if (!section) return;
  activeSection = section.id;
  const modal = $('ehsiModal');
  const content = $('ehsiModalContent');
  if (!modal || !content) return;
  const links = uniqueLinks(section);
  content.innerHTML = `
    <div class="ehsi-modal-head">
      <div>
        <div class="ils-kicker">EHSI · BEREICH</div>
        <h2 id="ehsiModalTitle">${section.icon} ${esc(section.title)}</h2>
        <p>${section.items.length} Einträge · Quellen und Fachinformationen dieses Bereichs</p>
      </div>
      <button type="button" class="ehsi-modal-close" data-ehsi-close aria-label="Fenster schließen">✕</button>
    </div>
    <section class="ehsi-source-panel">
      <div class="ehsi-panel-title">
        <div><h3>📚 Quellen & Dokumente</h3><p>Offizielle Quellen und zusätzlich durch den Administrator hinterlegte Dokumente.</p></div>
        <span class="ehsi-count">${links.length}</span>
      </div>
      ${renderSources(section)}
    </section>
    <section class="ehsi-knowledge-panel">
      <div class="ehsi-panel-title"><div><h3>🧭 Fachwissen & Einsatzhilfe</h3><p>Die praktischen Übersichten und Hinweise des gewählten EHSI-Bereichs.</p></div></div>
      <div class="ehsi-grid">${renderKnowledge(section)}</div>
    </section>
    <div class="ehsi-modal-footer">
      <span>Hinweis: Für die konkrete Alarmierung und Einsatzführung gelten die jeweils aktuellen örtlichen Vorgaben.</span>
      <button type="button" class="button secondary" data-ehsi-close>‹ Bereich schließen</button>
    </div>
  `;
  modal.hidden = false;
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('ehsi-modal-open');
  content.querySelectorAll('[data-ehsi-close]').forEach(el => el.addEventListener('click', closeSection));
  content.querySelectorAll('[data-delete-source]').forEach(el => el.addEventListener('click', () => deleteSource(el.dataset.deleteSource, section.id)));
  content.querySelector('.ehsi-modal-close')?.focus();
}

function closeSection(){
  const modal = $('ehsiModal');
  if (!modal) return;
  activeSection = null;
  modal.hidden = true;
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('ehsi-modal-open');
}

function closeSourceManager(){
  const modal = $('ehsiSourceManager');
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('ehsi-modal-open');
}

function openSourceManager(){
  if (!isAdmin()) return;
  const modal = $('ehsiSourceManager');
  const content = $('ehsiSourceManagerContent');
  if (!modal || !content) return;
  content.innerHTML = `
    <div class="ehsi-modal-head">
      <div><div class="ils-kicker">EHSI · ADMINISTRATION</div><h2 id="ehsiManagerTitle">⚙ Quelle / Dokument hinzufügen</h2><p>Die Einträge werden dem ausgewählten EHSI-Bereich hinzugefügt.</p></div>
      <button type="button" class="ehsi-modal-close" id="ehsiManagerClose">✕</button>
    </div>
    <form id="ehsiSourceForm" class="ehsi-source-form">
      <label>Bereich
        <select id="ehsiSourceSection" required>
          <option value="">Bitte auswählen …</option>
          ${EHSI_SECTIONS.map(s => `<option value="${esc(s.id)}">${s.icon} ${esc(s.title)}</option>`).join('')}
        </select>
      </label>
      <label>Bezeichnung der Quelle / des Dokuments
        <input id="ehsiSourceTitle" type="text" maxlength="160" placeholder="z. B. Dienstanweisung Rettungsdienst 2026" required>
      </label>
      <label>Webadresse der Quelle <span class="ehsi-optional">(optional, wenn Datei hochgeladen wird)</span>
        <input id="ehsiSourceUrl" type="url" maxlength="1000" placeholder="https://…">
      </label>
      <label>Dokument hochladen <span class="ehsi-optional">(optional, PDF/Office/Bild/Text, max. 20 MB)</span>
        <input id="ehsiSourceFile" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.png,.jpg,.jpeg">
      </label>
      <div class="ehsi-upload-hint">Du kannst entweder eine Webadresse eintragen, eine Datei hochladen oder beides. Bei beidem wird das hochgeladene Dokument als Hauptlink verwendet.</div>
      <div id="ehsiSourceFormStatus" class="ehsi-form-status" role="status"></div>
      <div class="ehsi-form-actions">
        <button type="button" class="button secondary" id="ehsiSourceCancel">Abbruch</button>
        <button type="submit" class="button" id="ehsiSourceSave">💾 Speichern</button>
      </div>
    </form>
  `;
  modal.hidden = false;
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('ehsi-modal-open');
  $('ehsiManagerClose').onclick = closeSourceManager;
  $('ehsiSourceCancel').onclick = closeSourceManager;
  $('ehsiSourceForm').addEventListener('submit', saveSource);
  $('ehsiSourceSection').focus();
}

async function saveSource(event){
  event.preventDefault();
  if (!isAdmin()) return;
  const sectionId = $('ehsiSourceSection').value;
  const title = $('ehsiSourceTitle').value.trim();
  const url = $('ehsiSourceUrl').value.trim();
  const file = $('ehsiSourceFile').files?.[0] || null;
  const status = $('ehsiSourceFormStatus');
  const saveBtn = $('ehsiSourceSave');
  if (!sectionId || !title || (!url && !file)){
    status.textContent = 'Bitte Bereich, Bezeichnung und entweder Webadresse oder Datei angeben.';
    status.className = 'ehsi-form-status error';
    return;
  }
  if (file && file.size > 20 * 1024 * 1024){
    status.textContent = 'Die Datei ist größer als 20 MB.';
    status.className = 'ehsi-form-status error';
    return;
  }
  saveBtn.disabled = true;
  status.textContent = 'Speichere …';
  status.className = 'ehsi-form-status';
  let storagePath = '';
  try{
    let fileUrl = '';
    let sourceType = 'url';
    if (file){
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]+/g,'_').slice(-140);
      storagePath = `ehsi_sources/${sectionId}/${Date.now()}_${safeName}`;
      status.textContent = 'Dokument wird hochgeladen …';
      fileUrl = await uploadStorage(file, storagePath);
      sourceType = 'file';
    }
    status.textContent = 'Eintrag wird gespeichert …';
    const payload = {
      sectionId,
      title,
      url: url || '',
      fileUrl: fileUrl || '',
      fileName: file?.name || '',
      storagePath,
      sourceType,
      createdAt: new Date().toISOString(),
      createdBy: authState().uid
    };
    await push('ehsi_sources', payload);
    await loadCustomSources();
    status.textContent = 'Gespeichert.';
    status.className = 'ehsi-form-status success';
    setTimeout(() => closeSourceManager(), 500);
    if (activeSection) openSection(activeSection);
  }catch(e){
    if (storagePath){ try{ await deleteStorage(storagePath); }catch{} }
    status.textContent = `Fehler: ${e.message || e}`;
    status.className = 'ehsi-form-status error';
    saveBtn.disabled = false;
  }
}

async function deleteSource(id, sectionId){
  if (!isAdmin()) return;
  const item = (customSources[sectionId] || []).find(x => x.id === id);
  if (!item) return;
  if (!confirm(`Quelle/Dokument „${item.title || 'Eintrag'}“ wirklich löschen?`)) return;
  try{
    await write(`ehsi_sources/${encodeURIComponent(id)}`, null);
    if (item.storagePath) await deleteStorage(item.storagePath).catch(() => {});
    await loadCustomSources();
    openSection(sectionId);
  }catch(e){
    alert(`Löschen nicht möglich: ${e.message || e}`);
  }
}

renderButtons();
loadCustomSources().then(() => { if (activeSection) openSection(activeSection); });

document.addEventListener('keydown', event => {
  if (event.key === 'Escape'){
    if (activeSection) closeSection();
    else closeSourceManager();
  }
});
