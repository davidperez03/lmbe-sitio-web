export const navigation = [
  { label: "Servicios", href: "/servicios" },
  { label: "Productos", href: "/productos" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Metodología", href: "/metodologia" },
  { label: "Casos", href: "/casos-de-exito" },
  { label: "Nosotros", href: "/sobre-nosotros" },
];

export type Service = {
  title: string;
  description: string;
  problem: string;
  solution: string;
  benefits: string[];
  useCases: string[];
  businessValue: string;
};

export const services: Service[] = [
  {
    title: "Desarrollo de software a medida",
    description: "Sistemas creados alrededor de la operación y los objetivos reales de tu empresa.",
    problem: "Las herramientas genéricas y los procesos manuales frenan el crecimiento y fragmentan la información.",
    solution: "Diseñamos y construimos software a medida, modular, documentado y preparado para evolucionar.",
    benefits: ["Alineación con tu operación", "Control sobre la evolución del producto", "Menos tareas repetitivas"],
    useCases: ["Portales de clientes y proveedores", "Herramientas internas", "Productos digitales propios"],
    businessValue: "Convierte necesidades particulares en una capacidad tecnológica que pertenece a tu negocio.",
  },
  {
    title: "Aplicaciones web",
    description: "Plataformas y productos web rápidos, accesibles y preparados para crecer.",
    problem: "Experiencias lentas o difíciles de mantener comprometen la adopción y hacen costoso cada cambio.",
    solution: "Construimos aplicaciones web con interfaces claras, arquitectura sólida y rendimiento medible.",
    benefits: ["Acceso desde distintos dispositivos", "Experiencias consistentes", "Iteración ágil y mantenible"],
    useCases: ["Plataformas SaaS", "Portales de autoservicio", "Dashboards operativos"],
    businessValue: "Entrega una experiencia digital confiable sin sacrificar velocidad de evolución.",
  },
  {
    title: "Aplicaciones móviles",
    description: "Experiencias móviles útiles para clientes y equipos que trabajan desde cualquier lugar.",
    problem: "Operaciones dependientes del escritorio limitan el servicio y dificultan el trabajo de campo.",
    solution: "Desarrollamos productos móviles conectados con tus servicios, datos y flujos de trabajo.",
    benefits: ["Acceso práctico a información", "Procesos disponibles en movilidad", "Integración con sistemas existentes"],
    useCases: ["Aplicaciones de campo", "Experiencias para clientes", "Herramientas de fuerza comercial"],
    businessValue: "Lleva procesos importantes al contexto en que los necesitan tus usuarios.",
  },
  {
    title: "Inteligencia artificial aplicada",
    description: "IA integrada a procesos concretos, con datos, evaluación y supervisión humana.",
    problem: "Los equipos pierden tiempo en tareas repetitivas y la información útil queda dispersa.",
    solution: "Evaluamos oportunidades y conectamos modelos de IA con datos y sistemas empresariales de forma controlada.",
    benefits: ["Menos trabajo manual", "Acceso más ágil al conocimiento", "Automatización con criterios verificables"],
    useCases: ["Asistentes de conocimiento interno", "Clasificación de documentos", "Extracción y análisis de información"],
    businessValue: "Aplica IA donde puede aportar valor operativo, con riesgos y resultados bajo control.",
  },
  {
    title: "Automatización de procesos",
    description: "Orquestación de tareas y sistemas para reducir fricción en la operación diaria.",
    problem: "Las tareas manuales entre personas y herramientas producen demoras, errores y retrabajo.",
    solution: "Mapeamos el proceso, automatizamos sus pasos repetibles y dejamos trazabilidad de las excepciones.",
    benefits: ["Menos intervención manual", "Flujos consistentes", "Mayor visibilidad operativa"],
    useCases: ["Aprobaciones y notificaciones", "Procesamiento de solicitudes", "Sincronización de registros"],
    businessValue: "Libera capacidad del equipo para tareas que requieren criterio y atención humana.",
  },
  {
    title: "Arquitectura de software",
    description: "Decisiones técnicas claras para sistemas confiables, seguros y sostenibles.",
    problem: "Dependencias frágiles y decisiones acumuladas vuelven cada cambio más lento y riesgoso.",
    solution: "Analizamos el sistema actual y definimos una arquitectura comprensible, evolutiva y adecuada al contexto.",
    benefits: ["Menor complejidad innecesaria", "Límites de dominio claros", "Evolución técnica planificada"],
    useCases: ["Modernización de plataformas", "Revisión de arquitectura", "Diseño de nuevos productos"],
    businessValue: "Reduce el costo futuro de cambiar, integrar y operar tu tecnología.",
  },
  {
    title: "Consultoría tecnológica",
    description: "Acompañamiento experto para priorizar inversiones y tomar decisiones informadas.",
    problem: "Sin criterios técnicos compartidos, los proyectos se retrasan y las inversiones pierden foco.",
    solution: "Aportamos análisis independiente, planificación y acompañamiento técnico para equipos y dirección.",
    benefits: ["Prioridades comprensibles", "Riesgos visibles antes de ejecutar", "Mejor alineación entre negocio y tecnología"],
    useCases: ["Evaluación de iniciativas", "Acompañamiento a equipos", "Planes de modernización digital"],
    businessValue: "Enfoca presupuesto y esfuerzo en decisiones con un propósito de negocio explícito.",
  },
  {
    title: "Integraciones empresariales",
    description: "Sistemas conectados con intercambios de datos confiables y observables.",
    problem: "La información duplicada y los sistemas aislados obligan a conciliar datos manualmente.",
    solution: "Integramos plataformas mediante APIs y flujos seguros, con monitoreo y manejo de errores.",
    benefits: ["Información más coherente", "Menos doble digitación", "Procesos conectados de extremo a extremo"],
    useCases: ["ERP y CRM", "Plataformas de pago", "Servicios y APIs de terceros"],
    businessValue: "Haz que tus herramientas actuales funcionen como una operación conectada.",
  },
];

export const values = [
  { title: "Calidad de ingeniería", description: "Decisiones técnicas explícitas, revisiones rigurosas y estándares consistentes." },
  { title: "Mantenibilidad", description: "Código legible y documentación útil para que el sistema siga evolucionando." },
  { title: "Escalabilidad", description: "Arquitectura proporcional a la necesidad actual y preparada para crecer." },
  { title: "Arquitectura limpia", description: "Responsabilidades claras, componentes desacoplados e integraciones comprensibles." },
  { title: "Seguridad", description: "Controles y manejo de datos considerados desde el diseño y durante la operación." },
  { title: "Alto rendimiento", description: "Experiencias ágiles y sistemas observables, medidos con criterios relevantes." },
];

export const technologyGroups = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Aplicaciones web accesibles"] },
  { name: "Backend", items: ["Node.js", "APIs REST", "Servicios distribuidos", "Integraciones"] },
  { name: "Cloud", items: ["Vercel", "AWS", "Arquitecturas cloud", "Servicios administrados"] },
  { name: "DevOps", items: ["CI/CD", "Automatización de despliegues", "Observabilidad", "Infraestructura como código"] },
  { name: "Bases de datos", items: ["PostgreSQL", "MySQL", "Redis", "Modelado de datos"] },
  { name: "IA", items: ["Modelos de lenguaje", "RAG", "Evaluación de IA", "Procesamiento de documentos"] },
];

