//Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.
const ano: number = Number(prompt('Digite seu ano de nascimento: '));

function calcIdade(ano:number){
    let anoAtual: number = 2024
    let idade = anoAtual - ano;
    return console.log(`Idade do usuário: ${idade}`);
    
}

calcIdade(ano)