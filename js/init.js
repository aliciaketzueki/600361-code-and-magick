'use strict';
// Функция инициализации
(function () {
  removeClass('.setup', 'hidden');

  var heroes = [];
  createArray(heroes);

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarList = document.querySelector('.setup-similar-list');
  addElements(heroes, similarWizardTemplate, similarList);

  removeClass('.setup-similar', 'hidden');

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var originalCoordinates = {
    x: setup.style.left,
    y: setup.style.top,
  };

  openSetupWindow(setupOpen, setup, originalCoordinates);
  closeSetupWindow(setupClose, setup, originalCoordinates);

  changeCoatColor();
  changeEyesColor();
  changeFireballColor();

  changeDialogPosition(setup);
})();
