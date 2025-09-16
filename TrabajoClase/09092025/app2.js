const frutas = ["Banana"];
frutas.push("sandia");      //Final
frutas.unshift("sandia");   //Inicio
console.log(frutas);


frutas.push("Manzana");     //Final
frutas.unshift("Uvas");     //Inicio
frutas.push("Naranja");     //Final
frutas.unshift("Mandarina") //Inicio
console.log(frutas);

for(let fruta of frutas)
    {
        console.log(fruta);
    }
    
console.log("--------------------------------------------------");
//Eliminar
frutas.pop();               //Elimina el final
frutas.shift();             //Elimina el primero
for(let fruta of frutas)
    {
        console.log(fruta);
    }

// const puerto = 3306;
// puerto = 3308;
// console.log(puerto);

