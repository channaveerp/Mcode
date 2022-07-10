//https://oj.masaischool.com/contest/1689/problem/3

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [N, M] = input[line++].trim().split(" ").map(Number);

    let arr = [];

    for (let x = 0; x < N; x++) {
      arr.push(input[line++].trim().split(" ").map(Number));
    }
    //console.log(N, arr);
    console.log(countDistinct(arr, N, M));

    //console.log(countDistinct1(arr, N, M));
  }
}

function countDistinct1(arr, N, M) {
  let count = 0;
  let set = new Set();

  for (let i = 0; i < M; i++) {
    set.add(arr[0][i]);
  }

  let setVal = set.values();
  let newVal = [...setVal];
  //console.log(setVal);
  //console.log(newVal);
  let i = 0;

  while (i < newVal.length) {
    let value = newVal[i];
    let rowCount = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (value == arr[i][j]) {
          rowCount++;
          break;
        }
      }
      if (rowCount == N) count++;
    }
    i++;
  }
  return count;
}

let countDistinct = (matrix, row, col) => {
  let newArr = [];
  let count = 0;
  for (let i = 0; i < row; i++) {
    const set = new Set();
    for (let k = 0; k < col; k++) {
      set.add(matrix[i][k]);
    }
    const setVal = set.values();
    const arr = [...setVal];
    newArr = [...newArr, ...arr];
  }
  for (let i = 0; i < newArr.length; i++) {
    let rowCount = 1;
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] == newArr[j]) {
        rowCount++;
      }
    }
    if (rowCount == row) {
      count++;
    }
  }
  return count;
};

if (process.env.USERNAME === "dell") {
  runProgram(`
    2
    3 3
    1 2 1 
    1 3 1
    1 2 1
    3 3
    1 2 3
    1 1 3
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
