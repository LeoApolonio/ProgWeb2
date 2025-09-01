let optUser = prompt('Seleccion de libros\n1,- Libros\n2,-Peliculas\n3,-Juegos');

switch(optUser)
{
    case "1":
        console.log("Principito");
        break;

    case "2":
        console.log("Matrix");
        break;

    case "3":
        console.log("FIFA");
        break;

    default:
        console.log("Opcion no valida");
        break;
}