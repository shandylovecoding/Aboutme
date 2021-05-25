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
