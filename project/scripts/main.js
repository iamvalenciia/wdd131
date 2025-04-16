// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Toggle
  initMobileNav();

  // Set current year in footer
  setCurrentYear();

  // Theme toggle functionality
  initThemeToggle();

  // Project filtering functionality (if on projects page)
  if (document.querySelector(".filter-btn")) {
    initProjectFilters();
  }

  // Contact form validation and submission (if on contact page)
  if (document.getElementById("messageForm")) {
    initContactForm();
  }

  // Project saving functionality (if on projects page)
  if (document.getElementById("save-project")) {
    initProjectSaving();
  }

  // Display saved projects (if on projects page)
  if (document.getElementById("saved-projects-list")) {
    displaySavedProjects();
  }

  // Display saved messages (if on contact page)
  if (document.getElementById("messages-container")) {
    displaySavedMessages();
  }
});

// Mobile Navigation functionality
function initMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }
}

// Set current year in footer copyright
function setCurrentYear() {
  const currentYearElements = document.querySelectorAll("#current-year");
  const currentYear = new Date().getFullYear();

  currentYearElements.forEach((element) => {
    element.textContent = currentYear;
  });
}

// Theme toggle functionality
function initThemeToggle() {
  const lightThemeBtn = document.getElementById("light-theme");
  const darkThemeBtn = document.getElementById("dark-theme");

  // Check if theme is stored in localStorage and apply it
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    if (lightThemeBtn && darkThemeBtn) {
      lightThemeBtn.classList.remove("active");
      darkThemeBtn.classList.add("active");
    }
  }

  // Add event listeners to theme buttons
  if (lightThemeBtn && darkThemeBtn) {
    lightThemeBtn.addEventListener("click", () => {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
      lightThemeBtn.classList.add("active");
      darkThemeBtn.classList.remove("active");
    });

    darkThemeBtn.addEventListener("click", () => {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
      darkThemeBtn.classList.add("active");
      lightThemeBtn.classList.remove("active");
    });
  }
}

// Project filtering functionality
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter projects
      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Contact form validation and submission
function initContactForm() {
  const form = document.getElementById("messageForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const reasonSelect = document.getElementById("reason");
  const newsletterCheckbox = document.getElementById("newsletter");
  const formStatus = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset error messages
    resetErrors();

    // Validate form
    if (validateForm()) {
      // Create message object
      const message = {
        id: Date.now(),
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
        reason: reasonSelect.value,
        newsletter: newsletterCheckbox.checked,
        date: new Date().toLocaleString(),
      };

      // Save message to localStorage
      saveMessage(message);

      // Show success message
      formStatus.textContent = "Message sent successfully!";
      formStatus.className = "form-status success";

      // Reset form
      form.reset();

      // Refresh displayed messages
      displaySavedMessages();
    }
  });

  // Form validation function
  function validateForm() {
    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Name is required");
      isValid = false;
    }

    // Validate email
    if (emailInput.value.trim() === "") {
      showError(emailInput, "Email is required");
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      showError(emailInput, "Please enter a valid email");
      isValid = false;
    }

    // Validate subject
    if (subjectInput.value.trim() === "") {
      showError(subjectInput, "Subject is required");
      isValid = false;
    }

    // Validate message
    if (messageInput.value.trim() === "") {
      showError(messageInput, "Message is required");
      isValid = false;
    } else if (messageInput.value.length < 10) {
      showError(messageInput, "Message must be at least 10 characters long");
      isValid = false;
    }
    // Validate reason
  }
}
