const form = document.getElementById("formPersona");
const tabla = document.getElementById("tablaPersonas");

function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    let altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    // Si el numero ingresado en altura es mayor a 3 se da por echo que esta en centimetros
    if (altura > 3) {
        altura = altura / 100;
    }

    const imc = calcularIMC(peso, altura);

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

    tabla.appendChild(fila);

    form.reset();
});
tabla.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnEliminar")) {
        e.target.closest("tr").remove();
    }
});
