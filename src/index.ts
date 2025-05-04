// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Change header background color on load
    const header = document.querySelector("header");
    if (header) {
      header.style.backgroundColor = "#4CAF50"; // Green color
    }
  
    // Log a welcome message to the console
    console.log("Welcome to my portfolio website!");
  
    // Scroll animation for the navigation
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.slice(1);
        const targetElement = document.getElementById(targetId || "");
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for header height
            behavior: "smooth",
          });
        }
      });
    });
  });
  