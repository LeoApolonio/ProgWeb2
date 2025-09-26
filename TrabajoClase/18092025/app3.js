var miCarro = new Object();
miCarro.marca = 'Toyota';
miCarro.modelo = 'Supra';
miCarro.color = 'rojo';

console.log(miCarro);

// //Esto es un arreglo, no es lo mismo que un objeto.
// let frutas = ["banana", "manzana", "pera"];
// console.log(frutas);

// var miCarro={
//     marca: 'Toyota',
//     modelo: 'supra',
//     color: 'rojo'
// }
// console.log(miCarro.marca)

var perro = 
{
    nombre: 'Shayla',
    color: 'Sal pimienta',
    edad: 28,
    talla: 'mediana',
    enemigos: ['Otros perros', 'gatos', 'baños']
}

console.log(perro);
//Leer elementos
console.log(perro.color);
console.log(perro.enemigos[2]);

//Añadir elemetos
perro.raza = 'schnuzer';
console.log(perro);

//Actualizar
perro.edad = 35;
console.log(perro.edad)

//Eliminar
delete perro.edad;
console.log(perro);