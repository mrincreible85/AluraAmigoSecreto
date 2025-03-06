
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
// En este desafío, deberás crear un programa que pida el nombre de los participantes y sortee al azar el nombre de un amigo secreto.
//crea un arreglo llamado amigos donde se almacenarán los nombres de los participantes

let amigos = [];
let amigosSorteados = [];

// Función para agregar un amigo al arreglo
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre.trim() !== "") {
        if (amigos.includes(nombre)) {
            alert("Este nombre ya está en la lista.");
        } else {
            amigos.push(nombre);
            document.getElementById('amigo').value = "";
            actualizarListaAmigos();
        }
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para mostrar el resultado del sorteo en el HTML
function mostrarResultado(mensaje) {
    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ""; // Limpiar resultado anterior

    let li = document.createElement('li');
    li.textContent = mensaje;
    resultadoLista.appendChild(li);
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let nombreSeleccionado = amigos[indiceAleatorio];

        amigosSorteados.push(nombreSeleccionado);
        amigos.splice(indiceAleatorio, 1);
        actualizarListaAmigos();
        mostrarResultado(`El amigo sorteado es: ${nombreSeleccionado}`);
    } else {
        mostrarResultado("Todos los nombres ya han sido sorteados.");
    }
}


    
    // Comprobando en consola los cambios en los arreglos
    console.log(amigos);
    console.log(amigosSorteados);

