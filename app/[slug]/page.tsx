import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ContentSections, ContactBanner, PageIntro } from "@/components/sections";
import { faqItems, pages } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lambdaeta.com";

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `/${slug}` },
    openGraph: { title: page.title, description: page.description, url: `/${slug}`, type: "website" },
  };
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  if (slug === "contacto") {
    return (
      <>
        <PageIntro eyebrow={page.eyebrow} title={page.title} description={page.description} />
        <section className="contact-page section-pad">
          <div className="container contact-layout">
            <div className="contact-context">
              <span className="card-index">PRIMERA CONVERSACIÓN / SIN COMPROMISO</span>
              <h2>Cuéntanos el contexto.<br />Nosotros te ayudamos<br />a ordenar el siguiente paso.</h2>
              <p>Comparte lo que sabes del reto, incluso si todavía estás definiendo el alcance. Revisaremos tu mensaje para entender cómo podemos ayudarte.</p>
              <div className="contact-expect"><span>01</span><p><strong>Nos cuentas</strong> qué necesita resolver tu equipo.</p></div>
              <div className="contact-expect"><span>02</span><p><strong>Revisamos</strong> el contexto y las prioridades.</p></div>
              <div className="contact-expect"><span>03</span><p><strong>Conversamos</strong> sobre próximos pasos posibles.</p></div>
            </div>
            <div className="form-panel"><ContactForm /></div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageIntro eyebrow={page.eyebrow} title={page.title} description={page.description} />
      {slug === "preguntas-frecuentes" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
            }).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <section className="content-page section-pad"><ContentSections slug={slug} /></section>
      <ContactBanner />
      <div className="container seo-note"><span>DESCUBRE</span><Link href="/servicios">Servicios <ArrowUpRight size={14} /></Link><Link href="/contacto">Conversar con Lambdaeta <ArrowUpRight size={14} /></Link></div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
              { "@type": "ListItem", position: 2, name: page.eyebrow, item: `${siteUrl}/${slug}` },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
