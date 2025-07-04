# Email Automations - Best of luck for you job hunt- Always have trust in Allah

Automatically send emails to a list of recipients with your custom resume and messaging.

## 1. Clone or Download

First, obtain the repository. In your terminal, run:

```bash
git clone https://github.com/Mohsiniqbalbhatti/automateEmails
```

Or download the ZIP from GitHub and extract it.

## 2. Navigate to the Code Directory

Change into the project folder containing `sendMail.js` and `package*.json`:

```bash
cd automateEmails
```

## 3. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then install the required packages:

```bash
npm install
```

## 4. Configure Environment Variables

Create a file named `.env` in the root of the project directory and add:

```ini
userEmail=your.email@gmail.com
userPassword=your_app_password_here
```

> **Note:** To avoid authentication issues, generate an *App Password* in your Google Account settings. Watch this video for guidance.
> [https://www.youtube.com/watch?v=N\_J3HCATA1c](https://www.youtube.com/watch?v=N_J3HCATA1c)

## 5. Customize Your Resume and Email List

1. Replace the sample resume file in the project folder with your own resume (keep the same filename or update references in code).
2. Open `sendMail.js` and adjust:

   * The resume filename
   * The email subject and body text
   * The list of recipient emails

## 6. Run the Automation

Once configured, send your batch email with:

```bash
node sendMail.js
```

## Tips & Troubleshooting

* Ensure your Node.js version is up to date (v14+ recommended).
* Double‑check your `.env` values for typos.
* If emails fail to send, confirm your App Password is correct and that "Less secure app access" is enabled (if still required).
* Review the console output for error messages.

---

## Contact

If you face any issues, feel free to contact me:

[Mohsin Iqbal Bhatti on LinkedIn](https://www.linkedin.com/in/mohsin-iqbal-bhatti/)

---
