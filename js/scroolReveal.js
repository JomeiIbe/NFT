 //Scroll Reveal
 const Sr = new ScrollReveal({
    reset: false,
    distance: '60px',
    delay: 100
  });
  
  // reveal target elements && change class elements
  
  Sr.reveal('#banr-txt1, #banr-txt2',{delay: 400, origin: 'left'});
  Sr.reveal('#banr-btn, #banr-btn2, #digi-conis',{delay: 400, origin: 'left', interval: 200});
  Sr.reveal('#banr-btn, #banr-btn2, #digi-conis',{delay: 400, origin: 'left', interval: 200});
  Sr.reveal('#banr-img_1, #banr-img_2, #bnr_img_3, #about-head,#about-p',{delay: 500, origin: 'bottom', interval: 300});
  
  
//  END
 
//  add this here
  Sr.reveal('.f-b_image,.f-banner-btn, .fbanner-btn-2',{delay: 400, origin: 'left'}); 
  Sr.reveal('.f-banner-p',{delay: 300, origin: 'right'});
  Sr.reveal('.digi-coins',{delay: 300, origin: 'left', interval: 300});
  
  
