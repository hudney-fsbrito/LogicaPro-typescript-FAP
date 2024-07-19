/* Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o
aluno está aprovado (média maior ou igual a 7) ou reprovado. */

const nota1: number = parseFloat(prompt("Digite a primeira nota")!);
const nota2: number = parseFloat(prompt("Digite a segunda nota")!);
const nota3: number = parseFloat(prompt("Digite a terceira nota")!);
let media: number = calculaMedia(nota1, nota2, nota3);

function calculaMedia(n1: number, n2: number, n3: number) {
  return (n1 + n2 + n3) / 3;
}

if (!nota1 || !nota2 || !nota3) {
  alert(`Digite uma nota válida!!!`);
} else {
  if (media >= 7) {
    alert(`Aluno com média ${media.toFixed(2)}, APROVADO`);
  } else {
    alert(`Aluno REPROVADO`);
  }
}