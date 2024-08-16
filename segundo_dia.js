const readlineSync = require('readline-sync');

let nombre = readlineSync.question('¿Cuál es tu nombre? ');

let edad = readlineSync.question('¿Cuántos años tienes? ');

let lenguaje = readlineSync.question('¿Qué lenguaje de programación estás estudiando? ');

console.log(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

let opcion = readlineSync.question(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

if (opcion == 1)
{
    console.log("¡Muy bien, sigue estudiando y tendrás mucho éxito!");
}
else
{
    console.log("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}
