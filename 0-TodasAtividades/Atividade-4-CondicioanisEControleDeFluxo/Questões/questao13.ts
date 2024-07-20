/* Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem
informando se é um dia útil ou um fim de semana. */

enum Semana {
  SEGUNDA = "SEGUNDA",
  TERCA = "TERCA",
  QUARTA = "QUARTA",
  QUINTA = "QUINTA",
  SEXTA = "SEXTA",
  SABADO = "SABADO",
  DOMINGO = "DOMINGO",
}
let diaSemana: Semana | undefined | string;
diaSemana = String(prompt("Digite o dia da semana (SEM ACENTOS):")?.toUpperCase());



switch (diaSemana) {
  case Semana.DOMINGO:
    alert(`${Semana["DOMINGO"]}! Fim de semana`);
    break;
  case Semana.SEGUNDA:
    alert(`Hoje é dia útil. ${Semana['SEGUNDA']}`);
    break;
  case Semana.TERCA:
    alert(`Hoje é dia útil. ${Semana['TERCA']}`);
    break;
  case Semana.QUARTA:
    alert(`Hoje é dia útil. ${Semana['QUARTA']}`);
    break;
  case Semana.QUINTA:
    alert(`Hoje é dia útil. ${Semana['QUINTA']}`);
    break;
  case Semana.SEXTA:
    alert(`Hoje é dia útil. ${Semana['SEXTA']}`);
    break;
  case Semana.SABADO:
    alert(`${Semana["SABADO"]}! Fim de semana`);
    break;

  default:
    alert('Digite como sugerido!!!')
    break;
}