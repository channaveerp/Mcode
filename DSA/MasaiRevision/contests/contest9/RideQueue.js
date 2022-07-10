//https://oj.masaischool.com/contest/1625/problem/2

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(N, arr);

    console.log(RideQueue(arr));
  }
}

function RideQueue(arr) {
  var i = 0;
  var N = arr.length;
  var count = 0;
  while (i < N) {
    if (arr[i] < arr[i + 1]) {
      i++;
    } else {
      count += 1;
      i++;
    }
  }
  return count;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  1
  8
  1 3 2 4 4 5 3 6
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
