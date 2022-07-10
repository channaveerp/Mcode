// same as finding indexin search in sorted and rotated arr
function runProgram(input) {
  // TC = O(logn)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  let low = 0;
  let high = N - 1;

  //console.log(N, K, arr);
  console.log(rotationCount(arr, low, high));
}

function rotationCount(arr, low, high) {
  // if array is not rotated
  if (high < low) return 0;

  // if there is only one element left
  if (high == low) return low;

  let mid = low + (high - low) / 2;

  if (mid < high && arr[mid + 1] < arr[mid]) return mid + 1;

  if (mid > low && arr[mid] < arr[mid - 1]) return mid;

  if (arr[high] > arr[mid]) {
    rotationCount(arr, low, mid - 1);
  } else {
    rotationCount(arr, mid + 1, high);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
      5 
      3 4 5 1 2
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
