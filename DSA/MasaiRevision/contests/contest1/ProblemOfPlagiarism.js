// Problem of Plagiarism
// Description

// The University of Transylvania is conducting the coding fest for the Computer Programmers of the state. Again, because of his extraordinary managerial skills, Dracula is given the task to make arrangements for the competition.

// Dracula came to know that N people, are going to participate in the fest, and so he has the job of arranging them on N places for the fest. He gave an ID from 1 to N to each participant, and formulated a strategy to prevent plagiarism.

// He decided that all such permutations, in which the sum of IDs of participants, between two specific positions, L and R(L and R inclusive), are odd, need to be rejected. Find the total number of permutations, that will have to be rejected, according to Dracula’s strategy.

function runProgram(input) {
  // TE = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let N = +input[0];
  let [L, R] = input[1].trim().split(" ").map(Number);

  console.log(N, "\n", L, R);
}
if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    0 1
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
