//Questão 39
/*Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já
viveu (considerando um ano com 365 dias).*/

/*
Uma maneira diferente
let dataDeNascimento = prompt('Data de nascimento: dd/mm/aaaa')
let dataString: Number[] = [dataDeNascimento.split('/')]
let dataNumero = dataString[0];*/

let idadeDeNascimento = parseInt(prompt("Digite sua idade")!);

const mesesDeVida = (idade: number) => {
  return idade * 12;
};

const diasDeVida = (idade: number) => {
  return idade * 365;
};

if (!idadeDeNascimento) {
  alert("Digite uma idade válida!");
} else {
  alert(
    `Parabéns! Você possui ${mesesDeVida(
      idadeDeNascimento
    )} meses de vida e ${diasDeVida(idadeDeNascimento)} dias de vida.`
  );
}
