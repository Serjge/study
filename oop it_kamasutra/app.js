function startCarListener() {
	let randomNumber = Math.random();
	if (randomNumber > 0.5) {
		carStarted();
	} else {
		carCannotBeStarted();
	}
}

function drawStatus(status) {
	statusLabel.innerHTML = status;
}
function carStarted() {
	drawStatus('Car have started');

	startButton.classList.add('hide');

	gearBoxStart()
	plannedCrashStarted()

}

function carCannotBeStarted() {
	drawStatus("Car can't be started");

}

function gearBoxStart() {
	let gearBoxValue = 1

	gearBoxValueabel.innerHTML = gearBoxValue
	function incrementGearBoxValue() {
		if (gearBoxValue < 5) {
			gearBoxValue++
			gearBoxValueabel.innerHTML = gearBoxValue
		}
	}

	gearBoxInterval = setInterval(incrementGearBoxValue, 1000);

}

function plannedCrashStarted() {
	function engineCrash() {
		drawStatus('Engine Crashed');
		console.log('Engine Crashed');
		startButton.classList.remove('hide');

		gearBoxValueabel.innerHTML = 'N'
		clearInterval(gearBoxInterval)
	}
	setTimeout(engineCrash, 3000);
}

const startButton = document.querySelector('#start_car');
const statusLabel = document.querySelector('#status');
const gearBoxValueabel = document.querySelector('#gearBoxValue');
startButton.addEventListener('click', startCarListener);

let gearBoxInterval
