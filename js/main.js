// Animaciones y lógica global DIEX

window.DiexAnimations = (() => {
  function initScrollAnimation(el, options = {}) {
    if (!el) return;

    const {
      zoomIntensity = 0.08,
      threshold = 0.2,
      enableFade = true,
    } = options;

    const initialScale = Math.max(0.85, 1 - zoomIntensity);

    if (enableFade) {
      el.style.opacity = "0";
    } else {
      el.style.opacity = "1";
    }

    el.style.transform = `translateY(20px) scale(${initialScale})`;
    el.style.transition =
      "opacity 700ms ease, transform 700ms cubic-bezier(0.16, 1, 0.3, 1)";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            el.style.opacity = "1";
            el.style.transform = "translateY(0) scale(1)";
          } else {
            el.classList.remove("is-visible");
            if (enableFade) {
              el.style.opacity = "0";
            }
            el.style.transform = `translateY(20px) scale(${initialScale})`;
          }
        });
      },
      { threshold },
    );

    observer.observe(el);
  }

  function initScrollReveal(el, delay = 0, threshold = 0.15) {
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition =
      "opacity 650ms ease, transform 650ms cubic-bezier(0.16, 1, 0.3, 1)";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              el.classList.add("is-visible");
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, delay);
          } else {
            el.classList.remove("is-visible");
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
          }
        });
      },
      { threshold },
    );

    observer.observe(el);
  }

  function initCountUp(el, end, duration = 2000, suffix = "") {
    if (!el) return;

    let hasStarted = false;

    const animate = () => {
      if (hasStarted) return;
      hasStarted = true;

      const startTime = performance.now();
      const startValue = 0;

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const currentValue = Math.floor(
          startValue + (end - startValue) * progress,
        );

        el.textContent = currentValue.toLocaleString("es-CO") + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate();
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
  }

  return {
    initScrollAnimation,
    initScrollReveal,
    initCountUp,
  };
})();

window.DiexApp = (() => {
  function mountSharedLayout() {
    if (window.DiexComponents) {
      if (typeof window.DiexComponents.mountNavbar === "function") {
        window.DiexComponents.mountNavbar();
      }
      if (typeof window.DiexComponents.mountFooter === "function") {
        window.DiexComponents.mountFooter();
      }
    }
  }

  function initClientsSlider() {
    const target = document.querySelector(".clients-slider-target");
    if (!target) return;

    if (target.dataset.initialized === "true") return;
    target.dataset.initialized = "true";

    const clients = [
      {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      },
      {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      },
      {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      },
      {
        name: "Nike",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      },
      {
        name: "Coca-Cola",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
      },
      {
        name: "BMW",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
      },
      {
        name: "Adidas",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
      },
    ];

    const logosHTML = clients
      .map(
        (c) => `
          <div class="clients-logo" role="listitem" aria-label="${c.name}">
            <img src="${c.logo}" alt="${c.name}" loading="lazy" />
          </div>
        `,
      )
      .join("");

    target.innerHTML = `
      <div class="clients-slider-container">
        <button class="clients-arrow clients-arrow--prev" aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <div class="clients-slider-wrap">
          <div class="clients-track" role="list" aria-live="off">
            ${logosHTML}${logosHTML}
          </div>
        </div>
        <button class="clients-arrow clients-arrow--next" aria-label="Siguiente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    `;

    const wrap = target.querySelector(".clients-slider-wrap");
    const prevBtn = target.querySelector(".clients-arrow--prev");
    const nextBtn = target.querySelector(".clients-arrow--next");

    if (prevBtn && nextBtn && wrap) {
      const scrollAmount = 200;
      nextBtn.addEventListener("click", () => {
        wrap.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
      prevBtn.addEventListener("click", () => {
        wrap.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    }
  }

  function initGlobalCounters() {
    const { initCountUp } = window.DiexAnimations;

    document.querySelectorAll("[data-end]").forEach((el) => {
      if (el.dataset.countInitialized === "true") return;
      el.dataset.countInitialized = "true";

      initCountUp(
        el,
        parseInt(el.dataset.end, 10),
        parseInt(el.dataset.duration, 10) || 2000,
        el.dataset.suffix || "",
      );
    });
  }

  function init() {
    mountSharedLayout();
    initClientsSlider();
    initGlobalCounters();
  }

  return {
    init,
    mountSharedLayout,
    initClientsSlider,
    initGlobalCounters,
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  window.DiexApp.init();
});
