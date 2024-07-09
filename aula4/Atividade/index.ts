//Começando da quinta questão

//// QUESTÃO 5
//Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
// let nome = prompt("Digite seu nome: ");

// alert('Olá '+ nome +' Seja bem-vindo!');
//Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número inteiro.
//// QUESTÃO 6

// let idade = prompt('Qual a sua idade? ');
// console.log(idade);
// let idadeConvertida = Number(idade);
// console.log(idadeConvertida);

//// QUESTÃO 7
//Receba um número inteiro do usuário e converta-o em um número decimal (float).
// let numero = prompt('Digite um número: ');
// console.log(numero);
// console.log(parseFloat(numero));

//// QUESTÃO 8
//Peça ao usuário para digitar dois números inteiros e exiba a soma deles.
// const num1: number = Number(prompt('Digite o primeiro número: '));
// const num2: number = Number(prompt('Digite o segundo número: '));

// function Soma(num1:number, num2:number) {
//     let resultado = num1 + num2
//     return console.log('A soma dos números é: ' + resultado);

// }

// Soma(num1,num2)

//// QUESTÃO 9
//Receba um número decimal do usuário e calcule o seu quadrado.
// const numeroDecimal = parseFloat(prompt('Digite seu número: '));
// function quadradoDoNumero(num1:number) {
//     let numero = num1**2
//     return console.log(`O resultado é: ${numero}`);

// }

// quadradoDoNumero(numeroDecimal)

////  QUESTÃO 10

//Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.
// const ano: number = Number(prompt('Digite seu ano de nascimento: '));

// function calcIdade(ano:number){
//     let anoAtual: number = 2024
//     let idade = anoAtual - ano;
//     return console.log(`Idade do usuário: ${idade}`);

// }

// calcIdade(ano)

//// QUESTÃO 11
//Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida,
//concatene-os em uma única string e exiba o nome completo.

// let nome = prompt('Digite seu primeiro nome: ');
// let sobrenome = prompt('Digite seu sobrenome nome: ');

// console.log('Olá ' + nome +' '+ sobrenome );
// console.log(`Olá ${nome} ${sobrenome}`);

//// Questão 12
//Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números foram digitados.
// let numeros = prompt('Digite números separados por espaços: ')
// console.log(numeros);
// console.log(numeros?.split(' ').length);

// let numerosDigitados1 = [numeros?.split(' ')]
// console.log(numerosDigitados1);

// console.log(numerosDigitados1[0].length);

// let numerosDigitados2: string[] = [numeros?.split(' ')]
// console.log(numerosDigitados2);

// console.log(numerosDigitados2[0].length);

//// Questão 13
////Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual animal foi digitado.
// let animal: string = String(prompt('Digite o nome do animal.'));
// console.log(`O nome do animal é ${animal}`);

//// Questão 14
//Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo invertido (sobrenome, nome).
// let nome = prompt('Digite seu primeiro nome: ');
// let sobrenome = prompt('Digite seu sobrenome nome: ');
// console.log('Olá ' + sobrenome + ', ' + nome  + '!');
// console.log(`Olá ${sobrenome}, ${nome}!`);

//// Questão 15
//Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).
// let texto: string = String(prompt('Digite um texto bacana'));
// console.log(texto);
// console.log(texto.length);

//// Questão 16
//Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.
// let numeroParImpar : number = Number(prompt('Digite um número'))

// function parOuImpar(num:number) {
//   num % 2 == 0 ? console.log(`O número ${num} é par`)
//    : console.log(`O número ${num} é ÍMPAR`);
// }

// parOuImpar(numeroParImpar)

//// Questão 17
//aReceba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.
// const numero: number = Number(prompt('Digite um número: '));

// function verificaNumeroNegativo(num:number) {
//   if (num < 0) {
//     return console.log(`O número ${num} é um número negativo`);
//   }
//   return console.log(`O número ${num} NÃO é um número negativo`);

// }

// verificaNumeroNegativo(numero);

////Quetão 18
//Peça ao usuário que insira dois números e exiba o maior deles.

// let numeros : number[] = [];
// numeros.push(Number(prompt('Digite o primeiro Número')))
// numeros.push(Number(prompt('Digite o Segundo Número')))

//   if(numeros[0] > numeros[1]){
//     console.log(numeros[0]);
//   }else if(numeros[0] == numeros[1]){
//     console.log('O número é igual');

//   }else{
//     console.log(numeros[1]);

//   }

//Questão 19
/* Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de
massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado. */

// let peso: number = Number(prompt('Qual o seu peso kg:?'));
// let altura: number = Number(prompt('Qual a sua altura em metros?'));

// function calculaIMC(peso:number,altura:number) {
//   let resultado = peso / (altura**2)
//   return resultado
// }

// console.log(calculaIMC(peso,altura).toFixed(2));

// Questão 20
/* Peça ao usuário que digite o seu nome e verifique 
se ele contém mais de 5 caracteres. */

// let nome: string = String(prompt('Digite seu nome:'))

// function verificaNome(nomeQualquer:string) {
//   if (nomeQualquer.length > 5) {
//     return console.log('O nome digitado contém mais de 5 caracteres');
//   }
//   return console.log(`Contém ${nomeQualquer.length} caracteres`);

// }

// console.log(verificaNome(nome));

// Questão 21
/* Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo:
"Você é casado(a)", "Você é solteiro(a)", etc.). */

// let estadoCivil: string = String(prompt("Digite seu estado civil."));

// if (estadoCivil == 'Solteiro' || estadoCivil == 'solteiro') {
//       console.log("Ok! Você é solteiro");
// }else if(estadoCivil == 'Casado' || estadoCivil == 'casado'){
//       console.log("Certo! Você é casado");

// }else{
//   console.log('Erro na digitação');

// }

// switch (estadoCivil) {
//   case "Solteiro":
//     console.log("Ok! Você é solteiro");

//     break;
//   case "Casado":
//     console.log("Certo! Você é casado");

//     break;

//   default:
//     console.log("Erro na digitação");

//     break;
// }

//Questão 22
/*Receba a base e a altura de um retângulo 
digitados pelo usuário. Em seguida, calcule a sua área e
exiba o resultado.*/

// let baseRetangulo: number = Number(prompt("Digite a base do triângulo"));
// let alturaRetangulo: number = Number(prompt("Digite a base do triângulo"));

// function calculaAreaTriangulo(base: number, altura: number) {
//   return base * altura;
// }

// console.log(calculaAreaTriangulo(baseRetangulo, alturaRetangulo));
