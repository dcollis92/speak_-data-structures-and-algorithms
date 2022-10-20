/*
 * Equivalent Keypresses
 *
 * Have the function EquivalentKeypresses(strArr) read the array of strings stored in strArr which will contain 2 strings representing  two comma separated lists of keypresses. Your goal is to return the string true if the keypresses produce the same printable string and the string false if they do not. A keypress can be either a printable character or a backspace represented by -B. You can produce a printable string from suc ha string of keypresses by having backspaces erase one preceding character.
 *
 * Examples:
 * Input: ["a,b,c,d", "a,b,c,d"]
 * Output: true
 *
 * Input: ["c,a,r,d", "c,a,-B,r,d"]
 * Output: false
 */

function EquivalentKeypresses(strArr) {
  // convert the keypresses into strings
  const str1 = convertKeypresses(strArr[0].split(","));
  const str2 = convertKeypresses(strArr[1].split(","));
  // return whether the strings are equal
  return str1 === str2;
}

// helper function to convert keypresses into a string
function convertKeypresses(keypresses) {
  // create a variable to store the string
  let str = "";
  // loop through the keypresses
  for (let i = 0; i < keypresses.length; i++) {
    // if the keypress is a backspace
    if (keypresses[i] === "-B") {
      // remove the last character from the string
      str = str.slice(0, str.length - 1);
    } else {
      // add the keypress to the string
      str += keypresses[i];
    }
  }
  // return the string
  return str;
}

/*******************************************/
/* 
 * Prime Time
 *
 * Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.
 * 
 * Examples:
 * Input: 19
 * Output: true
 * 
 * Input: 110
 * Output: false
*/

function PrimeTime(num) {
  // loop through the numbers from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // if the number is divisible by the current number
    if (num % i === 0) {
      // return false
      return false;
    }
  }
  // return true
  return true;
}

