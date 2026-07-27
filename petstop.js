document.getElementById("form-agendamento").addEventListener("submit", async function (e) {
    e.preventDefault();

    const dados = {
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        servico: document.querySelector("select[name='servico']").value,
        animal: document.querySelector("select[name='animal']").value,
        data_agendamento: document.getElementById("data").value,
        horario_agendamento: document.getElementById("hora").value
    };

    try {
        const resposta = await fetch("http://127.0.0.1:5000/agendar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();

        document.getElementById("modal-mensagem-texto").innerText = resultado.mensagem;
        document.getElementById("modal-confirmacao").style.display = "flex";

    } catch (erro) {
        console.error("Erro ao enviar:", erro);
        alert("Erro ao realizar o agendamento.");
    }
});


