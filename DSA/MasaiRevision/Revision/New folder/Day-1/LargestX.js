//https://oj.masaischool.com/contest/1664/problem/1

function runProgram(input) {
  // TC = O(nlogn)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(N, arr);

    console.log(findLargestX(N, arr));
  }
}

function findLargestX(N, arr) {
  let i = 0;
  let j = N - 1;
  arr.sort((a, b) => a - b);

  while (i <= j) {
    if (arr[i] + arr[j] == 0) {
      return Math.abs(arr[i]);
    }
    if (arr[i] + arr[j] < 0) {
      i++;
    } else if (arr[i] + arr[j] > 0) {
      j--;
    }
  }
  if (arr[i] + arr[j] !== 0) {
    return -1;
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
      2
      5
      2 1 -1 -2 3
      5
      -3 2 -4 4 -2 
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
