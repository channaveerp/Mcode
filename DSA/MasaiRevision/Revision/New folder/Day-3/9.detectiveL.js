//https://oj.masaischool.com/contest/1677/problem/09

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [row, col] = input[line++].trim().split(" ").map(Number);
    let arr = [];
    for (let i = 1; i <= row; i++) {
      arr.push(input[line++].trim().split(" ").map(Number));
    }
    //console.log(arr);

    let left = 0;
    let rigth = col - 1;
    let top = 0;
    let bottom = row - 1;

    let ans = [];
    let count = 0;
    while (left <= rigth && top <= bottom) {
      for (let i = top; i <= bottom && count < row * col; i++) {
        ans.push(arr[i][left]);
        count++;
      }
      left++;

      for (let i = left; i <= rigth && count < row * col; i++) {
        ans.push(arr[bottom][i]);
        count++;
      }
      bottom--;

      //   for (let i = bottom; i >= top && count < row * col; i--) {
      //     ans.push(arr[i][rigth]);
      //     count++;
      //   }
      //   rigth--;
      //   for (let i = rigth; i >= left && count < row * col; i--) {
      //     ans.push(arr[top][i]);
      //     count++;
      //   }
      //   top++;
    }
    console.log(ans.join(" "));
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  2
  3 3
  1 2 3
  4 5 6
  7 8 9
  4 3
  1 2 3
  4 5 6
  7 8 9
  10 11 12
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
