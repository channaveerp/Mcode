// Balanced Subarray
// Description

// Given a binary array A of size n, find the maximum length of a contiguous subarray with equal number of 0 and 1.

function runProgram(input) {
  // TC = O(n^2)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let test = +input[0];
  for (let x = 0, line = 1; x < test; x++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);

    console.log(BalancedSubArr(arr, N));
  }
}

function BalancedSubArr(arr, N) {
  let counts = { 0: -1 };
  let count = 0;
  let max = 0;

  for (let i = 0; i < N; i++) {
    let val = arr[i] === 1 ? 1 : -1;
    count += val;

    if (counts[count]) {
      max = Math.max(max, i - counts[count]);
    } else {
      counts[count] = i;
    }
  }
  return max;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  1
  5
  1 0 0 1 0
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

/**function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim().split(" "));
  let row = 1;
  for (let j = 1; j <= testCase; j++) {
    let len = +input[row++].trim();
    let arr = input[row++].trim().split(" ").map(Number);
    console.log(count0and1(arr));
  }
}

function count0and1(arr) {
  let counts = { 0: -1 };
  let count = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i] === 1 ? 1 : -1;
    count += val;
    if (counts.hasOwnProperty(count)) {
      max = Math.max(max, i - counts[count]);
    } else {
      counts[count] = i;
    }
  }
  return max;
}

*/

/*
 
function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim().split(" "));
  let row = 1;
  for (let j = 1; j <= testCase; j++) {
    let len = +input[row++].trim();
    let arr = input[row++].trim().split(" ").map(Number);
    console.log(count0and1(arr));
  }
}

function count0and1(arr) {
  let counts = { 0: -1 };
  let count = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i] === 1 ? 1 : -1;
    count += val;
    if (counts.hasOwnProperty(count)) {
      max = Math.max(max, i - counts[count]);
    } else {
      counts[count] = i;
    }
  }
  return max;
}
 */
