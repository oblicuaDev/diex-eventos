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
  if (homeServicesGrid) {
    const SERVICES_HOME = [
      {
        iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>`,
        title: "Iluminación Profesional",
        desc: "Diseño y montaje de iluminación escénica, arquitectónica y decorativa con tecnología LED y robótica.",
      },
      {
        iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
        title: "Sonido de Alta Fidelidad",
        desc: "Sistemas de audio profesional, sonorización en vivo y equipos de amplificación de última generación.",
      },
      {
        iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12"
                     cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
        title: "Pantallas y Proyección",
        desc: "Pantallas LED de alta resolución, proyectores profesionales y sistemas de video mapping.",
      },
      {
        iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round"><path d="M12 3l-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/><path d="M17.5 2l-.45 1.37a.47.47 0 0 1-.3.3L15.4 4.1l1.35.43a.47.47 0 0 1 .3.3L17.5 6.2l.45-1.37a.47.47 0 0 1 .3-.3l1.35-.43-1.35-.43a.47.47 0 0 1-.3-.3L17.5 2z" stroke-width="1.5"/><path d="M5 18l-.3.9a.31.31 0 0 1-.2.2l-.9.3.9.3a.31.31 0 0 1 .2.2l.3.9.3-.9a.31.31 0 0 1 .2-.2l.9-.3-.9-.3a.31.31 0 0 1-.2-.2L5 18z" stroke-width="1.5"/></svg>`,
        title: "Fotografía y Video",
        desc: "Registro fotográfico profesional, producción audiovisual y streaming en vivo de alta calidad.",
      },
      {
        iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
        title: "Tarimas y Escenografía",
        desc: "Diseño, construcción y montaje de tarimas, escenarios y estructuras personalizadas.",
      },
      {
        iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9"
                     cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        title: "Logística y Coordinación",
        desc: "Gestión integral de montaje, transporte de equipos, viajes y coordinación operativa completa.",
      },
    ];

    homeServicesGrid.innerHTML = SERVICES_HOME.map(
      (s) => `
      <article class="service-card" role="article">
        <div class="service-card__overlay" aria-hidden="true"></div>
        <div class="service-card__glow" aria-hidden="true"></div>
        <div class="service-card__corner" aria-hidden="true"></div>
        <div class="service-card__content">
          <div class="service-card__icon-wrap">
            <span class="service-card__icon">${s.iconSvg}</span>
          </div>
          <h3 class="service-card__title">${s.title}</h3>
          <p class="service-card__desc">${s.desc}</p>
        </div>
      </article>`,
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
