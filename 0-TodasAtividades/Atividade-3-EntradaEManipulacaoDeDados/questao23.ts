//Questão 23
/*Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de
sua escolha).*/

let nameCity = prompt("Digiti o nome da sua cidade")?.toLowerCase();

function checksCity(name: string) {
  if (!name || name === undefined) {
    alert("ERRO Digite algo!");
  } else if (name[0] === "r") {
    alert(name.toUpperCase());
  } else {
    alert("Tente novamente! " + name.toUpperCase());
  }
}

checksCity(nameCity);
location.reload();