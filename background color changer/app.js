const colors = ['red', 'green', 'skyblue', 'orange', 'coral', 'violet', 'purple', 'turquoise', 'blue', 'black'];
const bg = document.querySelector('.container');
const btn = document.getElementById('btn');
btn.addEventListener('click', changeColor);
function changeColor() {
    let i = Math.floor(Math.random() * 9) + 1;
    bg.style.background = colors[i];
}