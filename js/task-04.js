let counterValue = 0;
const btnValue = document.querySelector('#value')
const btnDecrement = document.querySelector('[data-action="decrement"]');

btnDecrement.addEventListener('click', () => {
    btnValue.textContent = counterValue;
    
});

const btnIncrement = document.querySelector('[data-action="increment"]');
btnIncrement.addEventListener('click', counterValue(1)
)