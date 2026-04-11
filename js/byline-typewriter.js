(function () {
  function startTypewriter(el) {
    var rawPhrases = el.getAttribute('data-phrases') || '';
    var phrases;

    if (!rawPhrases) {
      phrases = [];
    } else if (rawPhrases.trim().charAt(0) === '[') {
      try {
        phrases = JSON.parse(rawPhrases);
      } catch (err) {
        phrases = [];
      }
    } else {
      phrases = rawPhrases.split('||');
    }

    if (!phrases.length) return;

    for (var i = phrases.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = phrases[i];
      phrases[i] = phrases[j];
      phrases[j] = tmp;
    }

    var textEl = el.querySelector('.byline-typewriter__text');
    if (!textEl) return;

    var typingSpeed = parseInt(el.getAttribute('data-typing-speed') || '45', 10);
    var deletingSpeed = parseInt(el.getAttribute('data-deleting-speed') || '24', 10);
    var pauseMs = parseInt(el.getAttribute('data-pause-ms') || '3000', 10);
    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || phrases.length === 1) {
      textEl.textContent = phrases[0];
      return;
    }

    var phraseIndex = 0;
    var charIndex = 0;
    var deleting = false;
    var timer = null;

    function tick() {
      var phrase = phrases[phraseIndex];

      if (!deleting) {
        charIndex += 1;
        textEl.textContent = phrase.slice(0, charIndex);

        if (charIndex >= phrase.length) {
          deleting = true;
          timer = window.setTimeout(tick, pauseMs);
          return;
        }

        timer = window.setTimeout(tick, typingSpeed);
        return;
      }

      charIndex -= 1;
      textEl.textContent = phrase.slice(0, Math.max(charIndex, 0));

      if (charIndex <= 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timer = window.setTimeout(tick, typingSpeed);
        return;
      }

      timer = window.setTimeout(tick, deletingSpeed);
    }

    tick();
  }

  function init() {
    document.querySelectorAll('[data-byline-typewriter]').forEach(startTypewriter);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
