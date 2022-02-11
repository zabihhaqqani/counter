//setting intial value 
let count = 0;

//selecting value

const value = document.querySelector("#value");

//select all 3 buttons at the same time
const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn) {

    btn.addEventListener("click", function (event) {
        let selectingBtn = (event.currentTarget.classList);
        if (selectingBtn.contains("increase")) {
            count++
            if (count > 0) {
                value.style.color = 'green'
            }
            value.textContent = count;
        } else if (selectingBtn.contains("decrease")) {
            count--
            if (count < 0) {
                value.style.color = 'red'
            }
            value.textContent = count;

        } else if (selectingBtn.contains("reset")) {
            count = 0
            if (count === 0) {
                value.style.color = 'black'
            }
            value.textContent = count;
        }
    })

})