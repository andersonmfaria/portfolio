// js/contact.js

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio tradicional do formulário

    // Coleta os dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Configura o EmailJS
    emailjs.init("amarques.flp@gmail.com"); // Substitua com seu ID de usuário do EmailJS

    // Configura o template para o envio
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Envia o e-mail
    emailjs.send("service_zac3mf7", "amarques.flp@gmail.com", templateParams)
        .then(function(response) {
            console.log("E-mail enviado com sucesso!", response.status, response.text);
            // Redireciona para a página de confirmação
            window.location.href = "thanks.html";
        }, function(error) {
            console.error("Erro ao enviar o e-mail:", error);
            alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        });
});
