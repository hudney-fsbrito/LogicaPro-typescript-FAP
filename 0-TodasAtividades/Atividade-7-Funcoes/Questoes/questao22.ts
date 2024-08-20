/* Crie uma função que recebe um array de objetos com informações sobre livros (título, autor, ano,
etc.) e retorne um novo array apenas com os livros escritos por determinado autor. */

/* { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
    { titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890 },
    { titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", ano: 1881 },
    { titulo: "Iracema", autor: "José de Alencar", ano: 1865 } */

type Livro = {
    titulo: string,
    autor: string,
    ano: number,
}



export function addLivro(){
    let livros: Livro[] = []
    let sair: string = ''
    do {
        let titulo = String(prompt(`Digie o título do livro`))
        let autor = String(prompt(`Qual o autor do livro`))
        let ano = parseInt(prompt(`Digie ano do livro com 4 dígitos`)!)
        sair = String(prompt(`Se deseja sair digite [S] se não digite [N]`))
        const livro: Livro = {
            titulo: titulo,
            autor: autor,
            ano: ano
        }
        livros.push(livro)
    } while (sair !== 'S');
    return livros
}


export function exibeLivro(livros: Livro[], autor: string) {

    return livros.filter(livro => livro.autor === autor);
    
}