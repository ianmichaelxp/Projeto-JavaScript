class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }

    adicionaNegociacao(negociacao){
        this._negociacoes.push(negociacao)
    }

    get listaNegociacoes(){
        //cria um clone do array
        return [].concat(this._negociacoes);
    }
}