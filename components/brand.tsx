import Link from "next/link";
import { ArrowUpRight, ChevronRight, Menu } from "lucide-react";
import { navigation } from "@/lib/content";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand${light ? " brand-light" : ""}`} aria-label="Lambdaeta, inicio">
      <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 4H10L26 28H22ZM6 28L16 13L18 16L10 28Z" fill="currentColor" />
        <rect className="brand-square" x="20" y="4" width="6" height="6" />
      </svg>
      <span className="brand-wordmark">lambdaeta</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="button button-small button-outline header-cta" href="/contacto">
          Hablemos <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <details className="mobile-nav">
          <summary aria-label="Abrir menú"><Menu size={21} aria-hidden="true" /></summary>
          <nav aria-label="Navegación móvil">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}<ChevronRight size={15} /></Link>)}
            <Link href="/contacto">Contacto<ArrowUpRight size={15} /></Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-about">
            <Brand light />
            <p>Ingeniería de software diseñada para transformar procesos complejos en soluciones escalables.</p>
          </div>
          <div className="footer-links">
            <p className="footer-label">Explora</p>
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
          <div className="footer-links">
            <p className="footer-label">Conversemos</p>
            <Link href="/contacto">Cuéntanos tu proyecto <ArrowUpRight size={14} /></Link>
            <Link href="/preguntas-frecuentes">Preguntas frecuentes</Link>
            <Link href="/blog">Perspectivas</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Lambdaeta S.A.S.</span>
          <span>Ingeniería clara. Tecnología con propósito.</span>
        </div>
      </div>
    </footer>
  );
}
