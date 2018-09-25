'use strict';
// Функция инициализации
(function () {
  window.util.removeClass('.setup', 'hidden');

  var heroes = [];
  window.createArray(heroes);

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarList = document.querySelector('.setup-similar-list');
  window.addElements(heroes, similarWizardTemplate, similarList);

  window.util.removeClass('.setup-similar', 'hidden');

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var originalCoordinates = {
    x: setup.style.left,
    y: setup.style.top,
  };

  window.openSetupWindow(setupOpen, setup, originalCoordinates);
  window.closeSetupWindow(setupClose, setup, originalCoordinates);

  window.changeCoatColor();
  window.changeEyesColor();
  window.changeFireballColor();

  window.changeDialogPosition(setup);
})();
