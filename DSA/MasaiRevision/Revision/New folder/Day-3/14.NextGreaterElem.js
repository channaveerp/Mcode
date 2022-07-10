//https://oj.masaischool.com/contest/1677/problem/14

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(N, arr);

    console.log(nextGreaterElement(arr, N));
  }
}

function nextGreaterElement(arr, N) {
  let stack = [];
  let ans = [];

  for (let i = N - 1; i >= 0; i--) {
    while (stack.length != 0 && stack[stack.length - 1] <= arr[i]) {
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

function nextGraterElem1(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let next = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        next = arr[j];
        break;
      }
    }
    ans.push(next);
  }
  return ans.join(" ");
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  1
  4
  1 3 2 4
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
