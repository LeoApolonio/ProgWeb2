var productos = 
[
    {nombre: 'camisa', precio: 32},
    {nombre: 'pantalon', precio: 500},
    {nombre: 'zapatos', precio: 400},
    {nombre: 'sombrero', precio: 200}
];

var carrito = [];
var saldo = 1200;

//Función para agregar algun producto seleccionado.
function agregarProducto(index)
{
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Se ha agregado "' + productoSeleccionado.nombre + '" al carrito.');
}

//Función para eliminar algun producto.
function eliminarProducto(Producto)
{
    carrito.forEach()
}

//Función para mostrar el contenido actual.
function mostrarCarrito()
{
    if (carrito.length === 0) 
        {
            console.log("El carrito está vacío.");
        } 
    else 
        {
            var mensajeCarrito = "Carrito de compras:\n";
            var total = 0;
            for (var i = 0; i < carrito.length; i++) 
                {
                    mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
                    total += carrito[i].precio;
                }
            mensajeCarrito += "\nTotal: $" + total;
            console.log(mensajeCarrito);
        }
}

//Función del menú.
function Menu()
{
    var msjmenu = "Bienvenido al simulador de un carrito de compra.\nPor favor, seleccione los productos que desea comprar.\n";
    for (var i = 0; i < productos.length; i++) 
    {
        msjmenu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }

    //Opciones adicionales
    msjmenu += (productos.length + 1) + ". Ver carrito y total actual\n";
    msjmenu += (productos.length + 2) + ". Comprar (Salir)\n";

    return msjmenu;
}

//Ciclo main. Se repetirá mientras el usuario no seleccione la última opción del primer arreglo.
var opcion;
do 
{
    opcion = prompt(Menu());
    opcion = Number(opcion);

    // Verificación de opción seleccionada.
    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 2)
        {
            console.log("Opción no válida, por favor intenta de nuevo.");
        } else if (opcion >= 1 && opcion <= productos.length) 
            {
                // Si es válido lo agrega.
                agregarProducto(opcion - 1);
            } else if (opcion === productos.length + 1) 
                {
                    // Mostrar contenido
                    mostrarCarrito();
                }
} while (opcion !== productos.length + 2);

// prompt(`Seleccione un producto para agregar al carrito:
//     \n1. Camisa - $300
//     \n2. Pantalón - $500
//     \n3. Zapatos - $800
//     \n4. Sombrero - $200
//     \n5. Ver Carrito y total
//     \n6. Salir`)

