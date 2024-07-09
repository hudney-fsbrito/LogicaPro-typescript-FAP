//Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.
const numero: number = Number(prompt('Digite um número: '));

function verificarNumeroNegativo(num:number) {
  if (num < 0) {
    return console.log(`O número ${numero} é um número negativo`);
  }
  return console.log(`O número ${numero} NÃO é um número negativo`);
  
}

verificarNumeroNegativo(numero);