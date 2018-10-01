'use strict';
// Функция инициализации
(function () {
  window.util.removeClass('.setup', 'hidden');

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  window.setup.formSubmit();
  window.backend.load(window.filter.successHandler, window.filter.errorHandler);

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
