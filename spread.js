//adicionando dados a um novo array!!!

let frutas = ["uva", "banana", "uva"];

let frutas2 = ['laranja', 'abacate', 'goiaba']

let listaCompleta = [...frutas, ...frutas2]

console.log(listaCompleta)

let curso = {
    materia: "Direito",
    periodos: 4, 
    matricula: 2478570
}
let aluno = {
    nome: "João paulo",
    dataNasc: 14112004,
    ...curso
}

console.log(aluno)

//spread em funções

function numeros(...outrosNumeros){
    console.log(outrosNumeros)
};

numeros(1, 2, 3, 4)
