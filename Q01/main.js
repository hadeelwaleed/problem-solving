console.log('Problem Solving Q: 1 ');

/* Longest Word */

/*  
Have the function LongestWord(sen) take the `sen` parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. and if the string (sen) is empty return 'there are 0 words'
*/

//                   1 Input => string
function LongestWord(sen) {
  // check if sen is empty string
  if(sen.length === 0){
    // return 'there are 0 words'
    return 'there are 0 words'
  }

  // the initial value for the output
  let output = ''; // 'lol'

  // Process
  // convert the sen (string) to an array (have each word alone)
  const words = sen.split(' '); // ["lol", 'a', "time"]
  // iterate over the array (words)
  for (let index = 0; index < words.length; index++) {
    // check if the element (the current word) the longest word till now or not
    if (words[index].length > output.length) {
      // make the output (longest world) equal current world
      output = words[index];
    }
  }
  // return the longest word
  return output;
}

/* 
Examples:
LongestWord('lol time'); // => 'time'
LongestWord('I love cats'); // => 'love'
LongestWord('coding is awesome'); // => 'awesome'
LongestWord('hello world'); // => 'hello'

// Edge case
LongestWord(''); // => 'there is 0 words'

*/
