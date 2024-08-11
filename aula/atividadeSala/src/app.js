"use strict";
/*
Crie um programa que receba n notas de alunos até que o número -1 seja teclado.
*Mostre a maior nota
*Mostre a menor nota
*Mostre quantas notas foram inseridas
*Calcule a média das notas
*Mostre quantos foram aprovados e quantos não foram aprovados (aprovado >= 7)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaReprovados = exports.listaAprovados = exports.calculaMediaNotas = exports.mostraQuantidadeNotas = exports.mostraMenor = exports.mostraMaior = exports.listarNotas = exports.inserirNotas = exports.notas = void 0;
var nota;
exports.notas = [];
var i = 1;
function inserirNotas() {
    do {
        if (!isNaN(nota) || (nota >= 0 && nota <= 10)) {
            exports.notas.push(nota);
            i++;
        }
        else
            (alert('Tente novamente!'));
        nota = parseInt(prompt("\n      Digite a ".concat(exports.notas[i], "\u00AA nota do aluno de 0 a 10:\n      Para finalizar digite [-1]\n      ")));
    } while (nota != -1);
}
exports.inserirNotas = inserirNotas;
inserirNotas();
function listarNotas() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    return exports.notas.join('| ');
}
exports.listarNotas = listarNotas;
function mostraMaior() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    var maior = listaNotas[0];
    listaNotas.forEach(function (n) { return (n > maior ? (maior = n) : maior); });
    return maior;
}
exports.mostraMaior = mostraMaior;
function mostraMenor() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    var maior = listaNotas[0];
    listaNotas.forEach(function (n) { return (n < maior ? (maior = n) : maior); });
    return maior;
}
exports.mostraMenor = mostraMenor;
function mostraQuantidadeNotas() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    return listaNotas.length;
}
exports.mostraQuantidadeNotas = mostraQuantidadeNotas;
function calculaMediaNotas() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    var soma = 0;
    listaNotas.forEach(function (nota) { return (soma += nota); });
    return (soma / listaNotas.length).toFixed(2);
}
exports.calculaMediaNotas = calculaMediaNotas;
function listaAprovados() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    var aprovados = 0;
    listaNotas.forEach(function (n) { return (n >= 7 ? aprovados++ : aprovados); });
    return aprovados;
}
exports.listaAprovados = listaAprovados;
function listaReprovados() {
    var listaNotas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaNotas[_i] = arguments[_i];
    }
    var reprovados = 0;
    listaNotas.forEach(function (n) { return (n < 7 ? reprovados++ : reprovados); });
    return reprovados;
}
exports.listaReprovados = listaReprovados;
/* console.log(notas);

console.log(`Menor nota: ${mostraMenor(...notas)}`);
console.log(`MAIOR:  ${mostraMaior(...notas)}`);
console.log(`Quantidade de notas ${mostraQuantidadeNotas(...notas)}`);
console.log(`Media: ${calculaMediaNotas(...notas)}`);
console.log(`Aprovados: ${listaAprovados(...notas)}`);
console.log(`Reprovados: ${listaReprovados(...notas)}`); */
// window.location.reload();
