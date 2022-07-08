let frase = "Olá mundo Tudo bem com você? "
console.log(frase.length, ', length!!!')
//retorna o tamanho do objeto.

console.log(frase.indexOf('Olá'), ', indexOf!!!')
//Irá mostrar a localização do parametro que você optou.

console.log(frase.slice(1, 4), ', slice!!!')
//Irá mostrar o elemento selecionado por meio dos parâmetros.

console.log(frase.trim(), ', trim!!!')
//Irá apresentar o objeto sem espaços no começo e no final.

console.log(frase.split(), ', split!!!')
//split irá separar seu objeto de string para array. Você irá tratar o parâmetro.

let fraseModificada = frase.replace('mundo', 'pessoal!')
console.log(fraseModificada)
//o replace irá trocar o elemento que você selecionou pelo que você optou.

