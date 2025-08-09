//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Array para armazenar nomes 
let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    
    if (amigo.trim() === '') {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(amigo);
    document.getElementById('amigo').value = '';
}

function exibirAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista existente

    for (let i = 0; i < amigos.length; i++) {
        let amigoElemento = document.createElement('li');
        amigoElemento.textContent = amigos[i];
        lista.appendChild(amigoElemento);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, adicione amigos para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>O amigo sorteado é: <strong>${amigoSorteado}</strong></p>`;
}