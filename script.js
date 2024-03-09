const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapsDisplay = document.getElementById("laps");

let time = 0;
let intervalId;
let laps = [];

function displayTime() {
	const minutes = Math.floor(time / 6000);
	const seconds = Math.floor((time % 6000) / 100);
	const milliseconds = time % 100;
	timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

function start() {
	if (!intervalId) {
		intervalId = setInterval(() => {
			time++;
			displayTime();
		}, 10);
	}
}

function stop() {
	clearInterval(intervalId);
	intervalId = null;
}

function reset() {
	stop();
	time = 0;
	displayTime();
}

function lap() {
	const lapTime = time;
	laps.push(lapTime);
	const lapElement = document.createElement("li");
	lapElement.textContent = `Lap ${laps.length}: ${timeDisplay.textContent}`;
	lapsDisplay.appendChild(lapElement);
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);