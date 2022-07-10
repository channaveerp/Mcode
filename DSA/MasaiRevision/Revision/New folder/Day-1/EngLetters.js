/*Medium:
Given a string s containing only lowercase English letters and the '?' character, convert all the '?' characters into lowercase letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.

It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.

 

Example 1:
	Input: s = "?zs"
	Output: "azs"
	Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the string will consist of consecutive repeating characters in "zzs".
	
Example 2:
	Input: s = "ubv?w"
	Output: "ubvaw"
	Explanation: There are 24 solutions for this problem. Only "v" and "w" are invalid modifications as the strings will consist of consecutive repeating characters in "ubvvw" and "ubvww".
	
Example 3:
	Input: s = "j?qg??b"
	Output: "jaqgacb"
	
Example 4:
Input: s = "??yw?ipkj?"
Output: "acywaipkja"
 

Constraints:

1 <= s.length <= 100
s consist of lowercase English letters and '?'. */

let string = "j?qg??b";
function convertQueMarkToChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "?") {
      let asciiVal = 97;

      let Value_at_rigth = str.charCodeAt(i + 1);
      let Value_at_left = str.charCodeAt(i - 1);

      while (Value_at_left == asciiVal || Value_at_rigth == asciiVal) {
        asciiVal++;
      }

      str = str.slice(0, i) + String.fromCharCode(asciiVal) + str.slice(i + 1);
    }
  }
  return str;
}

//console.log(convertQueMarkToChar(string));

function convertQueMarkToChar1(str) {
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];

    if (temp != "?") {
      continue;
    }

    let leftCharCode = (arr[i - 1] || "").charCodeAt(0);
    let rigthCharCode = (arr[i + 1] || "").charCodeAt(0);

    let randomChar = 0;

    while (!randomChar) {
      randomChar = Math.floor(Math.random() * 26);

      randomChar += 97;

      if (randomChar == leftCharCode || randomChar == rigthCharCode) {
        rigthCharCode = 0;
        continue;
      }

      arr[i] = String.fromCharCode(randomChar);
      break;
    }
  }
  return arr.join("");
}

console.log(convertQueMarkToChar(string));
