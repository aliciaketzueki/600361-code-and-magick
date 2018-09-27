'use strict';
(function () {
  var similarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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
    successHandler: function (wizards) {
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < 4; i++) {
        fragment.appendChild(renderHeroes(wizards[i], similarWizardTemplate));
      }
      similarList.appendChild(fragment);
    },
    // Функция высвечивания ошибки на экране
    errorHandler: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';

      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    },
    form: document.querySelector('.setup-wizard-form'),
    // Функция отправки формы
    formSubmit: function () {
      window.setup.form.addEventListener('submit', function (evt) {
        window.util.addClass('.setup', 'hidden');
        evt.preventDefault();
      });
    }
  };
})();
