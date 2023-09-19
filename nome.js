const prompt = require('prompt-sync')();

let name = prompt("Digite seu Nome: ");

let sobrenome = prompt("Digite seu Sobrenome: ");

let completo = name + sobrenome;

console.log(completo)