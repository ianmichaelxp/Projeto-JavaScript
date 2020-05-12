class MensagensViews extends View 
{
    constructor(elemento)
    {
        super(elemento);
    }

    template(model)
    {// return `<p class="alert alert-info">${model.texto}</p>`;
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }
}