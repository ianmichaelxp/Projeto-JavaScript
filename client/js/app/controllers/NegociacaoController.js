class NegociacaoController {

    constructor(){
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    /*Escuta um evento de entrada no formulário e cria uma nova instancia de negociação*/
    adiciona(event){
        
        event.preventDefault();
        
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value,
        );
        console.log(DateHelper.dataParaTexto(negociacao.data));   
    }
}