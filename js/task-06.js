const textIn = document.querySelector('#validation-input');

textIn.addEventListener('blur', onCheckIn);

function onCheckIn(event) {
    if (event.currentTarget.value.length === Number(textIn.dataset.length)) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
}

