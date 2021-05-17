// abstração de produtos para loja 

class Produtos{
    constructor(){
        this.nome = '';
        this.fabricante = '';
        this.códigoDeBarras = '';
        this.categoria = '';
        this.preço = '';
        this.contraindicação = '';
        this.validade = '';
        this.quantidade = '';
    }
    vender = () => {}
    devolução = () => {}
    descarte = () =>{}
    armazenamento = () => {}
    reposição = () => {}
    mudança_de_preço = () => {}
}