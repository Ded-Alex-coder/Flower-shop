$(document).ready(function () {
  const FlowersSlider = new Swiper('.flowers-slider', {
    //Прокрутка (true - бесконечная)//
    loop: true,
    //скорость прокрутки в ms//
    speed: 500,
    // Стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Пашинация//
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    //курсор перетаскивания//
    grabCursor: true,
    //количество слайдов для показа//
    slidesPerView: 6,
    //расстояние между слайдами в px//
    // spaceBetween: 70,
    //включение/выключение автовысоты//
    autoHeight: true,
    //Управление стрелками на клавиатуре//
    keyboard: {
      enabled: true,
      // onlyInViewport: false,
    },
    // Адаптив
    breakpoints: {
      // Больше чем >= 320px
      320: {
        slidesPerView: 2,
      },
      // Больше чем >= 480px
      480: {
        slidesPerView: 3,
      },
      // Больше чем >= 768px
      768: {
        slidesPerView: 5,
      },
      // Больше чем >= 992px
      992: {
        slidesPerView: 6,
      },
    },
  });

  const ReviewsSlider = new Swiper('.reviews-slider', {
    //Прокрутка (true - бесконечная)//
    loop: true,
    //скорость прокрутки в ms//
    speed: 500,
    // Стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Пашинация//
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    //включение/выключение перетаскивание на пк//
    // simulateTouch: false,
    //курсор перетаскивания//
    // grabCursor: false,
    //количество слайдов для показа//
    slidesPerView: 1,
    //Управление колесиком мышки//
    mousewheel: {
      invert: true,
    },
  });

  $('#rewiew-photos, #rewiew-photos-2').on('click', function () {
    $.fancybox.open(
      [
        {
          src: '../img/bouquets/013_original.jpg',
          opts: {
            caption: 'First caption',
            thumb: '../img/bouquets/013_original.jpg',
          },
        },
        {
          src: '../img/bouquets/main.jpg',
          opts: {
            caption: 'Second caption',
            thumb: '../img/bouquets/main.jpg',
          },
        },
        {
          src: '../img/bouquets/nejnii-buket.jpg',
          opts: {
            caption: 'Third caption',
            thumb: '../img/bouquets/nejnii-buket.jpg',
          },
        },
      ],
      {
        loop: true,
        thumbs: {
          autoStart: true,
        },
      }
    );
  });

  $('#all_flowers').on('click', function () {
    $.fancybox.open(
      '<div class="message_you"><h2>Учет товара.</h2><p>зайдите позже.</p></div>'
    );
  });

  $('#404, #405, #406').on('click', function () {
    $.fancybox.open(
      '<div class="message_you"><h2>Извините</h2><p>кнопка никуда не ведет и не выводит</p></div>'
    );
  });

  $('#GLO').on('click', function () {
    $.fancybox.open({
      src: 'https://glo-academy.org',
      type: 'iframe',
      opts: {
        // afterShow: function (instance, current) {
        //   console.info('done!');
        // },
      },
    });
  });
});