export const methodology = [
  { number: "01", title: "Descubrimiento", description: "Entendemos el negocio, las personas involucradas y el contexto de la oportunidad." },
  { number: "02", title: "Análisis", description: "Definimos alcance, restricciones, riesgos, prioridades y criterios de éxito." },
  { number: "03", title: "Diseño", description: "Aterrizamos flujos, arquitectura y decisiones técnicas antes de construir." },
  { number: "04", title: "Desarrollo", description: "Construimos en incrementos pequeños, revisables y alineados con las prioridades." },
  { number: "05", title: "Pruebas", description: "Validamos comportamiento, calidad, accesibilidad y requisitos de seguridad." },
  { number: "06", title: "Implementación", description: "Preparamos el lanzamiento, los entornos y el monitoreo de la solución." },
  { number: "07", title: "Evolución continua", description: "Medimos el uso y mejoramos el producto según necesidades y aprendizajes reales." },
];

export const solutionGroups = [
  {
    title: "Para startups",
    description: "Valida una oportunidad con una base técnica sólida, sin añadir complejidad prematura.",
    items: ["MVP y productos digitales", "Plataformas SaaS", "Acompañamiento a equipos de producto"],
  },
  {
    title: "Para pymes y empresas medianas",
    description: "Conecta herramientas y mejora procesos sin perder de vista la operación cotidiana.",
    items: ["Automatización administrativa", "Aplicaciones internas", "Integración de datos y sistemas"],
  },
  {
    title: "Para organizaciones corporativas",
    description: "Moderniza sistemas e implementa soluciones con seguridad, trazabilidad y continuidad.",
    items: ["Modernización de plataformas", "Integraciones empresariales", "Arquitectura y gobierno técnico"],
  },
  {
    title: "Para equipos que aplican IA",
    description: "Lleva la inteligencia artificial a flujos reales con evaluación, supervisión y datos bajo control.",
    items: ["Asistentes internos", "Automatización documental", "Pruebas de concepto y escalamiento"],
  },
];

