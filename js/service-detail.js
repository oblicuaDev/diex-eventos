document.addEventListener("DOMContentLoaded", () => {
  const { initScrollAnimation, initScrollReveal } = window.DiexAnimations;

  const SERVICES = [
    {
      slug: "iluminacion-profesional",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=800&fit=crop",
      title: "Iluminación Profesional",
      desc: "Diseño y montaje de iluminación escénica, arquitectónica y decorativa. Tecnología LED, robótica y sistemas DMX de última generación.",
      intro:
        "Diseño y montaje de iluminación escénica, arquitectónica y decorativa con tecnología LED y robótica.",
      includes:
        "Contamos con equipos de iluminación de última generación que transforman cualquier espacio en una experiencia visual única. Nuestro equipo de diseñadores de iluminación crea ambientes memorables utilizando tecnología LED, robótica y sistemas DMX profesionales.",
      benefits: [
        "Ambientes personalizados según el evento",
        "Tecnología de bajo consumo energético",
        "Efectos visuales impactantes",
        "Diseñadores especializados",
        "Montaje y desmontaje profesional",
      ],
      features: [
        "Iluminación LED de alta eficiencia",
        "Cabezales móviles robóticos",
        "Sistemas DMX y control de iluminación",
        "Iluminación arquitectónica",
        "Efectos especiales lumínicos",
        "Diseño de iluminación personalizado",
      ],
    },
    {
      slug: "sonido-de-alta-fidelidad",
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=800&fit=crop",
      title: "Sonido de Alta Fidelidad",
      desc: "Sistemas de audio profesional, sonorización en vivo, amplificación, monitoreo y ecualización con equipos de máxima calidad.",
      intro:
        "Sistemas de audio profesional para eventos en vivo con cobertura uniforme y alta definición sonora.",
      includes:
        "Ofrecemos soluciones de sonido para eventos corporativos, conciertos, lanzamientos y producciones especiales. Trabajamos con sistemas de amplificación, monitoreo y control que garantizan claridad, potencia y una experiencia auditiva profesional.",
      benefits: [
        "Cobertura sonora uniforme",
        "Audio claro y balanceado",
        "Equipos profesionales de alta potencia",
        "Operación técnica especializada",
        "Montaje seguro y eficiente",
      ],
      features: [
        "Sistemas line array y PA profesional",
        "Monitoreo de escenario",
        "Consolas digitales",
        "Micrófonos inalámbricos y alámbricos",
        "Procesamiento y ecualización",
        "Soporte técnico en tiempo real",
      ],
    },
    {
      slug: "pantallas-led-y-proyeccion",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
      title: "Pantallas LED y Proyección",
      desc: "Pantallas LED de alta resolución, proyectores profesionales, video mapping y sistemas multimedia interactivos.",
      intro:
        "Pantallas LED y proyección profesional para potenciar el impacto visual de tu evento.",
      includes:
        "Desarrollamos soluciones audiovisuales con pantallas LED, proyectores de alto brillo y sistemas multimedia adaptados a diferentes formatos de evento. Diseñamos configuraciones visuales que optimizan la comunicación del contenido y la experiencia del público.",
      benefits: [
        "Alta visibilidad en distintos espacios",
        "Presentaciones de alto impacto",
        "Configuraciones adaptables al evento",
        "Soporte técnico especializado",
        "Montaje profesional",
      ],
      features: [
        "Pantallas LED de alta resolución",
        "Proyectores profesionales",
        "Video mapping",
        "Switching de video",
        "Monitores de apoyo",
        "Sistemas multimedia interactivos",
      ],
    },
    {
      slug: "fotografia-profesional",
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&h=800&fit=crop",
      title: "Fotografía Profesional",
      desc: "Registro fotográfico de alta calidad, cobertura de eventos, fotografía de producto y retratos corporativos.",
      intro:
        "Cobertura fotográfica profesional para documentar cada momento clave de tu evento.",
      includes:
        "Nuestro servicio de fotografía profesional está orientado a capturar la esencia de cada evento con una mirada técnica y creativa. Entregamos imágenes de alta calidad ideales para memorias institucionales, comunicaciones y contenido de marca.",
      benefits: [
        "Cobertura integral del evento",
        "Calidad visual profesional",
        "Entrega de material útil para comunicación",
        "Registro de momentos clave",
        "Edición y selección profesional",
      ],
      features: [
        "Cobertura fotográfica de eventos",
        "Fotografía de producto",
        "Retratos corporativos",
        "Edición profesional",
        "Entrega digital organizada",
        "Acompañamiento en sitio",
      ],
    },
    {
      slug: "video-y-produccion-audiovisual",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop",
      title: "Video y Producción Audiovisual",
      desc: "Producción audiovisual completa, video en vivo, edición profesional y postproducción de contenido multimedia.",
      intro:
        "Producción audiovisual integral para eventos, marcas y contenidos institucionales.",
      includes:
        "Creamos piezas audiovisuales con calidad profesional para registrar, comunicar y amplificar el impacto de cada evento. Cubrimos grabación, realización, edición y postproducción según el formato y objetivo del proyecto.",
      benefits: [
        "Contenido audiovisual profesional",
        "Cobertura completa del evento",
        "Edición y postproducción especializada",
        "Material útil para difusión",
        "Acompañamiento técnico y creativo",
      ],
      features: [
        "Grabación multicámara",
        "Cobertura de eventos en vivo",
        "Edición profesional",
        "Postproducción audiovisual",
        "Piezas promocionales",
        "Entrega en formatos digitales",
      ],
    },
    {
      slug: "streaming-y-transmision",
      image:
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&h=800&fit=crop",
      title: "Streaming y Transmisión",
      desc: "Transmisión en vivo profesional, streaming multicanal, eventos híbridos y plataformas virtuales interactivas.",
      intro:
        "Streaming profesional para eventos híbridos, conferencias y transmisiones en tiempo real.",
      includes:
        "Implementamos soluciones de transmisión en vivo con calidad profesional para ampliar el alcance de tus eventos. Diseñamos flujos de streaming estables, multicanal e integrados con plataformas virtuales según las necesidades del cliente.",
      benefits: [
        "Mayor alcance de audiencia",
        "Transmisión estable y profesional",
        "Integración con múltiples plataformas",
        "Soporte técnico en tiempo real",
        "Adaptación a eventos híbridos",
      ],
      features: [
        "Streaming multicanal",
        "Realización en vivo",
        "Integración con plataformas virtuales",
        "Eventos híbridos",
        "Codificación y monitoreo",
        "Soporte técnico especializado",
      ],
    },
    {
      slug: "tarimas-y-escenografia",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop",
      title: "Tarimas y Escenografía",
      desc: "Diseño, construcción y montaje de tarimas, escenarios, estructuras metálicas y elementos escenográficos personalizados.",
      intro:
        "Tarimas, escenarios y escenografía adaptados al formato y concepto de cada evento.",
      includes:
        "Diseñamos y construimos estructuras escénicas funcionales y visualmente sólidas para diferentes tipos de montaje. Integramos tarimas, fondos, estructuras y elementos escenográficos alineados con la experiencia del evento.",
      benefits: [
        "Montajes personalizados",
        "Estructuras seguras y funcionales",
        "Mejor presencia escénica",
        "Adaptación a distintos formatos",
        "Acompañamiento técnico en montaje",
      ],
      features: [
        "Tarimas modulares",
        "Escenarios personalizados",
        "Estructuras metálicas",
        "Fondos y elementos decorativos",
        "Montaje y desmontaje",
        "Adaptación al espacio",
      ],
    },
    {
      slug: "generacion-electrica",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop",
      title: "Generación Eléctrica",
      desc: "Plantas eléctricas, distribución de energía, respaldo eléctrico y sistemas de alimentación ininterrumpida.",
      intro:
        "Soluciones de generación y respaldo eléctrico para garantizar continuidad operativa en tu evento.",
      includes:
        "Ofrecemos sistemas de generación y distribución eléctrica diseñados para responder a montajes de diferentes escalas. Aseguramos respaldo, estabilidad y continuidad para que todos los equipos técnicos funcionen correctamente durante la operación.",
      benefits: [
        "Respaldo confiable de energía",
        "Continuidad operativa",
        "Distribución segura",
        "Cobertura para distintos montajes",
        "Supervisión técnica especializada",
      ],
      features: [
        "Plantas eléctricas",
        "Distribución de energía",
        "Respaldo eléctrico",
        "Cableado técnico",
        "Tableros y protección",
        "Monitoreo operativo",
      ],
    },
    {
      slug: "logistica-y-coordinacion",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
      title: "Logística y Coordinación",
      desc: "Gestión integral de montaje, transporte de equipos, coordinación de personal técnico y logística operativa completa.",
      intro:
        "Coordinación operativa integral para que cada parte del evento funcione en tiempo y forma.",
      includes:
        "Nos encargamos de la logística técnica y operativa del evento, coordinando recursos, personal y tiempos de ejecución. Esto permite una operación ordenada, eficiente y alineada con los objetivos del cliente y la producción.",
      benefits: [
        "Mejor control operativo",
        "Coordinación eficiente de recursos",
        "Optimización de tiempos",
        "Soporte durante toda la ejecución",
        "Reducción de imprevistos",
      ],
      features: [
        "Planificación operativa",
        "Coordinación de personal técnico",
        "Transporte de equipos",
        "Cronograma de montaje",
        "Supervisión en sitio",
        "Apoyo logístico integral",
      ],
    },
  ];

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "iluminacion-profesional";

  const currentService =
    SERVICES.find((service) => service.slug === slug) || SERVICES[0];

  document.title = `${currentService.title} - DIEX Eventos`;

  const titleEl = document.getElementById("service-title");
  const introEl = document.getElementById("service-intro");
  const imageEl = document.getElementById("service-image");
  const includesEl = document.getElementById("service-includes");
  const benefitsEl = document.getElementById("service-benefits");
  const featuresEl = document.getElementById("service-features");
  const relatedGrid = document.getElementById("related-services-grid");

  if (titleEl) titleEl.textContent = currentService.title;
  if (introEl) introEl.textContent = currentService.intro;

  if (imageEl) {
    imageEl.src = currentService.image;
    imageEl.alt = currentService.title;
  }

  if (includesEl) includesEl.textContent = currentService.includes;

  if (benefitsEl) {
    benefitsEl.innerHTML = currentService.benefits
      .map(
        (item) => `
          <li class="service-detail-benefits__item">
            <span class="service-detail-benefits__icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span>${item}</span>
          </li>
        `,
      )
      .join("");
  }

  if (featuresEl) {
    featuresEl.innerHTML = currentService.features
      .map(
        (item) => `
          <article class="service-feature-card">
            <span class="service-feature-card__dot" aria-hidden="true"></span>
            <p>${item}</p>
          </article>
        `,
      )
      .join("");
  }

  if (relatedGrid) {
    const relatedServices = SERVICES.filter(
      (service) => service.slug !== currentService.slug,
    ).slice(0, 3);

    relatedGrid.innerHTML = relatedServices
      .map(
        (service) => `
          <a class="service-card" href="servicio-detalle.html?slug=${service.slug}" aria-label="Ver detalle de ${service.title}">
            <div class="service-card__media">
              <img src="${service.image}" alt="${service.title}" class="service-card__image" />
            </div>
            <div class="service-card__content">
              <h3 class="service-card__title">${service.title}</h3>
              <p class="service-card__desc">${service.desc}</p>
              <span class="service-card__more">
                Ver más
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
          </a>
        `,
      )
      .join("");

    relatedGrid
      .querySelectorAll(".service-card")
      .forEach((card, i) => initScrollReveal(card, i * 120));
  }

  initScrollAnimation(document.getElementById("service-detail-hero"), {
    zoomIntensity: 0.08,
    threshold: 0.3,
  });

  initScrollAnimation(document.getElementById("service-image-section"), {
    zoomIntensity: 0.08,
    threshold: 0.2,
  });

  initScrollAnimation(document.getElementById("service-content-section"), {
    zoomIntensity: 0.08,
    threshold: 0.2,
  });

  initScrollAnimation(document.getElementById("service-related-section"), {
    zoomIntensity: 0.08,
    threshold: 0.2,
  });

  initScrollAnimation(document.getElementById("service-cta-section"), {
    zoomIntensity: 0.1,
    threshold: 0.3,
  });
});
