//Começando da quinta questão
//// QUESTÃO 5
//Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
// let nome = prompt("Digite seu nome: ");
// alert('Olá '+ nome +' Seja bem-vindo!');
//// QUESTÃO 6
//Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número inteiro.
// let idade = prompt('Qual a sua idade? ');
// console.log(idade);
// // let idadeConvertida = Number(idade);
// let idadeConvertida = parseInt(idade!);
// if (!idadeConvertida) {
//   console.log(idadeConvertida);
//   alert('Digite um número válido!!!')
// } else{
//   console.log(idadeConvertida);
//   alert(`Idade digitada: ${idadeConvertida}`)
// }
//// QUESTÃO 7
//Receba um número inteiro do usuário e converta-o em um número decimal (float).
// let numero = parseInt(prompt('Digite um número: ')!)
// if (!numero) {
//   alert('Número inválido!!!')
// } else {
//   console.log(parseFloat(numero));
//   alert(parseFloat(numero))
// }
// QUESTÃO 8
/*Peça ao usuário para digitar dois números inteiros e exiba a soma deles.*/
// const num1: number = Number(prompt('Digite o primeiro número: '));
// const num2: number = Number(prompt('Digite o segundo número: '));
// function Soma(num1:number, num2:number) {
//   if (!num1 || !num2) {
//     alert('Número inválido!!!')
//   } else {
//     let resultado = num1 + num2
//     console.log('A soma dos números é: ' + resultado)
//     return alert('A soma dos números é: ' + resultado);
//   }
// }
// Soma(num1,num2)
//// QUESTÃO 9
//Receba um número decimal do usuário e calcule o seu quadrado.
// const numeroDecimal = parseFloat(prompt('Digite seu número decimal: '));
// function quadradoDoNumero(num1:number) {
//   if (!numeroDecimal) {
//     alert('Número inválido!!!')
//   } else {
//     let numero = num1**2
//     console.log(`O resultado é: ${numero}`);
//     return alert(`O resultado é: ${numero}`);
//   }
// }
// quadradoDoNumero(numeroDecimal)
////  QUESTÃO 10
//Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.
// const ano: number = Number(prompt("Digite seu ano de nascimento: "));
// function calcIdade(ano: number) {
//   if (!ano) {
//     alert('Número inválido!!!')
//   }else{
//     let anoAtual: number = 2024;
//     let idade = anoAtual - ano;
//     console.log(`Idade do usuário: ${idade}`);
//     return alert(`Idade do usuário: ${idade}`);
//   }
// }
// calcIdade(ano);
//// QUESTÃO 11
//Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida,
// concatene-os em uma única string e exiba o nome completo.
// let nome = prompt('Digite seu primeiro nome: ');
// let sobrenome = prompt('Digite seu sobrenome nome: ');
// console.log('Olá ' + nome +' '+ sobrenome );
// alert(`Olá ${nome} ${sobrenome}`);
//// Questão 12
//Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números foram digitados.
// let numeros = prompt('Digite números separados por espaços: ')
// console.log(numeros);
// console.log(numeros?.split(' ').length);
// //Primeira maneira
// let numerosDigitados1 = [numeros?.split(' ')]
// console.log(numerosDigitados1);
// console.log(numerosDigitados1[0].length);
// //Segunda maneira
// let numerosDigitados2: string[] = [numeros?.split(' ')]
// console.log(numerosDigitados2);
// alert(numerosDigitados2[0].length);
//// Questão 13
////Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual animal foi digitado.
// let animal: string = String(prompt('Digite o nome do animal.'));
// console.log(`O nome do animal é ${animal}`);
// alert(`O nome do animal é ${animal}`);
//// Questão 14
//Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo invertido (sobrenome, nome).
// let nome = prompt('Digite seu primeiro nome: ');
// let sobrenome = prompt('Digite seu sobrenome nome: ');
// console.log('Olá ' + sobrenome + ', ' + nome  + '!');
// alert(`Olá ${sobrenome}, ${nome}!`);
//// Questão 15
//Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).
// let texto: string = String(prompt("Digite um texto bacana"));
// if (texto === "" || texto == " ") {
//   alert("Texto Inválido ou nenhum!!! " + texto.length);
// } else {
//   alert(`O texto "${texto}" tem o tamnho de ${texto.length}`);
// }
//// Questão 16
//Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.
// let numeroParImpar : number = Number(prompt('Digite um número'))
// function parOuImpar(num:number) {
//   if (!num) {
//     alert('Número inválido!!!')
//   } else {
//     num % 2 == 0 ? alert(`O número ${num} é par`)
//      : alert(`O número ${num} é ÍMPAR`);
//   }
// }
// parOuImpar(numeroParImpar)
//// Questão 17
//aReceba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.
// const numero: number = Number(prompt('Digite um número: '));
// function verificaNumeroNegativo(num:number) {
//   if (!num) {
//     alert('Número inválido!!!')
//   }else{
//     num < 0 ? alert(`O número ${num} é um número negativo`) : alert(`O número ${num} NÃO é um número negativo`);
//   }
// }
// verificaNumeroNegativo(numero);
////Quetão 18
//Peça ao usuário que insira dois números e exiba o maior deles.
// let numeros : number[] = [];
// numeros.push(Number(prompt('Digite o primeiro Número')))
// numeros.push(Number(prompt('Digite o Segundo Número')))
//   if(numeros[0] > numeros[1]){
//    alert('O número ' + numeros[0]+ ' é maior');
//   }else if(numeros[0] == numeros[1]){
//     alert('O número é igual');
//   }else{
//     alert('O número ' + numeros[1]+ ' é maior');
//   }
//Questão 19
/* Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de
massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado. */
// let peso: number = Number(prompt("Qual o seu peso kg:?"));
// let altura: number = Number(prompt("Qual a sua altura em metros?"));
// function calculaIMC(peso: number, altura: number) {
//   if (!peso || !altura) {
//     return alert('Némero inválido!!!')
//   } else {
//     let resultado = peso / altura ** 2;
//     return alert(resultado.toFixed(2));
//   }
// }
// calculaIMC(peso, altura);
// Questão 20
/* Peça ao usuário que digite o seu nome e verifique
se ele contém mais de 5 caracteres. */
// let nome: string = String(prompt('Digite seu nome:'))
// function verificaNome(nomeQualquer:string) {
//   if (nomeQualquer === '' || nomeQualquer === ' ') {
//     alert('O nome é inválido!!!')
//   } else {
//     if (nomeQualquer.length > 5) {
//       return alert('O nome digitado contém mais de 5 caracteres');
//     }
//     return alert(`Contém ${nomeQualquer.length} caracteres`);
//   }
// }
// verificaNome(nome);
// Questão 21
/* Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo:
"Você é casado(a)", "Você é solteiro(a)", etc.). */
// let estadoCivil: string = String(prompt("Digite seu estado civil."));
// //PRIMEIRA OPÇÃO
// if (estadoCivil == 'Solteiro' || estadoCivil == 'solteiro') {
//       alert("Ok! Você é solteiro");
// }else if(estadoCivil == 'Casado' || estadoCivil == 'casado'){
//       alert("Certo! Você é casado");
// }else{
//   alert('Erro na digitação');
// }
// //SEGUNDA OPÇÃO
// switch (estadoCivil) {
//   case "Solteiro":
//     alert("Ok! Você é solteiro");
//     break;
//   case "Casado":
//     alert("Certo! Você é casado");
//     break;
//   default:
//     alert("Erro na digitação");
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
// alert(calculaAreaTriangulo(baseRetangulo, alturaRetangulo));
//Questão 23
/*Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de
sua escolha).*/
// let nameCity = prompt("Digiti o nome da sua cidade")?.toLowerCase();
// function checksCity(name: string) {
//   if (!name || name === undefined) {
//     alert("ERRO Digite algo!");
//   } else if (name[0] === "r") {
//     alert(name.toUpperCase());
//   } else {
//     alert("Tente novamente! " + name.toUpperCase());
//   }
// }
// checksCity(nameCity);
//Questão 24
//Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.
// let firstNumber = Number(prompt('Digite um valor com decimal: '))
// let secondNumber = Number(prompt('Digite outro valor com decimal: '))
// function calcFloat(num1: number, num2:number) {
//   let result = num1 % num2
//   return result
// }
// alert(calcFloat(firstNumber, secondNumber))
//Questão 25
/*Solicite ao usuário um número decimal e converta-o em um número inteiro.*/
// let numberFloat = Number(prompt('Digite um número decimal: '))
// function convertInt(num:number) {
//   alert(parseInt(num))
//   /*alert(Math.round(num))
//   alert(Math.floor(num))
//   alert(Math.ceil(num))*/
// }
// convertInt(numberFloat)
//Questão 26
/* Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o
novamente para uma string antes de exibi-lo. */
// let numero = Number(prompt('Digite um número para soma: '));
// numero = numero + 10;
// alert(numero.toString())
//Questão 27
/*Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano
separadamente, convertendo-os em números inteiros.*/
// let age = prompt(`Digite a data de nascimento em formato "dd/mm/aaaa": `)
// let result: string[] = [age?.split('/')]
// console.log(result[0]);
// for (let i = 0; i < result[0].length; i++) {
//   const element = result[0];
//   console.log(parseInt(element[i]));
// }
// result[0].map((item)=>{
//   console.log(parseInt(item));
// })
//Questão 28
/*Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma
mensagem completa, como "Você mora em [cidade], [estado].".*/
// let nameCity = prompt("Digite o nome de sua cidade: ")
// let nameState = prompt('Digite o nome do seu estado: ')
// let message
// alert(`Você mora na cidade de ${nameCity} do estado de ${nameState}? Ok!`)
//Questao 29
/*Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de
boas-vindas, como "Bem-vindo ao nosso programa, nascido em [ano de nascimento]!".*/
// let dataNascimento = prompt('Digite sua data de nascimento em formato dd/mm/aaaa: ')
// let nome1 = prompt('Digite seu nome: ')
// alert(`Olá ${nome1}, nascido em ${dataNascimento}. Seja bem vindo!`)
//Questão 30
/*Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única
string, separando-os com um espaço.*/
// let nomeStri = prompt('Digite seu nome: ')
// let numeroINt = Number(prompt('Digite o número do seu pé: '))
// let texto1 = `${nomeStri} ${numeroINt}`
// alert(texto1)
//Questão 31
/*Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto,
adicionando o símbolo de moeda da sua escolha.*/
// let nomeCliente = prompt('Digite seu nome: ')
// let valor = Number(prompt('Digite seu saldo: '))
// let valorBrasil = new Intl.NumberFormat('pt-Br', {style: 'currency', currency: 'BRL'}).format(valor);
// if (!valor) {
//   alert('valor não compatível, digite novamente!')
// }else{
//   alert(`Sr. ${nomeCliente} seu saldo é: ${valorBrasil}`)
// }
//Questão 32
/*Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro
desse número.*/
// const numero2 = Number(prompt("Digite um valor:"));
// let dobroNumero = numero2 * 2;
// if (!numero2) {
//   alert(`Não foi possível completar!`)
// } else {
//   alert(`O dobro de ${numero2} é ${dobroNumero}`)
// }
//Questão 33
/*Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de
agradecimento personalizada.*/
// let email = prompt("Digite seu e-mail")
// if (!email || email === "") {
//   alert('Digite um email válido')
// } else {
//   let message = `Obrigado! O e-mail "${email}" foi cadastrado com sucesso!`
//   alert(message)
// }
//Questão 34
/*Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente
(divisão inteira) entre eles.*/
// let numX = Number(prompt("Digite o primeiro número Inteiro"));
// let op = String(
//   prompt("Digite * multiplicação; / divisão; + adição; - subitração")
// );
// let numY = Number(prompt("Digite o segundo número Inteiro"));
// function calcInteiro(num1: number, num2: number, op: string) {
//   let resultado: number;
//   if (op === "+") {
//     resultado = num1 + num2;
//     alert(`O resultado da soma é: ${resultado}`);
//   } else if (op === "-") {
//     resultado = num1 - num2;
//     alert(`O resultado da subtração é: ${resultado}`);
//   } else if (op === "/") {
//     resultado = num1 / num2;
//     alert(`O resultado da divisão é: ${resultado}`);
//   } else if (op === "*") {
//     resultado = num1 * num2;
//     alert(`O resultado da multiplicação é: ${resultado}`);
//   }
// }
// calcInteiro(numX, numY, op);
//Questão 35
/*Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do
triângulo.*/
// let baseTriangulo = Number(prompt('Digite a base do triângulo'))
// let alturaTriangulo = Number(prompt('Digite a altura do triângulo'))
// function calcTriangulo(base:number, altura:number) {
//   let resultado = (base * altura) / 2;
//   alert(resultado)
// }
// calcTriangulo(baseTriangulo,alturaTriangulo)
//Questão 36
//Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).
// let raio = Number(prompt('Digite o raio desejado'))
// let PI = Number(Math.PI.toFixed(2))
// function calculaCircunferencia(raio:number, pi:number) {
//   let resultado: number = 2 * pi * raio;
//   if (!raio) {
//      alert('Digite um número válido')
//   }else{
//     alert(resultado)
//   }
// };
// calculaCircunferencia(raio,PI)
//Questão 37
/*Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o
perímetro do retângulo.*/ // 2*(b+h)
// let basRetangulo = Number(prompt("Digite a base"));
// let altRetangulo = Number(prompt("Digite a altura"));
// function calcPerimetroRetangulo(base: number, altura: number) {
//   if (!base || !altura) {
//     alert("Digite um número válido");
//   } else {
//     let resultado = 2 * (base + altura);
//     alert(`O perímetro do rentângulo é ${resultado}`);
//   }
// }
// calcPerimetroRetangulo(basRetangulo, altRetangulo);
//Questão 38
/*Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média
aritmética desses números.*/
// let numDec1: number = parseFloat(prompt('Primeiro número')!)
// let numDec2: number = parseFloat(prompt('Segundo número')!)
// let numDec3: number = parseFloat(prompt('Terceiro número')!)
// function calcMedia(num1:number, num2:number, num3:number) {
//   if (!num1 || !num2 || !num3) {
//     alert('Digite um número válido!!!')
//   } else {
//     let result0Media : number = (num1 + num2 + num3) / 3;
//     alert(`A média é: ${result0Media.toFixed(2)}`)
//   }
// }
// calcMedia(numDec1,numDec2,numDec3)
//Questão 39
/*Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já
viveu (considerando um ano com 365 dias).*/
/*
Uma maneira diferente
let dataDeNascimento = prompt('Data de nascimento: dd/mm/aaaa')
let dataString: Number[] = [dataDeNascimento.split('/')]
let dataNumero = dataString[0];*/
/*let idadeDeNascimento = parseInt(prompt("Digite sua idade")!);

const mesesDeVida = (idade: number) => {
  return idade * 12;
};

const diasDeVida = (idade: number) => {
  return idade * 365;
};

if (!idadeDeNascimento) {
  alert("Digite uma idade válida!");
} else {
  alert(
    `Parabéns! Você possui ${mesesDeVida(
      idadeDeNascimento
    )} meses de vida e ${diasDeVida(idadeDeNascimento)} dias de vida.`
  );
}*/
//Questão 40
/*Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor
para dólares e exiba o resultado.*/
/*let valorReais = parseFloat(prompt(`Digite o valor á ser convertido`)!)
let cotacaoDolar = parseFloat(prompt(`Cotação do dolar atual`)!)

function converteParaDolar(valor1:number, cota1:number) {
  if (!valor1 || !cota1) {
    alert('Digite um valor válido')
  }else{
    valor1 = valor1 * cota1;
    let valorDolar = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(valor1);
    alert(valorDolar)
  }
}

converteParaDolar(valorReais,cotacaoDolar)*/
//Questão 41
/*Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.*/
// let numDecimal = parseFloat(prompt('Digite um valor decimal')!)
// let numDecimalArredondado = Math.round(numDecimal);
// if (!numDecimal) {
//   alert('Digite um número válido')
// }else{
//   alert(`Arredondando o número ${numDecimal} para o inteiro mais próximo, fica ${numDecimalArredondado}`)
// }
//Questão 42
/*Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) *
n3.*/
// let numero1: number = parseInt(prompt(`Digite o valor 1`)!)
// let numero2: number = parseInt(prompt(`Digite o valor 2`)!)
// let numero3: number = parseInt(prompt(`Digite o valor 3`)!)
// const resultado = (n1:number,n2:number, n3:number)=>{
//   if (!numero1 || !numero2 || !numero3) {
//     alert(`Digite um número válido`)
//   }else{
//     let resultado = (n1 + n2) * n3;
//     alert(`Resultado: ${resultado}`)
//   };
// };
// resultado(numero1,numero2,numero3)
//Questão 43
/*Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando
a fórmula: Fahrenheit = (Celsius * 9/5) + 32.*/
// let grauCelsius: number = parseFloat(prompt('Quantos gruas está fazendo em Celsius???')!);
// function converteFahrenheit(num:number) {
//   let fahrenheit:number;
//   fahrenheit = (num * 9/5) + 32
//   return fahrenheit
// }
// alert(`A temperatura em Fahrenheit de ${grauCelsius}°C é ${converteFahrenheit(grauCelsius)}°F.`)
location.reload();
