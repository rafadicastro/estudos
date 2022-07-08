const express = require('express')
const path = require('path')

let app = express()

var listaAmigos = [
    {nome: "Ycaro", idade: 17},
    {nome: "Nicoly", idade: 20},
    {nome: "Rhaelly", idade: 19},
    {nome: "Ingrid", idade: 18},
    {nome: "Brenda", idade: 18},
]
 
app.get('/', (req, res)=>res.send('Olá mundo'));
app.get('/contatos', (req, res)=>{
    res.send(listaAmigos)
})
//criando servidor
app.listen(3000, ()=>console.log('Server rodando na porta 3000'))