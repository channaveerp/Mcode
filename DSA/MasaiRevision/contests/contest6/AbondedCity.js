// Abandoned city
// Description

// You brought virtual reality glasses. There is only one game installed to it called “The Abandoned City”

// You are lost in an abandoned city. In order to escape you have to pay at least thetargetnumber of golden coins. So you decide to collect the gold in the houses of that city. The city contains N houses aligned in a straight line. Each house contains a number of gold coins.

// You need to find out the shortest distance you have to walk until you collect the needed amount of golden coins to get out.

// You can start from any house i and continue (i+1)th or (i-1)th house but you can’t change your direction and stop at any house.

// Notethat if it's not possible to collect at least the target number of gold coins then, in that case, you will ultimately lose the game and you must print -1.

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let test = +input[0];

  for (let i = 0, line = 1; i < test; i++) {
    let [N, K] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);

    console.log(N, K, arr);
  }
}
if (process.env.USERNAME === "dell") {
  runProgram(`
    2
    5 13
    5 1 2 3 4 
    1 10
    1  
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
