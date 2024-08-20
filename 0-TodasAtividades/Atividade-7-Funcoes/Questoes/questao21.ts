/* Crie uma função que receba um array de strings e retorne um novo array contendo apenas as
strings que têm mais de 5 caracteres. */

export function limitaTamanho(frase:string[]) {
    let novoArr: string[] = [];
    frase.forEach(palavra => {
        if (palavra.length > 5) {
            novoArr.push(palavra)
        }
    });
    return novoArr
}