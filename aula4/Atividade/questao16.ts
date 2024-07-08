let numeroParImpar : number = Number(prompt('Digite um número'))

function parOuImpar(num:number) {
  num % 2 == 0 ? console.log(`O número ${num} é par`)
   : console.log(`O número ${num} é ÍMPAR`);
}

parOuImpar(numeroParImpar)