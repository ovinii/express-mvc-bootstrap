/*
const findById = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM PESSOAS WHERE ID = ' + id, (err, results) => {
            if(err) {
                reject(err)
            } else {
                if (results.length > 0) {
                    resolve(results[0])
                }else {
                    resolve({})
                }
            }
        })
    })
}

const create = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO PESSOAS (NOME, NASCIMENTO, CARGO) VALUES 
        ('${data.nome}', '${data.nascimento}', '${data.cargo}')`, (err) => {
            if(err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}
*/