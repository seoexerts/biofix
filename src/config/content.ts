/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CONTENIDO DEL SITIO — src/config/content.ts                ║
 * ║                                                              ║
 * ║  Todos los textos editables de la web están aquí.           ║
 * ║  Usa {{city}} donde quieras que aparezca la ciudad principal ║
 * ║  (se reemplaza automáticamente en tiempo de build).         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const content = {

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    eyebrow:     'Especialistas en bioremediation y limpieza forense en Barcelona',
    h1main:      'Limpieza Forense y Bioremediation',
    h1accent:    'Protocolo certificado en Barcelona',
    description: 'Biofix aplica protocolos científicos de bioremediation y descontaminación biológica tras fallecimientos en Barcelona. Técnicos acreditados, documentación legal completa y gestión de residuos biológicos según normativa sanitaria vigente.',
    badge1:      'Certificado de descontaminación con validez legal',
    badge2:      'Técnicos acreditados en bioremediation',
    badge3:      'Gestión de residuos autorizada ARC',
    badge4:      'Cobertura Barcelonés y Baix Llobregat',
    cardStat:    '+900',
    cardLabel:   'intervenciones documentadas en Cataluña',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       'Protocolos científicos de descontaminación',
      description: 'Aplicamos protocolos de bioremediation basados en normativa sanitaria europea. Cada intervención incluye análisis previo de agentes biológicos, selección de biocidas específicos y verificación post-limpieza mediante test de superficie.',
    },
    {
      icon: 'clock',
      title:       'Respuesta técnica en menos de 2 horas',
      description: 'Nuestro equipo técnico se moviliza en menos de 2 horas para intervenciones urgentes en {{city}}. Disponibilidad continua 365 días al año, con vehículo equipado y material de nivel biológico para análisis in situ.',
    },
    {
      icon: 'check',
      title:       'Documentación y certificación completa',
      description: 'Emitimos certificado de descontaminación biológica, albaranes de residuos peligrosos y acta de intervención con validez legal. Imprescindible para herencias, seguros y procesos judiciales en Barcelona.',
    },
    {
      icon: 'box',
      title:       'Gestión de residuos biológicos autorizada',
      description: 'Somos transportistas autorizados por la Agència de Residus de Catalunya (ARC) para residuos biológicos peligrosos. Todos los residuos se eliminan en gestores certificados con documentación trazable.',
    },
    {
      icon: 'heart',
      title:       'Confidencialidad y protocolo de privacidad',
      description: 'Firmamos acuerdo de confidencialidad con cada cliente. El equipo trabaja con indumentaria neutra, vehículos sin rotulación y acceso discreto para preservar la intimidad en {{city}}.',
    },
    {
      icon: 'users',
      title:       'Técnicos especializados y acreditados',
      description: 'Todo el personal cuenta con formación específica en bioremediation, manejo de residuos biológicos y primeros auxilios psicológicos. Acreditados por la Generalitat de Catalunya como gestores de residuos sanitarios.',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'retirada-de-enseres-y-materiales-afectados',
      nombre:      'Retirada de enseres y materiales afectados',
      description: 'Biofix realiza la retirada técnica de materiales contaminados con clasificación según normativa de residuos biológicos. Cada elemento se cataloga, embala según protocolo y gestiona con albarán trazable ante gestores autorizados en Cataluña.',
      features:    ['Clasificación según normativa RD 180/2015', 'Embalaje de seguridad nivel biológico', 'Albarán de residuos peligrosos', 'Gestión en instalación autorizada ARC'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-y-descontaminacion-de-la-zona-afectada',
      nombre:      'Limpieza y descontaminación de la zona afectada',
      description: 'Protocolo de descontaminación en dos fases: eliminación mecánica de materia orgánica y aplicación de biocidas de alto espectro. Biofix verifica la eficacia mediante análisis de superficie con resultados documentados.',
      features:    ['Análisis de superficie pre y post-intervención', 'Biocidas de nivel hospitalario', 'Verificación con test ATP de luminiscencia', 'Certificado de descontaminación con validez legal'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'desinfeccion-y-sanitizacion-profesional',
      nombre:      'Desinfección y sanitización profesional',
      description: 'Biofix aplica sistemas de desinfección por nebulización en frío con desinfectantes virucidas y bactericidas registrados en la AEMPS. El tratamiento garantiza la eliminación de patógenos en todas las superficies, incluidas zonas de difícil acceso.',
      features:    ['Nebulización con desinfectante AEMPS registrado', 'Cobertura total de superficies y aire', 'Certificado de desinfección emitido', 'Efectivo frente a patógenos biológicos y químicos'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'eliminacion-de-olores-persistentes',
      nombre:      'Eliminación de olores persistentes',
      description: 'Tratamiento de olores mediante combinación de enzimas proteolíticas, oxidación catalítica y generación de ozono calibrado. Biofix identifica el foco mediante análisis organoléptico y aplica el tratamiento específico según el origen del olor.',
      features:    ['Diagnóstico del foco emisor', 'Tratamiento enzimático proteolítico', 'Ozonización calibrada y controlada', 'Garantía de resultado o repetición gratuita'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'gestion-de-residuos-biologicos-y-materiales-contaminados',
      nombre:      'Gestión de residuos biológicos y materiales contaminados',
      description: 'Como transportista autorizado, Biofix gestiona la cadena de custodia completa de residuos biológicos del grupo III y IV. Documentación trazable para notarios, administradores de fincas e instituciones que requieran acreditación legal de la gestión.',
      features:    ['Autorización ARC para residuos peligrosos', 'Documento de control de residuos (DCR)', 'Cadena de custodia documentada', 'Eliminación en gestor certificado con justificante'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-integral-y-recuperacion-de-la-vivienda',
      nombre:      'Limpieza integral y recuperación de la vivienda',
      description: 'Servicio técnico completo para la recuperación total del inmueble: descontaminación biológica, tratamiento estructural de paredes y suelos afectados, eliminación de olores y verificación final. Biofix entrega el inmueble con certificado de habitabilidad técnica.',
      features:    ['Descontaminación estructural completa', 'Tratamiento de superficies porosas afectadas', 'Verificación final con análisis documental', 'Apto para herencias, arrendamientos y venta'],
      featured:    true,
      ctaPage:     true,
    }
  ],

  // ── Textos de secciones ───────────────────────────────────────
  sections: {
    beneficiosH2:   '¿Por qué Biofix en {{city}}?',
    beneficiosSub:  'Protocolos científicos. Documentación legal. Técnicos acreditados por la Generalitat de Catalunya.',
    serviciosH2:    'Servicios técnicos en {{city}}',
    serviciosSub:   'Cada intervención documentada y certificada según normativa sanitaria vigente.',
    zonaH2:         'Cobertura técnica: {{city}} y área metropolitana',
    procesoH2:      'Protocolo de intervención: 4 fases técnicas',
    testimoniosH2:  'Clientes que confían en nuestro protocolo en {{city}}',
    testimoniosSub: 'Administradores de fincas, bufetes de abogados y familias avalan nuestro trabajo.',
    preciosH2:      'Tarifas orientativas en {{city}}',
    zonaComarca:    'de la comarca',
    zonaBarrios:    'Intervenciones técnicas en los barrios de {{city}}:',
    preciosSub:     'Presupuesto técnico gratuito. Precio final según análisis previo del espacio y nivel de contaminación biológica.',
    faqH2:          'Preguntas técnicas frecuentes en {{city}}',
    preciosNota:    'Tarifas orientativas para {{city}}. El presupuesto definitivo requiere evaluación técnica previa del inmueble. Siempre gratuito y sin compromiso.',
    faqSub:         'Información técnica y legal sobre el proceso de descontaminación biológica.',
  },

  // ── Testimonios (4) ───────────────────────────────────────────
  testimonials: [
    {
      initials: 'RP',
      name:     'Ramón P.',
      location: 'Administrador de Fincas, Eixample',
      service:  'Descontaminación biológica y certificación',
      quote:    'Trabajo con Biofix desde hace tres años para todos los casos de fallecimiento en las fincas que gestiono. Su documentación es impecable y los certificados que emiten son válidos ante notaría. Indispensables para transmisiones de inmueble.',
    },
    {
      initials: 'CT',
      name:     'Carmen T.',
      location: 'Abogada, Sarrià-Sant Gervasi',
      service:  'Gestión de residuos biológicos con documentación legal',
      quote:    'En procesos sucesorios con viviendas que requieren limpieza forense, Biofix nos proporciona toda la documentación necesaria: albaranes, certificados ARC y acta de intervención. Muy recomendables para casos con implicación legal.',
    },
    {
      initials: 'MF',
      name:     'Miquel F.',
      location: 'Gràcia, Barcelona',
      service:  'Protocolo completo de bioremediation',
      quote:    'Necesitaba que el piso de mi padre quedara certificado para venderlo. Biofix hizo el protocolo completo: análisis previo, descontaminación y certificado final. El notario aceptó sin problema la documentación que me entregaron.',
    },
    {
      initials: 'SN',
      name:     'Sonia N.',
      location: 'Cornellà de Llobregat',
      service:  'Verificación post-limpieza con análisis de superficie',
      quote:    'Lo que me dio confianza fue que no se fueron sin hacer el test final de superficie. Vi los resultados del análisis antes de firmar la conformidad. Eso es lo que diferencia un servicio técnico serio de los demás.',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      'Intervención básica (1-2 estancias)',
      precio:    'desde 650 €',
      highlight: false,
      features:  ['Diagnóstico técnico previo', 'Descontaminación de zona afectada', 'Certificado de desinfección', 'Albarán de residuos'],
    },
    {
      tipo:      'Protocolo completo (3+ estancias)',
      precio:    'desde 1.050 €',
      highlight: false,
      badge:     'Más solicitado',
      features:  ['Análisis pre y post-intervención', 'Descontaminación integral de todo el inmueble', 'Eliminación de olores con tratamiento enzimático', 'Gestión completa de residuos peligrosos', 'Certificado de habitabilidad técnica'],
    },
    {
      tipo:      'Bioremediation integral + certificación legal',
      precio:    'Presupuesto técnico',
      highlight: true,
      badge:     'Desde 1.400€',
      features:  ['Protocolo completo documentado', 'Apto para herencias y transmisiones notariales', 'Informe técnico con validez legal', 'Verificación final con test ATP', 'Coordinación con notaría o asesoría jurídica'],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '¿Qué es la bioremediation y por qué es necesaria tras un fallecimiento?',
      respuesta: 'La bioremediation es el proceso técnico de eliminación de contaminantes biológicos (bacterias, virus, fluidos corporales) mediante agentes específicos. Tras un fallecimiento, especialmente si no se descubre de inmediato, es imprescindible para garantizar la seguridad sanitaria del inmueble y su aptitud para venta o arrendamiento.',
    },
    {
      pregunta:  '¿Qué documentación legal entrega Biofix tras la intervención?',
      respuesta: 'Emitimos certificado de descontaminación biológica, albarán de residuos peligrosos según RD 180/2015, acta técnica de intervención y, en casos con necesidad legal, informe pericial. Toda la documentación es válida ante notarías, juzgados y compañías de seguros.',
    },
    {
      pregunta:  '¿Necesito el certificado de Biofix para vender o alquilar el piso?',
      respuesta: 'No es un requisito legal obligatorio, pero muchos compradores y arrendatarios lo exigen, y notarías y aseguradoras lo valoran positivamente. En casos con fallecimiento con tiempo sin descubrir, la certificación técnica previene responsabilidades futuras.',
    },
    {
      pregunta:  '¿Cómo verificáis que la descontaminación ha sido efectiva?',
      respuesta: 'Utilizamos test de bioluminiscencia ATP que miden en tiempo real la carga biológica residual en superficies. Si el resultado supera el umbral de seguridad, repetimos el tratamiento sin coste adicional. El resultado del test queda recogido en el certificado de intervención.',
    },
    {
      pregunta:  '¿Trabajáis con gestores de residuos autorizados por la Generalitat?',
      respuesta: 'Sí. Biofix está inscrito como transportista de residuos peligrosos en el registro de la Agència de Residus de Catalunya (ARC). Todos los residuos biológicos se entregan a gestores certificados con el correspondiente documento de control de residuos (DCR).',
    },
    {
      pregunta:  '¿Actuáis en casos con intervención policial o judicial?',
      respuesta: 'Sí, coordinamos con Mossos d\'Esquadra, policía local y juzgados cuando la situación lo requiere. Respetamos los plazos de levantamiento del precinto y adaptamos la intervención a los requerimientos del procedimiento judicial. Nuestra documentación es apta para uso en procesos legales.',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      '1. Evaluación técnica y presupuesto sin compromiso',
      descripcion: 'Nuestro técnico realiza una evaluación in situ del estado del inmueble en {{city}}: identifica agentes biológicos presentes, evalúa el nivel de contaminación y determina el protocolo más adecuado. El presupuesto técnico se entrega por escrito en menos de 24 horas.',
    },
    {
      titulo:      '2. Planificación del protocolo de intervención',
      descripcion: 'Diseñamos el protocolo específico según el tipo y nivel de contaminación detectada: selección de biocidas, secuencia de tratamiento, medidas de seguridad y gestión de residuos. Todo queda documentado antes de iniciar la intervención.',
    },
    {
      titulo:      '3. Ejecución con equipo técnico especializado',
      descripcion: 'El equipo de Biofix ejecuta el protocolo con EPIs de nivel biológico, equipos de nebulización calibrados y productos AEMPS registrados. Trabajamos con discreción total en {{city}}, sin señalización exterior y en horarios adaptados a sus necesidades.',
    },
    {
      titulo:      '4. Verificación y entrega de documentación certificada',
      descripcion: 'Realizamos análisis de superficie post-intervención para verificar la eficacia del tratamiento. Si los resultados son conformes, emitimos el certificado de descontaminación, albaranes de residuos y acta técnica de intervención con validez legal.',
    }
  ],

} as const;

export type Content = typeof content;
