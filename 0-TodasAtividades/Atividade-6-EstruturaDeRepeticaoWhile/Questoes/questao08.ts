/* 
Elabore um programa que calcule a soma 
dos números de 1 a 100 utilizando o while.
*/

let n: number = 0;
let soma: number = 0;
do {
    soma += n
    console.log(soma);
    n++
} while (n <= 100);