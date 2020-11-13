/* Q1: Longest Word */
function LongestWord(sen) {
  // check if sen is empty string
  if (sen.length === 0) {
    // return 'there are 0 words'
    return 'there are 0 words';
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

/* Q2: Longest Word_2 */

/* Q3: First Reverse */

/* Q4: Codeland Username Validation */

/* Q5: Find Intersection */
