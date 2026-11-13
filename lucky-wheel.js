(() => {
  const wheel = document.querySelector('[data-lucky-wheel]');
  if (!wheel) return;

  const revealButton = document.querySelector('[data-wheel-reveal]');
  const revealLabel = revealButton.querySelector('span');
  const wheelContent = wheel.querySelector('[data-wheel-content]');
  const face = wheel.querySelector('.lucky-wheel-face');
  const button = wheel.querySelector('.lucky-wheel-button');
  const resultViewButton = wheel.querySelector('[data-wheel-result-view]');
  const status = wheel.querySelector('.lucky-wheel-status');
  const cooldown = wheel.querySelector('.lucky-wheel-cooldown');
  const resultDialog = document.querySelector('[data-wheel-result]');
  const resultNumber = resultDialog.querySelector('[data-result-number]');
  const resultCategory = resultDialog.querySelector('[data-result-category]');
  const resultTitle = resultDialog.querySelector('[data-result-title]');
  const resultMeaning = resultDialog.querySelector('[data-result-meaning]');
  const resultAdvice = resultDialog.querySelector('[data-result-advice]');
  const resultCloseButton = resultDialog.querySelector('[data-result-close]');
  const storageKey = 'tum9-lucky-wheel';
  const wheelOpenStorageKey = 'tum9-lucky-wheel-open';
  const cooldownDuration = 5000;
  const segmentAngle = 360 / 7;
  const luckyNumberReadings = window.luckyWheelReadings;
  let savedSpin = null;
  let spinning = false;
  let opening = false;
  let closing = false;
  let hasError = false;
  let currentRotation = 0;

  for (let number = 1; number <= 7; number += 1) {
    const label = document.createElement('span');
    const angle = number * segmentAngle - segmentAngle / 2;
    label.className = 'lucky-wheel-number';
    const value = document.createElement('span');
    value.className = 'lucky-wheel-number-value';
    value.textContent = String(number);
    label.dataset.angle = String(angle);
    label.append(value);
    face.append(label);
  }

  function positionNumbers() {
    const radius = face.clientWidth * 0.34;
    face.querySelectorAll('.lucky-wheel-number').forEach(label => {
      const angle = Number(label.dataset.angle);
      label.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(${-angle}deg)`;
    });
  }

  positionNumbers();
  window.addEventListener('resize', positionNumbers);

  function setWheelOpenState(open) {
    try {
      if (open) localStorage.setItem(wheelOpenStorageKey, 'true');
      else localStorage.removeItem(wheelOpenStorageKey);
      return true;
    } catch (error) {
      setError('ไม่สามารถบันทึกสถานะวงล้อได้ กรุณาเปิดใช้งานพื้นที่จัดเก็บในเบราว์เซอร์');
      return false;
    }
  }

  function loadWheelOpenState() {
    try {
      return localStorage.getItem(wheelOpenStorageKey) === 'true';
    } catch (error) {
      setError('ไม่สามารถโหลดสถานะวงล้อได้ กรุณาเปิดใช้งานพื้นที่จัดเก็บในเบราว์เซอร์');
      return false;
    }
  }

  function completeOpening() {
    if (!opening) return;

    opening = false;
    wheel.setAttribute('aria-busy', 'false');
    revealLabel.textContent = 'CLOSE WHEEL';
    setWheelOpenState(true);
    revealButton.disabled = false;
  }

  function finishClosing() {
    if (!closing) return;

    closing = false;
    wheelContent.classList.remove('is-closing');
    wheelContent.hidden = true;
    wheel.hidden = true;
    wheel.removeAttribute('aria-busy');
    document.body.classList.remove('wheel-revealed');
    revealButton.setAttribute('aria-expanded', 'false');
    revealButton.disabled = false;
    revealLabel.textContent = 'LUCKY WHEEL';
  }

  function openWheel() {
    if (opening || closing || spinning) return;

    opening = true;
    revealButton.disabled = true;
    revealLabel.textContent = 'OPENING...';
    revealButton.setAttribute('aria-expanded', 'true');
    document.body.classList.add('wheel-revealed');
    wheel.hidden = false;
    wheelContent.hidden = false;
    wheel.setAttribute('aria-busy', 'true');
    wheelContent.classList.remove('is-visible', 'is-closing');
    void wheelContent.offsetWidth;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      completeOpening();
      positionNumbers();
      return;
    }

    wheelContent.addEventListener('animationend', event => {
      if (event.target === wheelContent && event.animationName === 'lucky-wheel-arrival') {
        completeOpening();
      }
    }, { once: true });

    window.requestAnimationFrame(() => {
      positionNumbers();
      wheelContent.classList.add('is-visible');
    });
  }

  function closeWheel() {
    if (!setWheelOpenState(false)) {
      revealLabel.textContent = 'CLOSE WHEEL';
      return;
    }

    closing = true;
    revealButton.disabled = true;
    revealLabel.textContent = 'CLOSING...';
    wheelContent.classList.remove('is-visible', 'is-closing');
    void wheelContent.offsetWidth;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finishClosing();
      return;
    }

    wheelContent.addEventListener('animationend', event => {
      if (event.target === wheelContent && event.animationName === 'lucky-wheel-collapse') {
        finishClosing();
      }
    }, { once: true });
    wheelContent.classList.add('is-closing');
  }

  function toggleWheel() {
    if (opening || closing || spinning) return;
    if (!wheel.hidden && !wheelContent.hidden) closeWheel();
    else openWheel();
  }

  revealButton.addEventListener('click', toggleWheel);

  function applyRotation(rotation) {
    currentRotation = rotation;
    face.style.transform = `rotate(${rotation}deg)`;
    face.querySelectorAll('.lucky-wheel-number-value').forEach(value => {
      value.style.transform = `rotate(${-rotation}deg)`;
    });
  }

  function setError(message) {
    hasError = true;
    button.disabled = true;
    status.textContent = message;
    cooldown.textContent = '';
  }

  function showResult(spin) {
    const reading = luckyNumberReadings[spin.result];
    resultNumber.textContent = String(spin.result);
    resultCategory.textContent = reading.category;
    resultTitle.textContent = reading.title;
    resultMeaning.textContent = reading.meaning;
    resultAdvice.textContent = reading.advice;
    if (!resultDialog.open) {
      resultDialog.showModal();
      void resultDialog.offsetWidth;
      resultDialog.classList.add('is-opening');
    }
    resultCloseButton.focus();
  }

  resultViewButton.addEventListener('click', () => {
    if (savedSpin) showResult(savedSpin);
  });

  resultCloseButton.addEventListener('click', () => resultDialog.close());
  resultDialog.addEventListener('close', () => resultDialog.classList.remove('is-opening'));

  function loadSavedSpin() {
    try {
      const value = localStorage.getItem(storageKey);
      if (!value) return null;

      const parsed = JSON.parse(value);
      if (
        !Number.isFinite(parsed.timestamp) ||
        !Number.isFinite(new Date(parsed.timestamp).getTime()) ||
        !Number.isInteger(parsed.result) ||
        parsed.result < 1 ||
        parsed.result > 7 ||
        !Number.isFinite(parsed.rotation)
      ) {
        localStorage.removeItem(storageKey);
        return null;
      }
      return parsed;
    } catch (error) {
      setError('ไม่สามารถบันทึกคูลดาวน์ได้ กรุณาเปิดใช้งานพื้นที่จัดเก็บในเบราว์เซอร์');
      return null;
    }
  }

  function secureRandomValue() {
    if (!window.crypto || !window.crypto.getRandomValues) {
      throw new Error('เบราว์เซอร์นี้ไม่รองรับการสุ่มที่ปลอดภัย');
    }

    const value = new Uint32Array(1);
    window.crypto.getRandomValues(value);
    return value[0];
  }

  function randomInteger(max) {
    const range = 0x100000000;
    const limit = Math.floor(range / max) * max;
    let value;
    do {
      value = secureRandomValue();
    } while (value >= limit);
    return value % max;
  }

  function randomLuckyNumber() {
    return randomInteger(7) + 1;
  }

  function randomWheelPosition() {
    return 0.05 + secureRandomValue() / 0x100000000 * 0.9;
  }

  function updateCooldown() {
    if (hasError) return;

    if (!savedSpin) {
      button.disabled = false;
      button.textContent = 'หมุนวงล้อ';
      cooldown.textContent = '';
      return;
    }

    const remaining = savedSpin.timestamp + cooldownDuration - Date.now();
    if (remaining <= 0) {
      button.disabled = false;
      button.textContent = 'หมุนวงล้อ';
      cooldown.textContent = 'พร้อมรับเลขนำโชคครั้งใหม่แล้ว';
      return;
    }

    const hours = Math.floor(remaining / 60 / 60 / 1000);
    const minutes = Math.floor((remaining % 60 / 60 / 1000) / 60);
    const seconds = Math.floor((remaining % 60000) / 1000);
    button.disabled = true;
    button.textContent = 'รับเลขนำโชคแล้ว';
    cooldown.textContent = `สุ่มได้อีกครั้งใน ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  savedSpin = loadSavedSpin();
  if (savedSpin) {
    applyRotation(savedSpin.rotation);
    status.textContent = `เลขนำโชคของคุณคือ ${savedSpin.result}`;
    resultViewButton.hidden = false;
  }
  updateCooldown();

  if (loadWheelOpenState()) {
    wheel.hidden = false;
    wheelContent.hidden = false;
    document.body.classList.add('wheel-revealed');
    revealButton.setAttribute('aria-expanded', 'true');
    revealLabel.textContent = 'CLOSE WHEEL';
    window.requestAnimationFrame(positionNumbers);
  }

  window.setInterval(updateCooldown, 1000);

  function playWheelTone(context, frequency, duration, volume) {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const now = context.currentTime;
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, now);
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + duration);
  }

  function createWheelSound() {
    const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextConstructor) {
      console.warn('Wheel sound is not supported in this browser.');
      return { tick() {}, finish() {} };
    }

    let context;
    try {
      context = new AudioContextConstructor();
    } catch (error) {
      console.error('Unable to initialize the wheel sound.', error);
      return { tick() {}, finish() {} };
    }

    let ready = false;
    let closed = false;
    const closeContext = () => {
      if (closed) return;
      closed = true;
      context.close().catch(error => console.error('Unable to close the wheel sound.', error));
    };

    context.resume().then(
      () => { ready = true; },
      error => {
        console.error('Unable to start the wheel sound.', error);
        closeContext();
      }
    );

    return {
      tick() {
        if (ready) playWheelTone(context, 780, 0.035, 0.035);
      },
      finish() {
        if (ready) {
          playWheelTone(context, 880, 0.4, 0.045);
          window.setTimeout(() => playWheelTone(context, 1175, 0.45, 0.035), 110);
        }
        window.setTimeout(closeContext, 650);
      }
    };
  }

  function animateSpin(startRotation, rotation, sound, complete) {
    const duration = 5100;
    const startTime = performance.now();
    let lastCrossedSegment = Math.floor(startRotation / segmentAngle);

    function animate(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const currentRotation = startRotation + (rotation - startRotation) * eased;
      applyRotation(currentRotation);

      const crossedSegment = Math.floor(currentRotation / segmentAngle);
      while (lastCrossedSegment < crossedSegment) {
        sound.tick();
        lastCrossedSegment += 1;
      }

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      } else {
        sound.finish();
        complete();
      }
    }

    window.requestAnimationFrame(animate);
  }

  button.addEventListener('click', () => {
    if (spinning || (savedSpin && savedSpin.timestamp + cooldownDuration > Date.now())) return;

    let result;
    let stopPosition;
    let spinTurns;
    try {
      result = randomLuckyNumber();
      stopPosition = randomWheelPosition();
      spinTurns = 6 + randomInteger(5);
    } catch (error) {
      setError(error.message);
      return;
    }

    const startRotation = currentRotation;
    const pointerAngle = (result - 1 + stopPosition) * segmentAngle;
    const targetAngle = (360 - pointerAngle) % 360;
    const minRotation = startRotation + 360 * spinTurns;
    const rotation = minRotation + ((targetAngle - (minRotation % 360) + 360) % 360);
    const timestamp = Date.now();
    const nextSpin = { timestamp, result, rotation };

    try {
      localStorage.setItem(storageKey, JSON.stringify(nextSpin));
    } catch (error) {
      setError('ไม่สามารถบันทึกเลขนำโชคได้ กรุณาตรวจสอบพื้นที่จัดเก็บในเบราว์เซอร์');
      return;
    }

    savedSpin = nextSpin;
    spinning = true;
    button.disabled = true;
    button.textContent = 'วงล้อกำลังหมุน...';
    resultViewButton.disabled = true;
    status.textContent = 'วงล้อแห่งโชคชะตากำลังเลือกเลขให้คุณ';
    updateCooldown();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sound = createWheelSound();

    function finishSpin() {
      spinning = false;
      status.textContent = `เลขนำโชคของคุณคือ ${result}`;
      resultViewButton.hidden = false;
      resultViewButton.disabled = false;
      showResult(savedSpin);
    }

    if (reducedMotion) {
      applyRotation(rotation);
      sound.finish();
      finishSpin();
    } else {
      animateSpin(startRotation, rotation, sound, finishSpin);
    }
  });
})();
