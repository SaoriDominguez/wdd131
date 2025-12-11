// main.js – The Primary Treehouse

// -------- footer --------
function updateFooterInfo() {
  const yearSpan = document.querySelector("#current-year");
  const modifiedSpan = document.querySelector("#last-modified");
  const year = new Date().getFullYear();
  if (yearSpan) yearSpan.textContent = year;
  if (modifiedSpan) modifiedSpan.textContent = document.lastModified;
}

// -------- hamburger nav --------
function setupNavigation() {
  const header = document.querySelector(".header-inner");
  const nav = header?.querySelector("nav");
  const toggleBtn = header?.querySelector(".nav-toggle");

  if (!nav || !toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
}

// -------- activity data --------
const activities = [
  {
    id: "nursery-jesus-loves-me",
    title: "Jesus Loves Me – Circle Time",
    ageGroup: "Nursery",
    type: "Activity",
    duration: 10,
    prep: "Low",
    scripture: "3 Nephi 17:21–23",
    summary:
      "Simple circle time with a song, a soft toy hug, and a picture of Jesus surrounded by children.",
    // aquí solo cambiamos el nombre del archivo de imagen
    image: "images/jesus-loves-me-circle-time.webp",
    tags: ["song", "reverent", "short"]
  },
  {
    id: "ctr-armor-of-god",
    title: "Armor of God Dress-Up",
    ageGroup: "CTR",
    type: "Activity",
    duration: 20,
    prep: "Medium",
    scripture: "Ephesians 6:11",
    summary:
      "Use paper or felt pieces to represent the armor of God and let the children build it while they learn each part.",
    // aquí también solo cambiamos el archivo
    image: "images/armor-of-god-dressup.webp",
    tags: ["movement", "scripture", "visual"]
  },
  {
    id: "valiant-testimony-tree",
    title: "Testimony Tree",
    ageGroup: "Valiant",
    type: "FHE Idea",
    duration: 25,
    prep: "Low",
    scripture: "Alma 32:27",
    summary:
      "Children write something they know about Jesus on paper leaves and add them to a poster or paper tree.",
    // este puede quedarse igual si tu archivo se llama así
    image: "images/testimony-tree.webp",
    tags: ["family", "craft", "faith"]
  },
  {
    id: "service-sunshine-notes",
    title: "Sunshine Notes",
    ageGroup: "CTR",
    type: "Service",
    duration: 15,
    prep: "Low",
    scripture: "Mosiah 2:17",
    summary:
      "Small cheerful notes the children can give to neighbors, leaders, or classmates to brighten their day.",
    image: "images/sunshine-notes.webp",
    tags: ["service", "kindness", "writing"]
  },
  {
    id: "nursery-color-hunt",
    title: "Color Hunt in the Hallway",
    ageGroup: "Nursery",
    type: "Activity",
    duration: 12,
    prep: "Low",
    scripture: "",
    summary:
      "Quiet color hunt inside the room or hallway, teaching reverence while the little ones look around.",
    image: "images/color-hunt.webp",
    tags: ["reverent", "movement"]
  },
  {
    id: "valiant-scripture-journal",
    title: "Scripture Journal Prompt",
    ageGroup: "Valiant",
    type: "Teaching Tip",
    duration: 15,
    prep: "Low",
    scripture: "",
    summary:
      "Give children a simple question to reflect on and write about in a scripture journal or notebook.",
    image: "images/scripture-journal.webp",
    tags: ["journaling", "quiet"]
  }
];

// ---------- localStorage helpers ----------
const FAV_KEY = "pt-favorites";
const SHARE_INFO_KEY = "pt-share-info";

function getFavorites() {
  try {
    const raw = localStorage.getItem(FAV_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveFavorites(list) {
  localStorage.setItem(FAV_KEY, JSON.stringify(list));
}

// ---------- render activities ----------
function renderActivities(list, container) {
  if (!container) return;

  const favorites = getFavorites();
  if (!list.length) {
    container.innerHTML =
      '<p class="muted">No ideas match those filters. Try adjusting your search.</p>';
    return;
  }

  const cards = list
    .map((item) => {
      const isFav = favorites.includes(item.id);
      const tagsHtml = item.tags
        .map((tag) => `<span class="chip">${tag}</span>`)
        .join("");

      return `
        <article class="activity-card" data-id="${item.id}">
          <div class="activity-media">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
          </div>
          <div class="activity-body">
            <h3>${item.title}</h3>
            <div class="chip-row">
              <span class="chip age">${item.ageGroup}</span>
              <span class="chip type">${item.type}</span>
              ${tagsHtml}
            </div>
            <div class="activity-meta">
              <span><strong>Time:</strong> ${item.duration} min</span> ·
              <span><strong>Prep:</strong> ${item.prep}</span>
            </div>
            <p>${item.summary}</p>
            ${
              item.scripture
                ? `<p class="activity-meta"><strong>Scripture:</strong> ${item.scripture}</p>`
                : ""
            }
            <div class="activity-actions">
              <button class="btn-fav ${isFav ? "faved" : ""}" type="button">
                ${isFav ? "♥ Saved" : "♡ Save idea"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  container.innerHTML = cards;

  // favorite listeners
  container.querySelectorAll(".btn-fav").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".activity-card");
      const id = card.dataset.id;
      let favorites = getFavorites();

      if (favorites.includes(id)) {
        favorites = favorites.filter((fav) => fav !== id);
      } else {
        favorites.push(id);
      }
      saveFavorites(favorites);

      if (favorites.includes(id)) {
        btn.classList.add("faved");
        btn.textContent = "♥ Saved";
      } else {
        btn.classList.remove("faved");
        btn.textContent = "♡ Save idea";
      }
    });
  });
}

// ---------- activities.html filters ----------
function initActivitiesPage() {
  const container = document.querySelector("#activity-grid");
  if (!container) return;

  const selectAge = document.querySelector("#filter-age");
  const selectType = document.querySelector("#filter-type");
  const searchInput = document.querySelector("#filter-search");
  const showFavsToggle = document.querySelector("#filter-favs");

  function applyFilters() {
    const ageValue = selectAge?.value || "all";
    const typeValue = selectType?.value || "all";
    const searchValue = (searchInput?.value || "").toLowerCase();
    const favOnly = showFavsToggle?.checked || false;
    const favorites = getFavorites();

    let filtered = activities.slice();

    if (ageValue !== "all") {
      filtered = filtered.filter((a) => a.ageGroup === ageValue);
    }
    if (typeValue !== "all") {
      filtered = filtered.filter((a) => a.type === typeValue);
    }
    if (searchValue) {
      filtered = filtered.filter(
        (a) =>
          a.title.toLowerCase().includes(searchValue) ||
          a.summary.toLowerCase().includes(searchValue)
      );
    }
    if (favOnly) {
      filtered = filtered.filter((a) => favorites.includes(a.id));
    }

    renderActivities(filtered, container);
  }

  [selectAge, selectType, searchInput, showFavsToggle].forEach((el) => {
    if (!el) return;
    el.addEventListener("input", applyFilters);
    el.addEventListener("change", applyFilters);
  });

  applyFilters();
}

// ---------- home featured ----------
function initHomeFeatured() {
  const container = document.querySelector("#featured-activities");
  if (!container) return;
  const featured = activities.slice(0, 3);
  renderActivities(featured, container);
}

// ---------- teaching-tips.html ----------
function initTeachingTips() {
  const list = document.querySelector(".tip-list");
  if (!list) return;

  const tipsFromData = activities.filter((a) => a.type === "Teaching Tip");

  const staticTips = [
    {
      id: "tip-reverence",
      title: "Begin with an Invitation, Not a Lecture",
      body:
        "Instead of starting class by correcting behavior, invite children to do something good: sing, take a deep breath, or look at a picture of Jesus."
    },
    {
      id: "tip-choice",
      title: "Offer Small Reverent Choices",
      body:
        "Let children choose between two songs, two scriptures, or two activities. They feel ownership and are more willing to participate."
    }
  ];

  const merged = [
    ...staticTips,
    ...tipsFromData.map((a) => ({
      id: a.id,
      title: a.title,
      body: a.summary
    }))
  ];

  list.innerHTML = merged
    .map(
      (tip) => `
    <article class="tip-item">
      <header>
        <h3>${tip.title}</h3>
        <button class="tip-toggle" type="button">Show</button>
      </header>
      <div class="tip-body collapsed">
        <p>${tip.body}</p>
      </div>
    </article>
  `
    )
    .join("");

  list.querySelectorAll(".tip-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const body = btn.closest(".tip-item").querySelector(".tip-body");
      const isCollapsed = body.classList.contains("collapsed");
      body.classList.toggle("collapsed");
      btn.textContent = isCollapsed ? "Hide" : "Show";
    });
  });
}

// ---------- share form (home) ----------
function initShareForm() {
  const form = document.querySelector("#share-form");
  if (!form) return;

  const messageEl = document.querySelector("#share-message");

  // preload name/email
  try {
    const saved = JSON.parse(localStorage.getItem(SHARE_INFO_KEY));
    if (saved) {
      if (saved.name) form.elements.name.value = saved.name;
      if (saved.email) form.elements.email.value = saved.email;
    }
  } catch {
    /* ignore */
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const title = formData.get("idea-title").trim();
    const age = formData.get("age-group");
    const details = formData.get("details").trim();

    if (!name || !title || !details) {
      messageEl.textContent =
        "Please include at least your name, an idea title, and the main details.";
      messageEl.style.color = "#b91c1c";
      return;
    }

    localStorage.setItem(SHARE_INFO_KEY, JSON.stringify({ name, email }));

    messageEl.style.color = "#166534";
    messageEl.textContent = `Thanks, ${name}! Your idea for ${age} has been stored on this device. You can now share it with your presidency or keep it in your own notes.`;

    form.reset();
  });
}

// ---------- on load ----------
document.addEventListener("DOMContentLoaded", () => {
  updateFooterInfo();
  setupNavigation();
  initHomeFeatured();
  initActivitiesPage();
  initTeachingTips();
  initShareForm();
});