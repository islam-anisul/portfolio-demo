//------------smooth scroll-------
$(document).on('click','a[href^="#"]', function(event){
  "use strict";

  event.preventDefault();
  $(' html,body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top} ,2000);
});
//--------sticky navbar-------
$(function(){
  "use strict";
  
  $(window).on('scroll', function(){
      var sticky = $(this).scrollTop();

      if(sticky>=200){
          $("#main_menu").addClass("sticky");
      } else{
          $("#main_menu").removeClass("sticky");
      }
  });
})
// --------mobile menu--------
$(function(){
  $('.mobile_trigger').click(function(){
    $('#main_menu').addClass('sticky');
    $('.menu_list').toggle('slow');    
  });

  $(function(){
    $('.mobile_menu_close').click(function(){
      $('.menu_list').hide('slow');
    });
  });
});

// ---------- hero slider-------------
$(function () {
    'use strict';

    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 100,
        autoplay: {
            delay: 5000,
          },
      });      
});
//------------hero ripple effect-----------
$(function(){
    'use strict';

    $('#hero').ripples({
        dropRadius: 20,
        perturbance: 0.03,        
      });
});
//---------counter ---------------
$(function(){
    'use strict';

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
//---------portfolio

$(function(){
    $('.port_btn').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    var mixer = mixitup('.portfolio_content');    
});

//-------- available particles
/* ---- particles.js config ---- */

particlesJS("available", {
    "particles": {
      "number": {
        "value": 380,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ff1818"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
// window resize page reload
$(function(){
  'using strict';
  function refresh() { location.reload(); }

});
  







