const amigos = []; // Lista de amigos

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        input.value = "";
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = 
        `<p>El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;
}

function reiniciarTodo() {
    amigos.length = 0; // Vaciar la lista de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar lista
    document.getElementById("resultado").innerHTML = ""; // Limpiar resultado

}
