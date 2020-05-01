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

        /*Instancia para auxiliar a formatação da data */
        let helper = new DateHelper();
        
        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value,
        );
        //console.log(helper.dataParaTexto(negociacao.data));   
    }
}