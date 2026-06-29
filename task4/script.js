let btn = document.getElementById("btn");


btn.addEventListener("click", ()=>{
    setTimeout(()=>{
        alert("Login successful");
    },1000);

    setTimeout(()=>{
        alert("valid email");
    },1000);

    setTimeout(()=>{
        alert("meeting joined successful");
    },1000);

    setTimeout(()=>{
        alert("new message");
    },1000);
});