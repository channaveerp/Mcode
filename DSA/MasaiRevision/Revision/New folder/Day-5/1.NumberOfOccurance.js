//https://oj.masaischool.com/contest/1691/problem/1

function runProgram(input) {
  // TC = O(logn)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  //console.log(arr, N, K);

  let first = findFirst(arr, N, K);
  let last = findLast(arr, N, K);
  let occurance = last - first + 1;

  console.log(occurance);
}

function findFirst(arr, N, K) {
  let low = 0;
  let high = N - 1;
  let res = -1;

  while (low <= high) {
    let mid = low + parseInt((high - low) / 2, 10);

    if (arr[mid] > K) {
      high = mid - 1;
    } else if (arr[mid] < K) {
      low = mid + 1;
    } else {
      res = mid;
      high = mid - 1;
    }
  }
  return res;
}

function findLast(arr, N, K) {
  let low = 0;
  let high = N - 1;
  let res = -1;

  while (low <= high) {
    let mid = low + parseInt((high - low) / 2, 10);

    if (arr[mid] > K) {
      high = mid - 1;
    } else if (arr[mid] < K) {
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
  6 3
  2 3 3 3 6 9
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
