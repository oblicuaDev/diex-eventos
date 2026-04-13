window.DiexComponents = (() => {
  const NAVBAR_HTML = `
    <header class="navbar" role="banner">
      <div class="container navbar-inner">
        <a href="index.html" class="navbar-brand" aria-label="Ir al inicio de DIEX Eventos">
          <img src="assets/icons/LogoDiex.png" alt="DIEX Eventos" class="navbar-logo">
        </a>

        <div class="navbar-right">
          <nav class="navbar-nav" aria-label="Navegación principal">
            <a href="index.html" class="navbar-link" data-nav="home">Inicio</a>
            <a href="nosotros.html" class="navbar-link" data-nav="nosotros">Nosotros</a>
            <a href="servicios.html" class="navbar-link" data-nav="servicios">Servicios</a>
            <a href="eventos.html" class="navbar-link" data-nav="eventos">Eventos</a>
            <a href="portafolio.html" class="navbar-link" data-nav="portafolio">Portafolio</a>
          </nav>

          <a href="contacto.html" class="navbar-cta">Cotizar Evento</a>

          <button
            class="navbar-hamburger"
            id="navbar-hamburger"
            aria-label="Abrir menú"
            aria-expanded="false"
            type="button"
          >
            <span class="navbar-hamburger__lines">
              <span class="navbar-hamburger__line"></span>
              <span class="navbar-hamburger__line"></span>
              <span class="navbar-hamburger__line"></span>
            </span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile drawer -->
    <div
      class="navbar-mobile-drawer"
      id="navbar-mobile-drawer"
      aria-hidden="true"
      role="dialog"
      aria-label="Menú de navegación"
    >
      <div class="navbar-mobile-drawer__inner">
        <nav class="navbar-mobile-drawer__nav" aria-label="Navegación principal móvil">
          <a href="index.html" class="navbar-mobile-drawer__link" data-nav="home">Inicio</a>
          <a href="nosotros.html" class="navbar-mobile-drawer__link" data-nav="nosotros">Nosotros</a>
          <a href="servicios.html" class="navbar-mobile-drawer__link" data-nav="servicios">Servicios</a>
          <a href="eventos.html" class="navbar-mobile-drawer__link" data-nav="eventos">Eventos</a>
          <a href="portafolio.html" class="navbar-mobile-drawer__link" data-nav="portafolio">Portafolio</a>
        </nav>

        <a href="contacto.html" class="navbar-mobile-drawer__cta">Cotizar Evento</a>
      </div>
    </div>
  `;

  const FOOTER_HTML = `
    <footer class="site-footer" role="contentinfo">
      <div class="container site-footer-inner">
        <div class="site-footer-main">
          <div class="site-footer-left">
            <a href="index.html" class="navbar-brand" aria-label="Ir al inicio de DIEX Eventos">
              <img src="assets/icons/LogoDiex.png" alt="DIEX Eventos" class="navbar-logo">
            </a>
            <p class="site-footer-desc">
              Producción y organización de eventos empresariales en Colombia con más de 10 años de experiencia.
            </p>
            <div class="site-footer-social">
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="site-footer-right">
            <h4 class="site-footer-heading">Contacto</h4>
            <div class="site-footer-contact">
              <div class="site-footer-contact-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Bogotá, Colombia</span>
              </div>
              <div class="site-footer-contact-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
                <span>+57 (300) 123-4567</span>
              </div>
              <div class="site-footer-contact-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@diexeventos.co</span>
              </div>
            </div>
          </div>
        </div>

        <div class="site-footer-bottom">
          <span class="site-footer-copy">
            © ${new Date().getFullYear()} DIEX Eventos. Todos los derechos reservados.
          </span>
          <span class="site-footer-credit">
            Creado junto a
            <a href="https://oblicua.co/" target="_blank" rel="noopener noreferrer">
              <img src="assets/icons/oblicua.png" alt="Oblicua" class="footer-oblicua-logo">
            </a>
          </span>
        </div>
      </div>
    </footer>
  `;

  function detectCurrentPage() {
    const path = window.location.pathname.toLowerCase();

    if (path.endsWith("/eventos.html") || path.includes("eventos.html"))
      return "eventos";
    if (
      path.endsWith("/evento-detalle.html") ||
      path.includes("evento-detalle.html")
    )
      return "eventos";
    if (path.endsWith("/nosotros.html") || path.includes("nosotros.html"))
      return "nosotros";
    if (path.endsWith("/servicios.html") || path.includes("servicios.html"))
      return "servicios";
    if (path.endsWith("/portafolio.html") || path.includes("portafolio.html"))
      return "portafolio";
    if (path.endsWith("/contacto.html") || path.includes("contacto.html"))
      return "contacto";
    return "home";
  }

  function mountNavbar() {
    const placeholder = document.getElementById("navbar-placeholder");
    if (!placeholder) return;

    placeholder.innerHTML = NAVBAR_HTML;

    const current = detectCurrentPage();

    // Desktop active
    const links = placeholder.querySelectorAll(".navbar-link");
    links.forEach((link) => {
      const isActive = link.dataset.nav === current;
      link.classList.toggle("navbar-link--active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    // Mobile active
    const mobileLinks = document.querySelectorAll(
      ".navbar-mobile-drawer__link",
    );
    mobileLinks.forEach((link) => {
      const isActive = link.dataset.nav === current;
      link.classList.toggle("navbar-mobile-drawer__link--active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    // Scroll: transparente → oscuro
    const navbar = placeholder.querySelector(".navbar");
    if (navbar) {
      const onScroll = () => {
        if (window.scrollY > 50) {
          navbar.classList.add("is-scrolled");
        } else {
          navbar.classList.remove("is-scrolled");
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    // Hamburger
    const hamburger = document.getElementById("navbar-hamburger");
    const drawer = document.getElementById("navbar-mobile-drawer");

    if (hamburger && drawer && navbar) {
      const closeDrawer = () => {
        drawer.classList.remove("is-open");
        hamburger.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
        drawer.setAttribute("aria-hidden", "true");
        document.body.classList.remove("mobile-menu-open");
        navbar.classList.remove("mobile-menu-active");
        hamburger.setAttribute("aria-label", "Abrir menú");
      };

      hamburger.addEventListener("click", () => {
        const isOpen = !drawer.classList.contains("is-open");

        drawer.classList.toggle("is-open", isOpen);
        hamburger.classList.toggle("is-open", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
        drawer.setAttribute("aria-hidden", String(!isOpen));
        document.body.classList.toggle("mobile-menu-open", isOpen);
        navbar.classList.toggle("mobile-menu-active", isOpen);

        if (isOpen) {
          hamburger.setAttribute("aria-label", "Cerrar menú");
        } else {
          hamburger.setAttribute("aria-label", "Abrir menú");
        }
      });

      drawer.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          closeDrawer();
        });
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && drawer.classList.contains("is-open")) {
          closeDrawer();
          hamburger.focus();
        }
      });
    }
  }

  function mountFooter() {
    const placeholder = document.getElementById("footer-placeholder");
    if (!placeholder) return;
    placeholder.innerHTML = FOOTER_HTML;
  }

  return {
    mountNavbar,
    mountFooter,
  };
})();
