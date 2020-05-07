class ListaNegociacoes{
    constructor(contexto, armadilha){ 
        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto; /* Contexto de Negociacao Controller */
    }

    adicionaNegociacao(negociacao){

        this._negociacoes.push(negociacao);
        //this._armadilha(this);
        Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    get listaNegociacoes(){
        //cria um clone do array
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
        //this._armadilha(this);
        Reflect.apply(this._armadilha, this._contexto, [this]);
    }
}