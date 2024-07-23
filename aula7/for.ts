/* 
let contador = 0
for (let index = 0; index < 10; index++) {
  console.log(`Index: ${index}`);
  contador++
  console.log(`Contador: ${contador}`);
} */

//EXPRESSÕES FOR OPCIONAIS

/* var i = 0;
for (;i < 9; i++) { //Tem que ter o ponto e vígula no começo
  console.log(i);
  // more statements
} */

  for (var i = 0; ; i++) {
    console.log(i);
    if (i > 3) break; //certificar-se de quebrar o loop no corpo para não criar um loop infinito.
    // more statements
  }
  

