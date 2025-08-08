// Marca personalizada para fácil adaptação/remover
const assinatura = "Amigo Secreto do Cleiton";

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

// Atualiza a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];

    document.getElementById("resultado").innerHTML = `
        <li>🎉 O amigo secreto é: <strong>${sorteado}</strong></li>
        <li><em>— ${assinatura}</em></li>
    `;

    console.log(`🔐 ${assinatura} — código personalizado`);
}
