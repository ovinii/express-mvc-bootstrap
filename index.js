const express = require('express')
const app = express()
const port = process.env.port || 3000

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Servidor iniciado.')
})

app.listen(port, (err) => {
    if(err) {
        console.log('Erro ao iniciar servidor: ' + err)
    }else {
        console.log('Servidor iniciado.')
    }
})