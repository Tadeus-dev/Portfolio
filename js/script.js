//Implementação das funções de mudança de tema e alerta do formulário de contato.

function mudar_tema() {
    // O toggle liga/desliga sozinho retornando um boolean. Cada elemento recebe a classe "dark-theme", com isso podemos configurar no css as preferências.
    const isDark = document.body.classList.toggle("dark-theme");
    
    // Para manter o controle da variável global (Não foi necessário)
    tema_dark = isDark; 
}

//Função que exibe uma caixa de alerta caso o usuário tenha enviado uma mensagem com sucesso no formulário do arquivo contato.html
function exibirAlerta() {
    //verifica se todos os dados do formulário foram preenchidos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    //Condicional que verifica se qualquer um dos campos não forem preenchidos.
    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return; // Impede o envio do formulário
    }
    alert("Mensagem enviada com sucesso!"); //Só será acionado se todos os campos estiverem corretos
}
