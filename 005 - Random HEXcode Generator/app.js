const hexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

document.querySelector('button').addEventListener('click', changeStyle)

function generateHex() {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        // Using math.round() was returning an undefined value becase it was looping outside the array length.
        // so adding the array lenght and modulus solved it.
        const index = Math.round(Math.random() * hexCodes.length) % 15;
        hex += hexCodes[index];
        console.log(hex, index)
    }
    return hex;
}


function changeStyle() {
    let hex = generateHex();

    document.body.style.background = hex;
    document.querySelector('.hex-value').textContent = hex;
}