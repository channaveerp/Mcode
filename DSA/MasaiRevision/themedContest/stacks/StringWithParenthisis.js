//https://oj.masaischool.com/contest/1529/problem/3

// Strings with Parenthesis
// Description

// Given a string containing three types of parenthesis : (), [], {}, write a program to check whether the string contains a valid sequence of parentheses.

function runProgram(input) {
  // TE = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let str = input[0].trim();

  console.log(isMatchingBrackets(str) ? "balanced" : "unbalanced");
}

let isMatchingBrackets = function (str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
      if (str[i] == ")" && stack[stack.length - 1] == "(") {
        stack.pop();
      } else if (str[i] == "}" && stack[stack.length - 1] == "{") {
        stack.pop();
      } else if (str[i] == "]" && stack[stack.length - 1] == "[") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }

  return true;
};

if (process.env.USERNAME === "dell") {
  runProgram(`
  {(([])[])[]]}
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
