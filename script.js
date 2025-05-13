let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${pad(minutes)}:${pad(seconds)}:${pad(centiseconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}

function updateDisplay() {
    const now = Date.now();
    elapsedTime = now - startTime;
    display.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
        isRunning = true;
        lapBtn.disabled = false;
        startBtn.disabled = true;
    }
});

pauseBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }
});

lapBtn.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = formatTime(elapsedTime);
        const li = document.createElement('li');
        li.textContent = `Vuelta ${laps.children.length + 1} - ${lapTime}`;
        laps.appendChild(li);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = '00:00:00';
    laps.innerHTML = '';
    startBtn.disabled = false;
    lapBtn.disabled = true;
});