// Such Pair Returns
// Description

// For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);

  let test = input[0];

  for (let x = 0, line = 1; x < test; x++) {
    let [N, K] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(N, K, arr);

    arr.sort((a, b) => a - b);

    let i = 0;
    let j = N - 1;
    let flag = true;
    while (i < j) {
      if (arr[i] + arr[j] == K) {
        console.log(1);
        flag = false;
        break;
      }
      if (arr[i] + arr[j] < K) {
        i++;
      }
      if (arr[i] + arr[j] > K) {
        j--;
      }
    }
    if (flag) {
      console.log(-1);
    }
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  1
  5 2
  3 4 0 2 7
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
