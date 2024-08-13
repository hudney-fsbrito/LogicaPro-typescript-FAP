/* Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
  ou igual a 7) utilizando o while. */

  let nota;
  let notas: number[] = [];
  let qtdAprovados: number[] = [];
  let i: number = 1;
  
  do {
  
    nota = parseFloat(prompt(`Digite a ${i}ª nota: `)!)
    if (!isNaN(nota) && (nota >= 0 && nota <= 10)) {
      notas.push(nota)
      if (nota >= 7) {
        qtdAprovados.push(nota)
      }
      i++
    } else {
      alert('Tente novamente!')
    }
  
  } while (i <= 5);
  
  alert(notas.join(' | '))
  alert(`Foram aprovados ${qtdAprovados.length} alunos`)
  