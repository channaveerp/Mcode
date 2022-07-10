//https://oj.masaischool.com/contest/1625/problem/3

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [N, M] = input[line++].trim().split(" ").map(Number);
    let arr = [];

    for (let x = 0; x < N; x++) {
      arr.push(input[line++].trim().split(""));
    }
    console.log(arr);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    4
    3 3
    RRD
    DDR
    RRC
    1 4
    DDDC
    6 9
    RDDDDDRRR
    RRDDRRDDD
    RRDRDRRDR
    DDDDRDDRR
    DRRDRDDDR
    DDRDRRDDC
    1 1
    C
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
