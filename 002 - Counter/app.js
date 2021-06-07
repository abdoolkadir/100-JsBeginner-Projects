const count = document.querySelector('.count');
const btnAdd = document.querySelectorAll('.btn');
let counter = 0;

btnAdd.forEach((btn) => {
    btn.addEventListener('mousedown', () => {
        if(btn.textContent === '➕') {
            counter++;
        } else if(btn.textContent === '➖') {
            counter--
        }
        count.textContent = counter;
    })
})