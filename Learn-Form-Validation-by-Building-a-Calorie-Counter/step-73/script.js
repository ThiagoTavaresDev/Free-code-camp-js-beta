// Step 73
// You also need to get the value of your #budget input. You already queried this at the top of your code, and set it to the budgetNumberInput variable. However, you used getElementById, which returns an Element, not a NodeList.

// A NodeList is an array-like, which means you can iterate through it and it shares some common methods with an array. For your getCaloriesFromInputs function, an array will work for the argument just as well as a NodeList does.

// Declare a budgetCalories variable and set it to the result of calling getCaloriesFromInputs – pass an array containing your budgetNumberInput as the argument.
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('#budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

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
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"/>
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"/>
    `
    targetInputContainer.insertAdjacentHTML('beforeend',HTMLString) 
}

addEntryButton.addEventListener('click',addEntry)

function getCaloriesFromInputs(list){
        let calories = 0
    for(let i = 0; i < list.length; i++){
        const currVal = cleanInputString(list[i].value)
       let invalidInputMatch =isInvalidInput(currVal)
       if(invalidInputMatch){
        alert(`Invalid Input: ${invalidInputMatch[0]}`)
        isError = true
        return null
       }
        calories += Number(currVal)

    }
    return calories
}
function calculateCalories(e){
    e.preventDefault()
    isError = false
    let breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]')
    let lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]')
    let dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]')
    let snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]')
    let exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]')
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs)
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs)
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs)
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs)
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs)
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput])

}
