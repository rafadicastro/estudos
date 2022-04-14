let fruta = 'Melancia';

switch(fruta){
    case 'maçã':
        console.log('Não vendemos esta fruta aqui!');
    break;

    case 'kiwi':
        console.log(`Estamos com escassez ${fruta}`);
    break;

    case 'Melancia':
        console.log('Aqui está, são 3 reais o quilo.')
    break;

    default:
        console.log('Error')
}