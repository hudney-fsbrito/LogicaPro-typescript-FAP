//Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.
let numeroParImpar : number = Number(prompt('Digite um número'))

function parOuImpar(num:number) {
  if (!num) {
    alert('Número inválido!!!')
  } else {
    num % 2 == 0 ? alert(`O número ${num} é par`)
     : alert(`O número ${num} é ÍMPAR`);
  }
}

parOuImpar(numeroParImpar)
