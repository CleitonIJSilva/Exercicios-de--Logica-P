const prompt = require('prompt-sync')();

let velocidade = prompt("Digite a velocidade: ")

let segundos = 435 / 3.6 

let tempo =  velocidade / segundos

console.log(segundos, tempo)
