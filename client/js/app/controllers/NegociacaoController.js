class NegociacaoController 
{
    constructor()
    {        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    
        this._negociacoes = new Bind(new ListaNegociacoes(), 
            new NegociacoesView($('#negociacoesView')),
            ['adicionaNegociacao', 'esvazia']);

        this._mensagem = new Bind(new Mensagem(), 
            new MensagensViews($('#mensagensView')), 
            ['texto']);
    }

    adiciona(event)
    { /*Escuta um evento de entrada no formulário e cria uma nova instancia de negociação*/
        event.preventDefault();       
        this._negociacoes.adicionaNegociacao(this._criaNegociacao()); 
        this._mensagem.texto = "Negociação adicionada com suscesso!";
        this._limpaFormulario();
    }

    importaNegociacoes()
    {        
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => 
        {
            if(xhr.readyState == 4)
            {
                if(xhr.status == 200)
                {
                    JSON.parse(xhr.responseText)
                     .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                     .forEach(negociacao => this._negociacoes.adicionaNegociacao(negociacao));
                     this._mensagem.texto = "Negociações importadas com sucesso!"
                     this._limpaFormulario();

                }else
                {
                    console.log(xhr.responseText);
                    this._mensagem.texto = "Erro";                        
                } 
            }            
        }
        xhr.send();
    }

    esvazia()
    {
        this._negociacoes.esvazia();
        this._mensagem.texto = "Lista de negociações apagada com suscesso!";
        this._limpaFormulario();
    }

    _criaNegociacao()
    {
        return new Negociacao
        (
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() 
    {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0    
        this._inputData.focus();    
    }
}
