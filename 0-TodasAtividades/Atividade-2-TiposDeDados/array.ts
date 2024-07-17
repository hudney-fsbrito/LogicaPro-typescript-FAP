//Questão 1
console.log("Questão 1: ");
let numeros:number []=[];
console.log(numeros);

//Questão 2
console.log("Questão 2: ");
numeros.push(1, 2, 3, 4 )
console.log(numeros);

//Questão 3
console.log("Questão 3: ");
console.log(numeros[1]);

//Questão 4
console.log("Questão 4: ");
numeros[2] = 10;
console.log(numeros);

//Questão 5
console.log("Questão 5: ");
numeros.pop()
console.log(numeros);

//Questão 6
console.log("Questão 6: ");
console.log(numeros.length);

//Questão 7
console.log("Questão 7: ");
let frutas: string[] = ['maçã', 'laranja', 'banana'];
console.log(frutas);


//Questão 8
console.log("Questão 8: ");
console.log(frutas[0]);

//Questão 9
console.log("Questão 9: ");
frutas.push('uva');
console.log(frutas);

//Questão 10
console.log("Questão 10: ");
type Aluno = {
  nome:string,
  idade: number
};
const aluno: Aluno = {
  nome:'Pedro Paulo',
  idade: 23
};
console.log(aluno);


let alunos: any[] = []; // Tipado como any para receber elementos de tipos diferentes
alunos.push(aluno);
// alunos.push(23)
console.log(alunos);

//Questão 11
console.log("Questão 11: ");
console.log(alunos[0].nome);

//Questão 12
console.log("Questão 12: ");
alunos.push(aluno);
alunos.push(aluno);
console.log(alunos);

//Questão 13
console.log("Questão 13: ");
let produtos: string[] = [];
produtos.push(
  'maçã', 'óleo', 
  'biscoito', 'leite', 
  'açucar', 'carne', 
  'farinha', 'batata', 
  'pão', 'refrigerante'
);

for (let i = 0; i < produtos.length; i++) {

  const element = produtos[i];
  if (i % 2 == 0) {
    console.log(i, element);
  }
  
}








