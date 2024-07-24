require('dotenv').config()
const nodemailer = require('nodemailer')

function sendMail(name, tel, email, level){
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
      });
    
    let mailOptions = {
        from: process.env.DESTINATION,
        to: process.env.DESTINATION,
        subject: 'Información de ' + name,
        text: `
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${tel}
        Grado academico de interés: ${level}
        `
    }

    transporter.sendMail(mailOptions, (err, data)=>{
        if(error) return {"error": "error al enviar correo"}

        return console.log(data)
    })
}

exports.sendMail = sendMail