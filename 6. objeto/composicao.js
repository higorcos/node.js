//usar classe com outras classes dentro 
class LerArquivo {
  ler = () => {console.log('lendo')}
}
class DeletarArquivo{
  deletar = () =>{console.log('deletanto')}
}
class AbrirArquivo {
  abrir = () => {console.log('abrindo')}
}
class EnviarArquivo{
  enviar = (remetente) => {console.log(`enviando para ${remetente}`)}
}
// pode usar as classes em varias classes
class ManipulacaoDeArquivos{
  constructor(nome){
    
    this.arquivo = nome;
    this.leitor = new LerArquivo; 
    this.deletar = new DeletarArquivo;
    this.abrir = new AbrirArquivo; 
  }
  
}


var manipular = new ManipulacaoDeArquivos('text.txt');
manipular.leitor.ler()   
 //"manipular", nome da nova instancia 
 //"leitor", o nome dado a class "LerArquivo"  dentro do constructor 
 //"ler()" função dentro da class "LerArquivo"
manipular.abrir.abrir()
manipular.deletar.deletar()


class Compartilhar{
  constructor(nome,arquivo){
    this.pessoa = nome
    this.arquivo = arquivo;
    this.AbrirArquivo = new AbrirArquivo;
    this.EnviarArquivo = new EnviarArquivo;
  }
  whatsapp = () =>{
    this.AbrirArquivo.abrir()
    this.EnviarArquivo.enviar(this.pessoa)
  }
}


var divulgar = new Compartilhar('higor', 'aruivo004.txt')

divulgar.whatsapp()