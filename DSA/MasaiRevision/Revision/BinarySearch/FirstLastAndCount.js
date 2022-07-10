//https://oj.masaischool.com/contest/1563/problem/BS-3
function runProgram(input) {
  // TC = O(logn)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let [key] = input[2].trim().split(" ").map(Number);

  //console.log(N, key, arr);

  let first = findFirst(N, key, arr);
  let last = findLast(N, key, arr);
  let occurance = last - first + 1;

  console.log(first, last, occurance);
}

function findFirst(N, key, arr) {
  let low = 0;
  let high = N - 1;
  let res = -1;

  while (low <= high) {
    let mid = low + parseInt((high - low) / 2, 10);

    if (arr[mid] > key) {
      high = mid - 1;
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else {
      res = mid;
      high = mid - 1;
    }
  }

  return res;
}

function findLast(N, key, arr) {
  let low = 0;
  let high = N - 1;
  let res = -1;

  while (low <= high) {
    let mid = low + parseInt((high - low) / 2, 10);

    if (arr[mid] > key) {
      high = mid - 1;
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else {
      res = mid;
      low = mid + 1;
    }
  }
  return res;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    6
    1 1 1 2 2 2	
    1
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
