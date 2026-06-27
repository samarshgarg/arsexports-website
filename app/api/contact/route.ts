import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, company, email, phone, country, interest, quantity, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#1a1410;color:#e8d4ae;padding:32px;border-radius:12px;">
        <div style="text-align:center;margin-bottom:28px;">
          <h1 style="font-size:28px;color:#d4af37;margin:0;letter-spacing:4px;">ARS EXPORTS</h1>
          <p style="color:#c4952a;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:4px 0 0;">New Website Enquiry</p>
        </div>
        <hr style="border:none;border-top:1px solid rgba(196,149,42,0.3);margin:0 0 24px;" />

        <table style="width:100%;border-collapse:collapse;">
          ${[
            ["Name", name],
            ["Company", company || "—"],
            ["Email", email],
            ["Phone / WhatsApp", phone || "—"],
            ["Country", country || "—"],
            ["Product Interest", interest || "—"],
            ["Order Quantity", quantity || "—"],
          ]
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding:10px 0;color:#886015;font-size:11px;letter-spacing:2px;text-transform:uppercase;width:38%;vertical-align:top;">${label}</td>
              <td style="padding:10px 0;color:#e8d4ae;font-size:14px;">${value}</td>
            </tr>`
            )
            .join("")}
        </table>

        <div style="margin-top:20px;padding:16px;background:rgba(196,149,42,0.08);border-left:2px solid #c4952a;border-radius:4px;">
          <p style="color:#886015;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px;">Message</p>
          <p style="color:#e8d4ae;font-size:14px;line-height:1.6;margin:0;">${message.replace(/\n/g, "<br/>")}</p>
        </div>

        <hr style="border:none;border-top:1px solid rgba(196,149,42,0.2);margin:24px 0;" />
        <p style="color:rgba(232,212,174,0.35);font-size:11px;text-align:center;margin:0;">
          This enquiry was submitted via <a href="https://arsexports.com" style="color:#c4952a;">arsexports.com</a>
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "ARS Exports Website <onboarding@resend.dev>",
      to: ["support@arsexports.com"],
      replyTo: email,
      subject: `New Enquiry: ${name}${country ? ` from ${country}` : ""}${interest ? ` — ${interest}` : ""}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
