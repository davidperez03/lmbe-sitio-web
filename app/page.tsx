import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import {
  CaseOverview,
  ContactBanner,
  FaqOverview,
  HomeHero,
  MethodologyOverview,
  ProductOverview,
  ServiceOverview,
  TechnologyOverview,
  TrustSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Lambdaeta | Ingeniería de software para crecer",
  description: "Convertimos procesos complejos en soluciones digitales inteligentes y escalables. Ingeniería de software, IA aplicada y automatización para empresas.",
  keywords: ["Lambdaeta", "ingeniería de software", "software a medida", "automatización empresarial", "inteligencia artificial aplicada"],
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="signal-strip" aria-label="Áreas de trabajo">
        <div className="container signal-strip-inner">
          <span>SOFTWARE A MEDIDA</span><span>INTELIGENCIA ARTIFICIAL</span><span>AUTOMATIZACIÓN</span><span>ARQUITECTURA</span>
        </div>
      </section>
      <TrustSection />
      <ServiceOverview />
      <ProductOverview />
      <MethodologyOverview />
      <CaseOverview />
      <TechnologyOverview />
      <FaqOverview />
      <ContactBanner />
      <div className="container home-last-link"><span>¿Buscas una mirada más cercana a Lambdaeta?</span><Link href="/sobre-nosotros">Conoce al equipo y nuestra manera de trabajar <ArrowUpRight size={15} /></Link></div>
    </>
  );
}
