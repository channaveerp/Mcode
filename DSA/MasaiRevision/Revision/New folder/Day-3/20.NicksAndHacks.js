//https://oj.masaischool.com/contest/1677/problem/20

function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);

  let N = +input[0];
  for (let i = 0, line = 1; i < N; i++) {
    let [num] = input[line++].trim().split(" ").map(Number);
    // console.log(num);
    let K = 1;

    console.log(nicksAndHacks(num, K) ? "Yes" : "No");
  }
}

function nicksAndHacks(num, K) {
  if (num === K) return true;

  if (K > num) return false;

  return nicksAndHacks(num, K * 10) || nicksAndHacks(num, K * 20);
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    5
    1
    2
    10
    25
    200
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
