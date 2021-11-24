//Conversao Implicita
const num = 456;
const numStr = "456";
let telefone = 12341234;
let altura = "10";
let largura = "5";
let usuarioConectado = false;
console.log(Number(usuarioConectado));
usuarioConectado = true;
console.log(Number(usuarioConectado));

console.log(largura * altura)

console.log(num === numStr);
console.log(num == numStr);

console.log(num + numStr);

//Conversao Explicita

console.log(num + Number(numStr));
console.log(String(num) + ", " + numStr);
console.log("O telefone é " + telefone.toString());