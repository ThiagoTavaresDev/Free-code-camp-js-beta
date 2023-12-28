// Step 19
// You need to split your str into individual characters. You can use the split() method to do this.

// // The split() method splits a string into an array of substrings, and returns the new array. You can pass in an optional separator which tells the method where each split should happen.

// Step 20
// Declare a cleanStrArray variable and assign it an empty array. You will use this to store your valid number characters.
const calorieCounter = document.getElementById('calorie-counter')
const budgetNumberInput = document.getElementById('budget')
const entryDropdown = document.getElementById('entry-dropdown')
const addEntryButton = document.getElementById('add-entry')
const clearButton = document.getElementById('clear')
const output = document.getElementById('output')
let isError = false

function cleanInputString(str){
    const strArray = str.split('')
    const cleanStrArray = []
}