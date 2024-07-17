//Questão 37
/*Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o
perímetro do retângulo.*/ // 2*(b+h)

let basRetangulo = Number(prompt("Digite a base"));
let altRetangulo = Number(prompt("Digite a altura"));
function calcPerimetroRetangulo(base: number, altura: number) {
  if (!base || !altura) {
    alert("Digite um número válido");
  } else {
    let resultado = 2 * (base + altura);
    alert(`O perímetro do rentângulo é ${resultado}`);
  }
}
calcPerimetroRetangulo(basRetangulo, altRetangulo);