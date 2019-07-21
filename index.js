const express = require('express')
const app = express()
const path = require('path')
const mysql = require('mysql')

const port = process.env.port || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const homeRouter = require('./routes/home')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'nome-banco'
})

const dependencies = {
    connection
}

app.use('/', homeRouter)

connection.connect((err) => {
    if(!err) {
        app.listen(port, () => {
        console.log('Erro ao iniciar servidor: ' + err)
    })
    }else {
        console.log('Servidor iniciado.')
    }
})