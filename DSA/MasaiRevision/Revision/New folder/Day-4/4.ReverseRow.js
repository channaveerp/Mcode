//https://oj.masaischool.com/contest/1689/problem/4

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N] = input[0].trim().split(" ").map(Number);
  let arr = [];

  for (let x = 1; x <= N; x++) {
    arr.push(input[x].trim().split(" ").map(Number));
  }
  //console.log(N, arr);
  rowReverse(arr, N);
  //rotateBy90(arr, N);
  //rotateBy270(arr, N);
}
function rowReverse(arr, N) {
  for (let i = 0; i < arr.length; i++) {
    let ans = [];
    for (let j = N - 1; j >= 0; j--) {
      ans.push(arr[i][j]);
    }
    console.log(ans.join(" "));
  }
}

function rotateBy90(arr, N) {
  for (let i = 0; i < N; i++) {
    let ans = [];
    for (let j = 0; j < arr[i].length; j++) {
      ans.push(arr[j][i]);
    }
    console.log(ans.join(" "));
  }
}

function rotateBy270(arr, N) {
  for (let i = N - 1; i >= 0; i--) {
    let ans = [];
    for (let j = 0; j < arr[i].length; j++) {
      ans.push(arr[j][i]);
    }
    console.log(ans.join(" "));
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  4
  1 2 3 4
  1 2 3 4
  1 2 3 4
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
