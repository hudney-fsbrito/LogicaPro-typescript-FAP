//Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.
const numero: number = Number(prompt('Digite um número: '));

function verificaNumeroNegativo(num:number) {
  if (!num) {
    alert('Número inválido!!!')
  }else{
    num < 0 ? alert(`O número ${num} é um número negativo`) : alert(`O número ${num} NÃO é um número negativo`);
  }

}

verificaNumeroNegativo(numero);