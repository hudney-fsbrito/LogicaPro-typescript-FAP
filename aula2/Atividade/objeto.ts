//Questão 1
type Pessoa = {
  nome: string;
  idade: number;
};

const pessoa: Pessoa = {
  nome: "Hudney",
  idade: 37,
};
console.log(`Questão 1: `);
console.log(pessoa);

//Questão 2
console.log(`Questão 2: ${pessoa.nome}`);

//Questão 3
// pessoa.profissao = "Item"
// pessoa[profissao] = "Desenvolvedor"
(pessoa as any).profissao = "Desenvolvedor";  //Alternativa para questão
console.log(`Questão 3: `);
console.log(pessoa);

//Questão 4

pessoa.idade = 35;
console.log(`Questão 4: ${pessoa.idade}`);

//Questão 5
let animal: { nome: string; especie: string; cor: string } = {
  nome: "gato",
  especie: "felino",
  cor: "preto",
};
console.log(`Questão 5: `);
console.log(animal);

//Questão 6
type Livro = {
    titulo?: string;
    autor: string;
    ano: number;
};
const livro1: Livro = {
    titulo: "Javascript",
    autor: "Jubileu, FERREIRA",
    ano: 1999,
};
console.log(`Questão 6: `);
console.log(livro1);

//Questão 7
console.log(`Questão7: ${livro1.autor}`);

//Questão 8
livro1.ano = 2002;

//Questão 9
delete livro1.titulo;
console.log("Questão 9:");
console.log(livro1);

//Questão 10
type Carro = {
  marca: string;
  modelo?: string; //atribuindo uma propriedade como opcional para poder alterar a sua tipagem na questão 11
  ano: number;
};

let carro: Carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2024,
};
console.log("Questão 10:");

console.log(carro);

//Questão 11
console.log("Questão 11:");
carro.modelo = undefined;
console.log(carro.modelo);
