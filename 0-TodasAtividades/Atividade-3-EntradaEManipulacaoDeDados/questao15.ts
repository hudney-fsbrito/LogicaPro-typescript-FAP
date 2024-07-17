let texto: string = String(prompt("Digite um texto bacana"));
if (texto === "" || texto == " ") {
  alert("Texto Inválido ou nenhum!!! " + texto.length);
} else {
  alert(`O texto "${texto}" tem o tamnho de ${texto.length}`);
}