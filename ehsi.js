import { EHSI_SECTIONS } from './ehsi-data.js?v=20260920v3';

const $ = id => document.getElementById(id);
const esc = v => String(v ?? '').replace(/[&<>"']/g, m => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;'
}[m]));

let activeSection = null;

function uniqueLinks(section) {
  const seen = new Set();
  const links = [];
  section.items.forEach(item => {
    (item.links || []).forEach(link => {
      const key = String(link[1] || link[0] || '');
      if (!key || seen.has(key)) return;
      seen.add(key);
      links.push(link);
    });
  });
  return links;
}

function renderButtons() {
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
    <div id="ehsiModal" class="ehsi-modal" hidden aria-hidden="true">
      <div class="ehsi-modal-backdrop" data-ehsi-close></div>
      <section class="ehsi-modal-card" role="dialog" aria-modal="true" aria-labelledby="ehsiModalTitle">
        <div id="ehsiModalContent"></div>
      </section>
    </div>
  `;

  root.querySelectorAll('[data-ehsi]').forEach(btn => {
    btn.addEventListener('click', () => openSection(btn.dataset.ehsi));
  });
  root.querySelectorAll('[data-ehsi-close]').forEach(el => {
    el.addEventListener('click', closeSection);
  });
}

function renderSources(section) {
  const links = uniqueLinks(section);
  if (!links.length) {
    return `<div class="ehsi-empty">Für diesen Bereich sind aktuell keine externen Quellen hinterlegt.</div>`;
  }

  return `
    <div class="ehsi-source-grid">
      ${links.map(link => `
        <a class="ehsi-source-card" href="${esc(link[1])}" target="_blank" rel="noopener noreferrer">
          <span class="ehsi-source-icon">📄</span>
          <span class="ehsi-source-name">${esc(link[0])}</span>
          <span class="ehsi-source-open">↗</span>
        </a>
      `).join('')}
    </div>
  `;
}

function renderKnowledge(section) {
  return section.items.map(item => `
    <article class="ehsi-card">
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.text)}</p>
      ${item.table ? `
        <div class="ehsi-table-wrap">
          <table class="ehsi-table"><tbody>
            ${item.table.map(row => `<tr><th>${esc(row[0])}</th><td>${esc(row[1])}</td></tr>`).join('')}
          </tbody></table>
        </div>
      ` : ''}
      ${item.internal ? `<div class="ehsi-detail">ℹ️ ${esc(item.internal)}</div>` : ''}
    </article>
  `).join('');
}

function openSection(id) {
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
        <div>
          <h3>📚 Quellen & Dokumente</h3>
          <p>Direkte Links zu den hinterlegten Fach-, Behörden- und Rechtsquellen.</p>
        </div>
        <span class="ehsi-count">${links.length}</span>
      </div>
      ${renderSources(section)}
    </section>

    <section class="ehsi-knowledge-panel">
      <div class="ehsi-panel-title">
        <div>
          <h3>🧭 Fachwissen & Einsatzhilfe</h3>
          <p>Die praktischen Übersichten und Hinweise des gewählten EHSI-Bereichs.</p>
        </div>
      </div>
      <div class="ehsi-grid">${renderKnowledge(section)}</div>
    </section>

    <div class="ehsi-modal-footer">
      <span>Hinweis: Für die konkrete Alarmierung und Einsatzführung gelten die jeweils aktuellen örtlichen Vorgaben.</span>
      <button type="button" class="button secondary" data-ehsi-close>‹ Bereich schließen</button>
    </div>
  `;

  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('ehsi-modal-open');

  content.querySelectorAll('[data-ehsi-close]').forEach(el => {
    el.addEventListener('click', closeSection);
  });
  const closeButton = content.querySelector('.ehsi-modal-close');
  closeButton?.focus();
}

function closeSection() {
  const modal = $('ehsiModal');
  if (!modal) return;
  activeSection = null;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('ehsi-modal-open');
}

renderButtons();

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && activeSection) closeSection();
});
