//vai chamar o código presente no arquivo, o nome da variavel pode ser qualquer nome 
var calculadora = require('./Calculadora');///Nesse caso como foi passado mais de uma função tem que especificar qual vai ser usada.


console.log(calculadora.nome) //mostra a variável que tá no arquivo calculadora 
calculadora.nome = 'Calculadora Básico' // altera essa variável
console.log(calculadora.nome, calculadora.versao)//mostra o resultado da alteração e mostra uma const que tá no arquivo calculadora chamada 'versão'

console.log(calculadora.soma(10,20))
console.log(calculadora.subtração(10,20))
console.log(calculadora.multiplicação(10,20))
console.log(calculadora.divisão(10,20))
//console.log(calculadora.array);


