let from = document.getElementById("from");
let to = document.getElementById("to");
let display = document.getElementById("demo");


addNum.addEventListener('click',displayTable);

function displayTable() {
    let fromVal = from.value;
    let toVal = to.value;

    display.innerHTML = "";
    if (fromVal > toVal) {
        for (let index = fromVal; index >= toVal; index--) {
            const div = document.createElement("div");
            for (let i = 0; i <= 12; i++) {
                const p = document.createElement("p");
                p.textContent += `${index} * ${i} = ${index * i}`
                div.appendChild(p);           
            } 
            display.appendChild(div); 
        }
    }else{
        for (let index = fromVal; index <= toVal; index++) {
                const div = document.createElement("div");
                for (let i = 0; i <= 12; i++) {
                    const p = document.createElement("p");
                    p.textContent += `${index} * ${i} = ${index * i}`
                    div.appendChild(p);       
                } 
                display.appendChild(div)
             }
         }
}