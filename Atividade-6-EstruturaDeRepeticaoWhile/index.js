/*
Crie um programa que receba n notas de alunos até que o número 0 seja teclado.
*Mostre a maior nota
*Mostre a menor nota
*Mostre quantas notas foram inseridas
*Calcule a média das notas
*Mostre quantos foram aprovados e quantos não foram aprovados (aprovado >= 7)
 
*/
var nota;
var notas = [];
do {
    if (!isNaN(nota)) {
        notas.push(nota);
    }
    else {
        alert('Tente novamente!!!');
    }
    nota = parseFloat(prompt('Digite as nota:'));
    alert(notas);
    console.log(notas);
} while (nota != 0);
if (notas.length > 0) {
}
else {
    alert('[ERRO] Tente novamente!!!');
}
