
function cadastrandoNovoUsuario(){
    console.log('Pegando usuários!')
    //let nomeUsuario = document.getElementById('InputNome').value;
    //let idadeUsuario = document.getElementById('InputIdade').value;
    
    let novoUsuario = {
        nome: 'Rafael', 
        idade: 18,
        bairro: 'Jardim icarai',
        naturalidade: 'Fortaleza'
    };

        fetch ('http://localhost:3000/usuario', {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(novoUsuario)
        })
       
        .then(resp => resp.json())
        .then(resposta => {
            try { 
                var produtos = resposta
                if(produtos.length == 0){
                    console.log('Vazio')
                }

            } catch (error) {
                console.log('Erro caiu aqui: ', error.message)
            }
        })

        .catch(error => {
            var divAlerta = document.getElementById('alerta');
            divAlerta.innerHTML = 'Infelizmente não estamos num bom dia :)';
        })

    console.log('Fim!')
}

document.addEventListener('DOMContentLoaded', function(){
    console.log('Página totalmente carregada!')
    cadastrandoNovoUsuario()
})