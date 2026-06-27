import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, country, interest, quantity, message } =
      body as Record<string, string>;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ── 1. Save lead to Supabase ──────────────────────────────────────────
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error: dbError } = await supabase.from("leads").insert({
      name,
      company: company || null,
      email,
      phone: phone || null,
      country: country || null,
      interest: interest || null,
      quantity: quantity || null,
      message,
      source: "website",
    });

    if (dbError) {
      // Log but don't abort — still try to send email
      console.error("Supabase insert error:", dbError.message);
    }

    // ── 2. Send email notification via Resend ─────────────────────────────
    const resend = new Resend(process.env.RESEND_API_KEY);

    const rows = [
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
        <td style="padding:10px 0;color:#886015;font-size:11px;letter-spacing:2px;text-transform:uppercase;width:38%;vertical-align:top;border-bottom:1px solid rgba(196,149,42,0.1);">${label}</td>
        <td style="padding:10px 0;color:#e8d4ae;font-size:14px;border-bottom:1px solid rgba(196,149,42,0.1);">${value}</td>
      </tr>`
      )
      .join("");

    const html = `
      <div style="font-family:sans-serif;max-width:620px;margin:0 auto;background:#1a1410;color:#e8d4ae;padding:36px;border-radius:12px;border:1px solid rgba(196,149,42,0.2);">

        <div style="text-align:center;margin-bottom:28px;">
          <h1 style="font-size:30px;color:#d4af37;margin:0 0 4px;letter-spacing:6px;font-weight:300;">ARS EXPORTS</h1>
          <p style="color:#c4952a;font-size:10px;letter-spacing:4px;text-transform:uppercase;margin:0;">Premium Brass Artifacts</p>
        </div>

        <div style="background:rgba(196,149,42,0.08);border:1px solid rgba(196,149,42,0.25);border-radius:8px;padding:16px 20px;margin-bottom:24px;text-align:center;">
          <p style="margin:0;color:#d4af37;font-size:13px;letter-spacing:1px;">🔔 New Lead from arsexports.com${dbError ? "" : " · Saved to Database"}</p>
        </div>

        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          ${rows}
        </table>

        <div style="padding:16px 20px;background:rgba(196,149,42,0.06);border-left:3px solid #c4952a;border-radius:4px;margin-bottom:24px;">
          <p style="color:#886015;font-size:10px;letter-spacing:3px;text-transform:uppercase;margin:0 0 10px;">Message</p>
          <p style="color:#e8d4ae;font-size:14px;line-height:1.7;margin:0;">${message.replace(/\n/g, "<br/>")}</p>
        </div>

        <div style="text-align:center;margin-top:8px;">
          <a href="mailto:${email}" style="display:inline-block;padding:10px 28px;background:#c4952a;color:#1a1410;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;border-radius:4px;">Reply to ${name}</a>
        </div>

        <hr style="border:none;border-top:1px solid rgba(196,149,42,0.15);margin:24px 0 16px;" />
        <p style="color:rgba(232,212,174,0.3);font-size:11px;text-align:center;margin:0;">
          Submitted via <a href="https://arsexports.com" style="color:#c4952a;text-decoration:none;">arsexports.com</a>${dbError ? " · <span style='color:#f87171'>DB save failed — check Supabase</span>" : ""}
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "ARS Exports Website <onboarding@resend.dev>",
      to: ["support@arsexports.com"],
      replyTo: email,
      subject: `New Lead: ${name}${country ? ` (${country})` : ""}${interest ? ` — ${interest}` : ""}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to process submission" }, { status: 500 });
  }
}
