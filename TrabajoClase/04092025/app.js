let frutas = ["manzana", "mango", "platano", "melon", "naranja", "mandarina", "pera", "toronja"];

/*
Para el for each se declara una nueva variable, de preferencia que sea 
nombrada con el singular del nombre de la variable original
*/

// Imprime indices
for(let fruta in frutas)
    {
        console.log(fruta);
    }

    console.log("---------------------------------------------------");

//Imprime el contenido
for(let fruta of frutas)
    {
        console.log(fruta);
    }