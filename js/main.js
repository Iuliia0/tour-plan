var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
      center: [7.89069615, 98.29505312],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [7.89069615, 98.29505312]
      },
    }, {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'islands#blackStretchyIcon',
      // Метку можно перемещать.
      draggable: true
    }),
    myPieChart = new ymaps.Placemark([
      7.89069615, 98.29505312
    ], );

  myMap.geoObjects
    .add(myGeoObject)
    .add(myPieChart)
    .add(new ymaps.Placemark([7.89069615, 98.29505312], {
      balloonContent: '<strong>GRAND HILTON HOTEL</strong>'
    }, {
      preset: 'islands#icon',
      iconColor: '#0095b6'
    }))

};

$('.newsletter').parallax({
  imageSrc: 'img/newsletter-bg.jpg'
});