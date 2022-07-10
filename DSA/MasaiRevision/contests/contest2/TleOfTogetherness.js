// Tile of Togetherness
// Description

// Harry and Ron are walking on a pathway which has numbers on it. The tiles are arranged such that, if a tile has a number X, then the next tile will have number Y on it, where Y = X + sum of digits of X. Harry starts at a tile, which has a greater value printed on it, then Ron.

// Both of them start walking along the pathway, with the number having the same rules. Find the point after which their paths will be together. If Ron surpasses Harry before they meet, print -1.

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let [N, M] = input[0].trim().split(" ").map(Number);
  console.log(N, M);
}
if (process.env.USERNAME === "dell") {
  runProgram(`
    32 47
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
