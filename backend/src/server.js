require('dotenv').config()
const express = require('express')
const cors = require('cors')
const formData = require('express-form-data')
const os = require('os')
const app = express()
const sendMail = require('./sendMail').sendMail
const PORT = process.env.PORT || 3000

const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
  };

app.use(express.json())
app.use(cors())
app.use(formData.parse(options))

app.listen(PORT, ()=>{
    console.log('listening on port ' + PORT)
})

app.get('/', (req, res)=>{
    res.send('hola')
})

app.post('/send-mail', (req, res)=>{
    let name = req.body.name
    let email = req.body.email 
    let tel = req.body.tel 
    let level = req.body.level
    if(!name || !email || !tel || !level || name.length == 0 || email.length == 0 
        || tel.length == 0 || level.length == 0) return res.send({"error": "faltan datos por rellenar"})

    const query = sendMail(name, tel, email, level)
    return console.log(query), res.status(200), res.send(query)
})