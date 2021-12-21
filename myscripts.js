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
/////////////////////

console.clear();

const grid = document.querySelector('.tab_inner');
const tabs = document.querySelectorAll('[role="tab"]');
const tabList = document.querySelector('[role="tablist"]');

let tabFocus = 0;

for (const [index, tab] of tabs.entries()) {
  tab.style.setProperty('--i', index + 1);
}

tabList.addEventListener('click', ({ target }) => {
  //const tg = e.target;
  //const parent = tg.parentNode;

  if(target.tagName === 'BUTTON') {
    const index = [...tabList.children].indexOf(target);
    tabList.style.setProperty('--curr', index);
    tabList.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false);
    //parent.querySelectorAll('[aria-selected="true"]').forEach(t => t.setAttribute("aria-selected", false));

    target.setAttribute('aria-selected', true);
    grid.dataset.state = target.dataset.setstate;
  }
}, false);


tabList.addEventListener("keydown", e => {
  // Move right
  if (e.keyCode === 40 || e.keyCode === 38) {
    e.preventDefault();
    tabs[tabFocus].setAttribute("tabindex", -1);
    if (e.keyCode === 40) {
      tabFocus++;
      // If we're at the end, go to the start
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
      // Move left
    } else if (e.keyCode === 38) {
      tabFocus--;
      // If we're at the start, move to the end
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].click();
    tabs[tabFocus].focus();
  }
});


