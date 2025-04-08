// Product array as provided in the assignment
const products = [
  { id: 1, name: "Premium Water Filter" },
  { id: 2, name: "Eco-Friendly Vacuum Cleaner" },
  { id: 3, name: "Smart Home Security System" },
  { id: 4, name: "Ergonomic Office Chair" },
  { id: 5, name: "Wireless Noise-Cancelling Headphones" },
  { id: 6, name: "Energy-Efficient Air Purifier" },
  { id: 7, name: "Robot Vacuum Cleaner" },
  { id: 8, name: "Bluetooth Smart Speaker" },
];

// Populate the product dropdown when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const productSelect = document.getElementById("product");

  // Add each product to the dropdown
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});
