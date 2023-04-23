function timerEnd() {
  const timeNow = Date.now();

  let timerDeadline = localStorage.getItem("timer_deadline");
  if (timerDeadline !== null && timeNow < timerDeadline) {
    const selector = document.querySelector(".info1");
    startTimer(timerDeadline - timeNow, selector);
  } else {
    const newDeadline = timeNow + 4 * 60 * 60 * 1000;
    localStorage.setItem("timer_deadline", newDeadline);
    timerEnd();
  }
}
function startTimer(duration, selector) {
  let intervalId = setInterval(function () {
    console.log(Date.now());
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((duration / 1000 / 60) % 60);
    let seconds = Math.floor((duration / 1000) % 60);
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    selector.textContent = `До кінця акції: ${
      hours + ":" + minutes + ":" + seconds
    }`;
    duration -= 1000;
    if (duration < 0) {
      clearInterval(intervalId);
      timerEnd();
    }
  }, 1000);
}
timerEnd();
