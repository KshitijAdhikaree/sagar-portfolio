import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com', // hostname
    secureConnection: false, // use SSL
    port: 587, // port for secure SMTP
    auth: {
      user: 'sagarportfolio@outlook.com',
      pass: 'r#wq*4nDqhV',
    },
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'sagarportfolio@outlook.com', // sender address
    to: 'adhikareekshitij@gmail.com', // list of receivers
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
