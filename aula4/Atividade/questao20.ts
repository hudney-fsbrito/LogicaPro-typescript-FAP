/* Peça ao usuário que digite o seu nome e verifique 
se ele contém mais de 5 caracteres. */
let nome: string = String(prompt('Digite seu nome:'))

function verificaNome(nomeQualquer:string) {
  if (nomeQualquer === '' || nomeQualquer === ' ') {
    alert('O nome é inválido!!!')
  } else {
    
    if (nomeQualquer.length > 5) {
      return alert('O nome digitado contém mais de 5 caracteres');
    }
    return alert(`Contém ${nomeQualquer.length} caracteres`);
  }

}

verificaNome(nome);