let count = 5;

const display = document.getElementById("count");

const timer = setInterval(() => {
    count--;
    
    if (count > 0) {
        display.textContent = count;
    } else {
        display.textContent = "Time's Up!";
        clearInterval(timer);
    }
}, 1000);