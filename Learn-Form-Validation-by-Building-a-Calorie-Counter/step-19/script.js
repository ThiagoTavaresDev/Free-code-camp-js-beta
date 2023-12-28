// Step 19
// You need to split your str into individual characters. You can use the split() method to do this.

// The split() method splits a string into an array of substrings, and returns the new array. You can pass in an optional separator which tells the method where each split should happen.

// For example, passing an empty string into the split method will split the string into an array of individual characters.

// const str = 'Hello World';
// const strArray = str.split('');
// // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
// Split the string passed into the cleanInputString function into an array of individual characters and assign it to a variable named strArray.
const calorieCounter = document.getElementById('calorie-counter')
const budgetNumberInput = document.getElementById('budget')
const entryDropdown = document.getElementById('entry-dropdown')
const addEntryButton = document.getElementById('add-entry')
const clearButton = document.getElementById('clear')
const output = document.getElementById('output')
let isError = false

function cleanInputString(str){
    const strArray = str.split('')

}