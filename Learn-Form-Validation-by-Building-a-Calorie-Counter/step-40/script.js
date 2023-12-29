// Step 40
// Thanks to template literals, you actually don't need the targetId variable at all. Remove that variable, and update your template literal to replace targetId with entryDropdown.value – remember to add # before that, in the string.
// const calorieCounter = document.getElementById('calorie-counter')
// const budgetNumberInput = document.getElementById('budget')
// const entryDropdown = document.getElementById('entry-dropdown')
// const addEntryButton = document.getElementById('add-entry')
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

    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`)

}