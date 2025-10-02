class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="topbar">
      <div class="brand">
        <img src="/Images/renaissance-logo-full-color-rgb.svg" alt="Renaissance Repair & Supply" class="brand-logo" />
      </div>
      <!-- Desktop Navigation -->
      <div class="bar-inner">
        <nav class="nav" aria-label="Main">
          <ul class="menu">
            <li class="has-sub">
              <a href="#" class="toplink">OTD Dashboards</a>
              <ul class="sub">
                <li><a href="../index.html">All Departments</a></li>
              </ul>
            </li>

            <!-- KPIs -->
            <li class="has-sub">
              <a href="#" class="toplink">Departments</a>
              <ul class="sub">
                <li><a href="../pages/operations.html">Operations</a></li>
                <li><a href="../pages/engineering.html">Engineering</a></li>
                <li><a href="../pages/supplychain.html">Supply Chain</a></li>
                <li><a href="../pages/quality.html">Quality</a></li>
                <li><a href="../pages/dashboards.html">Dashboards</a></li>
              </ul>
            </li>

            <!-- Applications -->
            <li class="has-sub">
              <a href="#" class="toplink">Applications</a>
              <ul class="sub">
                <li><a href="../pages/palletsApp.html">Pallet Receiving Tool</a></li>
                <li><a href="../pages/skuDetailsApp.html">SKU Update Tool</a></li>
                <li><a href="../pages/customerHoldApp.html">Customer Hold Tool</a></li>
                <li><a href="../pages/npi-tool.html">NPI Update Tool</a></li>
                <li><a href="../pages/BatchUpdate.html">Work Order Update Tool</a></li>
              </ul>
            </li>
            <!-- TV Reports -->
            <li class="has-sub">
              <a href="#" class="toplink">TV Reports</a>
              <ul class="sub">
                <li><a href="../pages/ROG-TEST-TV.html">Rogue-Test</a></li>
                <li><a href="../pages/ROG-DEBUG-TV.html">Rogue-Debug</a></li>
                <li><a href="../pages/RUN-TEST-TV.html">Run-Test</a></li>
                <li><a href="../pages/RUN-DEBUG-TV.html">Run-Debug</a></li>
              </ul>
            </li>
            <!-- Floor Tools -->
            <li class="has-sub">
              <a href="#" class="toplink">Floor Tools</a>
              <ul class="sub">
                <li><a href="../pages/lookuptool.html">Look-Up Tool</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <!-- Right side with Mobile Menu -->
      <div class="header-right">
        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu-overlay" onclick="closeMobileMenu()"></div>

    <!-- Mobile Menu Panel -->
    <div class="mobile-menu-panel">
      <div class="mobile-menu-header">
        <h3 class="mobile-menu-title">Navigation</h3>
        <button class="mobile-menu-close" onclick="closeMobileMenu()">×</button>
      </div>
      <div class="mobile-menu-content">
        <!-- OTD Dashboards Section -->
        <div class="mobile-menu-section collapsed">
          <h4 class="mobile-menu-section-title" onclick="toggleMobileSection(this)">OTD Dashboards</h4>
          <div class="mobile-menu-items">
            <a href="../index.html" class="mobile-menu-item" onclick="closeMobileMenu()">Combined OTD Report</a>
          </div>
        </div>

        <!-- KPIs Section -->
        <div class="mobile-menu-section collapsed">
          <h4 class="mobile-menu-section-title" onclick="toggleMobileSection(this)">Departments</h4>
          <div class="mobile-menu-items">
            <a href="../pages/operations.html" class="mobile-menu-item" onclick="closeMobileMenu()">Operations</a>
            <a href="../pages/engineering.html" class="mobile-menu-item" onclick="closeMobileMenu()">Engineering</a>
            <a href="../pages/supplychain.html" class="mobile-menu-item" onclick="closeMobileMenu()">Supply Chain</a>
            <a href="../pages/quality.html" class="mobile-menu-item" onclick="closeMobileMenu()">Quality</a>
            <a href="../pages/dashboards.html" class="mobile-menu-item" onclick="closeMobileMenu()">Dashboards</a>
          </div>
        </div>

        <!-- Applications Section -->
        <div class="mobile-menu-section collapsed">
          <h4 class="mobile-menu-section-title" onclick="toggleMobileSection(this)">Applications</h4>
          <div class="mobile-menu-items">
            <a href="../pages/palletsApp.html" class="mobile-menu-item" onclick="closeMobileMenu()">Pallet Receiving Tool</a>
            <a href="../pages/skuDetailsApp.html" class="mobile-menu-item" onclick="closeMobileMenu()">SKU Update Tool</a>
            <a href="../pages/customerHoldApp.html" class="mobile-menu-item" onclick="closeMobileMenu()">Customer Hold Tool</a>
            <a href="../pages/npi-tool.html" class="mobile-menu-item" onclick="closeMobileMenu()">NPI Update Tool</a>
            <a href="../pages/BatchUpdate.html" class="mobile-menu-item" onclick="closeMobileMenu()">Work Order Update Tool</a>
          </div>
        </div>

        <!-- TV Reports Section -->
        <div class="mobile-menu-section collapsed">
          <h4 class="mobile-menu-section-title" onclick="toggleMobileSection(this)">TV Reports</h4>
          <div class="mobile-menu-items">
            <a href="../pages/ROG-TEST-TV.html" class="mobile-menu-item" onclick="closeMobileMenu()">Rogue-Test</a>
            <a href="../pages/ROG-DEBUG-TV.html" class="mobile-menu-item" onclick="closeMobileMenu()">Rogue-Debug</a>
            <a href="../pages/RUN-TEST-TV.html" class="mobile-menu-item" onclick="closeMobileMenu()">Run-Test</a>
            <a href="../pages/RUN-DEBUG-TV.html" class="mobile-menu-item" onclick="closeMobileMenu()">Run-Debug</a>
          </div>
        </div>

        <!-- Floor Tools Section -->
        <div class="mobile-menu-section collapsed">
          <h4 class="mobile-menu-section-title" onclick="toggleMobileSection(this)">Floor Tools</h4>
          <div class="mobile-menu-items">
            <a href="../lookuptool.html" class="mobile-menu-item" onclick="closeMobileMenu()">Look-Up Tool</a>
          </div>
        </div>
      </div>
    </div>
        `;
    this.setActiveLink();
  }

  setActiveLink() {
    const current = normalizePath(location.pathname);

    // 1) Clear all actives
    const allLinks = this.querySelectorAll("a[href]");
    allLinks.forEach((a) => a.classList.remove("active"));

    // 2) Only consider links inside submenus (desktop + mobile), skip #/js voids
    const pageLinks = this.querySelectorAll(".sub a[href], .mobile-menu-items a[href]");

    pageLinks.forEach((link) => {
      const rawHref = (link.getAttribute("href") || "").trim().toLowerCase();
      if (!rawHref || rawHref === "#" || rawHref.startsWith("javascript:")) return;

      const linkPath = normalizePath(new URL(rawHref, location.origin).pathname);
      if (linkPath === current) {
        link.classList.add("active");
      }
    });

    function normalizePath(p) {
      let path = (p || "").split("?")[0].split("#")[0];
      if (!path || path === "/") path = "/index.html"; // treat root as index
      if (path.endsWith("/") && path !== "/") path = path.slice(0, -1);
      return path.toLowerCase();
    }
  }
}

customElements.define("special-header", SpecialHeader);
