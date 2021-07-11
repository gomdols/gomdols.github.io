function getClock() {
    const date = new Date();
    let hour = 0;
    if (date.getHours() > 12) {
        hour = date.getHours() - 12;
    } else {
        hour = date.getHours();
    }
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clock.innerText = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`
}
getClock();
setInterval(getClock, 1000);