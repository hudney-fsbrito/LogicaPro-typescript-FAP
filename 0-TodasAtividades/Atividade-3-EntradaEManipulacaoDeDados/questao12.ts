//// Questão 12

//Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números foram digitados.
let numeros = prompt('Digite números separados por espaços: ')
console.log(numeros);
console.log(numeros?.split(' ').length);

let numerosDigitados1 = [numeros?.split(' ')]
console.log(numerosDigitados1);

console.log(numerosDigitados1[0].length);

let numerosDigitados2: string[] = [numeros?.split(' ')]
console.log(numerosDigitados2);

alert(numerosDigitados2[0].length);