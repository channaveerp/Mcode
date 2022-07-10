//https://oj.masaischool.com/contest/1529/problem/1
// Infix to Postfix
// Description

// You are given an infix expression, you need to convert it to a postfix expression.

// Infix expression is an expression that is in the form of (a operator b). eg. a + b, a * b.

// Postfix expression is an expression that is in the form of (a b operator). eg. a b +, a b *.

function runProgram(input) {
  // TE = O(1)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);

  let infix = input[0].trim();
  //console.log(infix);
}

function precidence(str){
  
}

// output ab+c-def-*g/+hij/*+
if (process.env.USERNAME === "dell") {
  runProgram(`
  a+b-c+d*(e-f)/g+(h*(i/j))
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
