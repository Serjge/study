function Car(containerId) {
  this._engine = new Engine();
  this._gearBox = new GearBox();

  this._render(containerId);
}

Car.prototype = {
  start: function () {
    let randomNumber = Math.random();

    if (randomNumber > 0.5) {
      this._carStarted();
    } else {
      this._carCannotBeStarted();
    }

    console.log('started');
  },

  _carStarted: function () {
    console.log('ok');
  },

  _carCannotBeStarted: function () {
    console.log('Not ok');
  },

  _render: function (containerId) {
    const container = document.getElementById(containerId);
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
		`;
  },
};
