//https://oj.masaischool.com/contest/1677/problem/08

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let row = +input[line++];
    let arr = [];
    for (let i = 0; i < row; i++) {
      arr.push(input[line++].trim().split(""));
    }
    //console.log(arr);
  }
}



if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    4
    *.*.
    .*.*
    *.*.
    .*.*
    3
    .*.
    *.*
    .*.
    3
    ..*
    **.
    ..*
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
