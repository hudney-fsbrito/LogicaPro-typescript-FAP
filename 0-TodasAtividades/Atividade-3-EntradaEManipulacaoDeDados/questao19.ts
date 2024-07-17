/* Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de
massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado. */

let peso: number = Number(prompt("Qual o seu peso kg:?"));
let altura: number = Number(prompt("Qual a sua altura em metros?"));

function calculaIMC(peso: number, altura: number) {
  if (!peso || !altura) {
    return alert('Némero inválido!!!')
  } else {
    
    let resultado = peso / altura ** 2;
    return alert(resultado.toFixed(2));
  }
}
calculaIMC(peso, altura);