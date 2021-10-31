function GearBox() {
  this.gearBoxValue = 'N';
  this._logger = new Logger();
}

GearBox.prototype = {
  start: function () {
    this.gearBoxValue = 1;
    // processEls(gearBoxValueabels, function (item) {
    //   item.innerHTML = gearBoxValue;
    // });
    let self = this;
    gearBoxInterval = setInterval(function () {
      self._incrementGearBoxValue();
    }, 1000);
  },
  _incrementGearBoxValue: function () {
    if (this.gearBoxValue < 5) {
      this.gearBoxValue++;
    }
    this._logger.log('from this box: ' + this.gearBoxValue);
  },
};
