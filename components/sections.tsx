import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, MoveUpRight } from "lucide-react";
import { HoverLink } from "@/components/hover-link";
import {
  exampleCases,
  faqItems,
  methodology,
  products,
  services,
  solutionGroups,
  technologyGroups,
  values,
} from "@/lib/content";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`eyebrow${light ? " eyebrow-light" : ""}`}><span className="eyebrow-dot" />{children}</div>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p className="page-intro-copy">{description}</p>
      </div>
    </section>
  );
}

export function HomeHero() {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <Eyebrow light>Ingeniería de software · Inteligencia artificial · Automatización</Eyebrow>
          <h1>Convertimos procesos complejos en <span>sistemas inteligentes</span> que impulsan tu negocio.</h1>
          <p>Diseñamos y construimos soluciones digitales escalables para que tu operación avance con claridad, tecnología y propósito.</p>
          <div className="hero-actions">
            <HoverLink className="button button-primary" href="/contacto">Hablemos de tu proyecto <ArrowUpRight size={16} /></HoverLink>
            <Link className="button button-dark-secondary" href="/servicios">Explorar capacidades <ArrowRight size={16} /></Link>
          </div>
          <div className="hero-note"><span className="signal-square" />De la oportunidad al sistema que sigue creciendo.</div>
        </div>
        <div className="architecture-card" aria-label="Diagrama de ejemplo de una arquitectura de sistemas conectados">
          <div className="architecture-top"><span>MODELO DE SISTEMA</span><span><span className="status-dot" />ENFOQUE MODULAR</span></div>
          <div className="architecture-main">
            <div className="system-node source-node"><span>01 / ENTRADA</span><strong>Tu operación</strong><small>Procesos · personas · datos</small></div>
            <div className="flow-line"><span /></div>
            <div className="system-node core-node"><span>02 / INGENIERÍA</span><strong>Sistema</strong><small>Software · integración · IA</small></div>
            <div className="flow-line"><span /></div>
            <div className="system-node result-node"><span>03 / IMPACTO</span><strong>Tu siguiente escala</strong><small>Claridad · capacidad · crecimiento</small></div>
          </div>
          <div className="architecture-bottom"><span>DISEÑADO PARA EVOLUCIONAR</span><span>λ <span className="signal-text">→</span> η</span></div>
        </div>
      </div>
      <div className="hero-index" aria-hidden="true">01 — 07</div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-heading">
          <div><Eyebrow>Confianza construida en cada decisión</Eyebrow><h2>La calidad no es una capa.<br />Es parte de la arquitectura.</h2></div>
          <p>Una base técnica sólida hace que cada nueva idea sea más fácil de probar, mantener e implementar con seguridad.</p>
        </div>
        <div className="trust-grid">
          {values.map((item, i) => (
            <article className="trust-item" key={item.title}>
              <span className="trust-number">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceOverview() {
  const featured = services.slice(0, 4);
  return (
    <section className="section-pad service-overview">
      <div className="container">
        <div className="section-heading">
          <div><Eyebrow>Qué hacemos</Eyebrow><h2>Capacidad técnica.<br />Valor para tu operación.</h2></div>
          <Link className="text-link" href="/servicios">Ver todos los servicios <ArrowUpRight size={16} /></Link>
        </div>
        <div className="service-grid">
          {featured.map((service, i) => (
            <Link className="service-card" key={service.title} href="/servicios">
              <span className="card-index">0{i + 1} / CAPACIDAD</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="card-arrow"><ArrowUpRight size={17} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductOverview() {
  return (
    <section className="section-pad product-overview">
      <div className="container">
        <div className="section-heading">
          <div><Eyebrow>Hechos para usarse</Eyebrow><h2>Software que ya salió<br />del papel.</h2></div>
          <Link className="text-link" href="/productos">Conocer nuestros productos <ArrowUpRight size={16} /></Link>
        </div>
        <div className="product-grid">
          {products.map((product, i) => (
            <article className={`product-card${product.ownedByLambdaeta ? " product-card-owned" : ""}`} key={product.name}>
              <span className="card-index">0{i + 1} / {product.type.toUpperCase()}</span>
              <span className={`product-status${product.ownedByLambdaeta ? " product-status-upcoming" : ""}`}>
                <span />{product.status}
              </span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              {product.url ? (
                <a className="text-link" href={product.url} target="_blank" rel="noopener noreferrer">
                  {product.action} <ArrowUpRight size={15} />
                </a>
              ) : (
                <Link className="text-link" href="/contacto">{product.action} <ArrowUpRight size={15} /></Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MethodologyOverview() {
  return (
    <section className="section-pad methodology-overview">
      <div className="container">
        <div className="section-heading">
          <div><Eyebrow>Cómo trabajamos</Eyebrow><h2>Del problema al progreso.<br />Con un plan compartido.</h2></div>
          <Link className="text-link" href="/metodologia">Conoce la metodología <ArrowUpRight size={16} /></Link>
        </div>
        <div className="steps-row">
          {methodology.slice(0, 4).map((step) => <div className="step-item" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></div>)}
        </div>
        <div className="steps-footer"><span>7 ETAPAS</span><span className="steps-rule" /><span>UNA SOLUCIÓN QUE EVOLUCIONA CONTIGO</span></div>
      </div>
    </section>
  );
}

export function CaseOverview() {
  const featured = [exampleCases[0], exampleCases[3]];
  return (
    <section className="section-pad case-overview">
      <div className="container">
        <div className="section-heading">
          <div><Eyebrow>Aplicaciones posibles</Eyebrow><h2>La tecnología tiene sentido<br />cuando mueve algo real.</h2></div>
          <Link className="text-link" href="/casos-de-exito">Explorar casos ilustrativos <ArrowUpRight size={16} /></Link>
        </div>
        <div className="case-grid">
          {featured.map((item, i) => <article className={`case-card case-card-${i + 1}`} key={item.title}>
            <span className="card-index">{item.category.toUpperCase()} / EJEMPLO ILUSTRATIVO</span>
            <h3>{item.title}</h3><p>{item.description}</p>
            <div className="case-tags">{item.capabilities.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

export function TechnologyOverview() {
  return (
    <section className="section-pad technology-overview">
      <div className="container tech-layout">
        <div><Eyebrow>Tecnología con criterio</Eyebrow><h2>Las herramientas cambian.<br />Los buenos fundamentos permanecen.</h2><p>Elegimos el stack según los requisitos del producto, el contexto de tu equipo y la forma en que tu sistema debe evolucionar.</p><Link className="text-link" href="/tecnologias">Conocer las tecnologías <ArrowUpRight size={16} /></Link></div>
        <div className="tech-list">{technologyGroups.map((group) => <div className="tech-row" key={group.name}><span>{group.name}</span><p>{group.items.slice(0, 3).join(" · ")}</p><ArrowDownRight size={15} aria-hidden="true" /></div>)}</div>
      </div>
    </section>
  );
}

export function FaqOverview() {
  return (
    <section className="section-pad faq-overview">
      <div className="container faq-layout">
        <div><Eyebrow>Antes de empezar</Eyebrow><h2>Preguntas buenas.<br />Respuestas claras.</h2><p>Si tienes otra pregunta, cuéntanos el contexto de tu proyecto.</p><Link className="text-link" href="/preguntas-frecuentes">Todas las preguntas frecuentes <ArrowUpRight size={16} /></Link></div>
        <div className="faq-list">{faqItems.slice(0, 3).map((item) => <details className="faq-item" key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div>
      </div>
    </section>
  );
}

export function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="container contact-banner-inner">
        <div><Eyebrow light>El próximo paso comienza con una conversación</Eyebrow><h2>¿Qué proceso podríamos<br />hacer funcionar mejor?</h2><p>Cuéntanos el reto. Juntos exploramos la solución correcta.</p></div>
        <Link className="button button-primary" href="/contacto">Hablemos de tu proyecto <MoveUpRight size={16} /></Link>
      </div>
    </section>
  );
}

export function ContentSections({ slug }: { slug: string }) {
  if (slug === "servicios") return <ServicesContent />;
  if (slug === "productos") return <ProductsContent />;
  if (slug === "soluciones") return <SolutionsContent />;
  if (slug === "metodologia") return <MethodologyContent />;
  if (slug === "casos-de-exito") return <CasesContent />;
  if (slug === "tecnologias") return <TechnologyContent />;
  if (slug === "blog") return <BlogContent />;
  if (slug === "preguntas-frecuentes") return <FaqContent />;
  if (slug === "sobre-nosotros") return <AboutContent />;
  return null;
}

function ServicesContent() {
  return <div className="container content-stack">{services.map((service, i) => <article className="detail-card" key={service.title}><div className="detail-title"><span className="card-index">0{i + 1} / SERVICIO</span><h2>{service.title}</h2><p>{service.description}</p></div><div className="detail-body"><div><h3>El problema</h3><p>{service.problem}</p></div><div><h3>La solución</h3><p>{service.solution}</p></div><div><h3>Beneficios</h3><ul>{service.benefits.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div><div><h3>Casos de uso</h3><ul>{service.useCases.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div><div className="detail-value"><span>VALOR PARA EL NEGOCIO</span><p>{service.businessValue}</p></div></div></article>)}</div>;
}

function SolutionsContent() {
  return <div className="container solution-grid">{solutionGroups.map((group, i) => <article className="solution-card" key={group.title}><span className="card-index">0{i + 1} / CONTEXTO</span><h2>{group.title}</h2><p>{group.description}</p><ul>{group.items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></article>)}</div>;
}

function ProductsContent() {
  return (
    <div className="container">
      <div className="product-grid product-page-grid">
        {products.map((product, i) => (
          <article className={`product-card${product.ownedByLambdaeta ? " product-card-owned" : ""}`} key={product.name}>
            <span className="card-index">0{i + 1} / {product.type.toUpperCase()}</span>
            <span className={`product-status${product.ownedByLambdaeta ? " product-status-upcoming" : ""}`}>
              <span />{product.status}
            </span>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            {product.url ? (
              <a className="text-link" href={product.url} target="_blank" rel="noopener noreferrer">
                {product.action} <ArrowUpRight size={15} />
              </a>
            ) : (
              <Link className="text-link" href="/contacto">{product.action} <ArrowUpRight size={15} /></Link>
            )}
          </article>
        ))}
      </div>
      <p className="product-ownership-note">Movilida y Tramita Yopal son soluciones desarrolladas por Lambdaeta. Microapps es un producto propio de Lambdaeta y está próximo a lanzarse.</p>
    </div>
  );
}

function MethodologyContent() {
  return <div className="container methodology-list">{methodology.map((step) => <article className="method-step" key={step.number}><span className="method-number">{step.number}</span><h2>{step.title}</h2><p>{step.description}</p><span className="method-arrow"><ArrowRight size={17} /></span></article>)}</div>;
}

function CasesContent() {
  return <div className="container content-stack">{exampleCases.map((item, i) => <article className="case-detail" key={item.title}><div><span className="card-index">0{i + 1} / {item.category.toUpperCase()}</span><h2>{item.title}</h2></div><div><span className="case-illustrative">EJEMPLO ILUSTRATIVO · NO REPRESENTA UN CLIENTE NI RESULTADOS REALES</span><p>{item.description}</p><div className="case-tags">{item.capabilities.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>;
}

function TechnologyContent() {
  return <div className="container tech-categories">{technologyGroups.map((group, i) => <article className="tech-category" key={group.name}><span className="card-index">0{i + 1} / DISCIPLINA</span><h2>{group.name}</h2><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>;
}

function BlogContent() {
  const ideas = [
    {
      id: "automatizacion-con-sentido",
      title: "De procesos manuales a automatización con sentido",
      category: "Automatización",
      description: "Automatizar no significa trasladar cada paso existente a una herramienta. El primer paso es entender qué fricción se quiere eliminar.",
      paragraphs: [
        "Empieza observando el recorrido completo de una tarea: cómo se origina, quién la revisa, qué información necesita y cómo termina. Identifica las esperas, las transcripciones manuales y las decisiones que se repiten. También registra las excepciones: un proceso automático que no sabe pedir ayuda puede crear más trabajo del que resuelve.",
        "Después, separa las reglas conocidas de los casos que requieren criterio. Conecta los sistemas de los que ya depende la operación y asigna una persona responsable a cada excepción. Una primera automatización pequeña, visible y medible permite validar supuestos antes de comprometer a toda la organización.",
        "Evalúa el resultado con señales del proceso: tiempo de espera, retrabajo, solicitudes pendientes y facilidad para encontrar el historial de una tarea. La meta no es eliminar personas de una operación, sino liberar tiempo para las actividades que necesitan su experiencia.",
      ],
    },
    {
      id: "ia-empresarial-empezar-por-el-problema",
      title: "IA aplicada: empezar por el problema, no por el modelo",
      category: "Inteligencia artificial",
      description: "Una iniciativa útil de inteligencia artificial comienza con un trabajo concreto y criterios claros para verificar su resultado.",
      paragraphs: [
        "Antes de evaluar modelos, define la tarea que quieres mejorar y cómo se realiza hoy. Pregúntate qué datos puede usar el sistema, qué errores serían aceptables y quién debe revisar una respuesta. Si una búsqueda sencilla o una integración convencional resuelve la necesidad, adoptar un modelo puede añadir complejidad sin aportar valor.",
        "Cuando la IA sí tiene sentido, limita su alcance inicial. Por ejemplo, un asistente sobre documentación interna puede citar sus fuentes, indicar cuándo no encuentra evidencia suficiente y escalar preguntas sensibles a una persona. Mantén la información de la organización protegida y revisa qué datos se comparten con cada proveedor.",
        "Prueba la solución con ejemplos representativos, incluidos casos ambiguos y resultados incorrectos. Evalúa precisión, cobertura y utilidad con usuarios del proceso, y acuerda qué significa un fallo antes de lanzar. La supervisión, la evaluación continua y la capacidad de pausar el sistema forman parte del diseño, no son un añadido posterior.",
      ],
    },
    {
      id: "arquitectura-que-evoluciona",
      title: "Qué hace que una arquitectura pueda evolucionar",
      category: "Ingeniería",
      description: "La mejor arquitectura no es la más sofisticada: es la que permite tomar el siguiente paso sin hacer más costoso el cambio.",
      paragraphs: [
        "Una arquitectura saludable hace comprensible el sistema. Los límites entre responsabilidades reducen el número de partes que necesitas entender para cambiar una función, mientras que los contratos claros ayudan a los equipos a colaborar sin coordinar cada detalle interno.",
        "Comienza por el contexto del producto, su equipo y sus requisitos operativos. La simplicidad no equivale a ignorar riesgos: persistencia, seguridad, tolerancia a fallos y despliegues forman parte de la conversación desde el principio. Tampoco es necesario introducir servicios distribuidos cuando un despliegue único y bien organizado cumple las necesidades actuales.",
        "Deja visibles las decisiones importantes: el problema que abordan, las alternativas consideradas y los compromisos aceptados. Acompaña el código con pruebas y observabilidad que ayuden a detectar cuando la realidad contradice tus supuestos. Revisa las decisiones a medida que cambian el producto, el equipo o la carga; así la arquitectura puede crecer en lugar de anticipar complejidad que todavía no existe.",
      ],
    },
  ];
  return <div className="container blog-grid">{ideas.map((idea, i) => <article className="blog-card" id={idea.id} key={idea.title}><span className="card-index">0{i + 1} / {idea.category.toUpperCase()}</span><h2>{idea.title}</h2><p className="blog-lead">{idea.description}</p>{idea.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<span className="blog-note">Perspectiva editorial · Lambdaeta</span></article>)}</div>;
}

function FaqContent() {
  return <div className="container faq-page-list">{faqItems.map((item, i) => <details className="faq-item" key={item.question}><summary><span className="faq-number">0{i + 1}</span>{item.question}<span className="faq-toggle">+</span></summary><p>{item.answer}</p></details>)}</div>;
}

function AboutContent() {
  return <div className="container about-content"><div className="about-statement"><Eyebrow>Nuestra convicción</Eyebrow><h2>No vendemos páginas.<br /><span>Construimos capacidad digital.</span></h2></div><div className="about-copy"><p>Lambdaeta S.A.S. acompaña a organizaciones que necesitan resolver retos reales con software, inteligencia artificial, automatización y arquitectura tecnológica.</p><p>Combinamos pensamiento de ingeniería con comprensión de negocio. Esto significa aclarar el problema antes de elegir herramientas, construir de manera mantenible y tratar cada decisión como parte de un sistema que debe funcionar en el tiempo.</p><div className="about-principles">{["Precisión en el problema", "Simplicidad en la solución", "Escala en la arquitectura", "Claridad en el trabajo"].map((item) => <span key={item}><Check size={15} />{item}</span>)}</div></div></div>;
}
