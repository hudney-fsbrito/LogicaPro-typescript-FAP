//Questão 1
const variavelNull: null = null;
console.log(`Questão1: `);
console.log(variavelNull);

//Questão 2
const variavelUnderfined = undefined;
console.log(`Questão2: `);
console.log(variavelUnderfined);

//Questão 3
console.log(`Questão3: `);

const verificaTipo = function (props1:any, props2:any)  { //Função para verificar o tipo da variável 
  
  const verdade: boolean = true;
  const falso: boolean = false;
  
  if (props1 == props2) {
    console.log(verdade);
    
  }else{console.log(falso);}
}
verificaTipo(variavelNull,null);


//Questão 4
console.log(`Questão4: `);

verificaTipo(variavelUnderfined, undefined)


//Questão 5
console.log(`Questão5: `);
const nome:undefined = undefined;
console.log(nome);


