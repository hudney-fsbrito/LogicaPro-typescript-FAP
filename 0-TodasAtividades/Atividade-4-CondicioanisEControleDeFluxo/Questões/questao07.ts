//Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.


let vogalDigitada: string = String(prompt('Digite um caractere')?.toUpperCase())

const vogais: string[] = ['A', 'E', 'I', 'O', 'U']
const consoantes: string[] = ['B', 'C', 'D', 'F', 'G', 'H' ,'J','K', 'L', 'M', 'N', 'P', 'Q', 'V', 'W', 'X', 'Y', 'Z']

if (vogais.includes(vogalDigitada)) {
  alert(`O caracetere digitada é uma VOGAL`);
} else if(consoantes.includes(vogalDigitada)) {
  alert(`O caracetere digitada é uma CONSOANTE`);
} else{
  alert('O caractere não é letra!')
}