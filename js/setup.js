'use strict';
(function () {
  var similarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Функция создания DOM-элементов
  var renderHeroes = function (arr) {
    var similarItem = similarWizardTemplate.cloneNode(true);
    similarItem.querySelector('.setup-similar-label').textContent = arr.name;
    similarItem.querySelector('.wizard-coat').style.fill = arr.colorCoat;
    similarItem.querySelector('.wizard-eyes').style.fill = arr.colorEyes;
    return similarItem;
  };
  // Успешная отправка формы
  var successFormHandler = function () {
    window.util.addClass('.setup', 'hidden');
  };
  window.setup = {
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
    drawHeroes: function (arr) {
      var fragment = document.createDocumentFragment();
      var takeNumber = arr.length > 4 ? 4 : arr.length;
      similarList.innerHTML = '';
      for (var i = 0; i < takeNumber; i++) {
        fragment.appendChild(renderHeroes(arr[i]));
      }
      similarList.appendChild(fragment);

      window.util.removeClass('.setup-similar', 'hidden');
    },
    form: document.querySelector('.setup-wizard-form'),
    // Функция отправки формы
    formSubmit: function () {
      window.setup.form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        var formData = new FormData(window.setup.form);
        window.backend.save(formData, successFormHandler, window.setup.errorHandler);
      });
    }
  };
})();
