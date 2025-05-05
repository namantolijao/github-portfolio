document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");
  
    function toggleScrollButton() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
  
      // Show only when near the bottom
      if (scrollY + windowHeight >= bodyHeight - 100) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    }
  
    window.addEventListener("scroll", toggleScrollButton);
  
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      scrollToTopBtn.style.display = "none"; // Hide after click
    });
  
    // Initial check in case the user loads directly near bottom
    toggleScrollButton();
});
