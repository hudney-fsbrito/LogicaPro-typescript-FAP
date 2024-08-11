/*
Crie um programa que receba n notas de alunos até que o número -1 seja teclado.
*Mostre a maior nota
*Mostre a menor nota
*Mostre quantas notas foram inseridas
*Calcule a média das notas
*Mostre quantos foram aprovados e quantos não foram aprovados (aprovado >= 7)
*/
var nota;
var notas = [];
var i = 1;
function inserirNotas() {
    do {
        if (!isNaN(nota) || (nota >= 0 && nota <= 10)) {
            notas.push(nota);
            i++;
        }
        nota = parseInt(prompt("\n      Digite a ".concat(notas[i], "\u00AA nota do aluno de 0 a 10:\n      Para finalizar digite [-1]\n      ")));
    } while (nota != -1);
}
inserirNotas();
function listarNotas() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    return notas.join('| ');
}
function mostraMaior() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    var maior = listaNotas[0];
    listaNotas.forEach(function (n) { return (n > maior ? (maior = n) : maior); });
    return maior;
}
function mostraMenor() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    var maior = listaNotas[0];
    listaNotas.forEach(function (n) { return (n < maior ? (maior = n) : maior); });
    return maior;
}
function mostraQuantidadeNotas() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    return listaNotas.length;
}
function calculaMediaNotas() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    var soma = 0;
    listaNotas.forEach(function (nota) { return (soma += nota); });
    return (soma / listaNotas.length).toFixed(2);
}
function listaAprovados() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    var aprovados = 0;
    listaNotas.forEach(function (n) { return (n >= 7 ? aprovados++ : aprovados); });
    return aprovados;
}
function listaReprovados() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    var reprovados = 0;
    listaNotas.forEach(function (n) { return (n < 7 ? reprovados++ : reprovados); });
    return reprovados;
}
var Escolha;
(function (Escolha) {
    Escolha[Escolha["QuantasCadastrada"] = 1] = "QuantasCadastrada";
    Escolha[Escolha["ListarNotas"] = 2] = "ListarNotas";
    Escolha[Escolha["CalcularMedia"] = 3] = "CalcularMedia";
    Escolha[Escolha["listarAprovados"] = 4] = "listarAprovados";
    Escolha[Escolha["listaReprovados"] = 5] = "listaReprovados";
    Escolha[Escolha["Maior"] = 6] = "Maior";
    Escolha[Escolha["Menor"] = 7] = "Menor";
    Escolha[Escolha["SAIR"] = 8] = "SAIR";
})(Escolha || (Escolha = {}));
var escolha;
if (notas.length !== 0) {
    do {
        escolha = parseInt(prompt("Escolha uma das op\u00E7\u00F5es abaixo: \n        [1] Quantas notas cadastradas\n        [2] Listar notas cadastradas\n        [3] Calcular m\u00E9dias das sala\n        [4] listar quantidade de aprovados\n        [5] listar quantidade de reprovados\n        [6] Maior nota\n        [7] Menor nota\n        [8] SAIR\n        "));
        switch (escolha) {
            case Escolha.QuantasCadastrada:
                alert(mostraQuantidadeNotas.apply(void 0, notas));
                break;
            case Escolha.ListarNotas:
                alert(listarNotas.apply(void 0, notas));
                break;
            case Escolha.CalcularMedia:
                alert(calculaMediaNotas.apply(void 0, notas));
                break;
            case Escolha.listarAprovados:
                alert(listaAprovados.apply(void 0, notas));
                break;
            case Escolha.listaReprovados:
                alert(listaReprovados.apply(void 0, notas));
                break;
            case Escolha.Maior:
                alert(mostraMaior.apply(void 0, notas));
                break;
            case Escolha.Menor:
                alert(mostraMenor.apply(void 0, notas));
                break;
            default:
                break;
        }
    } while (escolha != Escolha.SAIR);
}
