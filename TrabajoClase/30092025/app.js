/**
 * Apolonio Villagómez Leonardo
 * Programación Web II
 * 
 */


let tareas = [];

//Función para mostrar menú

function mostrarTareas()
{
    return parseInt(prompt
        (`
            Bienvenido al simulador de tareas.
            Opciones disponibles\n
            1,- Agregar tarea.
            2,- Ver todas las tareas.
            3,- Marcar tarea como completada.
            4,- Eliminar tarea.
            5,- Salir.       
        `));
        
}

//Función para agregar tareas
function agregarTarea()
{
    let nombre = prompt("Introduce el nombre de la tarea a añadir.");
    if(nombre)
    {
        let tarea = 
        {
            nombre: nombre,
            completado: false 
        };

        tareas.push(tarea);
        alert(`La tarea se ha agregado correctamente,`)

    }else
    {
        alert(`El nombre de la tarea no puede estar vacio`)
    }
}

//Función para eliminar tareas
function eliminarTarea()
{
    let nombre = prompt("Introduce el nombre de la tarea a eliminar.");
    if(nombre)
    {
        let tarea = 
        {
            nombre: nombre,
            completado: false 
        };

        tareas.splice(tarea);
        alert(`La tarea se ha eliminado correctamente.`)

    }else
    {
        alert(`El nombre de la tarea no puede estar vacio.`)
    }
}

//Función para ver las tareas inscritas
function verTareas()
{
    if(tareas.length == 0)
    {
        alert(`No hay tareas en la lista.`)
    }else
    {
        let mensaje = "Lista de tareas:\n";
        tareas.forEach
        ((tarea,index) => 
        {
            mensaje += `${index + 1},- ${tarea.nombre} [${tarea.compleado?"Completado":"Pendiente"}]\n`;
            
        });
        alert(mensaje);
    }
}

//Función para marcar como completas o pendientes las tareas
function marcarTarea(index)
{
    var mrcTr = prompt(`¿Se ha completado la tarea "${tareas[index-1].nombre}"?\n1,- Si\n2,- No`);
    if(mrcTr == 1)
    {
        tareas[index-1].compleado = true;
        alert(`Se ha marcado la tarea "${tareas[index-1].nombre}" como completa.`)

    }else if(mrcTr == 2)
    {
        tareas[index-1].compleado = false;
        alert(`La tarea "${tareas[index-1].nombre}" sigue como "Pendiente".`)
    }else
    {
        alert(`Selección no válida.`);
    }

}

//Loop principal
var opIni;
do
{
    var opIni = parseInt(mostrarTareas());
    if(opIni == 1)
    {
        agregarTarea();
    }else if(opIni == 2)
    {
        verTareas();
    }else if(opIni == 3)
    {
        if(tareas.length == 0)
        {
            alert(`No hay tareas en la lista.`)
        }else
        {
            var modTar = prompt("Elige el numero de la tarea que deseas modificar.");
            marcarTarea(modTar);
        }
        
    }else if(opIni == 4)
    {
        if(tareas.length == 0)
        {
            alert(`No hay tareas en la lista.`)
        }else
        {
            eliminarTarea();
        }
        
    }else if(opIni == 5)
    {
        alert(`Fin del programa.`);
        break;
    }else
    {
        alert(`Seleccione una opción válida.`)
    }

}
while(opIni!= 5);