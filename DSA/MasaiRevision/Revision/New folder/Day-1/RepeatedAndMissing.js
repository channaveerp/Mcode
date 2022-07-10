//https://oj.masaischool.com/contest/1664/problem/2

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(N, arr);

    repeatedMissing(N, arr);
  }
}
function repeatedMissing1(N, arr) {
  arr.sort((a, b) => a - b);
  let repeated;
  let missing;

  for (let i = 0; i < N; i++) {
    if (arr[i] == arr[i + 1]) {
      repeated = arr[i];
    }
    //if (arr[i + 1] != arr[i] + 1 && arr[i + 1] != arr[i]) {
    if (arr[i + 1] != arr[i] + 1) {
      missing = arr[i] + 1;
    }
  }

  console.log(missing, repeated);
}


function missingRepeated(N, arr){
arr.sort((a,b)=> a-b)
let repeated = 0;
let n_sum = 0;

for (let i = 0; i < N; i++) {
  if (arr[i] == arr[i + 1]) {
    repeated = arr[i];
  }
  n_sum += arr[i];
}
let sum = (N * (N + 1)) / 2;

//console.log({ sum, n_sum, repeated });

let missing = sum - (n_sum - repeated);

console.log(missing, repeated);
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  3
  5
  1 2 3 3 4
  2
  1 1
  3
  1 2 2
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
