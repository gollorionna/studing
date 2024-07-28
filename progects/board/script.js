const board = document.querySelector('#board');
const SQUARES_NUMBER = 1200;
const COLORS = ['#E9FF97','#FFD18E','#FFA38F','#FF7EE2', '#667BC6']

for(let i = 0; i < SQUARES_NUMBER; i++){
    const sqare = document.createElement('div');
    sqare.classList.add('square');
    sqare.addEventListener('mouseover', setColor);
    sqare.addEventListener('mouseleave', removeColor);
    board.append(sqare);
}

function setColor (event) {
    const elem = event.target;
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (event) {
    const elem = event.target;
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

