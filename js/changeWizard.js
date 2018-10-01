'use strict';
(function () {
  window.changeWizard = {
    // Функция изменения цвета мантии
    changeCoatColor: function () {
      var wizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
      var wizardCoatInput = document.getElementsByName('coat-color');

      wizardCoat.addEventListener('click', function () {
        var newWizardColor = window.util.getRandomElement(window.const.COAT_COLOR_ARR);
        wizardCoat.style.fill = newWizardColor;
        wizardCoatInput[0].value = newWizardColor;
        window.filter.onCoatChange(newWizardColor);
      });
    },
    // Функция изменения цвета глаз
    changeEyesColor: function () {
      var wizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
      var wizardEyesInput = document.getElementsByName('eyes-color');

      wizardEyes.addEventListener('click', function () {
        var newWizardColor = window.util.getRandomElement(window.const.EYES_COLOR_ARR);
        wizardEyes.style.fill = newWizardColor;
        wizardEyesInput[0].value = newWizardColor;
        window.filter.onEyesChange(newWizardColor);
      });
    },
    // Функция изменения цвета фаербола
    changeFireballColor: function () {
      var fireballColor = document.querySelector('.setup-fireball-wrap');
      var fireballColorInput = document.getElementsByName('fireball-color');

      fireballColor.addEventListener('click', function () {
        var newFireballColor = window.util.getRandomElement(window.const.FIREBALL_COLOR_ARR);
        fireballColor.style.background = newFireballColor;
        fireballColorInput[0].value = newFireballColor;
      });
    }
  };
})();
