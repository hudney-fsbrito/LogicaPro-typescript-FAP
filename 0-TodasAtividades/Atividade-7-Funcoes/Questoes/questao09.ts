/* 
Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o
percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.
*/

alert('Digite o preço do produto');
let arrPreco= solicitaNumeros(1, 'preço');
const preco = arrPreco[0]

function calcularDesconto(preco:number) {
  const desc5 = preco * 0.05;
  return preco - desc5
}

alert(`${calcularDesconto(preco)}`)