/*Count effect*/
var a = 0;
$(window).scroll(function() {
  var oTop = $('#master-counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-target');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
    });
    a = 1;
  }
});

/*Skill bar*/
var offsetTop = $(".container").offset().top;
$(window).scroll(function() {
  var height = $(window).height();
  if ($(window).scrollTop() + height > offsetTop) {
    jQuery(".progress-bar").each(function() {
      jQuery(this).find(".progress-content").animate(
        {
          width: jQuery(this).attr("data-percentage")
        },
        2000
      );
      jQuery(this).find(".progress-number-mark").animate(
        {
          left: jQuery(this).attr("data-percentage")
        },
        {
          duration: 2000,
          step: function(now, fx) {
            var data = Math.round(now);
            jQuery(this).find(".percent").html(data + "%");
          }
        }
      );
    });
  }
});

/* Sticky navigation menu */
$(document).ready(function () {
    let nav_offset_top = $('.header_area').height() + 50;
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }
    navbarFixed();
});


/*Isotope gallery*/
$(document).ready(function () {


    let $btns = $('#project-area .button-group button');


    $btns.click(function (e) {

        $('#project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('#project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('#project-area .button-group #btn1').trigger('click');

    $('#project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

});


