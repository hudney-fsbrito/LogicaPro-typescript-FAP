var arrayNumeros = [];
var numero;
var sair;
while (sair != 0) {
    numero = prompt("Digite um n\u00FAmero: ");
    sair = prompt("Voc\u00EA deseja terminar? N\u00E3o[N] | Sim[0] \nclick 0 para sair.");
    arrayNumeros.push(numero);
}
var maior = arrayNumeros[0];
var menor = arrayNumeros[0];
alert(arrayNumeros);
for (var i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > maior) {
        maior = arrayNumeros[i];
    }
    if (arrayNumeros[i] < menor) {
        menor = arrayNumeros[i];
    }
}
alert("O N\u00FAmero MENOR do array \u00E9 ".concat(menor, " \n e o MAIOR \u00E9 ").concat(maior));
