// Sum of Subarray
// Description

// You are given an array of size N. You will given Q queries. Each query has L and R such that 0<=L<=R<=N-1. You need find sum from L to R for each Query.

function runProgram(input) {
  // TC = O(n^2)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  for (let x = 0; x < input.length; x++) {
    input[x] = input[x].trim().split(" ").map(Number);
  }
  //console.log(input);

  let N = +input[0];
  let arr = input[1];
  let test = +input[2];

  let sum = 0;
  let L;
  let R;
  for (let i = 0, line = 3; i < test; i++) {
    [L, R] = input[line++];
  }

  console.log(L);

  // sum = 0;
  // for (let j = L - 1; j < R; j++) {
  //   sum += arr[j];
  // }
  // console.log(sum);
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    4
    3 2 1 5
    4
    1 3
    2 4
    1 4
    3 3
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
