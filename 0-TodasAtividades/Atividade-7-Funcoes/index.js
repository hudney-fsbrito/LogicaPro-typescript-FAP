function solicitaNumeros(qdtNum, item) {
    var qtdVezes = qdtNum;
    var arrNum = [];
    for (var i = 0; i < qtdVezes;) {
        var num = parseFloat(prompt("Digite ".concat(i + 1, "\u00BA ").concat(item)));
        if (!isNaN(num)) {
            arrNum.push(num);
            i++;
        }
        else {
            alert("Digite um número válido");
        }
    }
    return arrNum;
}
function solicitaNumerosInteiro(qdtNum, item) {
    var qtdVezes = qdtNum;
    var arrNum = [];
    for (var i = 0; i < qtdVezes;) {
        var num = parseInt(prompt("Digite ".concat(i + 1, "\u00BA ").concat(item)));
        if (!isNaN(num)) {
            arrNum.push(num);
            i++;
        }
        else {
            alert("Digite um número válido");
        }
    }
    return arrNum;
}
//// Questão 5 ////
/*No arquivo questao05.ts*/
//// Questão 6 ////
/*No arquivo questao06.ts*/
//// Questão 7 ////
/* No arquivo questao07.ts */
//// Questão 8 ////
/* No arquivo questao08.ts */
//// Questão 9 ////
/* No arquivo questao09.ts */
//// Questão 10 ////
/* No arquivo questao10.ts */
//// Questão 11 ////
/* No arquivo questao11.ts */
//// Questão 12 ////
/* No arquivo questao12.ts */
//// Questão 13 ////
/* No arquivo questao13.ts */
//// Questão 14 ////
/* No arquivo questao14.ts */
//// Questão 15 ////
/* No arquivo questao15.ts */
/* Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a
tabuada desse número de 1 a 10 no console. */
function gerarTabuada(numero) {
    var i = 0;
    for (var i_1 = 0; i_1 < 10; i_1++) {
        console.log("");
    }
}
