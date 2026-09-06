export const profile = {
  name: 'Alex Ortega Redondo',
  role: 'Ingeniero Informático',
  headline: 'Data Science, Machine Learning and I+D oriented',
  email: 'aortega.redondo@outlook.es',
  location: 'Albacete, España',
  linkedin: 'https://www.linkedin.com/in/alexortegaredondo',
  github: 'https://github.com/Alexorte',
  cv: '/CV - Alex Ortega.pdf',
  summary:
    'Ingeniero Informático y actualmente cursando un Máster en Inteligencia Artificial. Tengo especial interés en ciencia de datos, ingeniería de datos y proyectos de I+D, así como en la aplicación de técnicas de machine learning y análisis de datos a problemas reales. Me motiva seguir desarrollándome en entornos técnicos y de investigación donde pueda combinar programación, datos e inteligencia artificial.'
}

export const navLinks = [
  // { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' }
]

// export const highlights = [
//   {
//     value: 'Data & ML',
//     label: 'Python · Numpy · pandas · scikit-learn · TensorFlow · Keras'
//   },
//   {
//     value: 'Full-stack',
//     label: 'React.js · TypeScript · Django REST · Node.js · Django'
//   },
//   {
//     value: 'Reporting',
//     label: 'EDA · visualización · Power BI'
//   },
//   {
//     value: 'Dev tools',
//     label: 'Git · Docker · Redis · Postman'
//   }
// ]

export const skills = [
  {
    title: 'Data Science / Machine Learning',
    items: [
      'Python',
      'NumPy',
      'pandas',
      'scikit-learn',
      'TensorFlow',
      'Keras',
      'Matplotlib',
      'Seaborn'
    ]
  },
  {
    title: 'Data Engineering / Analytics',
    items: [
      'SQL',
      'ETL',
      'Power BI',
      'DBeaver',
      'Modelado de datos'
    ]
  },
  {
    title: 'Bases de datos',
    items: [
      'PostgreSQL',
      'MySQL',
      'Redis'
    ]
  },
  {
    title: 'Desarrollo y herramientas',
    items: [
      'Django',
      'Django REST Framework',
      'React',
      'TypeScript',
      'Node.js',
      'APIs REST',
      'Git',
      'Docker',
      'Docker Compose',
      'Postman',
      'JIRA'
    ]
  }
]

type Project = {
  title: string
  type: string
  description: string
  bullets: string[]
  stack: string[]
  repo?: string
  demo?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'Chatbot conversacional para cohortes de pacientes',
    type: 'NLP / Data',
    description:
      'Aplicación conversacional orientada a facilitar la detección de cohortes de pacientes con enfermedades crónicas mediante consultas en lenguaje natural.',
    bullets: [
      'Interfaz tipo chatbot para consultar y filtrar información clínica de forma más intuitiva.',
      'Diseño enfocado en la identificación de cohortes de pacientes a partir de criterios conversacionales.',
      'Proyecto aplicado a un caso realista de datos sanitarios y apoyo a la toma de decisiones.'
    ],
    stack: ['Python', 'NLP', 'Chatbot', 'Datos sanitarios'],
    demo: '/demos/chatbot-cohortes-pacientes.mp4',
    featured: true
  },
  {
    title: 'Detección de jugadores y mapas de calor',
    type: 'Computer Vision',
    description:
      'Proyecto de visión artificial para detectar jugadores en imágenes y generar mapas de calor a partir de las posiciones detectadas.',
    bullets: [
      'Entrenamiento de una red neuronal convolucional para detección de jugadores.',
      'Transformación de detecciones en visualizaciones tipo heatmap.',
      'Aplicación práctica de deep learning a análisis espacial deportivo.',
      'Comparación del mapa de calor generado contra el mapa de calor esperado.',
      'Métricas para verificar el mapa de calor generado.'
    ],
    stack: ['Python', 'CNN', 'TensorFlow/Keras', 'Computer Vision'],
    repo: 'https://github.com/Alexorte/player-detection-heatmaps',
    demo: '/demos/deteccion-jugadores-heatmap.mp4',
    featured: true
  },
  {
    title: 'Predicción de abandono de alumnos',
    type: 'Machine Learning',
    description:
      'Proyecto de análisis predictivo orientado a identificar estudiantes con riesgo de abandono académico mediante técnicas de machine learning.',
    bullets: [
      'Limpieza y preparación de datos académicos.',
      'Análisis exploratorio para detectar patrones relevantes.',
      'Entrenamiento, evaluación y comparación de modelos de clasificación.'
    ],
    stack: ['Python', 'pandas', 'scikit-learn', 'Jupyter'],
    repo: 'https://github.com/Alexorte/prediccion-abandono-alumnos',
    featured: false
  }
]

