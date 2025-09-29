let increment = document.getElementById("increment-btn");
let decrement = document.getElementById("decrement-btn");
let reset = document.getElementById("reset-btn");
let bold = document.getElementById("bold-button");
let btns = document.getElementsByClassName("counter-btn");
let count = document.getElementById("counter-value");
let double = document.getElementById("double-counter");
let newBut = document.createElement("button");
let makeRed = document.getElementById("red-button");

increment.addEventListener ("click",function add(){
    count.textContent = +count.textContent + 1;
    if (+count.textContent < 0) {
        disableButts();
    }
})

decrement.addEventListener ("click", function minus(){
    count.textContent = +count.textContent - 1;
    if (+count.textContent < 0) {
        disableButts();
    }
})
        disableButts
    }
})

reset.addEventListener ("click", function reset(){
    count.textContent = 0;
})

double.addEventListener ("click", function doublee(){
    let new_count = parseInt(count.textContent);
    new_count = new_count * 2;
    count.textContent = new_count;
})
makeRed.addEventListener('click', function red() {
    if (count.style.color === 'red') {
        count.style.color = 'black';
    } else {
        count.style.color = 'red';
    }
})
bold.addEventListener('click', function bold() {
    if (count.style.fontWeight === 'bold') {
        count.style.fontWeight = 'normal';
    } else {
        count.style.fontWeight = 'bold';
    }
})


function disableButts() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
    }
    if (+count.textContent < 0) {
        console.log("Counter is negative!");
    }
}

