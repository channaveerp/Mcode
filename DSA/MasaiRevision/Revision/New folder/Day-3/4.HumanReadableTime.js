//https://oj.masaischool.com/contest/1677/problem/04

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let min = +input[0];

  //console.log(min);
  readableTime(min);
}

const readableTime = (num) => {
  let hours = Math.floor(num / 60);
  let mins = num % 60;
  let hr;

  hours > 1 ? (hr = "hrs") : (hr = "hr");
  console.log(`${hours}${hr} ${mins}mins`);
};

if (process.env.USERNAME === "dell") {
  runProgram(`
  135
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
