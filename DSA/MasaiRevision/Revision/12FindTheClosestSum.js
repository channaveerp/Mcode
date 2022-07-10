// https://oj.masaischool.com/contest/1563/problem/D1-2

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

    console.log(closeSum2(arr, N, K));
  }
}

function closeSum2(arr, N, K) {
  let temp = 99999;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        let min = Math.abs(K - (arr[i] + arr[j] + arr[k]));
        if (Math.abs(K - temp) > min) temp = arr[i] + arr[j] + arr[k];
      }
    }
  }

  return temp;
}

/*
// two pointer opproch;
function closeSum1(N, arr) {
  let i = 0;
  let j = N - 1;
  cur_Sum = arr[i] + arr[j];

  while (i < j) {
    if(arr[i] + arr[j] < cur_Sum){
        cur_Sum = arr[i] + arr[j]
    }else if()
  }
}
*/

if (process.env.USERNAME === "dell") {
  runProgram(`
  2
  4 1
  -1 2 1 -4
  60 1957
927 588 220 -120 -781 660 240 -182 -422 -749 382 -863 979 -873 -210 218 -49 975 -91 249 -682 434 -489 -176 893 642 556 -355 -520 -974 970 -134 -776 133 -658 -564 -348 -251 377 545 -880 428 398 -278 158 -73 445 158 -643 -382 -392 471 660 164 952 -124 495 621 -445 -897
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
