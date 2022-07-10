// Santosh & Profit
// Description

// Santosh is a milk man, and supplies milk to local shops. Due to lockdown, the demand for milk has increased substantially but due to surge in the prices of Petrol & Diesel, he has incurred some loss. Santosh is thinking of someway to maximize this profit. He is a smart man, and hence figures out, that  if he delivers  4 or 8 containers of milk, on each trip ,gives him the maximum return. Therefore, he decides that he will only carry 4 or 8 containers of milk for every delivery. To find the maximum profit that he can get with this arrangement, find the number of ways in which he can deliver N containers of milk, if for each visit he takes only 4 or 8 containers with him.

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let test = +input[0];
  for (let i = 0, line = 1; i < test; i++) {
    let num = +input[line++];
    //console.log(num);
    console.log(profit(num));
  }
}
function profit(num) {
  if (num < 0) return 0;

  if (num == 0) return 1;

  return profit(num - 4) + profit(num - 8);
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    1
    12
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
