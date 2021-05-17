// carro para sistema de aluguel de carros

class Carro{
    constructor(){
        this.modelo = "";
        this.ano = "";
        this.cor = "";
        this.chassi = "";
        this.placa = "";
        this.documentação = "";
        this.km = "";
        this.quantidade_de_combustível = "";
        this.limpeza = ""; 
        this.danos = false;
        this.preçoDiária = 0;
        this.informaçõesADD = '';
    }
    calculo_de_custo = () => {}
    assinatura_de_contrato = () => {}
    devolução = () => {} // imprevistos
    entrega_produto = () => {}


}
