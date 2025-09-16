let seguirComprando = true;
const carrito = [];

while(seguirComprando)
    {
        let item = prompt("¿Qué desea comprar? Escriba lo que quiere agregar.");
        carrito.push(item);

        for(let item of carrito)
        {
            console.log(carrito);
        }
        let desci = prompt("Este es tu carrito actualmente ¿Deseas continuar?");
        if(desci == "no")
            {
                console.log("Gracias por su compra");
                break;
            }

    }