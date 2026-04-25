(function () {
  'use strict';

  var overlay, lightboxImg, closeBtn;
  var scale = 1, tx = 0, ty = 0;
  var pointers = new Map();
  var startScale = 1, startDist = 0;
  var startTx = 0, startTy = 0, startCx = 0, startCy = 0;
  var lastTap = 0;
  var moved = false;

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('role', 'dialog');
    overlay.innerHTML =
      '<button class="lightbox-close" type="button" aria-label="Close image">×</button>' +
      '<img class="lightbox-image" alt="" draggable="false" />';
    document.body.appendChild(overlay);
    lightboxImg = overlay.querySelector('.lightbox-image');
    closeBtn = overlay.querySelector('.lightbox-close');

    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      close();
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
    });

    setupGestures();
  }

  function applyTransform() {
    lightboxImg.style.transform =
      'translate3d(' + tx + 'px,' + ty + 'px,0) scale(' + scale + ')';
  }

  function animateReset() {
    scale = 1; tx = 0; ty = 0;
    lightboxImg.style.transition = 'transform 0.25s ease';
    applyTransform();
    setTimeout(function () { lightboxImg.style.transition = ''; }, 260);
  }

  function clampPan() {
    if (scale <= 1) { tx = 0; ty = 0; return; }
    var rect = lightboxImg.getBoundingClientRect();
    var maxX = Math.max(0, (rect.width - window.innerWidth) / 2 + 40);
    var maxY = Math.max(0, (rect.height - window.innerHeight) / 2 + 40);
    if (tx > maxX) tx = maxX;
    if (tx < -maxX) tx = -maxX;
    if (ty > maxY) ty = maxY;
    if (ty < -maxY) ty = -maxY;
  }

  function setupGestures() {
    lightboxImg.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      try { lightboxImg.setPointerCapture(e.pointerId); } catch (_) {}
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      lightboxImg.style.transition = '';
      moved = false;

      if (pointers.size === 2) {
        var pts = Array.from(pointers.values());
        startDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        startScale = scale;
        startTx = tx; startTy = ty;
      } else if (pointers.size === 1) {
        startCx = e.clientX; startCy = e.clientY;
        startTx = tx; startTy = ty;
      }
    });

    lightboxImg.addEventListener('pointermove', function (e) {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

      if (pointers.size === 2) {
        var pts = Array.from(pointers.values());
        var dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        if (startDist > 0) {
          scale = Math.max(1, Math.min(6, startScale * (dist / startDist)));
          if (scale === 1) { tx = 0; ty = 0; }
          applyTransform();
          moved = true;
        }
      } else if (pointers.size === 1 && scale > 1) {
        tx = startTx + (e.clientX - startCx);
        ty = startTy + (e.clientY - startCy);
        clampPan();
        applyTransform();
        if (Math.abs(e.clientX - startCx) > 4 || Math.abs(e.clientY - startCy) > 4) {
          moved = true;
        }
      }
    });

    function onUp(e) {
      pointers.delete(e.pointerId);
      if (pointers.size === 0 && scale < 1.05) {
        animateReset();
      } else if (pointers.size < 2) {
        clampPan();
        applyTransform();
      }
    }
    lightboxImg.addEventListener('pointerup', onUp);
    lightboxImg.addEventListener('pointercancel', onUp);

    lightboxImg.addEventListener('click', function (e) {
      e.stopPropagation();
      if (moved) return;
      var now = Date.now();
      if (now - lastTap < 300) {
        if (scale > 1.05) {
          animateReset();
        } else {
          scale = 2.5; tx = 0; ty = 0;
          lightboxImg.style.transition = 'transform 0.25s ease';
          applyTransform();
          setTimeout(function () { lightboxImg.style.transition = ''; }, 260);
        }
      }
      lastTap = now;
    });

    overlay.addEventListener('wheel', function (e) {
      if (!overlay.classList.contains('is-open')) return;
      e.preventDefault();
      var delta = -e.deltaY * 0.0025;
      scale = Math.max(1, Math.min(6, scale + delta * scale));
      if (scale <= 1.001) { scale = 1; tx = 0; ty = 0; }
      else { clampPan(); }
      applyTransform();
    }, { passive: false });
  }

  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    scale = 1; tx = 0; ty = 0;
    lightboxImg.style.transition = '';
    applyTransform();
  }

  function close() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    pointers.clear();
    setTimeout(function () {
      if (!overlay.classList.contains('is-open')) lightboxImg.removeAttribute('src');
    }, 250);
  }

  function init() {
    var images = document.querySelectorAll('.post-content img');
    if (!images.length) return;
    build();
    images.forEach(function (img) {
      if (img.closest('a')) return;
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function (e) {
        e.preventDefault();
        open(img.currentSrc || img.src, img.alt);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
