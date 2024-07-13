//Questão 35
/*Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do
triângulo.*/

let baseTriangulo = Number(prompt('Digite a base do triângulo'))
let alturaTriangulo = Number(prompt('Digite a altura do triângulo'))
function calcTriangulo(base:number, altura:number) {
  let resultado = (base * altura) / 2;
  alert(resultado)
}
calcTriangulo(baseTriangulo,alturaTriangulo)