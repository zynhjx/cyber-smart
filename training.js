document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-item");

  // Accordion toggle
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", (e) => {
      // Prevent clicks on header children (like links) from breaking toggle
      if (e.target.tagName.toLowerCase() === "a") return;

      const item = header.parentElement;

      // Close other open accordions
      accordions.forEach(acc => {
        if (acc !== item) acc.classList.remove("active");
      });

      // Toggle clicked accordion
      item.classList.toggle("active");
    });
  });

  // Lesson links → normal navigation
  document.querySelectorAll(".accordion-content a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.stopPropagation(); // stop click from bubbling to header
      const url = link.getAttribute("href");
      if (url) {
        window.location.href = url; // Go to lesson page
      }
    });
  });
});


