import { gerarTabuada } from "./Questoes/questao15";
import { advinheNumero } from "./Questoes/questao16";
import { cadastraFuncionario, verificarPropriedade } from "./Questoes/questao17";
import { addProduto, calcularPrecoProduto } from "./Questoes/questao18";
import { verificaTamanho } from "./Questoes/questao19";
import { imprimeString } from "./Questoes/questao20";
import { limitaTamanho } from "./Questoes/questao21";
import { addLivro, exibeLivro } from "./Questoes/questao22";
import { addPessoa, exibePessoaMaisVelha } from "./Questoes/questao23";
import { addCarros, exibeCarrosMaisAntigos } from "./Questoes/questao24";
import { inverteString } from "./Questoes/questao25";

export function solicitaNumeros(qdtNum: number, item: string) {
  let qtdVezes = qdtNum;
  let arrNum: number[] = [];

  for (let i = 0; i < qtdVezes; ) {
    let num = parseFloat(prompt(`Digite ${i + 1}º ${item}`)!);
    if (!isNaN(num)) {
      arrNum.push(num);
      i++;
    } else {
      alert("Digite um número válido");
    }
  }

  return arrNum;
}

export function solicitaNumerosInteiro(qdtNum: number, item: string) {
  let qtdVezes = qdtNum;
  let arrNum: number[] = [];

  for (let i = 0; i < qtdVezes; ) {
    let num = parseInt(prompt(`Digite ${i + 1}º ${item}`)!);
    if (!isNaN(num)) {
      arrNum.push(num);
      i++;
    } else {
      alert("Digite um número válido");
    }
  }

  return arrNum;
}

//// Questão 5 ////
/*No arquivo questao05.ts*/ //Copiar e rodar aqui

//// Questão 6 ////
/*No arquivo questao06.ts*/ //Copiar e rodar aqui

//// Questão 7 ////
/* No arquivo questao07.ts */ //Copiar e rodar aqui

//// Questão 8 ////
/* No arquivo questao08.ts */ //Copiar e rodar aqui

//// Questão 9 ////
/* No arquivo questao09.ts */ //Copiar e rodar aqui

//// Questão 10 ////
/* No arquivo questao10.ts */ //Copiar e rodar aqui

//// Questão 11 ////
/* No arquivo questao11.ts */ //Copiar e rodar aqui

//// Questão 12 ////
/* No arquivo questao12.ts */ //Copiar e rodar aqui

//// Questão 13 ////
/* No arquivo questao13.ts */ //Copiar e rodar aqui

//// Questão 14 ////
/* No arquivo questao14.ts */ //Copiar e rodar aqui

//// Questão 15 ////
// gerarTabuada(solicitaNumerosInteiro(1,'número')[0])

//// Questão 16 ////
// advinheNumero()

//// Questão 17 ////
/* const funcionario = cadastraFuncionario()
verificarPropriedade(funcionario,'Hudney') */

//// Questão 18 ////
/* let preco = calcularPrecoProduto(addProduto())
alert(`O valor do preço é: ${preco}`) */

//// Questão 19 ////
/* let stringLonga: string = 'Tutorial de desenvolvimento da web';
let palavraLonga = verificaTamanho(stringLonga)
console.log(palavraLonga);
alert(palavraLonga); */

//// Questão 20 ////
/* let listaString: string[] = ["Hello", "World", "in", "a", "frame"]
imprimeString(listaString) */

//// Questão 21 ////
/* let listaString: string[] = ["Hello!", "World", "in", "a", "frame"]
console.log( limitaTamanho(listaString) ); */

//// Questão 22 ////

/* let arrLivro = addLivro();
const livroDeMachado = exibeLivro(arrLivro, "Machado de Assis")
console.log(livroDeMachado); */

//// Questão 23 ////
/* let arrPessoas = addPessoa();
let pessoaMaisVelha = exibePessoaMaisVelha(arrPessoas)
alert(`A pessoa mais velha cadastrada é: ${pessoaMaisVelha}`) */

//// Questão 24 ////
/* let arrCarros = addCarros();
console.log(arrCarros);

const carrosAntigos = exibeCarrosMaisAntigos(arrCarros, 2010)
console.log(carrosAntigos); */

//// Questão 25 ////
let palavra: string = 'hello';
alert(inverteString(palavra))


