//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн
// стиль при клике на button.change - color и выводит 
// значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnCangeColor = document.querySelector('.change-color');
const colorBg = document.querySelector('.color');

btnCangeColor.addEventListener('click', onChangeColorClickBtn);


function onChangeColorClickBtn() {
  body.style.background = getRandomHexColor();
  colorBg.textContent = body.style.background;
}