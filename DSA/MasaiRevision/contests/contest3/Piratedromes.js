// Piratedromes
// Description

// Captain Jack sparrow, the notorious pirate being inspired by mathematical logic and different varieties of special pattern numbers build his own special numbers called “Piratedromes”. A Piratedrome is defined as the N digit number which has an equal sum of digits at odd and even indices. Jack also needs an algorithm that can print all the N digit Piratedromes for a given N. Since he is a beginner in mathematics and algorithms you have to perform this task for him.

// Hence, you are given a number N, and you are supposed to print all N digit Piratedromes in increasing order of their value.

function runProgram(input) {

  input = input.trim().split(/[\n\r]+/);

  let N = +input[0];
  console.log(Piratedrome("", N, 0, []).join(" "));
}

function Piratedrome(result, n, diff, ans) {
  if (n) {
    let change = "0";
    if (result == "") {
      change = "1";
    }
    while (change <= "9") {
      let absDiff;
      if ((n & 1) != 0) {
        absDiff = diff + (change - "0");
      } else {
        absDiff = diff - (change - "0");
      }
      Piratedrome(result + change, n - 1, absDiff, ans);
      change++;
    }
  } else if (n == 0 && Math.abs(diff) == 0) {
    ans.push(result);
  }
  return ans;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
2
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
