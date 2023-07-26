
function createGrid(gridNumber) {
    removeGrid();
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    
    let totalDivs = gridNumber * gridNumber;

    for (let i = 1; i <= totalDivs; i++) {
        let div = document.createElement('div');
        div.classList.add("grid-box");
        gridContainer.appendChild(div);
    }
}

function changeBlack(event) {
    event.target.style.backgroundColor = "black";
}

function resetGrid() {
    gridNumber = 16;
    clearGrid();
    document.getElementById("myRange").value = '16';
    output.innerText = `${slider.value} x ${slider.value}`;
    createGrid(gridNumber);
}

function clearGrid() {
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.style.backgroundColor = null});
}

function removeGrid() {
    const gridContainer = document.querySelector('.grid-container');
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

let gridNumber = 16;

const clearButton = document.querySelector('.clear-btn');
const resetButton = document.querySelector('.reset-btn');
const slider = document.querySelector('.slider');

let output = document.querySelector('.output');
gridNumber = slider.value;
output.innerText = `${slider.value} x ${slider.value}`;

createGrid(gridNumber);
let gridBoxList = document.querySelectorAll('.grid-box');
gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeBlack)});

clearButton.addEventListener('click', clearGrid);
resetButton.addEventListener('click', resetGrid);
slider.addEventListener('input', function () {
    gridNumber = slider.value;
    output.innerText = `${slider.value} x ${slider.value}`;
    clearGrid();
    createGrid(gridNumber)
})
gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeBlack)});