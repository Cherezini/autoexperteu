import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // Минимальная валидация (как и раньше: не отправляем пустое)
    if (!name || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1) Email через Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.CONTACT_FROM || "onboarding@resend.dev",
      to: [process.env.CONTACT_TO || "onboarding@resend.dev"],
      subject: subject ? `Autoexpert EU — ${subject}` : "Autoexpert EU — новая заявка",
      html: `
        <h2>Новая заявка</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон (WhatsApp):</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <p><strong>Тема:</strong> ${subject || "-"}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2) Telegram уведомление
    const tgToken = process.env.TELEGRAM_BOT_TOKEN;
    const tgChatId = process.env.TELEGRAM_CHAT_ID;

    if (tgToken && tgChatId) {
      const text =
        `🚗 Autoexpert EU — новая заявка\n\n` +
        `Имя: ${name}\n` +
        `Телефон: ${phone}\n` +
        `Email: ${email || "-"}\n` +
        `Тема: ${subject || "-"}\n\n` +
        `Сообщение:\n${message}`;

      await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: tgChatId,
          text,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
