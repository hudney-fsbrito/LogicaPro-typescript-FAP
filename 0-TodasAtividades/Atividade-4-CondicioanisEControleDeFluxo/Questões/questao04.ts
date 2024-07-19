//Faça um programa que verifique se um número é par ou ímpar.

let numero: number = Number(prompt('PAR ou ÍMPAR - Digite um número: '))

/* enum numeroQualquer {
  par = 'PAR',
  impar = 'IMPAR'
} */

let parOuImpar: string = '';

if (isNaN(numero)) {
  alert('Número inválido')
}else{
  if (numero % 2 == 0) {
    parOuImpar = 'Par';
  } else {
    parOuImpar = 'Impar';
  }
}

switch (parOuImpar) {
  case 'Par':
      alert(`O número: ${numero} é um número PAR`)
      break;
  case 'Impar':
      alert(`O número: ${numero} é um número ÍMPAR`)
      break;
  default:
    break;
}
