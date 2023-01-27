function actualizarReloj() {

    // Obtener la fecha actual

    var fecha = new Date();

    // Obtener las horas, minutos y segundos

    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    // Añadir un cero a la izquierda si es necesario

    horas = añadirCero(horas);
    minutos = añadirCero(minutos);
    segundos = añadirCero(segundos);

    // Crear la cadena de tiempo

    var tiempo = horas + ":" + minutos + ":" + segundos;

    // Obtener el elemento donde se mostrará el reloj

    var reloj = document.querySelector(".container--clock");

    // Actualizar el contenido del elemento con la hora actual

    reloj.innerHTML = tiempo;

}

function añadirCero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Actualizar el reloj cada segundo

setInterval(actualizarReloj, 0);