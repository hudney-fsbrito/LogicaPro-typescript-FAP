//Questão 43
/*Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando
a fórmula: Fahrenheit = (Celsius * 9/5) + 32.*/

let grauCelsius: number = parseFloat(prompt('Quantos gruas está fazendo em Celsius???')!);

function converteFahrenheit(num:number) {
  let fahrenheit:number;
  fahrenheit = (num * 9/5) + 32
  return fahrenheit
}

alert(`A temperatura em Fahrenheit de ${grauCelsius}°C é ${converteFahrenheit(grauCelsius)}°F.`)