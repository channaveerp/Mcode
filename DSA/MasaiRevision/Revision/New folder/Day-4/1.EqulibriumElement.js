//https://oj.masaischool.com/contest/1689/problem/1

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  //console.log(N, arr);

  console.log(equilibriumElement(arr));
}

function equilibriumElement(arr) {
  let mid = Math.floor(arr.length / 2);

  return sum(arr, 0, mid) == sum(arr, mid + 1, arr.length) ? mid + 1 : -1;
}

function sum(arr, start, end) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += arr[i];
  }
  return sum;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    5
    3 3 5 5 1
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
