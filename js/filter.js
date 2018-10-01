'use strict';
(function () {
  // Функция изменения цвета
  var eyesColor;
  var coatColor;
  var wizards = [];

  // Добавление ранга
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };
  // Сортировка по имени
  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (right > left) {
      return -1;
    } else {
      return 0;
    }
  };
  // Фильтр похожих магов
  var updateWizards = function () {
    window.setup.drawHeroes(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.filter = {
    onCoatChange: window.util.debounce(function (color) {
      coatColor = color;
      updateWizards();
    }),
    onEyesChange: window.util.debounce(function (color) {
      eyesColor = color;
      updateWizards();
    }),
    // Функция добавления DOM-элементов
    successHandler: function (data) {
      wizards = data;
      updateWizards();
    },
    // Функция высвечивания ошибки на экране
    errorHandler: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';

      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    }
  };
})();
