/* 
  Crie um programa que leia 5 notas de alunos e 
  exiba quantos deles foram aprovados (nota maior
  ou igual a 7).
*/
type Alunos = {
  nome: string;
  nota: number;
};

let alunos: Alunos[] = [];
let aprovados: Alunos[] = [];
let aluno: Alunos ;

//Solicita e adiciona aluno no arr alunos
for (let i = 1; i <= 5; i++) {
  aluno = {
    nome: String(prompt(`Digite o nome do ${i}º aluno: `)?.split(" ")),
    nota: parseFloat(prompt("Digite a nota: ")!),
  };
  if (!isNaN(aluno.nota)) {
    alunos.push(aluno);
  } else {
    alert("[ERRO] Digitato um valor INVÁLIDO!");
  }
}

//Verifica aluno aprovado e add no arr aprovados
for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 7) {
    aprovados.push(alunos[i]);
  }
}

//Resultado
if (!isNaN(aluno.nota)) { //erro pois tem que colocar em arquivo diferente. pq?
alert(`Foram aprovados ${aprovados.length} alunos.`);

for (const aluno of aprovados) {
  alert(`Aluno(a) ${aluno.nome} aprovado!`);
}
aprovados.forEach((element) => {
  alert(`Aluno(a) ${element.nome} aprovado com nota ${element.nota}`);
});
}


