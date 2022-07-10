function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let test = input[0];

  for (let x = 0, line = 1; x < test; x++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(N, arr);

    // let stack = [];
    // let ans = [];

    // for (let i = N - 1; i >= 0; i--) {
    //   while (stack.length != 0 && stack[stack.length - 1] <= arr[i]) {
    //     stack.pop();
    //   }
    //   if (stack.length == 0) ans[i] = -1;
    //   else {
    //     ans[i] = stack[stack.length - 1];
    //   }

    //   stack.push(arr[i]);
    // }
    // //console.log(ans);

    // let sum = 0;
    // ans.forEach((item, i) => {
    //   if (item % 2 == 1) {
    //     sum += arr[i];
    //   }
    // });
    // console.log(sum);

    for (let i = 0; i < N; i++) {
      var flag = true;
      for (let j = i + 1; j < N; j++) {
        if (arr[i] < arr[j]) {
          console.log(arr[j]);
          flag = false;
          break;
        }
        // else if(arr[i] >= arr[j]){
        //     j++
        // }
      }

      if (flag) {
        console.log(-1);
      }
    }
  }
}
// 3 5 8 -1 -1
if (process.env.USERNAME === "dell") {
  runProgram(`
      1
      6
      2 3 1 8 3 7
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
