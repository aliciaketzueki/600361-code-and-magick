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

var renderHeroes = function(arr) {
  var similarItem = similarWizardTemplate.cloneNode(true);
  similarItem.querySelector('.setup-similar-label').textContent = arr[i].name;
  similarItem.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
  similarItem.querySelector('.wizard-eyes').style.fill = arr[i].eyesColor;
  return similarItem;
}
// Задача 4
var fragment = document.createDocumentFragment();
for (var i = 0; i < heroes.length; i++) {
  fragment.appendChild(renderHeroes(heroes));
}
similarList.appendChild(fragment);
// Задача 5
var setupSimilar = document.querySelector('.setup-similar').classList.remove('hidden');
