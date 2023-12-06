// Function to add items to the cart
function addToCart() {
    const productName = 'Product Name'; // Replace with the actual product name
    const cart = document.getElementById('cart-items');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(productName));
    cart.appendChild(li);
  }
  
  // Function to view the cart (this is a placeholder function)
  function viewCart() {
    alert('View Cart: Functionality to view the cart will be implemented here.');
  }