// Step 42
// Each entry will have a text input for the entry's name, and a number input for the calories. To get a count of the number of entries, you can query by text inputs. Note that you cannot query by number inputs, as you have an extra number input for the user's calorie budget.

// Pass the string input[type="text"] to the querySelectorAll() method. Remember that you will need to use single quotes for your string, so that you can use double quotes within.

// This will return a NodeList of all the text inputs in the form. You can then access the length property of the NodeList to get the number of entries. Do this on the same line.
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
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length
}