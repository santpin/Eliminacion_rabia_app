// ============================================================
// APP.JS — Ecuador libre de rabia
// Lógica de navegación, renderizado y hoja de ruta interactiva
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// ── ESTADO GLOBAL ─────────────────────────────────────────
const STATE = {
  currentSection: 'home',
  currentTimelineScale: 'completo', // 'trimestre' | 'completo'
  activeHallazgo: null,
  roadmapProgress: {},
  actorFilter: 'todos'
};

// Global exposure
window.RABIA_APP = {
    toggleHallazgo,
    toggleCatalog,
    filterActores,
    showSection,
    scrollToActor
};

// ── INIT ──────────────────────────────────────────────────
function initApp() {
  console.log("Initializing Rabia App...");
  try {
    loadRoadmapState();
    renderHome();
    renderEstrategia();
    renderDiagnostico();
    renderPaquete();
    renderActores();
    renderHojaDeRuta();
    renderDossier();
    renderDocumentacion();
    renderCatalogo();
    
    // Smooth transitions
    initNavigation();
    showSection('home');
    console.log("App initialized successfully");
  } catch (error) {
    console.error("Error during initApp:", error);
  }
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
            <span>Impacto para la verificación del estatus</span>
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
    grid.innerHTML = p.instrumentos.map(inst => {
      const hasPdf = inst.pdf_url && inst.pdf_url.trim() !== "";
      return `
        <div class="instrumento-card" id="inst-${inst.id}" style="--inst-color: ${inst.nivel_color};">
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
            
            <div class="inst-pdf-bar">
              <button class="inst-pdf-btn primary ${!hasPdf ? 'disabled' : ''}" 
                      onclick="RABIA_APP.openPdfModal('${inst.pdf_url}', '${inst.nombre}', '${inst.icono}')">
                <i class="fas fa-file-pdf"></i> ${hasPdf ? 'Ver documento' : 'Documento en trámite'}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
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

// ── EXPEDIENTE DE VALIDACIÓN (DOSSIER) ──────────────────
function renderDossier() {
    const d = APP_DATA.dossier;
    if (!d) return;
    const section = document.getElementById('section-dossier');
    if (!section) return;

    // 1. Limpiar o asegurar contenedores
    section.innerHTML = `
        <div class="dos-hero" style="background: linear-gradient(135deg, #2D3436 0%, #000000 100%); padding:60px 20px; color:white; text-align:center;">
          <div style="max-width:1000px; margin:0 auto;">
            <div style="display:inline-flex; align-items:center; gap:6px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.15); color:rgba(255,255,255,0.85); padding:6px 16px; border-radius:20px; font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; margin-bottom:20px;">
              📁 Expediente de Validación
            </div>
            <h2 style="color:white; font-size:2.4rem; margin-bottom:15px; font-weight:800;">Dossier de Eliminación RHTP</h2>
            <p style="color:rgba(255,255,255,0.7); font-size:1.1rem; line-height:1.6; max-width:800px; margin:0 auto;">Soporte técnico para la adopción del paquete normativo RHTP</p>
          </div>
        </div>

        <div class="dos-alerta">
            <i class="fas fa-info-circle"></i>
            <div class="dos-alerta-content">
                ${d.proposito_formal}
                <span class="dos-alerta-meta">Fuentes: ${d.alerta.fuentes} | Corte: ${d.alerta.fecha_corte}</span>
            </div>
        </div>

        <div class="dos-section-title">
            <h3>Compromisos internacionales del Ecuador</h3>
            <div class="line"></div>
        </div>

        <div class="dos-ci-grid">
            ${d.compromisos_internacionales.map(c => `
                <div class="dos-ci-card">
                    <div>
                        <span class="dos-ci-org">${c.organismo}</span>
                        <span class="dos-ci-anio">${c.anio}</span>
                    </div>
                    <h4>${c.titulo}</h4>
                    <p>${c.descripcion}</p>
                    <div class="dos-ci-vinc">
                        ${c.vinculacion}
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="dos-section-title">
            <h3>Expediente por instrumento</h3>
            <div class="line"></div>
        </div>

        <div class="dos-inst-grid">
            ${d.instrumentos.map(inst => {
                const hasPdf = inst.pdf_url && inst.pdf_url.trim() !== "";
                return `
                <div class="dos-inst-card" id="${inst.id}">
                    <!-- 1. Header -->
                    <div class="dos-inst-header" style="background:${inst.color}">
                        <div class="dos-inst-sigla">${inst.sigla}</div>
                        <div>
                            <h3>${inst.icono} ${inst.nombre}</h3>
                            <div class="dos-inst-header-tag">Instrumento de Validación Nacional</div>
                        </div>
                    </div>

                    <!-- 2. Pregunta -->
                    <div class="dos-block-pregunta">
                        <span class="dos-label">Pregunta de Política</span>
                        <div class="dos-pregunta-text">${inst.pregunta}</div>
                    </div>

                    <!-- 3. Justificación Epi -->
                    <div class="dos-block-epi">
                        <span class="dos-label">Justificación Epidemiológica y Técnica</span>
                        <div class="dos-epi-text">${inst.justificacion_epi}</div>
                    </div>

                    <!-- 4. Estándar y Norma Habilitante -->
                    <div class="dos-cols-2">
                        <div class="dos-block-std">
                            <span class="dos-label">Referencia Internacional</span>
                            <span class="dos-detail-title">${inst.estandar_ref.split(':')[0]}</span>
                            <span class="dos-detail-content">${inst.estandar_ref.split(':')[1] || ''}</span>
                        </div>
                        <div class="dos-block-hab">
                            <span class="dos-label">Norma Habilitante Nacional</span>
                            <span class="dos-detail-title">${inst.norma_hab.split(':')[0]}</span>
                            <span class="dos-detail-content">${inst.norma_hab.split(':')[1] || ''}</span>
                        </div>
                    </div>

                    <!-- 5. Precedente -->
                    <div class="dos-block-prec">
                        <span class="dos-label">Precedente Regional Comparado</span>
                        <div class="dos-prec-flex">
                            <div class="dos-prec-badge">
                                <span class="dos-prec-pais">${inst.precedente.pais}</span>
                                <span class="dos-prec-res">${inst.precedente.resultado}</span>
                            </div>
                            <div class="dos-prec-info">
                                <div class="dos-prec-titulo">${inst.precedente.titulo}</div>
                                <div class="dos-prec-desc">${inst.precedente.desc}</div>
                            </div>
                        </div>
                    </div>

                    <!-- 6. Indicador -->
                    <div class="dos-block-indicador">
                        <div class="dos-ind-icon"><i class="fas fa-check-circle"></i></div>
                        <div>
                            <span class="dos-label">Indicador de Adopción 2026</span>
                            <div class="dos-ind-text">${inst.indicador}</div>
                        </div>
                    </div>

                    <!-- Barra PDF -->
                    <div class="inst-pdf-bar">
                        <button class="inst-pdf-btn primary ${!hasPdf ? 'disabled' : ''}" 
                                onclick="RABIA_APP.openPdfModal('${inst.pdf_url}', '${inst.nombre}', '${inst.icono}')">
                            <i class="fas fa-file-pdf"></i> ${hasPdf ? 'Ver documento' : 'Documento pendiente de publicación'}
                        </button>
                    </div>
                </div>
                `;
            }).join('')}
        </div>

        <!-- Footer CTA -->
        <div class="dos-footer-cta">
            <h4 style="color:#1e293b; margin-bottom:10px;">Navegación del Expediente</h4>
            <p style="color:#64748b; font-size:0.9rem;">Continúe revisando los componentes del Marco Normativo.</p>
            <div class="dos-cta-grid">
                <a href="#" onclick="RABIA_APP.showSection('paquete')" class="dos-cta-btn">
                    <i class="fas fa-layer-group" style="color:#334155;"></i>
                    <span>Ver el paquete normativo completo</span>
                </a>
                <a href="#" onclick="RABIA_APP.showSection('hoja-de-ruta')" class="dos-cta-btn">
                    <i class="fas fa-calendar-alt" style="color:#EE9B00;"></i>
                    <span>Ver hoja de ruta de implementación</span>
                </a>
            </div>
        </div>
    `;
}

// ── VISOR PDF ─────────────────────────────────────────────
function openPdfModal(url, title, icon) {
    if (!url) return;
    
    const modal = document.getElementById('pdf-modal');
    const iframe = document.getElementById('pdf-iframe');
    const titleEl = document.getElementById('pdf-modal-title');
    const iconEl = document.getElementById('pdf-modal-icon');
    const externalLink = document.getElementById('pdf-external-link');
    const downloadLink = document.getElementById('pdf-download-link');
    const loader = document.getElementById('pdf-loader');
    
    titleEl.textContent = title;
    iconEl.textContent = icon || '📄';
    externalLink.href = url;
    downloadLink.href = url;
    
    // Reset iframe to show loader
    iframe.src = "";
    if (loader) loader.style.display = 'block';
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    // Load URL
    setTimeout(() => {
        iframe.src = url;
        iframe.onload = () => {
            if (loader) loader.style.display = 'none';
        };
    }, 100);
}

function closePdfModal() {
    const modal = document.getElementById('pdf-modal');
    const iframe = document.getElementById('pdf-iframe');
    
    modal.classList.remove('open');
    iframe.src = "";
    document.body.style.overflow = '';
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
    <div class="actor-card" id="actor-${a.id}">
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
          ${a.competencias.map(c => `<div class="actor-comp-item">${c}</div>`).join('')}
        </div>
        ${a.brecha_operativa ? `
          <div class="actor-brecha-lab" style="margin-top:10px; font-size:0.72rem; padding:8px; background:rgba(108,52,131,0.1); border-radius:4px; border-left:3px solid #6C3483;">
            <strong style="color:#6C3483;">Brecha operativa:</strong> ${a.brecha_operativa}
          </div>
        ` : ''}
        ${a.productos_verificables ? `
          <div class="actor-productos" style="margin-top:10px;">
            <span style="font-size:0.7rem; font-weight:700; color:var(--dark); text-transform:uppercase;">Productos verificables</span>
            <ul style="margin: 5px 0 0 15px; padding: 0; font-size: 0.72rem; color: var(--muted);">
              ${a.productos_verificables.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
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

function scrollToActor(actorId) {
  showSection('actores');
  setTimeout(() => {
    const el = document.getElementById('actor-' + actorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('highlight-actor');
      setTimeout(() => el.classList.remove('highlight-actor'), 2000);
    }
  }, 300);
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
    const status = STATE.roadmapProgress[paso.id] || 'pendiente';
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
    const completed = f.pasos.filter(p => (STATE.roadmapProgress[p.id] || 'pendiente') === 'completado').length;
    const inProgress = f.pasos.filter(p => (STATE.roadmapProgress[p.id] || 'pendiente') === 'en-progreso').length;
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
  const current = STATE.roadmapProgress[stepId] || 'pendiente';
  const cycle = { 'pendiente': 'en-progreso', 'en-progreso': 'completado', 'completado': 'pendiente' };
  STATE.roadmapProgress[stepId] = cycle[current];
  saveRoadmapState();
  renderPhaseDetail(STATE.currentPhase);
  renderProgressDashboard();
}

function setStatus(stepId, status) {
  STATE.roadmapProgress[stepId] = status;
  saveRoadmapState();
  renderPhaseDetail(STATE.currentPhase);
  renderProgressDashboard();
}

function saveRoadmapState() {
  try {
    sessionStorage.setItem('rhtp_roadmap', JSON.stringify(STATE.roadmapProgress));
  } catch(e) {}
}

function loadRoadmapState() {
  try {
    const saved = sessionStorage.getItem('rhtp_roadmap');
    if (saved) STATE.roadmapProgress = JSON.parse(saved);
  } catch(e) {}
}

function resetRoadmap() {
  if (confirm('¿Deseas reiniciar el progreso de la hoja de ruta?')) {
    STATE.roadmapProgress = {};
    saveRoadmapState();
    renderPhaseDetail(STATE.currentPhase);
    renderProgressDashboard();
  }
}

/**
 * RENDER DOCUMENTACIÓN & FECHA DE CORTE
 */
function renderDocumentacion() {
    // Sección eliminada por solicitud del usuario
    console.log("Sección documentación deshabilitada.");
}

/**
 * RENDER CATÁLOGO NORMATIVO (DRAWER)
 */
function renderCatalogo() {
    const intro = document.getElementById('catalog-intro');
    const categoriesContainer = document.getElementById('catalog-categories');
    if (!intro || !categoriesContainer) return;
    
    try {
        const cat = APP_DATA.catalogo_revisado;
        if (!cat) {
            console.error("APP_DATA.catalogo_revisado is missing!");
            return;
        }
        intro.textContent = cat.intro;
    
    let html = '';
    cat.categorias.forEach(categoria => {
        html += `<h4 class="cat-category-name">${categoria.nombre}</h4>`;
        html += `
            <div class="norm-table-wrapper mb-4">
                <table class="norm-table">
                    <thead>
                        <tr>
                            <th class="norm-n">#</th>
                            <th class="norm-tipo">Tipo</th>
                            <th class="norm-num">Número</th>
                            <th class="norm-title">Título</th>
                            <th class="norm-ro">Registro Oficial</th>
                            <th class="norm-fecha">Fecha Pub.</th>
                            <th class="norm-reforma">Emisión / Reforma</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        categoria.registros.forEach(r => {
            html += `
                <tr>
                    <td class="norm-n">${r.n}</td>
                    <td class="norm-tipo">${r.tipo}</td>
                    <td class="norm-num">${r.numero}</td>
                    <td class="norm-title">${r.titulo}</td>
                    <td class="norm-ro">${r.registro_oficial}</td>
                    <td class="norm-fecha">${r.fecha_pub}</td>
                    <td class="norm-reforma">${r.emision}</td>
                </tr>
            `;
        });
        
        html += `
                    </tbody>
                </table>
            </div>
        `;
    });
    
    categoriesContainer.innerHTML = html;
    } catch (e) {
        console.error("Error in renderCatalogo:", e);
    }
}

/**
 * TOGGLE CATALOG DRAWER
 */
function toggleCatalog() {
    console.log("Toggle Catalog triggered");
    const drawer = document.getElementById('catalog-drawer');
    if (drawer) {
        drawer.classList.toggle('active');
        const isActive = drawer.classList.contains('active');
        console.log("Drawer active:", isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    } else {
        console.error("Catalog drawer element not found!");
    }
}

// ── FILTROS DE ACTORES ────────────────────────────────────
function filterActores(tipo) {
  STATE.actorFilter = tipo;
  renderActores(tipo);
}

// Global exposure expanded
window.RABIA_APP = {
    ...window.RABIA_APP,
    openPdfModal,
    closePdfModal
};

// Add escape key listener for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePdfModal();
        const drawer = document.getElementById('catalog-drawer');
        if (drawer && drawer.classList.contains('active')) toggleCatalog();
    }
});
