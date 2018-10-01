'use strict';
(function () {
  window.util = {
    // Функция удаления класса
    removeClass: function (className, removedClass) {
      document.querySelector(className).classList.remove(removedClass);
    },
    // Функция добавления класса
    addClass: function (className, addedClass) {
      document.querySelector(className).classList.add(addedClass);
    },
    // Функция создания массива
    createArr: function (arrStart, arrLength) {
      var arr = [];
      for (var i = arrStart; i < arrLength; i++) {
        arr[i] = i;
      }
      return arr;
    },
    // Функция выбора рандомного элемента
    getRandomElement: function (arr) {
      var randArr = window.util.createArr(0, arr.length - 1);
      var rand = Math.floor(Math.random() * arr.length);
      if (rand === randArr[0]) {
        return window.util.getRandomElement(arr);
      } else {
        var randomElement = arr[rand];
      }
      return randomElement;
    },
    // Функция установки таймера
    debounce: function (fun) {
      var lastTimeout = null;

      return function () {
        var args = arguments;
        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(function () {
          fun.apply(null, args);
        }, window.const.DEBOUNCE_INTERVAL);
      };
    }
  };
})();
