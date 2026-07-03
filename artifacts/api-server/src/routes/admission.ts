import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/admission", async (req, res) => {
  const { name, dob, cls, fatherName, motherName, mobile, email, address, message } =
    req.body as {
      name: string;
      dob: string;
      cls: string;
      fatherName: string;
      motherName: string;
      mobile: string;
      email: string;
      address: string;
      message: string;
    };

  if (!name || !mobile || !cls) {
    res.status(400).json({ error: "name, mobile and class are required" });
    return;
  }

  const gmailUser = process.env["GMAIL_USER"];
  const gmailPass = process.env["GMAIL_APP_PASSWORD"];

  if (!gmailUser || !gmailPass) {
    req.log.error("Gmail credentials not configured");
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
      <div style="background: #1a5c2e; padding: 24px 32px;">
        <h2 style="color: #ffffff; margin: 0; font-size: 22px;">🎓 New Admission Enquiry</h2>
        <p style="color: #ffffff99; margin: 6px 0 0; font-size: 14px;">The Girls Gurukul, Kalayat</p>
      </div>
      <div style="padding: 28px 32px; background: #ffffff;">
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666; width: 45%;">Student Name</td>
            <td style="padding: 10px 0; font-weight: bold; color: #1a2e5a;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666;">Date of Birth</td>
            <td style="padding: 10px 0; font-weight: bold; color: #1a2e5a;">${dob || "—"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666;">Class Seeking</td>
            <td style="padding: 10px 0; font-weight: bold; color: #1a5c2e;">${cls}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666;">Father's Name</td>
            <td style="padding: 10px 0; font-weight: bold; color: #1a2e5a;">${fatherName || "—"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666;">Mother's Name</td>
            <td style="padding: 10px 0; font-weight: bold; color: #1a2e5a;">${motherName || "—"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666;">Mobile Number</td>
            <td style="padding: 10px 0; font-weight: bold; color: #1a2e5a;">${mobile}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666;">Email</td>
            <td style="padding: 10px 0; font-weight: bold; color: #1a2e5a;">${email || "—"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666;">Address</td>
            <td style="padding: 10px 0; font-weight: bold; color: #1a2e5a;">${address || "—"}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 10px 0; color: #666; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #1a2e5a;">${message}</td>
          </tr>` : ""}
        </table>
      </div>
      <div style="background: #f8f9fa; padding: 16px 32px; text-align: center;">
        <p style="color: #999; font-size: 13px; margin: 0;">This notification was sent automatically from The Girls Gurukul website.</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"The Girls Gurukul" <${gmailUser}>`,
      to: gmailUser,
      subject: `📋 New Admission Enquiry – ${name} (Class ${cls})`,
      html: htmlBody,
    });

    req.log.info({ name, cls }, "Admission enquiry email sent");
    res.json({ success: true });
  } catch (err: unknown) {
    req.log.error({ err }, "Failed to send admission email");
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: message });
  }
});

export default router;
