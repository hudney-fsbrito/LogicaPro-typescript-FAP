class Celular {
  marca: string;
  modelo: string;
  cor: string;
  ano: number;

  constructor(marca: string, modelo: string, cor: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.ano = ano;
  }
}

const celular1 = new Celular('Samsung', 'Galaxy S23', 'Cinza', 2023)
const celular2 = new Celular('Apple', 'Iphone 15', 'Preto', 2024)
const celular3 = new Celular('Motorola', 'Edge 50', 'Branco', 2024)
