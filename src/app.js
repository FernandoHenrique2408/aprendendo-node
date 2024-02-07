const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2')
const bodyparser = require('body-parser')

app.use(bodyparser.json())

const banco_de_dados = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'c@tolic@',
    database: 'turma'
})

app.get('/alunos', (req, res) => {
    banco_de_dados.query('SELECT * FROM 3a WHERE ID = ?', [2], (err, results) => {
        if (err){
            res.status(500).json({erro: "falha ao procurar usuarios", err})
        } else {
            res.json({Resultado: results})
        }
    })
})

banco_de_dados.connect((err) => {
    if (err) {
        console.log('Erro na Conexão com Mysql', err )
    }else{
        console.log('Conexão bem sucedida com MySql🐏')
    }
})

app.listen(port, () => {
    console.log ('O seu servidor está no ar 🐟')
})