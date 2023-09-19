const prompt = require('prompt-sync')();

let altura = prompt('Digite a sua altura: ')

let largura = prompt("Digite a largura: ")

let profundidade = prompt("Digite a profundidade: ")

let volume = altura * largura * profundidade

console.log(volume)