// Actualiza el reloj cada segundo
    setInterval(updateClock, 1000);


function updateClock() {
    const time = new Date(); //obtener la hora actual

    // Reloj analógico
    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");

    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourDeg = (hours * 30) + (0.5 * minutes);
    const minuteDeg = (minutes * 6) + (0.1 * seconds);
    const secondDeg = seconds * 6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    // Reloj digital
    const digitalClock = document.getElementById("digitalClock");
    const ampm = time.getHours() >= 12 ? "PM" : "AM"; //condicion AM PM
    const digitalTime = `${formatTime(time.getHours() % 12)}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm}`; //formatTime funcion para asegurarse de poner el 0
    digitalClock.textContent = digitalTime; 
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time; //CONDICION 0 A LA izquierda
}
