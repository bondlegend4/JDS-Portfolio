var sticky = navbar.offsetTop; // Get the offset position of the navbar

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY==0){
      navbar.classList.remove('at-top');
      navbar.classList.remove('moving');
      navbar.classList.add('at-bottom');
    }
    else if(window.scrollY >= sticky) {
      navbar.classList.add('at-top');
      navbar.classList.remove('moving');
      navbar.classList.remove('at-bottom');
    } else {
      navbar.classList.remove('at-top');
      navbar.classList.add('moving');
      navbar.classList.remove('at-bottom');
    }
  });