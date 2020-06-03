// use edit distance algorithm to compare 2 strings
// if number of changes between to string more than set threshold return false
// otherwise consider strings equal

// Java program to check if given
// two strings are at distance one.
/*
Let the input strings be s1 and s2 and lengths of input 
strings be m and n respectively.

1) If difference between m an n is more than 1, 
     return false.
2) Initialize count of edits as 0.
3) Start traversing both strings from first character.
    a) If current characters don't match, then
       (i)   Increment count of edits
       (ii)  If count becomes more than 1, return false
       (iii) If length of one string is more, then only
             possible  edit is to remove a character.
             Therefore, move ahead in larger string.
       (iv)  If length is same, then only possible edit
             is to  change a character. Therefore, move
             ahead in both strings. 
    b) Else, move ahead in both strings. 
 */

const properties = require("../properties");

// Returns true if edit distance
// between s1 and s2 is one, else false
// String arg1
// String arg2
// it's possible to put both strings into array and pass it as first argument
// Boolean caseless - false by default, check strings as is

function isEditDistance(arg1, arg2) {
  // Find lengths of given strings

  if (properties.comparison_threshold === "undefined") {
    console.log("Comparison threshold is not defined, defaults to 1");
    console.log(
      "Add comparison_threshold to properties.js file with a value > 1 to loose the string match condition"
    );
    properties.comparison_threshold = 1;
  }
  var m = 0,
    n = 0;
  var s1 = "",
    s2 = "";
  // check if strings were passed in array with 2 elems
  if (arg1 instanceof Array) {
    m = arg1[0].length;
    n = arg1[1].length;
    (s1 = arg1[0]), (s2 = arg1[1]);
  } else {
    (s1 = arg1), (s2 = arg2);
    (m = s1.length), (n = s2.length);
  }

  if (properties.tolowercase !== "undefined") {
    if (properties.tolowercase) {
      //true, require check strings with no case
      s1 = s1.toLocaleLowerCase();
      s2 = s2.toLocaleLowerCase();
    }
  }

  // If difference between lengths is
  // more than 1, then strings can't
  // be at one distance
  if (Math.abs(m - n) > properties.comparison_threshold) return false;

  var count = 0; // Count of edits

  var i = 0,
    j = 0;
  while (i < m && j < n) {
    // If current characters don't match
    if (s1.charAt(i) != s2.charAt(j)) {
      if (count == properties.comparison_threshold) return false;

      // If length of one string is
      // more, then only possible edit
      // is to remove a character
      if (m > n) i++;
      else if (m < n) j++;
      // Iflengths of both strings
      // is same
      else {
        i++;
        j++;
      }

      // Increment count of edits
      count++;
    } // If current characters match
    else {
      i++;
      j++;
    }
  }

  // If last character is extra
  // in any string
  if (i < m || j < n) count++;

  // compare against preconfigured threshold, if empty then compare against 1 operation
  return count <= properties.comparison_threshold;
}

module.exports = isEditDistance;
