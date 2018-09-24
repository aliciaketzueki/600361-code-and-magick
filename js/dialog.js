'use strict';
(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.querySelector('.setup-close');

  window.util.removeClass('.setup', 'hidden');
  window.util.removeClass('.setup-similar', 'hidden');

  var originalCoordinates = {
    x: window.setup.style.left,
    y: window.setup.style.top,
  };
  // Открыть окно
  var viewSetupWindow = function (element) {
    element.classList.remove('hidden');
  };
  // Закрыть окно
  var hideSetupWindow = function (element) {
    element.classList.add('hidden');
  };
  // Сброс координат
  var resetCoordinates = function (element, coords) {
    element.style.left = coords.x;
    element.style.top = coords.y;
  };
  // Функция открытия диалогового окна
  var openSetupWindow = function (target, element, coords) {
    target.addEventListener('click', function () {
      viewSetupWindow(element);

      document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === window.const.ESC_KEYDOWN) {
          hideSetupWindow(element);
          resetCoordinates(element, coords);
        }
      });
    });

    target.addEventListener('keydown', function (evt) {
      if (evt.keyCode === window.const.ENTER_KEYDOWN) {
        viewSetupWindow(element);
      }
    });
  };
  // Функция закрытия диалогового окна
  var closeSetupWindow = function (target, element, coords) {
    target.addEventListener('click', function () {
      hideSetupWindow(element);
      resetCoordinates(element, coords);
    });

    target.addEventListener('keydown', function (evt) {
      if (evt.keyCode === window.const.ENTER_KEYDOWN) {
        hideSetupWindow(element);
        resetCoordinates(element, coords);
      }
    });
  };

  openSetupWindow(setupOpen, window.setup, originalCoordinates);
  closeSetupWindow(setupClose, window.setup, originalCoordinates);
})();
