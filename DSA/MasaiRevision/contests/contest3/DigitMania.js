// Description

// Given an array A with n positive integers and a single-digit k. Find the element with the maximum occurrence of the digit k.

// If the two elements have the same number of frequency of digit k, then the answer is the maximum of the two elements.

// If the digit k doesn't appear in any element, simply print -1.

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let test = +input[0];

  for (let x = 0, line = 1; x < test; x++) {
    let [N, K] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ");
    //console.log(N, K, arr);

    let count = 0;
    let ans = "";
    for (let i = 0; i < N; i++) {
      let count1 = 0;
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] == K) {
          count1++;
        }
      }

      if (count1 > count) {
        count = count1;
        ans = arr[i];
      }
      if (count1 == count) {
        ans = Math.max(+ans, +arr[i]);
      }
    }
    console.log(ans);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  2
  5 2
  222 2221 12221 2222 12
  5 2
  222 2221 12221 2212 12
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
