/* Peça ao usuário que digite o seu nome e verifique 
se ele contém mais de 5 caracteres. */

let nome: string = String(prompt('Digite seu nome:'))

function verificaNome(nomeQualquer:string) {
  if (nomeQualquer.length > 5) {
    return console.log('O nome digitado contém mais de 5 caracteres');
  }
  return console.log(`Contém ${nomeQualquer.length} caracteres`);
  
}

console.log(verificaNome(nome));