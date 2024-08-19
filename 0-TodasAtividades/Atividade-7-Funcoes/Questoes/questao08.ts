/* 
Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma
pessoa e retorne o índice de massa corporal (IMC) dela.
imc = peso / (altura^2)
*/

alert('Digite o peso(kg) e a altura(m): ')
const arrDados = solicitaNumeros(2, 'dado');
const peso: number = arrDados[0];
const altura: number = arrDados[1];

function IMC(peso:number, altura:number) {
  const imc = peso / (altura^2)
  return imc.toFixed(2)
}

alert(IMC(peso,altura))