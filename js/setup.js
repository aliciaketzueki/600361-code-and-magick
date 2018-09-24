'use strict';
(function () {
  // Функция создания массива волшебников
  var createArray = function (arr) {
    for (var i = 0; i < 4; i++) {
      var object = {
        name: window.util.getRandomElement(window.arr.FIRST_NAME_ARR) + ' ' + window.util.getRandomElement(window.arr.SURNAME_ARR),
        coatColor: window.util.getRandomElement(window.arr.COAT_COLOR_ARR),
        eyesColor: window.util.getRandomElement(window.arr.EYES_COLOR_ARR)
      };
      arr[i] = object;
    }
    return arr;
  };

  var heroes = [];
  createArray(heroes);

  // Функция создания DOM-элементов
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarList = document.querySelector('.setup-similar-list');

  var renderHeroes = function (arr, element) {
    var similarItem = element.cloneNode(true);
    similarItem.querySelector('.setup-similar-label').textContent = arr.name;
    similarItem.querySelector('.wizard-coat').style.fill = arr.coatColor;
    similarItem.querySelector('.wizard-eyes').style.fill = arr.eyesColor;
    return similarItem;
  };

  // Функция добавления DOM-элементов
  var addElements = function (elements, element, destination) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < elements.length; i++) {
      fragment.appendChild(renderHeroes(elements[i], element));
    }
    destination.appendChild(fragment);
  };

  addElements(heroes, similarWizardTemplate, similarList);
})();
