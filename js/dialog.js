'use strict';
(function () {
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
  window.dialog = {
    // Функция открытия диалогового окна
    openSetupWindow: function (target, element, coords) {
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
    },
    // Функция закрытия диалогового окна
    closeSetupWindow: function (target, element, coords) {
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
    }
  };
})();
