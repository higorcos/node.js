var nome = 'Calculadora Simples ';
const versao = '1.02 beta'
var array = [0,0,0,0,0,0,0,,0,0,0,0,,0,0,0,00,0,0,0,0,0,];

function soma(a,b){//vai somar os dois números que são passados
  return  a + b;
}
function subtração(a,b){
  return a - b;
}
function multiplicação(a,b){
  return a * b;
}
function divisão(a,b){
  return a/b;
}
//module.exports = soma; //vai disponibiliza esse código para ser usado e um outro código (também pode ser usado esse método em variáveis )
module.exports = {
  nome,
  versao,
  array,
  soma,
  subtração,
  multiplicação,
  divisão
}
