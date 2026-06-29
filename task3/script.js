let name = document.getElementById("expense-name");
let price = document.getElementById("expense-price");
let submit = document.getElementById("submit");
let tb = document.getElementById("table");

submit.addEventListener("click" , (e)=>{
    e.preventDefault()
    tb.innerHTML += `
        <tr>
            <td>${name.value}</td>
            <td>${price.value}</td>
        </tr>
    `
});