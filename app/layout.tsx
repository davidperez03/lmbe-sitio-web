import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer, Header } from "@/components/brand";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lambdaeta.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lambdaeta | Ingeniería de software para crecer",
    template: "%s | Lambdaeta",
  },
  description: "Convertimos procesos complejos en soluciones digitales inteligentes y escalables. Software a medida, IA aplicada y automatización para empresas.",
  applicationName: "Lambdaeta",
  keywords: ["ingeniería de software", "desarrollo de software a medida", "inteligencia artificial para empresas", "automatización de procesos", "transformación digital", "Lambdaeta S.A.S."],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Lambdaeta",
    title: "Lambdaeta | Ingeniería de software para crecer",
    description: "Convertimos procesos complejos en soluciones digitales inteligentes y escalables.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lambdaeta | Ingeniería de software para crecer",
    description: "Convertimos procesos complejos en soluciones digitales inteligentes y escalables.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0D1A",
  colorScheme: "light",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lambdaeta S.A.S.",
  url: siteUrl,
  description: "Ingeniería de software, inteligencia artificial aplicada y automatización para empresas.",
  knowsAbout: ["Desarrollo de software", "Inteligencia artificial", "Automatización de procesos", "Arquitectura de software", "Integraciones empresariales"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <a className="skip-link" href="#main-content">Saltar al contenido</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
