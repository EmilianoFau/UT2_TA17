function incrementar() {
    const numero = document.getElementById("contador");
    let valor = parseInt(numero.textContent, 10);
    numero.textContent = valor + 1;
}