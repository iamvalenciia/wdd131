// Select all images with the data-src attribute
const images = document.querySelectorAll("img[data-src]");

// Function to load the image
const loadImage = (img) => {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.removeAttribute("data-src");
};

// Options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin
  threshold: 0.1, // Load when 10% of the image is visible
};

// Create the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      observer.unobserve(entry.target); // Stop observing the image after it's loaded
    }
  });
}, options);

// Observe each image
images.forEach((img) => {
  observer.observe(img);
});
