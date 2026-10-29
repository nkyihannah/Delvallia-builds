
// ========================================
// 1. DISPLAY THE CURRENT YEAR
// ========================================

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ========================================
// 2. SMOOTH NAVIGATION FEEDBACK
// ========================================

```javascript
// ========================================
// MOBILE NAVIGATION MENU
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    const navigationLinks = navLinks.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.textContent = "☰";

        });

    });

}
```



// ========================================
// 3. PROJECT CARD INTERACTION
// ========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.cursor = "pointer";
    });
});


// ========================================
// 4. WELCOME MESSAGE IN THE CONSOLE
// ========================================

console.log("Welcome to DELVALLIA BUILDS!");
console.log("Portfolio successfully loaded.");

