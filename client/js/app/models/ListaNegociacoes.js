class ListaNegociacoes{
    constructor(armadilha){ 
        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adicionaNegociacao(negociacao){

        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    get listaNegociacoes(){
        //cria um clone do array
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
        this._armadilha(this);
    }
}