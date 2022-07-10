// Distinct Again
// Description

// You are given an array of N elements. Your task is to write a program that calculates the sum of all distinct elements present in the array.

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  //console.log(N, arr);

  let sum = 0;

  for (let i = 0; i < N; i++) {
    if (arr[i] != arr[i + 1]) {
      sum += arr[i];
    }
  }

  console.log(sum);
}
if (process.env.USERNAME === "dell") {
  runProgram(`
    5
    2 2 2 1 1
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
