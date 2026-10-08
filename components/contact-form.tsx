"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = { kind: "success" | "error"; message: string } | null;

export function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: { message?: string } = await response.json();
      if (!response.ok) throw new Error(result.message ?? "No pudimos enviar tu mensaje. Inténtalo de nuevo.");
      form.reset();
      setStatus({ kind: "success", message: result.message ?? "Recibimos tu mensaje. Gracias por contactarnos." });
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Ocurrió un error inesperado al enviar tu mensaje.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Nombre<Input name="name" autoComplete="name" required maxLength={120} placeholder="Tu nombre" /></label>
        <label>Empresa<Input name="company" autoComplete="organization" required maxLength={160} placeholder="Nombre de tu empresa" /></label>
      </div>
      <div className="form-row">
        <label>Correo electrónico<Input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="nombre@empresa.com" /></label>
        <label>Teléfono <span className="optional-label">OPCIONAL</span><Input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="+57 000 000 0000" /></label>
      </div>
      <label>Tamaño del proyecto
        <select name="projectSize" required defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          <option value="Exploración inicial">Exploración inicial</option>
          <option value="Proyecto acotado">Proyecto acotado</option>
          <option value="Iniciativa en varias etapas">Iniciativa en varias etapas</option>
          <option value="Acompañamiento continuo">Acompañamiento continuo</option>
          <option value="Por definir">Aún no lo sé</option>
        </select>
      </label>
      <label>Cuéntanos qué necesitas resolver<Textarea name="description" required minLength={20} maxLength={5000} rows={5} placeholder="¿Qué proceso, producto o reto tiene hoy tu equipo?" /></label>
      <label className="honeypot" aria-hidden="true">Website<Input name="website" tabIndex={-1} autoComplete="off" /></label>
      <Button className="form-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? <><LoaderCircle size={16} className="spinner" />Enviando…</> : <>Enviar consulta <ArrowUpRight size={16} /></>}
      </Button>
      <p className="privacy-note">Usaremos tus datos únicamente para responder a esta consulta.</p>
      <p className={`form-status${status ? ` form-status-${status.kind}` : ""}`} role="status" aria-live="polite">{status?.message ?? ""}</p>
    </form>
  );
}
