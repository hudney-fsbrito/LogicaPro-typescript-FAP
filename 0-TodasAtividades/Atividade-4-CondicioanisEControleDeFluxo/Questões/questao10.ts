/* Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês
correspondente. */
enum Mes {
  JANEIRO = 1,
  FEVEREIRO,
  MARCO,
  ABRIL,
  MAIO,
  JUNHO, 
  JULHO,
  AGOSTO,
  SETEMBRO,
  OUTUBRO,
  NOVEMBRO,
  DEZEMBRO
}
let numeroMes: Mes | undefined;
numeroMes = parseInt(prompt('Digite o número do mês desejado \n [1] | [2] | [3] \n [4] | [5] | [6] \n [7] | [8] | [9] \n [10] | [11] | [12]')!)

switch (numeroMes) {
  case Mes.JANEIRO:
    alert(`${Mes[1]}`)
    break;
  case Mes.FEVEREIRO:
    alert(`${Mes[2]}`)
    break;
  case Mes.MARCO:
    alert(`${Mes[3]}`)
    break;
  case Mes.ABRIL:
    alert(`${Mes[4]}`)
    break;
  case Mes.MAIO:
    alert(`${Mes[5]}`)
    break;
  case Mes.JUNHO:
    alert(`${Mes[6]}`)
    break;
  case Mes.JULHO:
    alert(`${Mes[7]}`)
    break;
  case Mes.AGOSTO:
    alert(`${Mes[8]}`)
    break;
  case Mes.SETEMBRO:
    alert(`${Mes[9]}`)
    break;
  case Mes.OUTUBRO:
    alert(`${Mes[10]}`)
    break;
  case Mes.NOVEMBRO:
    alert(`${Mes[11]}`)
    break;
  case Mes.DEZEMBRO:
    alert(`${Mes[12]}`)
    break;

  default:
    alert(`Mês inválido`)
    break;
}
