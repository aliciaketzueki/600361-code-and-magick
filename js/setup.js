'use strict';
(function () {
  // Функция создания DOM-элементов
  var renderHeroes = function (wizard, element) {
    var similarItem = element.cloneNode(true);
    similarItem.querySelector('.setup-similar-label').textContent = wizard.name;
    similarItem.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    similarItem.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return similarItem;
  };

  window.setup = {
    // Функция создания массива волшебников
/*    createArray: function (arr) {
      for (var i = 0; i < 4; i++) {
        var object = {
          name: window.util.getRandomElement(window.const.FIRST_NAME_ARR) + ' ' + window.util.getRandomElement(window.const.SURNAME_ARR),
          coatColor: window.util.getRandomElement(window.const.COAT_COLOR_ARR),
          eyesColor: window.util.getRandomElement(window.const.EYES_COLOR_ARR)
        };
        arr[i] = object;
      }
      return arr;
    },*/
    // Функция добавления DOM-элементов
    addElements: function (element, destination) {
      window.backend.load(function (wizards) {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < 4; i++) {
          fragment.appendChild(renderHeroes(wizards[i], element));
        }
        destination.appendChild(fragment);
      });
    },
    // Функция отправки формы
    formSubmit: function (element) {
      element.addEventListener('submit', function (evt) {
        window.backend.save(new FormData (element), function (response) {
          window.util.addClass('.setup', 'hidden');
        });
        evt.preventDefault();
      });
    }
  };
})();
