let number = document.getElementById("number")
let name = document.getElementById("name")

const add = () => {
    number.innerText = Number(number.innerText) + 1
}

const remove = () => {
    if (Number(number.innerText) >= 1) {
        number.innerText = Number(number.innerText) - 1
    }
}


const logName = () => {
    console.log(name.value);
}