  // 'use strict
console.log("logger in progress");
//
// change navbar styles on scroll 
window.addEventListener('scroll', function ()  {  
  document.querySelector('header').classList.toggle('active',  window.scrollY > 30);
  document.querySelector('.nav_items > li').classList.remove('active',  window.scrollY > 23);
  // scrollTopBtn.classList.toggle('active', window.scrollY > 500);
})


// const closeMenuBtn =  document.querySelector("#close");
const menuBtn =  document.querySelector("#menuBtn");
const menuBtn2 =  document.querySelector("#menuBtn.active");
const mobileNav    =  document.querySelector(".nav_items");
const searchForm  =  document.querySelector(".search-box");

// Search
document.querySelector("#search-icon").onclick = () => {
  searchForm.classList.toggle("active");
};


//opens nav drop down 
const openNav = () =>  {
  mobileNav.classList.toggle('active');
  menuBtn.classList.toggle('active');
};

//close nav drop down 
const closeNav = () =>  {
  menuBtn2.classList.remove("active");
  mobileNav.classList.remove('active');
};



  menuBtn.addEventListener('click', openNav);
  menuBtn2.addEventListener('click', closeNav);








 //Scroll Reveal
 const Sr = new ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 400,
  delay: 500
});

// reveal target elements && change class elements
Sr.reveal('#banr-txt1, #banr-txt2',{delay: 700, origin: 'left', interval: 400});

Sr.reveal('#bnr-img-i, #bnr-img-iii',{delay: 600, origin: 'bottom', interval: 500});
Sr.reveal('#bnr-img-ii',{delay: 500, origin: 'top', interval: 200});
Sr.reveal('#profile-crds',{delay: 900, origin: 'top', interval: 200});  
Sr.reveal('#banr-btn, #banr-btn2, #digi-conis',{delay: 400, origin: 'left', interval: 200});
Sr.reveal('#banr-img_1, #banr-img_2, #bnr_img_3, #about-head,#about-p',{delay: 500, origin: 'bottom', interval: 300});
Sr.reveal('#f-b_image, #f-banner-meta, .f-banner-btn, .fbanner-btn-2',{delay: 400, origin: 'left'}); 
Sr.reveal('#f-banner-p',{delay: 300, origin: 'right'});

//  END







