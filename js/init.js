'use strict';
// Функция инициализации
(function () {
  window.util.removeClass('.setup', 'hidden');

//  var heroes = [];
//  window.setup.createArray(heroes);

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarList = document.querySelector('.setup-similar-list');
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var form = setup.querySelector('.setup-wizard-form');

  window.setup.addElements(similarWizardTemplate, similarList);
  window.setup.formSubmit(form);
  window.util.removeClass('.setup-similar', 'hidden');

  var originalCoordinates = {
    x: setup.style.left,
    y: setup.style.top,
  };

  window.dialog.openSetupWindow(setupOpen, setup, originalCoordinates);
  window.dialog.closeSetupWindow(setupClose, setup, originalCoordinates);

  window.changeWizard.changeCoatColor();
  window.changeWizard.changeEyesColor();
  window.changeWizard.changeFireballColor();

  window.dialogMove.changeDialogPosition(setup);
})();
