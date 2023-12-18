var sticky = navbar.offsetTop; // Get the offset position of the navbar

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY >= sticky) {
      navbar.classList.add('sticky-top');
      navbar.classList.remove('at-bottom');
    } else {
      navbar.classList.remove('sticky-top');
      navbar.classList.add('at-bottom');
    }
  });