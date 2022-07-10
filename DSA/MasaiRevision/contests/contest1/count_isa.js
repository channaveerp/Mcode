// Count "isa"
// Description

// You are given a 2D matrix of size N x M which contains characters.

// You need to count all possible string "isa" horizontally (from left to right in rows) and vertically (from top tobottomin columns). See sample input/output.

function runProgram(input) {
  // TE = O(n)
  // SC = O(n)
  var input = input.trim().split("\n");
  var test = +input[0].trim();

  for (let t = 0, line = 1; t < test; t++) {
    var mat = [];
    let [n, m] = input[line++].trim().split(" ").map(Number);
    for (let i = 0; i < n; i++) {
      mat.push(input[line++].trim());
    }
    var count = 0;
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < m; j++) {
        if (j + 2 < m) {
          if (
            mat[i][j] == "i" &&
            mat[i][j + 1] == "s" &&
            mat[i][j + 2] == "a"
          ) {
            count++;
          }
        }
        if (i + 2 < n) {
          if (
            mat[i][j] == "i" &&
            mat[i + 1][j] == "s" &&
            mat[i + 2][j] == "a"
          ) {
            count++;
          }
        }
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "dell") {
  runProgram(`
    2
    3 3
    isa
    sia
    ais
    5 3
    isa
    sia
    ais
    ssa
    aai
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

function runProgram(input) {
  var inp = input.trim().split("\n");
  var test = +inp[0].trim();

  for (let t = 0, line = 1; t < test; t++) {
    var mat = [];
    let [n, m] = inp[line++].trim().split(" ").map(Number);
    for (let i = 0; i < n; i++) {
      mat.push(inp[line++].trim());
    }
    var count = 0;
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < m; j++) {
        if (j + 2 < m) {
          if (
            mat[i][j] == "i" &&
            mat[i][j + 1] == "s" &&
            mat[i][j + 2] == "a"
          ) {
            count++;
          }
        }
        if (i + 2 < n) {
          if (
            mat[i][j] == "i" &&
            mat[i + 1][j] == "s" &&
            mat[i + 2][j] == "a"
          ) {
            count++;
          }
        }
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "") {
  runProgram(`2
    3 3
    isa
    sia
    ais
    5 3
    isa
    sia
    ais
    ssa
    aai`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
