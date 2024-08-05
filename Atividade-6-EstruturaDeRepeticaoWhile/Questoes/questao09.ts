/* 
Faça um programa que calcule o produto 
dos números de 1 a 5 utilizando o while.
*/

let num: number = 1;
let numRes: number = 1;
while (num <= 5) {
    numRes *= num
    num++
    console.log(numRes);
    
}