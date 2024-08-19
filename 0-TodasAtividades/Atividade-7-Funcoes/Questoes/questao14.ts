/* Crie uma função chamada "calcularIdade" que receba o ano de "nascimento" de uma pessoa como
parâmetro e retorne a idade atual. */

alert('Digite o ano de nascimento')
let anoArr = solicitaNumerosInteiro(1, 'ano')
let ano: number = anoArr[0];
function calcularIdade(anoNasc:number) {
  const anoAtual = new Date().getFullYear()
  return anoAtual - anoNasc
}

alert(`A idade é ${calcularIdade(ano)}`)