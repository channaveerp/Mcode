// Opp Quick Sort
// Description

// Given a list of n integers. Write a program for quick sort algorithm such that it reverses the list in descending order.  You must not write any other sorting algorithm

function runProgram(input) {
  // TC = O(nlogn)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  //console.log(N, arr);
  let ans = oppQuickSort(arr);
  console.log(ans.join(" "));
}

function oppQuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[0];

  var left = [];
  var rigth = [];

  for (var i = 1; i < arr.length; i++) {
    arr[i] > pivot ? left.push(arr[i]) : rigth.push(arr[i]);
  }

  return oppQuickSort(left).concat(pivot, oppQuickSort(rigth));
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    5
    2 3 1 4 5    
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
