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
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');


// // Function to change the navbar to a burger on smaller screens

let menuOpen = false;
const navSlide = () => {
  
  //togle nav
  menuBtn.onclick = function ()  {
    nav.classList.toggle('nav-active');
    
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
      navLinks.forEach((link, index) => {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
      });
      
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
      navLinks.forEach((link, index) => {
        link.style.animation = ''
      })

    }
    
  };  
  
  
}

navSlide();

const linkAction = () => {
    navLinks.forEach(n => n.onclick = function(){
      nav.classList.remove('nav-active');
      menuBtn.classList.remove('open');
      menuOpen = false;
      navLinks.forEach((link, index) => {
        link.style.animation = ''
      })
    } )
}
linkAction()

///////////////fade-animation////////////////////

document.addEventListener("DOMContentLoaded",function(){
  var loading = new TimelineMax();
  loading.fromTo(".fadeup h1 ",0.6, {
    autoAlpha: 0,
    y:20
  }, {
    autoAlpha: 1,
    y:0
  })
  .fromTo(".fadeup .big ",0.6, {
    autoAlpha: 0,
    y:20
  }, {
    autoAlpha: 1,
    y:0
  })
  .fromTo(".fadeup p ",0.6, {
    autoAlpha: 0,
    y:20
  }, {
    autoAlpha: 1,
    y:0
  })
  ;
});



