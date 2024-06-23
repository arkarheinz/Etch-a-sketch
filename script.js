// create parent element
const container = document.querySelector("#container");

// Lopping for 16 squares in a row
const createRow = () => {

    // div to put grid in a row 
    const gridRow = document.createElement("div");
    gridRow.setAttribute("class", "gridRow");
    container.appendChild(gridRow);

    for (let i = 1; i <= 16; i++) {
        const grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        gridRow.appendChild(grid);
    }
}

// creatingColumn
const createColumn = () => {
    for (let j = 1; j <=16; j++) {
        createRow();
    }
}

const createGrid = () => {
    createRow();
    createColumn();
}
createGrid();

