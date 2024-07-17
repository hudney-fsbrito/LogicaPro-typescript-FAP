var TipoPagamento;
(function (TipoPagamento) {
    TipoPagamento[TipoPagamento["PIX"] = 0] = "PIX";
    TipoPagamento[TipoPagamento["D\u00E9bito"] = 1] = "D\u00E9bito";
    TipoPagamento[TipoPagamento["Cr\u00E9dito"] = 2] = "Cr\u00E9dito";
    TipoPagamento[TipoPagamento["Boleto"] = 3] = "Boleto";
})(TipoPagamento || (TipoPagamento = {}));
var tipoPagamento = prompt("Menu: 0 - PIX | 1 - Débito | 2 - Crédito | 3 - Boleto");
var tipoPagamentoNumero = Number(tipoPagamento);
switch (tipoPagamentoNumero) {
    case TipoPagamento.PIX:
        alert("Pagamento com: ".concat(TipoPagamento[tipoPagamentoNumero]));
        break;
    case TipoPagamento.Débito:
        alert("Pagamento com: ".concat(TipoPagamento[tipoPagamentoNumero]));
        break;
    case TipoPagamento.Crédito:
        alert("Pagamento com: ".concat(TipoPagamento[tipoPagamentoNumero]));
        break;
    case TipoPagamento.Boleto:
        alert("Pagamento com: ".concat(TipoPagamento[tipoPagamentoNumero]));
        break;
    default:
        alert("Tipo de pagamento inválido");
        break;
}
location.reload();
