/* Crie uma função que recebe um array de objetos representando pessoas (com nome, idade, etc.) e
retorne o nome da pessoa mais velha. */

type Pessoa = {
    nome: string,
    sobrenome?: string,
    idade: number,
}



export function addPessoa(){
    let pessoas: Pessoa[] = []
    let sair: string = ''
    do {
        let nome = String(prompt(`Digie o nome`))
        let sobrenome = String(prompt(`Qual o sobrenome?`))
        let idade = parseInt(prompt(`Digie idade de ${nome}`)!)
        sair = String(prompt(`Se deseja sair digite [S] se não digite [N]`))
        const pessoa: Pessoa = {
            nome: nome,
            sobrenome: sobrenome,
            idade: idade
        }
        pessoas.push(pessoa)
    } while (sair !== 'S');
    return pessoas
}


export function exibePessoaMaisVelha(pessoas: Pessoa[]) {
    let pessoaMaisVelha = pessoas[0];
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade > pessoaMaisVelha.idade) {
            pessoaMaisVelha = pessoas[i]            
        }
    }
    return pessoaMaisVelha.nome
}