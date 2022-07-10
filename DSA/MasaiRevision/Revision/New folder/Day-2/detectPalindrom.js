//https://oj.masaischool.com/contest/1676/problem/1

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim();
    //console.log(N, arr);
    detectPalindrom(arr);
    //console.log(detectPalindrom1(arr));
  }
}

function detectPalindrom(arr) {
  let obj = {};
  let count = 0;

  for (key of arr) {
    obj[key] ? obj[key]++ : (obj[key] = 1);
  }

  for (key in obj) {
    if (obj[key] % 2 == 1) count++;
  }

  console.log(count <= 1 ? "Possible!" : "Not Possible!");
}
/*
// just for practice
function detectPalindrom1(arr) {
  let L = arr.length / 2;

  for (let i = 0; i < L; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) return false;
  }

  return true;
}
*/

if (process.env.USERNAME === "dell") {
  runProgram(`
  3
  6
  aabbcc
  5
  aabcd
  9
efibeejhh
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
