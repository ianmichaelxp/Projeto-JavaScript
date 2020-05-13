class ProxyFactory
{
    static create(objeto, props, acao)
    {
        return new Proxy(objeto, 
        {
            get: function(target, prop, receiver)
            {
                if(props.includes(prop) 
                    && typeof(target[prop]) == typeof(Function)) 
                {
                    return function() 
                    {
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);                     
                    }
                }
                return Reflect.get(...arguments);
            },

            set: function(target, prop, value, receiver)
            {
                if(props.includes(prop))
                {
                    target[prop] = value;
                    acao(target);
                }
                return Reflect.set(...arguments);
            }
        });
    }
}