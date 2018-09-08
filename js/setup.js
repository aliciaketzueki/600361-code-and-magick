// Задача 1
var setup = document.querySelector('.setup').classList.remove('hidden');
// Задача 2
var firstNameArr = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorArr = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var rand = Math.floor(Math.random() * arr.length);
    var randomElement = arr[rand];
    arr.splice(rand, 1); // удаление из массива выбранного случайно элемента (чтобы не повторялись)
  }
  return randomElement;
};

var heroes = [];

for (var i = 0; i < 4; i++) {
  var hero = {
    name: getRandomElement(firstNameArr) + ' ' + getRandomElement(surnameArr),
    coatColor: getRandomElement(coatColorArr),
    eyesColor: getRandomElement(eyesColorArr)
  };
  heroes[i] = hero;
}

console.log(heroes);
//Задача 3
var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < heroes.length; i++) {
  var similarItem = similarWizardTemplate.cloneNode(true);
  similarItem.querySelector('.setup-similar-label').textContent = heroes[i].name;
  similarItem.querySelector('.wizard-coat').style.fill = heroes[i].coatColor;
  similarItem.querySelector('.wizard-eyes').style.fill = heroes[i].eyesColor;

  similarList.appendChild(similarItem);
}
//Задача 4



/*
На основе данных, созданных в предыдущем пункте и шаблона #similar - wizard - template создайте DOM - элементы, соответствующие случайно сгенерированным волшебникам и заполните их данными из массива:

Имя персонажа name запишите как текст в блок.setup - similar - label;
Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента.wizard - coat;
Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента.wizard - eyes. 

Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list. Для вставки элементов используйте DocumentFragment.
*/

// Задание 5
var setupSimilar = document.querySelector('.setup-similar').classList.remove('hidden');
