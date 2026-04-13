const DIEX_EVENTS = [
  {
    id: "1",
    title: "Convención Anual Tecnología 2025",
    category: "Eventos Corporativos",
    year: "2025",
    city: "Bogotá",
    location: "Bogotá, Colombia",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900",
    description:
      "Convención anual de ventas para más de 500 asistentes, con agenda de conferencias, workshops y show central.",
    challenge:
      "Crear una experiencia inmersiva que reforzara la cultura de alto rendimiento y alineara los objetivos del año.",
    solution:
      "Diseñamos una narrativa de evento completa, con escenografía dinámica, tecnología de interacción en vivo y un programa cuidadosamente curado.",
    results: [
      "Participación del 95% en todas las sesiones clave",
      "Incremento del 18% en indicadores de motivación interna",
      "Feedback de satisfacción general del 98%",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=900",
      "https://images.unsplash.com/photo-1515165562835-c4c9e0737eaa?w=900",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    ],
  },
  {
    id: "2",
    title: "Lanzamiento Nuevo Producto Tech",
    category: "Lanzamiento de Marca",
    year: "2025",
    city: "Medellín",
    location: "Medellín, Colombia",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900",
    description:
      "Evento de lanzamiento para una nueva marca de tecnología B2C con invitados especiales y prensa.",
    challenge:
      "Generar alto impacto mediático y una experiencia memorable de primer contacto con el producto.",
    solution:
      "Conceptualizamos un recorrido experiencial dividido en estaciones, con demostraciones guiadas y contenido inmersivo.",
    results: [
      "Cobertura en más de 25 medios",
      "Tendencia en redes sociales locales durante el día del evento",
      "NPS de asistentes de 92",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=900",
      "https://images.unsplash.com/photo-1517244868406-8b388a76afa7?w=900",
    ],
  },
  {
    id: "3",
    title: "Cumbre de Líderes Empresariales",
    category: "Eventos Institucionales",
    year: "2024",
    city: "Cartagena",
    location: "Cartagena, Colombia",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900",
    description:
      "Summit de innovación con ejecutivos de alto nivel, keynotes internacionales y espacios de networking.",
    challenge:
      "Diseñar un formato que equilibrara contenido de alto nivel con espacios efectivos de relacionamiento.",
    solution:
      "Propusimos una agenda híbrida con plenarias inspiracionales, laboratorios prácticos y sesiones de networking curadas.",
    results: [
      "Asistencia de directores de más de 12 países",
      "Más de 150 reuniones 1:1 programadas",
      "Satisfacción promedio 4.8/5",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900",
    ],
  },
];

const DIEX_CATEGORIES = [
  "Todos",
  "Eventos Corporativos",
  "Lanzamiento de Marca",
  "Eventos Institucionales",
  "Activaciones",
];

function buildEventCard(event) {
  const city = event.city || event.location.split(",")[0];
  return `
    <article class="event-card" data-event-id="${event.id}">
      <div class="event-card__image">
        <img src="${event.image}" alt="${event.title}" loading="lazy" width="600" height="400" />
        <span class="event-card__badge">${event.category}</span>
      </div>
      <div class="event-card__body">
        <div class="event-card__meta">
          <span>${city}</span>
          <span>${event.year}</span>
        </div>
        <h3 class="event-card__title">${event.title}</h3>
        <div class="event-card__footer">
          <a href="evento-detalle.html?id=${event.id}" class="event-card__link">
            Ver proyecto
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  `;
}

window.DIEX_EVENTS = DIEX_EVENTS;
window.DIEX_CATEGORIES = DIEX_CATEGORIES;
window.buildEventCard = buildEventCard;
