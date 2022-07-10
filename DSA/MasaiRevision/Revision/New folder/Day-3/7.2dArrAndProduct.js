//https://oj.masaischool.com/contest/1677/problem/07

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [row, col, target] = input[0].trim().split(" ").map(Number);
  let arr = [];
  for (let i = 1; i <= row; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
  }
  //console.log(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // check row wise
      if (j + 2 < row) {
        if (arr[i][j] * arr[i][j + 1] * arr[i][j + 2] == target) count++;
      }

      //check col wise
      if (i + 2 < col) {
        if (arr[i][j] * arr[i + 1][j] * arr[i + 2][j] == target) count++;
      }

      //check digonal top to bottom wise
      if (i + 2 < col && j + 2 < row) {
        if (arr[i][j] * arr[i + 1][j + 1] * arr[i + 2][j + 2] == target)
          count++;
      }

      //check digonal bottom to top wise
      if (i >= 2 && j + 2 < row) {
        if (arr[i][j] * arr[i - 1][j + 1] * arr[i - 2][j + 2] == target)
          count++;
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  5 5 30
  3 2 5 3 2
  5 2 5 5 3
  2 2 2 4 5
  3 3 4 7 3
  5 2 5 3 2
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
