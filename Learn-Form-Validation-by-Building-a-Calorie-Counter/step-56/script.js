// Step 56
// The list parameter is going to be the result of a query selector, which will return a NodeList. A NodeList is an array-like which contains the elements that match the query selector.

// You'll need to loop through these elements, so start by creating a for loop. Your iterator i should start at 0, continue while it is less than the length of the list, and increment by 1 each iteration.
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str){
    const regex = /[+-\s]/g;
    return str.replace(regex,'')
}
function isInvalidInput(str){
    const regex = /\d+e\d+/i;
    return str.match(regex)
}
function addEntry(){
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`)
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"/>
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"/>
    `
    targetInputContainer.insertAdjacentHTML('beforeend',HTMLString) 
}

addEntryButton.addEventListener('click',addEntry)

function getCaloriesFromInputs(list){
        let calories = 0
    for(let i = 0; i < list.length; i++){


    }
}