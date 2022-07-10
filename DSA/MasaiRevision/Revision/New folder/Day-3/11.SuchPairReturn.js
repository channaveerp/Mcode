//https://oj.masaischool.com/contest/1677/problem/11

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

    console.log(suchPairReturn(arr, N, K));
    //console.log(suchPairReturn1(arr, N, K));
  }
}

function suchPairReturn(arr, N, K) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = N - 1;

  while (i < j) {
    if (arr[i] + arr[j] == K) return 1;

    if (arr[i] + arr[j] > K) j--;

    if (arr[i] + arr[j] < K) i++;
  }
  return -1;
}

function suchPairReturn1(arr, N, K) {
  for (let i = 0; i < N; i++) {
    for (j = i + 1; j < N; j++) {
      if (arr[i] + arr[j] == K) {
        return 1;
      }
    }
  }
  return -1;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  1
  5 2
  3 4 0 2 7
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
