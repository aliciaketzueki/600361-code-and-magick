'use strict';
window.setup = (function () {
  // Функция создания DOM-элементов
  var renderHeroes = function (arr, element) {
    var similarItem = element.cloneNode(true);
    similarItem.querySelector('.setup-similar-label').textContent = arr.name;
    similarItem.querySelector('.wizard-coat').style.fill = arr.coatColor;
    similarItem.querySelector('.wizard-eyes').style.fill = arr.eyesColor;
    return similarItem;
  };

  return {
    // Функция создания массива волшебников
    createArray: function (arr) {
      for (var i = 0; i < 4; i++) {
        var object = {
          name: window.util.getRandomElement(window.const.FIRST_NAME_ARR) + ' ' + window.util.getRandomElement(window.const.SURNAME_ARR),
          coatColor: window.util.getRandomElement(window.const.COAT_COLOR_ARR),
          eyesColor: window.util.getRandomElement(window.const.EYES_COLOR_ARR)
        };
        arr[i] = object;
      }
      return arr;
    },
    // Функция добавления DOM-элементов
    addElements: function (arr, element, destination) {
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < arr.length; i++) {
        fragment.appendChild(renderHeroes(arr[i], element));
      }
      destination.appendChild(fragment);
    }
  };
})();
