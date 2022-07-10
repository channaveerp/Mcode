//https://oj.masaischool.com/contest/1689/problem/5

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
    //console.log(medicineOfLife(arr, N, K));
    console.log(medicineOfLife1(arr, N, K));
  }
}

function medicineOfLife(arr, N, K) {
  let i = 0;
  let j = N - 1;

  while (i < j) {
    if (arr[i] + arr[j] == K) return "Possible";

    if (arr[i] + arr[j] > K) j--;

    if (arr[i] + arr[j] < K) i++;
  }
  return "Impossible";
}

function medicineOfLife1(arr, N, K) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i] + arr[j] == K) {
        return "Possible";
      }
    }
  }
  return "Impossible";
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  2
  5 7
  1 2 3 4 5
  5 12
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
