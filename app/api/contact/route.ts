import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Lead = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectSize: string;
  description: string;
  website: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readLead(value: unknown): Lead | null {
  if (!isRecord(value)) return null;
  const { name, company, email, phone, projectSize, description, website } = value;
  if (
    typeof name !== "string" || typeof company !== "string" ||
    typeof email !== "string" || typeof phone !== "string" ||
    typeof projectSize !== "string" || typeof description !== "string" ||
    typeof website !== "string"
  ) return null;

  const lead: Lead = {
    name: name.trim(),
    company: company.trim(),
    email: email.trim(),
    phone: phone.trim(),
    projectSize: projectSize.trim(),
    description: description.trim(),
    website: website.trim(),
  };

  if (
    !lead.name || lead.name.length > 120 ||
    !lead.company || lead.company.length > 160 ||
    lead.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) ||
    lead.phone.length > 40 ||
    !["Exploración inicial", "Proyecto acotado", "Iniciativa en varias etapas", "Acompañamiento continuo", "Por definir"].includes(lead.projectSize) ||
    lead.description.length < 20 || lead.description.length > 5000
  ) return null;

  return lead;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "La solicitud no contiene datos válidos." }, { status: 400 });
  }

  const lead = readLead(body);
  if (!lead) return NextResponse.json({ message: "Revisa los campos: hay información incompleta o inválida." }, { status: 400 });
  if (lead.website) return NextResponse.json({ message: "Recibimos tu mensaje. Gracias por contactarnos." });

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailAppPassword) {
    console.error("Contact form delivery is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.");
    return NextResponse.json({ message: "El formulario no está disponible en este momento. Intenta más tarde." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword.replace(/\s/g, ""),
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  try {
    await transporter.sendMail({
      from: gmailUser,
      to: "lambdaeta.x@gmail.com",
      replyTo: lead.email,
      subject: "Nueva consulta desde el sitio web de Lambdaeta",
      text: [
        `Nombre: ${lead.name}`,
        `Empresa: ${lead.company}`,
        `Correo: ${lead.email}`,
        `Teléfono: ${lead.phone || "No indicado"}`,
        `Tamaño del proyecto: ${lead.projectSize}`,
        "",
        "Descripción:",
        lead.description,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Contact form email delivery failed.");
    console.error(error);
    return NextResponse.json({ message: "No pudimos entregar tu mensaje. Inténtalo de nuevo más tarde." }, { status: 502 });
  }

  return NextResponse.json({ message: "Recibimos tu mensaje. Gracias por contarnos sobre tu proyecto." });
}
