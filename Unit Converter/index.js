let len = document.getElementById("length")
let vol = document.getElementById("volume")
let mas = document.getElementById("mass")
const buttonC = document.getElementById("buttonclick")

buttonC.addEventListener("click", function () {
    let unitEl = 0
    let newValue = document.getElementById("numberValue").value
    unitEl = newValue
    console.log(unitEl)
    let sentence = generateSentence(unitEl)
    len.textContent = sentence[0]
    vol.textContent = sentence[1]
    mas.textContent = sentence[2]

})


function generateSentence(n) {
    let sentences = ["", "", ""]

    let f = n * 3.28084
    let m = n * 0.3048
    sentences[0] += `${n} meters = ${f.toFixed(3)} feet | ${n} feet = ${m.toFixed(3)} meters`

    let g = n * 0.264172
    let l = n * 3.78541
    sentences[1] += `${n} liters = ${g.toFixed(3)} gallons | ${n} gallons = ${l.toFixed(3)} liters`

    let p = n * 2.20462
    let k = n * 0.453592
    sentences[2] += `${n} kilos = ${p.toFixed(3)} pounds | ${n} pounds = ${k.toFixed(3)} kilos`

    return sentences
}








