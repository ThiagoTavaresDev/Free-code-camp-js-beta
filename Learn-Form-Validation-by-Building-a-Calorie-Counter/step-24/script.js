// Step 24
// The pattern you currently have will match the exact text hello, which is not what you want to match. You want to look for +, -, or spaces. Replace the pattern in your regex variable with \+- to look for plus and minus characters.

// Note that you need to use the \ to escape the +, because a + has a special meaning in regular expressions.

const calorieCounter = document.getElementById('calorie-counter')
const budgetNumberInput = document.getElementById('budget')
const entryDropdown = document.getElementById('entry-dropdown')
const addEntryButton = document.getElementById('add-entry')
const clearButton = document.getElementById('clear')
const output = document.getElementById('output')
let isError = false

function cleanInputString(str){
    const regex = /\+-/

}