//Questão 22
/*Receba a base e a altura de um retângulo 
digitados pelo usuário. Em seguida, calcule a sua área e
exiba o resultado.*/

let baseRetangulo: number = Number(prompt("Digite a base do triângulo"));
let alturaRetangulo: number = Number(prompt("Digite a base do triângulo"));

function calculaAreaTriangulo(base: number, altura: number) {
  return base * altura;
}

console.log(calculaAreaTriangulo(baseRetangulo, alturaRetangulo));
