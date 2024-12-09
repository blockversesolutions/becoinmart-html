
jQuery(document).ready(function ($) {
  if ($('.data-show-table').length) {  
    $('.data-show-table').DataTable({
        responsive: true,
        searching: false,
        ordering: false,
        info: false,
        paging: false,
    });
  }
    // menu bg add
    function checkScroll() {
      if ($(window).scrollTop() > 50) {
          $(".header-area").addClass("menu-bg");
      } else {
          $(".header-area").removeClass("menu-bg");
      }
    }
    $(document).on("click", function (event) {
      const $div = $("#outside-click");
      const $navbarText = $("#navbarText");
      if (!$div.is(event.target) && $div.has(event.target).length === 0) {
        $navbarText.removeClass("show");
      }
    });
    // Run on page load
    $(document).ready(function () {
      checkScroll();
    });
    // Run on scroll
    $(window).on("scroll", function () {
      checkScroll();
    });
})
function handleResize() {
  // Select all tables with the class "mobile-view-table"
  const elements = document.querySelectorAll('.mobile-view-table');
  elements.forEach((element) => {
    // Add or remove the "nowrap" class based on the window size
    if (window.innerWidth <= 991) {
      element.classList.add('nowrap');
    } else {
      element.classList.remove('nowrap');
    }
  });
}

// Run handleResize on page load and attach it to the resize event
handleResize();
window.addEventListener('resize', handleResize);

// Hide the preloader dynamically after the page is fully loaded
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('loader-hide');
});



