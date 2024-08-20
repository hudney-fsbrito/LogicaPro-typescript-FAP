/* Escreva uma função chamada "advinheNumero" que gera aleatoriamente um número inteiro entre
1 e 100. Em seguida, permita que o usuário insira tentativas para adivinhar o número. A função
deve dar dicas ao usuário se o número correto é maior ou menor do que a tentativa. Quando o
usuário acertar, exiba uma mensagem de parabéns e informe a quantidade de tentativas
utilizadas. */

export function advinheNumero() {
  let numAleatorio = Math.round(Math.random() * 100);
  alert("Digite um número para começar a brincadeira!");
  let num = parseInt(prompt(`Digite um número INTEIRO de 1 a 100`)!);
  if (!isNaN(num)) {
    do {
      if (num > numAleatorio) {
        alert(`
                    VOCÊ DIGITOU ${num}
                    O número oculto é MENOR do que o digitado
                    Tente de novo!
                    `);
        num = parseInt(prompt(`Digite um número INTEIRO de 1 a 100`)!);
        console.log(num);
      } else if (num < numAleatorio) {
        alert(`
                    VOCÊ DIGITOU ${num}
                    O número oculto é MAIOR do que o digitado
                    Tente de novo!
                    `);
        num = parseInt(prompt(`Digite um número INTEIRO de 1 a 100`)!);
        console.log(num);
      }
    } while (num !== numAleatorio);
  } else {
    alert(`Reinicie e digite um número válido!`);
  }
  if (num == numAleatorio) {
    alert(`${num} | PARABÉNS VOCÊ ACERTOU!!!`);
  }
  console.log(`FIM!!!`);
}
