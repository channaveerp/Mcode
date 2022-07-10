//https://oj.masaischool.com/contest/1664/problem/6

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let [row, col] = input[0].trim().split(" ").map(Number);
  let arr = [];
  for (let z = 1; z <= row; z++) {
    let temp = input[z].trim().split("");
    arr.push(temp);
  }
  //console.log(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j]);
      // row wise checking
      if (i + 3 < row) {
        if (
          arr[i][j] == "s" &&
          arr[i + 1][j] == "a" &&
          arr[i + 2][j] == "b" &&
          arr[i + 3][j] == "a"
        ) {
          count++;
        }
      }
      //col wise check
      if (j + 3 < col) {
        if (
          arr[i][j] == "s" &&
          arr[i][j + 1] == "a" &&
          arr[i][j + 2] == "b" &&
          arr[i][j + 3] == "a"
        ) {
          count++;
        }
      }
      // digonal left to right and top to bottom
      if (i + 3 < row && j + 3 < col) {
        if (
          arr[i][j] == "s" &&
          arr[i + 1][j + 1] == "a" &&
          arr[i + 2][j + 2] == "b" &&
          arr[i + 3][j + 3] == "a"
        ) {
          count++;
        }
      }
      // digonal left to right and bottom to top
      // i = 3, 2, 1, 0
      if (i > 2 && j + 3 < col) {
        if (
          arr[i][j] == "s" &&
          arr[i - 1][j + 1] == "a" &&
          arr[i - 2][j + 2] == "b" &&
          arr[i - 3][j + 3] == "a"
        ) {
          count++;
        }
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  5 5
  safer
  amjad
  babol
  aaron
  songs
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

/*

function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  //console.log(input);
  let [row, col] = input[0].trim().split(" ").map(Number);
  // console.log(row, col);
  let arr = [];
  for (let i = 1; i < input.length; i++) {
    let A = input[i].trim().split("");
    arr.push(A);
  }
  //console.log(arr);
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j]);
      if (j < col - 3) {
        if (
          arr[i][j] === "s" &&
          arr[i][j + 1] === "a" &&
          arr[i][j + 2] === "b" &&
          arr[i][j + 3] === "a"
        ) {
          count++;
        }
      }
      if (i < row - 3) {
        if (
          arr[i][j] === "s" &&
          arr[i + 1][j] === "a" &&
          arr[i + 2][j] === "b" &&
          arr[i + 3][j] === "a"
        ) {
          count++;
        }
      }
      if (i < row - 3 && j < col - 3) {
        if (
          arr[i][j] === "s" &&
          arr[i + 1][j + 1] === "a" &&
          arr[i + 2][j + 2] === "b" &&
          arr[i + 3][j + 3] === "a"
        ) {
          count++;
        }
      }
      if (i > 2 && j < col - 3) {
        if (
          arr[i][j] === "s" &&
          arr[i - 1][j + 1] === "a" &&
          arr[i - 2][j + 2] === "b" &&
          arr[i - 3][j + 3] === "a"
        ) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "dell") {
  runProgram(`
        5 5
        sabar
        amjad
        babol
        aaron
        songs
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
*/
