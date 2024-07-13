//Questão 34
/*Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente
(divisão inteira) entre eles.*/

let numX = Number(prompt("Digite o primeiro número Inteiro"));

let op = String(
  prompt("Digite * multiplicação; / divisão; + adição; - subitração")
);

let numY = Number(prompt("Digite o segundo número Inteiro"));

function calcInteiro(num1: number, num2: number, op: string) {
  let resultado: number;
  if (op === "+") {
    resultado = num1 + num2;
    alert(`O resultado da soma é: ${resultado}`);
  } else if (op === "-") {
    resultado = num1 - num2;
    alert(`O resultado da subtração é: ${resultado}`);
  } else if (op === "/") {
    resultado = num1 / num2;
    alert(`O resultado da divisão é: ${resultado}`);
  } else if (op === "*") {
    resultado = num1 * num2;
    alert(`O resultado da multiplicação é: ${resultado}`);
  }
}

calcInteiro(numX, numY, op);