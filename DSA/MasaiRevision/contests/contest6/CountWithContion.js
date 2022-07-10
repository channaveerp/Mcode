// Count With Condition
// Description

// Given an array of length N and an integer X, the task is to find the number of subsets with a sum equal to X.

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N, X] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  //console.log(N, X, arr);


  console.log(CountWithCondition(arr, N, X));
}

function CountWithCondition(arr, N, X) {
  if (X == 0) return 1;
  if (N == 0) return 0;
  if (arr[N - 1] > X) return CountWithCondition(arr, N - 1, X);
  else
    return (
      CountWithCondition(arr, N - 1, X) +
      CountWithCondition(arr, N - 1, X - arr[N - 1])
    );
}

function checkSum(arr, len, sum) {
    if (sum == 0) {
      return 1;
    }
    if (len == 0) {
      return 0;
    }
    if (arr[len - 1] > sum) {
      return checkSum(arr, len - 1, sum);
    }
    return (
      checkSum(arr, len - 1, sum) + checkSum(arr, len - 1, sum - arr[len - 1])
    );
  }

if (process.env.USERNAME === "dell") {
  runProgram(`
  5 10
  1 2 3 4 5
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
