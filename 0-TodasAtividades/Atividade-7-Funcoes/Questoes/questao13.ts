/* Crie uma função chamada "calcularMediaAlunos" que receba uma lista de alunos, onde cada aluno
é representado por um objeto com os atributos "nome" e "nota". A função deve calcular e retornar a média das notas de todos os alunos. */

type Aluno = {
  nome: string;
  nota: number;
};

function criaAluno(qdtNum: number, item: string) {
  let arrAluno: Aluno[] = [];
  let qtdVezes = qdtNum;

  for (let i = 0; i < qtdVezes; ) {
    let nome = String(prompt(`Digite o nome do ${i + 1}º ${item}`));
    let nota = parseFloat(prompt(`Digite a nota do ${i + 1}º ${item}`)!);

    const aluno: Aluno = {
      nome: nome,
      nota: nota,
    };
    
    if (isNaN(nota)) {
      alert("Digite um NÚMERO válido");
    } else {
      arrAluno.push(aluno);
      i++;
    }
  }

  return arrAluno;
}


function calcularMediaAlunos(alunosMedia:Aluno[]) {
  let soma: number = 0;
  let media: number = 0;
  alunosMedia.forEach((aluno) => {
    soma += aluno.nota;
    media = soma / alunosMedia.length;
  });
  return media
}

alert("Cadastre os alunos");
let alunos = criaAluno(3, "aluno");
alert(`A média das notas dos alunos é ${calcularMediaAlunos(alunos).toFixed(2)}`);
