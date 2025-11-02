const sketchArea = document.querySelector("#sketchArea")
const options = document.querySelector("#options")
const slider = document.querySelector("#slider")
const sliderText = document.querySelector("#sliderText")
const reset = document.querySelector("#reset")
const pencil = document.querySelector("#pencil")
const eraser = document.querySelector("#eraser")
const currenttool = document.querySelector("#tooltext")
const colorSlider = document.querySelector("#colorSlider")
const grid = document.querySelector("#grid")
const GRIDSIDE = 600
const optionWidth = 140


let currentColor = 'black'
let action = 'pencil'
let isClicking = false;
let currentGrid = 'ON'


sketchArea.style.width = sketchArea.style.height = options.style.height = `${GRIDSIDE}px`
options.style.width = `${optionWidth}px`

function changeColor() {
    let color = currentColor
    if (isClicking == true && action == 'pencil') {
        this.style.backgroundColor = `${color}` 
    } else if (isClicking == true && action == 'eraser') {
        this.style.backgroundColor = 'aliceblue'
    }
}

function changeIsClicking(e) {
    if (e.type == 'mousedown') {
        isClicking = true
    }else if (e.type == 'mouseup') {
        isClicking = false 
    } else if (e.type == 'mouseleave') {
        isClicking = false
    }
}


document.addEventListener('mousedown', changeIsClicking)
document.addEventListener('mouseup', changeIsClicking)
sketchArea.addEventListener('mouseleave', changeIsClicking)
colorSlider.addEventListener('input', function () {
    currentColor = this.value
})

pencil.addEventListener('click', () => {
    action = 'pencil'
    pencil.style.backgroundColor = 'rgb(70, 18, 18)'
    eraser.style.backgroundColor = 'brown'
    currenttool.textContent = 'Pencil'
})
eraser.addEventListener('click', () => {
    action = 'eraser'
    eraser.style.backgroundColor = 'rgb(70, 18, 18)'
    pencil.style.backgroundColor = 'brown'
    currenttool.textContent = 'Eraser'
})

grid.addEventListener('click', function() {
    let cellArray = Array.from(sketchArea.children)
    if (currentGrid == 'ON') {
        currentGrid = 'OFF'
        grid.style.backgroundColor = 'brown'
        grid.textContent = `Grid (${currentGrid})`
        cellArray.forEach(cell => {
            cell.style.border = '0px';
        })
        
        
    } else {
        currentGrid = 'ON'
        grid.style.backgroundColor = 'rgb(69, 204, 69)'
        grid.textContent = `Grid (${currentGrid})`
        cellArray.forEach(cell => {
            cell.style.border = '1px solid rgba(146, 141, 141, 0.377)'
        })
    }
})


function createCells(perSide) {
    const totalSquares = perSide ** 2 

    for (let i=0; i<(totalSquares); i++) {
        let newCell = document.createElement('div')
        newCell.classList.add('cell')
        newCell.style.width = newCell.style.height = `${(GRIDSIDE/perSide)}px`

        newCell.addEventListener('mouseleave', changeColor)

        sketchArea.appendChild(newCell)
    }
}

createCells(16)

function changeDisplay() {
    sketchArea.innerHTML = ""
    createCells(this.value)
    if (currentGrid == 'OFF') {
        let newArray = Array.from(sketchArea.children)
        newArray.forEach(cell => {
            cell.style.border = '0px'
        })
    }
    sliderText.textContent = `${this.value} x ${this.value} (resolution)`
}

function resetArea() {
    sketchArea.innerHTML = ""
    createCells(slider.value)
    if (currentGrid == 'OFF') {
        let newArray = Array.from(sketchArea.children)
        newArray.forEach(cell => {
            cell.style.border = '0px'
        })
    }
}

slider.addEventListener('input', changeDisplay)
reset.addEventListener('click', resetArea)

