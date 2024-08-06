/* 
Crie um programa que receba n notas de alunos até que o número 0 seja teclado.
*Mostre a maior nota
*Mostre a menor nota
*Mostre quantas notas foram inseridas
*Calcule a média das notas
*Mostre quantos foram aprovados e quantos não foram aprovados (aprovado >= 7)
 
*/
let nota;
let notas: number[] = [];
let media: number = 0;
let aprovado: number = 0;
let reprovado: number = 0;
do {
  if (!isNaN(nota)) {
    notas.push(nota);
  }
  
  nota = parseFloat(prompt('Digite sua nota ou "0" para SAIR:')!);
} while (nota != 0);

let maior: number = notas[0];
let menor: number = notas[0];

if (notas.length > 0) {

  for (const nota of notas) {
    if (nota > maior) {
      maior = nota;
    }
    
    if (nota < maior) {
      menor = nota;
    }
    if (nota >= 7) {
      aprovado++
    }else if(nota < 7){
      reprovado++
    }
    media = media + nota
  }

  alert(`
    Foram cadastradas ${notas.length} notas
    São elas: ${notas}
    Nota maior ${maior}
    Nota menor ${menor}
    Média: ${media / notas.length}
    APROVADOS: ${aprovado}
    REPROVADOS: ${reprovado}`)
} else {
  alert("[ERRO] Tente novamente!!!");
}
