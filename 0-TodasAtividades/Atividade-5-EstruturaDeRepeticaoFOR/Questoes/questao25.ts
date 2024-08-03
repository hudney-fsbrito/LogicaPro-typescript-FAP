/* 
Elabore um programa que leia um número inteiro e 
exiba a soma dos dígitos pares desse número.
*/

let numeroInteiro = parseInt(prompt("Digite um número inteiro:")!);
let arrNumInteiro = numeroInteiro.toString().split("");
let soma = 0; // Tem um variável com o mesmo nome em outro arquivo

if (numeroInteiro !== null && !isNaN(numeroInteiro)) {
  for (let i = 0; i < arrNumInteiro.length; i++) {
    let element = parseInt(arrNumInteiro[i]);
   
      if (element % 2 == 0) {soma += element};
    
  }
  alert(`A soma dos dígites PARES do número ${numeroInteiro} é ${soma}`);
  console.log(arrNumInteiro);
} else {
  alert(`[ERRO] Digite um número inteiro válido!`);
}


