// --- Directions
// Write a function that accepts a string.  The function should
// apictalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// The charAt() method returns the character at the specified index in a string.
function capitalize(str) {
const word = ""
return word.charAt(0).toUpperCase()
}
module.exports = capitalize;
