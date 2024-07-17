//Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a zero.

let numeroInteiro = parseInt(prompt('Digite um número inteiro:')!);

if (numeroInteiro > 0) {
    alert(`${numeroInteiro} é um número positivo`)
} else if (numeroInteiro < 0) {
    alert(`${numeroInteiro} é um número negativo`)
} else {
    alert(`${numeroInteiro} é igual a zero`)
}


// let numero: string;

// if (numeroInteiro > 0) {
//      numero ='Positivo'
// } else if (numeroInteiro < 0) {
//     numero = 'Negativo'
// } else {
//     numero = 'Zero'
// }

// switch (numero) {
//     case 'Positivo':
//         alert(`${numeroInteiro} é um número positivo`)
//         break;
//     case 'Negativo':
//         alert(`${numeroInteiro} é um número negativo`)
//         break;
//     case 'Zero':
//         alert(`${numeroInteiro} é igual a zero`)
//         break;

//     default:
//         break;
// }

window.location.reload();