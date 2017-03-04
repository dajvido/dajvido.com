var initFullpage = function() {
  if ($.fn.fullpage.destroy !== undefined) {
    $.fn.fullpage.destroy('all');
    $('#js-fullpage').fullpage({
      anchors: ['about', 'works', 'experience', 'contact'],
      menu: '#menu'
    });
    window.location.reload();
  } else {
    $('#js-fullpage').fullpage({
      anchors: ['about', 'works', 'experience', 'contact'],
      menu: '#menu'
    });
  }
};

$(document).ready(initFullpage);
$(document).on('page:load', initFullpage);

$(document).on('click.nav','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a')  ) {
    $(this).removeClass('in').addClass('collapse');
  }
});

$(document).on('click', '.js-move-down', function(){
  $.fn.fullpage.moveSectionDown();
});

$(document).ready(function(){
  $('.slick-carousel').slick({
    asNavFor: '.slick-details',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1184,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

   $('.slick-details').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '.slick-carousel'
   });
});
