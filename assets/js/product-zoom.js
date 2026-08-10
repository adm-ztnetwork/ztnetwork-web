// Galería de producto + visor de zoom (lightbox)
// Uso: cada thumbnail tiene data-full (imagen display) y data-zoom (imagen alta res)
// El contenedor principal debe tener id="product-gallery"

(function () {
  var gallery = document.getElementById('product-gallery');
  if (!gallery) return;

  var mainImg = gallery.querySelector('.gallery-main img');
  var thumbs = gallery.querySelectorAll('.gallery-thumb');
  var lightbox = document.getElementById('product-lightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  var lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

  function setActive(thumb) {
    thumbs.forEach(function (t) { t.classList.remove('active'); });
    thumb.classList.add('active');
    mainImg.src = thumb.dataset.full;
    mainImg.dataset.zoom = thumb.dataset.zoom;
  }

  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      setActive(thumb);
    });
  });

  function openLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = mainImg.dataset.zoom || mainImg.src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  mainImg.addEventListener('click', openLightbox);
  gallery.querySelector('.gallery-zoom-hint').addEventListener('click', openLightbox);

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();
