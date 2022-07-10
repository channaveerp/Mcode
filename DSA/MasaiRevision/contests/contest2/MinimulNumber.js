// Minimal Number
// Description

// Given an array A of size n, we need the create a positive integer using all the elements from the array such that it is the least possible value and it doesn't have any leading zeroes as well.

// It is ensured that at least one non-zero element exists in the array so that one number can be formed without violating the rules of leading zeroes.

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let test = +input[0];

  for (let x = 0, line = 1; x < test; x++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(N, arr);

    let num = arr.sort((a, b) => a - b);

    if (num[0] == 0) {
      for (let i = 0; i < num.length; i++) {
        if (arr[i] > 0) {
          num[0] = arr[i];
          arr[i] = 0;
          break;
        }
      }
    }
    console.log(num.join(""));
  }
}
if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    4
    2 1 0 0
    4
    1 4 2 3
    4
    5 2 3 2
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
