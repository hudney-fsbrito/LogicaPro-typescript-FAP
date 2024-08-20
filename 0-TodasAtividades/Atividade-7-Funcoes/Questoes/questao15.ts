/* Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a
tabuada desse número de 1 a 10 no console. */

export function gerarTabuada(numero:number) {
    let i:number=0;
    for (let i = 0; i < 10; i++) {
      console.log(`${numero} X ${i + 1} = ${numero * (i + 1)}`);
    }
  }