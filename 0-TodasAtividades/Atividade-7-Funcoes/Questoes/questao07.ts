/* 
Elabore uma função chamada "media" que receba três notas como parâmetros e retorne a média
aritmética delas.
*/

alert('Digite 3 notas do aluno.')
const arrNotas = solicitaNumeros(3, 'nota')
function media(...notas: number[]) {
  let soma:number = 0;
  notas.forEach(nota => {
    soma+=nota
  });
  return (soma / notas.length).toFixed(2) 
}
alert(`A média do aluno é: ${media(...arrNotas)}`)