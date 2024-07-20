/* Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 -
Domingo, 2 - Segunda-feira, etc.). */

enum Semana {
  SEGUNDA = 1,
  TERCA = 2,
  QUARTA = 3,
  QUINTA = 4,
  SEXTA = 5,
  SABADO = 6,
  DOMINGO = 7,
}
let diaSemana: Semana | undefined ;
diaSemana = Number(prompt("Digite um número de 1 a 7: \n [1] [2] [3] [4] [5] [6] [7] "));


switch (diaSemana) {
  case Semana.DOMINGO:
    alert(`${Semana[7]}!`);
    break;
  case Semana.SEGUNDA:
    alert(`${Semana[1]}`);
    break;
  case Semana.TERCA:
    alert(`${Semana[2]}`);
    break;
  case Semana.QUARTA:
    alert(` ${Semana[3]}`);
    break;
  case Semana.QUINTA:
    alert(`${Semana[4]}`);
    break;
  case Semana.SEXTA:
    alert(`${Semana[5]}`);
    break;
  case Semana.SABADO:
    alert(`${Semana[6]}!`);
    break;

  default:
    alert('Digite como sugerido!!!')
    break;
}