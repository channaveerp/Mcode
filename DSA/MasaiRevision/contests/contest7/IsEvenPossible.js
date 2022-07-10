// Is Even Sum Possible?
// Description

// Given an array a which contains n integers in it. Find out if there exists a subset of the array such that the sum of its elements is even.

function runProgram(input) {
  // TC = O(n^2)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);

    //console.log(N, arr);
    let flag = false;

    for (let i = 0; i < N; i++) {
      let sum = 0;
      for (let j = i; j < N; j++) {
        sum += arr[j];

        if (sum % 2 == 0) {
          flag = true;
          break;
        }
      }
      if (flag) {
        break;
      }
    }

    console.log(flag ? "Yes" : "No");
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  2
  1
  5
  4
  1 2 3 4
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
