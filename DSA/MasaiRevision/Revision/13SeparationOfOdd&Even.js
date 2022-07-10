// https://oj.masaischool.com/contest/1563/problem/D1-3

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    let Q = +input[line++];

    //console.log(N, arr, Q);

    console.log(seperationOddEven(N, arr, Q));
  }
}
//
function seperationOddEven(N, arr, Q) {
  let ans1 = "";
  let ans2 = "";

  arr.sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    arr[i] % 2 == 0 ? (ans1 += arr[i] + " ") : (ans2 += arr[i] + " ");
  }

  if (Q == 1) {
    return ans1 + ans2;
  } else {
    return ans2 + ans1;
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  2
  6
  1 3 5 2 7 4
  1
  6 
  1 3 5 2 7 4
  2
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
