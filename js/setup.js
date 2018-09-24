'use strict';
// Константы
var ESC_KEYDOWN = 27;
var ENTER_KEYDOWN = 13;
// Функция инициализации
var init = function () {
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
};

// Задача 1.1
var removeClass = function (className, removedClass) {
  document.querySelector(className).classList.remove(removedClass);
};

// Задача 1.2
var firstNameArr = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorArr = ['black', 'red', 'blue', 'yellow', 'green'];

var createArr = function (arrStart, arrLength) {
  var arr = [];
  for (var i = arrStart; i < arrLength; i++) {
    arr[i] = i;
  }
  return arr;
};

var getRandomElement = function (arr) {
  var randArr = createArr(0, arr.length - 1);
  var rand = Math.floor(Math.random() * arr.length);
  if (rand === randArr[0]) {
    return getRandomElement(arr);
  } else {
    // НЕ ПОЛУЧАЕТСЯ!!!!
    var randomElement = arr[rand];
    var swap1 = rand;
    var swap2 = randArr[0];
    rand = swap2;
    randArr[0] = swap1;
  }
  return randomElement;
};

var createArray = function (arr) {
  for (var i = 0; i < 4; i++) {
    var object = {
      name: getRandomElement(firstNameArr) + ' ' + getRandomElement(surnameArr),
      coatColor: getRandomElement(coatColorArr),
      eyesColor: getRandomElement(eyesColorArr)
    };
    arr[i] = object;
  }
  return arr;
};

// Задача 1.3
var renderHeroes = function (arr, element) {
  var similarItem = element.cloneNode(true);
  similarItem.querySelector('.setup-similar-label').textContent = arr.name;
  similarItem.querySelector('.wizard-coat').style.fill = arr.coatColor;
  similarItem.querySelector('.wizard-eyes').style.fill = arr.eyesColor;
  return similarItem;
};

// Задача 1.4
var addElements = function (elements, element, destination) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < elements.length; i++) {
    fragment.appendChild(renderHeroes(elements[i], element));
  }
  destination.appendChild(fragment);
};

// Задача 2.1
var viewSetupWindow = function (element) {
  element.classList.remove('hidden');
};

var hideSetupWindow = function (element) {
  element.classList.add('hidden');
};

var resetCoordinates = function (element, coords) {
  element.style.left = coords.x;
  element.style.top = coords.y;
};

var openSetupWindow = function (target, element, coords) {
  target.addEventListener('click', function () {
    viewSetupWindow(element);

    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESC_KEYDOWN) {
        hideSetupWindow(element);
        resetCoordinates(element, coords);
      }
    });
  });

  target.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYDOWN) {
      viewSetupWindow(element);
    }
  });
};

var closeSetupWindow = function (target, element, coords) {
  target.addEventListener('click', function () {
    hideSetupWindow(element);
    resetCoordinates(element, coords);
  });

  target.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYDOWN) {
      hideSetupWindow(element);
      resetCoordinates(element, coords);
    }
  });
};

// Задача 2.3
var changeWizardColor = function (arr, wizardColor, wizardColorInput) {
  var newWizardColor = getRandomElement(arr);
  wizardColor.style.fill = newWizardColor;
  wizardColorInput[0].value = newWizardColor;
};

var changeCoatColor = function () {
  var wizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
  var wizardCoatInput = document.getElementsByName('coat-color');

  wizardCoat.addEventListener('click', function () {
    changeWizardColor(coatColorArr, wizardCoat, wizardCoatInput);
  });
};

// Задача 2.4
var changeEyesColor = function () {
  var wizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var wizardEyesInput = document.getElementsByName('eyes-color');

  wizardEyes.addEventListener('click', function () {
    changeWizardColor(eyesColorArr, wizardEyes, wizardEyesInput);
  });
};

// Задача 2.5
var changeFireballColor = function () {
  var fireballColorArr = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var fireballColorInput = document.getElementsByName('fireball-color');

  fireballColor.addEventListener('click', function () {
    var newFireballColor = getRandomElement(fireballColorArr);
    fireballColor.style.background = newFireballColor;
    fireballColorInput[0].value = newFireballColor;
  });
};

// Задача 3
var changeDialogPosition = function (area) {
  var dialogHandle = area.querySelector('.upload');

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

      area.style.top = (area.offsetTop - shift.y) + 'px';
      area.style.left = (area.offsetLeft - shift.x) + 'px';
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

init();
