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
    equipo: "Dr. Santiago Pinto Zaldumbide · Abg. Héctor Muñoz Alarcón · Abg. Alvaro Orellana · Abg. Lorena Rincón",
    fecha: "Marzo 2026"
  },
  documentacion: {
    titulo: "Base documental y fecha de corte",
    intro: "Este sitio sintetiza y organiza el contenido desarrollado en los productos de la consultoría legal para la eliminación de la rabia humana transmitida por perros en Ecuador, elaborados en 2026. La fecha de corte documental corresponde al cierre de dichos productos y sirve como referencia para interpretar el alcance de los hallazgos, propuestas normativas y hoja de ruta aquí presentados.",
    productos: [
      { id: "P1", nombre: "Producto 1", desc: "Diagnóstico normativo y de gobernanza", fecha: "Enero 2026" },
      { id: "P2", nombre: "Producto 2", desc: "Paquete normativo", fecha: "Febrero 2026" },
      { id: "P34", nombre: "Productos 3 y 4", desc: "Paquete normativo ajustado y hoja de ruta de adopción e implementación", fecha: "Marzo 2026" }
    ],
    fecha_corte: "Marzo 2026"
  },
  catalogo_revisado: {
    titulo: "Catálogo de instrumentos normativos revisados",
    intro: "El diagnóstico normativo (Producto 1) analizó el universo de instrumentos vigentes. Este catálogo presenta una selección de los más relevantes para la estrategia de eliminación de la RHTP, organizados por jerarquía y pertinencia.",
    instrumentos: [
      {
        nombre: "Constitución de la República del Ecuador",
        tipo: "Constitución",
        relevancia: "Marco supremo que garantiza el derecho a la salud (Art. 32) y establece competencias del Estado Central (Art. 261.6) y GAD (Art. 264) en materia de salud y ambiente."
      },
      {
        nombre: "Ley Orgánica de Salud (LOS)",
        tipo: "Ley Orgánica",
        relevancia: "Define la rectoría del MSP (Art. 4), la obligatoriedad de inmunizaciones (Art. 6) y el régimen sancionatorio en salud pública."
      },
      {
        nombre: "Código Orgánico de Organización Territorial, Autonomía y Descentralización (COOTAD)",
        tipo: "Código Orgánico",
        relevancia: "Establece la autonomía de los GAD municipales (Art. 5) y sus competencias en gestión ambiental y salubridad (Art. 55), incluyendo el control de fauna urbana."
      },
      {
        nombre: "Ley Orgánica de Sanidad Animal (LOSA)",
        tipo: "Ley Orgánica",
        relevancia: "Regula la sanidad animal, incluyendo la prevención y control de enfermedades zoonóticas como la rabia, y asigna competencias a AGROCALIDAD."
      },
      {
        nombre: "Reglamento a la Ley Orgánica de Salud",
        tipo: "Reglamento",
        relevancia: "Desarrolla disposiciones de la LOS, incluyendo aspectos de vigilancia epidemiológica y control de enfermedades transmisibles."
      },
      {
        nombre: "Acuerdo Ministerial 00000001 (MSP)",
        tipo: "Acuerdo Ministerial",
        relevancia: "Establece el Esquema Nacional de Vacunación y las normas para su aplicación, incluyendo la vacunación antirrábica humana."
      },
      {
        nombre: "Acuerdo Ministerial 00000002 (MSP)",
        tipo: "Acuerdo Ministerial",
        relevancia: "Normativa para la vigilancia epidemiológica de enfermedades zoonóticas, incluyendo la rabia, y los procedimientos de notificación."
      },
      {
        nombre: "Reglamento de Bioseguridad para Laboratorios (INSPI)",
        tipo: "Reglamento Técnico",
        relevancia: "Establece los estándares de bioseguridad y procedimientos para el manejo de muestras biológicas, incluyendo las de rabia."
      },
      {
        nombre: "Ordenanzas Municipales de Control de Fauna Urbana",
        tipo: "Ordenanza Municipal",
        relevancia: "Regulaciones locales sobre tenencia responsable de animales, registro, vacunación canina y control de poblaciones, con gran variabilidad entre GAD."
      }
    ]
  },
  fecha: "Marzo 2026",
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
      { valor: ">100", etiqueta: "Instrumentos normativos vigentes inventariados en el diagnóstico" },
      { valor: "222", etiqueta: "GAD municipales que deben adoptar la Ordenanza Modelo" },
      { valor: "80 %", etiqueta: "Meta de cobertura de vacunación canina exigida por OPS/PANAFTOSA" },
      { valor: "2030", etiqueta: "Horizonte de validación de eliminación ante OPS/PANAFTOSA" }
    ]
  },

  // ── SECCIÓN 2: DIAGNÓSTICO NORMATIVO ────────────────────
  diagnostico: {
    intro: "El Producto 1 (LT1) constituye el diagnóstico normativo y de gobernanza aplicable a la hoja de ruta de la estrategia nacional. Se analizaron los instrumentos normativos vigentes bajo tres criterios: aplicabilidad, exigibilidad y coherencia, contrastados con el estándar regional OPS/PANAFTOSA. El diagnóstico identificó 8 hallazgos críticos y 9 brechas estructurales.",
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
        id: "h3",
        numero: 2,
        titulo: "Gobernanza intersectorial 'Una Salud' insuficientemente institucionalizada",
        resumen: "Aunque hay experiencias de coordinación, el esquema de articulación interinstitucional no está formalizado.",
        descripcion: "Aunque existen experiencias de coordinación, el esquema de articulación interinstitucional no se encuentra formalizado de modo consistente: faltan instancias con mandato explícito, procesos decisorios definidos y mecanismos de seguimiento. Esto debilita la sostenibilidad y la trazabilidad requeridas para auditoría y validación.",
        impacto: "La coordinación MSP–AGROCALIDAD–INSPI depende de personas y voluntades, expuesta a discontinuidad por rotación de autoridades y cambios de prioridades.",
        componentes_afectados: ["Gobernanza", "Control de focos", "Vigilancia"],
        severidad: "critica"
      },
      {
        id: "h5",
        numero: 3,
        titulo: "Brecha en capacidad diagnóstica confirmatorio: ausencia de mandato para tipificación genética",
        resumen: "Ecuador carece de norma jurídica que obligue al INSPI a realizar tipificación genética (nivel 2) del 100 % de muestras positivas.",
        descripcion: "El Ecuador dispone de diagnóstico de nivel 1 mediante inmunofluorescencia directa (IFD), técnica que entrega un resultado binario positivo/negativo y es suficiente para la decisión clínica inmediata. Sin embargo, no existe norma jurídica explícita que ordene al INSPI realizar la tipificación genética (nivel 2) del 100 % de las muestras positivas. Esta es la única prueba que permite distinguir entre variante canina (V1/V2) y variante silvestre (ej. murciélago), distinción que la OPS/PANAFTOSA exige para certificar el estatus de eliminación.",
        impacto: "Un país puede tener cero muertes humanas y aun así no obtener la certificación si no puede demostrar, con trazabilidad genética, que la ausencia de casos se debe a ausencia de circulación de variante canina y no a zonas ciegas del sistema.",
        conexion_normativa: "Acuerdo Ministerial MSP (Producto 4) — Art. 6: obliga al INSPI a realizar caracterización antigénica y/o tipificación genética del 100 % de las muestras positivas.",
        componentes_afectados: ["Laboratorio", "Vigilancia", "Trazabilidad"],
        severidad: "critica"
      },
      {
        id: "h7",
        numero: 4,
        titulo: "Gestión de datos y vigilancia: cuello de botella para la eliminación",
        resumen: "Brechas en estandarización de registros y trazabilidad de la información.",
        descripcion: "Persisten brechas en la estandarización de registros, trazabilidad y consolidación de información (vacunación canina, vigilancia, PEP, laboratorio). Sin un sistema de evidencias robusto con definiciones, flujos, calidad de datos e indicadores verificables, el país enfrenta dificultades para demostrar desempeño sostenido ante OPS/PANAFTOSA. Adicionalmente, la ausencia de módulos de alerta en zonas fronterizas dentro del sistema de vigilancia expone al país al riesgo de reintroducción silenciosa desde países vecinos con circulación activa.",
        impacto: "La ausencia de casos puede interpretarse como subnotificación en lugar de eliminación real, invalidando la solicitud de verificación.",
        componentes_afectados: ["Vigilancia", "Laboratorio", "PEP", "Trazabilidad"],
        severidad: "critica"
      },
      {
        id: "h2",
        numero: 5,
        titulo: "Desactualización e insuficiencia del marco operativo",
        resumen: "Instrumentos vigentes que no responden al estándar regional de eliminación por antigüedad o alcance limitado.",
        descripcion: "Existen instrumentos vigentes que no responden plenamente al estándar regional de eliminación, generando vacíos en elementos operativos críticos: vigilancia integrada, PEP, laboratorio, campañas, control de focos y gestión de la información. \n\nUn vacío de alta criticidad específica es la ausencia de norma explícita que exija el uso exclusivo de vacunas de cultivo celular en la profilaxis postexposición (PEP) humana y en la vacunación antirrábica canina. Sin ese mandato, el sistema nacional de contratación pública (SERCOP) puede adjudicar la adquisición de vacunas de tejido nervioso (tecnología obsoleta, con mayor riesgo de reacciones adversas neurológicas graves) por criterio de precio más bajo, sin que el MSP tenga base jurídica para rechazarlas. Esta vulnerabilidad, denominada en el Producto 1 como la 'trampa de contratación pública', compromete simultáneamente la seguridad del esquema de PEP humana, la eficacia de las campañas de vacunación canina y la credibilidad del dossier técnico ante OPS/PANAFTOSA, que exige vacunas precalificadas OMS en todos los componentes del programa.",
        impacto: "Los protocolos de PEP, laboratorio y campañas no están estandarizados para producir la evidencia verificable que demanda el proceso de validación OPS/PANAFTOSA. El riesgo de adquisición de vacunas de tejido nervioso por contratación pública puede ocurrir en cualquier ciclo presupuestario sin que el MSP tenga mandato legal para impedirlo.",
        componentes_afectados: ["PEP", "Laboratorio", "Campañas y vacunación", "Contratación pública"],
        severidad: "alta"
      },
      {
        id: "h4",
        numero: 6,
        titulo: "Brecha estructural en educación y comunicación (MSP–MINEDUC)",
        resumen: "No existe marco normativo sostenido que institucionalice educación preventiva en el sistema escolar.",
        descripcion: "No se evidencia un marco normativo y operativo sostenido que institucionalice: educación preventiva en el sistema escolar; comunicación de riesgo y promoción de conductas (tenencia responsable, prevención de mordeduras, consulta oportuna para PEP); y capacitación recurrente de docentes y equipos locales.",
        impacto: "La sostenibilidad del paquete normativo depende de la conciencia social, que sin marco institucional se deteriora entre generaciones y con los cambios de autoridades ministeriales.",
        componentes_afectados: ["Educación y comunicación", "Sostenibilidad"],
        severidad: "alta"
      },
      {
        id: "h6",
        numero: 7,
        titulo: "Brecha estructural en el nivel subnacional (GAD) y ordenanzas",
        resumen: "Existen 80 ordenanzas con contenidos heterogéneos sin mínimos armonizados.",
        descripcion: "A nivel local existen 80 ordenanzas relacionadas con fauna urbana, tenencia responsable y control animal, pero no se observa un marco mínimo armonizado que asegure ejecución homogénea de acciones, coordinación multisectorial con el MSP y capacidades mínimas para control animal y apoyo a campañas en territorio.",
        impacto: "Se generan 'islas de riesgo': territorios con normativa insuficiente que comprometen las coberturas de vacunación y debilitan la solidez estadística del dossier nacional.",
        componentes_afectados: ["Rol territorial GAD", "Vacunación canina", "Control animal"],
        severidad: "alta"
      },
      {
        id: "h8-fauna",
        numero: 8,
        titulo: "Ausencia de vigilancia sistemática en reservorios no caninos: fauna silvestre y murciélagos",
        resumen: "Brecha de Vigilancia Ecoepidemiológica: el sistema actual se concentra en el ciclo doméstico, omitiendo el monitoreo de murciélagos y fauna silvestre.",
        descripcion: "El actual sistema de vigilancia antirrábica en Ecuador se concentra en el ciclo doméstico perro-humano, dejando sin monitoreo sistemático la rabia en murciélagos hematófagos (Desmodus rotundus), quirópteros insectívoros y fauna silvestre. AGROCALIDAD tiene competencia legal sobre la sanidad de fauna silvestre, pero no existe un protocolo de coordinación MSP-AGROCALIDAD para la vigilancia integrada de variantes virales en reservorios no caninos, situación que introduce un riesgo de reemergencia viral no detectada. \n\n**Respuesta Normativa:** El Convenio MSP-AGROCALIDAD establece la vigilancia coordinada de fauna silvestre como competencia compartida. El Decreto Ejecutivo incorpora a AGROCALIDAD como actor del sistema de vigilancia antirrábica con mandato específico sobre reservorios no domésticos.",
        impacto: "Presencia de sistema de vigilancia integrada de reservorios no caninos (murciélagos, fauna silvestre) con tipificación genética periódica y protocolo de coordinación intersectorial: 0% cumplimiento actual",
        componentes_afectados: ["Vigilancia", "Fauna silvestre", "Gobernanza"],
        severidad: "alta"
      }
    ],
    brechas: [
      { titulo: "Ausencia de instrumento integrador", descripcion: "Falta un instrumento que consolide gobernanza, obligaciones verificables, estándares operativos y mecanismos de cumplimiento bajo enfoque Una Salud." },
      { titulo: "Insuficiencia de estándares de vigilancia", descripcion: "Faltan estándares mínimos obligatorios para registro, trazabilidad, interoperabilidad y verificación en vigilancia, PEP, vacunación y laboratorio." },
      { titulo: "Heterogeneidad subnacional", descripcion: "No hay mínimos armonizados para control animal, registro, tenencia responsable y fiscalización a nivel municipal, con coordinación variable MSP–GAD." },
      { titulo: "Ausencia de marco MSP–MINEDUC", descripcion: "Falta un marco formal que institucionalice educación preventiva y comunicación de riesgo como procesos permanentes, medibles y auditables." },
      { titulo: "Ausencia de muestreo activo de animales centinela", descripcion: "La norma SIVE no incorpora la obligación ni presupuesto para el muestreo de animales muertos o atropellados (vigilancia activa). El indicador de referencia OPS es la tasa de muestras por cada 100,000 perros." },
      { titulo: "Brechas en capacidades críticas", descripcion: "Se requieren reglas explícitas para continuidad, aseguramiento de calidad y requisitos operativos de inmunobiológicos y red diagnóstica." },
      { titulo: "Ausencia de mandato sobre calidad de vacunas antirrábicas: riesgo de la contratación pública", descripcion: "No existe norma que exija el uso exclusivo de vacunas de cultivo celular precalificadas OMS para la PEP humana y la vacunación canina. El vacío permite que el sistema de contratación pública (SERCOP) adjudique vacunas de tejido nervioso (tecnología obsoleta con mayor perfil de reacciones adversas) por precio más bajo, sin posibilidad legal de rechazo por parte del MSP. El Acuerdo Ministerial cierra esta brecha con prohibición explícita y el Decreto con el mandato de adquisición vía Fondo Rotatorio OPS." },
      { titulo: "Ausencia de protocolo de vigilancia antirrábica en murciélagos y fauna silvestre: riesgo de reemergencia por reservorios no caninos", descripcion: "La vigilancia actual omite los reservorios no caninos, lo que impide detectar la circulación de variantes silvestres y gestionar el riesgo de salto de especie." },
      { titulo: "Ausencia de mecanismos de alerta temprana ante reintroducción fronteriza", descripcion: "Ecuador comparte fronteras con Colombia y Perú, países con circulación activa o reciente de variante canina en algunas provincias. No existe un protocolo formalizado MSP-AGROCALIDAD de vigilancia coordinada en zonas de frontera, ni alertas epidemiológicas automáticas integradas al SIVE-Alerta para animales en pasos fronterizos no controlados. Esta brecha es especialmente crítica para las provincias de Carchi, Sucumbíos, El Oro y Zamora Chinchipe, donde el movimiento transfronterizo de perros sin documentación sanitaria representa un vector de reintroducción post-eliminación." }
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
        pdf_url: "https://res.cloudinary.com/dsjcuepns/image/upload/v1774493725/DecretoEjecutivo_V1_Rabia_kgkp2d.pdf",
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
        pdf_url: "https://res.cloudinary.com/dsjcuepns/image/upload/v1774532922/Acuerdo_Ministerial_V1_Rabia_qq54rh.pdf",
        descripcion: "Convierte el mandato presidencial en procedimientos operativos verificables dentro del MSP. Define la arquitectura de vigilancia integrada y diagnostica. Mientras el Decreto define la arquitectura institucional, el Acuerdo especifica cómo se ejecutan los procesos críticos y qué evidencia debe producirse para cada uno. La distinción conceptual central es la diferencia entre la ausencia de casos por subnotificación y la ausencia demostrada por vigilancia negativa robusta con tipificación genética (evidencia real de eliminación).",
        elementos: [
          "Gobernanza vinculante: formalización del Comité Nacional de Control de Zoonosis con periodicidad trimestral y actas verificables.",
          "Vigilancia sensible: obligatoriedad del reporte de casos sospechosos incluyendo resultados negativos (evidencia de ausencia de circulación viral).",
          "Componente diagnóstico-laboratorio (Art. 6 y 11): (1) Obligatoriedad de tipificación genética molecular del 100 % de muestras positivas; (2) Planificación presupuestaria anual de reactivos; (3) Protocolo de derivación a laboratorio supranacional OPS/OMS; (4) Tiempos de respuesta máximos (TAT) auditables.",
          "Laboratorios privados: obligación de reportar al INSPI actividades de tipificación viral y académica.",
          "PEP: garantía de acceso universal y gratuito a vacunas de cultivo celular e inmunoglobulina (RIG), con registro nominal.",
          "Vacunación canina/felina: meta del 80 % como obligación verificable; reporte mensual obligatorio del sector veterinario privado.",
          "Justificación de validación: distinción entre ausencia por subnotificación y ausencia demostrada por vigilancia negativa robusta con tipificación genética (estándar OPS/PANAFTOSA).",
          "Prohibición explícita de vacunas de tejido nervioso.",
          "Régimen sancionatorio: definición de infracciones vinculadas a la LOS y la LOSA."
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
        pdf_url: "https://res.cloudinary.com/dsjcuepns/image/upload/v1774533394/Convenio_AME_V1_Rabia_jmwgs1.pdf",
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
        hito: "Meta: Iniciar implementación en al menos 15 municipios priorizados — Diciembre 2026",
        brecha_cierra: "Heterogeneidad subnacional sin mínimos armonizados para control animal, registro y fiscalización",
        fundamento: "Arts. 238 y 264 CRE; Arts. 7, 57, 54 lit. r, 136 y 322 COOTAD; Arts. 139 y 144 Código Orgánico del Ambiente; Art. 123 LOS.",
        pdf_url: "https://res.cloudinary.com/dsjcuepns/image/upload/v1774533593/Ordenanza_Modelo_AME_V1_Rabia_pnmvjm.pdf",
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
      rol: "Actor obligado en diagnóstico (Producto 1). Laboratorio de referencia nacional para diagnóstico confirmatorio, tipificación genética y aseguramiento de calidad.",
      competencias: [
        "Diagnóstico confirmatorio de rabia (IFD, RT-PCR)",
        "Tipificación genética y caracterización antigénica obligatoria del 100 % de muestras positivas",
        "Aseguramiento de calidad interna y externa (QA/QC)",
        "Gestión de tiempos de respuesta auditables (TAT)",
        "Soporte técnico a la evidencia de eliminación y vigilancia de variantes (V1/V2 vs. silvestres)",
        "Coordinación de la red nacional de laboratorios y transporte de muestras"
      ],
      brecha_operativa: "Capacidad técnica existente pero sin exigibilidad formal, sin protocolos vinculantes de tipificación de rutina y con limitaciones presupuestarias para reactivos.",
      productos_verificables: [
        "Registros de QA/QC interno y externo",
        "Indicadores de tiempos de respuesta (TAT)",
        "Reportes técnicos trazables de resultados diagnósticos",
        "Norma técnica de tipificación genética emitida"
      ],
      evidencia_critica: "Resultados con tipificación genética, indicadores TAT, reportes de calidad, norma técnica de tipificación.",
      participantes: [
        "Responsable de la mesa de diagnóstico y trazabilidad (Taller Intersectorial)",
        "Emilio Paúl Ochoa Mejía (MVZ) — Analista de Laboratorio, Coord. Zonal 6"
      ]
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
      id: "vet-privado",
      nombre: "Sector Veterinario Privado",
      sigla: "Vet. Privado",
      tipo: "corresponsable",
      tipo_label: "Actor Corresponsable",
      color: "#117A65",
      icono: "🩺",
      rol: "Ejecutor no regulado de una fracción significativa de la vacunación antirrábica canina en Ecuador. Su participación es determinante para la cobertura real del programa, pero la ausencia de obligación legal de reporte genera subregistro estructural que compromete la verificabilidad de las coberturas ante OPS/PANAFTOSA.",
      competencias: [
        "Aplicación de vacunas antirrábicas caninas y felinas en consulta privada y brigadas comunitarias",
        "Potencial contribución al registro de cobertura vacunal territorial si se integra al sistema de reporte",
        "Reporte de cartera de servicios de tipificación viral al INSPI (obligación que establece el Acuerdo Ministerial, Art. 11)",
        "Notificación de casos sospechosos de rabia animal al MSP y AGROCALIDAD",
        "Articulación con registro municipal de mascotas para integrar datos de vacunación privada al denominador territorial"
      ],
      brecha_operativa: "No existe obligación legal vigente de reportar las dosis de vacuna antirrábica aplicadas en el sector privado. Las coberturas reales son más altas de lo que los sistemas oficiales registran, pero sin trazabilidad verificable. Este subregistro estructural hace que los indicadores de cobertura canina subestimen el desempeño real del programa y debiliten la solidez estadística del dossier de eliminación. El Acuerdo Ministerial (Art. 11) establece por primera vez la obligación de reporte al MSP.",
      productos_verificables: [
        "Reporte mensual de dosis aplicadas al MSP con identificación de especie, sexo y área geográfica",
        "Reportes de cartera de servicios de tipificación viral al INSPI",
        "Actas de inspección de cadena de frío verificadas por el MSP"
      ],
      evidencia_critica: "Reportes mensuales de dosis aplicadas, registros de cadena de frío, actas de inspección del MSP, datos integrados al registro municipal de mascotas.",
      participantes: [
        "Sector veterinario privado — Sin representante formal identificado en el taller intersectorial. El Acuerdo Ministerial establece la obligación de reporte como mecanismo de integración al sistema nacional."
      ]
    },
    {
      id: "ops_oms",
      nombre: "OPS/OMS — PANAFTOSA",
      sigla: "OPS/OMS",
      tipo: "cooperacion",
      tipo_label: "Cooperación Técnica",
      color: "#003366",
      icono: "🌐",
      rol: "Ente rector técnico internacional de la estrategia de eliminación de la RHTP. Propietario del estándar de certificación y proveedor del marco técnico-normativo de referencia para el proceso de validación del estatus de eliminación.",
      competencias: [
        "Definición y actualización del Plan de Acción Regional para la Eliminación de la Rabia Humana 2022–2030 (estándar técnico vinculante)",
        "Certificación del estatus de eliminación de RHTP mediante proceso de validación formal (dossier de carpeta técnica)",
        "Asesoría técnica directa al MSP para el diseño de los instrumentos normativos del paquete",
        "Provisión de estándares diagnósticos: algoritmos de tipificación genética, indicadores de vigilancia activa y umbrales de cobertura vacunal (≥80 %)"
      ],
      evidencia_critica: "Plan de Acción Regional, Guías Técnicas OPS, Informes de validación de estatus, Dossier de carpeta técnica.",
      participantes: [
        "Dra. Valeska Stempliuk — Asesor de Enfermedades Transmisibles, Representación OPS Ecuador",
        "Representante de PANAFTOSA (Centro Panamericano de Fiebre Aftosa) — Programa de Rabia"
      ]
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
    }
  ],

  // ── SECCIÓN 5: HOJA DE RUTA ─────────────────────────────
  hoja_de_ruta: {
    intro: "La hoja de ruta de adopción e implementación organiza el proceso de adopción del paquete normativo en cuatro fases secuenciales entre marzo y diciembre de 2026, respetando la lógica de jerarquía normativa: el Decreto Ejecutivo crea el marco habilitante para los instrumentos inferiores, y cada fase produce evidencia verificable para la carpeta técnica de eliminación.",
    meta_anual: "Al cierre del año 2026: Decreto Ejecutivo vigente + Acuerdo Ministerial con período transitorio en curso + Convenio MSP–AME en ejecución activa + Inicio del proceso en al menos 15 municipios priorizados.",
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
            base_legal: "Reglamentación ERJAFE"
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
            base_legal: "Reglamentación LOS Art. 6"
          },
          {
            id: "f2-p2",
            numero: 2,
            titulo: "Socialización con actores institucionales clave",
            descripcion: "Taller de socialización con AGROCALIDAD, INSPI y representantes del sector veterinario privado para recoger observaciones y asegurar coherencia operativa.",
            responsable: "MSP + Equipo Consultor",
            plazo: "Abril–Mayo 2026",
            evidencia: "Acta del taller + Matriz de comentarios por institución",
            base_legal: "Art. 226 CRE (Cooperación Interinstitucional)"
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
          },
          {
            id: "f2-p6",
            numero: 6,
            titulo: "Actualización de manuales técnicos (PEP, laboratorio y vigilancia)",
            descripcion: "Actualización integral de los manuales operativos para alinearlos al nuevo mandato del Acuerdo Ministerial y al Plan Regional OPS.",
            responsable: "MSP-DNVE e INSPI conjuntamente",
            plazo: "Noviembre 2026",
            evidencia: "Manuales técnicos publicados y socializados",
            base_legal: "Disposición transitoria Acuerdo Ministerial"
          },
          {
            id: "f2-p7",
            numero: 7,
            titulo: "Emisión de la Norma Técnica de Tipificación Genética",
            descripcion: "Expedición de la norma técnica específica que regula el procedimiento, TAT y QA/QC de la tipificación molecular del 100 % de muestras.",
            responsable: "INSPI con aval del MSP",
            plazo: "Noviembre 2026",
            evidencia: "Norma técnica publicada en el Registro Oficial",
            base_legal: "Acuerdo Ministerial MSP"
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
            base_legal: "Código Orgánico Administrativo (COA)"
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
            base_legal: "Art. 226 CRE; COOTAD"
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
        hito: "Inicio de proceso en al menos 15 municipios priorizados",
        fecha_hito: "Diciembre 2026",
        brecha_cierra: "Heterogeneidad normativa municipal / 'islas de riesgo' en el territorio",
        responsable_lider: "GAD Municipales + AME + MSP",
        descripcion: "La Fase 4 es la de mayor alcance territorial: implica activar el proceso de adopción normativa en 222 municipios. La estrategia prioriza primero los cantones de mayor riesgo epidemiológico. **Punto de Alerta:** Se priorizará la vigilancia en provincias fronterizas (Carchi, Sucumbíos, El Oro y Zamora Chinchipe) para mitigar el riesgo de reintroducción de variante canina.",
        pasos: [
          {
            id: "f4-p1",
            numero: 1,
            titulo: "Distribución de la Ordenanza Modelo a todos los GAD vía AME",
            descripcion: "La AME distribuye el texto de la Ordenanza Municipal Modelo a los 222 GAD municipales, acompañado de una guía de adopción y el calendario de talleres de socialización.",
            responsable: "AME",
            plazo: "Julio 2026",
            evidencia: "Registro de distribución + confirmación de recepción por GAD",
            base_legal: "COOTAD Art. 322"
          },
          {
            id: "f4-p2",
            numero: 2,
            titulo: "Talleres de socialización con municipios prioritarios",
            descripcion: "Talleres técnico-jurídicos con los GAD de mayor riesgo epidemiológico (zonas con antecedentes de circulación viral, fronterizas o con heterogeneidad normativa documentada). Participan técnicos municipales, asesores jurídicos de los concejos y representantes del MSP.",
            responsable: "MSP + AME + Equipo Consultor",
            plazo: "Julio–Agosto 2026",
            evidencia: "Actas de talleres + lista de asistencia + observaciones recibidas por GAD",
            base_legal: "COOTAD Art. 54 lit. r (Competencia Salud)"
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
            descripcion: "MSP y AME consolidan el listado de municipios con proceso de implementación iniciado. Se verifica el cumplimiento del hito: inicio focalizado en al menos 15 municipios priorizados durante 2026.",
            responsable: "MSP + AME",
            plazo: "Diciembre 2026",
            evidencia: "Informe consolidado con estado por GAD + porcentaje de avance hacia el hito del dossier",
            base_legal: "Mandato del Decreto Ejecutivo y Acuerdo Ministerial"
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
      { id: "ind6", descripcion: "Número de municipios priorizados con proceso de implementación iniciado (Meta 2026: 15)", responsable: "AME", fecha: "Diciembre 2026" },
      { id: "ind7", descripcion: "Sistema de registro y trazabilidad operativo (SIVE–SIZSE interoperables)", responsable: "MSP + AGROCALIDAD", fecha: "Diciembre 2026" },
      { id: "ind8", descripcion: "Indicador OPS: Tasa anual de muestras de cerebros analizadas por cada 100,000 perros (Vigilancia Activa/Pasiva)", responsable: "INSPI + MSP", fecha: "Diciembre 2026" },
      { id: "ind9", descripcion: "Informe de avance de la carpeta técnica para el proceso de validación", responsable: "MSP + OPS", fecha: "Diciembre 2026" }
    ]
  },

  // ── CATÁLOGO NORMATIVO REVISADO (ANEXO P1) ──────────────
  catalogo_revisado: {
    titulo: "Catálogo normativo revisado",
    intro: "El inventario normativo consolidado revisado comprende el universo de registros normativos vigentes, identificados y organizados como base documental del diagnóstico normativo. Su consulta permite transparentar el universo de instrumentos revisados por la consultoría.",
    categorias: [
      {
        id: "cat1",
        nombre: "I. Leyes",
        registros: [
          { n: "1", tipo: "Ley Orgánica", numero: "2006-67", titulo: "LEY ORGÁNICA DE SALUD - LOS", registro_oficial: "Registro Oficial S. 423", fecha_pub: "22 dic 2006", emision: "14 dic 2006 / Últ. reforma: 16 may 2023" }
        ]
      },
      {
        id: "cat2",
        nombre: "II. Reglamentos",
        registros: [
          { n: "2", tipo: "Reglamento", numero: "s/n", titulo: "REGLAMENTO PARA EL DESPOSTE DE GANADO MAYOR Y MENOR EN CAMALES", registro_oficial: "Registro Oficial S. 95", fecha_pub: "24 dic 1998", emision: "24 dic 1998" }
        ]
      },
      {
        id: "cat3",
        nombre: "III. Decretos",
        registros: [
          { n: "3", tipo: "Decreto Ejecutivo", numero: "3609", titulo: "TEXTO UNIFICADO DE LEGISLACIÓN SECUNDARIA DEL MINISTERIO DE AGRICULTURA Y GANADERÍA - TULSMAG", registro_oficial: "Registro Oficial E. E. 1", fecha_pub: "20 mar 2003", emision: "20 mar 2003 / Últ. reforma: 30 dic 2016" },
          { n: "4", tipo: "Decreto Ejecutivo", numero: "3516", titulo: "VIGENCIA Y APLICABILIDAD DEL TEXTO UNIFICADO DE LEGISLACIÓN SECUNDARIA DEL MINISTERIO DEL AMBIENTE - TULAS - TULSMA", registro_oficial: "Registro Oficial E. E. 2", fecha_pub: "31 mar 2003", emision: "31 mar 2003 / Últ. reforma: 11 jun 2025" },
          { n: "5", tipo: "Decreto Ejecutivo", numero: "963", titulo: "SE DECLARA EL ESTADO DE EXCEPCIÓN SANITARIA EN EL CANTÓN TAISHA, PROVINCIA DE MORONA SANTIAGO, ESPECIALMENTE EN LA PARROQUIA HUASAGA", registro_oficial: "Registro Oficial 603", fecha_pub: "23 dic 2011", emision: "08 dic 2011" }
        ]
      },
      {
        id: "cat4",
        nombre: "IV. Ordenanzas",
        registros: [
          { n: "6", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "CÓDIGO MUNICIPAL DE HIGIENE Y ABASTO DEL CANTÓN LOJA", registro_oficial: "Registro Oficial S. 95", fecha_pub: "24 dic 1998", emision: "24 dic 1998" },
          { n: "7", tipo: "Ordenanza Metropolitana", numero: "0861", titulo: "REGLAMENTO A LA ORDENANZA METROPOLITANA No. 0128, SOBRE CONDICIONES PARA MANTENER A LOS PERROS Y OTROS ANIMALES DOMÉSTICOS", registro_oficial: "Registro Oficial 526", fecha_pub: "17 feb 2005", emision: "17 dic 2004 / Últ. reforma: 08 ago 2006" },
          { n: "8", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA SUSTITUTIVA QUE REGLAMENTA EL ESTABLECIMIENTO DE LA TASA POR EL SERVICIO DE RASTRO", registro_oficial: "Registro Oficial 228", fecha_pub: "09 nov 2006", emision: "10 dic 2007" },
          { n: "9", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA SUSTITUTIVA DE LA ORDENANZA QUE REGLAMENTA LA COMERCIALIZACIÓN DE GANADO EN PIE, EL FAENAMIENTO Y LA DISTRIBUCIÓN DE CARNES EN EL CANTÓN IBARRA", registro_oficial: "Registro Oficial 117", fecha_pub: "02 jul 2007", emision: "05 jun 2006 / Últ. reforma: 09 feb 2009" },
          { n: "10", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "REGLAMENTO ORGÁNICO POR PROCESOS DEL MUNICIPIO DEL CANTÓN TISALEO", registro_oficial: "Registro Oficial S. 346", fecha_pub: "27 may 2008", emision: "31 ago 2007" },
          { n: "11", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA SUSTITUTIVA QUE REGULA LA PRESTACIÓN DEL SERVICIO DEL CAMAL MUNICIPAL Y LA DETERMINACIÓN Y RECAUDACIÓN DE LA TASA DE RASTRO", registro_oficial: "Registro Oficial 370", fecha_pub: "30 jun 2008", emision: "17 mar 2008" },
          { n: "12", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA DE HIGIENE Y ABASTO DEL CANTÓN LA LIBERTAD", registro_oficial: "Registro Oficial 316", fecha_pub: "15 abr 2008", emision: "23 ene 2008 / Últ. reforma: 24 dic 2009" },
          { n: "13", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA DE FUNCIONAMIENTO DEL CAMAL TECNOLÓGICO SAQUISILÍ", registro_oficial: "Registro Oficial S. 326", fecha_pub: "29 abr 2008", emision: "05 feb 2004" },
          { n: "14", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA MUNICIPAL QUE DETERMINA LAS CONDICIONES EN LAS QUE SE DEBE MANTENER A LOS PERROS Y OTROS ANIMALES DOMÉSTICOS", registro_oficial: "Registro Oficial 281", fecha_pub: "17 sep 2010", emision: "04 may 2010" },
          { n: "15", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA EL COBRO DE LA TASA POR SERVICIOS TÉCNICOS ADMINISTRATIVOS QUE PRESTA LA UNIDAD MÓVIL Y QUE REGLAMENTA EL USO DEL VEHÍCULO CLÍNICA VETERINARIA MÓVIL, EN EL CANTÓN EL CHACO", registro_oficial: "Registro Oficial E. E. 79", fecha_pub: "27 oct 2010", emision: "10 may 2010" },
          { n: "16", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "REFORMA A LA ORDENANZA QUE REGULA LA PRESTACIÓN DEL SERVICIO DEL CAMAL MUNICIPAL, Y LA DETERMINACIÓN Y RECAUDACIÓN DE LA TASA DE RASTRO", registro_oficial: "Registro Oficial 419", fecha_pub: "04 abr 2011", emision: "24 ene 2011" },
          { n: "17", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA EL FUNCIONAMIENTO DEL CAMAL MUNICIPAL Y LA DETERMINACIÓN Y RECAUDACIÓN DE LA TASA DE RASTRO", registro_oficial: "Registro Oficial 489", fecha_pub: "12 jul 2011", emision: "20 abr 2011" },
          { n: "18", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA MUNICIPAL SOBRE CRIANZA, TENENCIA Y VENTA RESPONSABLE DE CANES Y CIRCULACIÓN DE LOS MISMOS EN EL ÁREA URBANA Y CENTROS POBLADOS DEL CANTÓN PUERTO QUITO", registro_oficial: "Registro Oficial 644", fecha_pub: "22 feb 2012", emision: "01 sep 2011" },
          { n: "19", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGLAMENTA LA PROTECCIÓN DEL MEDIO AMBIENTE Y CONTROL DE RIESGOS DE LA FAUNA Y FLORA DEL CANTÓN ARAJUNO", registro_oficial: "Registro Oficial S. 599", fecha_pub: "19 dic 2011", emision: "21 abr 2011" },
          { n: "20", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGLAMENTA LA MOVILIZACIÓN DE GANADO PARA FAENAMIENTO, EL SERVICIO DE CAMAL MUNICIPAL Y EL EXPENDIO DE PRODUCTOS CÁRNICOS Y SUS DERIVADOS EN EL CANTÓN CUYABENO", registro_oficial: "Registro Oficial 793", fecha_pub: "20 sep 2012", emision: "04 abr 2012" },
          { n: "21", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGLAMENTA LA PRESTACIÓN DEL SERVICIO DE CAMAL MUNICIPAL Y LA DETERMINACIÓN Y RECAUDACIÓN DE LA TASA DE RASTRO EN EL CANTÓN CHAGUARPAMBA", registro_oficial: "Registro Oficial S. 776", fecha_pub: "28 ago 2012", emision: "13 feb 2012" },
          { n: "22", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA PRESTACIÓN DEL SERVICIO DEL CAMAL MUNICIPAL Y CAMALES AUTORIZADOS, Y LA DETERMINACIÓN Y RECAUDACIÓN DE LA TASA DE RASTRO DEL CANTÓN NARANJITO", registro_oficial: "Registro Oficial 818", fecha_pub: "26 oct 2012", emision: "21 ago 2012" },
          { n: "23", tipo: "Ordenanza Municipal", numero: "11-2012", titulo: "ORDENANZA QUE REGULA LA TENENCIA, PROTECCIÓN Y CONTROL DE LA FAUNA URBANA EN EL CANTÓN LA TRONCAL", registro_oficial: "Registro Oficial 826", fecha_pub: "08 nov 2012", emision: "21 sep 2012" },
          { n: "24", tipo: "Ordenanza Provincial", numero: "s/n", titulo: "CODIFICACIÓN A LA ORDENANZA QUE REGULA LA GESTIÓN DESCENTRALIZADA DÉ LA COMPETENCIA AMBIENTAL DE LA PROVINCIA DE EL ORO", registro_oficial: "Registro Oficial E. E. 380", fecha_pub: "18 dic 2012", emision: "13 ago 2012" },
          { n: "25", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA MUNICIPAL QUE REGLAMENTA LA DETERMINACIÓN, RECAUDACIÓN, ADMINISTRACIÓN Y CONTROL DEL SERVICIO DEL CAMAL MUNICIPAL EN LA CIUDAD DE ALAMOR Y COMERCIO DE CARNE EN EL CANTÓN PUYANGO", registro_oficial: "Registro Oficial 868", fecha_pub: "11 feb 2013", emision: "05 dic 2012" },
          { n: "26", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA DEL PLAN DE DESARROLLO Y ORDENAMIENTO TERRITORIAL DEL CANTÓN MERA PERÍODO 2011-2020", registro_oficial: "Registro Oficial E. E. 27", fecha_pub: "23 jul 2013", emision: "25 ene 2013" },
          { n: "27", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA PARA LA PRESTACIÓN DEL SERVICIO DE LOS CAMALES MUNICIPALES DEL CANTÓN Y COBRO DE LA TASA POR EL FAENAMIENTO DE LOS ANIMALES EN EL CAMAL MUNICIPAL DE PORTOVIEJO", registro_oficial: "Registro Oficial S. 097", fecha_pub: "08 oct 2013", emision: "13 sep 2013" },
          { n: "28", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA Y REGLAMENTA LA TENENCIA DE ANIMALES EN EL PERÍMETRO URBANO DEL CANTÓN PEDRO CARBO", registro_oficial: "Registro Oficial S. 126", fecha_pub: "19 nov 2013", emision: "10 oct 2013" },
          { n: "29", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA EL USO, ADMINISTRACIÓN Y CONTROL DEL CAMAL MUNICIPAL EN EL CANTÓN TOSAGUA", registro_oficial: "Registro Oficial 81", fecha_pub: "13 dic 2013", emision: "08 ago 2011" },
          { n: "30", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA PRESTACIÓN DEL SERVICIO DEL CAMAL MUNICIPAL DE CHINCHIPE, Y LA DETERMINACIÓN Y RECAUDACIÓN DE LA TASA DE RASTRO EN EL CANTÓN CHINCHIPE", registro_oficial: "Registro Oficial 2do. S. 144", fecha_pub: "16 dic 2013", emision: "11 jul 2013" },
          { n: "31", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGLAMENTA EL ESTABLECIMIENTO DE LA TASA POR EL SERVICIO DE USO DEL CAMAL MUNICIPAL Y DE LA PLAZA DE RASTRO EN EL CANTÓN SÍGSIG", registro_oficial: "Registro Oficial S. 299", fecha_pub: "29 jul 2014", emision: "16 dic 2013" },
          { n: "32", tipo: "Ordenanza Municipal", numero: "02-14-2014-2019", titulo: "ORDENANZA SUSTITUTIVA QUE NORMA LA INTRODUCCIÓN DE ANIMALES DE ABASTO, FAENAMIENTO, DESPOSTE, INDUSTRIALIZACIÓN, REFRIGERACIÓN, COMERCIALIZACIÓN, TRANSPORTE Y EXPENDIO, DE LOS PRODUCTOS CÁRNICOS PROCESADOS O INDUSTRIALIZADOS Y LA DETERMINACIÓN Y RECAUDACIÓN DE LA TASA DE RASTRO EN EL CAMAL MUNICIPAL DEL CANTÓN NARANJAL", registro_oficial: "Registro Oficial S. 358", fecha_pub: "21 oct 2014", emision: "04 sep 2014" },
          { n: "33", tipo: "Ordenanza Municipal", numero: "0007 GADM-AA-14", titulo: "ORDENANZA QUE REGULA EL CONTROL, LA TENENCIA Y PROTECCIÓN DE LOS ANIMALES", registro_oficial: "Registro Oficial 3er. S. 232", fecha_pub: "20 dic 2014", emision: "18 sep 2014" },
          { n: "34", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA TENENCIA, CONTROL Y PROTECCIÓN DE LA POBLACIÓN CANINA EN EL CANTÓN CENTINELA DEL CÓNDOR", registro_oficial: "Registro Oficial 418", fecha_pub: "16 ene 2015", emision: "14 jul 2014" },
          { n: "35", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA PARA PROTECCIÓN, TENENCIA, CUIDADO Y MANEJO RESPONSABLE DE LOS ANIMALES DOMÉSTICOS, MASCOTAS Y DE COMPAÑÍA EN EL CANTON PALLATANGA", registro_oficial: "Registro Oficial S. 428", fecha_pub: "30 ene 2015", emision: "20 ago 2014" },
          { n: "36", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA MUNICIPAL QUE REGLAMENTA LA ADMINISTRACIÓN, CONTROL Y RECAUDACIÓN DEL SERVICIO DEL CAMAL MUNICIPAL; Y COMERCIO DE CARNE DEL CANTÓN SOZORANGA PROVINCIA DE LOJA", registro_oficial: "Registro Oficial S. 435", fecha_pub: "10 feb 2015", emision: "30 dic 2014" },
          { n: "37", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "REFORMA TOTAL A LA ORDENANZA PARA LA PRESTACIÓN DEL SERVICIO DE LOS CAMALES MUNICIPALES Y COBRO DE LA TASA DE RASTRO", registro_oficial: "Registro Oficial 447", fecha_pub: "27 feb 2015", emision: "29 dic 2014" },
          { n: "38", tipo: "Ordenanza Municipal", numero: "OM-001-2015", titulo: "ORDENANZA SOBRE LA REGULACIÓN DE PROTECCIÓN DE LOS ESPACIOS PÚBLICOS Y CONVIVENCIA CIUDADANA", registro_oficial: "Registro Oficial 458", fecha_pub: "13 mar 2015", emision: "06 ene 2015" },
          { n: "39", tipo: "Ordenanza Municipal", numero: "S/N", titulo: "ORDENANZA SUSTITUTIVA QUE DETERMINA LA CONSERVACIÓN DE ANIMALES EN EL CENTRO URBANO DE LA PARROQUIA URBANA Y PARROQUIAS RURALES DEL CANTÓN SUCÚA", registro_oficial: "Registro Oficial 578", fecha_pub: "02 sep 2015", emision: "14 abr 2015" },
          { n: "40", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA PRESTACIÓN DEL SERVICIO DEL CENTRO DE FAENAMIENTO MUNICIPAL DE PALLATANGA Y CAMALES AUTORIZADOS, Y LA DETERMINACIÓN Y RECAUDACIÓN DE LA TASA DE RASTRO", registro_oficial: "Registro Oficial S. 601", fecha_pub: "05 oct 2015", emision: "07 may 2015" },
          { n: "41", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA PRESTACIÓN DEL SERVICIO DEL CAMAL MUNICIPAL DEL CANTÓN PAJÁN, Y LA DETERMINACIÓN Y RECAUDACIÓN DE LA TASA DE FAENAMIENTO", registro_oficial: "Registro Oficial E. E. 365", fecha_pub: "07 sep 2015", emision: "26 jun 2015" },
          { n: "42", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA IA DE ABASTO EN EL CANTÓN LAGO AGRIO", registro_oficial: "Registro Oficial E. E. 405", fecha_pub: "30 nov 2015", emision: "07 ago 2015" },
          { n: "43", tipo: "Ordenanza Municipal", numero: "CMQ-009-201", titulo: "ORDENANZA MUNICIPAL DE TENENCIA Y MANEJO RESPONSABLE DE CANINOS Y FELINOS EN EL CANTÓN QUINSALOMA", registro_oficial: "Registro Oficial S. 426", fecha_pub: "28 ene 2015", emision: "30 oct 2014" },
          { n: "44", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA SUSTITUTIVA DE FUNCIONAMIENTO DEL CAMAL MUNICIPAL DEL CANTÓN SAN PEDRO DE PELILEO", registro_oficial: "Registro Oficial E. E. 577", fecha_pub: "12 may 2016", emision: "23 dic 2015" },
          { n: "45", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA PARA LA PRESTACIÓN DEL SERVICIO DEL CENTRO DE FAENAMIENTO DEL GAD MUNICIPAL DEL CANTÓN BOLÍVAR EN LA PROVINCIA DE MANABÍ Y COBRO DE LA TASA POR EL FAENAMIENTO DE LOS ANIMALES EN EL CENTRO DE FAENAMIENTO MUNICIPAL", registro_oficial: "Registro Oficial E. E. 640", fecha_pub: "19 jul 2016", emision: "17 feb 2016" },
          { n: "46", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA PARA LA PROTECCIÓN DE ANIMALES DOMÉSTICOS DE COMPAÑÍA EN EL CANTÓN", registro_oficial: "Registro Oficial 153", fecha_pub: "04 ene 2018", emision: "23 jun 2016" },
          { n: "47", tipo: "Ordenanza Municipal", numero: "2016-002", titulo: "ORDENANZA SUSTITUTIVA QUE REGULA EL FUNCIONAMIENTO DEL CENTRO DE FAENAMIENTO MUNICIPAL, PARA EL CONTROL DE PRODUCTOS CÁRNICOS EN LOS MERCADOS, TERCENAS Y PUNTOS DE COMERCIALIZACIÓN DEL CANTÓN COLTA", registro_oficial: "Registro Oficial E. E. 791", fecha_pub: "02 dic 2016", emision: "26 jun 2016" },
          { n: "48", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGLAMENTA LA PRESTACIÓN DEL SERVICIO DEL CENTRO DE FAENAMIENTO DE TULCÁN, SU FUNCIONAMIENTO, DETERMINACIÓN Y RECAUDACIÓN DE LAS TASAS DE RASTRO PARA EL CANTÓN TULCÁN", registro_oficial: "Registro Oficial E. E. 705", fecha_pub: "23 ago 2016", emision: "29 jun 2016" },
          { n: "49", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA MUNICIPAL DE CONTROL Y PROTECCIÓN ANIMAL", registro_oficial: "Registro Oficial 788", fecha_pub: "01 jul 2016", emision: "25 nov 2015" },
          { n: "50", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA TENENCIA, EL MANEJO Y PROTECCIÓN DE LA FAUNA URBANA EN EL CANTÓN TULCÁN", registro_oficial: "Registro Oficial E. E. 705", fecha_pub: "23 ago 2016", emision: "12 may 2016 / Últ. reforma: 01 ago 2017" },
          { n: "51", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "REFORMA A LA ORDENANZA DE HIGIENE Y ABASTO EN EL CANTÓN EL CHACO", registro_oficial: "Registro Oficial 2do. S. 857", fecha_pub: "07 oct 2016", emision: "15 feb 2016" },
          { n: "52", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA TENENCIA, PROTECCIÓN, CONTROL Y COMERCIALIZACIÓN DE LA FAUNA URBANA EN LA CIUDAD DE MACAS Y EL CANTÓN MORONA", registro_oficial: "Registro Oficial E. E. 660", fecha_pub: "29 jul 2016", emision: "25 ene 2016" },
          { n: "53", tipo: "Ordenanza Municipal", numero: "047-2016", titulo: "ORDENANZA QUE REGULA EL MANEJO RESPONSABLE DE LA FAUNA URBANA EN EL CANTÓN SAN MIGUEL DE URCUQUÍ", registro_oficial: "Registro Oficial 3er. S. 913", fecha_pub: "30 dic 2016", emision: "16 nov 2016" },
          { n: "54", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA EL DESARROLLO AMBIENTAL DE PORTOVIEJO", registro_oficial: "Registro Oficial E. E. 1", fecha_pub: "25 may 2017", emision: "16 mar 2017 / Últ. reforma: 18 nov 2021" },
          { n: "55", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA TENENCIA Y PROTECCIÓN DE PERROS EN EL CANTÓN MARCABELÍ", registro_oficial: "Registro Oficial 52", fecha_pub: "07 ago 2017", emision: "05 abr 2017" },
          { n: "56", tipo: "Ordenanza Municipal", numero: "GADMCD-2017-003", titulo: "ORDENANZA QUE REGULA LA PROTECCIÓN, COMERCIALIZACIÓN, TENENCIA, CONTROL y CUIDADO DE LOS ANIMALES DE COMPAÑÍA EN EL CANTÓN DURÁN", registro_oficial: "Registro Oficial E. E. 3", fecha_pub: "31 may 2017", emision: "10 abr 2017" },
          { n: "57", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "SUSTITUTIVA A LA ORDENANZA QUE REGLAMENTA LA PRESTACIÓN DE SERVICIOS EN LOS CAMALES DE LAS PARROQUIAS SUCRE, NOBOA Y BELLAVISTA DEL CANTÓN 24 DE MAYO POR “ORDENANZA QUE REGULA LA PRESTACIÓN DEL SERVICIO DEL CENTRO DE FAENAMIENTO MUNICIPAL DEL CANTÓN 24 DE MAYO, Y LA DETERMINACIÓN Y RECAUDACIÓN DE LA TASA POR SERVICIO", registro_oficial: "Registro Oficial E. E. 15", fecha_pub: "20 jun 2017", emision: "05 may 2017" },
          { n: "58", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "REFORMA A LA ORDENANZA QUE REGULA LA TENENCIA, EL MANEJO Y PROTECCIÓN DE LA FAUNA URBANA EN EL CANTÓN TULCÁN", registro_oficial: "Registro Oficial S. 48", fecha_pub: "01 ago 2017", emision: "21 jun 2017" },
          { n: "59", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA DE CONSERVACIÓN Y PROTECCIÓN DE LOS RECURSOS NATURALES Y DE CALIDAD AMBIENTAL DEL CANTÓN SÍGSIG", registro_oficial: "Registro Oficial E. E. 56", fecha_pub: "08 ago 2017", emision: "15 jun 2017 / Últ. reforma: 20 sep 2021" },
          { n: "60", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA EL SERVICIO DE CAMALES, MATADEROS Y LA DETERMINACIÓN Y RECAUDACIÓN DE LA TASA DE RASTRO", registro_oficial: "Registro Oficial E. E. 109", fecha_pub: "12 oct 2017", emision: "04 ago 2017" },
          { n: "61", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA Y CONTROLA LA FAUNA URBANA DEL CANTÓN MEJÍA", registro_oficial: "Registro Oficial E. E. 97", fecha_pub: "28 sep 2017", emision: "14 jul 2017" },
          { n: "62", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA TENENCIA, PROTECCIÓN Y CONTROL DE ANIMALES DE COMPAÑÍA EN EL CANTÓN MACHALA", registro_oficial: "Registro Oficial E. E. 148", fecha_pub: "18 dic 2017", emision: "26 nov 2017" },
          { n: "63", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA TENENCIA, PROTECCIÓN Y CONTROL DE ANIMALES DOMÉSTICOS EN EL CANTÓN LA MANÁ", registro_oficial: "Registro Oficial 237", fecha_pub: "14 sep 2018", emision: "08 nov 2017" },
          { n: "64", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA MUNICIPAL QUE REGULA LA TENENCIA, CONTROL, PROTECCIÓN Y PREVENCIÓN DE ANIMALES DOMÉSTICOS Y SILVESTRES URBANOS", registro_oficial: "Registro Oficial S. 224", fecha_pub: "18 abr 2018", emision: "10 mar 2018" },
          { n: "65", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA PRESTACIÓN DEL SERVICIO DEL CAMAL MUNICIPAL DEL CANTÓN PAJÁN, Y LA DETERMINACIÓN Y RECAUDACIÓN DE LA TASA DE FAENAMIENTO", registro_oficial: "Registro Oficial E. E. 365", fecha_pub: "07 sep 2015", emision: "26 jun 2015" },
          { n: "66", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA PARA LA GESTIÓN Y MANEJO DE LOS DESECHOS SANITARIOS GENERADOS EN EL CANTÓN TULCÁN", registro_oficial: "Registro Oficial E. E. 649", fecha_pub: "28 nov 2018", emision: "03 ago 2018" },
          { n: "67", tipo: "Ordenanza Municipal", numero: "037-CM-GADMCH", titulo: "ORDENANZA PARA LA TENENCIA RESPONSABLE Y PARA EL CONTROL DE CANES EN EL CANTÓN CHORDELEG", registro_oficial: "Registro Oficial E. E. 704", fecha_pub: "08 ene 2019", emision: "17 oct 2018" },
          { n: "68", tipo: "Ordenanza Municipal", numero: "48 GADMQ-2018", titulo: "ORDENANZA QUE REGULA LA FAUNA URBANA, EN LO CONCERNIENTE AL MANEJO RESPONSABLE DE CANINOS Y FELINOS DEL CANTÓN QUIJOS", registro_oficial: "Registro Oficial 510", fecha_pub: "17 jun 2019", emision: "11 oct 2018" },
          { n: "69", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA PARA LA TENENCIA, PROTECCIÓN Y CONTROL DE LA FAUNA URBANA EN EL CANTÓN COTACACHI", registro_oficial: "Registro Oficial E. E. 690", fecha_pub: "27 dic 2018", emision: "07 nov 2018" },
          { n: "70", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA MODIFICATORIA PARA LA PRESTACIÓN DE SERVICIO DEL CENTRO DE FAENAMIENTO DEL GAD MUNICIPAL DEL CANTÓN BOLÍVAR EN LA PROVINCIA DE MANABÍ Y COBRO DE LA TASA POR FAENAMIENTO DE LOS ANIMALES EN EL CENTRO DE FAENAMIENTO MUNICIPAL", registro_oficial: "Registro Oficial E. E. 789", fecha_pub: "26 feb 2019", emision: "28 nov 2018" },
          { n: "71", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA MUNICIPAL SANCIONATORIA DE TENENCIA, CONTROL Y PROTECCIÓN DE FAUNA URBANA EN EL CANTÓN PORTOVELO", registro_oficial: "Registro Oficial E. E. 864", fecha_pub: "12 abr 2019", emision: "30 nov 2018" },
          { n: "72", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA Y CONTROLA LA FAUNA URBANA DEL CANTÓN GIRÓN", registro_oficial: "Registro Oficial E. E. 787", fecha_pub: "25 feb 2019", emision: "13 dic 2018" },
          { n: "73", tipo: "Ordenanza Municipal", numero: "001-2019", titulo: "ORDENANZA QUE REGULA EL FUNCIONAMIENTO DEL CENTRO DE FAENAMIENTO MUNICIPAL, Y ESTABLECE LAS TASAS POR SERVICIOS RELACIONADOS A LAS ACTIVIDADES DE FAENAMIENTO DEL CANTÓN SANTA ANA", registro_oficial: "Registro Oficial 40", fecha_pub: "16 sep 2019", emision: "31 ene 2019" },
          { n: "74", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA EL FUNCIONAMIENTO DEL CENTRO DE ESTERILIZACIÓN CANINA Y FELINA DEL GADMC DEL PUJILÍ", registro_oficial: "Registro Oficial E. E. 918", fecha_pub: "16 may 2019", emision: "13 feb 2019" },
          { n: "75", tipo: "Ordenanza Municipal", numero: "004-2019", titulo: "ORDENANZA PARA LA PROTECCIÓN, TENENCIA Y CONTROL DE LA FAUNA URBANA EN EL CANTÓN RIOBAMBA", registro_oficial: "Registro Oficial E. E. 859", fecha_pub: "09 abr 2019", emision: "22 mar 2019" },
          { n: "76", tipo: "Ordenanza Municipal", numero: "002-2019", titulo: "ORDENANZA QUE REGULA LA TENENCIA, PROTECCIÓN Y CONTROL DE LA FAUNA EN EL CANTÓN RUMIÑAHUI", registro_oficial: "Registro Oficial E. E. 913", fecha_pub: "15 may 2019", emision: "15 abr 2019 / Últ. reforma: 11 jun 2025" },
          { n: "77", tipo: "Ordenanza Municipal", numero: "006-2019", titulo: "ORDENANZA QUE CONTIENE LA PRIMERA REFORMA A LA ORDENANZA NO. 002-2019 DEL CANTÓN RUMIÑAHUI", registro_oficial: "Registro Oficial 69", fecha_pub: "28 oct 2019", emision: "17 sep 2019" },
          { n: "78", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA PROTECCIÓN, CRIANZA, TENENCIA, CONTROL, COMERCIALIZACIÓN Y CUIDADO DE ANIMALES DE COMPAÑÍA, ASÍ COMO AQUELLOS QUE SE UTILIZAN EN ESPECTÁCULOS PÚBLICOS DEL CANTÓN SAMBORONDÓN", registro_oficial: "Registro Oficial E. E. 231", fecha_pub: "10 ene 2020", emision: "26 nov 2019" },
          { n: "79", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE ESTABLECE EL AVALÚO DE LOS PREDIOS URBANOS Y DE LAS CABECERAS PARROQUIALES, DE LAS PARROQUIAS RURALES PARA EL BIENIO “2020 - 2021” DEL CANTÓN GUAYAQUIL", registro_oficial: "Registro Oficial E. E. 184", fecha_pub: "27 dic 2019", emision: "19 dic 2019" },
          { n: "80", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA TENENCIA, CUIDADO, PROTECCIÓN Y CONVIVENCIA CON LA FAUNA URBANA DEL CANTÓN BOLÍVAR", registro_oficial: "Registro Oficial E. E. 323", fecha_pub: "10 feb 2020", emision: "21 nov 2019" },
          { n: "81", tipo: "Ordenanza Municipal", numero: "002-2020", titulo: "ORDENANZA DE RECUPERACIÓN, PROTECCIÓN Y CONTROL DE LA FAUNA URBANA DEL CANTÓN PUERTO QUITO", registro_oficial: "Registro Oficial 231", fecha_pub: "24 jun 2020", emision: "27 feb 2020" },
          { n: "82", tipo: "Ordenanza Municipal", numero: "06-2020", titulo: "ORDENANZA QUE REGULA EL MANEJO DE LA FAUNA URBANA DEL CANTÓN GENERAL ANTONIO ELIZALDE (BUCAY)", registro_oficial: "Registro Oficial 394", fecha_pub: "19 feb 2021", emision: "30 sep 2020" },
          { n: "83", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA DE CREACIÓN DE LA UNIDAD DE FAUNA URBANA, CONTROL Y PROTECCIÓN ANIMAL DEL CANTÓN EL CARMEN", registro_oficial: "Registro Oficial E. E. 1377", fecha_pub: "08 dic 2020", emision: "21 oct 2020" },
          { n: "84", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA SUSTITUTIVA QUE NORMA LA INTRODUCCIÓN DE ANIMALES DE INGRESO AL MERCADO DE ABASTO PARA EL EXPENDIO DE CÁRNICOS DEL CANTÓN EL EMPALME", registro_oficial: "Registro Oficial 4to. S. 509", fecha_pub: "04 ago 2021", emision: "15 jul 2021" },
          { n: "85", tipo: "Ordenanza Municipal", numero: "s/n", titulo: "ORDENANZA QUE REGULA LA TENENCIA Y CONTROL DE PERROS DEL CANTÓN BAÑOS DE AGUA SANTA", registro_oficial: "Registro Oficial 2do. S. 551", fecha_pub: "04 oct 2021", emision: "16 sep 2021" }
        ]
      },
      {
        id: "cat5",
        nombre: "V. Resoluciones",
        registros: [
          { n: "86", tipo: "Resolución", numero: "OSCIDI.2003-017", titulo: "ESTRUCTURA Y ESTATUTO ORGÁNICO POR PROCESOS DEL INSTITUTO NACIONAL DE HIGIENE Y MEDICINA TROPICAL LEOPOLDO IZQUIETA PÉREZ", registro_oficial: "Registro Oficial 150", fecha_pub: "19 ago 2003", emision: "06 may 2003" },
          { n: "87", tipo: "Resolución", numero: "881", titulo: "LISTA DE ENFERMEDADES DE LOS ANIMALES EXÓTICAS A LA SUBREGIÓN ANDINA Y LISTA DE ENFERMEDADES DE LOS ANIMALES DE IMPORTANCIA ECONÓMICA PARA LA SUBREGIÓN ANDINA", registro_oficial: "Registro Oficial 114", fecha_pub: "29 sep 2005", emision: "02 dic 2004" },
          { n: "88", tipo: "Resolución", numero: "137", titulo: "SE ESTABLECEN LOS REQUISITOS SANITARIOS ESPECÍFICOS PARA LA IMPORTACIÓN DE BOVINOS, CARNE CON HUESO REFRIGERADA O CONGELADA, CARNE DESHUESADA REFRIGERADA O CONGELADA DE LA ESPECIE BOVINA, PROCEDENTES DE LOS ESTADOS UNIDOS DE NORTEAMÉRICA", registro_oficial: "Registro Oficial 307", fecha_pub: "25 oct 2010", emision: "30 ago 2010" },
          { n: "89", tipo: "Resolución", numero: "066", titulo: "INSTRUCTIVO PARA EL REGISTRO DE LOS LABORATORIOS QUE CONFORMARÁN LA RED DE LABORATORIOS DEL AGRO – AGROCALIDAD", registro_oficial: "Registro Oficial 494", fecha_pub: "19 jul 2011", emision: "16 jun 2011" },
          { n: "90", tipo: "Resolución", numero: "s/n", titulo: "PRESUPUESTO GENERAL DEL ESTADO 2013", registro_oficial: "Registro Oficial E. E. 39", fecha_pub: "12 ago 2013", emision: "26 jul 2013" },
          { n: "91", tipo: "Resolución", numero: "DAJ-2013452-0201.0172", titulo: "SE ESTABLECE EL PERÍODO PARA LA SEGUNDA FASE DE VACUNACIÓN CONTRA LA FIEBRE AFTOSA EN TODO EL TERRITORIO NACIONAL, CON EXCEPCIÓN DE LA PROVINCIA INSULAR DE GALÁPAGOS", registro_oficial: "Registro Oficial S. 135", fecha_pub: "02 dic 2013", emision: "06 nov 2013" },
          { n: "92", tipo: "Resolución", numero: "00004890", titulo: "MANUAL DE PROCEDIMIENTOS DEL SUBSISTEMA DE VIGILANCIA ALERTA ACCIÓN SIVE - ALERTA", registro_oficial: "Registro Oficial 3er. S. 208", fecha_pub: "18 nov 2014", emision: "11 jun 2014" },
          { n: "93", tipo: "Resolución", numero: "DAJ-2014404-0201.0361", titulo: "ESTABLÉCESE EL INICIO DEL PERIODO PARA LA SEGUNDA FASE DE VACUNACIÓN CONTRA LA FIEBRE AFTOSA EN TODO EL TERRITORIO NACIONAL", registro_oficial: "Registro Oficial 631", fecha_pub: "19 nov 2015", emision: "28 oct 2014" },
          { n: "94", tipo: "Resolución", numero: "0074", titulo: "EXPÍDESE EL PROGRAMA NACIONAL SANITARIO DE PREVENCIÓN Y CONTROL DE RABIA BOVINA", registro_oficial: "Registro Oficial 761", fecha_pub: "24 may 2016", emision: "18 abr 2016" },
          { n: "95", tipo: "Resolución", numero: "0144", titulo: "ADÓPTESE EL “MANUAL DE PROCEDIMIENTOS PARA LA PREVENCIÓN Y CONTROL DE RABIA BOVINA EN EL ECUADOR", registro_oficial: "Registro Oficial 820", fecha_pub: "17 ago 2016", emision: "28 jun 2016" },
          { n: "96", tipo: "Resolución", numero: "70-INDOT-2018", titulo: "EXPÍDESE LA NORMA TÉCNICA DEL PROCESO DE PROCURACIÓN EN DONANTE CADAVÉRICO", registro_oficial: "Registro Oficial 373", fecha_pub: "22 nov 2018", emision: "16 oct 2018" },
          { n: "97", tipo: "Resolución", numero: "0251", titulo: "ESTABLÉCESE EL INICIO DE LA SEGUNDA CAMPAÑA DE VACUNACIÓN CONTRA FIEBRE AFTOSA EN TODO EL TERRITORIO ECUATORIANO A EXCEPCIÓN DE LA REGIÓN INSULAR DE GALÁPAGOS", registro_oficial: "Registro Oficial 104", fecha_pub: "19 dic 2019", emision: "28 nov 2019" },
          { n: "98", tipo: "Resolución", numero: "D-ABG-044-11-2019", titulo: "AUTORÍCESE A LA ABG EL INGRESO Y CONTROL DE LAS VACUNAS PARA CANINOS: DISTEMPER, PARVO, ADENOVIRUS TIPO II, LEPTOSPIRA Y HEPATITIS; Y, LA VACUNA ANTITETÁNICA PARA EQUINOS DEBIDAMENTE REGISTRADA POR LABORATORIOS ACREDITADOS", registro_oficial: "Registro Oficial 116", fecha_pub: "08 ene 2020", emision: "13 nov 2019" },
          { n: "99", tipo: "Resolución", numero: "0008", titulo: "CATÁLOGO DE ENFERMEDADES DE NOTIFICACIÓN O DECLARACIÓN OBLIGATORIA", registro_oficial: "Registro Oficial 163", fecha_pub: "17 mar 2020", emision: "10 feb 2020" },
          { n: "100", tipo: "Resolución", numero: "028-ANT-DIR-2022", titulo: "REGLAMENTO DE MOVILIZACIÓN DE ANIMALES DE ASISTENCIA Y ANIMALES DE COMPAÑÍA DENTRO DEL TRANSPORTE TERRESTRE PÚBLICO INTRA E INTERPROVINCIAL", registro_oficial: "Registro Oficial S. 277", fecha_pub: "27 mar 2023", emision: "16 dic 2022" },
          { n: "101", tipo: "Resolución", numero: "123-INDOT-2023", titulo: "NORMA TÉCNICA DEL PROCESO DE PROCURACIÓN DE TEJIDO OCULAR EN DONANTES CADAVÉRICOS", registro_oficial: "Registro Oficial S. 482", fecha_pub: "22 ene 2024", emision: "18 ago 2023" },
          { n: "102", tipo: "Resolución", numero: "SEIIMLCF-CD-2024-001", titulo: "INSTRUMENTOS TÉCNICOS DE NORMALIZACIÓN FORENSE: A) PROTOCOLO PARA MANEJO INTEGRAL DE CADÁVERES EN EVENTOS ADVERSOS VERSIÓN 1.0. B) MANUAL DE BIOSEGURIDAD PARA LA INVESTIGACIÓN TÉCNICA CIENTÍFICA DEL DELITO VERSIÓN 1.0.", registro_oficial: "Registro Oficial 2do. S. 501", fecha_pub: "20 feb 2024", emision: "23 ene 2024" },
          { n: "103", tipo: "Resolución", numero: "034-DIR-2024-ANT", titulo: "REGLAMENTO PARA LA AUTORIZACIÓN DE FUNCIONAMIENTO, OPERACIÓN Y CONTROL DE LOS TERMINALES TERRESTRES", registro_oficial: "Registro Oficial 2do. S. 710", fecha_pub: "24 dic 2024", emision: "24 dic 2024" }
        ]
      },
      {
        id: "cat6",
        nombre: "VI. Otros tipos de normas (decisiones, acuerdos y convenios)",
        registros: [
          { n: "104", tipo: "Decisión", numero: "254", titulo: "PROGRAMA SUBREGIONAL ANDINO DE CAPACITACIÓN, COOPERACIÓN E INTERCAMBIO TECNOLÓGICO PARA LOS LABORATORIOS DE SALUD ANIMAL Y VIGILANCIA EPIDEMIOLÓGICA", registro_oficial: "Registro Oficial 299", fecha_pub: "20 oct 1989", emision: "20 oct 1989" },
          { n: "105", tipo: "Acuerdo", numero: "1292", titulo: "MODELO DE AUTONOMÍA DE GESTIÓN DE LOS SERVICIOS DE SALUD, EN LOS HOSPITALES Y ÁREAS DE SALUD DEPENDIENTES DEL MINISTERIO DE SALUD PÚBLICA", registro_oficial: "Registro Oficial 198", fecha_pub: "26 may 1999", emision: "29 abr 1999 / Últ. reforma: 13 ene 2006" },
          { n: "106", tipo: "Acuerdo", numero: "0602", titulo: "REGLAMENTO SOBRE LA TENENCIA DE PERROS Y GATOS EN EL PAÍS", registro_oficial: "Registro Oficial 203", fecha_pub: "04 nov 2003", emision: "15 oct 2003" },
          { n: "107", tipo: "Convenio", numero: "s/n", titulo: "ACUERDO DE COOPERACIÓN EN SALUD CON LOS ESTADOS UNIDOS MEXICANOS", registro_oficial: "Registro Oficial 427", fecha_pub: "23 sep 2004", emision: "10 sep 2004" },
          { n: "108", tipo: "Acuerdo", numero: "00000152", titulo: "OCTAVA REVISIÓN DEL CUADRO NACIONAL DE MEDICAMENTOS BÁSICOS", registro_oficial: "Registro Oficial 133", fecha_pub: "15 abr 2011", emision: "28 feb 2011" },
          { n: "109", tipo: "Acuerdo", numero: "00001268", titulo: "SE DECLARA EN SITUACIÓN DE EMERGENCIA SANITARIA AL CANTÓN TAISHA, PROVINCIA DE MORONA SANTIAGO", registro_oficial: "Registro Oficial 623", fecha_pub: "20 ene 2012", emision: "21 dic 2011" },
          { n: "110", tipo: "Acuerdo", numero: "00004875", titulo: "ACUERDO No. 00004875 (SE APRUEBA Y AUTORIZA LA PUBLICACIÓN DE LA GUÍA DE PRÁCTICA CLÍNICA “DIAGNÓSTICO Y TRATAMIENTO DEL PACIENTE CON OSTEOGÉNESIS IMPERFECTA”)", registro_oficial: "Registro Oficial S. 273", fecha_pub: "23 jun 2014", emision: "29 may 2014" },
          { n: "111", tipo: "Acuerdo", numero: "s/n", titulo: "SE PÚBLICA LA GUÍA DE PRÁCTICA CLÍNICA SOBRE CUIDADOS PALIATIVOS", registro_oficial: "Registro Oficial E. E. 206", fecha_pub: "17 nov 2014", emision: "07 may 2014" },
          { n: "112", tipo: "Acuerdo", numero: "0153-2017", titulo: "APRUÉBESE Y AUTORÍCESE LA PUBLICACIÓN DEL PROTOCOLO MANEJO CLÍNICO DEL ENVENENAMIENTO POR MORDEDURAS DE SERPIENTES VENENOSAS Y PICADURAS DE ESCORPIONES", registro_oficial: "Registro Oficial E. E. 143", fecha_pub: "11 dic 2017", emision: "21 nov 2017" },
          { n: "113", tipo: "Acuerdo", numero: "0242-2018", titulo: "APRUÉBESE Y AUTORÍCESE LA PUBLICACIÓN DEL PROTOCOLO “ATENCIÓN INTEGRAL A PACIENTES CON DESÓRDENES DEL DESARROLLO SEXUAL”", registro_oficial: "Registro Oficial E. E. 505", fecha_pub: "30 jul 2018", emision: "05 jun 2018" },
          { n: "114", tipo: "Acuerdo", numero: "00063-2019", titulo: "MANUAL DE VACUNAS PARA ENFERMEDADES INMUNOPREVENIBLES", registro_oficial: "Registro Oficial E. E. 143", fecha_pub: "28 nov 2019", emision: "31 oct 2019 / Últ. reforma: 05 jun 2020" },
          { n: "115", tipo: "Acuerdo", numero: "000001-2022", titulo: "REGLAMENTO PARA EL MANEJO Y DISPOSICIÓN FINAL DE CADÁVERES Y FUNCIONAMIENTO DE LOS ESTABLECIMIENTOS QUE PRESTAN SERVICIOS FUNERARIOS", registro_oficial: "Registro Oficial S. 626", fecha_pub: "26 ene 2022", emision: "24 ene 2022" },
          { n: "116", tipo: "Acuerdo", numero: "00034-2024", titulo: "REFORMA AL ACUERDO MINISTERIAL No. 00136-2021", registro_oficial: "Registro Oficial 506", fecha_pub: "27 feb 2024", emision: "08 feb 2024" },
          { n: "117", tipo: "Acuerdo", numero: "MAATE-MAATE-2025-0003-A", titulo: "PROTOCOLO PARA LA PROTECCIÓN DE ANIMALES SILVESTRES EN PROCESOS DE RETENCIÓN Y DECOMISO", registro_oficial: "Registro Oficial 5to. S. 62", fecha_pub: "18 jun 2025", emision: "28 ene 2025" }
        ]
      }
    ]
  },

  dossier: {
    intro: "El Expediente de Validación (Dossier) constituye el conjunto de evidencia documental que Ecuador presentará ante la OPS/PANAFTOSA para certificar la eliminación de la RHTP. Estos instrumentos representan la consolidación técnica y jurídica del proceso.",
    proposito_formal: "Soporte técnico para la adopción del paquete normativo RHTP. Este expediente opera como un instrumento de apoyo a instancias formales de validación ante el MSP, el CONASA, municipios y organismos de cooperación técnica, definiendo el carácter funcional y vinculante del proceso de eliminación.",
    alerta: {
      fuentes: "Productos 1 a 4 de la consultoría legal RHTP; Estándares OPS/PANAFTOSA y OMS.",
      fecha_corte: "Marzo 2026"
    },
    compromisos_internacionales: [
      {
        organismo: "OPS",
        anio: "2019",
        id: "resolucion-ops",
        titulo: "Resolución CD57/R5",
        descripcion: "Establece el compromiso de los Estados Miembros de eliminar la RHTP con metas de cero muertes humanas.",
        vinculacion: "El paquete normativo actúa como el mecanismo operativo que materializa este compromiso internacional."
      },
      {
        organismo: "PANAFTOSA",
        anio: "2022",
        id: "plan-panaftosa",
        titulo: "Plan de Acción Regional 2022–2030",
        descripcion: "Define estándares: cobertura vacunal canina ≥80%, acceso a PEP ≤24h, vigilancia integrada y coordinación One Health.",
        vinculacion: "Cada uno de los cuatro instrumentos del paquete responde directamente a uno o más de estos estándares técnicos."
      },
      {
        organismo: "OMS",
        anio: "2018",
        id: "consulta-oms",
        titulo: "TRS 1012 - Consulta de Expertos en Rabia",
        descripcion: "Establece la viabilidad técnica y justifica que la inversión en eliminación es 10 veces menor que el costo del tratamiento.",
        vinculacion: "Aporta el sustento científico-técnico y la justificación económica para la inversión nacional en el paquete."
      },
      {
        organismo: "ONU",
        anio: "2015",
        id: "ods-33",
        titulo: "ODS 3.3 — Agenda 2030",
        descripcion: "Meta de poner fin a las epidemias de enfermedades tropicales desatendidas (ETD), incluyendo la rabia humana.",
        vinculacion: "Posiciona al Ecuador en el cumplimiento de sus compromisos soberanos ante el sistema de Naciones Unidas."
      }
    ],
    instrumentos: [
      {
        id: "dos-decreto",
        sigla: "DE",
        nombre: "Decreto Ejecutivo",
        icono: "🏛️",
        color: "#1A5276",
        pregunta: "¿Qué mecanismo de coordinación interinstitucional garantiza la continuidad del programa ante cambios de autoridades?",
        justificacion_epi: "La eliminación requiere una política de Estado, no de gobierno. El Decreto blinda el programa mediante una declaratoria de prioridad nacional que obliga a la articulación permanente entre Salud, Agricultura, Educación y Ambiente, garantizando la asignación de recursos y la persistencia de los procesos de vigilancia más allá de los ciclos políticos.",
        estandar_ref: "OPS CD57/R5: Gobernanza intersectorial obligatoria.",
        norma_hab: "Constitución Art. 147.5: Facultad reglamentaria del Presidente.",
        precedente: {
          pais: "México",
          titulo: "Comité Técnico Interinstitucional",
          desc: "Creación de un mando único de coordinación para la eliminación.",
          resultado: "Eliminación certificada por OPS en 2019."
        },
        indicador: "Decreto Ejecutivo suscrito y publicado en el Registro Oficial.",
        pdf_url: "https://res.cloudinary.com/dsjcuepns/image/upload/v1774493725/DecretoEjecutivo_V1_Rabia_kgkp2d.pdf"
      },
      {
        id: "dos-acuerdo",
        sigla: "AM",
        nombre: "Acuerdo Ministerial MSP",
        icono: "📋",
        color: "#0A9396",
        pregunta: "¿Cómo se garantiza que la información sobre prevención y acceso a profilaxis llegue de forma permanente y auditable?",
        justificacion_epi: "Este instrumento introduce la distinción conceptual crítica entre 'ausencia de casos' por subnotificación y 'ausencia demostrada' por vigilancia negativa robusta. Formaliza los TAT (Turn Around Time) de laboratorio, la tipificación genética del 100% de muestras y el reporte nominal obligatorio de PEP, transformando la vigilancia pasiva en una red activa de generación de evidencia para la validación ante OPS.",
        estandar_ref: "PANAFTOSA: Vigilancia sensible con tipificación genética.",
        norma_hab: "Ley Orgánica de Salud: Rectoría y obligatoriedad de vigilancia.",
        precedente: {
          pais: "Colombia",
          titulo: "Resolución Ministerial de Vigilancia",
          desc: "Protocolo estricto de notificación y TAT de laboratorio.",
          resultado: "Casos urbanos reducidos a cero entre 2018 y 2023."
        },
        indicador: "Acuerdo Ministerial publicado y socializado en las 9 zonas de salud.",
        pdf_url: "https://res.cloudinary.com/dsjcuepns/image/upload/v1774532922/Acuerdo_Ministerial_V1_Rabia_qq54rh.pdf"
      },
      {
        id: "dos-convenio",
        sigla: "CV",
        nombre: "Convenio de Cooperación MSP–AME",
        icono: "🤝",
        color: "#117A65",
        pregunta: "¿Qué mecanismo vincula la vacunación canina (competencia GAD) con la vigilancia epidemiológica (competencia MSP)?",
        justificacion_epi: "El convenio resuelve la fragmentación operativa en el territorio. Establece el flujo de información obligatorio desde las brigadas municipales hacia el SIVE del MSP, asegurando que cada vacuna aplicada se convierta en un registro auditable. Sin esta vinculación formal, las coberturas municipales son invisibles para el proceso de validación internacional.",
        estandar_ref: "Estrategia One Health: Coordinación multinivel.",
        norma_hab: "Constitución Art. 226: Cooperación interinstitucional obligatoria.",
        precedente: {
          pais: "Brasil",
          titulo: "Convenios de Transferencia Técnica",
          desc: "Articulación entre niveles federal, estadual y municipal.",
          resultado: "Eliminación en áreas urbanas sostenida desde 1990."
        },
        indicador: "Convenio Marco suscrito entre MSP y el Directorio Ejecutivo de AME.",
        pdf_url: "https://res.cloudinary.com/dsjcuepns/image/upload/v1774533394/Convenio_AME_V1_Rabia_jmwgs1.pdf"
      },
      {
        id: "dos-ordenanza",
        sigla: "OM",
        nombre: "Ordenanza Municipal Modelo",
        icono: "🏘️",
        color: "#EE9B00",
        pregunta: "¿Cómo se convierte la tenencia responsable en una obligación exigible y no en una campaña voluntaria?",
        justificacion_epi: "La ordenanza dota al municipio de poder de policía sanitaria para intervenir en los determinantes locales (perros en calle, registro, vacunación). Transita de la recomendación al mandato, estableciendo un régimen sancionatorio que incentiva la conducta preventiva y garantiza la sostenibilidad de la inmunidad de rebaño canina por encima del umbral del 80%.",
        estandar_ref: "OMS TRS 1012: Control de población y bienestar animal.",
        norma_hab: "COOTAD Art. 54 lit. r: Competencia en servicios de salud y fauna.",
        precedente: {
          pais: "Argentina",
          titulo: "Ley de Tenencia y Ordenanzas Locales",
          desc: "Registro y vacunación obligatoria en área metropolitana.",
          resultado: "Cobertura vacunal sostenida >85% desde 2010."
        },
        indicador: "Ordenanza Modelo aprobada por AME y validada técnicamente por el MSP.",
        pdf_url: "https://res.cloudinary.com/dsjcuepns/image/upload/v1774533593/Ordenanza_Modelo_AME_V1_Rabia_pnmvjm.pdf"
      }
    ]
  }
};

// Exponer globalmente de forma explícita
window.APP_DATA = APP_DATA;
