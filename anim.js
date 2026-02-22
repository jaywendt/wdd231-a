const greenButton = document.querySelector(`.green`);
const blueShape = document.querySelector(`.blue`);
greenButton.addEventListener('click', () => {
    blueShape.classList.toggle('show');
    });