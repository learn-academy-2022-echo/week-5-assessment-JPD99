// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.


const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


// a) Create a test with expect statements using the variables provided.





describe  ("encoder" , () => {
    it ("Will take a word that is a string and return an altered version of itself", () => {

        expect(encoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(encoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(encoder(secretCodeWord3)).toEqual("3cc3ntr1c")

    })

})

// Red of Red-Green
// FAIL  ./code-challenges.test.js
// encoder
//   ✕ Will take a word that is a string and return an altered version of itself (3 ms)
// ● encoder › Will take a word that is a string and return an altered version of itself
//   ReferenceError: encoder is not defined





// b) Create the function that makes the test pass.



// Create a function called encoder
// Encoder will take a string as a parameter 
// Encoder will output a modified string
    // Logic of Modification: 
        // replacing series of characters into number look-a-likes
            // a -> 4 , e -> 3 , i -> 1 , o -> 0
                // The method that comes to mind is .replace() ; .replace () will take in 2 parameters: targeted character and desired character
        // some letter will change, some will not, the fucntion should be capable enough to have a decision tree
            // condtions will be about replacing the specific letters, and nothing more




// Attempt 1:
// const encoder = (string) => {

//     let c0d31f13d = string

// for (let index = 0 ; index < string.length ; index = index + 1){


//     if (string[index] === "a" || string[index] === "A"){
//          c0d31f13d = string.replace(string[index],"4")

//     } else if (string[index] === "e" || string[index] === "E") {
//          c0d31f13d = string.replace(string[index],"3")

//     } else if (string[index] === "i" || string[index] === "I") {
//          c0d31f13d = string.replace(string[index],"1")

//     } else if (string[index] === "o" || string[index] === "O") {
//          c0d31f13d = string.replace(string[index],"0")

//     } else {

//     }
//         return c0d31f13d
// }
// }
// The final varible c0d31f13d continues to be overwritten; So changes are occuring, the thing is the first replacement is being overwritten by the second replacement. 
// e,g. Original: "Apple"            => 0th: "4pple"            => 4th: "appl3"         ; final result is "appl3"


// Since this is not working I'll just use the old method of splitting a string into an array...
// rediscovered a way to replace elements in an array is .splice (beginning index, #'s of deletion, addition of data type)
const encoder = (string) => {
    encoder_array = string.split("")
    encoder_empty = []
for (i=0;i<encoder_array.length;i++) {
    if (encoder_array[i] === "A" || encoder_array[i] === "a"){
        encoder_empty.push("4")
    } else if (encoder_array[i] === "E" || encoder_array[i] === "e"){
        encoder_empty.push("3")
    } else if (encoder_array[i] === "i" || encoder_array[i] === "I"){
        encoder_empty.push("1")
    } else if (encoder_array[i] === "o" || encoder_array[i] === "O"){
        encoder_empty.push("0")
    } else 
        encoder_empty.push(encoder_array[i])
} 
    return encoder_empty.join("")
}
// Green of Red-Green Refactor
// PASS  ./code-challenges.test.js
// encoder
//   ✓ Will take a word that is a string and return an altered version of itself (2 ms)


        

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.


const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// a) Create a test with expects statement using the variable provided.

describe  ("return_this" , () => {
    it ("Will take in an array + one letter as a string, return all strings from an array with the matching character", () => {

        expect(return_this(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(return_this(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])

    })

})

// Red of Red-Green Refactor
// FAIL  ./code-challenges.test.js
//   encoder
//     ✓ Will take a word that is a string and return an altered version of itself (2 ms)
//   return_this
//     ✕ Will take in an array + one letter as a string, return all strings from an array with the matching character
//   ● return_this › Will take in an array + one letter as a string, return all strings from an array with the matching character
//     ReferenceError: return_this is not defined


// b) Create the function that makes the test pass.

// PseudoCode
// Create a function called return_this
// return_this is a function that takes in 2 parameters, first is an array, and string as one letter
// return_this should output an array where all the elements should have the same exact letter from the arguement 
// Logic:
    // We have to go through all elements of the array; create a forloop or a .map() method 
    // We are going to check if the value at whatever index has the same character we command the function to get for us; use the method .includes()
        // the arguement in .includes() will tell the method what to look for
        // .includes() only outputs true or false
        // devlop a decision tree that uses these true / false answers
    // We must use a .toUppercase() and .toLowerCase() to catch all variations of the inputted arguement
        // Numbers and other characters can be accepted as well, but will not work with the additional chains of .toLowerCase() and .toUpperCase()
    // All elements that statisfy the condtions of each condtionals will be pushed into a container array called desired_array
    // the last piece of code is to call on the container array after the end of the forloop
        // remember to put the return!


const return_this = (array, letter) => {

    desired_array = []

for (let index = 0 ; index < array.length ; index = index + 1){
    if (array[index].includes(letter.toLowerCase()) === true){
    desired_array.push(array[index])
    } else if (array[index].includes(letter.toUpperCase()) === true)
    desired_array.push(array[index])
    else {

    }
    } return desired_array

    }

// PASS  ./code-challenges.test.js
// encoder
//   ✓ Will take a word that is a string and return an altered version of itself (2 ms)
// return_this
//   ✓ Will take in one letter as a string, return all strings from an array with the matching character
  






// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.


const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true


// a) Create a test with expect statements using the variable provided.

describe  ("deck_game" , () => {
    it ("Takes in array of 5 numbers, tells if the array is a full house or not in boolean values ", () => {

        expect(deck_game(hand1)).toEqual(true)
        expect(deck_game(hand2)).toEqual(false)
        expect(deck_game(hand3)).toEqual(false)
        expect(deck_game(hand4)).toEqual(true)   

    })

})
// Red of Red-Green Refactor
// FAIL  ./code-challenges.test.js
// encoder
//   ✓ Will take a word that is a string and return an altered version of itself (3 ms)
// return_this
//   ✓ Will take in an array + one letter as a string, return all strings from an array with the matching character (4 ms)
// deck_game
//   ✕ Takes in array of 5 numbers, tells if the array is a full house or not in boolean values 
// ● deck_game › Takes in array of 5 numbers, tells if the array is a full house or not in boolean values 
//   ReferenceError: deck_game is not defined



// b) Create the function that makes the test pass.

// PsuedoCpde
// create function called deck_game
// deck_game takes in one array and returns a boolean value
// Logic:
    // The function should be ordered with .sort() to compare values adjacent 
    // We are looking for three of a kind
        // three of a kind we are looking at an index, index + 1, and index +2 for the identical values; only works going forwards
            // to get the back we will go in the opposite direction using .length; array.length - 1, array-length -2, and array-length-3
                // If the condtions works we will set an empty array with true called three_of_a_kind
    // We are looking for pairs 
        // pairs will look at adjacent values as index, index +1 ; FORWARDS
            // to get the back .length -1, and .length -2 
                // if condtions are met we add a value in empty array called pairs with boolean value true
    // the last condtional statement will look at the 0th index of the container array three_of_a_kind and pairs for the boolean value true
        // if true, we will push the boolean value true into a result array that will print out the boolean value of true
        // if one condition is not met, by default we will push the value false and display that to the user



// I think the logic works.. but I can't even produce a false statement as my output, even though that my catch-all calls the full house as false??? I must have messed up the logic or something up
// const deck_game = (array) => {
//     deck_array = array.sort
//     three_of_a_kind = [] 
//     pairs = []
//     results_array = []
// for (i=0;i<array.length;i++){

//     if (deck_array[i] === deck_array[i+1] && deck_array[i+1] === deck_array[i+2] || 
//         deck_array[array.length - 3] === deck_array[array.length - 2] && deck_array[array.length - 2] === deck_array[array.length - 1] ){

//         three_of_a_kind.push(true)

//     } else if (deck_array[i] === deck_array[i+1] || 
//         deck_array[array.length - 2] === deck_array[array.length - 1]){

//         pairs.push(true)

//     } else if (three_of_a_kind[0] === true && pairs[0] === true){

//         results_array.push(true)

//     } else {

//         results_array.push(false)

//     }

//     } return results_array

// }


// Attempt 2. Now its permanetely true... 
// const deck_game = (array) => {
//     sorted_deck = array.sort()
//     three = []
//     two = []
// if (array[0] === array[1] && array[1] === array[2] || array[4] === array[3] && array[3] === array[2]){
//     return three = true
// } else if (array[0] === array[1] || array[4] === array[3]){
//     return two = true
// } else if (three === true && two === true){
//     return true
// } else 
//     return false
// }

// I know the logic is right in some way, but the way I'm writing it is completely wrong??????
// I don't know :( I'm going to take a break on this quesiton, and see if I can get some inspiration 