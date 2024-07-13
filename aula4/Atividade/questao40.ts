//Questão 40
/*Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor
para dólares e exiba o resultado.*/

let valorReais = parseFloat(prompt(`Digite o valor á ser convertido`)!)
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

converteParaDolar(valorReais,cotacaoDolar)