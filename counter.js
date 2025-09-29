let increment = document.getElementById("increment-btn");
let decrement = document.getElementById("decrement-btn");
let reset = document.getElementById("reset-btn");
let bold = document.getElementById("bold-button");
let buttons = document.getElementsByClassName("counter-btn");
let count = document.getElementById("counter-value");
let double = document.getElementById("double-counter");
let newBut = document.createElement("button");
let makeRed = document.getElementById("red-button");

increment.addEventListener ("click",function add(){
    count.textContent = +count.textContent + 1;
})

decrement.addEventListener ("click", function minus(){
    count.textContent = +count.textContent - 1;
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
    count.style.color= 'red';
})
bold.addEventListener('click', function bold() {
    count.style.fontWeight = 'bold';
})

