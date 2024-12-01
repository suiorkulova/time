let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

function startTimer() {
  timer = setInterval(updateTimer, 500);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTime();
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateTime();
}

function updateTime() {
  document.getElementById("hours").innerText = formatTime(hours);
  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// start
startButton.addEventListener("click", startTimer);

// stop
stopButton.addEventListener("click", stopTimer);

// reset
resetButton.addEventListener("click", resetTimer);



