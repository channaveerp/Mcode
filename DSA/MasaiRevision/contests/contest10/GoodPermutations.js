//https://oj.masaischool.com/contest/1637/problem/3

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let N = +input[0];
  //console.log(N);

  let count = 0;
  let arr = [];

  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }
  function GoodPermutations(ind) {
    if (ind == arr.length) count++;

    for (let i = ind; i < arr.length; i++) {
      swap(arr, i, ind);

      if ((ind + 1) % arr[ind] === 0 || arr[ind] % (ind + 1) == 0)
        GoodPermutations(ind + 1);

      swap(arr, i, ind);
    }
  }

  GoodPermutations(0);

  console.log(count);
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    3
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
