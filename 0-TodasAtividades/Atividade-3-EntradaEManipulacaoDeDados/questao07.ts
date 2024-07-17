//Receba um número inteiro do usuário e converta-o em um número decimal (float).
let numero = parseInt(prompt('Digite um número: ')!)
if (!numero) {
  alert('Número inválido!!!')
} else {
  console.log(parseFloat(numero));
  alert(parseFloat(numero))
}