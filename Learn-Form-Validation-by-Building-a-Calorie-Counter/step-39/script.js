// Step 39
// JavaScript has a feature called template literals, which allow you to interpolate variables directly within a string. Template literals are denoted with backticks ``, as opposed to single or double quotes. Variables can be passed in to a template literal by surrounding the variable with ${} – the value of the variable will be inserted into the string.

// For example:

// const name = "Naomi";
// const templateLiteral = `Hello, my name is ${name}~!`;
// console.log(templateLiteral);
// The console will show the string "Hello, my name is Naomi~!".

// Replace your concatenated string in the querySelector with a template literal – be sure to keep the space between your targetId variable and .input-container.

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
    const targetInputContainer = document.querySelector(`${targetId} .input-container`)

}