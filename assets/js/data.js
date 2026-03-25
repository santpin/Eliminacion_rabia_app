// ============================================================
// DATA.JS — Contenido completo de la app RHTP Ecuador 2026
// Fuente: Productos 1, 2, 3 y 4 de la consultoría legal
//         Boehringer Ingelheim / MSP Ecuador
// ============================================================

const APP_DATA = {

  // ── META ────────────────────────────────────────────────
  meta: {
    titulo: "Ecuador libre de rabia",
    subtitulo: "Marco Normativo para la Eliminación de la Rabia Humana Transmitida por Perros",
    anio: "2026",
    cliente: "Ministerio de Salud Pública del Ecuador",
    sponsor: "Boehringer Ingelheim",
    consultores: [
      "Dr. Santiago Pinto Zaldumbide, MD, MSc",
      "Abg. Héctor Muñoz Alarcón",
      "Abg. Alvaro Orellana",
      "Abg. Lorena Rincón"
    ],
    fecha: "Marzo 2026"
  },

  // ── SECCIÓN 1: ESTRATEGIA ────────────────────────────────
  estrategia: {
    contexto: "La rabia humana transmitida por perros (RHTP) es una enfermedad zoonótica prevenible al 100 % mediante vacunación. Ecuador mantiene ausencia de casos de rabia humana transmitida por perros desde 2006. Sin embargo, la ausencia de casos no equivale a la validación del estatus de eliminación. Para obtener la verificación ante OPS/PANAFTOSA, el país debe demostrar, mediante evidencia verificable, trazable y auditable, que las condiciones para la eliminación sostenida están institucionalizadas.",
    objetivo: "Fortalecer el marco normativo del Ecuador para habilitar, organizar y exigir las intervenciones críticas que sustentan la eliminación sostenida de la rabia humana transmitida por perros, en concordancia con el Plan Regional OPS/PANAFTOSA 2024–2030.",
    marco_ops: {
      titulo: "Plan Regional OPS/PANAFTOSA 2024–2030",
      descripcion: "El estándar de referencia regional establece las condiciones mínimas para sostener la eliminación y demostrarla mediante evidencias verificables. Ecuador se alinea a este plan con la meta de validación en el horizonte 2026–2030.",
      componentes: [
        { nombre: "Gobernanza Una Salud (One Health)", icono: "🏛️", descripcion: "Coordinación intersectorial formal entre salud humana, sanidad animal y nivel territorial." },
        { nombre: "Vigilancia y Notificación", icono: "🔬", descripcion: "Sistemas sensibles, oportunos y trazables con definiciones operativas y flujos estandarizados." },
        { nombre: "Profilaxis PEP", icono: "💉", descripcion: "Acceso universal y gratuito a vacunas de cultivo celular e inmunoglobulina con registro nominal." },
        { nombre: "Red de Laboratorio", icono: "🧪", descripcion: "Red diagnóstica integrada con tipificación genética rutinaria y aseguramiento de calidad." },
        { nombre: "Vacunación Canina", icono: "🐕", descripcion: "Meta de 80 % de cobertura verificable con vacunas de cultivo celular y registro trazable." },
        { nombre: "Control de Focos", icono: "⚡", descripcion: "Protocolo de respuesta integrada dentro de las 24 horas ante cualquier caso sospechoso." },
        { nombre: "Rol Territorial GAD", icono: "🏘️", descripcion: "222 GAD municipales con mínimos armonizados para control animal, registro y fiscalización." },
        { nombre: "Educación y Comunicación", icono: "📚", descripcion: "Educación preventiva institucionalizada MSP–MINEDUC como proceso permanente y auditable." }
      ]
    },
    por_que_normativo: [
      { titulo: "Sin norma no hay exigibilidad", descripcion: "Las acciones pueden existir como práctica informal, pero sin instrumentos normativos no son obligatorias ni auditables. La validación por OPS/PANAFTOSA exige evidencia documental verificable." },
      { titulo: "La 'carpeta técnica' requiere una base legal", descripcion: "El dossier de eliminación que Ecuador debe presentar se construye sobre tres pilares: evidencia normativa (instrumentos que asignan competencias), procedimental (protocolos) y de gestión (registros). Los tres necesitan respaldo normativo." },
      { titulo: "Gobernanza vinculante es el requisito", descripcion: "La coordinación basada en voluntades individuales y acuerdos ad hoc no garantiza la asignación explícita de responsabilidades, los plazos y la trazabilidad documental que demanda el proceso de verificación." },
      { titulo: "Velocidad vs. reforma legislativa", descripcion: "El horizonte 2026/2030 es incompatible con una reforma a la Ley Orgánica de Salud (18–24 meses en la Asamblea). Los instrumentos reglamentarios e infralegales permiten alcanzar el mismo efecto en 3–10 meses." }
    ],
    estadisticas: [
      { valor: "2006", etiqueta: "Ecuador mantiene ausencia de casos de RHTP" },
      { valor: "117", etiqueta: "Instrumentos normativos vigentes inventariados en el diagnóstico" },
      { valor: "222", etiqueta: "GAD municipales que deben adoptar la Ordenanza Modelo" },
      { valor: "80 %", etiqueta: "Meta de cobertura de vacunación canina exigida por OPS/PANAFTOSA" },
      { valor: "2030", etiqueta: "Horizonte de validación de eliminación ante OPS/PANAFTOSA" }
    ]
  },

  // ── SECCIÓN 2: DIAGNÓSTICO NORMATIVO ────────────────────
  diagnostico: {
    intro: "El Producto 1 (LT1) constituye el diagnóstico normativo y de gobernanza aplicable a la hoja de ruta de la estrategia nacional. Se analizaron 117 instrumentos normativos vigentes bajo tres criterios: aplicabilidad, exigibilidad y coherencia, contrastados con el estándar regional OPS/PANAFTOSA.",
    metodologia: {
      fuente: "Revisión documental sistemática (FIELWEB) + entrevistas focales semiestructuradas con actores clave",
      criterios: [
        { nombre: "Aplicabilidad", descripcion: "Grado en que el instrumento regula de manera concreta el componente crítico, definiendo responsabilidades y condiciones mínimas." },
        { nombre: "Exigibilidad", descripcion: "Presencia de obligaciones verificables, responsabilidades asignadas, mecanismos de cumplimiento y evidencia mínima exigible." },
        { nombre: "Coherencia", descripcion: "Identificación de dispersión regulatoria, duplicidades, contradicciones y ausencias que afecten la coordinación." }
      ]
    },
    hallazgos: [
      {
        id: "h1",
        numero: 1,
        titulo: "Fragmentación normativa y débil exigibilidad programática",
        resumen: "El marco vigente presenta dispersión de competencias entre sectores, sin instrumento integrador.",
        descripcion: "El marco vigente presenta dispersión de competencias y normas entre sectores, con ausencia de un instrumento integrador que establezca roles, responsabilidades, coordinación, obligaciones verificables y rendición de cuentas. Esta fragmentación reduce la capacidad del MSP de conducir un esquema estándar de eliminación con evidencia homogénea.",
        impacto: "Ninguna institución tiene mandato explícito y verificable para liderar la coordinación intersectorial de la hoja de ruta de adopción e implementación.",
        componentes_afectados: ["Gobernanza", "Vigilancia", "Control de focos"],
        severidad: "critica"
      },
      {
        id: "h2",
        numero: 2,
        titulo: "Desactualización e insuficiencia del marco operativo",
        resumen: "Instrumentos vigentes que no responden al estándar regional de eliminación por antigüedad o alcance limitado.",
        descripcion: "Existen instrumentos vigentes que no responden plenamente al estándar regional de eliminación, generando vacíos en elementos operativos críticos: vigilancia integrada, PEP, laboratorio, campañas, control de focos y gestión de la información.",
        impacto: "Los protocolos de PEP, laboratorio y campañas no están estandarizados para producir la evidencia verificable que demanda el proceso de validación OPS/PANAFTOSA.",
        componentes_afectados: ["PEP", "Laboratorio", "Campañas y vacunación"],
        severidad: "alta"
      },
      {
        id: "h3",
        numero: 3,
        titulo: "Gobernanza intersectorial 'Una Salud' insuficientemente institucionalizada",
        resumen: "Aunque hay experiencias de coordinación, el esquema de articulación interinstitucional no está formalizado.",
        descripcion: "Aunque existen experiencias de coordinación, el esquema de articulación interinstitucional no se encuentra formalizado de modo consistente: faltan instancias con mandato explícito, procesos decisorios definidos y mecanismos de seguimiento. Esto debilita la sostenibilidad y la trazabilidad requeridas para auditoría y validación.",
        impacto: "La coordinación MSP–AGROCALIDAD–INSPI depende de personas y voluntades, expuesta a discontinuidad por rotación de autoridades y cambios de prioridades.",
        componentes_afectados: ["Gobernanza", "Control de focos", "Vigilancia"],
        severidad: "critica"
      },
      {
        id: "h4",
        numero: 4,
        titulo: "Brecha estructural en educación y comunicación (MSP–MINEDUC)",
        resumen: "No existe marco normativo sostenido que institucionalice educación preventiva en el sistema escolar.",
        descripcion: "No se evidencia un marco normativo y operativo sostenido que institucionalice: educación preventiva en el sistema escolar; comunicación de riesgo y promoción de conductas (tenencia responsable, prevención de mordeduras, consulta oportuna para PEP); y capacitación recurrente de docentes y equipos locales.",
        impacto: "La sostenibilidad del paquete normativo depende de la conciencia social, que sin marco institucional se deteriora entre generaciones y con los cambios de autoridades ministeriales.",
        componentes_afectados: ["Educación y comunicación", "Sostenibilidad"],
        severidad: "alta"
      },
      {
        id: "h5",
        numero: 5,
        titulo: "Brecha estructural en el nivel subnacional (GAD) y ordenanzas",
        resumen: "Existen 80 ordenanzas con contenidos heterogéneos sin mínimos armonizados.",
        descripcion: "A nivel local existen 80 ordenanzas relacionadas con fauna urbana, tenencia responsable y control animal, pero no se observa un marco mínimo armonizado que asegure ejecución homogénea de acciones, coordinación multisectorial con el MSP y capacidades mínimas para control animal y apoyo a campañas en territorio.",
        impacto: "Se generan 'islas de riesgo': territorios con normativa insuficiente que comprometen las coberturas de vacunación y debilitan la solidez estadística del dossier nacional.",
        componentes_afectados: ["Rol territorial GAD", "Vacunación canina", "Control animal"],
        severidad: "alta"
      },
      {
        id: "h6",
        numero: 6,
        titulo: "Gestión de datos y vigilancia: cuello de botella para certificación",
        resumen: "Brechas en estandarización de registros y trazabilidad de la información.",
        descripcion: "Persisten brechas en la estandarización de registros, trazabilidad y consolidación de información (vacunación canina, vigilancia, PEP, laboratorio). Sin un sistema de evidencias robusto con definiciones, flujos, calidad de datos e indicadores verificables, el país enfrenta dificultades para demostrar desempeño sostenido ante OPS/PANAFTOSA.",
        impacto: "La ausencia de casos puede interpretarse como subnotificación en lugar de eliminación real, invalidando la solicitud de verificación.",
        componentes_afectados: ["Vigilancia", "Laboratorio", "PEP", "Trazabilidad"],
        severidad: "critica"
      }
    ],
    brechas: [
      { titulo: "Ausencia de instrumento integrador", descripcion: "Falta un instrumento que consolide gobernanza, obligaciones verificables, estándares operativos y mecanismos de cumplimiento bajo enfoque Una Salud." },
      { titulo: "Insuficiencia de estándares de vigilancia", descripcion: "Faltan estándares mínimos obligatorios para registro, trazabilidad, interoperabilidad y verificación en vigilancia, PEP, vacunación y laboratorio." },
      { titulo: "Heterogeneidad subnacional", descripcion: "No hay mínimos armonizados para control animal, registro, tenencia responsable y fiscalización a nivel municipal, con coordinación variable MSP–GAD." },
      { titulo: "Ausencia de marco MSP–MINEDUC", descripcion: "Falta un marco formal que institucionalice educación preventiva y comunicación de riesgo como procesos permanentes, medibles y auditables." },
      { titulo: "Brechas en capacidades críticas", descripcion: "Se requieren reglas explícitas para continuidad, aseguramiento de calidad y requisitos operativos de inmunobiológicos y red diagnóstica." }
    ],
    recomendaciones: [
      "Adoptar un instrumento integrador intersectorial para eliminación con enfoque Una Salud (Decreto Ejecutivo).",
      "Desarrollar y actualizar el paquete operativo con lógica de 'carpeta técnica' para producir evidencia verificable (Acuerdo Ministerial).",
      "Establecer estándares mínimos obligatorios para trazabilidad de datos e indicadores de verificación.",
      "Formalizar el marco MSP–MINEDUC para educación y comunicación como eje de sostenibilidad.",
      "Diseñar una Ordenanza Modelo y un paquete mínimo exigible para los 222 GAD municipales (vía AME)."
    ]
  },

  // ── SECCIÓN 3: PAQUETE NORMATIVO ────────────────────────
  paquete: {
    intro: "El paquete normativo materializa en cuatro instrumentos jurídicamente articulados y técnicamente fundamentados las recomendaciones del diagnóstico. Cada instrumento actúa en un nivel normativo diferente y cierra brechas específicas identificadas en el LT1.",
    criterios_diseno: [
      { titulo: "Eficiencia jurídica", descripcion: "Se optó por instrumentos reglamentarios e infralegales (Decreto, Acuerdo, Convenio, Ordenanza) en lugar de reformas legislativas. El marco legal superior ya existe; el programa requiere activar competencias ya otorgadas por ley, no crear nuevas." },
      { titulo: "Exigibilidad vinculante", descripcion: "El paquete transita de la gobernanza colaborativa a la gobernanza vinculante. Cada instrumento asigna responsabilidades con consecuencias jurídicas ante incumplimiento, activando el régimen sancionatorio de la Ley Orgánica de Salud y la LOSA." },
      { titulo: "Respeto a la autonomía municipal", descripcion: "El Convenio MSP–AME y la Ordenanza Modelo operan como instrumentos de asistencia técnica, no de tutela. La autonomía constitucional de los municipios (Arts. 238 y 264 CRE; COOTAD) está preservada en todos los niveles del diseño." },
      { titulo: "Generación de evidencia verificable", descripcion: "Cada instrumento fue diseñado para producir, además de sus efectos normativos, evidencia documental trazable y auditable que alimentará la carpeta técnica de eliminación." }
    ],
    instrumentos: [
      {
        id: "decreto",
        nombre: "Decreto Ejecutivo",
        nivel: "Presidencial",
        nivel_color: "#1A5276",
        icono: "🏛️",
        hito: "Registro Oficial: Abril 2026",
        brecha_cierra: "Fragmentación normativa / ausencia de declaratoria de prioridad nacional",
        fundamento: "Art. 147 num. 5 Constitución (facultad reglamentaria del Presidente); Art. 32 CRE (derecho a la salud); Art. 261 num. 6 CRE (competencia exclusiva del Estado Central sobre políticas sanitarias).",
        descripcion: "Instrumento de mayor jerarquía del paquete. Eleva la eliminación de la RHTP a prioridad de Estado, con efectos vinculantes para todas las instituciones del Ejecutivo: obliga al Ministerio de Economía a garantizar recursos, a AGROCALIDAD a alinearse a los procedimientos intersectoriales y a los GAD a actualizar su normativa local.",
        elementos: [
          "Declaratoria de prioridad nacional de la eliminación RHTP y adopción formal del Plan Regional OPS/PANAFTOSA 2024–2030.",
          "Definición de competencias diferenciadas: MSP (rectoría sanitaria, SIVE, PEP), AGROCALIDAD (sanidad animal, control de focos), INSPI (diagnóstico avanzado, tipificación genética).",
          "Creación del Comité Nacional de Control de Zoonosis con mandato formal, periodicidad obligatoria y productos verificables (MSP, AGROCALIDAD, MINEDUC, Autoridad Ambiental).",
          "Mecanismos de adquisición de biológicos con estándares de calidad (cultivo celular, Fondo Rotatorio OPS). Elimina el riesgo de vacunas de tecnología obsoleta.",
          "Obligatoriedad de notificación inmediata de casos sospechosos en todo el Sistema Nacional de Salud.",
          "Marco de coordinación con GAD municipales respetando la autonomía constitucional.",
          "Disposición transitoria: actualizar manuales técnicos de vigilancia y control en máximo 180 días."
        ]
      },
      {
        id: "acuerdo",
        nombre: "Acuerdo Ministerial MSP",
        nivel: "Ministerial",
        nivel_color: "#0A9396",
        icono: "📋",
        hito: "Publicación: Junio 2026 | Período transitorio: 180 días",
        brecha_cierra: "Gobernanza insuficiente / vacíos en estándares técnicos de biológicos, vigilancia, laboratorio y PEP",
        fundamento: "Art. 154 CRE (facultad ministerial para expedir normas); Arts. 4 y 6 LOS (rectoría sanitaria, obligatoriedad de inmunizaciones); compromisos internacionales OMS y OMSA.",
        descripcion: "Convierte el mandato presidencial en procedimientos operativos verificables dentro del MSP. Mientras el Decreto define la arquitectura institucional, el Acuerdo especifica cómo se ejecutan los procesos críticos y qué evidencia debe producirse para cada uno.",
        elementos: [
          "Gobernanza vinculante: formalización del Comité Nacional de Control de Zoonosis con periodicidad trimestral, quórum decisorio, actas verificables y diccionario de datos común (SIVE–SIZSE–GAD).",
          "Vigilancia sensible: obligatoriedad del reporte de casos sospechosos incluyendo resultados negativos (evidencia de ausencia de circulación viral).",
          "Laboratorio INSPI: tipificación genética rutinaria obligatoria en todas las muestras positivas, con tiempos de respuesta (TAT) definidos y cadena de custodia documentada.",
          "PEP: garantía de acceso universal y gratuito a vacunas de cultivo celular e inmunoglobulina (RIG), con registro nominal de cada esquema.",
          "Vacunación canina/felina: meta del 80 % como obligación verificable; reporte mensual obligatorio del sector veterinario privado.",
          "Prohibición explícita de vacunas de tejido nervioso: cierra la 'trampa de contratación pública'.",
          "Régimen sancionatorio: definición expresa de infracciones vinculadas a la Ley Orgánica de Salud y la LOSA."
        ]
      },
      {
        id: "convenio",
        nombre: "Convenio de Cooperación MSP–AME",
        nivel: "Interinstitucional",
        nivel_color: "#EE9B00",
        icono: "🤝",
        hito: "Firma: Junio 2026 | Mesas técnicas activas: Julio–Diciembre 2026",
        brecha_cierra: "Variabilidad subnacional / coordinación MSP–GAD sin instrumento formal",
        fundamento: "Art. 226 CRE (cooperación interinstitucional); Código Orgánico Administrativo (colaboración administrativa); AME como entidad de articulación y representación de los 222 GAD.",
        descripcion: "Habilita el vínculo formal entre el programa nacional y los 222 GAD municipales, que son los ejecutores territoriales de componentes críticos. Sin este instrumento, la coordinación continúa dependiendo de acuerdos ad hoc con la fragmentación documentada en el LT1.",
        elementos: [
          "Asistencia técnica para actualización normativa municipal: el MSP provee lineamientos; la AME articula la convocatoria y socialización con los 222 GAD.",
          "Paquete Normativo Mínimo Armonizado: Ordenanza Municipal Modelo + lineamientos técnico-jurídicos para actualización normativa sobre rabia, fauna urbana y tenencia responsable.",
          "Rutas de coordinación MSP–AME–GAD para vigilancia, respuesta a focos y comunicación de riesgo, con formatos mínimos de registro compatibles con los sistemas nacionales.",
          "Mesas Técnicas MSP–AME–GAD: instancias de planificación conjunta y validación de productos, documentadas mediante actas y matrices de seguimiento.",
          "Mecanismos de generación de evidencia para la carpeta técnica: instrumentos producidos compatibles con estándares de trazabilidad del programa."
        ]
      },
      {
        id: "ordenanza",
        nombre: "Ordenanza Municipal Modelo",
        nivel: "Municipal",
        nivel_color: "#2D6A4F",
        icono: "🏘️",
        hito: "Meta: >50 % de GAD con ordenanza aprobada o en trámite — Diciembre 2026",
        brecha_cierra: "Heterogeneidad subnacional sin mínimos armonizados para control animal, registro y fiscalización",
        fundamento: "Arts. 238 y 264 CRE; Arts. 7, 57, 54 lit. r, 136 y 322 COOTAD; Arts. 139 y 144 Código Orgánico del Ambiente; Art. 123 LOS.",
        descripcion: "Instrumento estandarizado que los GAD pueden adoptar en ejercicio de su autonomía constitucional, adaptándolo a sus particularidades locales sin afectar los mínimos exigibles. Responde a la existencia de 80 ordenanzas municipales con contenidos heterogéneos que generan 'islas de riesgo'.",
        elementos: [
          "Principios rectores: enfoque Una Salud, prevención y vigilancia prioritaria, bienestar animal (Cinco Libertades) y corresponsabilidad intersectorial.",
          "Autoridad Municipal Responsable (AMR) con funciones definidas y Centro de Acogida Temporal (CAT) para rescate, evaluación, esterilización y reubicación de animales.",
          "Meta de cobertura vacunal del 80 % como obligación municipal expresa, con uso exclusivo de vacunas de cultivo celular y cadena de frío documentada.",
          "Registro Municipal de Mascotas: sistema de identificación como denominador verificable para el cálculo de cobertura.",
          "Protocolo ante sospecha de rabia: notificación inmediata al MSP y AGROCALIDAD, aislamiento del animal agresor, toma y envío de muestras.",
          "Régimen de fiscalización, infracciones y sanciones con herramientas jurídicas para exigir vacunación y cumplimiento de tenencia responsable.",
          "Articulación con sector veterinario privado local: mecanismos para incorporar datos de vacunación privada al registro municipal."
        ]
      }
    ],
    tabla_brechas: [
      { brecha: "Fragmentación normativa / prioridad de Estado", instrumento: "Decreto Ejecutivo", nivel: "Presidencial" },
      { brecha: "Gobernanza insuficiente / vacíos técnicos", instrumento: "Acuerdo Ministerial", nivel: "Ministerial" },
      { brecha: "Variabilidad subnacional / coordinación MSP–GAD", instrumento: "Convenio MSP–AME", nivel: "Interinstitucional" },
      { brecha: "Heterogeneidad normativa municipal", instrumento: "Ordenanza Municipal Modelo", nivel: "Municipal" },
      { brecha: "Educación y comunicación sin marco formal", instrumento: "Acuerdo Ministerial + Ordenanza", nivel: "Multi-nivel" }
    ]
  },

  // ── SECCIÓN 4: ACTORES ──────────────────────────────────
  actores: [
    {
      id: "msp",
      nombre: "Ministerio de Salud Pública",
      sigla: "MSP",
      tipo: "obligado_primario",
      tipo_label: "Actor Obligado",
      color: "#1A5276",
      icono: "🏥",
      rol: "Rector sanitario del programa de eliminación RHTP.",
      competencias: [
        "Rectoría sanitaria, vigilancia SIVE-Alerta",
        "Garantía de acceso universal a PEP (vacunas y RIG)",
        "Comunicación educativa y coordinación con MINEDUC",
        "Conducción de campañas de vacunación masiva canina/felina",
        "Activación del régimen sancionatorio ante incumplimientos"
      ],
      evidencia_critica: "Notificaciones de casos, registros de PEP, reportes de vacunación, actas del Comité Zoonosis, dossier técnico.",
      participantes: ["Ana J. Sánchez P. — Punto focal / Especialista", "Lucas Salazar — Dirección Jurídica"]
    },
    {
      id: "agrocalidad",
      nombre: "AGROCALIDAD",
      sigla: "AGROCALIDAD",
      tipo: "obligado_primario",
      tipo_label: "Actor Obligado",
      color: "#2D6A4F",
      icono: "🐾",
      rol: "Autoridad nacional de sanidad animal. Co-responsable de la vigilancia 'Una Salud'.",
      competencias: [
        "Sanidad animal y control sanitario de la población canina",
        "Control de focos: investigación conjunta con MSP en máximo 24 horas",
        "Vigilancia silvestre de rabia (variantes V3–V9)",
        "Gestión del sistema SIZSE de vigilancia animal",
        "Participación en el Comité Nacional de Control de Zoonosis"
      ],
      evidencia_critica: "Reportes de vigilancia animal, resultados de control de focos, registros del sistema SIZSE, muestras con cadena de custodia.",
      participantes: ["Gabriel Andino — Delegado técnico (gabriel.andino@agrocalidad.gob.ec)"]
    },
    {
      id: "inspi",
      nombre: "INSPI",
      sigla: "INSPI",
      tipo: "obligado_primario",
      tipo_label: "Actor Obligado",
      color: "#6C3483",
      icono: "🧬",
      rol: "Red diagnóstica nacional. Laboratorio de referencia para tipificación genética y aseguramiento de calidad.",
      competencias: [
        "Diagnóstico avanzado de rabia (IFD, RT-PCR)",
        "Tipificación genética rutinaria de todas las muestras positivas",
        "Aseguramiento de calidad diagnóstica (TAT definidos, cadena de custodia)",
        "Vigilancia de variantes virales (V1/V2 caninas vs. silvestres)",
        "Soporte técnico al sistema de vigilancia integrado"
      ],
      evidencia_critica: "Resultados diagnósticos con tipificación, tiempos de respuesta, reportes de desempeño de laboratorio, auditorías de calidad.",
      participantes: ["Emilio Paúl Ochoa Mejía (MVZ) — Analista de Laboratorio, Coord. Zonal 6"]
    },
    {
      id: "mineduc",
      nombre: "Ministerio de Educación",
      sigla: "MINEDUC",
      tipo: "corresponsable",
      tipo_label: "Actor Corresponsable",
      color: "#D68910",
      icono: "📚",
      rol: "Institución corresponsable del eje de sostenibilidad: educación preventiva y comunicación de riesgo.",
      competencias: [
        "Inserción de educación preventiva sobre rabia en el currículo escolar",
        "Capacitación de docentes en prevención de mordeduras y tenencia responsable",
        "Comunicación de riesgo mediante canales educativos institucionales",
        "Articulación territorial con unidades educativas para campañas comunitarias",
        "Elaboración de materiales educativos oficiales con el MSP"
      ],
      evidencia_critica: "Registros de actividades educativas, materiales oficiales aprobados, cobertura escolar, número de docentes capacitados.",
      participantes: [
        "Johanna Ortiz — Dir. de Gestión de Riesgos",
        "Peggy Vinueza Noboa — Dir. Ciudadanía y Convivencia (peggy.vinueza@educacion.gob.ec)"
      ]
    },
    {
      id: "gad",
      nombre: "GAD Municipales (222)",
      sigla: "GAD",
      tipo: "corresponsable",
      tipo_label: "Actor Corresponsable",
      color: "#117A65",
      icono: "🏘️",
      rol: "Ejecutores territoriales de los componentes que determinan coberturas verificables.",
      competencias: [
        "Control de fauna urbana y gestión de perros vagabundos",
        "Registro municipal de mascotas (denominadores de cobertura)",
        "Apoyo logístico a campañas de vacunación canina/felina",
        "Fiscalización y sanción por incumplimiento de tenencia responsable",
        "Articulación con veterinaria privada local para integrar datos de vacunación"
      ],
      evidencia_critica: "Ordenanzas municipales aprobadas, registros de mascotas, reportes de vacunación territorial, actas de Mesas Técnicas, datos de fiscalización.",
      participantes: ["Dra. Karina Pizco / Dr. Diego Morales — UBA Municipio de Quito"]
    },
    {
      id: "ame",
      nombre: "AME",
      sigla: "AME",
      tipo: "corresponsable",
      tipo_label: "Actor Corresponsable",
      color: "#1A5276",
      icono: "🔗",
      rol: "Articulador y representante de los 222 GAD municipales ante el gobierno central.",
      competencias: [
        "Canal de difusión de la Ordenanza Municipal Modelo a todos los GAD",
        "Convocatoria y coordinación de Mesas Técnicas MSP–AME–GAD",
        "Asistencia técnica para actualización normativa municipal",
        "Interlocución institucional entre MSP y municipios",
        "Seguimiento del avance de adopción de ordenanzas en el territorio"
      ],
      evidencia_critica: "Listado de GAD con ordenanza aprobada/en trámite, actas de mesas técnicas, reportes de socialización territorial.",
      participantes: ["Johana Peralta — Abogada / Delegada, Dirección Nacional Jurídica"]
    },
    {
      id: "academia",
      nombre: "Academia",
      sigla: "Academia",
      tipo: "soporte",
      tipo_label: "Actor de Soporte",
      color: "#7D3C98",
      icono: "🎓",
      rol: "Soporte operativo mediante convenios de brigadas estudiantiles y capacitación técnica.",
      competencias: [
        "Brigadas de vacunación canina con estudiantes de veterinaria y salud",
        "Investigación epidemiológica aplicada al programa",
        "Capacitación de recursos humanos en técnicas de diagnóstico y vigilancia",
        "Vinculación comunitaria para educación y tenencia responsable",
        "Estándares operativos para vacunación en el sector privado"
      ],
      evidencia_critica: "Convenios activos, número de estudiantes participantes, dosis de vacunación aplicadas en brigadas, publicaciones científicas.",
      participantes: ["UDLA — Vinculación Comunitaria", "UCE — Facultad de Veterinaria", "UTE", "USFQ — Dir. Pequeñas Especies (Christian Giraldo)"]
    },
    {
      id: "giz",
      nombre: "GIZ",
      sigla: "GIZ",
      tipo: "cooperacion",
      tipo_label: "Cooperación Técnica",
      color: "#566573",
      icono: "🌍",
      rol: "Cooperación técnica internacional con enfoque One Health y preparación ante epidemias.",
      competencias: [
        "Asesoría técnica en enfoque One Health y gobernanza intersectorial",
        "Articulación con redes internacionales de salud (SEEG, PANFTOSA)",
        "Apoyo metodológico al proceso de construcción del dossier de eliminación",
        "Vinculación con mecanismos de cooperación alemana e internacional",
        "Apoyo a la hoja de ruta de implementación normativa"
      ],
      evidencia_critica: "Informes de asesoría técnica, participación en mesas de trabajo, insumos para el dossier de eliminación.",
      participantes: ["Dr. Niklas Weber — Advisor One Health (niklas.weber@giz.de)"]
    },
    {
      id: "boehringer",
      nombre: "Boehringer Ingelheim",
      sigla: "Boehringer",
      tipo: "cooperacion",
      tipo_label: "Promotor Estratégico",
      color: "#AE2012",
      icono: "💊",
      rol: "Empresa promotora de la consultoría legal. Observador estratégico y articulador del proyecto.",
      competencias: [
        "Financiamiento y gestión de la consultoría legal",
        "Articulación estratégica entre el equipo consultor y el MSP",
        "Apoyo en la difusión de los productos normativos",
        "Coordinación logística del proceso de socialización (talleres)",
        "Vínculo con organizaciones internacionales de salud animal"
      ],
      evidencia_critica: "Informes de avance de la consultoría, actas de reuniones de coordinación, materiales de difusión.",
      participantes: ["Cristina Arteta — Gerente de Asuntos Corporativos"]
    }
  ],

  // ── SECCIÓN 5: HOJA DE RUTA ─────────────────────────────
  hoja_de_ruta: {
    intro: "La hoja de ruta de adopción e implementación organiza el proceso de adopción del paquete normativo en cuatro fases secuenciales entre marzo y diciembre de 2026, respetando la lógica de jerarquía normativa: el Decreto Ejecutivo crea el marco habilitante para los instrumentos inferiores, y cada fase produce evidencia verificable para la carpeta técnica de eliminación.",
    meta_anual: "Al cierre del año 2026: Decreto Ejecutivo vigente + Acuerdo Ministerial con período transitorio en curso + Convenio MSP–AME en ejecución activa + más del 50 % de GAD municipales con ordenanza aprobada o en trámite avanzado.",
    fases: [
      {
        id: "fase1",
        numero: 1,
        nombre: "Decreto Ejecutivo",
        periodo: "Marzo – Abril 2026",
        color: "#1A5276",
        icono: "🏛️",
        hito: "Decreto Ejecutivo publicado en el Registro Oficial",
        fecha_hito: "Abril 2026",
        brecha_cierra: "Fragmentación normativa / ausencia de declaratoria de prioridad nacional",
        responsable_lider: "Presidencia de la República / MSP",
        descripcion: "Fase de mayor jerarquía normativa. El Decreto Ejecutivo fija la prioridad política de Estado y crea la arquitectura institucional sobre la cual operan todos los demás instrumentos.",
        pasos: [
          {
            id: "f1-p1",
            numero: 1,
            titulo: "Elaborar informe técnico-jurídico habilitante",
            descripcion: "Preparar el informe técnico que sustenta la necesidad del Decreto, con análisis jurídico de pertinencia y viabilidad, y presentarlo a la Secretaría Jurídica de la Presidencia junto al borrador final del Decreto.",
            responsable: "MSP + Equipo Consultor",
            plazo: "Marzo 2026",
            evidencia: "Informe técnico-jurídico + borrador del Decreto con exposición de motivos",
            base_legal: "Art. 147 num. 5 CRE"
          },
          {
            id: "f1-p2",
            numero: 2,
            titulo: "Revisión por Secretaría Jurídica de la Presidencia",
            descripcion: "La Secretaría Jurídica de la Presidencia revisa la conformidad constitucional y legal del borrador del Decreto y emite su informe de viabilidad.",
            responsable: "Secretaría Jurídica de la Presidencia",
            plazo: "Marzo 2026",
            evidencia: "Informe jurídico favorable de la Secretaría de la Presidencia",
            base_legal: "ERJAFE; COA Arts. 7 y 14"
          },
          {
            id: "f1-p3",
            numero: 3,
            titulo: "Incorporación de observaciones y versión final",
            descripcion: "Integrar las observaciones de la Secretaría Jurídica al texto del Decreto. Preparar la versión definitiva para firma presidencial.",
            responsable: "MSP + Equipo Consultor",
            plazo: "Finales de Marzo 2026",
            evidencia: "Versión final del Decreto con trazabilidad de cambios",
            base_legal: ""
          },
          {
            id: "f1-p4",
            numero: 4,
            titulo: "Firma presidencial del Decreto",
            descripcion: "El Presidente de la República firma el Decreto Ejecutivo en ejercicio de su facultad reglamentaria constitucional.",
            responsable: "Presidencia de la República",
            plazo: "Abril 2026",
            evidencia: "Decreto firmado y numerado",
            base_legal: "Art. 147 num. 5 CRE"
          },
          {
            id: "f1-p5",
            numero: 5,
            titulo: "Registro y publicación en el Registro Oficial",
            descripcion: "Remisión del Decreto al Registro Oficial para su publicación y entrada en vigencia.",
            responsable: "Secretaría General de la Presidencia",
            plazo: "Abril 2026",
            evidencia: "Número de Registro Oficial + fecha de publicación",
            base_legal: "Art. 164 CRE"
          }
        ]
      },
      {
        id: "fase2",
        numero: 2,
        nombre: "Acuerdo Ministerial MSP",
        periodo: "Abril – Junio 2026",
        color: "#0A9396",
        icono: "📋",
        hito: "Acuerdo Ministerial publicado en el Registro Oficial",
        fecha_hito: "Junio 2026 (período transitorio: 180 días)",
        brecha_cierra: "Gobernanza intersectorial insuficiente / vacíos en estándares técnicos",
        responsable_lider: "Ministerio de Salud Pública",
        descripcion: "El Acuerdo Ministerial aterriza el Decreto en procedimientos operativos verificables dentro del ámbito del MSP. Obliga al sector privado veterinario y activa el régimen sancionatorio ante incumplimientos de notificación.",
        pasos: [
          {
            id: "f2-p1",
            numero: 1,
            titulo: "Revisión técnica interna con equipos del MSP",
            descripcion: "Socialización del borrador del Acuerdo Ministerial con los equipos técnicos del MSP (Vigilancia Epidemiológica, PEP, Laboratorio, Comunicación) para validar su viabilidad operativa.",
            responsable: "MSP — Direcciones Técnicas",
            plazo: "Abril 2026",
            evidencia: "Matriz de comentarios técnicos internos completada",
            base_legal: ""
          },
          {
            id: "f2-p2",
            numero: 2,
            titulo: "Socialización con actores institucionales clave",
            descripcion: "Taller de socialización con AGROCALIDAD, INSPI y representantes del sector veterinario privado para recoger observaciones y asegurar coherencia operativa.",
            responsable: "MSP + Equipo Consultor",
            plazo: "Abril–Mayo 2026",
            evidencia: "Acta del taller + Matriz de comentarios por institución",
            base_legal: ""
          },
          {
            id: "f2-p3",
            numero: 3,
            titulo: "Informe favorable de la Dirección Jurídica del MSP",
            descripcion: "La Dirección Jurídica del MSP revisa la conformidad del Acuerdo con la normativa superior (Constitución, LOS, LOSA) y emite su informe habilitante.",
            responsable: "MSP — Dirección Jurídica (Lucas Salazar)",
            plazo: "Mayo 2026",
            evidencia: "Informe jurídico favorable de la Dirección Jurídica del MSP",
            base_legal: "Art. 154 CRE; LOS Arts. 4 y 6"
          },
          {
            id: "f2-p4",
            numero: 4,
            titulo: "Firma del Ministro/a de Salud Pública",
            descripcion: "La máxima autoridad del MSP firma el Acuerdo Ministerial.",
            responsable: "Ministro/a de Salud Pública",
            plazo: "Junio 2026",
            evidencia: "Acuerdo Ministerial firmado y numerado",
            base_legal: "Art. 154 CRE"
          },
          {
            id: "f2-p5",
            numero: 5,
            titulo: "Publicación en el Registro Oficial e inicio del período transitorio",
            descripcion: "Publicación del Acuerdo en el Registro Oficial. Inicio del período transitorio de 180 días para que las instituciones obligadas adecúen sus procedimientos.",
            responsable: "MSP — Secretaría General",
            plazo: "Junio 2026",
            evidencia: "Número de RO + comunicación oficial a instituciones sobre el período transitorio",
            base_legal: "Art. 164 CRE"
          }
        ]
      },
      {
        id: "fase3",
        numero: 3,
        nombre: "Convenio de Cooperación MSP–AME",
        periodo: "Mayo – Junio 2026",
        color: "#EE9B00",
        icono: "🤝",
        hito: "Convenio MSP–AME firmado y mesas técnicas activas",
        fecha_hito: "Firma: Junio 2026 | Mesas técnicas: Julio–Diciembre 2026",
        brecha_cierra: "Variabilidad subnacional / coordinación MSP–GAD sin instrumento formal",
        responsable_lider: "MSP + AME",
        descripcion: "El Convenio puede tramitarse en paralelo a la Fase 2, aprovechando el período de socialización del Acuerdo Ministerial. Su proceso requiere menor número de pasos formales pero demanda planificación cuidadosa de la estrategia territorial.",
        pasos: [
          {
            id: "f3-p1",
            numero: 1,
            titulo: "Apertura formal de negociación técnica MSP–AME",
            descripcion: "Reunión de apertura entre MSP y AME para presentar el borrador del Convenio, identificar contrapartes técnicas en la AME y definir el cronograma de negociación.",
            responsable: "MSP + AME",
            plazo: "Mayo 2026",
            evidencia: "Acta de reunión de apertura + identificación de equipo técnico AME",
            base_legal: "Art. 226 CRE; COA"
          },
          {
            id: "f3-p2",
            numero: 2,
            titulo: "Ajuste del texto del Convenio según observaciones de AME",
            descripcion: "Incorporación de las observaciones técnicas y jurídicas de la AME al texto del Convenio, asegurando que el instrumento sea operativo y respete la autonomía municipal.",
            responsable: "MSP + Equipo Consultor + AME — Dirección Jurídica",
            plazo: "Mayo 2026",
            evidencia: "Versión ajustada del Convenio con trazabilidad de cambios",
            base_legal: ""
          },
          {
            id: "f3-p3",
            numero: 3,
            titulo: "Revisión jurídica conjunta MSP–AME",
            descripcion: "Ambas instituciones validan la conformidad jurídica del texto final con el ordenamiento ecuatoriano, especialmente la COOTAD y el principio de autonomía municipal.",
            responsable: "Dirección Jurídica MSP + Dirección Jurídica AME (Johana Peralta)",
            plazo: "Finales de Mayo 2026",
            evidencia: "Informes jurídicos favorables de ambas instituciones",
            base_legal: "Arts. 238 y 264 CRE; COOTAD"
          },
          {
            id: "f3-p4",
            numero: 4,
            titulo: "Firma institucional MSP–AME y registro",
            descripcion: "Firma del Convenio por las máximas autoridades del MSP y la AME. Registro del instrumento en ambas instituciones.",
            responsable: "Ministro/a de Salud + Presidente/a de la AME",
            plazo: "Junio 2026",
            evidencia: "Convenio firmado y registrado en ambas instituciones",
            base_legal: ""
          },
          {
            id: "f3-p5",
            numero: 5,
            titulo: "Activación de las primeras Mesas Técnicas MSP–AME–GAD",
            descripcion: "Convocatoria y realización de las primeras mesas técnicas, priorizando cantones con mayor riesgo epidemiológico para iniciar el proceso de socialización de la Ordenanza Modelo.",
            responsable: "MSP + AME",
            plazo: "Julio 2026",
            evidencia: "Actas de mesas técnicas + lista de GAD prioritarios con cronograma de socialización",
            base_legal: ""
          }
        ]
      },
      {
        id: "fase4",
        numero: 4,
        nombre: "Ordenanza Municipal Modelo — GAD",
        periodo: "Julio – Diciembre 2026",
        color: "#2D6A4F",
        icono: "🏘️",
        hito: ">50 % de GAD con ordenanza aprobada o en trámite avanzado",
        fecha_hito: "Diciembre 2026",
        brecha_cierra: "Heterogeneidad normativa municipal / 'islas de riesgo' en el territorio",
        responsable_lider: "GAD Municipales + AME + MSP",
        descripcion: "La Fase 4 es la de mayor alcance territorial: implica activar el proceso de adopción normativa en 222 municipios. La estrategia prioriza primero los cantones de mayor riesgo epidemiológico.",
        pasos: [
          {
            id: "f4-p1",
            numero: 1,
            titulo: "Distribución de la Ordenanza Modelo a todos los GAD vía AME",
            descripcion: "La AME distribuye el texto de la Ordenanza Municipal Modelo a los 222 GAD municipales, acompañado de una guía de adopción y el calendario de talleres de socialización.",
            responsable: "AME",
            plazo: "Julio 2026",
            evidencia: "Registro de distribución + confirmación de recepción por GAD",
            base_legal: ""
          },
          {
            id: "f4-p2",
            numero: 2,
            titulo: "Talleres de socialización con municipios prioritarios",
            descripcion: "Talleres técnico-jurídicos con los GAD de mayor riesgo epidemiológico (zonas con antecedentes de circulación viral, fronterizas o con heterogeneidad normativa documentada). Participan técnicos municipales, asesores jurídicos de los concejos y representantes del MSP.",
            responsable: "MSP + AME + Equipo Consultor",
            plazo: "Julio–Agosto 2026",
            evidencia: "Actas de talleres + lista de asistencia + observaciones recibidas por GAD",
            base_legal: ""
          },
          {
            id: "f4-p3",
            numero: 3,
            titulo: "Presentación formal al Concejo Municipal (primer debate)",
            descripcion: "Cada GAD inicia el proceso de aprobación de la ordenanza en su Concejo Municipal mediante la presentación formal del proyecto de ordenanza, motivada en la Ordenanza Modelo y en el mandato del Decreto Ejecutivo.",
            responsable: "Alcalde/sa + Concejo Municipal (por cada GAD)",
            plazo: "Agosto–Septiembre 2026",
            evidencia: "Providencia de admisión del proyecto de ordenanza por el Concejo",
            base_legal: "Art. 322 COOTAD; Art. 57 COOTAD"
          },
          {
            id: "f4-p4",
            numero: 4,
            titulo: "Debate en comisiones y segundo debate en el Concejo",
            descripcion: "Las comisiones del Concejo Municipal analizan el proyecto, formulan observaciones y presentan su informe. El Concejo realiza el segundo debate y somete a votación la ordenanza.",
            responsable: "Concejo Municipal (por cada GAD)",
            plazo: "Septiembre–Noviembre 2026",
            evidencia: "Informe de comisión + acta de aprobación en segundo debate",
            base_legal: "Art. 322 COOTAD"
          },
          {
            id: "f4-p5",
            numero: 5,
            titulo: "Sanción por el/la Alcalde/sa y promulgación",
            descripcion: "El/la Alcalde/sa sanciona (promulga) u observa la ordenanza en el plazo de 8 días. En caso de observación, el Concejo puede insistir con mayoría calificada. La ordenanza sancionada entra en vigencia.",
            responsable: "Alcalde/sa de cada GAD",
            plazo: "Octubre–Noviembre 2026",
            evidencia: "Ordenanza sancionada y publicada en medios de comunicación locales",
            base_legal: "Art. 322 COOTAD (plazo 8 días)"
          },
          {
            id: "f4-p6",
            numero: 6,
            titulo: "Reporte consolidado y verificación del hito anual",
            descripcion: "MSP y AME consolidan el listado de GAD con ordenanza aprobada o en trámite avanzado. Se verifica el cumplimiento del hito: >50 % de los 222 GAD con proceso normativo iniciado o completado.",
            responsable: "MSP + AME",
            plazo: "Diciembre 2026",
            evidencia: "Informe consolidado con estado por GAD + porcentaje de avance hacia el hito del dossier",
            base_legal: ""
          }
        ]
      }
    ],
    indicadores: [
      { id: "ind1", descripcion: "Decreto Ejecutivo publicado en el Registro Oficial", responsable: "Presidencia / MSP", fecha: "Abril 2026" },
      { id: "ind2", descripcion: "Acuerdo Ministerial publicado en el Registro Oficial", responsable: "MSP", fecha: "Junio 2026" },
      { id: "ind3", descripcion: "Convenio MSP–AME firmado y registrado", responsable: "MSP + AME", fecha: "Junio 2026" },
      { id: "ind4", descripcion: "Comité Nacional de Control de Zoonosis constituido y con primera sesión documentada", responsable: "MSP", fecha: "Julio 2026" },
      { id: "ind5", descripcion: "Mesas Técnicas MSP–AME–GAD activas (mínimo 3 mesas realizadas)", responsable: "MSP + AME", fecha: "Septiembre 2026" },
      { id: "ind6", descripcion: "Porcentaje de GAD con ordenanza aprobada o en trámite avanzado", responsable: "AME", fecha: "Diciembre 2026" },
      { id: "ind7", descripcion: "Sistema de registro y trazabilidad operativo (SIVE–SIZSE interoperables)", responsable: "MSP + AGROCALIDAD", fecha: "Diciembre 2026" },
      { id: "ind8", descripcion: "Informe de avance de la carpeta técnica para el proceso de validación", responsable: "MSP + OPS", fecha: "Diciembre 2026" }
    ]
  }
};
