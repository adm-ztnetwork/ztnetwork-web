    const PRODUCTS = {
  "FG-30G": { name: "FortiGate-30G", desc: "Firewall NGFW de entrada para oficinas pequeñas y home office empresarial.", price: "$437.862", pricenote: "IVA incluido", specs: ["Rendimiento firewall: hasta 5 Gbps", "5x puertos GE RJ45", "SD-WAN y SD-Branch integrados", "VPN IPsec e IPS acelerados por hardware"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-fortiwifi-30g-series.pdf" },
  "FG-60F": { name: "FortiGate-60F", desc: "Firewall NGFW compacto. 10x GE RJ45 (7 LAN, 2 WAN, 1 DMZ). Ideal PyME y sucursales.", price: "$749.364", pricenote: "IVA incluido", specs: ["10x GE RJ45 (7 LAN, 2 WAN, 1 DMZ)", "Rendimiento firewall: hasta 10 Gbps", "Hasta 30 FortiAP gestionados", "VPN IPsec: 200 túneles site-to-site"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-fortiwifi-60f-series.pdf" },
  "FG-80F": { name: "FortiGate-80F", desc: "Firewall NGFW para oficinas medianas. Mayor throughput y puertos que el 60F.", price: "$932.483", pricenote: "IVA incluido", specs: ["8x GE RJ45, 2x RJ45/SFP WAN compartidos", "Rendimiento firewall: hasta 10 Gbps", "Soporte modem 3G/4G USB para WAN redundante", "Hasta 96 FortiAP gestionados"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-fortiwifi-80f-series.pdf" },
  "FG-90G": { name: "FortiGate-90G", desc: "Firewall de mayor capacidad para sedes con más tráfico o redundancia WAN.", price: "$2.388.755", pricenote: "IVA incluido", specs: ["8x GE RJ45, 2x 10GE RJ45/SFP+ WAN", "Rendimiento firewall: hasta 28 Gbps", "VPN IPsec: 200 site-to-site, 2.500 remote access", "SD-WAN y controlador WLAN embebidos"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-90g-series.pdf" },
  "FG-120G": { name: "FortiGate-120G", desc: "Firewall para empresas medianas con alto volumen de usuarios y servicios.", price: "$3.498.340", pricenote: "IVA incluido", consult: true, specs: ["16x GE RJ45, 4x 10GE SFP+, 8x SFP", "Rendimiento firewall de mayor escala", "Ideal para oficinas centrales y campus medianos", "Alta disponibilidad Active/Active y Active/Passive"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-120g-series.pdf" },
  "FG-30G-BDL-950-12": { name: "FortiGate-30G Bundle", desc: "Hardware más protección UTP y soporte FortiCare Premium por 12 meses.", price: "$549.650", pricenote: "IVA incluido", consult: true, specs: ["Incluye hardware FG-30G", "FortiCare Premium 24x7 por 12 meses", "FortiGuard UTP: IPS, Antivirus, App Control, Web Filtering", "Listo para activar al recibir la orden de compra"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-fortiwifi-30g-series.pdf" },
  "FG-40F-BDL-950-12": { name: "FortiGate-40F Bundle", desc: "Hardware más protección UTP y soporte FortiCare Premium por 12 meses.", price: "$665.740", pricenote: "IVA incluido", consult: true, specs: ["Incluye hardware FG-40F", "FortiCare Premium 24x7 por 12 meses", "FortiGuard UTP: IPS, Antivirus, App Control, Web Filtering", "Listo para activar al recibir la orden de compra"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-fortiwifi-40f-series.pdf" },
  "FG-60F-BDL-950-12": { name: "FortiGate-60F Bundle", desc: "El firewall más vendido para PyME, con licencia UTP lista para activar.", price: "$1.174.909", pricenote: "IVA incluido", specs: ["Incluye hardware FG-60F", "FortiCare Premium 24x7 por 12 meses", "FortiGuard UTP: IPS, Antivirus, App Control, Web Filtering", "El bundle más elegido para PyME"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-fortiwifi-60f-series.pdf" },
  "FG-90G-BDL-950-12": { name: "FortiGate-90G Bundle", desc: "Hardware más protección UTP y soporte FortiCare Premium por 12 meses.", price: "$3.685.045", pricenote: "IVA incluido", consult: true, specs: ["Incluye hardware FG-90G", "FortiCare Premium 24x7 por 12 meses", "FortiGuard UTP: IPS, Antivirus, App Control, Web Filtering", "Ideal para sedes con mayor tráfico"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-90g-series.pdf" },
  "FG-120G-BDL-950-12": { name: "FortiGate-120G Bundle", desc: "Hardware más protección UTP y soporte FortiCare Premium por 12 meses.", price: "$5.522.160", pricenote: "IVA incluido", consult: true, specs: ["Incluye hardware FG-120G", "FortiCare Premium 24x7 por 12 meses", "FortiGuard UTP: IPS, Antivirus, App Control, Web Filtering", "Para empresas con alto volumen de usuarios"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-120g-series.pdf" },
  "FAP-231K-N": { name: "FortiAP-231K", desc: "Access Point Wi-Fi 7 tri-banda, gestión centralizada vía FortiGate o FortiCloud.", price: "$519.704", pricenote: "IVA incluido", specs: ["Wi-Fi 7 tri-banda 2,4/5/6 GHz", "2 streams por radio, 3 radios", "Puerto 5G Base-T RJ45", "Gestión vía FortiGate o FortiCloud/FortiEdge Cloud"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiap-series.pdf" },
  "FS-108F-POE": { name: "FortiSwitch-108F-POE", desc: "Switch PoE de 8 puertos, opción económica para redes pequeñas o punto de venta.", price: "$472.033", pricenote: "IVA incluido", specs: ["8 puertos GE con PoE", "Gestionado vía FortiLink desde FortiGate", "Ideal para redes pequeñas o punto de venta", "Sin ventilador, bajo consumo"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf" },
  "FS-108F-FPOE": { name: "FortiSwitch-108F-FPOE", desc: "Switch PoE+ completo de 8 puertos con mayor presupuesto de potencia.", price: "$441.978", pricenote: "IVA incluido", consult: true, specs: ["8 puertos GE con PoE+ completo", "Mayor presupuesto de potencia que el POE estándar", "Gestionado vía FortiLink desde FortiGate", "Ideal para cámaras IP y AP de alta demanda"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf" },
  "FS-124F": { name: "FortiSwitch-124F", desc: "Switch gestionado de 24 puertos GE más 4x SFP+ 10G, sin PoE.", price: "$512.031", pricenote: "IVA incluido", consult: true, specs: ["24 puertos GE RJ45", "4 puertos SFP+ 10G", "Sin PoE", "Gestionado vía FortiLink desde FortiGate"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf" },
  "FS-124F-FPOE": { name: "FortiSwitch-124F-FPOE", desc: "Switch gestionado 24 puertos PoE+ (370W) más 4x SFP+ 10G.", price: "$1.331.067", pricenote: "IVA incluido", specs: ["24 puertos GE PoE+ (hasta 370W)", "4 puertos SFP+ 10G", "Gestionado vía FortiLink desde FortiGate", "Ideal para AP y telefonía IP"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf" },
  "FS-124G-FPOE": { name: "FortiSwitch-124G-FPOE", desc: "Generación G de 24 puertos PoE+ con mejor rendimiento por puerto.", price: "$1.582.015", pricenote: "IVA incluido", specs: ["24 puertos PoE+ generación G", "Mejor rendimiento por puerto que la serie F", "4 puertos SFP+ 10G", "Gestionado vía FortiLink desde FortiGate"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf" },
  "FS-148F": { name: "FortiSwitch-148F", desc: "Switch gestionado de 48 puertos GE más 4x SFP+ 10G, sin PoE.", price: "$831.469", pricenote: "IVA incluido", specs: ["48 puertos GE RJ45", "4 puertos SFP+ 10G", "Sin PoE", "Ideal para oficinas con muchos puestos de trabajo"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf" },
  "FS-148F-FPOE": { name: "FortiSwitch-148F-FPOE", desc: "Switch de 48 puertos PoE+ para edificios y despliegues de Wi-Fi masivo.", price: "$1.998.734", pricenote: "IVA incluido", specs: ["48 puertos GE PoE+", "4 puertos SFP+ 10G", "Ideal para edificios y despliegues de Wi-Fi masivo", "Gestionado vía FortiLink desde FortiGate"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf" },
  "GPI-130": { name: "Inyector PoE GPI-130", desc: "Inyector Gigabit PoE para alimentar FortiAP donde no hay switch PoE.", price: "$182.449", pricenote: "IVA incluido", specs: ["Inyector PoE Gigabit", "Permite alimentar FortiAP sin switch PoE", "Instalación simple en línea con el cable de red", "Compatible con la mayoría de los FortiAP Fortinet"], datasheet: null },
  "FG-50G": { name: "FortiGate-50G", desc: "Firewall NGFW compacto para PyME. 5x GE RJ45. Doble de throughput que el 30G, ideal para oficinas en crecimiento.", price: "$718.372", pricenote: "IVA incluido", specs: ["5x GE RJ45", "Rendimiento firewall: hasta 5 Gbps", "Throughput IPS: 1 Gbps", "Hasta 16 FortiAP y 8 FortiSwitch gestionados"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-fortiwifi-50g-series.pdf" },
  "FG-70G": { name: "FortiGate-70G", desc: "Firewall NGFW de 10 puertos, sucesor de la serie 60F. Mismo layout de puertos con mayor IPS y capacidad de sesiones.", price: "$1.025.908", pricenote: "IVA incluido", specs: ["10x GE RJ45 (7 LAN, 2 WAN, 1 DMZ)", "Rendimiento firewall: hasta 10 Gbps", "Throughput IPS: 2,5 Gbps", "1.400.000 sesiones concurrentes"], datasheet: "https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-fortiwifi-70g-series.pdf" },
};

    function openModal(cardEl) {
      const sku = cardEl.getAttribute('data-sku');
      const p = PRODUCTS[sku];
      if (!p) return;

      document.getElementById('modalSku').textContent = sku;
      document.getElementById('modalName').textContent = p.name;
      document.getElementById('modalDesc').textContent = p.desc;
      if (p.consult) {
        document.getElementById('modalPriceValue').textContent = 'Consultar';
        document.getElementById('modalPriceNote').textContent = 'Precio a confirmar con distribuidor';
      } else {
        document.getElementById('modalPriceValue').textContent = p.price;
        document.getElementById('modalPriceNote').textContent = p.pricenote;
      }

      const specsList = document.getElementById('modalSpecs');
      specsList.innerHTML = '';
      p.specs.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        specsList.appendChild(li);
      });

      const dsLink = document.getElementById('modalDatasheet');
      if (p.datasheet) {
        dsLink.href = p.datasheet;
        dsLink.style.display = 'inline-flex';
      } else {
        dsLink.style.display = 'none';
      }

      const encodedName = encodeURIComponent('Hola, me interesa el ' + p.name + ' de stock disponible');
      const actions = document.getElementById('modalActions');
      actions.innerHTML = `
        <a class="cta-icon primary" href="mailto:contacto@ztnetwork.cl?subject=Consulta%20stock%20disponible&body=${encodedName}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.75C3 5.784 3.784 5 4.75 5h14.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0119.25 19H4.75A1.75 1.75 0 013 17.25V6.75z" stroke="currentColor" stroke-width="1.6"/><path d="M4 6.5l8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Correo
        </a>
        <a class="cta-icon secondary" href="https://wa.me/56974679583?text=${encodedName}" target="_blank" rel="noopener">
          <svg width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="#25D366" d="M16.001 3C9.373 3 4 8.373 4 15c0 2.362.687 4.564 1.872 6.418L4 29l7.77-1.837A11.93 11.93 0 0016 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3zm0 21.8a9.77 9.77 0 01-4.98-1.36l-.357-.21-4.61 1.09 1.023-4.49-.232-.366A9.76 9.76 0 016.2 15c0-5.404 4.397-9.8 9.801-9.8 5.403 0 9.8 4.396 9.8 9.8 0 5.403-4.397 9.8-9.8 9.8z"/><path fill="#25D366" d="M21.19 18.104c-.283-.142-1.67-.824-1.929-.918-.259-.095-.448-.142-.636.142-.19.283-.732.918-.898 1.107-.165.19-.33.213-.613.071-.283-.142-1.195-.44-2.276-1.404-.841-.75-1.409-1.677-1.574-1.96-.165-.283-.018-.436.124-.577.128-.127.283-.33.424-.495.142-.165.19-.283.283-.472.095-.19.047-.354-.024-.495-.07-.142-.636-1.532-.872-2.099-.23-.552-.463-.478-.636-.487l-.542-.01c-.19 0-.495.071-.755.354-.259.283-.99.968-.99 2.36s1.014 2.737 1.156 2.926c.141.19 1.994 3.045 4.834 4.27.676.292 1.204.466 1.616.596.679.216 1.297.185 1.786.112.545-.081 1.67-.683 1.906-1.343.236-.66.236-1.226.165-1.343-.07-.118-.259-.19-.542-.33z"/></svg>
          WhatsApp
        </a>
      `;

      document.getElementById('productModal').classList.add('open');
    }

    function closeModal() {
      document.getElementById('productModal').classList.remove('open');
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    document.addEventListener('DOMContentLoaded', function () {
      // Abrir modal al hacer click en cualquier tarjeta de producto
      document.querySelectorAll('.card[data-sku]').forEach(function (card) {
        card.addEventListener('click', function () {
          openModal(card);
        });
      });

      // Evitar que los botones de Correo/WhatsApp dentro de la tarjeta abran el modal
      document.querySelectorAll('.cta-icon').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
        });
      });

      // Cerrar modal con el boton X
      var closeBtn = document.querySelector('.modal-close');
      if (closeBtn) closeBtn.addEventListener('click', closeModal);

      // Cerrar modal al hacer click fuera del cuadro (en el fondo oscuro)
      var overlay = document.getElementById('productModal');
      if (overlay) {
        overlay.addEventListener('click', function (e) {
          if (e.target === overlay) closeModal();
        });
      }
    });
