document.addEventListener("DOMContentLoaded", function () {
  // Increment review count
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  reviewCount = parseInt(reviewCount) + 1;
  localStorage.setItem("reviewCount", reviewCount);

  // Display the review count
  document.getElementById("reviewCount").textContent = reviewCount;

  // Display the review details
  const reviewDetails = document.getElementById("reviewDetails");
  const urlParams = new URLSearchParams(window.location.search);

  // Create a summary of submitted data
  const detailsHTML = `
        <div class="detail-item">
            <strong>Product:</strong> ${
              urlParams.get("product") || "Not specified"
            }
        </div>
        <div class="detail-item">
            <strong>Rating:</strong> ${
              urlParams.get("rating") || "Not specified"
            } star(s)
        </div>
        <div class="detail-item">
            <strong>Installation Date:</strong> ${
              formatDate(urlParams.get("installDate")) || "Not specified"
            }
        </div>
        <div class="detail-item">
            <strong>Features Liked:</strong> ${
              urlParams.getAll("features").join(", ") || "None selected"
            }
        </div>
        <div class="detail-item">
            <strong>Review:</strong> ${
              urlParams.get("review") || "No written review provided"
            }
        </div>
        <div class="detail-item">
            <strong>Submitted By:</strong> ${
              urlParams.get("userName") || "Anonymous"
            }
        </div>
    `;

  reviewDetails.innerHTML = detailsHTML;
});

// Format date in a more readable way
function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
