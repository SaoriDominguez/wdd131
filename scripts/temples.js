"use strict";

// ====== Datos de templos (ejemplo) ======
const temples = [
   {
    templeName: "Mexico City Mexico Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "images/cdmx-temple.jpg",
  },
  {
    templeName: "Guadalajara Mexico Temple",
    location: "Guadalajara, Mexico",
    dedicated: "2001-04-29",
    area: 10700,
    imageUrl: "images/cdmx-temple.jpg",
  },
  {
    templeName: "Monterrey Mexico Temple",
    location: "Monterrey, Mexico",
    dedicated: "2002-04-28",
    area: 16500,
    imageUrl: "images/cdmx-temple.jpg",
  },
  {
    templeName: "Mérida Mexico Temple",
    location: "Mérida, Mexico",
    dedicated: "2000-07-08",
    area: 10800,
    imageUrl: "images/cdmx-temple.jpg",
  },
  {
    templeName: "Tijuana Mexico Temple",
    location: "Tijuana, Mexico",
    dedicated: "2015-12-13",
    area: 30500,
    imageUrl: "images/cdmx-temple.jpg",
  },
  {
    templeName: "Oaxaca Mexico Temple",
    location: "Oaxaca, Mexico",
    dedicated: "2000-03-11",
    area: 10500,
    imageUrl: "images/cdmx-temple.jpg",
  },
  {
    templeName: "Veracruz Mexico Temple",
    location: "Veracruz, Mexico",
    dedicated: "2000-07-09",
    area: 10700,
    imageUrl: "images/cdmx-temple.jpg",
  },
  {
    templeName: "Chihuahua Mexico Temple",
    location: "Chihuahua, Mexico",
    dedicated: "2000-03-11",
    area: 10700,
    imageUrl: "images/cdmx-temple.jpg",
  },
  {
    templeName: "Puebla Mexico Temple",
    location: "Puebla, Mexico",
    dedicated: "2024-11-10",
    area: 30000,
    imageUrl: "images/cdmx-temple.jpg",
  },
];

// ====== Referencias al DOM ======
const templeGrid = document.querySelector("#temple-grid");
const navLinks = document.querySelectorAll(".nav-links a");
const viewTitle = document.querySelector("#view-title");
const hamButton = document.querySelector("#menu");
const nav = document.querySelector(".nav-links");

// ====== Footer: año actual + última modificación ======
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastModP = document.getElementById("lastModified");
if (lastModP) {
  lastModP.textContent = `Last Modification: ${document.lastModified}`;
}

// ====== Función para renderizar templos según filtro ======
function renderTemples(filter = "home") {
  // limpiar contenido actual
  templeGrid.innerHTML = "";

  let filteredTemples = temples;

  const currentYear = new Date().getFullYear();

  switch (filter) {
    case "old":
      // templos dedicados antes de 1900
      filteredTemples = temples.filter((t) => {
        const year = new Date(t.dedicated).getFullYear();
        return year < 1900;
      });
      viewTitle.textContent = "Old Temples";
      break;

    case "new":
      // templos dedicados desde 2000
      filteredTemples = temples.filter((t) => {
        const year = new Date(t.dedicated).getFullYear();
        return year >= 2000;
      });
      viewTitle.textContent = "New Temples";
      break;

    case "large":
      // templos con área > 90,000 sq ft
      filteredTemples = temples.filter((t) => t.area > 90000);
      viewTitle.textContent = "Large Temples";
      break;

    case "small":
      // templos con área < 40,000 sq ft
      filteredTemples = temples.filter((t) => t.area < 40000);
      viewTitle.textContent = "Small Temples";
      break;

    default:
      viewTitle.textContent = "Home";
      break;
  }

  // crear las figuras
  filteredTemples.forEach((temple) => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      ${temple.templeName}<br />
      <span class="temple-meta">
        ${temple.location} · Dedicated: ${new Date(
      temple.dedicated
    ).getFullYear()} · Area: ${temple.area.toLocaleString()} sq ft
      </span>
    `;

    figure.appendChild(img);
    figure.appendChild(caption);
    templeGrid.appendChild(figure);
  });
}

// ====== Menú hamburguesa ======
if (hamButton && nav) {
  hamButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    hamButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    hamButton.textContent = isOpen ? "✕" : "☰";
  });
}

// ====== Filtros de navegación ======
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // actualizar clase active
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // obtener filtro de data-filter
    const filter = link.dataset.filter || "home";
    renderTemples(filter);

    // cerrar menú en móvil al elegir opción
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      hamButton.setAttribute("aria-expanded", "false");
      hamButton.textContent = "☰";
    }
  });
});

// ====== Render inicial ======
renderTemples("home");
