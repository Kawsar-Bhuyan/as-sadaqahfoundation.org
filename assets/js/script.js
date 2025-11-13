// ================= JAVASCRIPT ================//

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



// ================= JQUERY ================//

$(document).ready(function () {
  $(".ongoing-carousel").owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      '<i class="bi bi-arrow-left-circle"></i>',
      '<i class="bi bi-arrow-right-circle"></i>'
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });
});


