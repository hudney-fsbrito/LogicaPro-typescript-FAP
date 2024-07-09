/* Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo:
"Você é casado(a)", "Você é solteiro(a)", etc.). */

let estadoCivil: string = String(prompt("Digite seu estado civil."));

if (estadoCivil == 'Solteiro' || estadoCivil == 'solteiro') {
      console.log("Ok! Você é solteiro");
}else if(estadoCivil == 'Casado' || estadoCivil == 'casado'){
      console.log("Certo! Você é casado");

}else{
  console.log('Erro na digitação');
  
}

// switch (estadoCivil) {
//   case "Solteiro":
//     console.log("Ok! Você é solteiro");

//     break;
//   case "Casado":
//     console.log("Certo! Você é casado");

//     break;

//   default:
//     console.log("Erro na digitação");

//     break;
// }
