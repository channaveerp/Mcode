//https://quizglobal.com/playquiz/Frontend%20Developer

/*
Easy:
Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

Example 1:
	Input: s = "abacbc"
	Output: true
	Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

Example 2:
	Input: s = "aaabb"
	Output: false
	Explanation: The characters that appear in s are 'a' and 'b'.
	'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
 

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.
*/

let string = "ababcc";

function checkGoodString(str) {
  let obj = {};

  for (key of str) {
    obj[key] ? obj[key]++ : (obj[key] = 1);
  }

  let keyValue = obj[key];
  let flag = false;
  for (key in obj) {
    if (obj[key] == keyValue) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }
  return flag;
}

console.log(checkGoodString(string));