export const products = [
  {
    name: "Movilida",
    type: "Solución desarrollada por Lambdaeta",
    description: "Una solución digital enfocada en movilidad, disponible para explorar en su propia plataforma.",
    url: "https://movilidad.vercel.app",
    action: "Visitar Movilida",
    status: "Disponible en línea",
    ownedByLambdaeta: false,
  },
  {
    name: "Tramita Yopal",
    type: "Solución desarrollada por Lambdaeta",
    description: "Una solución digital relacionada con la gestión de trámites en Yopal.",
    url: "https://tramitayopal.com",
    action: "Visitar Tramita Yopal",
    status: "Disponible en línea",
    ownedByLambdaeta: false,
  },
  {
    name: "Microapps",
    type: "Producto propio de Lambdaeta",
    description: "Herramientas pequeñas para tareas concretas: finanzas, cotizaciones, jornadas, moto, mascotas y taller. Está abierta como versión de evaluación: pruébala y cuéntanos qué te sirve.",
    url: "https://microapps-co.vercel.app",
    action: "Probar la versión de evaluación",
    status: "Versión de evaluación",
    ownedByLambdaeta: true,
  },
];

export const exampleCases = [
  {
    category: "Automatización empresarial",
    title: "Menos pasos manuales entre áreas",
    description: "Ejemplo ilustrativo: un flujo conecta solicitudes, validaciones y notificaciones para dar seguimiento a una operación que antes dependía de correos y hojas de cálculo.",
    capabilities: ["Orquestación de tareas", "Integración de sistemas", "Trazabilidad de excepciones"],
  },
  {
    category: "Plataforma SaaS",
    title: "Un producto preparado para evolucionar",
    description: "Ejemplo ilustrativo: una plataforma organiza cuentas, roles y operaciones en una experiencia web preparada para incorporar nuevos módulos.",
    capabilities: ["Aplicación web", "Arquitectura modular", "Gestión de usuarios"],
  },
  {
    category: "Sistema de gestión",
    title: "Información operativa en un solo flujo",
    description: "Ejemplo ilustrativo: una herramienta interna conecta procesos, registros y reportes para facilitar el trabajo cotidiano de varios equipos.",
    capabilities: ["Software a medida", "Paneles operativos", "Modelado de datos"],
  },
  {
    category: "Solución de IA",
    title: "Conocimiento empresarial más accesible",
    description: "Ejemplo ilustrativo: un asistente responde preguntas a partir de documentos aprobados e indica las fuentes para facilitar su verificación.",
    capabilities: ["Recuperación de información", "IA aplicada", "Control y evaluación"],
  },
];

export const faqItems = [
  {
    question: "¿Qué tipo de proyectos desarrolla Lambdaeta?",
    answer: "Construimos software a medida, aplicaciones web y móviles, soluciones de IA, automatizaciones, integraciones y arquitectura de software para organizaciones de distintos tamaños.",
  },
  {
    question: "¿Lambdaeta solo desarrolla páginas web?",
    answer: "No. Nuestro foco está en construir soluciones digitales inteligentes que resuelven necesidades de negocio: desde productos y sistemas hasta integraciones y automatización de procesos.",
  },
  {
    question: "¿Lambdaeta tiene productos propios?",
    answer: "Sí. Microapps es un producto propio de Lambdaeta, actualmente próximo a lanzarse. También hemos desarrollado soluciones como Movilida y Tramita Yopal.",
  },
  {
    question: "¿Pueden trabajar con sistemas que ya tenemos?",
    answer: "Sí. Analizamos el contexto existente y podemos integrar herramientas, modernizar componentes o proponer una evolución gradual según las necesidades y restricciones del proyecto.",
  },
  {
    question: "¿Cómo se define el alcance y el presupuesto?",
    answer: "Empezamos por entender objetivos, usuarios, procesos y restricciones. Con esa información proponemos un alcance por etapas y una estimación que se revisa contigo antes de iniciar.",
  },
  {
    question: "¿Cómo aplican inteligencia artificial de forma responsable?",
    answer: "Partimos de un problema concreto, revisamos los datos disponibles y definimos límites, validación y supervisión humana. No recomendamos IA cuando una alternativa más simple resuelve mejor la necesidad.",
  },
  {
    question: "¿Qué ocurre después del lanzamiento?",
    answer: "La entrega incluye una transición planificada y una base técnica mantenible. Podemos acompañar la operación, atender mejoras y priorizar la evolución según el uso y los objetivos del producto.",
  },
];

