//Questão 25
/*Solicite ao usuário um número decimal e converta-o em um número inteiro.*/

let numberFloat = Number(prompt('Digite um número decimal: '))

function convertInt(num:number) {
  
  alert(parseInt(num))
  /*alert(Math.round(num))
  alert(Math.floor(num))
  alert(Math.ceil(num))*/

}
convertInt(numberFloat)