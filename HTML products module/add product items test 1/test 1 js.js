// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addProductBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  generateProductItems(); // Generate the product items dynamically
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Generate the product items dynamically
function generateProductItems() {
  var productItemsContainer = document.getElementById("productItems");
  productItemsContainer.innerHTML = ""; // Clear previous items

  for (var i = 1; i <= 5; i++) {
    var productItem = document.createElement("div");
    productItem.className = "product-item";

    var productNameLabel = document.createElement("label");
    productNameLabel.setAttribute("for", "productName" + i);
    productNameLabel.textContent = "Product Name:";

    var productNameInput = document.createElement("input");
    productNameInput.setAttribute("type", "text");
    productNameInput.setAttribute("id", "productName" + i);
    productNameInput.required = true;

    var productPriceLabel = document.createElement("label");
    productPriceLabel.setAttribute("for", "productPrice" + i);
    productPriceLabel.textContent = "Product Price:";

    var productPriceInput = document.createElement("input");
    productPriceInput.setAttribute("type", "number");
    productPriceInput.setAttribute("id", "productPrice" + i);
    productPriceInput.required = true;

    productItem.appendChild(productNameLabel);
    productItem.appendChild(productNameInput);
    productItem.appendChild(productPriceLabel);
    productItem.appendChild(productPriceInput);

    productItemsContainer.appendChild(productItem);
  }
}

// Handle form submission
var productForm = document.getElementById("productForm");
productForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Loop through the submitted product items
  for (var i = 1; i <= 5; i++) {
    var productName = document.getElementById("productName" + i).value;
    var productPrice = document.getElementById("productPrice" + i).value;
    
    // Add your logic here to handle the submitted product data
  }
  
  // Clear the form fields
  productForm.reset();
  
  // Close the modal
  modal.style.display = "none";
});
