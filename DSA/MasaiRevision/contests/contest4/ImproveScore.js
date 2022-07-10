// Improve Score
// Description

// n  students are taking an exam. The highest possible score at this exam is m. Let ai be the score of the i-th student. Pavan has access to the school database which stores the results of all students.

// Pavan can change each student's score as long as the following conditions are satisfied:

// - All scores are integers

// - 0 ≤ ai ≤ m

// - The average score of the class doesn't change.

// Pavan is student 1 and he would like to maximize his own score.

// Find the highest possible score he can assign to himself such that all conditions are satisfied.

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  let test = input[0];
  for (let x = 0, line = 1; x < test; x++) {
    let [N, M] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);

    let sum = 0;
    for (let i = 0; i < N; i++) {
      sum += arr[i];
    }
    if (sum <= M) {
      console.log(sum);
    } else {
      console.log(M);
    }
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  2
  4 10
  1 2 3 4
  4 5
  1 2 3 4
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
