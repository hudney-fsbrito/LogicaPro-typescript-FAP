//Questão 36
//Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).

let raio = Number(prompt('Digite o raio desejado'))

let PI = Number(Math.PI.toFixed(2))

function calculaCircunferencia(raio:number, pi:number) {
  let resultado: number = 2 * pi * raio;
  if (!raio) {
     alert('Digite um número válido')
  }else{

    alert(resultado)
  }

};

calculaCircunferencia(raio,PI)