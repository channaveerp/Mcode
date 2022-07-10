//https://oj.masaischool.com/contest/1664/problem/3

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(N, arr);

    let i = 0;
    let j = 0;
    let max = 0;
    let set = new Set();

    while (j < N) {
      if (!set.has(arr[j])) {
        set.add(arr[j]);
        j++;
        max = Math.max(set.size, max);
      } else {
        set.delete(arr[i]);
        i++;
      }
    }

    console.log(max);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1
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
