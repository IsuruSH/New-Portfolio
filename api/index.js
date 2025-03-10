import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Email template for admin notification
const getAdminEmailTemplate = (name, email, message) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Message</title>
  <style>
    body { 
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f5f9f6;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .header {
      background: #4e9a6e;
      color: white;
      padding: 20px;
      border-radius: 10px 10px 0 0;
      margin: -20px -20px 20px;
    }
    .content {
      padding: 0 20px;
    }
    .field {
      margin-bottom: 20px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 5px;
    }
    .label {
      font-weight: bold;
      color: #4e9a6e;
      margin-bottom: 5px;
    }
    .value {
      color: #333;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #eee;
      font-size: 0.9em;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin:0;">New Contact Form Message</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value">${email}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="value">${message}</div>
      </div>
      <div class="footer">
        This message was sent from your portfolio website contact form.
      </div>
    </div>
  </div>
</body>
</html>
`;

// Email template for auto-reply
const getAutoReplyTemplate = (name) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for your message</title>
  <style>
    body { 
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f5f9f6;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      padding: 20px;
      border-bottom: 2px solid #4e9a6e;
      margin-bottom: 30px;
    }
    .logo {
      font-size: 24px;
      color: #4e9a6e;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .content {
      padding: 0 20px;
      color: #333;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background: #4e9a6e;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      margin: 20px 0;
    }
    .social-links {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #eee;
      text-align: center;
    }
    .social-links a {
      color: #4e9a6e;
      text-decoration: none;
      margin: 0 10px;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #eee;
      font-size: 0.9em;
      color: #666;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Isuru Shanaka</div>
      <div style="color: #666;">Full Stack Developer</div>
    </div>
    <div class="content">
      <h2>Thank you for reaching out!</h2>
      <p>Dear ${name},</p>
      <p>I appreciate you taking the time to contact me. I have received your message and will get back to you as soon as possible.</p>
      <p>In the meantime, feel free to:</p>
      <ul>
        <li>Check out my portfolio projects</li>
        <li>Connect with me on social media</li>
        <li>Review my skills and experience</li>
      </ul>
      <div style="text-align: center;">
        <a href="https://github.com/IsuruSH" class="button">View My Projects</a>
      </div>
      <div class="social-links">
        <a href="https://github.com/IsuruSH">GitHub</a> |
        <a href="https://www.linkedin.com/in/isuru-shanaka-03a3a721b">LinkedIn</a>
      </div>
      <div class="footer">
        <p>Best regards,<br>Isuru Shanaka</p>
        <small>This is an automated response. Please do not reply to this email.</small>
      </div>
    </div>
  </div>
</body>
</html>
`;

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Contact Form Message from ${name}`,
      html: getAdminEmailTemplate(name, email, message),
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank you for contacting Isuru Shanaka",
      html: getAutoReplyTemplate(name),
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
