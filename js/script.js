
function mudar_tema() {
    // O toggle liga/desliga sozinho retornando um boolean
    const isDark = document.body.classList.toggle("dark-theme");
    
    // Para manter o controle da variável global:
    tema_dark = isDark; 
}

//Função que exibe uma caixa de alerta caso o usuário tenha enviado uma mensagem com sucesso no formulário do arquivo contato.html
function exibirAlerta() {
    //verifica se todos os dados do formulário foram preenchidos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return; // Impede o envio do formulário
    }
    alert("Mensagem enviada com sucesso!");
}

// Função para alternar o menu em telas menores
