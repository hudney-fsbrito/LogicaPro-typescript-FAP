//Questão 41
/*Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.*/

let numDecimal = parseFloat(prompt('Digite um valor decimal')!)
let numDecimalArredondado = Math.round(numDecimal);
if (!numDecimal) {
  alert('Digite um número válido')
}else{
  alert(`Arredondando o número ${numDecimal} para o inteiro mais próximo, fica ${numDecimalArredondado}`)
}