function closeMobileMenu() {
  document.body.classList.remove("mobile-menu-open");
  // Restore body scroll
  document.body.style.overflow = "";
}

// Mobile Menu Section Toggle Function
function toggleMobileSection(titleElement) {
  const section = titleElement.parentElement;
  section.classList.toggle("collapsed");
}

// Close mobile menu when clicking on overlay
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("mobile-menu-overlay")) {
    closeMobileMenu();
  }
});

// Close mobile menu on window resize if screen becomes large
window.addEventListener("resize", function () {
  if (window.innerWidth > 1200) {
    closeMobileMenu();
  }
});

//month variable calculator
