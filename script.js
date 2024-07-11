// userInput link with button
const userInput = document.querySelector("#userInput");

// Container to put map
const container = document.querySelector("#container");


// function to create Map
const createGrid = () => {
    // Get userValue
    const userValue = userInput.value;

    // Check if the user value is valid
    if (userValue < 16 || userValue > 100 || isNaN(userValue)) {
        alert("Please enter a number between 16 and 100.");
        return;
    }

    // Function for create Rows
    const creatingRows = () => {
        // Creating Rows
        const createRow = document.createElement("div");
        createRow.setAttribute("class", "row");
        container.appendChild(createRow);
        //loop for create multiple grid row
        for (let row = 1; row <= userValue; row++) {
            // Add grids in a row
            const grid = document.createElement("div");
            grid.setAttribute("class", "grid");
            createRow.appendChild(grid);
            
            // Add event listener to change grid color on click
            grid.addEventListener("click", () => {
                grid.classList.toggle("clicked");
            });

            // Add mouseover event listener for drag effect
            grid.addEventListener("mouseover", (event) => {
                // Check if the left mouse button is pressed (button 0)
                if (event.buttons === 1) {
                    grid.classList.add("clicked");
                }
            });
        };
    }

    for (let col = 1; col <= userValue; col++) {
        // Loop for add grid rows depending in userInput
        creatingRows();
    }
};

// Select .row to remove from container
const rows = document.querySelectorAll(".row");

// Create event to create Map
const select = document.querySelector("#select");
select.addEventListener("click", () => {

    // Remove existing rows
    rows.forEach(row => container.removeChild(row));

    // Clear the container before adding new grids
    container.innerHTML = "";

    // Create the new grid
    createGrid();
});

