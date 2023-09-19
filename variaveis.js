const prompt = require('prompt-sync')();

let numA = prompt("Digite um numero: ")

let numB = prompt("Digite o segundo numero: ")

 aux = numA

 numA = numB

numB = aux

console.log(numA,numB)