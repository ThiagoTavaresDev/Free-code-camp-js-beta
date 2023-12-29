// Step 22
// Within your loop, you need to check if the character in strArray at index i is not a +, -, or a space. If it is not, push it to the cleanStrArray.

// You will need to check if the array ["+", "-", " "] does not include the current character. You can use a combination of the includes() method and the ! operator to do this.

// The .includes() method returns true if the array contains the character, and false if not. The logical NOT operator (!) will return the opposite of the value of the .includes() method.

// Here is an example:

// const numbersArray = [1, 2, 3, 4, 5]
// const number = 6

// if (!numbersArray.includes(number)) {
//   console.log("The number is not in the array.")
// }
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
    for(let i = 0; i < strArray.length; i++){
           if(!["+", "-", " "].includes(strArray[i])){
               cleanStrArray.push(strArray[i])
           }


    }

}