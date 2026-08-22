// The Citizen's Record — shared site behavior
document.addEventListener('DOMContentLoaded', () => {

  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav.primary');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // mark current page active in nav
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.primary a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // simple client-side filter bar (data-filter buttons + data-tag items)
  document.querySelectorAll('.filter-bar').forEach(bar => {
    const targetSel = bar.dataset.target;
    const items = targetSel ? document.querySelectorAll(targetSel) : [];
    bar.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        bar.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        items.forEach(item => {
          const show = filter === 'all' || item.dataset.tag === filter;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  });

  // render daily updates log if the container exists (updates.html)
  const logEl = document.getElementById('update-log');
  if (logEl && Array.isArray(window.CR_POSTS)) {
    renderUpdateLog(logEl, window.CR_POSTS);
  }

  // render homepage "latest update" strip if present
  const latestEl = document.getElementById('latest-update');
  if (latestEl && Array.isArray(window.CR_POSTS) && window.CR_POSTS.length) {
    const p = [...window.CR_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
    latestEl.innerHTML = `
      <span class="log-type">${escapeHtml(p.type || 'Update')} · ${formatDate(p.date)}</span>
      <h4>${escapeHtml(p.title)}</h4>
      <p>${escapeHtml(p.summary || '')}</p>
      ${p.link ? `<a class="view-all" href="${p.link}" ${/^https?:\/\//.test(p.link) ? 'target="_blank" rel="noopener"' : ''}>View this update →</a>` : ''}
    `;
  }
});

function renderUpdateLog(container, posts) {
  if (!posts.length) {
    container.innerHTML = '<div class="empty-state">No entries yet. Check back soon.</div>';
    return;
  }
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  container.innerHTML = sorted.map(p => `
    <div class="log-entry">
      <div class="log-date">${formatDate(p.date)}</div>
      <div>
        <span class="log-type">${escapeHtml(p.type || 'Update')}</span>
        <h4>${escapeHtml(p.title)}</h4>
        <p>${escapeHtml(p.summary || '')}</p>
        <div class="log-links">
          ${p.link ? `<a href="${p.link}" ${/^https?:\/\//.test(p.link) ? 'target="_blank" rel="noopener"' : ''}>View →</a>` : ''}
          ${p.video ? `<a href="${p.video}" target="_blank" rel="noopener">Watch video →</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  if (isNaN(d)) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}
