//Función declarativa
//Se ejecutan desde el principio sin necesidad de mandarlas a llamar.
function NumeroAleatorio(min, max)
{
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(NumeroAleatorio(1,11));


//Función expresada
//Se ejecutan en el momento en el que se manden a llamar.
const Minumero = function NumeroAleatorio(min, max)
{
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(Minumero(2,20));