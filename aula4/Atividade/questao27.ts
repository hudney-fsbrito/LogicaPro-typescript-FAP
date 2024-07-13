//Questão 27
/*Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano
separadamente, convertendo-os em números inteiros.*/

let age = prompt(`Digite a data de nascimento em formato "dd/mm/aaaa": `)
let result: string[] = [age?.split('/')]
console.log(result[0]);
for (let i = 0; i < result[0].length; i++) {
  const element = result[0];
  console.log(parseInt(element[i]));
}

// result[0].map((item)=>{
//   console.log(parseInt(item));
// })