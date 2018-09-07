// Задача 1
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
// Задача 2
var firstNameArr = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorArr = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var rand = Math.floor(Math.random() * arr.length);
    var randomElement = arr[rand];
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
//Задача 3

/*
На основе данных, созданных в предыдущем пункте и шаблона #similar - wizard - template создайте DOM - элементы, соответствующие случайно сгенерированным волшебникам и заполните их данными из массива:

Имя персонажа name запишите как текст в блок.setup - similar - label;
Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента.wizard - coat;
Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента.wizard - eyes. 
*/
