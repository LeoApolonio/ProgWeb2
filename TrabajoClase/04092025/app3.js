function saludar(nombre)
{
    console.log("Hola" + nombre);
}

function sumar(n1,n2)
{
    return parseInt(n1) + parseInt(n2);
}

let numero1 = prompt("Num1 = ");
let numero2 = prompt("Num2 = ");

console.log("El total de la suma es " + sumar(numero1, numero2));