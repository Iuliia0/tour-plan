$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  $('.newsletter').parallax({
    imageSrc: 'img/newsletter-bg.jpg'
  });

  var menuButton = $('.menu-button');
  menuButton.on('click', function () {
    $('.navbar-button').toggleClass('navbar-button--visible');
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var targetModal = $(this).attr('data-href');
    $(targetModal).find('.modal__overlay').addClass('modal__overlay_visible');
    $(targetModal).find('.modal__dialog').addClass('modal__dialog_visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay_visible');
    modalDialog.removeClass('modal__dialog_visible');
  }

  document.body.addEventListener('keyup', function (e) {
    var key = e.keyCode;

    if (key === 27) {
      $('.modal__overlay').removeClass('modal__overlay_visible');
      $('.modal__dialog').removeClass('modal__dialog_visible');
    };
  }, true);


  // Обработка форм
  $('.form').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      messages: {
        name: {
          required: 'we need your name',
          minlength: 'The name must be at least two letters long'
        },
        email: {
          required: 'We need your email address to contact you',
          email: 'Your email address must be in the format of name@domain.com',
        },
        phone: {
          required: 'We need your phone',
        },
      },
    });
  });

  $('.formFooter').each(function () {
    $(this).validate({
      messages: {
        name: {
          required: 'we need your name',
          minlength: 'The name must be at least two letters long'
        },
        phone: {
          required: 'We need your phone',
        },
      },
    });
  });

  $('.phone').click(function () {
    $(this).setCursorPosition(3);
  }).mask("+7(999) 999-9999");
  $('.phone').mask("+7(999) 999-9999");

  AOS.init();


});