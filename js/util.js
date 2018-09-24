'use strict';
(function () {
// Константы
  window.const = {
    ESC_KEYDOWN: 27,
    ENTER_KEYDOWN: 13
  };
// Массивы данных
  window.arr = {
    FIRST_NAME_ARR: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    SURNAME_ARR: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    COAT_COLOR_ARR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLOR_ARR: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLOR_ARR: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };
// Функция удаления класса
  window.removeClass = function (className, removedClass) {
    document.querySelector(className).classList.remove(removedClass);
  };
// Сброс координат окна
  window.setup = document.querySelector('.setup');
})();
// Функция создания массива
var createArr = function (arrStart, arrLength) {
  var arr = [];
  for (var i = arrStart; i < arrLength; i++) {
    arr[i] = i;
  }
  return arr;
};
// Функция выбора рандомного элемента
window.getRandomElement = function (arr) {
  var randArr = createArr(0, arr.length - 1);
  var rand = Math.floor(Math.random() * arr.length);
  if (rand === randArr[0]) {
    return getRandomElement(arr);
  } else {
    var randomElement = arr[rand];
  }
  return randomElement;
};
