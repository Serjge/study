function Car(containerId) {
  this._engine = new Engine();
  this._gearBox = new GearBox();

  this._logger = new Logger();

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

    this._logger.log('started');
  },

  _carStarted: function () {
    this._logger.log('ok');
  },

  _carCannotBeStarted: function () {
    this._logger.log('Not ok');
    this._drawStatus("Car can't be started");
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

    this._startButtons = document
      .getElementById(containerId)
      .querySelectorAll("[data-role='start_car']");
    this._statusLabels = document
      .getElementById(containerId)
      .querySelectorAll("[data-role='status']");
    this._gearBoxValueabels = document
      .getElementById(containerId)
      .querySelectorAll("[data-role='gearBoxValue']");
  },

  _drawStatus: function (status) {
    this._processEls(this._statusLabels, function (item) {
      item.innerHTML = status;
    });
  },
  _processEls: function (array, process) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      process(item);
    }
  },
};
