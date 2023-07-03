// Define a shopping cart array
var shoppingCart = [];

// Function to add a product to the shopping cart
function addToCart(productName) {
    shoppingCart.push(productName);
    console.log(productName + " has been added to the cart.");
}

// Example usage:
addToCart("Lenovo "); // Add Product 1 to the cart
addToCart("Huawei "); // Add Product 2 to the cart
addToCart("Motorola "); // Add Product 3 to the cart
addToCart("Apple "); // Add Product 4 to the cart
addToCart("Nokia 5"); // Add Product 5 to the cart

console.log("Shopping Cart:", shoppingCart); // Output the contents of the shopping cart
