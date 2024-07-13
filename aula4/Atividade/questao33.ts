//Questão 33
/*Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de
agradecimento personalizada.*/

let email = prompt("Digite seu e-mail")

if (!email || email === "") {
  alert('Digite um email válido')
} else {
  
  let message = `Obrigado! O e-mail "${email}" foi cadastrado com sucesso!`
  alert(message)
}