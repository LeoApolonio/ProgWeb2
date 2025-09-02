//Juego.

let vidasPlayer = 3;
let max = 10;
let min = 1;

while(vidasPlayer != 0)
    {
        let numPlayer = parseInt(prompt("Adivina el numero entre 1 y 10.\nActualmente tienes " + vidasPlayer + " vidas.\nEscribe un número del 1 al 10."));        
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if(num == numPlayer)
            {
                alert("Felicidades, ganaste. El número elegido es: " + num);
                break;
            }else
                {
                    alert("El numero escogido por la página es: " + num + "\nPerdiste una vida.")
                    vidasPlayer = vidasPlayer-1;
                    if(vidasPlayer == 0)
                        {
                            alert("Perdiste tus vidas, fin del juego.");
                            break;
                        }
                }
    }