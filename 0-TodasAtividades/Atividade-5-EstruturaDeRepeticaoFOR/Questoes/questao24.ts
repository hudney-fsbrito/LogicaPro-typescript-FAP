/* 
Faça um programa que exiba os números de 1 a 100, 
substituindo os múltiplos de 3 pela palavra
"Fizz" e os múltiplos de 5 pela palavra "Buzz". 
Para os números que são múltiplos de ambos,
utilize a palavra "FizzBuzz".
*/

for (let i = 0; i <= 100; i++) {
  let element = i.toString()
  if (i % 3 == 0) element = 'FIzz'
  if (i % 5 == 0) element = 'Buzz'
  if (i % 3 == 0 && i % 5 == 0) element = 'FizzBuzz'
  console.log(element);
}