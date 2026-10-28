
const numero1 = document.getElementById("numero");
const respuesta = document.getElementById("respuesta");


numero1.addEventListener("input", function () {
    let numero = Number(numero1.value);

    if (numero1.value === "") {
        respuesta.textContent = "";
    } else if (numero === 21) {
        respuesta.textContent = "¡Felicidades! Adivinaste";
    } else if (numero < 21) {
        respuesta.textContent = "Más arriba";
    } else {
        respuesta.textContent = "Más abajo";
    }
});

const gustos = document.getElementById("gustos");
const imagen = document.getElementById("imagen-gusto");
const resultado = document.getElementById("resultado-gustos")

gustos.addEventListener("change", function() {

    if (gustos.value === "futbol") {
        imagen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3DqZQjDE7eX0lRukJuVUiDwqqgza-VLfREAjnMFkdw&s=10";
        imagen.alt = "futbol";
        resultado.textContent = "Bayern Munchen";
    } else if (gustos.value === "pelicula") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSACPmph-kGt1HOwatBwJpaumJ0Dim7HAOujhkoHMsqxg&s=10";
        imagen.alt = "pelicula";
        resultado.textContent = "Scary movie";
    } else if (gustos.value === "carro") {
        imagen.src = "https://media-assets.mazda.eu/image/upload/q_auto,f_auto,w_768/mazdaes/globalassets/cars/2027-mazda-cx-30/assets/mme-mazda-cx-30-gallery-navigation-mobile-1.jpg?rnd=4a253a";
        imagen.alt = "Carro";
        resultado.textContent = "Mazda CX30";
    } else {
        imagen.src = "";
        imagen.alt = "";
    }
})

const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    alert ("Gracias! por tu paciencia y entrega.")
})