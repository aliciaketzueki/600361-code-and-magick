'use strict';
(function () {
  var fileChooser = document.querySelector('.upload input[type=file]');
  var avatar = document.querySelector('.setup-user-pic');
  // изменение значения инпута
  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = window.const.FILE_IMG_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        avatar.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  });
})();
