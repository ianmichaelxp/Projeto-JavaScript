class NegociacaoController {

    constructor(){
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        let self = this;
    //     ??????????????????????????????????????????????????????
    //     this._negociacoes = new ListaNegociacoes((model) => {
    //         this._negociacoesView.update(model);
    // });
    
        this._negociacoes = new Proxy(new ListaNegociacoes(), 
        {
            get: function(target, prop, receiver)
            {
                if(['adicionaNegociacao', 'esvazia'].includes(prop) 
                    && typeof(target[prop]) == typeof(Function)) 
                {
                    return function() 
                    {
                        console.log(`a propriedade "${prop}" foi interceptada`);   
                        Reflect.apply(target[prop], target, arguments);
                        self._negociacoesView.update(target);                     
                    }
                }
                return Reflect.get(...arguments);
            }
        });

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._negociacoes);
        this._mensagem = new Mensagem();
        this._mensagensView = new MensagensViews($('#mensagensView'));
        //this._mensagensView.update(this._mensagem);

    }

    adiciona(event){ /*Escuta um evento de entrada no formulário e cria uma nova instancia de negociação*/
        
        event.preventDefault();
       
        this._negociacoes.adicionaNegociacao(this._criaNegociacao()); 
        this._mensagem.texto = "Negociação adicionada com suscesso!";
        this._mensagensView.update(this._mensagem);
        
        this._limpaFormulario();
    }

    esvazia(){
        this._negociacoes.esvazia();
        this._mensagem.texto = "Lista de negociações apagada com suscesso!";
        this._mensagensView.update(this._mensagem);
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
