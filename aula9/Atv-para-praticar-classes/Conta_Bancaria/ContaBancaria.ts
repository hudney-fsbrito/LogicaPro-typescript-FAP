class ContaBancaria {
  conta: number;
  titular: string;
  saldo: number;

  constructor(conta: number, titular: string, saldo: number) {
    this.conta = conta;
    this.titular = titular;
    this.saldo = saldo;
  }
}

const conta1 = new ContaBancaria (1,'Hudney Brito', 0)
const conta2 = new ContaBancaria (2,'Pedro Guimarães', 100)
const conta3 = new ContaBancaria (3,'Maria Rosa', 0)
