---
layout: default
title: Search LLM and AI Blog Posts & Books
description: A searchable list of LLM and AI Blog Posts & Books
---

<h2 style="font-size: 1.8em; margin-bottom: 10px;">🧠 LLM and AI Blog Posts & Books</h2>
<p style="font-size: 1.05em;">
  Search recent AI/LLM blog posts and must-read books.
</p>

<!-- Slim Toolbar: search + visible count -->
<div id="blogsToolbar" class="toolbar" style="display:none;">
  <div class="left">
    <div class="search">
      <label for="blogsSearch"><strong>Search</strong></label>
      <input id="blogsSearch" type="search" placeholder="🔍 Search title, source, summary…" inputmode="search" />
      <button id="resetBlogsSearch" type="button" aria-label="Clear search">Clear</button>
      <span id="blogsVisibleCount" class="small" aria-live="polite"></span>
    </div>
  </div>
</div>

<!-- Loading Indicator -->
<div id="loading" role="status" aria-live="polite">
  <p>Loading Blog Explorer …</p>
</div>

<!-- Cards View (only) -->
<div id="cardsGrid" class="cards" style="display:none;" aria-live="polite"></div>
<p id="emptyState" class="empty" style="display:none;">No posts match your search.</p>

<!-- Hidden Data Table (used as an efficient data engine) -->
<table id="blogs-table" class="display stripe hover" style="width:100%; display:none;">
  <thead>
    <tr>
      <th>Title</th>
      <th>Source</th>
      <th>Published</th>
      <th>Summary</th>
      <th>raw</th>
      <th>published_ts</th> <!-- hidden timestamp -->
      <th>url</th>          <!-- hidden url for cards -->
      <th>domain</th>       <!-- hidden domain for favicon -->
    </tr>
  </thead>
  <tbody></tbody>
</table>

