//https://oj.masaischool.com/contest/1676/problem/6

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [N, M] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(N, M, arr);
    console.log(subArrLessThanM(N, M, arr));
    //console.log(subArrLessThanM1(N, M, arr));
  }
}

function subArrLessThanM(N, M, arr) {
  let sum = arr[0];
  let i = 0;
  let j = 0;
  let count = 0;

  // 1 2 1 2 3
  // i=0, j =0
  // sum = 1 + 2
  // sum< M
  // i=0, j=1==> count = 1, sum=1+2,
  // i = 0, j =2 ==> count = 3, sum = 1 + 2 + 1;
  // i = 0, j =3 ==> count = 3+3, sum = 1 + 2 + 1 + 2;
  // else, i = 1, j =3 ==> count = 3+3, sum =  2 + 1 + 2;
  // else, i = 2, j =3 ==> count = 6 + 1 , sum =   1 + 2;

  //
  while (i < N && j < N) {
    if (sum < M) {
      j++;
      if (j >= i) {
        count += j - i; //
      }
      if (j < N) {
        sum += arr[j];
      }
    } else {
      sum -= arr[i];
      i++;
    }
  }
  return count;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    1
    5 5
    1 5 1 3 2
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
