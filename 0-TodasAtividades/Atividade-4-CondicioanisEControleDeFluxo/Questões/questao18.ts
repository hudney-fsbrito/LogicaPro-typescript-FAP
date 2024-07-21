/* Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma
mensagem informando se é solteiro, casado, divorciado ou viúvo. */

let estadoCivil: string = String(prompt('Qual o seu estado civil: \n Solteiro, Casado, Divorciado, Viúvo')?.toUpperCase());

switch (estadoCivil) {
  case 'SOLTEIRO':
    alert(`Estado civil: ${estadoCivil}`)
    break;
  case 'CASADO':
    alert(`Estado civil: ${estadoCivil}`)
    break;
  case 'DIVORCIADO':
    alert(`Estado civil: ${estadoCivil}`)
    break;
  case 'VIÚVO':
    alert(`Estado civil: ${estadoCivil}`)
    break;

  default:
    alert(`ERRO! Digite novamente!`)
    break;
}
