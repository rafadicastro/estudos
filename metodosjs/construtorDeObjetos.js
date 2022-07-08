let series = {
    nome: "Strong Woman",
    episodios: 16
}

function Series(valorNome, valorEpisodios){
    this.nome = valorNome;
    this.episodios = valorEpisodios;
}
console.log(series)
console.log(new Series("Vincenzo", 20))

console.log('--------------------------------------------------------ss')

let marcas = {
    empresa: "Prada",
    produto: "Coturno preto",
}

function Marcas(valorNome, valorProduto){
    this.empresa = valorNome;
    this.produto = valorProduto;
}

console.log(marcas)
console.log(new Marcas("Louis Vuitton", "Óculos de Sol"))