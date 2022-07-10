// Birthday Shopping
// Description

// Alex is celebrating his birthday and wants to buy a few things for himself.

// There are n items present in the shop indexed from 1 to n. He wished he could buy everything but he has been instructed by his mother that he can buy exactly k items.

// Print all the various possible combinations of items he can buy.

// Make sure the combinations are sorted and distinct.

// For Clarity -

// [1,2] is valid while [2,1] is not.

function runProgram(input) {
  //   // TC = O(n^2)
  //   // SC = O(1)
  //   input = input.trim().split(/[\n\r]+/);
  //   //console.log(input);

  //   let [N, K] = input[0].trim().split(" ").map(Number);

  //   if (K == 1) {
  //     for (let i = 1; i <= N; i++) {
  //       console.log(i);
  //     }
  //   } else if (K == 2) {
  //     for (let i = 1; i <= N; i++) {
  //       for (let j = i + 1; j <= N; j++) {
  //         console.log(i, j);
  //       }
  //     }
  //   } else {
  //     console.log(N);
  //   }
  //   console.log(sum(20, 5));

  console.log(name);
  var name = "masai";
}

let sum = (x, y) => {
  x = x && 5;
  y = y || 5;
  return x + y;
};

if (process.env.USERNAME === "dell") {
  runProgram(`
    4 2
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
