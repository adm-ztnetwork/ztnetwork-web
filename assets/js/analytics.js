/* Google Analytics 4 con consentimiento previo (Ley 21.719).
   No se carga nada de Google hasta que el visitante acepta.
   La decisión se guarda en localStorage y se puede cambiar con
   cualquier enlace que tenga el atributo data-cookie-prefs. */
(function () {
  var ID = 'G-JFTFD2KN74', KEY = 'zt-consent-analytics';

  function load() {
    if (window.__ztGa) return;
    window.__ztGa = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.appendChild(s);
  }

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function banner() {
    if (document.getElementById('zt-cookies')) return;
    var b = document.createElement('div');
    b.id = 'zt-cookies';
    b.setAttribute('role', 'region');
    b.setAttribute('aria-label', 'Aviso de cookies');
    b.style.cssText = 'position:fixed;left:16px;bottom:16px;z-index:9999;max-width:320px;' +
      'background:#0D1830;color:#DCE6F7;border:1px solid rgba(91,184,255,.35);border-radius:12px;' +
      'padding:12px 14px;font:13px/1.45 system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.4)';
    var btn = 'flex:1;padding:7px 0;border-radius:8px;border:1px solid #5BB8FF;background:transparent;' +
      'color:#DCE6F7;font:600 13px system-ui,sans-serif;cursor:pointer';
    b.innerHTML = '<div style="margin-bottom:10px">Usamos cookies de Google Analytics solo para contar visitas. ' +
      '<a href="/privacidad.html" style="color:#5BB8FF">Más información</a></div>' +
      '<div style="display:flex;gap:8px"><button type="button" data-v="no" style="' + btn + '">Rechazar</button>' +
      '<button type="button" data-v="yes" style="' + btn + '">Aceptar</button></div>';
    b.addEventListener('click', function (e) {
      var v = e.target.getAttribute && e.target.getAttribute('data-v');
      if (!v) return;
      set(v);
      b.remove();
      if (v === 'yes') load();
    });
    document.body.appendChild(b);
  }

  function init() {
    var c = get();
    if (c === 'yes') load();
    else if (c !== 'no') banner();
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('[data-cookie-prefs]');
      if (a) { e.preventDefault(); banner(); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
