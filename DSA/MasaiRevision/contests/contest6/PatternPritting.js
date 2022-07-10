// Pattern Printing
// Description

// Given an integer n, print the half pyramid pattern using `*` according to the n where n is the number of rows for the half pyramid.

// For example -

// n=3

// *

// **

// ***

function runProgram(input) {
  // TC = O(n^2)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let num = +input[0];
  //console.log(num);

  let arr = [];

  let str;

  for (let i = 0; i < num; i++) {
    str = "";
    for (let j = 0; j < i + 1; j++) {
      str = str + "*";
    }
    arr.push(str);
  }

  arr.map((e) => {
    console.log(e);
  });
}

if (process.env.USERNAME === "dell") {
  runProgram(`
 2   
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
