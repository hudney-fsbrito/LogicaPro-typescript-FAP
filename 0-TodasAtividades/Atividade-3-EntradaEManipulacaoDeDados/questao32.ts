//Questão 32
/*Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro
desse número.*/

const numero2 = Number(prompt("Digite um valor:"));
let dobroNumero = numero2 * 2;

if (!numero2) {
  alert(`Não foi possível completar!`)
} else {
  alert(`O dobro de ${numero2} é ${dobroNumero}`)
}