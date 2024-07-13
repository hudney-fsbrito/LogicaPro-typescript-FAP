//Questão 42
/*Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) *
n3.*/

let numero1: number = parseInt(prompt(`Digite o valor 1`)!)
let numero2: number = parseInt(prompt(`Digite o valor 2`)!)
let numero3: number = parseInt(prompt(`Digite o valor 3`)!)

const resultado = (n1:number,n2:number, n3:number)=>{
  if (!numero1 || !numero2 || !numero3) {
    alert(`Digite um número válido`)
  }else{
    let resultado = (n1 + n2) * n3;
    alert(`Resultado: ${resultado}`)
  };
};

resultado(numero1,numero2,numero3)