//dados 

class Dado{
  constructor(lado){
    this.lado = lado
  }
  lançar = () => {
    var array = []
    for(var i=0; i !=3; i++){
    var ladoQueCaiu = Math.floor((Math.random()* this.lado)+1)
    array[array.length] = ladoQueCaiu
    console.log(ladoQueCaiu)
  }
  console.log(array)
  }
}
dado1 = new Dado(3) // cria uma instância com o número de lados desejado 
dado1.lançar()


//ou 
//dados 
/*
class Dado{
  constructor(){
    this.lado = 0
  }
  static lançar = (max) => {
    
    for(var i=0; i !=1000; i++){
    var ladoQueCaiu = Math.floor((Math.random()* max)+1)
    console.log(ladoQueCaiu)
    }
  }
}
Dado.lançar(100)
*/