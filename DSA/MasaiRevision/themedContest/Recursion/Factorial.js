// Factorial-Recursion
// Description

// The factorial of a positive integer N is the product of all positive integers less than or equal to n:

// Given a number N your task is to write a program that calculates factorial of N

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let num = +input[0];
  console.log(Factorial(num));
}
function Factorial(num) {
  if (num == 1) return 1;
  else {
    return num * Factorial(num - 1);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    5
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
