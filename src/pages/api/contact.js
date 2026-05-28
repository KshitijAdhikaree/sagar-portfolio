import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // create reusable transporter object using the default SMTP transport
 const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'sagarportfolio@outlook.com', // sender address
    to: 'adhikaree.sagar@gmail.com', // list of receivers
    subject: 'New message from Sagar Portfolio Website', // Subject line
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  })

  console.log('Message sent: %s', info.messageId)

  res.status(200).json({ message: 'Message sent successfully' })
}
