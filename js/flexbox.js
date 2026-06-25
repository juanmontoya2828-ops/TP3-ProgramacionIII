// Arreglo de 6 productos 
const productos = [
    { nombre: "Café", precio: 1200 },
    { nombre: "Tostado", precio: 900 },
    { nombre: "Jugo", precio: 700 },
    { nombre: "Medialuna", precio: 800 },
    { nombre: "Budín", precio: 2500 },
    { nombre: "Galletas", precio: 3300 }
];

const btnOrdenar = document.getElementById("btnOrdenar");

btnOrdenar.addEventListener("click", () => {
  const ordenados = [...productos].sort((a, b) => a.precio - b.precio);
  renderProductos(ordenados);
});


// Seleccionamos el contenedor donde irán las tarjetas
const contenedor = document.getElementById("contenedorTarjetas");

// Función que renderiza las tarjetas en pantalla
function renderProductos(lista) {
    contenedor.innerHTML = ""; // Limpia el contenedor

    lista.forEach((prod) => {
        const div = document.createElement("div");
        div.className = "tarjeta";

div.innerHTML = `
  <h3>${prod.nombre}</h3>
  <p>Precio: $${prod.precio}</p>
`;



        contenedor.appendChild(div);
    });
}

// Render inicial
renderProductos(productos);
