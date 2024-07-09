//Peça ao usuário que insira dois números e exiba o maior deles.

let numeros : number[] = [];
numeros.push(Number(prompt('Digite o primeiro Número')))
numeros.push(Number(prompt('Digite o Segundo Número')))

  if(numeros[0] > numeros[1]){
    console.log(numeros[0]);
  }else if(numeros[0] == numeros[1]){
    console.log('O número é igual');
    
  }else{
    console.log(numeros[1]);

  }