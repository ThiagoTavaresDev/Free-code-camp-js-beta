// Step 33
// The + modifier in a regex allows you to match a pattern that occurs one or more times. To match your digit pattern one or more times, add a plus after each of the digit character classes. For example: [0-9]+.
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
    const regex = /[0-9]+e[0-9]+/i;

}