//Receba um número decimal do usuário e calcule o seu quadrado.
const numeroDecimal = parseFloat(prompt('Digite seu número decimal: '));
function quadradoDoNumero(num1:number) {
  if (!numeroDecimal) {
    alert('Número inválido!!!')
  } else {
    let numero = num1**2
    console.log(`O resultado é: ${numero}`);
    
    return alert(`O resultado é: ${numero}`);
  }
}

quadradoDoNumero(numeroDecimal)