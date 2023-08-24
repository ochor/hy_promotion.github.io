$(document).ready(function() {
    // Toggle the menu on mobile
    $('#menuToggle').on('click', function() {
        $('#menu').toggleClass('menu-active');
    });

    //슬라이드 구간
    let currentSlide = 0;
    const slides = $('.slide').length;
    const interval = 2500; // 2.5 seconds

    // 첫 번째 슬라이드를 마지막에 복사하고, 마지막 슬라이드를 맨 처음에 복사
    $('.slide-container').prepend($('.slide').last().clone());
    $('.slide-container').append($('.slide').eq(1).clone());

    // 복사된 슬라이드로 인해 totalSlides와 initialOffset가 변경됩니다.
    const totalSlides = $('.slide').length;
    const initialOffset = 1 / totalSlides * 100;
    $('.slide-container').css('transform', `translateX(-${initialOffset}%)`);

    function changeSlide(index) {
        const offset = (index + 1) / totalSlides * 100;
        $('.slide-container').css('transform', `translateX(-${offset}%)`);
        $('.dot').removeClass('active');
        $('.dot').eq(index).addClass('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides;

        if (currentSlide == 0) {
            setTimeout(() => {
                $('.slide-container').css('transition', 'none');
                $('.slide-container').css('transform', `translateX(-${initialOffset}%)`);
                setTimeout(() => {
                    $('.slide-container').css('transition', '');
                }, 50);
            }, interval);
        }
        changeSlide(currentSlide);
    }

    let slideInterval = setInterval(nextSlide, interval);

    $('.dot').click(function() {
        currentSlide = $(this).index();
        clearInterval(slideInterval);
        changeSlide(currentSlide);
        slideInterval = setInterval(nextSlide, interval);
    });
    
    //스와이퍼 구간
    /*const swiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });*/
});