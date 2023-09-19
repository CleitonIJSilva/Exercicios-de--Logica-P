const prompt = require('prompt-sync')();

let prova1 = prompt("Digite a primeira nota: ")

let prova2 = prompt("Digite a segunda nota: ")

let prova3 = prompt("Digite a terceira nota: ")

let media1 = prova1*2
let media2 = prova2*3 // esses valores
let media3 = prova3*5

//let media = (media1*2)+(media2*3)+(media3*5)   //alternativa dada pelo professor
//para funcionar, tem q desativar os valores la em cima

 let mediaFinal = (media1 + media2 + media3)/10  //meu método
console.log( media)