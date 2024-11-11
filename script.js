// Variables para los puntajes
let playerScore = 0;
let computerScore = 0;
const maxScore = 3;

// Función para obtener la elección aleatoria de la computadora
function obtenerEleccionComputadora() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones[indiceAleatorio];
}

// Función para determinar el ganador de una ronda
function determinarGanador(eleccionJugador, eleccionComputadora) {
    if (eleccionJugador === eleccionComputadora) {
        return '¡Es un empate!';
    }
    if (
        (eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
        (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')
    ) {
        playerScore++;
        return '¡Ganaste esta ronda!';
    } else {
        computerScore++;
        return '¡Perdiste esta ronda!';
    }
}

// Asignar los eventos a los botones
document.getElementById('piedra').addEventListener('click', function() {
    jugar('piedra');
});
document.getElementById('papel').addEventListener('click', function() {
    jugar('papel');
});
document.getElementById('tijera').addEventListener('click', function() {
    jugar('tijera');
});

// Función que ejecuta el juego por ronda
function jugar(eleccionJugador) {
    if (playerScore < maxScore && computerScore < maxScore) {
        const eleccionComputadora = obtenerEleccionComputadora();
        const resultado = determinarGanador(eleccionJugador, eleccionComputadora);
        mostrarResultado(resultado, eleccionJugador, eleccionComputadora);
        actualizarPuntaje();

        // Comprobar si alguien ha ganado la partida
        if (playerScore === maxScore) {
            mostrarResultadoFinal("¡Felicidades, ganaste el mejor de 3!");
        } else if (computerScore === maxScore) {
            mostrarResultadoFinal("La computadora ganó el mejor de 3. ¡Inténtalo de nuevo!");
        }
    }
}

// Función para mostrar el resultado de una ronda
function mostrarResultado(resultado, eleccionJugador, eleccionComputadora) {
    const resultText = document.getElementById('resultText');
    resultText.innerHTML = `Tu elección: ${eleccionJugador}<br>Computadora eligió: ${eleccionComputadora}<br>${resultado}`;
}

// Función para actualizar el puntaje en el HTML
function actualizarPuntaje() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

// Función para mostrar el resultado final de la partida
function mostrarResultadoFinal(mensaje) {
    const resultText = document.getElementById('resultText');
    resultText.innerHTML = mensaje;
}

// Evento para el botón de reinicio
document.getElementById('resetButton').addEventListener('click', reiniciarJuego);

// Función para reiniciar el juego
function reiniciarJuego() {
    playerScore = 0;
    computerScore = 0;
    actualizarPuntaje();
    document.getElementById('resultText').textContent = "El juego ha sido reiniciado. ¡Buena suerte!";
}
