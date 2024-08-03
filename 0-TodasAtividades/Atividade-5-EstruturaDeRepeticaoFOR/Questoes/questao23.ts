/*
Desenvolva um programa que calcule a média de altura de 5 pessoas.
*/
let arrAltura : number[] = [];
let altura:number;
let somaAltura;
let mediaAltura;
for (let i = 0; i < 5; i++) {
   altura = parseFloat(prompt(`Digite a altura da ${i +1}º pessoa: `)!)
  if (!isNaN(altura)) {
    arrAltura.push(altura)
    somaAltura += arrAltura[i];
  }else {
    alert('Digite uma altura válida!!!')
  }
}
mediaAltura = somaAltura / 5;

if (!isNaN(mediaAltura) && mediaAltura !== null) {
  /* alert('Soma' + somaAltura)
  alert('Media' + mediaAltura) */
  alert(`A média das altura é ${mediaAltura}`)
}else {
  alert('[ERRO] Tente novamente!!!')
}
