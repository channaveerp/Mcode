// Check Skewness
// Description

// Given an integer n, find out whether an integer is odd, even, or not skewed.

// An integer is oddly skewed if it has more number of odd divisors than even divisors and vice versa for evenly skewed.

// If the number of odd and even divisors are equal, then it is not skewed.

// Refer to the sample testcase for I/O.

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);

  let N = +input[0];

  for (let x = 0, line = 1; x < N; x++) {
    var int = +input[line++];

    let even = 0;
    let odd = 0;
    for (let i = 1; i <= int; i++) {
      if (i % 2 == 0 && int % i == 0) {
        even++;
      } else if (i % 2 == 1 && int % i == 0) {
        odd++;
      } else {
        continue;
      }
    }
    //console.log(even, odd);
    if (even > odd) {
      console.log("Even Skewed");
    } else if (odd > even) {
      console.log("Odd Skewed");
    } else {
      console.log("Not Skewed");
    }
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    4
    6
    11
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