<style>
  :root{
    --bg:#ffffff;
    --card:#fff;
    --muted:#6b7280;
    --line:#e5e7eb;
    --shadow:0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.04);
    --brand:#1a73e8;

    /* If you have a fixed site header/ribbon, set its height here */
    --site-header: 0px;   /* e.g. 56px */
    --sticky-gap: 12px;   /* breathing room below header */
  }

  .toolbar{
    position: sticky;
    top: calc(var(--site-header) + var(--sticky-gap));
    z-index: 20;
    background: linear-gradient(#fff, rgba(255,255,255,.92));
    backdrop-filter: blur(4px);
    border:1px solid var(--line);
    border-radius:12px; padding:10px 12px; margin:8px 0 12px;
    display:flex; align-items:center; justify-content:flex-start; gap:12px;
    box-shadow: var(--shadow);
    max-width: 100%; box-sizing: border-box;
  }
  /* Optional: stronger shadow when the bar is actually stuck */
  .toolbar.is-stuck{ box-shadow: 0 2px 10px rgba(0,0,0,.08); }

  .search{ display:flex; align-items:center; gap:.6rem; flex-wrap:wrap; }
  .search label{ font-weight:700; font-size:.85rem; }
  .search input{
    width:clamp(220px, 32vw, 560px); padding:.45rem .6rem;
    border:1px solid #cbd5e1; border-radius:8px; font-size:.95rem; background-color:#f8fafc;
  }
  .search input:focus{ outline:none; border-color:var(--brand); box-shadow:0 0 0 2px rgba(26,115,232,.18); }
  .search button{
    padding:.45rem .6rem; font-size:.85rem; border:1px solid #cbd5e1; border-radius:8px; background:#f8fafc; cursor:pointer;
  }
  .search button:hover{ background:#eef2f7; }
  .small{ color:var(--muted); font-size:.9em; }

  .cards{
    display:grid; gap:14px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  .card{
    border:1px solid var(--line); border-radius:14px; background:var(--card);
    padding:14px; box-shadow: var(--shadow); transition: transform .06s ease;
  }
  .card:hover{ transform: translateY(-1px); }
  .meta{ display:flex; align-items:center; gap:8px; margin-bottom:8px; color:var(--muted); font-size:.85rem; }
  .favicon{ width:16px; height:16px; border-radius:4px; background:#f3f4f6; }
  .title{ font-weight:700; line-height:1.25; margin:0 0 6px; }
  .title a{ text-decoration:none; color:#0f172a; }
  .title a:hover{ text-decoration:underline; }
  .desc{ color:#374151; font-size:.95rem; line-height:1.45; display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:4; overflow:hidden; }
  .badges{ display:flex; align-items:center; gap:6px; margin-top:10px; }
  .badge{
    font-size:.75rem; border:1px solid var(--line); color:#0f172a; padding:.2rem .45rem; border-radius:999px; background:#f7f7fb;
  }
  .badge.new{ border-color:#ffe3a3; background:#fff6d8; color:#8a5a00; }

  .empty{ color:var(--muted); text-align:center; padding:24px 8px; }

  /* DataTables wrapper (hidden table) */
  .dataTables_wrapper{ width:100%; overflow-x:hidden; }
  #blogs-table{ width:100%; border-collapse:collapse; table-layout:auto; }
  #blogs-table td{ white-space: normal !important; word-break: break-word; overflow-wrap:anywhere; vertical-align: top; }
  #blogs-table th{ white-space: nowrap !important; overflow: hidden; text-overflow: ellipsis; vertical-align: middle; }
  .dataTables_filter{ display:none !important; }

  /* Loader */
  #loading{
    position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
    font-size:1.05em; text-align:center; z-index:1000;
    background:white; padding:.8em 1.2em; border:1px solid #ccc; border-radius:8px;
    box-shadow:0 2px 10px rgba(0,0,0,.08);
  }

  @media (max-width: 640px){
    .toolbar{ border-radius:10px; }
    .desc{ -webkit-line-clamp: 6; }
    :root{ --sticky-gap: 8px; }
  }
</style>

<link rel="stylesheet" href="{{ '/assets/vendor/datatables-1.13.6.min.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/vendor/dataTables.responsive-2.5.0.min.css' | relative_url }}">
<script src="{{ '/assets/vendor/jquery-3.6.0.min.js' | relative_url }}" defer></script>
<script src="{{ '/assets/vendor/datatables-1.13.6.min.js' | relative_url }}" defer></script>
<script src="{{ '/assets/vendor/dataTables.responsive-2.5.0.min.js' | relative_url }}" defer></script>
<script src="{{ '/assets/vendor/d3.v7.min.js' | relative_url }}" defer></script>

<script>
  var datatable;

  function fmtDate(ts){
    if (!ts) return '';
    return new Date(ts).toLocaleString('en-GB', { day:'2-digit', month:'short', year:'numeric' });
  }

  function domainFromUrl(u){
    try{ return new URL(u).hostname; } catch(e){ return ''; }
  }

  function faviconForDomain(d){
    if (!d) return '';
    return 'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(d) + '&sz=32';
  }

  function updateVisibleCount(){
    if (!datatable) return;
    const el = document.getElementById('blogsVisibleCount');
    if (!el) return;
    el.textContent = datatable.rows({ filter: 'applied' }).count() + ' posts';
  }

  function renderCards(){
    const grid = document.getElementById('cardsGrid');
    const empty = document.getElementById('emptyState');
    if (!datatable) return;

    const data = datatable.rows({ filter:'applied' }).data().toArray();
    grid.innerHTML = '';

    if (!data.length){
      grid.style.display='none';
      empty.style.display='';
      updateVisibleCount();
      return;
    }
    empty.style.display='none';
    grid.style.display='grid';

    const now = Date.now();
    const sevenDays = 7 * 24 * 3600 * 1000;

    data.forEach(row => {
      const titleHTML   = row[0];
      const source      = row[1] || '—';
      const publishedTs = +row[5] || 0;
      const url         = row[6] || '';
      const domain      = row[7] || domainFromUrl(url);
      const descHTML    = row[3];

      const isNew = publishedTs && (now - publishedTs <= sevenDays);

      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <div class="meta">
          <img class="favicon" src="${faviconForDomain(domain)}" alt="" loading="lazy">
          <span>${source}</span>
          <span>•</span>
          <time datetime="${new Date(publishedTs).toISOString()}">${fmtDate(publishedTs)}</time>
        </div>
        <h3 class="title">${titleHTML}</h3>
        <div class="desc">${descHTML}</div>
        <div class="badges">
          ${isNew ? '<span class="badge new">NEW</span>' : ''}
          <span class="badge">${domain || 'link'}</span>
        </div>
      `;
      // Make title clickable if not already
      if (url){
        const a = card.querySelector('.title a');
        if (!a){
          const h3 = card.querySelector('.title');
          h3.innerHTML = `<a href="${url}" target="_blank" rel="noopener">${h3.textContent}</a>`;
        }
      }
      grid.appendChild(card);
    });

    updateVisibleCount();
  }

  document.addEventListener('DOMContentLoaded', function () {
    const loading = document.getElementById('loading');
    const CSV_URL = "{{ '/high_signal_blogs.csv' | relative_url }}";

    if (!window.jQuery){ loading.innerHTML = '<p style="color:#b00020">Failed to load: jQuery missing.</p>'; return; }

    d3.csv(CSV_URL).then(function (data) {
      // Map rows -> DataTables dataset
      const rows = data.map(function (p) {
        const title = (p.title || '').trim();
        const url   = (p.url || '').trim();
        const source = (p.source || '').trim();
        const publishedISO = (p.published_iso || '').trim();
        const summaryFull = (p.summary || '').trim();
        const summaryShort = summaryFull.length > 400 ? (summaryFull.substring(0, 400) + "…") : summaryFull;

        const titleCell = url
          ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${title || '(untitled)'}</a>`
          : (title || '(untitled)');

        const esc = (s)=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
        const descCell = `<div class="desc" title="${esc(summaryFull)}">${esc(summaryShort)}</div>`;
        const raw = [title, source, summaryFull, (p.canonical_url||''), (p.uid||'')].join(' ');
        const ts = (publishedISO ? new Date(publishedISO).getTime() : 0) || 0;
        const dom = domainFromUrl(url);

        return [ titleCell, source || '—', publishedISO, descCell, raw, ts, url, dom ];
      });

      // Init DataTables (hidden), newest first
      const dt = jQuery('#blogs-table').DataTable({
        data: rows,
        columns: [
          { title: "Title"    },
          { title: "Source"   },
          { title: "Published",
            render: (iso)=> iso ? new Date(iso).toLocaleString('en-GB',{day:'2-digit',month:'short',year:'numeric'}) : '' },
          { title: "Summary"  },
          { title: "raw"      },
          { title: "published_ts" },
          { title: "url"      },
          { title: "domain"   }
        ],
        responsive: { details: false },
        autoWidth: false,
        paging: false,
        searching: true,
        order: [[5, 'desc']], // newest first
        columnDefs: [
          { targets: [4,5,6,7], visible: false, searchable: false }
        ],
        initComplete: function () {
          datatable = this.api();

          // Show minimal UI
          jQuery('#loading').hide();
          document.getElementById('blogsToolbar').style.display='';
          document.getElementById('cardsGrid').style.display='grid';

          // First paint
          renderCards();

          // Re-render cards when table filter changes
          datatable.on('draw', renderCards);

          // Search wiring
          const input = document.getElementById('blogsSearch');
          const reset = document.getElementById('resetBlogsSearch');
          input.addEventListener('input', ()=> { datatable.search(input.value || '').draw(); });
          reset.addEventListener('click', ()=> { input.value=''; datatable.search('').draw(); input.focus(); });

          // Keyboard shortcuts
          document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
              e.preventDefault(); input.focus();
            } else if (e.key === 'Escape') {
              input.value=''; datatable.search('').draw();
            }
          });
        }
      });

    }).catch(function (error) {
      console.error("Error loading CSV:", error);
      jQuery('#loading').hide();
      const msg = document.createElement('div');
      msg.style.color = 'red';
      msg.style.marginTop = '10px';
      msg.textContent = 'Failed to load data (CSV unreachable or blocked).';
      document.body.appendChild(msg);
    });
  });
</script>

<!-- Optional: add a stronger shadow when the toolbar is actually stuck -->
<script>
(function(){
  const el=document.getElementById('blogsToolbar');
  if(!el || !('IntersectionObserver' in window)) return;
  const sentry=document.createElement('div');
  sentry.style.position='relative';
  sentry.style.height='1px';
  el.parentNode.insertBefore(sentry, el);
  const gap = getComputedStyle(document.documentElement).getPropertyValue('--sticky-gap').trim() || '12px';
  new IntersectionObserver(([e])=>{
    el.classList.toggle('is-stuck', !e.isIntersecting);
  }, { rootMargin: `-${gap} 0px 0px 0px` }).observe(sentry);
})();
</script>
