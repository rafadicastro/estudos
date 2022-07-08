function addDramas(){
    
    var input = document.getElementById('inputitulo')
    var tituloDramas = input.value
    
    var itemLista = document.createElement('li')
    itemLista.innerHTML = tituloDramas
    
    var ul = document.getElementsByClassName('lista')[0];
    ul.appendChild(itemLista)
}

window.alert('Bem-vindxs!!! <3')