function getClock() {
    const date = new Date();
    let hour = 0;
    let meridiem = "AM";
    if (date.getHours() > 12) {
        hour = date.getHours() - 12;
        meridiem = "PM"
    } else {
        hour = date.getHours();
        meridiem = "AM"
    }
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clock.innerText = `${meridiem} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`
}
getClock();
setInterval(getClock, 1000);