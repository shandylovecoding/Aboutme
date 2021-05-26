-$('.menu a').on('click', function(e){
  if (this.hash !==''){
      e.preventDefault();
var button = document.getElementById( 'menu-toggle' );

      const hash = this.hash;

      $('html, body').animate({
          scrollTop: $(hash).offset().top
      },
      800);
  }
})

////////////////hamburger///////////////
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// /////////////////////////////////
// // Function to change the navbar to a burger on smaller screens
const burger = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide = () => {
  
  //togle nav
  burger.onclick = function ()  {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
      }
    });

  
  };  
  
}

navSlide();
const navSlideBack = () => {
  const navLinks = document.querySelector('.nav-links li');
    navLinks.onclick = function () {
      nav.classList.toggle('nav-inactive');
}
}
navSlideBack()