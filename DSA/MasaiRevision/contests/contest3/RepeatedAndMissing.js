// Repeated and Missing
// Description

// Given an array of size n. Array elements are in the range from 1 to n. In the given array, one number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.

// Print the missing one first and then the repeated one with a space character in between them.

// Expected Auxillary Space Complexity - O(1)

// arr.Sort()
// n := arr.Length
// miss := 0, repeat := 0
// for i in 0 to n
//          if i = n-1, then
//                 break
//          if arr[i] = arr[i+1], then
//                 repeat := arr[i]
//          if (arr[i+1] - arr[i]) != 1
//                 miss := i+1

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);

  let test = input[0];

  for (let x = 0, line = 1; x < test; x++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(N, arr);

    let miss = 0;
    let repeat = 0;

    for (let i = 0; i < N; i++) {
      if (arr[i + 1] - arr[i] != 1) {
        miss = i + 1;
      }
      if (i == N - 1) {
        break;
      }
      if (arr[i] == arr[i + 1]) {
        repeat = arr[i];
      }
    }
    console.log(miss, repeat);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  3
  5
  1 2 3 3 4
  4
  1 1 3 4
  3
  1 2 2
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
