const example = require('./models/home')

const index = async(connection, req, res) => {
    const results = await example.findAll(connection)
    res.render('example.ejs', { example: results })
}