/**
 * 804. Unique Morse Code Words
 *
 * International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:
 * "a" maps to ".-",
 * "b" maps to "-...",
 * "c" maps to "-.-.", and so on.
 *
 * For convenience, the full table for the 26 letters of the English alphabet is given below:
 * [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
 *
 * Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.
 * For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation, the transformation of a word.
 * Return the number of different transformations among all words we have.
 *
 * Example 1:
 * Input: words = ["gin","zen","gig","msg"]
 * Output: 2
 * Explanation: The transformation of each word is:
 * "gin" -> "--...-."
 * "zen" -> "--...-."
 * "gig" -> "--...--."
 * "msg" -> "--...--."
 * There are 2 different transformations, "--...-." and "--...--.".
 *
 * Example 2:
 * Input: words = ["a"]
 * Output: 1
 *
 * Constraints:
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 12
 * words[i] consists of lowercase English letters.
 */

/**
 * @param {string[]} words
 * @return {number}
 */

var uniqueMorseRepresentations = function (words) {
  // create a map
  let map = {};
  // create a morse code array
  let morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  // iterate through the words
  for (let i = 0; i < words.length; i++) {
    // create a string variable
    let str = "";
    // iterate through the word
    for (let j = 0; j < words[i].length; j++) {
      // add the morse code to the string
      str += morseCode[words[i][j].charCodeAt() - 97];
    }
    // add the string to the map
    map[str] = true;
  }
  // return the map length
  return Object.keys(map).length;
};

// Ryan Morci solution

var uniqueMorseRepresentations = function (words) {
  // create a set
  const uniqueMorseValues = new Set();
  // iterate through the words
  for (let i = 0; i < words.length; i++) {
    // create a letters array
    const letters = [...words[i]];
    // create a morse value string
    let morseValue = "";
    // iterate through the letters
    for (char of letters) {
      // add the morse value to the string
      morseValue += translateCharacterToMorse(char);
    }
    // add the morse value to the set
    uniqueMorseValues.add(morseValue);
  }
  return uniqueMorseValues.size;
};

// helper function
const translateCharacterToMorse = (char) => {
  // create a base char code for 'a' at idx 0
  const baseCharCode = 97;
  // get the char code
  const characterAsNum = char.charCodeAt(0);
  // get the index
  const index = characterAsNum - baseCharCode;
  const morseArray = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  // return the morse value
  return morseArray[index];
};
