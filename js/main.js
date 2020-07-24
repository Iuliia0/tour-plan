var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// ymaps.ready(init);

// function init() {
//   var myMap = new ymaps.Map("map", {
//     center: [7.89069615, 98.29505312],
//     zoom: 16
//   });

//   var placemark = new YMaps.Placemark(new YMaps.GeoPoint(7.89069615, 98.29505312));

//   map.addOverlay(placemark);
// }

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

}