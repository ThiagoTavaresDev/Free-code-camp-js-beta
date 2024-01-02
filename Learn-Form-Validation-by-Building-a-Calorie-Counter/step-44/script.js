// Step 44
// Start your HTMLString with a new line, then create a label element. Give that element the text Entry # Name, using your template literal syntax to replace # with the value of entryNumber.
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
    const HTMLString = `
    <label>Entry ${entryNumber} Name</label>`
}