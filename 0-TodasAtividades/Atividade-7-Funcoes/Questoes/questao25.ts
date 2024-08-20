/* Crie uma função chamada "inverterString" que recebe uma string como argumento e retorna a
string invertida. Por exemplo, para a entrada "hello", a função deve retornar "olleh". */

// let palavra: string = 'hello';

export function inverteString(palavra:string) {
    let palavraInvertida = palavra.split('').reverse().join('') //join('/') coloca um caracter entre os caracteres
    return palavraInvertida
}