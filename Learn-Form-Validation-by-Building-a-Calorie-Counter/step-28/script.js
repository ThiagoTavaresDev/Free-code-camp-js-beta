// Step 28
// Strings have a .replace() method which allows you to replace characters in the string with another string. .replace takes two arguments. The first is the character sequence to replace – this can either be a string or a regex pattern. The second is the string to replace that sequence with. For example, this would replace all instances of l with 1:

// "hello".replace(/l/g, "1");
// Use your regex to replace all instances of +, -, and a space in str with an empty string. Return this value.
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