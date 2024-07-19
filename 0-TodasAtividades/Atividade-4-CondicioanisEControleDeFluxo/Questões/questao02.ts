//Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de idade.

let idadePessoa: number = parseInt(prompt("Digite sua idade")!);

let pessoa: string;

if (!idadePessoa) {
  alert("Idade inválida");
} else {
  if (idadePessoa >= 18) {
    pessoa = "Maior";
  } else if (idadePessoa < 18 && idadePessoa > 0) {
    pessoa = "Menor";
  } else {
    pessoa = "Indefinido";
  }

  switch (pessoa) {
    case "Maior":
      alert(`A pessoa tem ${idadePessoa} anos e é maior de idade`);
      break;
    case "Menor":
      alert(`A pessoa tem ${idadePessoa} anos e é menor de idade`);
      break;
    case "Indefinido":
      alert(`Idade indefinida!!!`);
      break;

    default:
      break;
  }
}
