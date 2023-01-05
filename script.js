function clock() {
  function createTimer(sec) {
    const secDate = new Date(sec * 1000)
    return secDate.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
    });
  }

  const clock = document.querySelector('.clock');
  let seconds = 0;
  let timer;

  function startClock() {
    timer = setInterval(function() {
      seconds++;
      clock.innerHTML = createTimer(seconds)
    }, 1000)
  }

  document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('start')) {
      clock.classList.remove('paused');
      clearInterval(timer);
      startClock();
    }

    if (el.classList.contains('pause')) {
      clearInterval(timer);
      clock.classList.add('paused');
    }

    if (el.classList.contains('reset')) {
      clearInterval(timer);
      clock.classList.remove('paused');
      clock.innerHTML = '00:00:00';
      seconds = 0;
    }
  })

}

clock()