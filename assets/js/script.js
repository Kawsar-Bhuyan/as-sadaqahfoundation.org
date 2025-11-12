// FAQ Toggle Script
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;

    // Close other open items
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
        item.querySelector(".faq-icon i").classList.replace("bi-dash-lg", "bi-plus-lg");
      }
    });

    // Toggle current one
    faqItem.classList.toggle("active");
    const icon = button.querySelector(".faq-icon i");
    icon.classList.toggle("bi-plus-lg");
    icon.classList.toggle("bi-dash-lg");
  });
});
