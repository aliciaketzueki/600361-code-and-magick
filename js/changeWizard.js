'use strict';
(function () {
  // Функция изменения цвета
  var changeWizardColor = function (arr, wizardColor, wizardColorInput) {
    var newWizardColor = window.util.getRandomElement(arr);
    wizardColor.style.fill = newWizardColor;
    wizardColorInput[0].value = newWizardColor;
  };
  // Функция изменения цвета мантии
  window.changeCoatColor = function () {
    var wizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
    var wizardCoatInput = document.getElementsByName('coat-color');

    wizardCoat.addEventListener('click', function () {
      changeWizardColor(window.arr.COAT_COLOR_ARR, wizardCoat, wizardCoatInput);
    });
  };

  // Функция изменения цвета глаз
  window.changeEyesColor = function () {
    var wizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
    var wizardEyesInput = document.getElementsByName('eyes-color');

    wizardEyes.addEventListener('click', function () {
      changeWizardColor(window.arr.EYES_COLOR_ARR, wizardEyes, wizardEyesInput);
    });
  };

  // Функция изменения цвета фаербола
  window.changeFireballColor = function () {
    var fireballColor = document.querySelector('.setup-fireball-wrap');
    var fireballColorInput = document.getElementsByName('fireball-color');

    fireballColor.addEventListener('click', function () {
      var newFireballColor = window.util.getRandomElement(window.arr.FIREBALL_COLOR_ARR);
      fireballColor.style.background = newFireballColor;
      fireballColorInput[0].value = newFireballColor;
    });
  };
})();
