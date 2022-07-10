// Selection Sort Problem
// Description

// You are given an array of N unsorted numbers. Your task is to write SELECTION SORT such that numbers present in the array gets sorted.

// USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION

function runProgram(input) {
  // TC = O(n^2)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  //console.log(N, arr);
  let ans = selectionSort(arr);
  console.log(ans.join(" "));
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      var temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
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
