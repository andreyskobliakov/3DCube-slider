let angle = 0;

const rotateButton = document.getElementById('rotateButton');
const slider = document.querySelector('.slider');

rotateButton.addEventListener('click', () => {
    angle += 90; 
    slider.style.transform = `rotateY(${angle}deg)`;
});
