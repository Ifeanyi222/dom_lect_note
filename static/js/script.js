// 1. Select DOM elements
const sizeButtons = document.querySelectorAll(".size-btn");
const addToCartBtn = document.querySelector("#addToCartBtn");
const cartStatus = document.querySelector("#cartStatus");
const feedbackMsg = document.querySelector("#feedbackMsg");
const productName = document.querySelector("#productName");

let cartCount = 0;
let selectedSize = "S"; // Default selected size

// 2. Handle Size Selection using event listeners & class toggling
sizeButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        // Remove 'active' class from all buttons
        sizeButtons.forEach(btn => btn.classList.remove("active"));
        
        // Add 'active' class to the clicked button
        event.target.classList.add("active");
        
        // Capture the chosen size attribute
        selectedSize = event.target.getAttribute("data-size");
    });
});

// 3. Handle Add to Cart action using DOM manipulation
addToCartBtn.addEventListener("click", () => {
    cartCount++;
    
    // Update cart text content dynamically
    cartStatus.textContent = `Cart: ${cartCount} item${cartCount > 1 ? 's' : ''}`;
    
    // Show confirmation message using class toggling and text updates
    feedbackMsg.textContent = `Added "${productName.textContent}" (Size: ${selectedSize}) to your bag!`;
    feedbackMsg.classList.add("show");

    // Hide the notification message after 3 seconds
    setTimeout(() => {
        feedbackMsg.classList.remove("show");
    }, 3000);
});