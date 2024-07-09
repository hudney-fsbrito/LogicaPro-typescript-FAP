//Receba um número decimal do usuário e calcule o seu quadrado.
const numeroDecimal = parseFloat(prompt('Digite seu número: '));
function quadradoDoNumero(num1:number) {
    let numero = num1**2
    return console.log(`O resultado é: ${numero}`);
    
}

quadradoDoNumero(numeroDecimal)