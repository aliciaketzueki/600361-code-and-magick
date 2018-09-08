'use strict';

// Задача 1
var removeClass = function (className, removedClass) {
  document.querySelector(className).classList.remove(removedClass);
};
removeClass('.setup', 'hidden');

// Задача 2
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

var createArray = function (arr, firstRandomElement, secondRandomElement, thirdRandomElement, fourthRandomElement) {
  for (var i = 0; i < 4; i++) {
    var object = {
      name: getRandomElement(firstRandomElement) + ' ' + getRandomElement(secondRandomElement),
      coatColor: getRandomElement(thirdRandomElement),
      eyesColor: getRandomElement(fourthRandomElement)
    };
    arr[i] = object;
  }
  return arr;
};

var heroes = [];
createArray(heroes, firstNameArr, surnameArr, coatColorArr, eyesColorArr);

// Задача 3
var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderHeroes = function (arr) {
  var similarItem = similarWizardTemplate.cloneNode(true);
  similarItem.querySelector('.setup-similar-label').textContent = arr.name;
  similarItem.querySelector('.wizard-coat').style.fill = arr.coatColor;
  similarItem.querySelector('.wizard-eyes').style.fill = arr.eyesColor;
  return similarItem;
};

// Задача 4
var addElements = function (elements, destination) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < elements.length; i++) {
    fragment.appendChild(renderHeroes(elements[i]));
  }
  destination.appendChild(fragment);
};
addElements(heroes, similarList);

// Задача 5
removeClass('.setup-similar', 'hidden');
