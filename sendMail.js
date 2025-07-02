// Required dependencies
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { configDotenv } from "dotenv";
import { hrEmails } from "./listOfEMails.js";

configDotenv();

// Create reusable transporter object using SMTP
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.userEmail, // Replace with your email
    pass: process.env.userPassword, // Replace with your email password or app password
  },
});

// Load your resume PDF file (make sure resume.pdf is in the same directory)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resumePath = path.join(__dirname, "Muhammad_Mohsin_Iqbal_Resume.pdf"); // replace with you resume name

// Read resume file
const resumeAttachment = {
  filename: "Muhammad_Mohsin_Iqbal_Resume.pdf", // replace with you resume name
  content: fs.readFileSync(resumePath),
  contentType: "application/pdf",
};
// Mail
let subject = "Application Inquiry – Open Role in IT or Software Development"; // you can change it as you want
let text = `Dear HR Team!\n\nAssalamualaikum,\n\nI'm Muhammad Mohsin Iqbal, a recent Computer Science graduate from GCUF (Sahiwal Campus), inquiring about any suitable opportunities in your organization related to software or web development.\n\nI have hands-on experience building and deploying full-stack applications using the MERN stack. My Final Year Project, WebLift, is a GitHub-integrated deployment platform that uses AWS, Docker, and secure authentication. I've also developed an SMM Panel and contributed to a real-time chat app.\n\nI'm confident in React, Node.js, MongoDB, Express, REST APIs, and version control, and I'm eager to contribute and grow as part of your engineering team. I've attached my resume for your review.\n\nLooking forward to the opportunity.\n\nRegards,\nMuhammad Mohsin Iqbal\n📞 +92 324 0024708\n📧 mohsiniqbalbhatti0024@gmail.com\n🔗 GitHub: https://github.com/Mohsiniqbalbhatti\n🔗 LinkedIn: https://www.linkedin.com/in/mohsin-iqbal-bhatti/`;
// Message content
const mailOptions = (toEmail) => ({
  from: process.env.userEmail,
  to: toEmail,
  subject: subject,
  text: text,
  attachments: [resumeAttachment],
});

// Send emails sequentially to avoid spam flags
(async () => {
  for (let email of hrEmails) {
    try {
      let info = await transporter.sendMail(mailOptions(email));
      console.log(`✅ Email sent to ${email}: ${info.response}`);
    } catch (err) {
      console.error(`❌ Failed to send email to ${email}:`, err.message);
    }
  }
})();
