// create parent element
const container = document.querySelector("#container");

// Map div
const map = document.createElement("div");
map.setAttribute("id", "map");
container.appendChild(map);


// set userInput
let userInput =  parseInt(prompt("Choose your map size! Choose between 1 to 100!"));
console.log(userInput)

// Lopping for 16 squares in a row
const createRow = () => {

    // div to put grid in a row 
    const gridRow = document.createElement("div");
    gridRow.setAttribute("class", "gridRow");
    map.appendChild(gridRow);

    for (let i = 1; i <= userInput; i++) {
        const grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        gridRow.appendChild(grid);
    }
}

// creatingColumn
const createColumn = () => {
    for (let j = 1; j <= userInput; j++) {
        createRow();
    }
}

const createGrid = () => {
    createRow();
    createColumn();
}

const createMap = () => {
    if (userInput >= 1 && userInput <= 100) {
        createGrid();
    } else if (userInput >= 1 && userInput >= 100) {
        alert("You choose the wrong number!")
        userInput = prompt("Please choose again between 1 to 100!")
    } else {
        userInput = 16;
        createGrid();
    }
}

createMap();