//Questão 31
/*Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto,
adicionando o símbolo de moeda da sua escolha.*/

let nomeCliente = prompt('Digite seu nome: ')
let valor = Number(prompt('Digite seu saldo: '))
let valorBrasil = new Intl.NumberFormat('pt-Br', {style: 'currency', currency: 'BRL'}).format(valor);

if (!valor) {
  alert('valor não compatível, digite novamente!')
}else{
  alert(`Sr. ${nomeCliente} seu saldo é: ${valorBrasil}`)
}