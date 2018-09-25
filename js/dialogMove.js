'use strict';
(function () {
// Функция движения диалогового окна
  window.changeDialogPosition = function (element) {
    var dialogHandle = element.querySelector('.upload');

    dialogHandle.addEventListener('mousedown', function (evt) {
      evt.preventDefault();

      var startCoordinates = {
        x: evt.clientX,
        y: evt.clientY
      };

      var dragged = false;

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        dragged = true;

        var shift = {
          x: startCoordinates.x - moveEvt.clientX,
          y: startCoordinates.y - moveEvt.clientY
        };

        startCoordinates = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        element.style.top = (element.offsetTop - shift.y) + 'px';
        element.style.left = (element.offsetLeft - shift.x) + 'px';
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (dragged) {
          var onClickPreventDefault = function (evnt) {
            evnt.preventDefault();
            dialogHandle.removeEventListener('click', onClickPreventDefault);
          };
          dialogHandle.addEventListener('click', onClickPreventDefault);
        }
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  };
})();
