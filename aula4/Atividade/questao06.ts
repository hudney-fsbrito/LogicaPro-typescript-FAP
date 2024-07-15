// Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número inteiro.

let idade = prompt('Qual a sua idade? ');
console.log(idade);
// let idadeConvertida = Number(idade);
let idadeConvertida = parseInt(idade!);
if (!idadeConvertida) {
  console.log(idadeConvertida);
  alert('Digite um número válido!!!')
  
} else{
  console.log(idadeConvertida);
  alert(`Idade digitada: ${idadeConvertida}`)
}