const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();

    const min = `${date.getMinutes()}`.padStart(2, 0);
    const sec = `${date.getSeconds()}`.padStart(2, 0);
    clock.innerText = `${min}:${sec}`;
}


getClock();
setInterval(getClock, 1000);