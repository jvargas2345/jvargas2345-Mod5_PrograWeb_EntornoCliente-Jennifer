// dom.js - Recorre el árbol de nodos de index.html (al final del body)

console.log(`Título de la página: ${document.title}`);

const raiz = document.documentElement;
console.log(`Raíz: ${raiz.tagName} · hijos: ${raiz.children.length}`);

//Accede al nodo <body>
const cuerpo = document.body;
for (const hijo of cuerpo.children) {
  if (hijo.tagName !== "SCRIPT") {
    console.log(`Hijo de <body>: ${hijo.tagName} · id ${hijo.id}`);
  }
}
//Children [1]=Segundo hijo de <body> (posicion 1: <main>)
const principal = cuerpo.children[1];
//ParentElement Sube un nivel : El padre de <main> es <body>
console.log(`Padre de <main>: ${principal.parentElement.tagName}`);
console.log(`Primer hijo de <main>: ${principal.firstElementChild.id}`);
console.log(`Secciones dentro de <main>: ${principal.children.length}`);
