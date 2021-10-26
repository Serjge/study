function startCarListener() {
	let randomNumber = Math.random()
	if (randomNumber > 0.5) {
		alert("Car have started")
		function engineCrash() {
			alert('Engine Crashed')
		}
		setTimeout(engineCrash, 5000)
	} else {
		alert("Something wrong")
	}
}

const startButton = document.querySelector('#start_car')
startButton.addEventListener('click', startCarListener)