// Basic form DOM elements
const form = document.getElementById("readingform");
const button = document.querySelector("#readingform > button")

// Selector for the readinglist output
var readinglist = document.querySelector("#readinglist > ul");

// DOM elements for the reading input fields
var readingInput = document.getElementById("readingInput");

// Form submission event listener
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let reading = readingInput.value;
    if (reading) {
        addreading(reading, false);
    }
})

// Create global array to track readings
var readinglistArray = [];

// Function to add reading with user inputs as parameters
function addreading(readingDescription) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let reading = {
        readingDescription,
    };
    readinglistArray.push(reading);
    console.log(readinglistArray);
    renderreading(reading);
}

// Function to display reading on screen
function renderreading(reading) {

    // Call function - checks if a reading has been added
    updateEmpty();

    // Create HTML elements
    let item = document.createElement("li");
    item.setAttribute('data-id', reading.id);
    item.innerHTML = "<p>" + reading.readingDescription + "</p>";

    readinglist.appendChild(item);

    // Extra reading DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete reading");
    delButton.setAttribute("style", "flex-shrink: 0; height: 24px; align-self: center;");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);


    // Event Listeners for DOM elements
    delButton.addEventListener("click", function (event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = readinglistArray.findIndex(reading => reading.id === Number(id));
        removeItemFromArray(readinglistArray, index)
        console.log(readinglistArray);
        updateEmpty();
        item.remove();
    })

    // Clear the input form
    form.reset();
}

// Function to remove item from array
function removeItemFromArray(arr, index) {
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}

// Function to hide the 'you haven't added any readings' text
function updateEmpty() {
    if (readinglistArray.length > 0) {
        document.getElementById('emptyList').style.display = 'none';
        document.getElementById('openAll').style.display = 'block';
    } else {
        document.getElementById('emptyList').style.display = 'block';
        document.getElementById('openAll').style.display = 'none';
    }
}

//Open all link from reading list
var openAllBtn = document.getElementById("openAll");
openAllBtn.addEventListener("click", function () {
    if (readinglistArray.length > 0) {
        readinglistArray.forEach(function (item) {
            window.open(item.readingDescription, '_blank');
        });
    }
});