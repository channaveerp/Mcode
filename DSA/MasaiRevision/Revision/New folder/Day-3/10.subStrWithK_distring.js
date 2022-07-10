//https://oj.masaischool.com/contest/1677/problem/10

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  let [N, K] = input[0].trim().split(" ").map(Number);
  let str = input[1].trim();
  //console.log(str, N, K);
  //console.log(vowelPriority(str));
  console.log(distringSubStr1(str, N, K));
}

// function distringSubStr(str, N, K) {
//   let i = 0;
//   let j = i + K - 1;
//   let count = 0;

//   for(let i = 0; i < N - K + 1; i++){
//       if()
//   }
// }

function distringSubStr1(str, N, K) {
  let obj = {};
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i; j < i + K - 1; j++) {
      var subStr = str.slice(i, j);

      if (!obj[subStr]) {
        obj[subStr] = 1;
        count++;
      }
    }
  }
  console.log(obj);
  return count;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  4 2
  abcc
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
