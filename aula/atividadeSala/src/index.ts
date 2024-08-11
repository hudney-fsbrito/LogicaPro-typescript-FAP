/* 
Crie um programa que receba n notas de alunos até que o número -1 seja teclado.
*Mostre a maior nota
*Mostre a menor nota
*Mostre quantas notas foram inseridas
*Calcule a média das notas
*Mostre quantos foram aprovados e quantos não foram aprovados (aprovado >= 7)
*/


let nota:number;
let notas: number[] = [];

let i = 1;


function inserirNotas() {
  do {
    if (!isNaN(nota) || (nota >= 0 && nota <= 10)) {
      notas.push(nota);
      i++
    } 
    nota = parseInt(
      prompt(`
      Digite a ${notas[i]}ª nota do aluno de 0 a 10:
      Para finalizar digite [-1]
      `)!
    );
  } while (nota != -1);
}
inserirNotas()

function listarNotas(...listaNotas: number[]) {
  return notas.join('| ')
}

function mostraMaior(...listaNotas: number[]) {
  let maior: number = listaNotas[0];
  listaNotas.forEach((n) => (n > maior ? (maior = n) : maior));
  return maior;
}
function mostraMenor(...listaNotas: number[]) {
  let maior: number = listaNotas[0];
  listaNotas.forEach((n) => (n < maior ? (maior = n) : maior));
  return maior;
}
function mostraQuantidadeNotas(...listaNotas: number[]) {
  return listaNotas.length;
}
function calculaMediaNotas(...listaNotas: number[]) {
  let soma: number = 0;
  listaNotas.forEach((nota) => (soma += nota));
  return (soma / listaNotas.length).toFixed(2);
}
function listaAprovados(...listaNotas: number[]) {
  let aprovados: number = 0;
  listaNotas.forEach((n) => (n >= 7 ? aprovados++ : aprovados));
  return aprovados;
}
function listaReprovados(...listaNotas: number[]) {
  let reprovados: number = 0;
  listaNotas.forEach((n) => (n < 7 ? reprovados++ : reprovados));
  return reprovados;
}


enum Escolha {
   QuantasCadastrada = 1,
   ListarNotas, 
   CalcularMedia,
   listarAprovados,
   listaReprovados,
   Maior,
   Menor,
   SAIR,
}
let escolha: Escolha;
  if (notas.length !== 0) {
    
    do {
      
       escolha  = parseInt(prompt(`Escolha uma das opções abaixo: 
        [1] Quantas notas cadastradas
        [2] Listar notas cadastradas
        [3] Calcular médias das sala
        [4] listar quantidade de aprovados
        [5] listar quantidade de reprovados
        [6] Maior nota
        [7] Menor nota
        [8] SAIR
        `)!);
    
  
    switch (escolha) {
      case Escolha.QuantasCadastrada:
        alert(mostraQuantidadeNotas(...notas))
        break;
      case Escolha.ListarNotas:
        alert(listarNotas(...notas))
        break;
      case Escolha.CalcularMedia:
        alert(calculaMediaNotas(...notas))
        break;
      case Escolha.listarAprovados:
        alert(listaAprovados(...notas))
        break;
      case Escolha.listaReprovados:
        alert(listaReprovados(...notas))
        break;
      case Escolha.Maior:
        alert(mostraMaior(...notas))
        break;
      case Escolha.Menor:
        alert(mostraMenor(...notas))
        break;
    
      default:
        break;
    }
    } while (escolha != Escolha.SAIR);
}
