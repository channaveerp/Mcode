// Search in sorted and rotated array
// Description

// Given a sorted(increasing order) array of length n and is rotated by some value beforehand. Find the index of the target element  K in the rotated array in O(logn) time. If not found print -1.

// Note: Array contains all distinct elements.

//https://oj.masaischool.com/contest/1563/problem/BS-2
function runProgram(input) {
  // TC = O(logn)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  //console.log(N, K, arr);

  console.log(searchInSortArr(N, K, arr));
}

function searchInSortArr(N, K, arr) {
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    //console.log(mid);
    //check if the K is present
    if (arr[mid] == K) return mid;

    //if K is greater, ignore left half : ignore right half
    arr[mid] < K ? (left = mid + 1) : (right = mid - 1);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    8 25
    1 4 8 12 20 25 35 60
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
