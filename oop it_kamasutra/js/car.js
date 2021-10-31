function Car(containerId) {
  that = this;
  this._engine = new Engine();
  this._gearBox = new GearBox();

  this._view = new CarView();

  this._view.addEventListener('start', function () {
    that.start();
  });

  this._logger = new Logger();

  // this._render(containerId);
  this._view.render(containerId);
}

Car.prototype = {
  start: function () {
    let startResult = this._engine.start();
    if (startResult == true) {
      this._view.drawStatus('Car have started');
      this._view.onCarStarted();
      this._gearBox.start();
    } else {
      this._view.drawStatus("Car can't be started. Try again!");
    }
    this._logger.log('started');
  },

  _carStarted: function () {
    this._logger.log('ok');
    this._view.drawStatus('Car have started');
  },

  _carCannotBeStarted: function () {
    this._logger.log('Not ok');
    this._view.drawStatus("Car can't be started");
  },
};