export type PageContent = {
  title: string;
  eyebrow: string;
  description: string;
  keywords: string[];
};

export const pages: Record<string, PageContent> = {
  "sobre-nosotros": {
    title: "Ingeniería con propósito de negocio.",
    eyebrow: "Sobre Lambdaeta",
    description: "Somos Lambdaeta S.A.S. Construimos soluciones de software, inteligencia artificial y automatización para convertir necesidades complejas en sistemas claros y escalables.",
    keywords: ["Lambdaeta", "empresa de ingeniería de software", "transformación digital"],
  },
  servicios: {
    title: "Capacidades técnicas. Resultados para el negocio.",
    eyebrow: "Servicios",
    description: "Desarrollo de software a medida, aplicaciones, inteligencia artificial, automatización, arquitectura y consultoría tecnológica para empresas.",
    keywords: ["desarrollo de software a medida", "servicios de inteligencia artificial", "automatización de procesos"],
  },
  soluciones: {
    title: "Tecnología alineada con tu momento de crecimiento.",
    eyebrow: "Soluciones",
    description: "Soluciones digitales para startups, pymes, empresas medianas, corporaciones y equipos que buscan aplicar inteligencia artificial.",
    keywords: ["soluciones digitales para empresas", "software para startups", "IA para empresas"],
  },
  productos: {
    title: "Productos y soluciones construidos por Lambdaeta.",
    eyebrow: "Productos",
    description: "Conoce las soluciones digitales desarrolladas por Lambdaeta y Microapps, nuestro próximo producto propio.",
    keywords: ["productos digitales Lambdaeta", "soluciones de software", "Microapps Lambdaeta", "Movilida", "Tramita Yopal"],
  },
  metodologia: {
    title: "Claridad en cada etapa. Calidad en cada entrega.",
    eyebrow: "Metodología",
    description: "Una metodología de siete etapas para descubrir, analizar, diseñar, desarrollar, probar, implementar y evolucionar soluciones digitales.",
    keywords: ["metodología de desarrollo de software", "ciclo de vida de software", "gestión de proyectos tecnológicos"],
  },
  "casos-de-exito": {
    title: "Problemas reales. Soluciones bien pensadas.",
    eyebrow: "Casos de éxito",
    description: "Ejemplos ilustrativos de automatización empresarial, plataformas SaaS, sistemas de gestión e inteligencia artificial aplicada.",
    keywords: ["casos de uso de software empresarial", "casos de automatización", "IA aplicada a empresas"],
  },
  tecnologias: {
    title: "La tecnología correcta para el problema correcto.",
    eyebrow: "Tecnologías",
    description: "Tecnologías modernas para frontend, backend, cloud, DevOps, bases de datos e inteligencia artificial, elegidas de acuerdo con cada contexto.",
    keywords: ["tecnologías de desarrollo de software", "arquitectura cloud", "stack tecnológico"],
  },
  blog: {
    title: "Ideas prácticas sobre software y tecnología.",
    eyebrow: "Blog",
    description: "Perspectivas de Lambdaeta sobre ingeniería de software, transformación digital, automatización e inteligencia artificial aplicada.",
    keywords: ["blog de ingeniería de software", "artículos de transformación digital", "inteligencia artificial aplicada"],
  },
  "preguntas-frecuentes": {
    title: "Respuestas claras antes de empezar.",
    eyebrow: "Preguntas frecuentes",
    description: "Resuelve tus dudas sobre los servicios, los proyectos, el trabajo con sistemas existentes y la inteligencia artificial aplicada de Lambdaeta.",
    keywords: ["preguntas sobre desarrollo de software", "contratar empresa de software", "consultoría tecnológica"],
  },
  contacto: {
    title: "Empecemos por entender tu reto.",
    eyebrow: "Contacto",
    description: "Cuéntanos qué necesita resolver tu equipo. Revisaremos el contexto y nos pondremos en contacto para explorar los siguientes pasos.",
    keywords: ["contactar empresa de software", "cotización de desarrollo de software", "consultoría de software"],
  },
};
