// https://oj.masaischool.com/contest/1676/problem/5
function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  //   console.log(N, arr);
  console.log(oppQuckSort(arr).join(" "));
}

function oppQuckSort(arr) {
  if (arr.length == 0) return arr;

  let pivot = arr[0];
  let left = [];
  let rigth = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] > pivot ? left.push(arr[i]) : rigth.push(arr[i]);
  }

  return oppQuckSort(left).concat(pivot, oppQuckSort(rigth));
}
if (process.env.USERNAME === "dell") {
  runProgram(`
  5
  2 3 1 4 5
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
