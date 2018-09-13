'use strict';

// Задача 1.1
var removeClass = function (className, removedClass) {
  document.querySelector(className).classList.remove(removedClass);
};
removeClass('.setup', 'hidden');

// Задача 1.2
var firstNameArr = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorArr = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  var randomElement = arr[rand];
  arr.splice(rand, 1); // удаление из массива выбранного случайно элемента (чтобы не повторялись)
  return randomElement;
};

var createArray = function (arr) {
  for (var i = 0; i < 4; i++) {
    var object = {
      name: getRandomElement(firstNameArr) + ' ' + getRandomElement(surnameArr),
      coatColor: getRandomElement(coatColorArr),
      eyesColor: getRandomElement(eyesColorArr)
    };
    arr[i] = object;
  }
  return arr;
};

var heroes = [];
createArray(heroes);

// Задача 1.3
var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderHeroes = function (arr) {
  var similarItem = similarWizardTemplate.cloneNode(true);
  similarItem.querySelector('.setup-similar-label').textContent = arr.name;
  similarItem.querySelector('.wizard-coat').style.fill = arr.coatColor;
  similarItem.querySelector('.wizard-eyes').style.fill = arr.eyesColor;
  return similarItem;
};

// Задача 1.4
var addElements = function (elements) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < elements.length; i++) {
    fragment.appendChild(renderHeroes(elements[i]));
  }
  similarList.appendChild(fragment);
};
addElements(heroes);

// Задача 1.5
removeClass('.setup-similar', 'hidden');

// Задача 2.1
var ESC_KEYDOWN = 27;
var ENTER_KEYDOWN = 13;

var openSetupWindow = function () {
  setup.classList.remove('hidden');
};

var closeSetupWindow = function () {
  setup.classList.add('hidden');
};

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  openSetupWindow();

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYDOWN) {
      closeSetupWindow();
    }
  });
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYDOWN) {
    openSetupWindow();
  }
});

setupClose.addEventListener('click', function () {
  closeSetupWindow();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYDOWN) {
    closeSetupWindow();
  }
});

/* 
Если диалог открыт, нажатие на кнопку «Сохранить» приводит к отправке формы
Если диалог открыт и фокус находится на кнопке «Сохранить», нажатие на ENTER приводит к отправке формы
*/

// Задача 2.2
