/* Escreva uma função que pegue uma lista de strings e as imprima, uma por linha, em um quadro
retangular. Por exemplo, a lista ["Hello", "World", "in", "a", "frame"] é impressa como:
*********
* Hello *
* World *
* in *
* a *
* frame *
********* */

// let listaString: string[] = ["Hello", "World", "in", "a", "frame"]

export function imprimeString(listaString: string[]) {
    console.log("*********");
    listaString.forEach((palavra, i) => {
        console.log(`* ${palavra} *`);
    });
    console.log("*********");
}