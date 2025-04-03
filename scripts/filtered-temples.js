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
  {
    templeName: "Ecuador Guayaquil",
    location: "Guayaquil, Ecuador",
    dedicated: "2000, July, 21",
    area: 10000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guayaquil-ecuador/400x250/guayaquil-ecuador-temple-lds-884500-wallpaper.jpg",
  },
  {
    templeName: "Ecuador Quito",
    location: "Quito, Ecuador",
    dedicated: "2019, July, 13",
    area: 10000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quito-ecuador/400x250/quito_ecuador_temple.jpg",
  },
  {
    templeName: "Guatemala City Guatemala Temple",
    location: "Guatemala City, Guatemala",
    dedicated: "2015, January, 15",
    area: 10000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guatemala-city-guatemala/400x250/lds-temple-guatemala-city-1021144-wallpaper.jpg",
  },
  // Add more temple objects here...
];

// Get the DOM elements we'll be working with
const mainElement = document.querySelector("main");
const navLinks = document.querySelectorAll("nav a");

// Set the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modified date in the footer
document.getElementById(
  "lastModified"
).textContent = `Last Modified: ${document.lastModified}`;

// Function to create temple cards
function displayTemples(templeList) {
  // Clear the main element
  mainElement.innerHTML = "";

  // Create a temple cards container
  const templesContainer = document.createElement("div");
  templesContainer.classList.add("temples-container");

  // Loop through each temple and create a card
  templeList.forEach((temple) => {
    // Create the temple card
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    // Create and set up the temple name
    const templeName = document.createElement("h2");
    templeName.textContent = temple.templeName;

    // Create and set up the temple location
    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    // Create and set up the dedication date
    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    // Create and set up the temple area
    const area = document.createElement("p");
    area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;

    // Create and set up the temple image with lazy loading
    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = "lazy"; // Enable native lazy loading

    // Append all elements to the temple card
    templeCard.appendChild(templeName);
    templeCard.appendChild(location);
    templeCard.appendChild(dedicated);
    templeCard.appendChild(area);
    templeCard.appendChild(image);

    // Add the temple card to the container
    templesContainer.appendChild(templeCard);
  });

  // Add the container to the main element
  mainElement.appendChild(templesContainer);
}

// Function to filter temples based on criteria
function filterTemples(criteria) {
  let filteredTemples;

  switch (criteria) {
    case "old":
      // Temples built before 1900
      filteredTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(", ")[0]);
        return year < 1900;
      });
      break;
    case "new":
      // Temples built after 2000
      filteredTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(", ")[0]);
        return year > 2000;
      });
      break;
    case "large":
      // Temples larger than 90,000 square feet
      filteredTemples = temples.filter((temple) => temple.area > 90000);
      break;
    case "small":
      // Temples smaller than 10,000 square feet
      filteredTemples = temples.filter((temple) => temple.area < 10000);
      break;
    default:
      // Home - show all temples
      filteredTemples = temples;
  }

  return filteredTemples;
}

// Set up click event listeners for the navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // Remove active class from all links
    navLinks.forEach((navLink) => navLink.classList.remove("active"));

    // Add active class to the clicked link
    this.classList.add("active");

    // Get the filter criteria from the link text
    const criteria = this.textContent.toLowerCase();

    // Filter and display the temples
    const filteredTemples = filterTemples(criteria);
    displayTemples(filteredTemples);
  });
});

// Display all temples when the page loads (Home view)
document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);

  // Set the Home link as active by default
  navLinks[0].classList.add("active");
});
