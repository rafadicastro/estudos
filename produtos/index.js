const express = require ('express');
const app = express();
const port = 2003;

app.set("view engine", "ejs")
app.use(express.static(__dirname + ('/public')))

app.get('/produtos', (req, response)=>{
    console.log('requisição');
    try{
        var listaProdutos = [
            {id: 0, name: 'Arroz'},
            {id: 1, name: 'Feijão'},
            {id: 2, name: 'Macarrão'}
        ]
        return response.send(listaProdutos);
    } catch(error) {
        response.status(500).send('Infelizmente estamos com probemas :/')
    }
});

app.get('/home', (req, res)=>{
    const tituloCabecalho = 'Homepage';
    return res.render('index', {tituloCabecalho})
})

app.get('/cadastro', (req, res)=>{
    const tituloCabecalho = 'Cadastro de Usuário'
    return res.render('cadastro', {tituloCabecalho})
})

app.listen(port, ()=>{
    console.log(`Servidor na porta ${port}!`)
})