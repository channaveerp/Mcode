//https://oj.masaischool.com/contest/1637/problem/2

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    let count = 0;
    //console.log(N, arr);

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (i != j && arr[j] == 2 * arr[i]) {
          count++;
        }
      }
    }
    console.log(count);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    2
    5
    1 1 1 1 1
    6
    1 1 2 2 4 1 
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
