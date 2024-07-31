let arrayNumeros: number[] = [];

let numero;
let sair;
while (sair != 0) {
    numero = prompt(`Digite um número: `)
    sair = prompt(`Você deseja terminar? Não[N] | Sim[0] \nclick 0 para sair.`)
    arrayNumeros.push(numero)
}

let maior = arrayNumeros[0];
let menor = arrayNumeros[0];
alert(arrayNumeros)

for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > maior) {
        maior = arrayNumeros[i]
    }
    if (arrayNumeros[i] < menor) {
        menor = arrayNumeros[i]
    }
}

alert(`O Número MENOR do array é ${menor} \n e o MAIOR é ${maior}`)

