//herança === vai usar a estrutura de uma outra class

//classe mãe
class Animal{
  constructor(nome,idade, peso){
  this.nome = nome;
  this.idade = idade;
  this.peso = peso;
  }
  verificar = () => {console.log(`${this.nome}`)}
}

 //classe filha
class Cachorro extends Animal{
 //pode alterar os metodos e o constructor da classe mãe

}

var dog = new Cachorro('pitbull_tekla', 1,45)
dog.verificar() // pode usar a vontade os metodos da classe mãe 

 //classe filha
 class Cachorro2 extends Animal{
  // pode usar a vontade os metodos da classe mãe
  verificar(){
    console.log(console.log('não vou mostra os dados'))
  }
   
 }
  //classe filha
  class Cachorro3 extends Animal{
  
    metodo_qualquer(){
      super.verificar()//traz o metodo da classe mae para a classe filha 
    } 
    
   }

   class Cachorro3 extends Animal{
  //pode alterar o constructor 
  constructor(nome,idade, peso, características){
    super(nome,idade, peso)
    this.características = características;
  }
   }