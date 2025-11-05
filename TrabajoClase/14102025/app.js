let inventario = [];
function mostrarMenu()
{
    return parseInt(prompt
        (`
            Opciones disponibles
            1,- Agregar producto
            2,- Mostrar todos los productos
            3,- Buscar productos por nombre
            4,- Salir

            Elige una opción:
        `));
}

function agregarProducto()
{
    let nombre = prompt("Ingresa nombre del producto:");
    let cantidad = parseInt("Ingresa cantidad del producto:");
    let precio = parseFloat("Ingresa el precio del producto:");

    if(cantidad > 0 && precio > 0)
    {
        let producto = 
        {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };

        inventario.push(producto);
        alert("Producto agregado");

    }else
        {
            alert("Cantidad y precio deben ser numeros positivos");
        }
}

function mostrarProducto()
{
    if(inventario.length == 0)
    {
        alert("Inventario vacio");
    }else
        {
            let mensaje = "Productos del inventario.\n";
            for(let i = 0; i < inventario.length; i++)
            {
                mensaje += `Producto: ${i+1}\n` +
                            `Nombre: ${inventario[i].nombre}\n`  +
                            `Precio: ${inventario[i].precio}\n`  +
                            `Precio: ${inventario[i].cantidad}\n`  +
                            "-----------------------------------------";

            }
        }
}

function buscarxNombre()
{
    if(inventario.length == 0)
    {
        alert("Inventario vacio");
    }else
        {
            invProduc = prompt( "Ingresa el nombre del producto");
            if(invProduc in inventario)
            {
                mensaje += `Producto: ${i+1}\n` +
                        `Nombre: ${inventario[i].nombre}\n`  +
                        `Precio: ${inventario[i].precio}\n`  +
                        `Precio: ${inventario[i].cantidad}\n`  +
                        "-----------------------------------------";
            }
        }
}