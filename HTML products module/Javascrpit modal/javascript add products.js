// Function to open the modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Function to handle form submission
function saveProducts(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve the product names and prices from the form
  var products = [];
  for (var i = 1; i <= 5; i++) {
    var productName = document.getElementById("product" + i).value;
    var productPrice = document.getElementById("price" + i).value;

    // Create an object for each product and add it to the products array
    var product = {
      name: productName,
      price: productPrice
    };
    products.push(product);
  }

  // Display the products (for demonstration purposes)
  console.log(products);

  // You can perform further processing with the products data
  // For example, send it to the server using AJAX or update the UI

  closeModal(); // Close the modal
}

// Add event listener to the form submit button
document.querySelector("form").addEventListener("submit", saveProducts);
