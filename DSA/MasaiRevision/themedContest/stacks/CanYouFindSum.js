// https://oj.masaischool.com/contest/1529/problem/5

/**Description

Teena is very good at competitive programming, she solved enough problems on arrays and her friend wants to test her knowledge in arrays, so gave her following task :

The problem is given an array A having N integers, for each element i (1 <= i <= N), find x+y  where x is the largest number less than i such that A[x]>A[i] and y is the smallest number greater than i such that A[y]>A[i].
If there is no x < i such that A[x]>A[i], then take x=−1. Similarly, if there is no y>i such that A[y]>A[i], then take y=−1.


Values of x for each i: -1,1,2,2,4

Values of y for each i: -1,-1,4,-1,-1
Input */

function runProgram(input) {
  // TE = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  //console.log(N, arr);

  let stack1 = [];
  let index1 = [];
  let ans1 = [-1, 1, 2, 2, 4];
  let stack2 = [];
  let index2 = [];
  let ans2 = [];

  for (let i = 0; i < N; i++) {
    if (stack1.length === 0) {
      ans1.push(-1);
    } else {
      if (stack1[stack1.length - 1] > arr[i]) {
        ans1.push(index1[index1.length - 1] + 1);
      } else {
        while (stack1.length !== 0 && stack1[stack1.length - 1] <= arr[i]) {
          stack1.pop();
          index1.pop();
        }
        if (stack1.length == 0) {
          ans1.push(-1);
        } else {
          ans1.push(index1[index1.length - 1] + 1);
        }
      }
    }
    stack1.push(arr[i]);
    index1.push(i);
  }

  for (let i = N - 1; i >= 0; i--) {
    if (stack2.length === 0) {
      ans2.push(-1);
    } else {
      if (stack2[stack2.length - 1] > arr[i]) {
        ans2.push(index2[index2.length - 1] + 1);
      } else {
        while (stack2.length !== 0 && stack2[stack2.length - 1] <= arr[i]) {
          stack2.pop();
          index2.pop();
        }
        if (stack2.length == 0) {
          ans2.push(-1);
        } else {
          ans2.push(index2[index2.length - 1] + 1);
        }
      }
    }
    stack2.push(arr[i]);
    index2.push(i);
  }
  ans2.reverse();
  let ans = [];

  for (let i = 0; i < N; i++) {
    ans.push(ans1[i] + ans2[i]);
  }

  console.log(ans.join(" "));
  // let ans = [-1];
  // for (let i = 1; i < N; i++) {
  //   if (arr[i] <= arr[i + 1]) {
  //     ans.push(i + 2);
  //   } else {
  //     ans.push(-1);
  //   }
  // }
  // console.log(ans);
}
if (process.env.USERNAME === "dell") {
  runProgram(`
    5
    5 4 1 3 2
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
