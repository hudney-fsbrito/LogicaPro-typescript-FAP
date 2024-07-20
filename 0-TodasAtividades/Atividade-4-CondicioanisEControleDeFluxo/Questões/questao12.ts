/* Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo,
exibindo uma mensagem apropriada. */

let numero: number = parseInt(prompt('Digite um número divisível por 3 e 5:')!)

if (!isNaN(numero)) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    alert('Esse número é divisível por 3 e por 5')
  } else {
    alert('Digite outro número, esse não é divisível!')
  }
} else{
  alert('ERRO!!! Digite um número válido')
}
