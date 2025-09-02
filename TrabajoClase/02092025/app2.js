let max = parseInt(prompt("Ingresa el numero max: "))
let min = parseInt(prompt("Ingresa el numero min: "))

const num = Math.floor(Math.random() * (max - min + 1)) + min;

alert(num);