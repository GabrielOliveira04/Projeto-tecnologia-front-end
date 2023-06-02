document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    // Cria o objeto com os dados do formulário
    var objLoginSenha = {
        email: 'admin@admin.com',
        senha: 1234
    };
    console.log(objLoginSenha); // Exibe o objeto no console (para fins de teste
    var valid = validarUsuario(objLoginSenha);

    if (valid) {
        window.location.href = 'mensagens.html'; // Redireciona para a página de mensagens
    } else {
        alert('Usuário ou senha incorretos'); // Exibe uma mensagem de erro
    }
});

function validarUsuario(objLoginSenha) {
    var retorno = false;

    console.log(objLoginSenha);

    // Faz a requisição para validar o usuário
    var validacao = $.ajax({
        url: 'http://prj-p2-js.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function() {
        return retorno;
    });

    validacao.done(function(data) {
        retorno = data;
    });

    return retorno;
}