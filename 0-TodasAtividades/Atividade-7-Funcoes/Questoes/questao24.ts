/* Escreva uma função que recebe um array de objetos com informações sobre carros (com marca,
marca, ano, etc.) e retorne um novo array apenas com os carros fabricados após um certo ano */

type Carro = {
    marca: string,
    modelo?: string,
    ano: number,
}



export function addCarros(){
    let carros: Carro[] = []
    let sair: string = ''
    do {
        let marca = String(prompt(`Digie a marca`))
        let modelo = String(prompt(`Qual o modelo?`))
        let ano = parseInt(prompt(`Digie o ano do carro ${marca}`)!)
        sair = String(prompt(`Se deseja sair digite [S] se não digite [N]`))
        const pessoa: Carro = {
            marca: marca,
            modelo: modelo,
            ano: ano
        }
        carros.push(pessoa)
    } while (sair !== 'S');
    return carros
}


export function exibeCarrosMaisAntigos(carros: Carro[], ano: number) {
    /* let carrosAntigo = carros;
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].ano === ano) {
            carrosAntigo.push(carros[i])             
        }
    }
    return carrosAntigo */
    return carros.filter(carro => carro.ano === ano);
}