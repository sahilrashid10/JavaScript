    const start = document.querySelector('.start');
    const reset = document.querySelector('.reset');
    const pause = document.querySelector('.pause');
    const input = document.querySelector('input');
    const time = document.querySelector('.time');
    const modeSelect = document.getElementById('modeSelect');
    const fgRing = document.querySelector('.fg-ring');
    const lapList = document.querySelector('.lap-list');
    const darkToggle = document.querySelector('.dark-toggle');

    let seconds = 0, minutes = 0, hours = 0;
    let intervalId;
    let totalTime = 0;
    let currentMode = modeSelect.value;

    function updateDisplay() {
      let h = hours < 10 ? '0' + hours : hours;
      let m = minutes < 10 ? '0' + minutes : minutes;
      let s = seconds < 10 ? '0' + seconds : seconds;
      time.innerText = `${h}:${m}:${s}`;
    }

    function stopWatch() {
      seconds++;
      if (seconds === 60) {
        seconds = 0; minutes++;
        if (minutes === 60) {
          minutes = 0; hours++;
        }
      }
      updateDisplay();
    }

    function timerCountdown() {
      if (seconds === 0 && minutes === 0 && hours === 0) {
        clearInterval(intervalId);
        navigator.vibrate?.(500);
        const beep = new Audio('https://www.soundjay.com/button/beep-07.wav');
        beep.play();
        start.style.display = 'block';
        pause.style.display = 'none';
        return;
      }

      if (seconds === 0) {
        if (minutes === 0) {
          hours--; minutes = 59; seconds = 59;
        } else {
          minutes--; seconds = 59;
        }
      } else {
        seconds--;
      }
      updateDisplay();
      updateProgressRing();
    }

    function updateProgressRing() {
      let current = hours * 3600 + minutes * 60 + seconds;
      let progress = totalTime ? 377 - (current / totalTime) * 377 : 377;
      fgRing.style.strokeDashoffset = progress;
    }

    start.addEventListener('click', () => {
      start.style.display = 'none';
      pause.style.display = 'block';

      if (currentMode === 'stopwatch') {
        intervalId = setInterval(stopWatch, 1000);
      } else {
        const mins = parseInt(input.value);
        if (isNaN(mins) || mins <= 0) {
          alert("Enter a valid number > 0");
          start.style.display = 'block';
          pause.style.display = 'none';
          return;
        }
        totalTime = mins * 60;
        hours = Math.floor(mins / 60);
        minutes = mins % 60;
        seconds = 0;
        updateDisplay();
        updateProgressRing();
        intervalId = setInterval(timerCountdown, 1000);
      }
    });

    pause.addEventListener('click', () => {
      clearInterval(intervalId);
      pause.style.display = 'none';
      start.style.display = 'block';
    });

    reset.addEventListener('click', () => {
      clearInterval(intervalId);
      start.style.display = 'block';
      pause.style.display = 'none';
      input.value = '';
      hours = minutes = seconds = 0;
      updateDisplay();
      fgRing.style.strokeDashoffset = 377;
      lapList.innerHTML = '';
    });

    modeSelect.addEventListener('change', () => {
      currentMode = modeSelect.value;
      input.style.display = currentMode === 'timer' ? 'block' : 'none';
      reset.click();
    });

    input.addEventListener('input', () => {
      if (currentMode === 'timer') {
        const mins = parseInt(input.value) || 0;
        hours = Math.floor(mins / 60);
        minutes = mins % 60;
        seconds = 0;
        updateDisplay();
        updateProgressRing();
      }
    });

    input.addEventListener('keydown', (e) => {
      if (['-', 'e', '+', '.'].includes(e.key)) e.preventDefault();
    });

    // 🏁 LAP logic
    time.addEventListener('dblclick', () => {
      if (currentMode === 'stopwatch' && (seconds > 0 || minutes > 0 || hours > 0)) {
        const li = document.createElement('li');
        li.textContent = time.textContent;
        lapList.appendChild(li);
      }
    });

    // 🌙 Dark mode toggle
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });

    updateDisplay();