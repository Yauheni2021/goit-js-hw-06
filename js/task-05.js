const formInput = document.querySelector('#name-input');
const formOutput = document.querySelector('#name-output');

formInput.addEventListener('input', () => {
    formOutput.textContent = formInput.value ? formInput.value : "Anonymous";
});