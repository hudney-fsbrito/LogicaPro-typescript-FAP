//Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.
const ano: number = Number(prompt('Digite seu ano de nascimento: '));

function calcIdade(ano: number) {
    if (!ano) {
      alert('Número inválido!!!')
    }else{
      let anoAtual: number = 2024;
      let idade = anoAtual - ano;
      console.log(`Idade do usuário: ${idade}`);
    
      return alert(`Idade do usuário: ${idade}`);
  
    }
  }

calcIdade(ano)