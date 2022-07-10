// Game of array!
// Description

// Pavan is very fond of numbers.He made an array of numbers of length N, and he wants to know the pattern after rotating it to the left by k times. He got confused in the middle since the array is very big can you help him to find the rotated array?

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  console.log(N, K, arr);
  for (let i = 0; i < K; i++) {
    RotateArray(arr);
  }

  console.log(arr.join(" "));
}

function RotateArray(arr) {
  const shift = arr.shift();
  arr.push(shift);
}
if (process.env.USERNAME === "dell") {
  runProgram(`
    6 4
    1 2 5 4 0 6
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

// function runProgram(input) {
//   // Write code here
//   input = input.trim().split("\n");
//   for (let i = 0; i < input.length; i++) {
//     input[i] = input[i].trim().split(" ").map(Number);
//   }
//   const [N, K] = input[0];
//   const arr = input[1];
//   for (let i = 0; i < K; i++) {
//     Rotate(arr);
//   }
//   function Rotate(arr) {
//     const shift = arr.shift();
//     arr.push(shift);
//   }
//   console.log(arr.join(" "));
// }
