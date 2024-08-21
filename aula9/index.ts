class Pessoa {
    nome: string ;
    idade: number;
    sexo: string ;
    cor?: string;

    constructor(nome:string, idade:number, sexo:string,cor?:string,){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cor = cor;
    };

}

const pessoa1 = new Pessoa('Hudney', 37,'M');
const pessoa2 = new Pessoa('Pedro', 23, 'M');
const pessoa3 = new Pessoa('Maria', 32, 'F');
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);


