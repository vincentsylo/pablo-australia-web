import axios from 'axios';
import nodemailer from 'nodemailer';

export default function (app) {
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, enquiry, recaptcha } = req.body;
      const secret = process.env.RECAPTCHA_SECRET;
      const results = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptcha}`);

      if (results.data.success) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
          },
        });

        const mailOptions = {
          from: process.env.SMTP_EMAIL,
          to: 'anthony@pabloaustralia.com.au',
          subject: 'Enquiry on PABLO Australia',
          html: (`
            <div>
              <p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Enquiry: ${enquiry}</p>
            </div>
          `),
        };

        await transporter.sendMail(mailOptions);

        res.send(true);
      } else {
        res.send(false);
      }
    } catch (error) {
      res.sendStatus(400);
    }
  });
}
