let switchBtn = document.getElementById("switch-btn")

const convertBtn = document.getElementById("convert-btn")

let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")

function convert() {
    let inputNum = document.getElementById("input-num").value

    const toFeet = inputNum * 3.281
    const toMeter = inputNum / 3.281
    lengthResult.innerHTML = `${inputNum} meters = ${toFeet.toFixed(3)}. feet | ${inputNum} feet = ${toMeter.toFixed(3)} meters`

    const toLiter = inputNum / 0.264
    const toGallon = inputNum * 0.264
    volumeResult.innerHTML = `${inputNum} liters = ${toGallon.toFixed(3)} gallons | ${inputNum} gallons = ${toLiter.toFixed(3)} liters`

    const toPound = inputNum * 2.204
    const toKg = inputNum / 2.204
    massResult.innerHTML = `${inputNum} kilos = ${toPound.toFixed(3)} pounds | ${inputNum} pounds = ${toKg.toFixed(3)} kilos`
}

convertBtn.addEventListener("click", function() {
    convert()
})

switchBtn.addEventListener("click", function() {
    let element = document.body;
    element.classList.toggle("light")
})

