//FILTER, SERVE PARA FILTRAR O OBJETO

let idade = [
    16, 15, 35, 23, 18, 74
]

var maiorIdade = idade.filter(function(maiorIdade){
    return maiorIdade >= 18
})

console.log(maiorIdade)

//MAP

let number = [2, 4, 6, 8, 10, 12]

let twiceNumber =  number.map(function(umNumero){
    return umNumero * 2
})

console.log(twiceNumber)

