//https://oj.masaischool.com/contest/1691/problem/3

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];
  for (let i = 0, line = 1; i < test; i++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let str = input[line++].trim();
    //console.log(N, str);
    subStrings(str);
  }
}

function subStrings(str) {
  for (let i = 0; i < str.length; i++) {
    let sbuStr = "";
    for (let j = i; j < str.length; j++) {
      sbuStr += str[j];
      console.log(sbuStr);
    }
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  1
  4 
  aman
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
  // split(/[\r\n]+/)
  input = input.trim().split(/[\r\n]+/);
  var test = +input[0].trim();
  var line = 1;
  for (var i = 0; i < test; i++) {
    var [row, column] = input[line++].trim().split(" ").map(Number);
    let firstObj = {};
    for (let j = 0; j < row; j++) {
      var arr = input[line++].trim().split(" ").map(Number);
      let secondObj = {};
      for (let k = 0; k < column; k++) {
        if (j == 0) {
          firstObj[arr[k]] = k;
        } else {
          secondObj[arr[k]] = k;
        }
      }
      if (j > 0) {
        for (key in firstObj) {
          if (secondObj[key] == undefined) {
            delete firstObj[key];
          }
        }
      }
    }
    console.log(Object.keys(firstObj).length);
  }
}
*/

/*
function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let line = 1;
  for (let i = 0; i < testCase; i++) {
    const [row, col] = input[line++].trim().split(" ").map(Number);
    const matrix = [];
    for (let j = 0; j < row; j++) {
      const arr = input[line++].trim().split(" ").map(Number);
      matrix.push(arr);
    }
    countDistinct(matrix, row, col);
  }
}

let countDistinct = (matrix, row, col) => {
  const set = new Set();
  let count = 0;
  for (let k = 0; k < col; k++) {
    set.add(matrix[0][k]);
  }
  const setVal = set.values();
  let i = 0;
  while (i < set.size) {
    const value = setVal.next().value; // to acces values one by one
    let rowCount = 0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (value == matrix[i][j]) {
          rowCount++;
          break;
        }
      }
      if (rowCount == row) {
        count++;
      }
    }
    i++;
  }
  console.log(count);


  const newVal = [...setvalue]
  let i = 0;
  while (i < newVal.length) {
    const value = setVal.next().value; or newVal[i] // to acces values one by one
    let rowCount = 0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (value == matrix[i][j]) {
          rowCount++;
          break;
        }
      }
      if (rowCount == row) {
        count++;
      }
    }
    i++;
  }
  console.log(count);
}
*/
