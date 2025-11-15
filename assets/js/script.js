// ================= JAVASCRIPT ================//

// FAQ Toggle Script
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;

    // Close other open items
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
        item
          .querySelector(".faq-icon i")
          .classList.replace("bi-dash-lg", "bi-plus-lg");
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
  // owlCarousel
  $(".ongoing-carousel").owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: { items: 1, nav: false, dots: true },
      768: { items: 2, nav: true, dots: false },
      992: { items: 3, nav: true, dots: false },
    },
  });

  // MagnificPopup
  $('.popup-image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    image: {
      titleSrc: function(item) {
        return item.el.find('h5').text() + ' - ' + item.el.find('p').text();
      }
    }
  });

  // Smooth scrolling for anchor links
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top - 80,
      },
      500,
      'linear'
    );
  });
  
  // Header scroll effect
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $('.header-section').addClass('scrolled');
    } else {
      $('.header-section').removeClass('scrolled');
    }
  });
});