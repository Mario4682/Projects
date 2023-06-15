// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addProductBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
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

// Handle form submission
var productForm = document.getElementById("productForm");
productForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  var productName = document.getElementById("productName").value;
  var productPrice = document.getElementById("productPrice").value;
  
  // Add your logic here to handle the submitted product data
  
  // Clear the form fields
  productForm.reset();
  
  // Close the modal
  modal.style.display = "none";
});
