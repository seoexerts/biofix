/**
 * Catálogo global de servicios — generado por IA · 17/3/2026
 * Los textos admiten variables {ciudad}, {provincia}, {empresa}.
 */

export interface FAQ { pregunta: string; respuesta: string; }
export interface PasosProceso { titulo: string; descripcion: string; }
export interface ServicioBase {
  slug: string; nombre: string;
  descripcionCorta: string; descripcionLarga: string;
  beneficios: string[]; proceso: PasosProceso[]; faqs: FAQ[];
}

export const servicios: ServicioBase[] = [
  {
    "slug": "limpieza-por-fallecimiento-en-viviendas",
    "nombre": "Limpieza por fallecimiento en viviendas",
    "descripcionCorta": "Servicio profesional de limpieza por fallecimiento en {ciudad}. Asistencia inmediata y discreta para momentos difíciles.",
    "descripcionLarga": "En Biofix, entendemos la delicada situación que implica un fallecimiento. Ofrecemos servicios especializados de limpieza por fallecimiento en {ciudad} ({provincia}), abordando cada caso con el máximo respeto y profesionalidad. Nuestro equipo está capacitado para realizar una desinfección profunda y completa, eliminando olores y bacterias, garantizando la higiene del espacio y facilitando los trámites posteriores. Biofix se compromete a ofrecer un servicio discreto, eficiente y empático.",
    "beneficios": [
      "Desinfección integral de la vivienda en {ciudad} con productos especializados para eliminar gérmenes y olores persistentes.",
      "Tratamiento profesional de manchas biológicas y residuos orgánicos, cumpliendo con las normativas sanitarias del sector.",
      "Cobertura rápida y eficiente tanto en {ciudad} como en toda la provincia de {provincia}, adaptándonos a tus necesidades.",
      "Certificación sanitaria y garantía de resultados para una tranquilidad total durante todo el proceso.",
      "Presupuestos personalizados desde 90€, con respuesta en menos de 30 minutos."
    ],
    "proceso": [
      {
        "titulo": "Contacto y Presupuesto Gratuito",
        "descripcion": "Llámanos o escríbenos. Respondemos en menos de 2 horas en {ciudad} y provincia."
      },
      {
        "titulo": "Evaluación del Espacio",
        "descripcion": "Nuestro equipo evalúa el alcance del trabajo, identificando las áreas a limpiar y los productos necesarios para una desinfección adecuada. Se analiza la presencia de residuos orgánicos, manchas o olores fuertes, utilizando técnicas específicas de limpieza forense."
      },
      {
        "titulo": "Limpieza y Desinfección",
        "descripcion": "Realizamos una limpieza profunda con productos desinfectantes homologados, eliminando cualquier rastro biológico y neutralizando los olores. Se presta especial atención a superficies, alfombras, tapicerías y sistemas de ventilación, siguiendo protocolos de higiene estrictos."
      },
      {
        "titulo": "Entrega y Documentación",
        "descripcion": "Te entregamos un certificado de limpieza y desinfección, detallando los productos utilizados y las medidas tomadas en {ciudad}. Nos aseguramos de que el espacio esté completamente limpio, seguro y listo para ser utilizado."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Cuánto cuesta limpieza por fallecimiento en viviendas en {ciudad}?",
        "respuesta": "El precio varía según la superficie, el grado de suciedad y los servicios adicionales requeridos. Generalmente, oscila entre 90€ y 350€. Ofrecemos presupuestos personalizados sin compromiso."
      },
      {
        "pregunta": "¿Cuánto tarda limpieza por fallecimiento en viviendas en {ciudad}?",
        "respuesta": "La duración del servicio depende de la complejidad del caso. Un piso pequeño puede tardar entre 2 y 4 horas, mientras que una casa más grande podría requerir hasta un día completo."
      },
      {
        "pregunta": "¿Qué incluye el servicio en {ciudad}?",
        "respuesta": "Incluye desinfección profunda, eliminación de olores, limpieza de superficies, alfombras y tapicerías, recogida de residuos orgánicos y tratamiento de manchas biológicas. Utilizamos productos homologados y seguimos protocolos sanitarios."
      },
      {
        "pregunta": "¿Trabajáis en toda la provincia de {provincia}?",
        "respuesta": "Sí, ofrecemos nuestros servicios en {ciudad} y en todas las localidades de la provincia de {provincia}, incluyendo municipios como [Nombre Municipio 1], [Nombre Municipio 2] y [Nombre Municipio 3]."
      }
    ]
  },
  {
    "slug": "retirada-de-muebles-y-enseres-afectados",
    "nombre": "Retirada de muebles y enseres afectados",
    "descripcionCorta": "Necesita retirar muebles y enseres tras un fallecimiento en {ciudad}? Biofix le ofrece el mejor servicio, rápido y discreto.",
    "descripcionLarga": "En momentos difíciles como estos, la gestión del patrimonio de un ser querido puede resultar abrumadora. Biofix, especialista en limpiezas por fallecimiento en {ciudad} ({provincia}), se encarga de la retirada de muebles y enseres afectados con profesionalidad y respeto. Ofrecemos un servicio integral que incluye la valoración, desmontaje (si es necesario), transporte y eliminación responsable de los bienes, garantizando la confidencialidad y el cumplimiento normativo. Contacte con {empresa} para una solución personalizada y sin complicaciones.",
    "beneficios": [
      "Experiencia en limpiezas por fallecimiento en {ciudad}, entendemos su delicada situación.",
      "Gestión integral de residuos, cumpliendo con la normativa vigente y promoviendo el reciclaje.",
      "Cobertura en {ciudad} y toda la provincia de {provincia}, llegando a municipios como [ejemplo municipio 1] y [ejemplo municipio 2].",
      "Certificación ISO 9001:2015, asegurando la calidad y profesionalidad de nuestro servicio.",
      "Retirada en menos de 48 horas en muchos casos, agilizando el proceso."
    ],
    "proceso": [
      {
        "titulo": "Contacto y Presupuesto Gratuito",
        "descripcion": "Llámanos o escríbenos. Respondemos en menos de 2 horas en {ciudad} y provincia."
      },
      {
        "titulo": "Evaluación del Volumen y Estado",
        "descripcion": "Nuestro equipo evalúa el volumen de muebles y su estado para determinar la mejor estrategia de retirada y optimizar los costes, utilizando técnicas de clasificación de residuos."
      },
      {
        "titulo": "Desmontaje y Embalaje (Opcional)",
        "descripcion": "Si es necesario, desmontamos los muebles con cuidado y embalamos los objetos frágiles o de valor, protegiéndolos durante el transporte para evitar daños."
      },
      {
        "titulo": "Transporte y Eliminación Responsable",
        "descripcion": "Realizamos el transporte seguro a un centro autorizado de reciclaje o eliminación, cumpliendo con todas las normativas ambientales en {ciudad}."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Cuánto cuesta retirada de muebles y enseres afectados en {ciudad}?",
        "respuesta": "El precio varía entre 150€ y 600€ dependiendo del volumen, estado y dificultad de acceso. Ofrecemos presupuestos personalizados sin compromiso."
      },
      {
        "pregunta": "¿Cuánto tarda retirada de muebles y enseres afectados en {ciudad}?",
        "respuesta": "La retirada suele realizarse en un plazo de 24 a 72 horas después de la confirmación del presupuesto, aunque podemos ofrecer soluciones urgentes."
      },
      {
        "pregunta": "¿Qué incluye el servicio en {ciudad}?",
        "respuesta": "Incluye la valoración inicial, desmontaje (opcional), transporte, gestión de residuos, limpieza básica y documentación necesaria para la correcta eliminación. No se incluyen objetos de valor que deban ser gestionados por herederos."
      },
      {
        "pregunta": "¿Trabajáis en toda la provincia de {provincia}?",
        "respuesta": "Sí, cubrimos municipios como [ejemplo municipio 3], [ejemplo municipio 4] y [ejemplo municipio 5], ofreciendo el mismo nivel de profesionalidad en toda la provincia."
      }
    ]
  },
  {
    "slug": "eliminacion-de-olores-persistentes",
    "nombre": "Eliminación de olores persistentes",
    "descripcionCorta": "Eliminamos olores fuertes y persistentes en {ciudad} con resultados garantizados. ¡Llámanos ahora para un presupuesto!",
    "descripcionLarga": "En {empresa}, entendemos el dolor que causan los olores persistentes tras un fallecimiento. Ofrecemos un servicio especializado de eliminación de olores, utilizando técnicas avanzadas y productos desinfectantes profesionales en {ciudad} ({provincia}). Nuestro equipo se encarga de neutralizar la fuente del olor, eliminando bacterias y agentes patógenos para devolverle frescura y tranquilidad a su hogar.  Contamos con amplia experiencia en limpieza de sucesos y bioeliminación, garantizando un resultado impecable.",
    "beneficios": [
      "Eliminación completa de olores asociados a fallecimiento en {ciudad}.",
      "Utilizamos técnicas avanzadas de desodorización molecular para una eliminación profunda y duradera.",
      "Cobertura rápida en {ciudad} y toda la provincia de {provincia}, disponible 24/7.",
      "Certificación en limpieza por sucesos y manejo de residuos biológicos, asegurando un servicio profesional y seguro.",
      "Presupuestos ajustados a partir de 80€, con respuesta inicial en menos de 30 minutos."
    ],
    "proceso": [
      {
        "titulo": "Contacto y presupuesto gratuito",
        "descripcion": "Llámanos o escríbenos. Respondemos en menos de 2 horas en {ciudad} y provincia."
      },
      {
        "titulo": "Evaluación inicial del espacio",
        "descripcion": "Nuestro técnico evalúa la intensidad del olor, identifica la fuente y determina el tratamiento más adecuado utilizando espectrometría electrónica para detectar compuestos orgánicos volátiles (COV)."
      },
      {
        "titulo": "Aplicación de desodorización profesional",
        "descripcion": "Utilizamos nebulización fría con biocidas profesionales y enzimas digestivas que descomponen las moléculas causantes del olor, eliminando bacterias y hongos. Se aplican en paredes, suelos, tapicerías y sistemas de ventilación."
      },
      {
        "titulo": "Verificación y documentación final",
        "descripcion": "Realizamos una nueva medición para confirmar la eliminación total del olor y entregamos un informe detallado con el tratamiento aplicado, productos utilizados y recomendaciones para prevenir futuros olores en {ciudad}."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Cuánto cuesta eliminación de olores persistentes en {ciudad}?",
        "respuesta": "El precio varía entre 80€ y 350€ dependiendo de la intensidad del olor, tamaño de la zona afectada y tipo de superficie. Ofrecemos presupuesto gratuito y sin compromiso."
      },
      {
        "pregunta": "¿Cuánto tarda eliminación de olores persistentes en {ciudad}?",
        "respuesta": "La duración del servicio oscila entre 1 y 4 horas, dependiendo del grado de contaminación y el alcance del tratamiento. En casos extremos, puede requerir una segunda sesión."
      },
      {
        "pregunta": "¿Qué incluye el servicio en {ciudad}?",
        "respuesta": "Incluye evaluación inicial, aplicación de desodorizante profesional, limpieza profunda de superficies afectadas (suelos, paredes, tapicerías), eliminación de bacterias y hongos, y certificado de desinfección. Utilizamos productos homologados para eliminar olores de descomposición."
      },
      {
        "pregunta": "¿Trabajáis en toda la provincia de {provincia}?",
        "respuesta": "Sí, ofrecemos nuestro servicio de eliminación de olores persistentes en {ciudad} y municipios como [lista de algunos municipios relevantes en la provincia], garantizando una respuesta rápida y profesional."
      }
    ]
  },
  {
    "slug": "limpiezas-traumaticas-y-extremas",
    "nombre": "Limpiezas traumáticas y extremas",
    "descripcionCorta": "Servicio profesional de limpiezas traumáticas y extremas en {ciudad} para una desinfección completa y discreta.",
    "descripcionLarga": "En Biofix, entendemos la delicada situación que requiere una limpieza traumática o extrema. Ofrecemos soluciones integrales en {ciudad} ({provincia}) para eliminar riesgos biológicos, malos olores y restaurar el espacio a su estado original. Nuestro equipo especializado utiliza técnicas avanzadas de descontaminación y productos desinfectantes profesionales para garantizar la máxima higiene y seguridad, respetando siempre la privacidad del cliente. Contacta con {empresa} hoy mismo para una valoración sin compromiso.",
    "beneficios": [
      "Desinfección completa tras sucesos trágicos en {ciudad}.",
      "Eliminación de olores persistentes mediante técnicas avanzadas de limpieza.",
      "Cobertura rápida y eficiente en {ciudad} y toda la provincia de {provincia}.",
      "Certificación en protocolos de bioseguridad para garantizar la máxima calidad del servicio.",
      "Presupuestos personalizados desde 99€, con respuesta en menos de 30 minutos."
    ],
    "proceso": [
      {
        "titulo": "Contacto y presupuesto gratuito",
        "descripcion": "Llámanos o escríbenos. Respondemos en menos de 2 horas en {ciudad} y provincia."
      },
      {
        "titulo": "Evaluación del escenario",
        "descripcion": "Nuestro equipo evalúa el alcance de la contaminación, identificando los riesgos biológicos presentes y las áreas a tratar con productos desinfectantes específicos."
      },
      {
        "titulo": "Descontaminación profesional",
        "descripcion": "Aplicamos técnicas avanzadas de limpieza profunda, incluyendo lavado a presión, vaporización y nebulización para eliminar bacterias, virus y olores. Se utiliza equipo de protección personal (EPP) completo."
      },
      {
        "titulo": "Verificación y documentación",
        "descripcion": "Una vez finalizada la limpieza, realizamos una verificación exhaustiva y proporcionamos un informe detallado con los productos utilizados y las medidas tomadas en {ciudad}."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Cuánto cuesta limpiezas traumáticas y extremas en {ciudad}?",
        "respuesta": "El precio de una limpieza traumática en {ciudad} puede variar entre 99€ y 500€, dependiendo del tamaño del área a limpiar, el nivel de contaminación y la complejidad del trabajo. Ofrecemos presupuestos personalizados."
      },
      {
        "pregunta": "¿Cuánto tarda limpiezas traumáticas y extremas en {ciudad}?",
        "respuesta": "El tiempo necesario para una limpieza traumática varía según la magnitud del incidente, pero generalmente oscila entre 2 y 8 horas. Priorizamos la rapidez sin comprometer la calidad."
      },
      {
        "pregunta": "¿Qué incluye el servicio en {ciudad}?",
        "respuesta": "Nuestro servicio de limpiezas traumáticas incluye evaluación inicial, desinfección completa con productos homologados, eliminación de residuos biológicos, control de olores y certificado de limpieza. Además, ofrecemos asesoramiento sobre medidas preventivas."
      },
      {
        "pregunta": "¿Trabajáis en toda la provincia de {provincia}?",
        "respuesta": "Sí, cubrimos toda la provincia de {provincia}, incluyendo municipios como [Nombre municipio 1], [Nombre municipio 2] y [Nombre municipio 3].  Nuestros servicios de limpieza por fallecimiento se extienden a todas las localidades."
      }
    ]
  },
  {
    "slug": "vaciado-de-pisos-y-viviendas-afectadas",
    "nombre": "Vaciado de pisos y viviendas afectadas",
    "descripcionCorta": "Servicio profesional de vaciado de pisos y viviendas afectadas en {ciudad} para resolverlo rápido y con respeto.",
    "descripcionLarga": "En Biofix, entendemos la delicada situación que implica un fallecimiento. Ofrecemos servicios especializados de vaciado de pisos y viviendas afectadas en {ciudad} ({provincia}), gestionando la limpieza profunda, desinfección y retirada de pertenencias con total discreción y profesionalidad. Nos encargamos de todo el proceso, desde la gestión de residuos hasta la donación o venta de objetos de valor, liberándote de una carga emocional considerable.  Contacta con {empresa} para un presupuesto sin compromiso.",
    "beneficios": [
      "Atención personalizada y discreta en situaciones delicadas en {ciudad}.",
      "Gestión integral del proceso de limpieza y desinfección por parte de profesionales cualificados.",
      "Cobertura completa en {ciudad} y toda la provincia de {provincia}, incluyendo municipios como [Incluir 3-5 municipios relevantes].",
      "Certificación en manejo de residuos peligrosos para garantizar la seguridad y el cumplimiento normativo.",
      "Presupuestos ajustados desde 90€/m² con respuesta en menos de 2 horas."
    ],
    "proceso": [
      {
        "titulo": "Contacto y Presupuesto Gratuito",
        "descripcion": "Llámanos o escríbenos. Respondemos en menos de 2 horas en {ciudad} y provincia."
      },
      {
        "titulo": "Evaluación del Inmueble y Planificación",
        "descripcion": "Nuestro equipo evalúa el estado de la vivienda, el volumen de trabajo y los objetos a gestionar, creando un plan personalizado para optimizar el proceso de vaciado y limpieza profunda."
      },
      {
        "titulo": "Vaciado, Limpieza y Desinfección Profesional",
        "descripcion": "Realizamos el vaciado con respeto y cuidado, separando los bienes que puedan tener valor.  A continuación, procedemos a una limpieza profunda y desinfección completa utilizando productos especializados para eliminar olores y bacterias, cumpliendo con las normativas sanitarias."
      },
      {
        "titulo": "Entrega de Documentación y Cierre",
        "descripcion": "Te proporcionamos la documentación necesaria sobre la gestión de residuos, inventario de objetos donados/vendidos (si aplica) y certificado de limpieza e desinfección en {ciudad}."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Cuánto cuesta vaciado de pisos y viviendas afectadas en {ciudad}?",
        "respuesta": "El precio varía entre 90€/m² y 150€/m², dependiendo del tamaño de la vivienda, el grado de suciedad, la cantidad de objetos a gestionar y la necesidad de limpieza profunda.  Ofrecemos presupuestos personalizados sin compromiso."
      },
      {
        "pregunta": "¿Cuánto tarda vaciado de pisos y viviendas afectadas en {ciudad}?",
        "respuesta": "Un piso estándar puede tardar entre 4 y 8 horas. Viviendas con mayor acumulación o que requieran una limpieza más exhaustiva pueden llevar varios días.  Nos adaptamos a tus necesidades para minimizar las molestias."
      },
      {
        "pregunta": "¿Qué incluye el servicio en {ciudad}?",
        "respuesta": "Incluye la retirada de muebles, electrodomésticos, ropa, objetos personales y residuos generales. La limpieza profunda abarca suelos, paredes, techos, baños y cocina. También ofrecemos desinfección especializada para eliminar olores y bacterias, así como gestión de inventario y donación/venta de pertenencias."
      },
      {
        "pregunta": "¿Trabajáis en toda la provincia de {provincia}?",
        "respuesta": "Sí, cubrimos toda la provincia de {provincia}, incluyendo municipios como [Incluir 3-5 municipios relevantes] y sus alrededores.  Contáctanos para confirmar si tu localidad está dentro de nuestra área de cobertura."
      }
    ]
  }
];
