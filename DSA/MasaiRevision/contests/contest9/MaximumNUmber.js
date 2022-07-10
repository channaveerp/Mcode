// https://oj.masaischool.com/contest/1625/problem/4

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let arr = input[line++].trim().split("").map(Number);
    //console.log(arr);

    arr.sort((a, b) => b - a);

    let ans = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[i + 1]) {
        ans.push(arr[i]);
      }
    }

    console.log(ans.join(""));
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    2
    1230
    11230
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
