// Step 23
// While looping through the string works, creating a new array is inefficient for memory and runtime performance. Instead, you can use Regular Expressions (referred to as "regex") to match specific characters.

// Regex in JavaScript is indicated by a pattern wrapped in forward slashes – for example:

// const regex = /hello/;
// Remove your existing code within the cleanInputString function. Declare a regex variable and assign it the value from the example above.
const calorieCounter = document.getElementById('calorie-counter')
const budgetNumberInput = document.getElementById('budget')
const entryDropdown = document.getElementById('entry-dropdown')
const addEntryButton = document.getElementById('add-entry')
const clearButton = document.getElementById('clear')
const output = document.getElementById('output')
let isError = false

function cleanInputString(str){
    const regex = /hello/

}