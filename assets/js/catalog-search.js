// Buscador en tiempo real para /stock-disponible
// Filtra tarjetas por SKU, nombre y descripción; oculta secciones vacías.

(function () {
  var input = document.getElementById('product-search');
  var clearBtn = document.getElementById('search-clear');
  var countEl = document.getElementById('search-count');
  var noResults = document.getElementById('no-results');
  if (!input) return;

  var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('section.cat'));
  var totalCards = cards.length;

  // Precalcular el texto buscable de cada tarjeta
  var cardData = cards.map(function (card) {
    var sku = card.querySelector('.sku');
    var name = card.querySelector('h3');
    var desc = card.querySelector('.desc');
    var text = [
      sku ? sku.textContent : '',
      name ? name.textContent : '',
      desc ? desc.textContent : ''
    ].join(' ').toLowerCase();
    return { card: card, text: text };
  });

  function normalize(str) {
    return str.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // quita acentos
  }

  function filter() {
    var query = normalize(input.value.trim());
    clearBtn.classList.toggle('show', query.length > 0);

    if (!query) {
      cardData.forEach(function (d) { d.card.classList.remove('hidden-by-search'); });
      sections.forEach(function (s) { s.classList.remove('hidden-by-search'); });
      noResults.classList.remove('show');
      countEl.textContent = '';
      return;
    }

    var visibleCount = 0;
    cardData.forEach(function (d) {
      var match = normalize(d.text).indexOf(query) !== -1;
      d.card.classList.toggle('hidden-by-search', !match);
      if (match) visibleCount++;
    });

    // Ocultar secciones sin ninguna tarjeta visible
    sections.forEach(function (section) {
      var visible = section.querySelectorAll('.card:not(.hidden-by-search)').length;
      section.classList.toggle('hidden-by-search', visible === 0);
    });

    noResults.classList.toggle('show', visibleCount === 0);
    countEl.textContent = visibleCount + ' de ' + totalCards + ' productos';
  }

  input.addEventListener('input', filter);
  clearBtn.addEventListener('click', function () {
    input.value = '';
    filter();
    input.focus();
  });
})();
