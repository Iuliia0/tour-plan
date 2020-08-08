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

  $('[name="phone"]').mask("+7 (000) 000-00-00");

  AOS.init();

});

const map = document.querySelector('.map')
map.addEventListener('click', () => {
  map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.576444515966!2d100.88038641414597!3d12.934922119183446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310296059bd3779b%3A0x37191e723a1a258!2sHilton%20Pattaya!5e0!3m2!1sru!2sru!4v1596842520689!5m2!1sru!2sru" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
});