// Check duplicate
// Description

// Given an array of integers, check if it contains duplicate element. If present then print YES else print NO.

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);

  let test = input[0];

  for (let x = 0, line = 1; x < test; x++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(N, arr);

    let obj = {};
    for (key of arr) {
      obj[key] ? obj[key]++ : (obj[key] = 1);
    }
    //console.log(obj);

    let flag = false;
    for (key in obj) {
      if (obj[key] > 1) flag = true;
    }
    console.log(flag ? "YES" : "NO");
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    1
    1
    2
    1 1
    3
    1 2 3
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
