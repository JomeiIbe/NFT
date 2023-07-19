$(document).ready(function() {

    //  owl slider here
    $("#NFTS").owlCarousel({
    loop: true,
    margin: 70,
    items: 3,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    duration: 3200,
    responsive: {
      0: {  
        nav: false,
        items: 1,
        dots: false
        },
        768: {
        nav: true,
        items: 3,
        dots: false
      }
    }
}) 



// //  owl slider here
// $("#hero-slider").owlCarousel({
//     loop: true,
//     margin: 0,
//     nav: false,
//     dots: false,
//     items: 1,
//     navText: ['<', '>'],
//     smartSpeed: 1000,
//     autoplay: true,
//     duration: 3000,
//     responsive: {
//       0: {

//         nav: false,   
//         },
//       768: {
//         nav: true,
//         dots: false
//       }
//     }
//   }); 



});
