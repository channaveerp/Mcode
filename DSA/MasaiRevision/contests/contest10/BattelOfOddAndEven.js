//https://oj.masaischool.com/contest/1637/problem/1

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  //console.log(N, arr);

  let even_sum = 0;
  let odd_sum = 0;

  for (let i = 0; i < N; i++) {
    arr[i] % 2 == 0 ? (even_sum += arr[i]) : (odd_sum += arr[i]);
  }

  console.log(even_sum >= odd_sum ? "Even" : "Odd");
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    4
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
