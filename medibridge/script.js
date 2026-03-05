// Welcome message when page loads
window.onload = function () {
    console.log("Welcome to MediBridge 🚑");
}

// Get Started Button Action
const button = document.querySelector(".hero button");

button.addEventListener("click", function () {
    alert("Welcome to MediBridge! Connecting doctors and patients.");
});

// Navigation smooth scroll
const menuItems = document.querySelectorAll("nav ul li");

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        alert(item.innerText + " section coming soon!");
    });
});
