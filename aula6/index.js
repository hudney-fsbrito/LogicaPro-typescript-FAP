//Minha versão
/*
let opcao: string = String(
  prompt("Digite: \n[1]para PIX \n[2] para Débito \n[3]Boleto \n[4]Crédito")
);

if (opcao === "1") {
  opcao = "PIX";
} else if (opcao === "2") {
  opcao = "Débito";
} else if (opcao === "3") {
  opcao = "Boleto";
} else {
  opcao = "Crédito";
}

let tipoPagamento: String = opcao;


switch (tipoPagamento) {
  case "PIX":
    console.log(`\n Pagando com ${tipoPagamento} \n`);
    break;
  case "Débito":
    console.log(`\n Pagando com ${tipoPagamento} \n`);
    break;
  case "Boleto":
    console.log(`\n Pagando com ${tipoPagamento} \n`);
    break;
  case "Crédito":
    console.log(`\n Pagando com ${tipoPagamento} \n`);
    break;

  default:
    console.log("Tipo de pagamento inválido");
}

*/
//Versão alunno Leandto
/*
let tipoPagamento: TipoPagamento | undefined;

enum TipoPagamento {
  PIX = 1,
  Débito = 2,
  Crédito = 3,
  Boleto = 4,
}

let tipoPagamento = prompt("Menu: 1 - PIX 2 - Débito 3 - Crédito 4 - Boleto");

const tipoPagamentoNumero = Number(tipoPagamento);

switch (tipoPagamentoNumero) {
  case TipoPagamento.PIX:
    alert(`Pagamento com: ${TipoPagamento[tipoPagamentoNumero]}`);
    break;
  case TipoPagamento.Débito:
    alert(`Pagamento com: ${TipoPagamento[tipoPagamentoNumero]}`);
    break;
  case TipoPagamento.Crédito:
    alert(`Pagamento com: ${TipoPagamento[tipoPagamentoNumero]}`);
    break;
  case TipoPagamento.Boleto:
    alert(`Pagamento com: ${TipoPagamento[tipoPagamentoNumero]}`);
    break;
  default:
    alert("Tipo de pagamento inválido");
    break;
}
*/
//Versão professor
/*
const tipoPagamento = prompt(
  "Digite: \n[PIX]para PIX \n[Débito] para Débito \n[Boleto]Boleto \n[Crédito]Crédito"
);

switch (tipoPagamento) {
  case "PIX":
    alert(`\n Pagando com ${tipoPagamento} \n`);
    break;
  case "Débito":
    alert(`\n Pagando com ${tipoPagamento} \n`);
    break;
  case "Boleto":
    alert(`\n Pagando com ${tipoPagamento} \n`);
    break;
  case "Crédito":
    alert(`\n Pagando com ${tipoPagamento} \n`);
    break;

  default:
    alert("Tipo de pagamento inválido");
}

type TipoPagamento = "PIX" | "Débito" | "Crédito" | "Boleto" | undefined;

*/
window.location.reload();
