// const numero = prompt("Digite um número:");
// if (numero === null) {
//   alert("Informação INVÁLIDA");
// } else {
//   alert('Informação VÁLIDA')
// }
// const numeroTransformado = parseFloat(numero);
// const altura = Number(prompt("Digite a sua altura: "));
// const peso = Number(prompt("Digite o seu peso: "));
// const imc = peso / (altura ^ 2);
// if (imc < 18.55) {
//   alert("Abaixo do peso normal");
// } else if (imc < 24.9) {
//   alert("Peso normal");
// } else if (imc >= 24.9) {
//     alert(imc)
//   alert(imc.toFixed(2) + ` Excesso de peso`);
// } else {
//   alert("Categoria não encontrada");
// }
var velocidade = Number(prompt("Qual foi a velocidade em Km/h?"));
var velocidadePermitida = 60;
if (velocidade > 90) {
    alert("ACIMA DA VELOCIDADE!!! Categoria GRAVÍSSIMA: multa de R$ 880,41");
}
else if (velocidade > 72 && velocidade <= 90) {
    alert("ACIMA DA VELOCIDADE!!! Categoria GRAVE: multa de R$ 195,23");
}
else if (velocidade > 60 && velocidade <= 72) {
    alert("ACIMA DA VELOCIDADE!!! Categoria MÉDIA: multa de R$ 130,16");
}
else {
    alert("Parabéns! Está na velocidade permitida.");
}
location.reload();
