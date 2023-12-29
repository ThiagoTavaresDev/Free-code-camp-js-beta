// Step 37
// You'll need to know which category the entry goes in. Thankfully, you added a dropdown for the user to select a category.

// Remember that you queried that dropdown earlier in your JavaScript and assigned it to the entryDropdown button. You can use the value property to get the value of the selected option.

// Use concatenation to add a # to the beginning of the value property of entryDropdown, and assign that result to a targetId variable.

const calorieCounter = document.getElementById('calorie-counter')
const budgetNumberInput = document.getElementById('budget')
const entryDropdown = document.getElementById('entry-dropdown')
const addEntryButton = document.getElementById('add-entry')
const clearButton = document.getElementById('clear')
const output = document.getElementById('output')
let isError = false

function cleanInputString(str){
    const regex = /[+-\s]/g;
    return str.replace(regex,'')
}
function isInvalidInput(str){
    const regex = /\d+e\d+/i;
    return str.match(regex)
}
function addEntry(){
    const targetId = '#' + entryDropdown.value
}