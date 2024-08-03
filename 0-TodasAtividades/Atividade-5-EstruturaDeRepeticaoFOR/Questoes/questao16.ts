//Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.
let notas: number[] = [];
let resultado: number = 0;
let media: number;

for (let i = 1; i <= 5; i++) {
  let nota: number = parseFloat(prompt(`Digite a  nota ${i}`)!);

  if (!isNaN(nota)) {
    notas.push(nota);
  } else {
    alert(`Digite um valor copatível`);
  }
}
if (notas.length < 5) {
  alert("Faltou alguma nota, tente novamente!")
} else {
  for (const nota of notas) {
    resultado = resultado + nota;
  }
  media = resultado / 5;
  alert(`A média do respectível aluno é: ${media.toFixed(2)}`);

}