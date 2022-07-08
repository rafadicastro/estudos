let alunos = [
    'rafael', 
    'edielson',
    'guilherme',
    'lais',
    'arthur',
    'vitor'
]

/*for (let i = 0; i < alunos.length; i++){
    console.log('O valor de alunos é: ' + i, alunos[i])
}*/

let i =0;
while(i < alunos.length){
    if (i%2 == 1){
        console.log(i + ' é impar')
    } else{
        console.log(i + ' é par')
    }
    console.log(alunos[i])
    i++
}

/*var i = 0;
do {
    console.log(alunos[i])
    i++
} while(i < 0);*/