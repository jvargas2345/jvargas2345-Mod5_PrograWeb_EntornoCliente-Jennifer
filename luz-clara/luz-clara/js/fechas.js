//FECHAS CON DATE - Fechas.js
const hoy = new Date(); //Declara fecha y hora actual
console.log(hoy.getFullYear());//Año
console.log(hoy.getMonth()+1); //Mes: empieza en 0
console.log(hoy.getDate());//Dia del mes
console.log(hoy.toLocaleDateString("es-CR"));//Formato en Costa Rica
const sesion = new Date(2026, 11, 5);
console.log(hoy.getFullYear);//año = 2026;