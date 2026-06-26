const form = document.getElementById("formPersona");
const tabla = document.getElementById("tablaPersonas");

// Logica para calcular el IMC
function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

// Se obtienen los valores
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    let altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

// Convertir altura de centímetros a metros (177 = 1.77)
    if (altura > 3) {
        altura = altura / 100;
    }

// Calcular IMC con la altura ya procesada
    const imc = calcularIMC(peso, altura);

// Se crea fila con los datos ingresados
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
        <td>${altura}</td>
        <td>${peso}</td>
        <td>${imc}</td>
        <td><button class="btnEliminar">Eliminar</button></td>
    `;

// Se agrega fila
    tabla.appendChild(fila);

// Limpia formularios
    form.reset();
});

// Delegacion para eliminar filas
tabla.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnEliminar")) {
        e.target.closest("tr").remove();
    }
});
