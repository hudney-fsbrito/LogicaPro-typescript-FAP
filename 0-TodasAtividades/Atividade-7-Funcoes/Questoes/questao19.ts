/* Escreva uma função que aceite uma string como parâmetro e encontre a palavra mais longa dentro
da string. String de exemplo: 'Tutorial de desenvolvimento da web'. Resultado esperado:
'Desenvolvimento'. */



export function verificaTamanho(palavra:string) {
    let palavraDistrichada = palavra.split(' ')
    let palavraLonga: string= '';
    palavraDistrichada.forEach(palavra => {
        if (palavra.length > palavraLonga.length) {
            palavraLonga = palavra
        }
    });
    return palavraLonga
}
