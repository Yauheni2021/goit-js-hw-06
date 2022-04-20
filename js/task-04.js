let counterValue = 0;

const refs = {
    btnValue: document.querySelector('#value'),
    onTargetBtnDecrementClick: document.querySelector('[data-action="decrement"]'),
    onTargetBtnIncrementClick: document.querySelector('[data-action="increment"]'),
}



const btnDecrement = () =>  {
     counterValue --;
    return (refs.btnValue.textContent = counterValue);
};



const btnIncrement = () =>  {
    counterValue++;
    return (refs.btnValue.textContent = counterValue)
}

refs.onTargetBtnDecrementClick.addEventListener('click', btnDecrement);
refs.onTargetBtnIncrementClick.addEventListener('click', btnIncrement);