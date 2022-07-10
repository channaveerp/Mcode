//https://oj.masaischool.com/contest/1563/problem/BS-1

function runProgram(input) {
  // TC = O(logn)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let N = +input[line++];

    // console.log(N);
    console.log(sqrOfInt(N));
  }
}

function sqrOfInt(N) {
  let low = 0;
  let high = N;
  let ans = 0;

  while (low <= high) {
    var mid;
    // if ((low + high) % 2 == 1) {
    //   mid = (low + high) / 2 - 0.5;
    // } else {
    //   mid = (low + high) / 2;
    // }
    mid = low + parseInt((high - low) / 2, 10);

    if (mid * mid == N) {
      ans = mid;
      break;
    }

    if (mid * mid < N) {
      low = mid + 1;
      ans = mid;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  10
  7
  4
  16
  5
  21
  3
  12
  4
  4
  10
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
