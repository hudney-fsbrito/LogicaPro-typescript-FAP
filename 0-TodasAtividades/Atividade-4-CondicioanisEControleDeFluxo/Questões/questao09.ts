/* Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e
a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso,
obesa ou muito obesa. 
IMC = peso/(altura x altura)
*/

let peso: number = parseFloat(prompt(`Digite seu peso (em kg)`)!);
let altura: number = parseFloat(prompt(`Digite sua altura (em metro)`)!);
let IMC: number = 0;
if (!isNaN(peso) && !isNaN(altura)) {
  IMC = calculaIMC(peso, altura);
} else {
  alert(`Dados inválidos!!!`);
}

let classificacao: string = "";
function calculaIMC(p: number, a: number) {
  return p / a ** 2;
}

if (IMC <= 18.4) {
  classificacao = "ABAIXO";
} else if (IMC >= 18.5 && IMC <= 24.5) {
  classificacao = "NORMAL";
} else if (IMC >= 25 && IMC <= 29.9) {
  classificacao = "ACIMA";
} else if (IMC >= 30 && IMC <= 34.9) {
  classificacao = "OBESIDADE1";
} else if (IMC >= 35) {
  classificacao = "OBESIDADE2";
}

switch (classificacao) {
  case "ABAIXO":
    alert(`Seu IMC é: ${IMC.toFixed(2)}; Sua classificação é ABAIXO do peso.`);
    break;
  case "NORMAL":
    alert(
      `Seu IMC é: ${IMC.toFixed(2)}; Sua classificação é de peso é NORMAL. PARABÉNS.`
    );
    break;
  case "ACIMA":
    alert(
      `Seu IMC é: ${IMC.toFixed(2)}; Sua classificação está ACIMA do peso.`
    );
    break;
  case "OBESIDADE1":
    alert(
      `Seu IMC é: ${IMC.toFixed(2)}; Sua classificação é ${classificacao}.procure um médico.`
    );
    break;
  case "OBESIDADE2":
    alert(
      `Seu IMC é: ${IMC.toFixed(2)}; Sua classificação é ${classificacao}.procure um médico URGENTE.`
    );
    break;

  default:
    alert(`Erro!.`);
    break;
}
