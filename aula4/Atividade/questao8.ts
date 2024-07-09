//Peça ao usuário para digitar dois números inteiros e exiba a soma deles.
const num1: number = Number(prompt('Digite o primeiro número: '));
const num2: number = Number(prompt('Digite o segundo número: '));

function Soma(num1:number, num2:number) {
    let resultado = num1 + num2
    return console.log('A soma dos números é: ' + resultado);
    
}

Soma(num1,num2)
