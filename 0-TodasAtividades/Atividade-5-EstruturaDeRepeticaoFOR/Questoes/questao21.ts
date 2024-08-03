/* 
Faça um programa que exiba a soma dos dígitos
de um número inteiro fornecido pelo usuário.
*/

let numeral = parseInt(prompt("Digite um número:")!)

let arrNumeral = numeral.toString().split("");
let soma = 0; //Tem um variável com o mesmo nome em outro arquivo

console.log(numeral);

if (numeral !== null && !isNaN(numeral)) {
  for (let i = 0; i < arrNumeral.length; i++) {
    let element = parseInt(arrNumeral[i]);    
    if (element != null) {
      soma += element;
    }
  }
  alert(`A soma dos dígites do número ${numeral} é ${soma}`);
} else {
  alert(`ERRO!`);
}
