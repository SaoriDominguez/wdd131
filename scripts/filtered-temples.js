"use strict";

// ---------- Temple data ----------
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Extra 1
{
  templeName: "Rome Italy",
  location: "Rome, Italy",
  dedicated: "2019, March, 10",
  area: 41000,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-exterior-2219874.jpg"
},

// Extra 2
{
  templeName: "Paris France",
  location: "Paris, France",
  dedicated: "2017, May, 21",
  area: 44175,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-lds-2038514-wallpaper.jpg"
},

// Extra 3
{
  templeName: "San Diego California",
  location: "San Diego, California, United States",
  dedicated: "1993, April, 25",
  area: 72000,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-california-mormon-temple-1081977-wallpaper.jpg"
},
];

// ---------- Helpers ----------
const cardsContainer = document.querySelector("#templeCards");
const filterTitle = document.querySelector("#filterTitle");

// construye las tarjetas
function renderTemples(list) {
  cardsContainer.innerHTML = ""; // limpia

  list.forEach((temple) => {
    const card = document.createElement("article");
    card.classList.add("temple-card");

    card.innerHTML = `
      <img 
        src="${temple.imageUrl}" 
        alt="${temple.templeName} Temple" 
        loading="lazy"
      >
      <div class="temple-card-content">
        <h3>${temple.templeName}</h3>
        <p><span class="label">Location:</span> ${temple.location}</p>
        <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
        <p><span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft</p>
      </div>
    `;

    cardsContainer.appendChild(card);
  });
}

// "YYYY, Month, Day"
function getTempleYear(temple) {
  return parseInt(temple.dedicated, 10);
}

// ---------- Filtros ----------
function applyFilter(filter) {
  let filtered = temples;
  let title = "All Temples";

  switch (filter) {
    case "old":
      filtered = temples.filter((t) => getTempleYear(t) < 1900);
      title = "Old Temples (Before 1900)";
      break;
    case "new":
      filtered = temples.filter((t) => getTempleYear(t) > 2000);
      title = "New Temples (After 2000)";
      break;
    case "large":
      filtered = temples.filter((t) => t.area > 90000);
      title = "Large Temples (> 90,000 sq ft)";
      break;
    case "small":
      filtered = temples.filter((t) => t.area < 10000);
      title = "Small Temples (< 10,000 sq ft)";
      break;
    case "home":
    default:
      filtered = temples;
      title = "All Temples";
  }

  filterTitle.textContent = title;
  renderTemples(filtered);
}

// ---------- Nav events ----------
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // clase activa
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    const filter = link.dataset.filter;
    applyFilter(filter);

    // cerrar menú en mobile
    navigation.classList.remove("open");
    menuButton.classList.remove("open");
  });
});

// ---------- Hamburguesa ----------
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});

// ---------- Footer dinámico ----------
const yearSpan = document.querySelector("#currentyear");
const lastModifiedP = document.querySelector("#lastModified");

const now = new Date();
yearSpan.textContent = now.getFullYear();
lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;

// ---------- Inicial ----------
applyFilter("home");
navLinks[0].classList.add("active");
