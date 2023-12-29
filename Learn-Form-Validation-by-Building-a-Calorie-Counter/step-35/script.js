// Step 35
// Strings have a .match() method, which takes a regex argument. .match() will return an array of match results – containing either the first match, or all matches if the global flag is used.

// Return the result of calling the .match() method on str and passing your regex variable as the argument. You'll use this match result later on.


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