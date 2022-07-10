// Number mystery
// Description

// Inspector Rahul is solving a murder case, following the clues given by his secret network of agents he reaches a place where he finds a coffin onto which a number N is written along with a statement which says that the coffin can only be opened by the smallest multiple of N which contains only the digits 1s and 0s.

// Since Rahul is weak in Algorithms he assigns this task to you and your job is to find the smallest multiple of N which contains only zeros and ones and the first digit must be 1.

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let test = input[0];

  for (let x = 0, line = 1; x < test; x++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    console.log(N);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  1
  17
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
