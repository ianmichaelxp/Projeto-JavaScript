class NegociacaoController {

    constructor(){
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    
        this._negociacoes = ProxyFactory.create(new ListaNegociacoes(), ['adicionaNegociacao', 'esvazia'], 
            model => this._negociacoesView.update(model));
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._negociacoes);

        this._mensagem = ProxyFactory.create(new Mensagem(), ['texto'], 
            model => this._mensagensView.update(model));
        this._mensagensView = new MensagensViews($('#mensagensView'));
        //this._mensagensView.update(this._mensagem);

    }

    adiciona(event){ /*Escuta um evento de entrada no formulário e cria uma nova instancia de negociação*/
        
        event.preventDefault();
       
        this._negociacoes.adicionaNegociacao(this._criaNegociacao()); 
        this._mensagem.texto = "Negociação adicionada com suscesso!";
        // this._mensagensView.update(this._mensagem);
        
        this._limpaFormulario();
    }

    esvazia(){
        this._negociacoes.esvazia();
        this._mensagem.texto = "Lista de negociações apagada com suscesso!";
        this._mensagensView.update(this._mensagem);
        this._limpaFormulario();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0    
        this._inputData.focus();    
    }
}
