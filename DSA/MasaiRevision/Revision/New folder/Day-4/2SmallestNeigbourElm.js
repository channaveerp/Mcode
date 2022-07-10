//https://oj.masaischool.com/contest/1689/problem/2

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  //console.log(N, arr);
  console.log(SmallestNeibourElement1(arr));
}

function SmallestNeibourElement(arr) {
  let stack = [];
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length != 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans[i] = -1;
    } else {
      ans[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return ans.join(" ");
}
//-1 -1 -1 -1 4 24 24 -1
function SmallestNeibourElement1(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let prev = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && i > j) {
        prev = arr[j];
        break;
      }
    }
    ans.push(prev);
  }
  return ans.join(" ");
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  8
  39 27 11 4 24 32 32 1
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
