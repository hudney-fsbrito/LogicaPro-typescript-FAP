/* 
Escreva uma função chamada "soma" 
que receba dois parâmetros (a e b) e retorne a soma deles.
*/

let arrSoma = solicitaNumeros(2, 'número')

function soma(a: number, b:number){
  return (a + b).toFixed(2);
};

alert(`A soma é: ${soma(arrSoma[0], arrSoma[1])}`);