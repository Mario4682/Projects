<script>
  // JavaScript variable containing product data
  var products = [
    { name: 'Iphone, price: 10 },
    { name: 'Motorola', price: 20 },
    { name: 'Samsung', price: 30 },
  ];

  // Function to open the modal and display product details
  function openModal() {
    var modal = document.getElementById('myModal');
    var productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear previous product list

    // Add each product to the modal
    products.forEach(function (product) {
      var productElement = document.createElement('div');
      productElement.innerHTML = '<h3>' + product.name + '</h3>' + '<p>$' + product.price + '</p>';
      productList.appendChild(productElement);
    });

    modal.style.display = 'block'; // Display the modal
  }

  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none'; // Hide the modal
  }

  // Event listener for opening the modal
  var openButton = document.getElementById('openModal');
  openButton.addEventListener('click', openModal);

  // Event listener for closing the modal
  var closeButton = document.getElementsByClassName('close')[0];
  closeButton.addEventListener('click', closeModal);
</script>
