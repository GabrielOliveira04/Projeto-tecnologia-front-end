function obterMensagens() {
    var retorno = [];

    var consulta = $.ajax({
        url: 'http://prj-p2-js.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    retorno.map((element) => {
        if(element.nome === 'Gabriel de Oliveira Pontes' && element.email != '' && element.mensagem != ''){
            document.getElementById('tbody').innerHTML +=
                `<tr>
                <td>${element.nome}</td>
                <td>${element.email}</td>
                <td>${element.mensagem}</td>
            </tr>`
        }
    })

    return retorno;
}

obterMensagens()