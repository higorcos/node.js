//classes
// uma classe por arquivo
// o arquivo tem q começar com letra maiúscula

// abstração definir os atributos e métodos necessários para a sua aplicação

// a classe funciona como um novo tipo de variável criada por mim 
class Filme {
  constructor(titulo,ano,genero,diretor,atores,duração) {
    //onde vai cria o atributo
    this.titulo = titulo;
    this.ano = ano;
    this.genero = genero;
    this.diretor = diretor;
    this.atores = atores;
    this.duração = duração;
  }
  //métodos são funções
  reproduzir = () => console.log("Reproduzindo...");
  pausar = () => console.log("Pausado ||");
  avançar = () => console.log("Avançar >>");
  fechar = () => console.log("Fechado X");
}
 //instancio um objeto

var vingadores = new Filme("Vingadores",2007, "heróis") 
console.log(vingadores.titulo, vingadores.ano, vingadores.genero)
//
var starWars = new Filme("Star Wars", 1997)
console.log(starWars.titulo, starWars.ano)