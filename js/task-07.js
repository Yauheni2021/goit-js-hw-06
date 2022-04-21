//Напиши скрипт, который реагирует на изменение значения input#font-size-control 
//(событие input) и изменяет инлайн - стиль span#text обновляя свойство 
//font - size.В результате при перетаскивании ползунка будет меняться размер текста.


const rangeIn = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

rangeIn.addEventListener('input', onTargetChangeRange);

function onTargetChangeRange (event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}