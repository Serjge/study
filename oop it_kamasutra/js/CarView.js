function CarView(owner) {
  this._owner = owner;
}
CarView.prototype = {
  render: function (containerId) {
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

    let that = this;

    this._processEls(this._startButtons, function (startButton) {
      startButton.addEventListener('click', function (ev) {
        that._carStartListener(ev);
      });
    });
  },

  drawStatus: function (status) {
    this._processEls(this._statusLabels, function (item) {
      item.innerHTML = status;
    });
  },

  _processEls: function (array, process) {
    let that = this;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      process.apply(this, [item]);
    }
  },
  _carStartListener: function (ev) {
    this._owner.start(ev);
  },
};
