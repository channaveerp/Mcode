//https://oj.masaischool.com/contest/1607/problem/1

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  let ans = "";

  for (let i = 0; i < N; i++) {
    if (arr[i] != arr[i + 1]) {
      ans += arr[i] + " ";
    }
  }

  console.log(ans);
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  5
  2 2 2 7 9
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

