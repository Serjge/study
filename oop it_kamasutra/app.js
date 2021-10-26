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
  console.log('Car have started');

  startButton.classList.add('hide');

  function engineCrash() {
    drawStatus('Engine Crashed');
    console.log('Engine Crashed');
    startButton.classList.remove('hide');
  }
  setTimeout(engineCrash, 5000);
}

function carCannotBeStarted() {
  drawStatus("Car can't be started");
  console.log("Car can't be started");
}

const startButton = document.querySelector('#start_car');
const statusLabel = document.querySelector('#status');
startButton.addEventListener('click', startCarListener);
