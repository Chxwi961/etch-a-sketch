const sketchArea = document.querySelector("#sketchArea")
const options = document.querySelector("#options")
const slider = document.querySelector("#slider")
const sliderText = document.querySelector("#sliderText")
const reset = document.querySelector("#reset")

const GRIDSIDE = 600
const optionWidth = 140

sketchArea.style.width = sketchArea.style.height = options.style.height = `${GRIDSIDE}px`
options.style.width = `${optionWidth}px`

function changeColor() {
    this.style.backgroundColor = 'black'
}


function createCells(perSide) {
    const totalSquares = perSide ** 2 

    for (let i=0; i<(totalSquares); i++) {
        let newCell = document.createElement('div')
        newCell.classList.add('cell')
        newCell.style.width = newCell.style.height = `${GRIDSIDE/perSide}px`


        newCell.addEventListener('mouseover' , changeColor)


        sketchArea.appendChild(newCell)
    }
}

createCells(16)

function changeDisplay() {
    sketchArea.innerHTML = ""
    createCells(this.value)

    sliderText.textContent = `${this.value} x ${this.value} (resolution)`
}

function resetArea() {
    sketchArea.innerHTML = ""
    createCells(slider.value)
}

slider.addEventListener('input', changeDisplay)
reset.addEventListener('click', resetArea)

