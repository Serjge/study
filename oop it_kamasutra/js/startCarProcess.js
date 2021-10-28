
function startCarProcess(containerId) {

	function render() {

		const container = document.getElementById(containerId)
		container.innerHTML = `
		<div class="car">
				<div class="car__infopanel">
			<label for="">status:</label><span data-role="status"> off </span>
		</div>
		<div class="car__controls">
			<input data-role="start_car" type="button" value="Start" />
			<hr>
			<label for="">Gear box:</label><span data-role="gearBoxValue">N</span>
		</div>
		</div>
	
	`

		// 	<div class="car" id="car1">
		// 	<div class="car__infopanel">
		// 		<label for="">status:</label><span data-role="status"> off </span>
		// 	</div>
		// 	<div class="car__controls">
		// 		<input data-role="start_car" type="button" value="Start" />
		// 		<hr>
		// 		<label for="">Gear box:</label><span data-role="gearBoxValue">N</span>
		// 	</div>
		// </div>
	}

	function startCarListener() {
		let randomNumber = Math.random();
		if (randomNumber > 0.5) {
			carStarted();
		} else {
			carCannotBeStarted();
		}
	}

	function drawStatus(status) {
		processEls(statusLabels, function (item) {
			item.innerHTML = status;
		})
	}

	function carStarted() {
		drawStatus('Car have started');
		processEls(startButtons, function (item) {
			item.classList.add('hide');
		})
		gearBoxStart()
		plannedCrashStarted()
	}

	function carCannotBeStarted() {
		drawStatus("Car can't be started");
	}

	function gearBoxStart() {
		let gearBoxValue = 1
		processEls(gearBoxValueabels, function (item) {
			item.innerHTML = gearBoxValue
		})


		function incrementGearBoxValue() {
			if (gearBoxValue < 5) {
				gearBoxValue++
				processEls(gearBoxValueabels, function (item) {
					item.innerHTML = gearBoxValue
				})
			}
		}
		gearBoxInterval = setInterval(incrementGearBoxValue, 1000);
	}

	function plannedCrashStarted() {
		function engineCrash() {
			drawStatus('Engine Crashed');
			processEls(startButtons, function (item) {
				item.classList.remove('hide');
			})
			processEls(gearBoxValueabels, function (item) {
				item.innerHTML = 'N'
			})
			clearInterval(gearBoxInterval)
		}
		setTimeout(engineCrash, 3000);
	}

	function processEls(array, process) {
		for (let i = 0; i < array.length; i++) {
			const item = array[i];
			process(item)
		}
	}

	render()

	let gearBoxInterval
	const startButtons = document.getElementById(containerId).querySelectorAll("[data-role='start_car']");
	const statusLabels = document.getElementById(containerId).querySelectorAll("[data-role='status']");
	const gearBoxValueabels = document.getElementById(containerId).querySelectorAll("[data-role='gearBoxValue']");
	processEls(startButtons, function (item) {
		item.addEventListener('click', startCarListener);
	})
}