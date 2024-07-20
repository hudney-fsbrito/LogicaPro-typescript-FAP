/* Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.
Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de
15%. */

let salario: number = parseFloat(prompt(`Digite o valor do seu Salário: `)!);
const aumentoSalario = function (s: number) {
  let novoS: number;
  let acrescimo: number;
  if (s <= 1500) {
    acrescimo = s * (10 / 100);
  } else {
    acrescimo = s * (15 / 100);
  }
  novoS = s + acrescimo;
  return new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  }).format(novoS);
};
if (!isNaN(salario)) {
  alert(`Seu salário foi atualizado para: ${aumentoSalario(salario)}`);
} else {
  alert(`Valor INVÁLIDO!!!`);
}
