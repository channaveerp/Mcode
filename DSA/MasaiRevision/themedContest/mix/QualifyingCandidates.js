// Qualifying Candidates
// Description

// Recently Masai School organized a contest for admissions and thousand of candidates appeared for it. You are responsible for declaring the results out. Given an array, A of size n which contains the score of the n candidates who appeared for the test. You are also provided with a cutoff rank from Masai School up to which they would be taking candidates in their courses. Find the number of students who will be selected from this contest.

// Note that candidates with equal scores will have equal ranks, but the candidate with the next lowest score will be ranked based on the position within the list of all candidates' scores.

// For example, if there are five candidates, and four candidates tie for first place, their ranks would be 1,1,1,1 and 5.

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let test = input[0];

  for (let x = 0, line = 1; x < test; x++) {
    let [N, K] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(N, K, arr);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    1
    5 3
    2 2 2 2 1
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
