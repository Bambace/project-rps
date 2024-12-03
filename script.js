// Variables para los puntajes
let playerScore = 0;
let computerScore = 0;
const maxScore = 3;

// Función para obtener la elección aleatoria de la computadora
function obtenerEleccionComputadora() {
    const opciones = ['rock', 'paper', 'scissor'];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones[indiceAleatorio];
}

// Función para determinar el ganador de una ronda
function determinarGanador(eleccionJugador, eleccionComputadora) {
    if (eleccionJugador === eleccionComputadora) {
        return "¡It's a tie!";
    }
    if (
        (eleccionJugador === 'rock' && eleccionComputadora === 'scissor') ||
        (eleccionJugador === 'paper' && eleccionComputadora === 'rock') ||
        (eleccionJugador === 'scissor' && eleccionComputadora === 'paper')
    ) {
        playerScore++;
        return '¡You win this round!';
    } else {
        computerScore++;
        return '¡You lost this round!';
    }
}

// Asignar los eventos a los botones
document.getElementById('piedra').addEventListener('click', function() {
    jugar('rock');
});
document.getElementById('papel').addEventListener('click', function() {
    jugar('paper');
});
document.getElementById('tijera').addEventListener('click', function() {
    jugar('scissor');
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
            mostrarResultadoFinal("¡Congratulations, you won the best of 3!");
        } else if (computerScore === maxScore) {
            mostrarResultadoFinal("The computer won the best of 3. Try again!");
        }
    }
}

// Función para mostrar el resultado de una ronda
function mostrarResultado(resultado, eleccionJugador, eleccionComputadora) {
    const resultText = document.getElementById('resultText');
    resultText.innerHTML = `Your choice: ${eleccionJugador}<br>Computer chose: ${eleccionComputadora}<br>${resultado}`;

    if (resultado.includes('¡You win')) {
        resultText.style.color = 'green'; // Verde si gana el jugador
    } else if (resultado.includes('¡You lost')) {
        resultText.style.color = 'red'; // Rojo si gana la computadora
    } else {
        resultText.style.color = 'blue'; // Azul si es empate
    }
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

    if (mensaje.includes('Congratulations')) {
        resultText.style.color = 'green'; // Verde si gana el jugador
    } else {
        resultText.style.color = 'red'; // Rojo si gana la computadora
    }
}

// Evento para el botón de reinicio
document.getElementById('resetButton').addEventListener('click', reiniciarJuego);

// Función para reiniciar el juego
function reiniciarJuego() {
    playerScore = 0;
    computerScore = 0;
    actualizarPuntaje();
    document.getElementById('resultText').textContent = "The game has been reset. Good luck!";
}
