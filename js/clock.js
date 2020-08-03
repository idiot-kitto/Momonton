const clock = document.querySelector(".js-clock .clock__text");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    time = `${hours < 13 ? `AM ${hours}` : `PM ${hours - 12}`}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    clock.innerHTML = time;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();