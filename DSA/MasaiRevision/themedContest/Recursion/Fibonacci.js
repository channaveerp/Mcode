// Fibonacci-Recursion
// Description

// In mathematics, the Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is

// F (0) = 0 , F (1) = 1

// and

// F (n) = F (n − 1) + F (n − 2) ,

// for n > 1.

// Your task is to write a program that calculates n-th fibonacci numbers when you are provided with n

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let num = +input[0];
  console.log(Fibonacci(num));
}
function Fibonacci(num) {
  if (num == 0) return 0;
  else if (num == 1) return 1;
  else {
    return Fibonacci(num - 1) + Fibonacci(num - 2);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
4
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
