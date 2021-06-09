const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const btnStart = document.getElementById('start');
const btnLap = document.getElementById('lap');
const btnReset = document.getElementById('reset');
const time = document.querySelector('.time');
const lapList = document.getElementById('lapList')
let interval = -1;


let hoursCount = 0;
let minutesCount = 59;
let secondsCount = 55;

function updateTime() {

    // Update Seconds
    secondsCount = secondsCount + 1;

    // Update Minutes
    if (secondsCount === 60) {
        secondsCount = 0;
        minutesCount++;
    }

    // Update Hours
    if (minutesCount === 60) {
        minutesCount = 0;
        hoursCount++;
    }

    // Update DOM
    seconds.innerText = secondsCount < 10 ? "0" + secondsCount : secondsCount;
    minutes.innerText = minutesCount < 10 ? "0" + minutesCount : minutesCount;
    hours.innerText = hoursCount < 10 ? "0" + hoursCount : hoursCount;
}

// Event Listeners
btnStart.addEventListener('click', function () {
    if (interval == -1) {
        btnStart.innerHTML = "PAUSE";
        interval = setInterval(updateTime, 1000);
        btnStart.classList.add('pause');
    }
    else {
        btnStart.innerHTML = "START";
        clearInterval(interval);
        interval = -1;
    }
});

btnReset.addEventListener('click', function () {
    hoursCount = 0;
    minutesCount = 0,
    secondsCount = 0;
    seconds.innerText = "0" + secondsCount;
    minutes.innerText = "0" + minutesCount;
    hours.innerText = "0" + hoursCount;
    clearInterval(interval);
    interval = -1;
    btnStart.innerHTML = "START";
})


btnLap.addEventListener('click', function () {
    var lapTime = lapList.appendChild(document.createElement('li'));
    lapTime.innerHTML = time.innerText;
})






