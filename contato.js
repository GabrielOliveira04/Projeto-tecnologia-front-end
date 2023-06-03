document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Cria o objeto com os dados do formulário
    var obj = {
        nome: name,
        email: email,
        mensagem: message
    };

    console.log(obj); // Exibe o objeto no console (para fins de teste)

    // Envia a mensagem para o servidor
    inserirMensagem(obj);

    window.location.href = 'mensagens.html'
});