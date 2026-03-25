// ============================================================
// APP.JS — Rabia Cero Ecuador
// Lógica de navegación, renderizado y hoja de ruta interactiva
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// ── ESTADO GLOBAL ─────────────────────────────────────────
const STATE = {
  currentSection: 'home',
  currentPhase: 'fase1',
  roadmapStatus: {},      // { stepId: 'pendiente'|'en-progreso'|'completado' }
  actorFilter: 'todos'
};

// ── INIT ──────────────────────────────────────────────────
function initApp() {
  loadRoadmapState();
  renderHome();
  renderEstrategia();
  renderDiagnostico();
  renderPaquete();
  renderActores();
  renderHojaDeRuta();
  initNavigation();
  showSection('home');
}

// ── NAVEGACIÓN ────────────────────────────────────────────
function initNavigation() {
  const links = document.querySelectorAll('[data-section]');
  links.forEach(link => {
    link.addEventListener('click', () => {
      const sec = link.getAttribute('data-section');
      showSection(sec);
      // Close mobile menu
      document.getElementById('nav-links').classList.remove('open');
    });
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      document.getElementById('nav-links').classList.toggle('open');
    });
  }
}

function showSection(sectionId) {
  STATE.currentSection = sectionId;

  document.querySelectorAll('.section-page').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('[data-section]').forEach(l => l.classList.remove('active'));

  const page = document.getElementById('section-' + sectionId);
  if (page) page.classList.add('active');

  document.querySelectorAll(`[data-section="${sectionId}"]`).forEach(l => l.classList.add('active'));

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── HOME ──────────────────────────────────────────────────
function renderHome() {
  const d = APP_DATA;

  // Stats in hero card
  const statsEl = document.getElementById('hero-stats');
  if (!statsEl) return;
  statsEl.innerHTML = d.estrategia.estadisticas.slice(0, 4).map(s => `
    <div class="hero-stat">
      <div class="hero-stat-value">${s.valor}</div>
      <div class="hero-stat-label">${s.etiqueta}</div>
    </div>
  `).join('');
}

// ── ESTRATEGIA ────────────────────────────────────────────
function renderEstrategia() {
  const e = APP_DATA.estrategia;

  // Stats row
  const statsRow = document.getElementById('est-stats');
  if (statsRow) {
    statsRow.innerHTML = e.estadisticas.map(s => `
      <div class="stat-item">
        <div class="stat-value">${s.valor}</div>
        <div class="stat-label">${s.etiqueta}</div>
      </div>
    `).join('');
  }

  // Componentes OPS
  const compGrid = document.getElementById('componentes-grid');
  if (compGrid) {
    compGrid.innerHTML = e.marco_ops.componentes.map(c => `
      <div class="componente-card">
        <div class="componente-icon">${c.icono}</div>
        <h4>${c.nombre}</h4>
        <p>${c.descripcion}</p>
      </div>
    `).join('');
  }

  // Por qué normativo
  const porQueGrid = document.getElementById('porque-grid');
  if (porQueGrid) {
    porQueGrid.innerHTML = e.por_que_normativo.map(item => `
      <div class="por-que-item">
        <h4>${item.titulo}</h4>
        <p>${item.descripcion}</p>
      </div>
    `).join('');
  }
}

// ── DIAGNÓSTICO ───────────────────────────────────────────
function renderDiagnostico() {
  const d = APP_DATA.diagnostico;

  const grid = document.getElementById('hallazgos-grid');
  if (grid) {
    grid.innerHTML = d.hallazgos.map(h => `
      <div class="hallazgo-card" id="hall-${h.id}">
        <div class="hallazgo-header" onclick="toggleHallazgo('${h.id}')">
          <div class="hallazgo-num ${h.severidad}">${h.numero}</div>
          <div class="hallazgo-title-wrap">
            <span class="hallazgo-badge ${h.severidad}">${h.severidad === 'critica' ? 'Crítico' : 'Alta prioridad'}</span>
            <h4>${h.titulo}</h4>
            <p>${h.resumen}</p>
          </div>
          <div class="hallazgo-chevron">▼</div>
        </div>
        <div class="hallazgo-body">
          <p>${h.descripcion}</p>
          <div class="impact-box">
            <span>Impacto para la certificación</span>
            <p>${h.impacto}</p>
          </div>
          <div class="tags-row">
            ${h.componentes_afectados.map(c => `<span class="tag">${c}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Brechas
  const brGrid = document.getElementById('brechas-grid');
  if (brGrid) {
    brGrid.innerHTML = d.brechas.map((b, i) => `
      <div class="brecha-item">
        <div class="brecha-num">${i + 1}</div>
        <h4>${b.titulo}</h4>
        <p>${b.descripcion}</p>
      </div>
    `).join('');
  }
}

function toggleHallazgo(id) {
  const card = document.getElementById('hall-' + id);
  if (card) card.classList.toggle('open');
}

// ── PAQUETE NORMATIVO ─────────────────────────────────────
function renderPaquete() {
  const p = APP_DATA.paquete;

  // Jerarquía
  const ladder = document.getElementById('jerarquia-ladder');
  if (ladder) {
    ladder.innerHTML = p.instrumentos.map(inst => `
      <div class="jerar-level">
        <div class="jerar-ico">${inst.icono}</div>
        <div class="jerar-box" style="background:${inst.nivel_color}; color:white;"
             onclick="scrollToInstrumento('inst-${inst.id}')">
          <div class="jerar-nivel">${inst.nivel}</div>
          <div class="jerar-nombre">${inst.nombre}</div>
          <div class="jerar-fecha">${inst.hito}</div>
        </div>
      </div>
    `).join('');
  }

  // Instrumentos grid
  const grid = document.getElementById('instrumentos-grid');
  if (grid) {
    grid.innerHTML = p.instrumentos.map(inst => `
      <div class="instrumento-card" id="inst-${inst.id}">
        <div class="instrumento-top" style="background: ${inst.nivel_color};">
          <div class="instrumento-icon">${inst.icono}</div>
          <div>
            <h3>${inst.nombre}</h3>
            <div class="instrumento-nivel">${inst.nivel}</div>
            <div class="instrumento-hito">🎯 ${inst.hito}</div>
          </div>
        </div>
        <div class="instrumento-body">
          <p>${inst.descripcion}</p>
          <div class="brecha-tag">⚠️ Cierra: ${inst.brecha_cierra}</div>
          <div class="divider"></div>
          <h4>Elementos estructurales clave</h4>
          <div class="elem-list">
            ${inst.elementos.map(e => `<div class="elem-item">${e}</div>`).join('')}
          </div>
          <div style="margin-top:14px; padding:10px 14px; background:var(--bg); border-radius:var(--radius-sm); font-size:0.76rem; color:var(--muted); line-height:1.5;">
            <strong style="color:var(--dark);">Fundamento jurídico:</strong> ${inst.fundamento}
          </div>
        </div>
      </div>
    `).join('');
  }
}

function scrollToInstrumento(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.style.outline = '2px solid var(--accent)';
    setTimeout(() => { el.style.outline = 'none'; }, 2000);
  }
}

// ── ACTORES ───────────────────────────────────────────────
function renderActores(filter) {
  filter = filter || STATE.actorFilter;
  STATE.actorFilter = filter;

  const actores = filter === 'todos'
    ? APP_DATA.actores
    : APP_DATA.actores.filter(a => a.tipo === filter);

  const grid = document.getElementById('actores-grid');
  if (!grid) return;

  grid.innerHTML = actores.map(a => `
    <div class="actor-card">
      <div class="actor-top">
        <div class="actor-icon-wrap" style="background:${a.color}20;">
          <span style="font-size:1.5rem;">${a.icono}</span>
        </div>
        <div class="actor-head">
          <h3>${a.nombre}</h3>
          <span class="actor-tipo tipo-${a.tipo}">${a.tipo_label}</span>
        </div>
      </div>
      <div class="actor-body">
        <p class="actor-rol">${a.rol}</p>
        <div class="actor-competencias">
          ${a.competencias.slice(0, 3).map(c => `<div class="actor-comp-item">${c}</div>`).join('')}
        </div>
        ${a.participantes && a.participantes.length > 0 ? `
          <div class="actor-participantes">
            <span>Representantes identificados</span>
            <p>${a.participantes.join('<br>')}</p>
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');

  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
  });
}

// ── HOJA DE RUTA ──────────────────────────────────────────
function renderHojaDeRuta() {
  renderTimeline();
  renderPhaseDetail(STATE.currentPhase);
  renderProgressDashboard();
}

function renderTimeline() {
  const strip = document.getElementById('timeline-strip');
  if (!strip) return;

  strip.innerHTML = APP_DATA.hoja_de_ruta.fases.map(f => `
    <div class="tl-phase ${f.id === STATE.currentPhase ? 'selected' : ''}"
         style="background:${f.color}; color:white;"
         onclick="selectPhase('${f.id}')">
      <div class="tl-phase-num">Fase ${f.numero}</div>
      <div class="tl-phase-name">${f.nombre}</div>
      <div class="tl-phase-period">${f.periodo}</div>
    </div>
  `).join('');
}

function selectPhase(phaseId) {
  STATE.currentPhase = phaseId;
  renderTimeline();
  renderPhaseDetail(phaseId);
}

function renderPhaseDetail(phaseId) {
  const fase = APP_DATA.hoja_de_ruta.fases.find(f => f.id === phaseId);
  if (!fase) return;

  const container = document.getElementById('phase-detail');
  if (!container) return;

  const steps = fase.pasos.map((paso, idx) => {
    const status = STATE.roadmapStatus[paso.id] || 'pendiente';
    const isLast = idx === fase.pasos.length - 1;
    const checkmark = status === 'completado' ? '✓' : paso.numero;

    return `
      <div class="step-item" id="step-wrap-${paso.id}">
        <div class="step-left">
          <div class="step-num-wrap ${status}"
               onclick="cycleStatus('${paso.id}')"
               title="Clic para cambiar estado">
            ${checkmark}
          </div>
          ${!isLast ? '<div class="step-line"></div>' : ''}
        </div>
        <div class="step-content">
          <div class="step-title-row">
            <div class="step-title">${paso.titulo}</div>
            <select class="step-status-select ${status}"
                    onchange="setStatus('${paso.id}', this.value)">
              <option value="pendiente"  ${status === 'pendiente'   ? 'selected' : ''}>⏳ Pendiente</option>
              <option value="en-progreso" ${status === 'en-progreso' ? 'selected' : ''}>🔄 En progreso</option>
              <option value="completado" ${status === 'completado'  ? 'selected' : ''}>✅ Completado</option>
            </select>
          </div>
          <p class="step-desc">${paso.descripcion}</p>
          <div class="step-meta">
            <div class="step-meta-item">👤 <strong>Responsable:</strong> ${paso.responsable}</div>
            <div class="step-meta-item">📅 <strong>Plazo:</strong> ${paso.plazo}</div>
            ${paso.base_legal ? `<div class="step-meta-item">⚖️ <strong>Base legal:</strong> ${paso.base_legal}</div>` : ''}
          </div>
          <div class="step-evidencia">
            📋 <span><strong>Evidencia esperada:</strong> ${paso.evidencia}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="phase-detail-card">
      <div class="phase-detail-header" style="background:${fase.color};">
        <div class="phase-detail-header-icon">${fase.icono}</div>
        <div>
          <h3>Fase ${fase.numero}: ${fase.nombre} — ${fase.periodo}</h3>
          <p>${fase.descripcion}</p>
          <div style="margin-top:8px; font-size:0.75rem; opacity:0.8;">
            ⚠️ Cierra brecha: ${fase.brecha_cierra}
          </div>
        </div>
      </div>
      <div class="phase-hito-banner">
        🎯 <strong>HITO:</strong> ${fase.hito} — ${fase.fecha_hito}
      </div>
      <div class="phase-steps">
        <h4>Pasos de implementación</h4>
        ${steps}
      </div>
    </div>
  `;
}

function renderProgressDashboard() {
  const phases = APP_DATA.hoja_de_ruta.fases;
  let totalSteps = 0;
  let totalCompleted = 0;

  const barsContainer = document.getElementById('progress-bars');
  if (!barsContainer) return;

  const bars = phases.map(f => {
    const total = f.pasos.length;
    const completed = f.pasos.filter(p => (STATE.roadmapStatus[p.id] || 'pendiente') === 'completado').length;
    const inProgress = f.pasos.filter(p => (STATE.roadmapStatus[p.id] || 'pendiente') === 'en-progreso').length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

    totalSteps += total;
    totalCompleted += completed;

    const color = completed === total ? '#2D6A4F' : inProgress > 0 ? '#D4A017' : f.color;

    return `
      <div class="progress-phase" onclick="selectPhase('${f.id}')" style="cursor:pointer; transition:box-shadow 0.2s;" onmouseenter="this.style.boxShadow='0 4px 16px rgba(0,0,0,0.12)'" onmouseleave="this.style.boxShadow=''">
        <div class="progress-phase-label">${f.icono} Fase ${f.numero}: ${f.nombre}</div>
        <div class="progress-phase-period">${f.periodo}</div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" style="width:${pct}%; background:${color};"></div>
        </div>
        <div class="progress-pct" style="color:${color};">${completed}/${total} pasos · ${pct}%</div>
      </div>
    `;
  }).join('');

  barsContainer.innerHTML = bars;

  const overallPct = totalSteps > 0 ? Math.round((totalCompleted / totalSteps) * 100) : 0;
  const overallEl = document.getElementById('progress-overall');
  if (overallEl) {
    overallEl.innerHTML = `
      <div class="progress-overall-label">Progreso global del dossier normativo</div>
      <div class="progress-bar-wrap overall">
        <div class="progress-bar-fill" style="width:${overallPct}%; background: linear-gradient(90deg, var(--primary), var(--primary-light));"></div>
      </div>
      <div class="progress-overall-pct">${overallPct}%</div>
    `;
  }
}

// ── GESTIÓN DE ESTADO DE PASOS ────────────────────────────
function cycleStatus(stepId) {
  const current = STATE.roadmapStatus[stepId] || 'pendiente';
  const cycle = { 'pendiente': 'en-progreso', 'en-progreso': 'completado', 'completado': 'pendiente' };
  STATE.roadmapStatus[stepId] = cycle[current];
  saveRoadmapState();
  renderPhaseDetail(STATE.currentPhase);
  renderProgressDashboard();
}

function setStatus(stepId, status) {
  STATE.roadmapStatus[stepId] = status;
  saveRoadmapState();
  renderPhaseDetail(STATE.currentPhase);
  renderProgressDashboard();
}

function saveRoadmapState() {
  try {
    sessionStorage.setItem('rhtp_roadmap', JSON.stringify(STATE.roadmapStatus));
  } catch(e) {}
}

function loadRoadmapState() {
  try {
    const saved = sessionStorage.getItem('rhtp_roadmap');
    if (saved) STATE.roadmapStatus = JSON.parse(saved);
  } catch(e) {}
}

function resetRoadmap() {
  if (confirm('¿Deseas reiniciar el progreso de la hoja de ruta?')) {
    STATE.roadmapStatus = {};
    saveRoadmapState();
    renderPhaseDetail(STATE.currentPhase);
    renderProgressDashboard();
  }
}

// ── FILTROS DE ACTORES ────────────────────────────────────
function filterActores(tipo) {
  STATE.actorFilter = tipo;
  renderActores(tipo);
}
