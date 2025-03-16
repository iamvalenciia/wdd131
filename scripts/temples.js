// Function to set the current year in the footer
function setCurrentYear() {
  const currentYearElement = document.getElementById("currentyear");
  const currentYear = new Date().getFullYear();
  if (currentYearElement) {
    currentYearElement.textContent = currentYear;
  }
}

// Function to set the last modified date in the footer
function setLastModified() {
  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
  }
}

// Function to create and manage the hamburger menu
function setupHamburgerMenu() {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  // Create hamburger button and close button elements
  const hamburgerButton = document.createElement("div");
  hamburgerButton.classList.add("hamburger");
  hamburgerButton.innerHTML = "&#9776;"; // Hamburger icon

  const closeButton = document.createElement("div");
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = "&times;"; // X symbol
  closeButton.style.display = "none"; // Hide initially

  // Add the buttons to the header before the nav
  header.insertBefore(hamburgerButton, nav);
  header.insertBefore(closeButton, nav);

  // Set initial state for mobile
  function checkScreenSize() {
    if (window.innerWidth < 768) {
      nav.classList.add("hidden");
      hamburgerButton.style.display = "block";
    } else {
      nav.classList.remove("hidden");
      hamburgerButton.style.display = "none";
      closeButton.style.display = "none";
    }
  }

  // Toggle menu visibility when hamburger is clicked
  hamburgerButton.addEventListener("click", function () {
    nav.classList.remove("hidden");
    hamburgerButton.style.display = "none";
    closeButton.style.display = "block";
  });

  // Hide menu when close button is clicked
  closeButton.addEventListener("click", function () {
    nav.classList.add("hidden");
    closeButton.style.display = "none";
    hamburgerButton.style.display = "block";
  });

  // Check screen size on load and resize
  window.addEventListener("resize", checkScreenSize);
  checkScreenSize(); // Initial check
}

// Run all functions when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  setCurrentYear();
  setLastModified();
  setupHamburgerMenu();
});
