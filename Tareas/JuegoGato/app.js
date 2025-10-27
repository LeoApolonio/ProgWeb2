//Apolonio Villagómez Leonardo
//Programación Web II
//Grupo 1710
//FES Aragón

var tablero = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var turno = "X";
var jugando = true;

// Impresión del tablero.
function mostrarTablero() 
{
  var t = "";
  t += " " + tablero[0] + " | " + tablero[1] + " | " + tablero[2] + "\n";
  t += "-----------\n";
  t += " " + tablero[3] + " | " + tablero[4] + " | " + tablero[5] + "\n";
  t += "-----------\n";
  t += " " + tablero[6] + " | " + tablero[7] + " | " + tablero[8] + "\n";
  return t;
}

// Menú principal.
function menuPrincipal() 
{
  var menu = "=== Gato en JavaScript ===\n\n";
  menu += mostrarTablero() + "\n";
  menu += "Turno de: " + turno + "\n";
  menu += "Elija una posición (0 al 8):\n\n";
  menu += "0 | 1 | 2\n";
  menu += "3 | 4 | 5\n";
  menu += "6 | 7 | 8\n\n";
  menu += "9. Reiniciar juego\n";
  menu += "10. Salir";
  return menu;
}

// Verificar ganador.
function verificarGanador() 
{
  var combinaciones = 
  [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  
    for (var c of combinaciones) 
    {
        if (tablero[c[0]] === turno && tablero[c[1]] === turno && tablero[c[2]] === turno) 
        {
            return true;
        }
    }
  return false;
}

// Realizar jugada
function jugar(pos) 
{
  if (tablero[pos] !== " ") 
    {
        alert("Esa posición ya está ocupada");
        return false;
    }
  tablero[pos] = turno;

  if (verificarGanador()) 
    {
        alert("El ganador es " + turno);
        jugando = false;
        return true;
    }

  if (tablero.every(c => c !== " ")) 
    {
        alert("Empate");
        jugando = false;
        return true;
    }

  turno = (turno === "X") ? "O" : "X";
  return true;
}

// Reiniciar tablero.
function reiniciar() 
{
  tablero = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  turno = "X";
  jugando = true;
  alert("El tablero ha sido reiniciado.");
}

// Main loop.
var opcion;

do 
{
  opcion = prompt(menuPrincipal());
  if (opcion === null) break; // cancelar = salir
  opcion = Number(opcion);

  if (!jugando && opcion !== 9 && opcion !== 10) 
    {
        alert("El juego termino. Reinicia para volver a jugar.");
        continue;
    }

    if (opcion >= 0 && opcion <= 8) 
    {
        jugar(opcion);
    } else if (opcion === 9) 
    {
        reiniciar();
    } else if (opcion === 10)
    {
        alert("Cerrando juego.");
        break;
    } else 
    {
        alert("Opción invalida, intenta de nuevo.");
    }
} while (opcion !== 10);

alert("Gracias por jugar.");
