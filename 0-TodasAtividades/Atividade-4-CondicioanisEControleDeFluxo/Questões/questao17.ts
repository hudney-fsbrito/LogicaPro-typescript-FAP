/* Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12
anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos). */

let idade: number = parseInt(prompt("Digite a sua idade:")!);
let faixaEtaria: string = "";

function verificaFaixaetária(n: number) {
  if (n >= 0 && n <= 1) {
    faixaEtaria = "bebê";
  } else if (n >= 2 && n <= 12) {
    faixaEtaria = "criança";
  } else if (n >= 13 && n <= 18) {
    faixaEtaria = "adolescente";
  } else if (n > 18) {
    faixaEtaria = "adulto";
  }
  return faixaEtaria;
}

if (!isNaN(idade)) {
  verificaFaixaetária(idade);
} else {
  alert(`ERRO!!! Digite valores válidos`)
}

switch (faixaEtaria) {
  case 'bebê':
    alert(`Idade de um ${faixaEtaria}!`)
    break;
  case 'criança':
    alert(`Idade de um ${faixaEtaria}!`)
    break;
  case 'adolescente':
    alert(`Idade de um ${faixaEtaria}!`)
    break;
  case 'adulto':
    alert(`Idade de um ${faixaEtaria}!`)
    break;

  default:
    break;
}