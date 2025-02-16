document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");

  const hideLoader = () => {
    if (loadingScreen) loadingScreen.style.display = "none";
  };

  // Hide loader when the page is fully loaded
  window.addEventListener("load", hideLoader);
  setTimeout(hideLoader, 5000);

  // Mobile sidebar
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileSidebar = document.getElementById("mobile-sidebar");
  const closeSidebarBtn = document.getElementById("close-sidebar");

  if (mobileMenuBtn && mobileSidebar && closeSidebarBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileSidebar.classList.add("active");
    });

    closeSidebarBtn.addEventListener("click", () => {
      mobileSidebar.classList.remove("active");
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", (event) => {
      if (mobileSidebar && !mobileSidebar.contains(event.target) && event.target !== mobileMenuBtn) {
        mobileSidebar.classList.remove("active");
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute("href"));
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".desktop-nav a");

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
          link.classList.add("active");
        }
      });
    });
  }
});
