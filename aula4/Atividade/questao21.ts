/* Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo:
"Você é casado(a)", "Você é solteiro(a)", etc.). */

let estadoCivil: string = String(prompt("Digite seu estado civil."));

//PRIMEIRA OPÇÃO
if (estadoCivil == 'Solteiro' || estadoCivil == 'solteiro') {
      alert("Ok! Você é solteiro");
}else if(estadoCivil == 'Casado' || estadoCivil == 'casado'){
      alert("Certo! Você é casado");

}else{
  alert('Erro na digitação');

}

//SEGUNDA OPÇÃO
// switch (estadoCivil) {
//   case "Solteiro":
//     alert("Ok! Você é solteiro");

//     break;
//   case "Casado":
//     alert("Certo! Você é casado");

//     break;

//   default:
//     alert("Erro na digitação");

//     break;
// }
