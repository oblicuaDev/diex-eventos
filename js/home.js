// Lógica específica de la Home: hero video, servicios, eventos destacados

document.addEventListener("DOMContentLoaded", () => {
  const { initScrollAnimation, initScrollReveal } = window.DiexAnimations;

  // Animaciones de secciones
  const heroSection = document.querySelector(".home-hero");
  const statsSection = document.getElementById("stats-section");
  const servicesSection = document.getElementById("services-section");
  const eventsSection = document.getElementById("events-section");
  const clientsSection = document.getElementById("clients-section");
  const ctaSection = document.getElementById("cta-section");

  if (heroSection)
    initScrollAnimation(document.getElementById("hero-content"), {
      zoomIntensity: 0.05,
      threshold: 0.1,
      enableFade: false,
    });
  if (statsSection)
    initScrollAnimation(statsSection, { zoomIntensity: 0.1, threshold: 0.3 });
  if (servicesSection)
    initScrollAnimation(servicesSection, {
      zoomIntensity: 0.08,
      threshold: 0.2,
    });
  if (eventsSection)
    initScrollAnimation(eventsSection, { zoomIntensity: 0.08, threshold: 0.2 });
  if (clientsSection)
    initScrollAnimation(clientsSection, { zoomIntensity: 0.1, threshold: 0.3 });
  if (ctaSection)
    initScrollAnimation(ctaSection, { zoomIntensity: 0.12, threshold: 0.3 });

  // Botón mute/unmute del video
  const muteBtn = document.getElementById("mute-toggle");
  const iframe = document.getElementById("hero-video");
  let isMuted = true;

  function setIcons() {
    const iconMute = muteBtn.querySelector(".icon-volume-x");
    const iconSound = muteBtn.querySelector(".icon-volume-2");
    if (isMuted) {
      muteBtn.setAttribute("aria-label", "Activar sonido");
      muteBtn.setAttribute("aria-pressed", "false");
      iconMute.style.display = "inline-flex";
      iconSound.style.display = "none";
    } else {
      muteBtn.setAttribute("aria-label", "Desactivar sonido");
      muteBtn.setAttribute("aria-pressed", "true");
      iconMute.style.display = "none";
      iconSound.style.display = "inline-flex";
    }
  }

  if (muteBtn && iframe) {
    setIcons();
    muteBtn.addEventListener("click", () => {
      isMuted = !isMuted;
      setIcons();
      const player = iframe.contentWindow;
      if (!player) return;

      const message = isMuted
        ? '{"event":"command","func":"mute","args":""}'
        : '{"event":"command","func":"unMute","args":""}';

      player.postMessage(message, "*");
    });
  }

  // Servicios home
  const homeServicesGrid = document.getElementById("home-services-grid");

  if (homeServicesGrid && Array.isArray(window.DIEX_SERVICES)) {
    const SERVICES_HOME = window.DIEX_SERVICES.slice(0, 6);

    homeServicesGrid.innerHTML = SERVICES_HOME.map(
      (s) => `
        <a class="service-card" href="servicio-detalle.html?slug=${s.slug}" aria-label="Ver detalle de ${s.title}">
          <div class="service-card__overlay" aria-hidden="true"></div>
          <div class="service-card__glow" aria-hidden="true"></div>
          <div class="service-card__corner" aria-hidden="true"></div>
          <div class="service-card__content">
            <div class="service-card__icon-wrap">
              <span class="service-card__icon">${s.svg}</span>
            </div>
            <h3 class="service-card__title">${s.title}</h3>
            <p class="service-card__desc">${s.desc}</p>
          </div>
        </a>
      `,
    ).join("");

    homeServicesGrid.querySelectorAll(".service-card").forEach((card, i) => {
      initScrollReveal(card, i * 120);
    });
  }

  // Eventos destacados (primeros 3 de DIEX_EVENTS)
  const featuredGrid = document.getElementById("featured-events-grid");
  if (featuredGrid && Array.isArray(window.DIEX_EVENTS)) {
    const featuredEvents = window.DIEX_EVENTS.slice(0, 3);
    featuredGrid.innerHTML = featuredEvents
      .map((e) => window.buildEventCard(e))
      .join("");

    featuredGrid.querySelectorAll(".event-card").forEach((card, i) => {
      initScrollReveal(card, i * 150);
    });
  }
});
