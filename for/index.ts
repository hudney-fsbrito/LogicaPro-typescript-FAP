/* for (let i = 0; i < 10; i++) {
  if (i == 5) break;
  console.log(`Testando uma frase BREAK: ${i}`);
}
for (let i = 0; i < 10; i++) {
  if (i == 5) continue; //Pula a iteração selecionada
  console.log(`Testando uma frase CONTINUE: ${i}`);
} */


 const frutas: string[] = ['Banana', 'Pêra', 'Uva', 'Maçã', 'Cajá'];
/*
for (let i = 0; i < frutas.length; i++) {
  const element = frutas[i];
  if (i%2 == 0) {
    
    console.log(element);
  }
  
} */

for (const fruta of frutas) {
  
  console.log(fruta + ` forOf`);
  
}

for (const key in frutas) {
  if (Object.prototype.hasOwnProperty.call(frutas, key)) {
    const element = frutas[key];
    console.log(element);
    console.log(key);
  }
  
}