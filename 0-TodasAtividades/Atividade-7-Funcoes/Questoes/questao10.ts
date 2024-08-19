/* Elabore uma função chamada "calcularImpostoRenda" que receba o salário bruto de uma pessoa
como parâmetro e retorne o valor do imposto de renda a ser pago, considerando as seguintes
faixas de renda:
a. Até R$ 1.903,98: isento
b. De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
c. De R$ 2 .826,66 até R$ 3.751,05: alíquota de 15%
d. De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
e. Acima de R$ 4.664,68: alíquota de 27,5% */

alert("Digite o salário a ser calculado");
let arrsalario = solicitaNumeros(1, "salário");
let salario = arrsalario[0];

function geraImposto(imposto: number, valor: number) {
  imposto = valor * imposto;
  return imposto;
}

function converteValorParaReal(valor:number) {
  let valorConvertido;
  return valorConvertido = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

function calcularImpostoRenda(sal: number) {
  let taxaImposto;
  let salEmReal;
  if (sal <= 1903.98) {
    salEmReal = converteValorParaReal(sal);
    alert(`Salário ${salEmReal} está livre de imposto!!!`);

  } else if (sal >= 1903.99 && sal <= 2826.65) {
    salEmReal = converteValorParaReal(sal);
    taxaImposto = converteValorParaReal(geraImposto(0.075, sal));
    alert(`O importo de 7,5% em cima de ${salEmReal} fica no valor de ${taxaImposto}`);
  } else if (sal >= 2826.66 && sal <= 3751.05) {
    salEmReal = converteValorParaReal(sal);
    taxaImposto = converteValorParaReal(geraImposto(0.15, sal));
    alert(`O importo de 15% em cima de ${salEmReal} fica no valor de ${taxaImposto}`);
  } else if (sal >= 3751.06 && sal <= 4664.68) {
    salEmReal = converteValorParaReal(sal);
    taxaImposto = converteValorParaReal(geraImposto(0.225, sal));
    alert(`O importo de 22,5% em cima de ${salEmReal} fica no valor de ${taxaImposto}`);
  } else if (sal > 4664.68) {
    salEmReal = converteValorParaReal(sal);
    taxaImposto = converteValorParaReal(geraImposto(0.275, sal));
    alert(`O importo de 27,5% em cima de ${salEmReal} fica no valor de ${taxaImposto}`);
  }
}
calcularImpostoRenda(salario)