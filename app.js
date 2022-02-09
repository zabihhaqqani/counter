let btn1 = document.querySelector("#Increment")

let btn2 = document.querySelector("#Decrement")

let btn3 = document.querySelector("#Reset")

let view = document.querySelector("#view")


view.textContent = initialValue = 0

btn3.addEventListener("click", function clickHandler3() {
    view.textContent = initialValue = 0
    document.getElementById("view").style.color = "black"

})

btn1.addEventListener("click", function clickHandler() {
    view.textContent = initialValue = initialValue + 1
    if (initialValue === +1) {
        document.getElementById("view").style.color = "green"
    }
})

btn2.addEventListener("click", function clickHandler2() {

    view.textContent = initialValue = initialValue - 1
    if (initialValue === -1) {
        document.getElementById("view").style.color = "red"
    }
})