// Rotate the array - easy version
// Description

// You are given an array of n elements and an integer k, you need to rotate the array by k units towards right direction ( => ).

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [N, K] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);

    //console.log(N, K, arr);

    console.log(rotateArray(N, K, arr));
  }
}

function rotateArray(N, K, arr) {
  for (let i = 0; i < K; i++) {
    // first ro last or clockwise direction
    // let temp = arr.shift();
    // arr.push(temp);

    // last to first or anti-clockwise
    let temp = arr.pop();
    arr.unshift(temp);
  }

  return arr.join(" ");
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    3 1
    1 2 3
    2 2
    1 2
    2 3
    1 2
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
