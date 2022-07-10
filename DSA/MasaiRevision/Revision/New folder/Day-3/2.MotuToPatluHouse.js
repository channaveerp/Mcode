//https://oj.masaischool.com/contest/1677/problem/02

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let num = +input[0];
  //console.log(num);
  console.log(num % 5 == 1 ? Math.floor(num / 5) + 1 : Math.ceil(num / 5));
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  26
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
