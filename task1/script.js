let b1 = document.querySelector("#box1");
let b2 = document.querySelector("#box2");
let b3 = document.querySelector("#box3");
let b4 = document.querySelector("#box4");
let bg = document.querySelector("#background");

let form_value = document.querySelector("#form_name");
let button = document.querySelector("#form_submit");
let display = document.querySelector("#text_display");
b1.addEventListener("click", ()=> {
    bg.style.backgroundColor = "orange";
});

b2.addEventListener("click", ()=> {
    bg.style.backgroundColor = "pink";
});

b3.addEventListener("click", ()=> {
    bg.style.backgroundColor = "green";
});

b4.addEventListener("click", ()=> {
    bg.style.backgroundColor = "yellow";
});


button.addEventListener("click", ()=> {
display.innerHTML = `You Typed : ${form_value.value}`;
});
