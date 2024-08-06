/* 
Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos
números digitados. O programa deve parar de ler quando o usuário digitar o número -1 utilizando
o while.
*/

let seqNum: number[] = [];
let num;
let soma: number = 0;

do {
  if (!isNaN(num)) {
    seqNum.push(num)
    soma+=num
  }
  
  num = parseInt(prompt(`
    Digite  sequência de números inteiros
    E para sair digite [-1]
    `)!)
  
  
} while (num != -1);
alert(`
  Os números digitados: ${seqNum}
  A média dos números é: ${(soma / seqNum.length).toFixed(2)}
  `)