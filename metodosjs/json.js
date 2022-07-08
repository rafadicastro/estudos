let dados = {
    "nome" : "joão",
    "idade" : 18
}

let dadosConvertidos = JSON.stringify(dados)
//stringify transforma o objeto em texto/string

let reConvertidos = JSON.parse(dadosConvertidos)
//parse converte o texto/string em objeto

console.log(dadosConvertidos)
console.log('stringify!!!!')
