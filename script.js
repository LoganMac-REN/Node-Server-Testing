async function refreshShippedRevenue() {
  try {
    const res = await fetch("https://your-backend-domain.com/api/shippedRevenue");
    const data = await res.json();

    document.getElementById("shippedRevenue").textContent = "Shipped Revenue Month to Date: $" + data.shippedRevenue;
  } catch (err) {
    console.error("Failed to refresh shippedRevenue:", err);
  }
}
refreshShippedRevenue();
setInterval(refreshShippedRevenue, 30 * 60 * 1000);

//Mobile Menu bar
function toggleMobileMenu() {
  const body = document.body;
  if (body.classList.contains("mobile-menu-open")) {
    body.classList.remove("mobile-menu-open");
    // Restore body scroll
    document.body.style.overflow = "";
  } else {
    body.classList.add("mobile-menu-open");
    // Prevent body scroll when menu is open
    document.body.style.overflow = "hidden";
  }
}

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
