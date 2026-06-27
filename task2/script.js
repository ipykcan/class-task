let background = document.querySelector(".box");
let btn = document.getElementById("button");

let letters = "0123456789ABCDEF";


function color() {
    let str = "#";
    for (let i = 0; i < 6; i++) {
        str += letters[Math.floor(Math.random() * 16)];
    }
    return str;
}



btn.addEventListener("click", (e) => {
    e.preventDefault();
    setInterval(() => {
        background.style.backgroundColor = color();
    }, 500);

});