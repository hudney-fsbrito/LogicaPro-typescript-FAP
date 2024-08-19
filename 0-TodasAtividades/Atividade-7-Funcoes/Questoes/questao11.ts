/* Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como
parâmetro e retorne a média aritmética desses números, arredondada para o inteiro mais
próximo. */

alert(`Digite cinco números`);
let numArr = solicitaNumeros(5,'número');


function calcularMediaArredondada(arr:number[]) {
  let soma: number = 0;
  arr.forEach(num => {
    soma += num
  });
  return Math.round(soma / arr.length)
}

alert(`Segue e média dos númeors digitados: ${calcularMediaArredondada(numArr)}`)