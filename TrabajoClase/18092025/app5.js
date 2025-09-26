//Apolonio Villagómez Leonardo
//Programación Web II
//Grupo 1710
//FES Aragón

var productos = 
[
    {nombre: 'Cafe', precio: 20},
    {nombre: 'Vaso de jugo', precio: 15},
    {nombre: 'Chilaquiles sencillos', precio: 25},
    {nombre: 'Arroz con huevo', precio: 25},
    {nombre: 'Coctel de fruta', precio: 20}
];

var carrito = [];
var saldo = 100;
var passAdmin = "huevosconarroz1"; //Contraseña de administrador

//Menú de administrador.
        //Imprimir menú.
        function menuAdmin()
        {
            var menu = "Menu de aministrador. Elija lo que desee hacer.\nNota: Solo se pueden tener hasta 10 productos registrados.\n\n"
            for(var i=0 ; i<productos.length ; i++)
            {
                menu += (i+1) + " " + productos[i].nombre + " - $" + productos[i].precio + " (Editar)\n";
            }

            if(productos.length < 10)
            {
                menu += "\n" + (productos.length + 1) + ". Agregar nuevo producto.\n";
            }
            
            if(productos.length > 1)
            {
                menu += (productos.length + 2) + ". Eliminar orden.\n";
            }

            menu += (productos.length + 3) + ". Cerrar sesion.\n";
            return menu;
        }

        //Editar producto ya existente.
        function editarProd(index)
        {
            var nombreN = prompt("Ingrese nuevo nombre para reemplazar a "+ productos[index].nombre + ":");
            var precioN = Number(prompt("Ingrese nuevo precio:"));
            if(!isNaN(precioN) && precioN > 0)
            {
                productos[index].nombre = nombreN;
                productos[index].precio = precioN;
                console.log("Producto actualizado.");
            }else
            {
                console.log("Ha ocurrido un error.");
            }
        }

        //Agregar producto a la lista (Max 10).
        function agregarProd()
        {
            if(productos.length >= 10)
            {
                console.log("No se pueden agregar mas productos.");
                return;
            }

            var nombre = prompt("Ingrese el nombre del nuevo producto:");
            var precio = Number(prompt("Ingrese el precio del nuevo producto:"));

            if(!isNaN(precio) && precio > 0)
            {
                productos.push({nombre: nombre, precio: precio});
                console.log("Se ha agregado el producto.");
            }else
            {
                console.log("Ha ocurrido un error.");
            }
        }

        function eliminarProd(index)
        {
            if(index >= 0 && index < productos.length)
            {
                var productoElim = productos.splice(index, 1)[0];
                console.log('Producto "' + productoElim.nombre + '" eliminado de la lista.');
            }else
            {
                console.log("Valor invalido.")
            }
        }

//Funciones del menu de comprador.

        //Función del menú del comprador.
        function menuComp()
        {
            var msjmenu = "Bienvenido, por favor seleccione lo que desea comprar o hacer como comprador.\n\n";
            for (var i = 0; i < productos.length; i++) 
            {
                msjmenu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
            }

            //Opciones adicionales
            msjmenu += "\n" + (productos.length + 1) + ". Ver pedido y total actual\n";
            
            if(productos.length > 1)
            {
                msjmenu += (productos.length + 2) + ". Eliminar orden.\n";
            }
            
            msjmenu += (productos.length + 3) + ". Comprar (Salir)\n";

            var saldoAct = "Saldo actual: " + saldo;
            return msjmenu + "\n" + saldoAct;
        }

        //Función para agregar algun producto seleccionado.
        function agregarProducto(index)
        {
            var productoSeleccionado = productos[index];
            if(saldo > productoSeleccionado.precio ||saldo == productoSeleccionado.precio)
                {
                    carrito.push(productoSeleccionado);
                    saldo -= productoSeleccionado.precio;
                    console.log('Se ha agregado "' + productoSeleccionado.nombre + '" al pedido.');
                }else
                    {
                        console.log('No tienes saldo suficiente. Quita algo de tu pedido');
                    }
        }

        //Función para eliminar algun producto seleccionado.
        function eliminarProducto(index)
        {
            var productoSeleccionado = carrito[index];

            if(index >= 0 && index < carrito.length)
                {
                    carrito.splice(index, 1)[0];
                    saldo += productoSeleccionado.precio;
                    console.log('Se ha elminado "' + productoSeleccionado.nombre + '" del pedido. Tambien se devolvera el saldo correspondiente.');
                }else
                    {
                        console.log('No se ha encontrado el producto.');
                    }
            
        }

        //Función para mostrar el contenido actual.
        function mostrarCarrito()
        {
            if (carrito.length === 0) 
                {
                    console.log("No hay nada en el pedido.");
                } 
            else 
                {
                    var mensajeCarrito = "Pedido actual:\n";
                    var total = 0;
                    for (var i = 0; i < carrito.length; i++) 
                        {
                            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
                            total += carrito[i].precio;
                        }
                    mensajeCarrito += "\nTotal de la compra: $" + total;
                    console.log(mensajeCarrito);
                }
        }




//Ciclo main.
var opIni;
do
{
	opIni = prompt("Bienvenido al simulador de cafeteria.\nSeleccione el rol que tendrá.\n1,- Comprador\n2,- Administrador\n3,- Salir");
	opIni = Number(opIni);

    //Menu de comprador.
	if(opIni == 1)
	{
		var opComp;
		do
		{
			opComp = Number(prompt(menuComp()));

			// Verificación de opción seleccionada.
            if (isNaN(opComp) || opComp < 1 || opComp > productos.length + 3)
            {
                console.log("Opción no válida, por favor intenta de nuevo.");
            } else if (opComp >= 1 && opComp <= productos.length) 
                {
                    // Si es válido lo agrega.
                    agregarProducto(opComp - 1);
                } else if (opComp === productos.length + 1) 
                    {
                        // Mostrar contenido
                        mostrarCarrito();
                    }else if(opComp == productos.length + 2 && productos.lenght != 0)
                            {
                                eliminarProducto(Number(prompt("Ingresa el numero de producto a eliminar: ") - 1));
                            }
		} while (opComp !== productos.length + 3);

        console.log("Compra finalizada.");
        saldo = 100;

	}
    
    //Menu de administrador.
    else if(opIni == 2)
	{
        //Se pide contraseña.
		var pass = prompt("Ingrese la contraseña: ");
		if(pass == passAdmin)
		{
			var opAdmin;
			do
			{
				opAdmin = Number(prompt(menuAdmin()));
                

				if (isNaN(opAdmin) || opAdmin < 1 || opAdmin > productos.length + 3)
                {
                    console.log("Opción no válida, por favor intenta de nuevo.");
                } else if(opAdmin  >= 1 && opAdmin <= productos.length) 
                    {
                        // Editar producto
                        editarProd(opAdmin - 1);
                    } else if(opAdmin == productos.length + 1) 
                        {
                            // Agregar producto
                            agregarProd();
                        } else if(opAdmin == productos.length + 2 && productos.lenght != 0)
                            {
                                eliminarProd(Number(prompt("Ingresa el numero de producto a eliminar: ") - 1));
                            }
			}

            //Cierre de sesión.
			while(opAdmin !== productos.length + 3);
			console.log("Sesion de administrador cerrada.");
		}
		else
		{
			console.log("Contraseña incorrecta.");
		}
	}

}while(opIni != 3);

console.log("Programa terminado.");