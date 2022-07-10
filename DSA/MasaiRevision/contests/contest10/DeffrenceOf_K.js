//https://oj.masaischool.com/contest/1637/problem/4

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [N, K] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(N, K, arr);

    arr.sort((a, b) => a - b);

    let i = 0;
    let j = 1;
    let flag = true;

    while (i < N && j < N) {
      if (arr[j] - arr[i] === K) {
        console.log("Yes");
        flag = false;
        break;
      } else if (arr[j] - arr[i] > K) {
        i++;
      } else if (arr[j] - arr[i] < K) {
        j++;
      }
    }
    if (flag) {
      console.log("No");
    }
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 
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
