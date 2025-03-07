// almacenar los nombres de los amigos ingresados
const amigos = [];

// capturar el valor del campo de entrada
function agregarAmigos () {
    const input = document.querySelector ("amigo")
    const nombre = input.value.trim ();


// validar la entrada
if (nombre === "") {
    alert ("Por favor, ingrese un nombre");
}

// actualizar y limpiar el campo de entrada
amigos.push (nombre);
actualizarLista();
input.value = ""; 

}


