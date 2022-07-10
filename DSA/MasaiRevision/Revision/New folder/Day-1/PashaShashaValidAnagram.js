//https://oj.masaischool.com/contest/1664/problem/5

function runProgram(input) {
  // TC = O(nlogn)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0] * 2;

  for (let z = 0, line = 1; z < test; z = z + 2) {
    let arr = input[line++].trim().split("");

    arr.sort();

    let ans1 = input[line++].trim().split("");

    ans1.sort();

    console.log(arr.join("") == ans1.join("") ? "True" : "False");
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  2
  abcd
  dcab
  aa
  aaa 
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
