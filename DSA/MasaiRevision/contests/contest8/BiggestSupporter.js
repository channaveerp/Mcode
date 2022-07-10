//https://oj.masaischool.com/contest/1607/problem/3

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let N = +input[line++];

    //console.log(N);

    while (N > 0) {
      if (N % 2 == 1) {
        console.log(N);
        break;
      }
      N = N / 2;
    }
  }
}

//22902063685
if (process.env.USERNAME === "dell") {
  runProgram(`
  2
 21
  4
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
