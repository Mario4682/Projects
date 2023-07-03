function showCart() {
  var cartOptions = document.getElementById("cartOptions");

  if (cartOptions.style.display === "none") {
    cartOptions.style.display = "flex"; // Показва контейнера с опциите
  } else {
    cartOptions.style.display = "none"; // Скрива контейнера с опциите
  }
}
