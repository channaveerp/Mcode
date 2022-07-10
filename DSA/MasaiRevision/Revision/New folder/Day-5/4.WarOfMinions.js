//https://oj.masaischool.com/contest/1691/problem/4

function runProgram(input) {
  // TC = O(logn)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split("");
  //console.log(arr, N);

  console.log(warOfMinions(arr));
}

function warOfMinions(arr) {
  let stack = [arr[0]];
  let ans;

  for (let i = 1; i < arr.length; i++) {
    if (stack.length != 0 && stack[stack.length - 1] == arr[i]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  if (stack.length == 0) {
    ans = -1;
  } else {
    ans = stack.join("");
  }
  return ans;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  5
  aabbc
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
