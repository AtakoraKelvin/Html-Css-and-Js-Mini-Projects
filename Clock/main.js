const hourHand = document.querySelector(".hour-hand");
const minutesHand = document.querySelector(".minutes-hand");
const secondsHand = document.querySelector(".seconds-hand");

function clock() {
    let date = new Date();

    // console.log(date.getHours(), date.getMinutes(), date.getSeconds());

    let hourToDegree = (date.getHours() / 12) * 360;
    let secondsToDegree = (date.getSeconds() / 60) * 360;
    let minutesToDegree = (date.getMinutes() / 60) * 360;

    hourHand.style.setProperty("--H-degrees", hourToDegree + "deg");
    minutesHand.style.setProperty("--M-degrees", minutesToDegree + "deg");
    secondsHand.style.setProperty("--S-degrees", secondsToDegree + "deg");
}

clock();

setInterval(clock, 1000);
