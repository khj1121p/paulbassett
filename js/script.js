$(document).ready(function(){
  // 풀페이지
  media();
  function media(){
    let windowWidth = $(window).width();
    if(windowWidth >= 1600){
      new fullpage('#wrap',{
        scrollBar: true,
        normalScrollElements: '.sec-5, .footer',
        fitToSection: false,
      })

      $(window).scroll(function(){
        const sct = $(window).scrollTop();

        const banner = $('.banner').offset().top;
        const sec1 = $('.sec-1').offset().top;
        const sec3 = $('.sec-3').offset().top;
        const sec4 = $('.sec-4').offset().top;

        if(sct >= banner && sct < sec1){
          $('.header-area').removeClass('active');
        }else if(sct >= sec1 && sct < sec3){
          $('.header-area').addClass('active');
        }else if(sct >= sec3 && sct < sec4){
          $('.header-area').removeClass('active');
        }else if(sct >= sec4){
          $('.header-area').addClass('active');
        }
      });
    }else{

    }
  }

    // 배너 스와이퍼
    var swiper = new Swiper(".bannerSwiper", {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      }
    });

    // 서브메뉴박스
    $('.menu-box').mouseenter(function(){
      $('.header-area').addClass('active');
      $('.sub-menu-box').addClass('active');
    });
    $('.sub-menu-box').mouseleave(function(){
      $('.header-area').removeClass('active');
      $(this).removeClass('active');
    });

    // 탑버튼
    let btn = $('.top-btn');
    $(window).scroll(function(){
      if($(window).scrollTop() >= 300){
        btn.fadeIn();
      }else{
        btn.fadeOut();
      }
    });
    btn.click(function(){
      $('html, body').animate({
        scrollTop: 0
      },500);
    });

    // sec-2
    $('.sec-2 .menu-wrap li').click(function(){
      let result = $(this).attr('data-alt');
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $(`#${result}`).addClass('active');
      $(`#${result}`).siblings().removeClass('active');
    });

    // 메뉴 스와이퍼
    function slide(){
      var swiper = new Swiper(".menuSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 68,
        // slidesPerGroup: 1,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
      });
    }
    let windowWidth = $(window).width();

    if(windowWidth > 1400){
      slide();
    }else{

    };
    // var swiper = new Swiper(".menuSwiper", {
    //     slidesPerView: 'auto',
    //     spaceBetween: 68,
    //     // slidesPerGroup: 1,
    //     scrollbar: {
    //       el: ".swiper-scrollbar",
    //       hide: true,
    //     },
    //   });

      // 햄버거 버튼
      $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.m-menu').toggleClass('active');
      });
}) //end