// Merge Sorting
// Description

// You are given N numbers. Your task is to write MERGE SORT sorting algorithm (from scratch) to sort those N numbers.

// USING ANY OTHER ALGORITHM OR IN BUILT FUNCTION WOULD LEAD TO DISQUALIFICATION FROM NEXT HACKERRANK CONTEST

function runProgram(input) {
  // TC = O(n^2)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  //console.log(N, arr);
  let ans = mergeSort(arr);
  console.log(ans.join(" "));
}

function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift());
  }

  return [...arr, ...left, ...right];
}

function mergeSort(arr) {
  let half = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  }

  let left = arr.splice(0, half);

  return merge(mergeSort(left), mergeSort(arr));
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
