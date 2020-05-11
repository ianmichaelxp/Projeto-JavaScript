class ListaNegociacoes{
    constructor(){ 
        this._negociacoes = [];
    }

    adicionaNegociacao(negociacao){

        this._negociacoes.push(negociacao);
        console.log(this._negociacoes);
        
    }

    get listaNegociacoes(){
        //cria um clone do array
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
    }
}