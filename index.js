//static não precisa criar uma objeto para usar a classe
class Calculadora {
  static somar(a,b){
    console.log(a+b)
  }
  static subtração(a,b){
    console.log(a-b)
  }
}

Calculadora.somar(20,80);
Calculadora.subtração(90,76);