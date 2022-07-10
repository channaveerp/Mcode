//https://oj.masaischool.com/contest/1529/problem/4

/**Detect Palindrome II
Description

You are given a string S. Find if the string, can be converted into a palindrome.

You are free to rearrange the string in any way you want. Rearrangement refers to the fact that the characters can be arranged in any way in the string.

Deletion or addition of characters is not allowed.
 */

function runProgram(input) {
  // TE = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let test = +input[0];

  for (let x = 0, line = 1; x < test; x++) {
    let N = +input[line++];
    let str = input[line++].trim();

    //console.log(N, str);

    let obj = {};
    for (key of str) {
      obj[key] == undefined ? (obj[key] = 1) : obj[key]++;
    }

    let count = 0;
    for (key in obj) {
      if (obj[key] % 2 == 1) {
        count++;
      }
    }
    console.log(count <= 1 ? "Possible!" : "Not Possible!");
  }
}
// acbbca try it;
if (process.env.USERNAME === "dell") {
  runProgram(`
    2
    6
    aabbcc
    5
    aabcd
    `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
