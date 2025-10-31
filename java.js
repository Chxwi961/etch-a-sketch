const GRIDSIZE = 600;
let perSide = 16;

const sketchArea = document.querySelector("#sketchArea");
sketchArea.style.width = sketchArea.style.height = `${GRIDSIZE}px`;

const reset = document.querySelector(".reset");

const slidercontainer = document.querySelector("#containerslider")
const slider = document.querySelector("#slider")
const sliderValue = document.querySelector("#sliderText")

sliderValue.textContent = `${slider.value} x ${slider.value} (resolution)`


function createGridCells(perSide) {
    console.log(perSide)
    const numPerArea = perSide ** 2 ;
    const widthOrHeight = (`${GRIDSIZE/perSide}px`);
    for (let i=0; i<(numPerArea);i++) {
        let newCell = document.createElement('div');
        newCell.style.width = newCell.style.height = widthOrHeight;
        newCell.classList.add('cell');
        sketchArea.appendChild(newCell);

        newCell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })

    }
}

createGridCells(16)

reset.addEventListener("click", () => {
    for (let cell of sketchArea.children) {
        cell.style.backgroundColor = 'rgba(220, 225, 230, 0.753)';
    }
})

slider.addEventListener('input', () => {
    for (let grid of sketchArea.children) {
        sketchArea.innerHTML = "";
    }

    createGridCells(slider.value)
    sliderValue.textContent = `${slider.value} x ${slider.value} (resolution)`
})