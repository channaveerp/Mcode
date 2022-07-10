// Deletion Distance
// The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:

// By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
// We cannot get the same string from both strings by deleting 2 letters or fewer.
// Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.

// input:  str1 = "dog", str2 = "frog"
// output: 3

// input:  str1 = "some", str2 = "some"
// output: 0

// input:  str1 = "some", str2 = "thing"
// output: 9

// input:  str1 = "", str2 = ""
// output: 0

let str1 = "ab",
  str2 = "ba";
let count = 0;

for (let i = 0; i < str1.length; i++) {
  for (let j = i + 1; j < str2.length; j++) {
    if (str1[i] == str2[j]) {
      count++;
      // i++;
    }
  }
}

// for (let i = 0; i < str1.length; i++) {
//   if (str1[i] == str2[i]) {
//     count++;
//   }
// }
console.log(str1.length + str2.length - count * 2);
console.log(count);

/*
function deletionDistance(str1, str2):
    str1Len = str1.length
    str2Len = str2.length
    
    # allocate a 2D array with str1Len + 1 rows and str2Len + 1 columns
    memo = new Array(str1Len + 1, str2Len + 1)

    for i from 0 to str1Len:
        for j from 0 to str2Len:
            if (i == 0):
                memo[i][j] = j
            else if (j == 0):
                memo[i][j] = i
            else if (str1[i-1] == str2[j-1]):
                memo[i][j] = memo[i-1][j-1]
            else:
                memo[i][j] = 1 + min(memo[i-1][j], memo[i][j-1])

    return memo[str1Len][str2Len]
*/
