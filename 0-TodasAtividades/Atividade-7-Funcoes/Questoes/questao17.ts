/* Crie uma função chamada "verificarPropriedade" que receba um objeto e uma string como
parâmetros, e retorne true se o objeto possuir a propriedade com o nome especificado na string, e
false caso contrário. */

type Funcionario = {
    nome:string
}

export function cadastraFuncionario() {
    
const funcionario: Funcionario = {
    nome : 'Hudney'
}

return funcionario
}

export function verificarPropriedade(funcionario: Funcionario, nome:string) {
    if (funcionario.nome == nome) {
        alert(`${true} O nome corresponde!`)
    } else{
        alert(`${false} O nome NÃO corresponde!`)
    }
}