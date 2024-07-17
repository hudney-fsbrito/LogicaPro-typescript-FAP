const num1: number = 20;
const num2: number = 8;
const num3: number = 3;

//Questão 1
console.log("Questão 1:");

if (num1 == num2) {
  console.log((num1 == num2) + " São iguais");
} else {
  console.log((num1 == num2) + " NÃO são iguais");
}

//Quetão 2
console.log(" ");
console.log("Questão 2:");

if (num1 != num2) {
  console.log((num1 != num2) + " São diferentes");
} else {
  console.log((num1 != num2) + " NÃO são diferentes");
}

//Questão 3
console.log(" ");
console.log("Questão 3:");
if (num1 > num2) {
  console.log((num1 > num2) + " 20 é maior que 8");
} else {
  console.log((num1 > num2) + " O 20 NÃO É maior que 8");
}

//Questão 4
console.log(" ");
console.log("Questão 4:");
if (num2 < num1) {
  console.log((num2 < num1) + " O 20 é menor que 8");
} else {
  console.log((num2 < num1) + " O 20 NÃO É menor 8");
}

//Questão 5
console.log(" ");
console.log("Questão 5:");
if (num2 >= num1) {
  console.log((num2 >= num1) + ` O ${num2} é maior ou igual que ${num1}`);
} else {
  console.log((num2 >= num1) + ` O ${num2} NÃO É maior ou igual a ${num1}`);
}

//Questão 6
console.log(" ");
console.log("Questão 6:");
if (num1 <= num1) {
  console.log((num1 <= num1) + ` O ${num1} é menor ou igual que ${num1}`);
} else {
  console.log((num1 <= num1) + ` O ${num1} NÃO É menor ou igual a ${num1}`);
}

//Questão 7
console.log(" ");
console.log("Questão 7:");
if ((30 && 25) > 20) {
  console.log("Condição verdadeira");
} else {
  console.log("Condição falsa");
}

//Questão 8
console.log(" ");
console.log("Questão 8:");
if (20 < 10 || 3 < 8) {
  console.log("Condição verdadeira");
} else {
  console.log(` Condição falsa`);
}

//Questão 9
console.log(" ");
const isRed: boolean = true;
console.log("Questão 9:");
console.log("A negação de isRed é " + !isRed);

//Questão 10
console.log(" ");
console.log("Questão 10:");
if (20 >= 10 && 20 <= 25) {
  console.log(20 >= 10 && 20 <= 30);
  console.log("Condição verdadeira");
} else {
  console.log(20 >= 10 && 20 <= 30);
  console.log(` Condição falsa`);
}

//Questão 11
console.log(" ");
console.log("Questão 11:");
if (20 < 5 || 20 > 15) {
  console.log(20 < 5 || 20 > 15);
  console.log("Condição verdadeira");
} else {
  console.log(20 < 5 || 20 > 15);
  console.log(` Condição falsa`);
}

//Questão 12
console.log(" ");
console.log("Questão 12:");
const numeroPos: number = 2;
if (numeroPos == 0 || numeroPos > -1) {
  console.log(numeroPos == 0 || numeroPos > -1);
  console.log("Condição verdadeira");
} else {
  console.log(numeroPos == 0 || numeroPos > -1);
  console.log(` Condição falsa`);
}

//Questão 13
console.log(" ");
console.log("Questão 13:");
const texto: string = "";
if (texto == "" && texto.length == 0) {
  console.log(texto == "" && texto.length == 0);
  console.log("Condição verdadeira");
} else {
  console.log(texto == "" && texto.length == 0);
  console.log(` Condição falsa`);
}


//Questão 14
console.log(" ");
console.log("Questão 14:");
const booleano: boolean = false;
if (typeof booleano && typeof booleano == "boolean") {
  console.log(typeof booleano && typeof booleano == "boolean");
  console.log("Condição verdadeira");
} else {
  console.log(typeof booleano && typeof booleano == "boolean");
  console.log(` Condição falsa`);
}

