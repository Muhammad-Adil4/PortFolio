import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required" }),
        { status: 400 }
      );
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: `"Portfolio Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "📩 New Contact Request from Your Portfolio",
      text: `
📬 You have received a new message via your portfolio contact form:

👤 Name: ${name}
📧 Email: ${email}
💬 Message:
${message}

—————————————
📅 Date: ${new Date().toLocaleString()}
🌐 Source: Portfolio Website Contact Form
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        data: { name, email },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong while sending the email.",
      }),
      { status: 500 }
    );
  }
}
