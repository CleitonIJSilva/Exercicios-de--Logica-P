const prompt = require('prompt-sync')();

let valorAula = 5.96

let horasMes = 200 

let salarioBru = horasMes * valorAula

let inss =  salarioBru*0.14

let salarioLiq = salarioBru - inss

console.log("Seu Salário liquido é: ", salarioLiq )