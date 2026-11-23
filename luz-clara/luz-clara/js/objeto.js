//objeto.js - primer contacto con un vector de objetos
const tarifas = [
  {servicio: "Individual", precio: 45000}, //cada{ } es un objeto
  {servicio: "familiar", precio: "75000"},
];

for(const t of tarifas){
  //Recorrer los objetos
  console.log('${t.servicio}: ${t.precio}');
}