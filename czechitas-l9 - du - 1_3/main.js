// tady je místo pro náš program

const car = document.getElementById('car')


document.onkeydown = checkKey;

function checkKey(event) {
    if (event.keyCode == '37') {
        car.classList.add('move-left');
        // left arrow
     } else if (event.keyCode == '39') {
        car.classList.add('move-right');
        // right arrow
     }
}

car.addEventListener('checkKey')

// funguje