export const experience = [

  {
    title: 'Solution Implementation & Testing Associate',
    company: 'Dedalus HealthCare',
    date: 'Julio 2026 - Actualidad',
    description:
      'Participación en proyectos de implantación de soluciones sanitarias, con especial foco en procesos de migración y validación de datos. Trabajo con bases de datos y procesos ETL para la extracción, transformación, carga y comprobación de información entre distintos sistemas. Uso habitual de SQL, DBeaver, herramientas ETL y JIRA para el análisis de datos, ejecución de consultas, seguimiento de incidencias y validación de los procesos de migración.',
    tags: ['SQL', 'ETL', 'Data Migration', 'DBeaver', 'JIRA', 'Data Validation']
  },

  {
    title: 'Personal de apoyo a proyectos',
    company: 'Universidad de Castilla-La Mancha · Certificación DigitAll en Competencias Digitales',
    date: 'Febrero 2026 - Actualidad',
    description:
      'Gestión y coordinación de exámenes de certificación DigitAll en competencias digitales bajo el marco europeo DigComp, realizando tareas de organización, seguimiento de participantes, documentación, soporte operativo y control del proceso de certificación.',
    tags: ['UCLM', 'DigitAll', 'DigComp', 'Gestión', 'Coordinación']
  },
  {
    date: 'Junio 2025 - Septiembre 2025',
    title: 'Prácticas curriculares en desarrollo de software',
    company: 'Emotiva · Albacete',
    description:
      'Desarrollo web full-stack con React/TypeScript y Django REST Framework. Despliegue y optimización de servicios con Docker y Redis, implementación de un sistema MFA, sistema de fichajes y apoyo en tareas de análisis de datos y reporting con Power BI.',
    tags: ['React', 'TypeScript', 'Django REST', 'Docker', 'Redis', 'Power BI']
  }
]

export const education = [
    {
    date: 'Septiembre 2026 - Actualidad',
    title: 'Máster en Inteligencia Artificial',
    place: 'Universidad de Castilla-La Mancha · Albacete'
  },
  {
    date: '2022 - 2026',
    title: 'Grado en Ingeniería Informática',
    place: 'Universidad de Castilla-La Mancha · Albacete'
  },
  {
    date: '375 h',
    title: 'Formación Avanzada en Herramientas Digitales Aplicadas al Transporte y la Logística',
    place: 'Universidad de Castilla-La Mancha',
    description: 'IA, Machine Learning, análisis de datos masivos, limpieza de datos, EDA, visualización e informes.'
  },
  {
    date: '2026',
    title: 'Introducción al análisis de datos con Python',
    place: 'Código Facilito',
    description: 'Curso de introducción a análisis de datos con Python, cubriendo limpieza, EDA y visualización.'
  }
]

export const languages = [
  { name: 'Castellano', level: 'Nativo' },
  { name: 'Inglés', level: 'B1 Cambridge · Prácticando B2' }
]

export const softSkills = [
  'Aprendizaje autónomo',
  'Comunicación efectiva',
  'Resolución de problemas',
  'Trabajo en equipo',
  'Organización y proactividad'
]
