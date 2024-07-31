/* //Desenvolva um programa que exiba todos 
os múltiplos de 3 no intervalo de 1 a 50. */
let numeroDivTres: number = 0
for (let i = 1; i <= 50; i++) {
  numeroDivTres = i;
  if (numeroDivTres % 3 == 0) {
    console.log(`Números: ${numeroDivTres}`);
    
  }  
}
