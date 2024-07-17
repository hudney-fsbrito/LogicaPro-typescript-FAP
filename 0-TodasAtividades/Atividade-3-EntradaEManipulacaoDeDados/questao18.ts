//Peça ao usuário que insira dois números e exiba o maior deles.

let numeros: number[] = [];
numeros.push(Number(prompt("Digite o primeiro Número")));
numeros.push(Number(prompt("Digite o Segundo Número")));

if (numeros[0] > numeros[1]) {
  alert("O número " + numeros[0] + "é maior");
} else if (numeros[0] == numeros[1]) {
  alert("O número é igual");
} else {
  alert("O número " + numeros[1] + "é maior");
}
