/* 
O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.
*/

//Objeto
var obj = { a: 1, b: 2, c: 3 };

//Para prop (propriedade) in obj (objeto) faça
for (var propriedade in obj) {
  // ctrl+shift+k (para abrir o console no mozilla firefox)
  console.log(`obj. ${propriedade} = ${obj[propriedade]}`);
}

//A saída (output) deverá ser:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
