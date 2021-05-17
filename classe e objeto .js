//classes
// uma classe por arquivo
// o arquivo tem q começar com letra maiúscula

// abstração definir os atributos e métodos necessários para a sua aplicação

// a classe funciona como um novo tipo de variável criada por mim 
class Filme {
  constructor() {
    //onde vai cria o atributo
    this.titulo = "sem titulo";
    this.ano = 0;
    this.genero = "";
    this.diretor = "";
    this.atores = [];
    this.duração = 0;
  }
  //métodos são funções
  reproduzir = () => console.log("Reproduzindo...");
  pausar = () => console.log("Pausado ||");
  avançar = () => console.log("Avançar >>");
  fechar = () => console.log("Fechado X");
}
 //instancio um objeto

var vingadores = new Filme() // cria uma copia da classe dentro da variável logo essa variável é um objeto  
console.log('título t1:', vingadores.titulo) //== "" pois é não passou os parâmetros
vingadores.titulo = "vingadores 01"
console.log(vingadores.titulo) //== "vigadores 01" 
//
var hulk = new Filme()

hulk.ano = '2009'
hulk.titulo = "hulk"

console.log("/////hulk")
console.log(hulk.titulo)
console.log(hulk.ano)
