var meuPais = {
    Nome: "Brasil",
    Capital: "Brasilia",
    populacao: 212600000,
    Nacionalidade: function() {
        return 'Nasci no ' + this.Nome;
        }
    };
    console.log(meuPais.Nacionalidade())
