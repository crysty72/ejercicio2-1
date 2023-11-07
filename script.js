
function mostrarResultado() {
    const numeroA = parseFloat(document.getElementById("numeroA").value);
    const numeroB = parseFloat(document.getElementById("numeroB").value);
    const resultadoElement = document.getElementById("resultado");

    function callback() {
        resultadoElement.textContent = `La suma de ${numeroA} y ${numeroB} es ${numeroA + numeroB}.`;
    }

    suma(numeroA, numeroB, callback);
}

function suma(a, b, callback) {
    let c = a + b;
    callback();
}

const calcularButton = document.getElementById("calcularButton");
calcularButton.addEventListener("click", mostrarResultado);