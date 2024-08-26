class Carro {

    marca:string;
    modelo:string;
    ano:number;

    constructor(marca:string,modelo:string,ano:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const carro1 =  new Carro('Fiat', 'Uno', 2020);
const carro2 =  new Carro('Volkswagen', 'Gol', 2023);
const carro3 =  new Carro('Ford', 'Ka', 2014);

console.log(carro1);
