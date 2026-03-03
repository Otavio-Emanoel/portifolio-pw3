import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Handles contact form submissions.
 *
 * To enable e-mail delivery, configure one of the following options in .env.local:
 *
 * Option A — nodemailer (SMTP):
 *   SMTP_HOST=smtp.example.com
 *   SMTP_PORT=587
 *   SMTP_USER=user@example.com
 *   SMTP_PASS=yourpassword
 *   CONTACT_EMAIL=your@email.com
 *
 * Option B — Resend (https://resend.com):
 *   RESEND_API_KEY=re_xxxxxxxxxxxx
 *   CONTACT_EMAIL=your@email.com
 *
 * See README.md for full instructions.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
    }

    // ─── Delivery placeholder ──────────────────────────────────────────────
    // Uncomment and configure the delivery method of your choice.
    // See README.md for step-by-step instructions.
    //
    // Example with nodemailer:
    // const nodemailer = await import("nodemailer");
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT ?? 587),
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // });
    // await transporter.sendMail({
    //   from: `"${name}" <${email}>`,
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `[Portfólio] Mensagem de ${name}`,
    //   text: message,
    // });
    // ──────────────────────────────────────────────────────────────────────

    console.info("[contact] New message from:", name, email);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
