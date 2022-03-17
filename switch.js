//ARQUIVO PARA APRENDER O SWITCH!!!!!!!!!

const frutas = 'uva'

switch (frutas){
    case 'maçã':
    console.log('A maçã custa R$2,50 o kg');
    break;
    case 'mamão':
    case 'melão':
        console.log(`A unidade do ${frutas} está R$3,50`)
    break;
    default:
        console.log(`${frutas} está em promoção! Apenas R$2,99 o kg!`);
}