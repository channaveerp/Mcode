// Quickly Sort it
// Description

// You are given an array of N integers. Write QUICK SORT ALGORITHM to sort the numbers in ascending order

// DO NOT USE ANY BUILTIN FUNCTION TO SORT

// ALSO, YOU MUST NOT USE ANY OTHER ALGORITHM

function runProgram(input) {
  // TC = O(nlogn)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  //console.log(N, arr);
  let ans = quickSort(arr);
  console.log(ans.join(" "));
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[0];

  var left = [];
  var rigth = [];

  for (var i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : rigth.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(rigth));
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    5
    3 5 0 9 8    
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
