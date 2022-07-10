// Pair Fun!
// Description

// Given an array of integers, find all pairs (i,j) such that 4*a[i] = 5*a[j] and i != j

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let test = input[0];

  for (let x = 0, line = 1; x < test; x++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(N, arr);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    2
    6
    5 5 5 4 4 4
    3
    0 0 0
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
