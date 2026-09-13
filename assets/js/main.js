function safe(label, fn) {
  try {
    fn();
  } catch (err) {
    console.error("[site]", label, "failed:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  /* ---------------- Theme toggle ---------------- */
  safe("theme", () => {
    const themeBtn = document.querySelector(".theme-toggle");
    let stored = null;
    try { stored = localStorage.getItem("theme"); } catch (e) { /* storage unavailable, ignore */ }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored) root.setAttribute("data-theme", stored);
    else if (prefersDark) root.setAttribute("data-theme", "dark");

    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const next = current === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable, ignore */ }
      });
    }
  });

  /* ---------------- Mobile nav ---------------- */
  safe("mobile nav", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
      navLinks.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => navLinks.classList.remove("open"))
      );
    }
  });

  /* ---------------- Typing effect for role line ---------------- */
  safe("typing effect", () => {
    const typedEl = document.getElementById("typed");
    const roles = (typeof SITE_DATA !== "undefined" && SITE_DATA.roles) || [];
    if (!typedEl || !roles.length) return;

    let roleIndex = 0, charIndex = 0, deleting = false;
    const TYPE_SPEED = 55, DELETE_SPEED = 30, HOLD = 1400;

    function tick() {
      const word = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        typedEl.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          setTimeout(tick, HOLD);
          return;
        }
      } else {
        charIndex--;
        typedEl.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED);
    }
    tick();
  });

  /* ---------------- Scroll-spy nav ---------------- */
  safe("scroll-spy", () => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    const navAnchors = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
    if (!sections.length) return;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = navAnchors.filter((a) => a.getAttribute("href") === "#" + entry.target.id)[0];
          if (!link) return;
          if (entry.isIntersecting) {
            navAnchors.forEach((a) => a.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  });

  /* ---------------- Render: timeline ---------------- */
  safe("timeline render", () => {
    const timelineEl = document.getElementById("timeline");
    if (!timelineEl || !SITE_DATA.timeline) return;
    timelineEl.innerHTML = SITE_DATA.timeline
      .map(
        (t) => `
      <div class="tl-item">
        <span class="tl-date">${t.date}</span>
        <h3>${t.title}</h3>
        <span class="tl-org">${t.org}</span>
        <ul>${t.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      </div>`
      )
      .join("");
  });

  /* ---------------- Render: publications + filters ---------------- */
  safe("publications render", () => {
    const pubList = document.getElementById("pub-list");
    const pubFilters = document.getElementById("pub-filters");
    if (!pubList || !SITE_DATA.publications) return;

    function pubHTML(p) {
      const authorsHTML = p.authors
        .map((a) => (a === p.me ? `<b>${a}</b>` : a))
        .join(", ");
      const linksHTML = (p.links || [])
        .map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`)
        .join("");
      return `
      <div class="pub-item" data-type="${p.type}">
        <span class="pub-venue">${p.year}</span>
        <div>
          <div class="pub-title">${p.title}</div>
          <div class="pub-authors">${authorsHTML}</div>
          <span class="pub-tag">${p.venue}</span>
        </div>
        <div class="pub-links">${linksHTML}</div>
      </div>`;
    }
    pubList.innerHTML = SITE_DATA.publications.map(pubHTML).join("");

    if (pubFilters) {
      pubFilters.addEventListener("click", (e) => {
        const btn = e.target.closest ? e.target.closest(".filter-btn") : null;
        if (!btn) return;
        pubFilters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const type = btn.dataset.type;
        pubList.querySelectorAll(".pub-item").forEach((item) => {
          item.classList.toggle("hide", type !== "all" && item.dataset.type !== type);
        });
      });
    }
  });

  /* ---------------- Render: projects + tabs ---------------- */
  safe("projects render", () => {
    const projResearch = document.getElementById("proj-research");
    const projPersonal = document.getElementById("proj-personal");
    if (!SITE_DATA.projects) return;

    function projCard(p) {
      return `
      <div class="proj-card">
        <span class="stack">${p.stack}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        ${p.link ? `<a class="proj-link" href="${p.link}" target="_blank" rel="noopener">${p.link.replace(/^https?:\/\//, "")} ↗</a>` : ""}
      </div>`;
    }
    if (projResearch) projResearch.innerHTML = SITE_DATA.projects.research.map(projCard).join("");
    if (projPersonal) projPersonal.innerHTML = SITE_DATA.projects.personal.map(projCard).join("");

    const projTabs = document.querySelectorAll(".proj-tab");
    projTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        projTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        document.querySelectorAll(".proj-panel").forEach((p) => p.classList.remove("active"));
        const panel = document.getElementById("panel-" + tab.dataset.tab);
        if (panel) panel.classList.add("active");
      });
    });
  });

  /* ---------------- Render: posters ---------------- */
  safe("posters render", () => {
    const posterList = document.getElementById("poster-list");
    if (!posterList || !SITE_DATA.posters) return;
    posterList.innerHTML = SITE_DATA.posters
      .map(
        (p) => `
      <div class="poster-item">
        <div>
          <h3>${p.title}</h3>
        </div>
        <span class="poster-venue">${p.venue}</span>
      </div>`
      )
      .join("");
  });

  /* ---------------- Render: awards ---------------- */
  safe("awards render", () => {
    const awardList = document.getElementById("award-list");
    if (!awardList || !SITE_DATA.awards) return;
    awardList.innerHTML = SITE_DATA.awards
      .map((a) => `<li><b>${a.name}</b>${a.note ? `<span>${a.note}</span>` : ""}</li>`)
      .join("");
  });

  /* ---------------- Footer year ---------------- */
  safe("footer year", () => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
});
