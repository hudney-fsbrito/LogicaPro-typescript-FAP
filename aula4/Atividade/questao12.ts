//// Questão 12


let numeros = prompt('Digite números separados por espaços: ')
console.log(numeros);
console.log(numeros?.split(' ').length);

let numerosDigitados1 = [numeros?.split(' ')]
console.log(numerosDigitados1);

console.log(numerosDigitados1[0].length);

let numerosDigitados2: string[] = [numeros?.split(' ')]
console.log(numerosDigitados2);

console.log(numerosDigitados2[0].length);