//Vectores.js - Un vector (array) guarda varios valores en orden 
const servicios = ["Retrato", "Familiar", "Eventos"];
console.log(servicios[0]);//Posicion 0: El primero = Retrato
console.log(servicios, length);//Cantidad de elementos que tiene el vector
servicios.push("Perfil");//Agrega al final
console.log(servicios.join(", ")); // une todo en un texto
const ultimo = servicios.pop(); // quita el último
console.log(ultimo, servicios.length); // el quitado y cuántos quedan
