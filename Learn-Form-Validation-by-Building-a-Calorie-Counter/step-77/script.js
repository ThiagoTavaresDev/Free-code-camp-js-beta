// Step 77
// You need to know if the user's calories are a surplus or a deficit. Declare a surplusOrDeficit variable.

// Use a ternary operator to set surplusOrDeficit to the string Surplus or Deficit depending on whether remainingCalories is greater than or equal to 0. If it is greater than or equal to 0, then surplusOrDeficit should be Surplus. Otherwise, it should be Deficit.
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
    if(isError){
        return
    }
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories + exerciseCalories
    const remainingCalories =  budgetCalories - consumedCalories  +  exerciseCalories
    const surplusOrDeficit = remainingCalories >= 0 ? 'Surplus' : 'Deficit'
    
}